import { createQuery, queryOptions } from '@tanstack/solid-query'
import type { UndefinedInitialDataOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3Key() {
  return ['v3'] as const
}

export function getV3DeparturesRouteTypeRouteTypeStopStopIdQueryKey(
  args: InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
  >,
) {
  return ['v3', '/v3/departures/route_type/:route_type/stop/:stop_id', args] as const
}

export function getV3DeparturesRouteTypeRouteTypeStopStopIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DeparturesRouteTypeRouteTypeStopStopIdQueryKey>
  >({
    queryKey: getV3DeparturesRouteTypeRouteTypeStopStopIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.departures.route_type[':route_type'].stop[':stop_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3DeparturesRouteTypeRouteTypeStopStopId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3DeparturesRouteTypeRouteTypeStopStopIdQueryKey>
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
      ...getV3DeparturesRouteTypeRouteTypeStopStopIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdQueryKey(
  args: InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
  >,
) {
  return [
    'v3',
    '/v3/departures/route_type/:route_type/stop/:stop_id/route/:route_id',
    args,
  ] as const
}

export function getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdQueryKey>
  >({
    queryKey: getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.departures.route_type[':route_type'].stop[':stop_id'].route[':route_id'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdQueryKey>
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
      ...getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV3DirectionsRouteRouteIdQueryKey(
  args: InferRequestType<(typeof client.v3.directions.route)[':route_id']['$get']>,
) {
  return ['v3', '/v3/directions/route/:route_id', args] as const
}

export function getV3DirectionsRouteRouteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.directions.route)[':route_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.directions.route)[':route_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.directions.route)[':route_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DirectionsRouteRouteIdQueryKey>
  >({
    queryKey: getV3DirectionsRouteRouteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.directions.route[':route_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3DirectionsRouteRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.directions.route)[':route_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.directions.route)[':route_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.directions.route)[':route_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3DirectionsRouteRouteIdQueryKey>
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
      ...getV3DirectionsRouteRouteIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3DirectionsDirectionIdQueryKey(
  args: InferRequestType<(typeof client.v3.directions)[':direction_id']['$get']>,
) {
  return ['v3', '/v3/directions/:direction_id', args] as const
}

export function getV3DirectionsDirectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.directions)[':direction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.directions)[':direction_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.directions)[':direction_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DirectionsDirectionIdQueryKey>
  >({
    queryKey: getV3DirectionsDirectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.directions[':direction_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3DirectionsDirectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.directions)[':direction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.directions)[':direction_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.directions)[':direction_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3DirectionsDirectionIdQueryKey>
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
      ...getV3DirectionsDirectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3DirectionsDirectionIdRouteTypeRouteTypeQueryKey(
  args: InferRequestType<
    (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
  >,
) {
  return ['v3', '/v3/directions/:direction_id/route_type/:route_type', args] as const
}

export function getV3DirectionsDirectionIdRouteTypeRouteTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DirectionsDirectionIdRouteTypeRouteTypeQueryKey>
  >({
    queryKey: getV3DirectionsDirectionIdRouteTypeRouteTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.directions[':direction_id'].route_type[':route_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3DirectionsDirectionIdRouteTypeRouteType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3DirectionsDirectionIdRouteTypeRouteTypeQueryKey>
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
      ...getV3DirectionsDirectionIdRouteTypeRouteTypeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV3DisruptionsQueryKey(
  args: InferRequestType<typeof client.v3.disruptions.$get>,
) {
  return ['v3', '/v3/disruptions', args] as const
}

export function getV3DisruptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.disruptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3DisruptionsQueryKey>
  >({
    queryKey: getV3DisruptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.disruptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Disruptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.disruptions.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3DisruptionsQueryKey>
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
    return { ...getV3DisruptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3DisruptionsModesQueryKey(
  args: InferRequestType<typeof client.v3.disruptions.modes.$get>,
) {
  return ['v3', '/v3/disruptions/modes', args] as const
}

export function getV3DisruptionsModesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.modes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.disruptions.modes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.modes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3DisruptionsModesQueryKey>
  >({
    queryKey: getV3DisruptionsModesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.disruptions.modes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3DisruptionsModes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.modes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.disruptions.modes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.modes.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3DisruptionsModesQueryKey>
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
    return { ...getV3DisruptionsModesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3DisruptionsRouteRouteIdQueryKey(
  args: InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['$get']>,
) {
  return ['v3', '/v3/disruptions/route/:route_id', args] as const
}

export function getV3DisruptionsRouteRouteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.disruptions.route)[':route_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.disruptions.route)[':route_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DisruptionsRouteRouteIdQueryKey>
  >({
    queryKey: getV3DisruptionsRouteRouteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.disruptions.route[':route_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3DisruptionsRouteRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.disruptions.route)[':route_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.disruptions.route)[':route_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3DisruptionsRouteRouteIdQueryKey>
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
      ...getV3DisruptionsRouteRouteIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3DisruptionsRouteRouteIdStopStopIdQueryKey(
  args: InferRequestType<
    (typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']
  >,
) {
  return ['v3', '/v3/disruptions/route/:route_id/stop/:stop_id', args] as const
}

export function getV3DisruptionsRouteRouteIdStopStopIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DisruptionsRouteRouteIdStopStopIdQueryKey>
  >({
    queryKey: getV3DisruptionsRouteRouteIdStopStopIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.disruptions.route[':route_id'].stop[':stop_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3DisruptionsRouteRouteIdStopStopId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3DisruptionsRouteRouteIdStopStopIdQueryKey>
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
      ...getV3DisruptionsRouteRouteIdStopStopIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3DisruptionsStopStopIdQueryKey(
  args: InferRequestType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>,
) {
  return ['v3', '/v3/disruptions/stop/:stop_id', args] as const
}

export function getV3DisruptionsStopStopIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DisruptionsStopStopIdQueryKey>
  >({
    queryKey: getV3DisruptionsStopStopIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.disruptions.stop[':stop_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3DisruptionsStopStopId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3DisruptionsStopStopIdQueryKey>
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
      ...getV3DisruptionsStopStopIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3DisruptionsDisruptionIdQueryKey(
  args: InferRequestType<(typeof client.v3.disruptions)[':disruption_id']['$get']>,
) {
  return ['v3', '/v3/disruptions/:disruption_id', args] as const
}

export function getV3DisruptionsDisruptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.disruptions)[':disruption_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.disruptions)[':disruption_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.disruptions)[':disruption_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DisruptionsDisruptionIdQueryKey>
  >({
    queryKey: getV3DisruptionsDisruptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.disruptions[':disruption_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3DisruptionsDisruptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.disruptions)[':disruption_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.disruptions)[':disruption_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.disruptions)[':disruption_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3DisruptionsDisruptionIdQueryKey>
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
      ...getV3DisruptionsDisruptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneQueryKey(
  args: InferRequestType<
    (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
  >,
) {
  return ['v3', '/v3/fare_estimate/min_zone/:minZone/max_zone/:maxZone', args] as const
}

export function getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneQueryKey>
  >({
    queryKey: getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.fare_estimate.min_zone[':minZone'].max_zone[':maxZone'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3FareEstimateMinZoneMinZoneMaxZoneMaxZone<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneQueryKey>
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
      ...getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV3OutletsQueryKey(args: InferRequestType<typeof client.v3.outlets.$get>) {
  return ['v3', '/v3/outlets', args] as const
}

export function getV3OutletsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.outlets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.outlets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.outlets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3OutletsQueryKey>
  >({
    queryKey: getV3OutletsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.outlets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Outlets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.outlets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.outlets.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.outlets.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3OutletsQueryKey>
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
    return { ...getV3OutletsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3OutletsLocationLatitudeLongitudeQueryKey(
  args: InferRequestType<(typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']>,
) {
  return ['v3', '/v3/outlets/location/:latitude,{longitude}', args] as const
}

export function getV3OutletsLocationLatitudeLongitudeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3OutletsLocationLatitudeLongitudeQueryKey>
  >({
    queryKey: getV3OutletsLocationLatitudeLongitudeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.outlets.location[':latitude,{longitude}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3OutletsLocationLatitudeLongitude<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3OutletsLocationLatitudeLongitudeQueryKey>
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
      ...getV3OutletsLocationLatitudeLongitudeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3PatternRunRunRefRouteTypeRouteTypeQueryKey(
  args: InferRequestType<
    (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
  >,
) {
  return ['v3', '/v3/pattern/run/:run_ref/route_type/:route_type', args] as const
}

export function getV3PatternRunRunRefRouteTypeRouteTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PatternRunRunRefRouteTypeRouteTypeQueryKey>
  >({
    queryKey: getV3PatternRunRunRefRouteTypeRouteTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.pattern.run[':run_ref'].route_type[':route_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3PatternRunRunRefRouteTypeRouteType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3PatternRunRunRefRouteTypeRouteTypeQueryKey>
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
      ...getV3PatternRunRunRefRouteTypeRouteTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3RouteTypesQueryKey(args: InferRequestType<typeof client.v3.route_types.$get>) {
  return ['v3', '/v3/route_types', args] as const
}

export function getV3RouteTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.route_types.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.route_types.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.route_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3RouteTypesQueryKey>
  >({
    queryKey: getV3RouteTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.route_types.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3RouteTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.route_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.route_types.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.route_types.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3RouteTypesQueryKey>
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
    return { ...getV3RouteTypesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3RoutesQueryKey(args: InferRequestType<typeof client.v3.routes.$get>) {
  return ['v3', '/v3/routes', args] as const
}

export function getV3RoutesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.routes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.routes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.routes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3RoutesQueryKey>
  >({
    queryKey: getV3RoutesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.routes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3Routes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.routes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.routes.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.routes.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV3RoutesQueryKey>
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
    return { ...getV3RoutesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3RoutesRouteIdQueryKey(
  args: InferRequestType<(typeof client.v3.routes)[':route_id']['$get']>,
) {
  return ['v3', '/v3/routes/:route_id', args] as const
}

export function getV3RoutesRouteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.routes)[':route_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.routes)[':route_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.routes)[':route_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3RoutesRouteIdQueryKey>
  >({
    queryKey: getV3RoutesRouteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.routes[':route_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3RoutesRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.routes)[':route_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.routes)[':route_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.routes)[':route_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3RoutesRouteIdQueryKey>
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
    return { ...getV3RoutesRouteIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3RunsRouteRouteIdQueryKey(
  args: InferRequestType<(typeof client.v3.runs.route)[':route_id']['$get']>,
) {
  return ['v3', '/v3/runs/route/:route_id', args] as const
}

export function getV3RunsRouteRouteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs.route)[':route_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.runs.route)[':route_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.runs.route)[':route_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3RunsRouteRouteIdQueryKey>
  >({
    queryKey: getV3RunsRouteRouteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.runs.route[':route_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3RunsRouteRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs.route)[':route_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.runs.route)[':route_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.runs.route)[':route_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3RunsRouteRouteIdQueryKey>
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
    return { ...getV3RunsRouteRouteIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3RunsRouteRouteIdRouteTypeRouteTypeQueryKey(
  args: InferRequestType<
    (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
  >,
) {
  return ['v3', '/v3/runs/route/:route_id/route_type/:route_type', args] as const
}

export function getV3RunsRouteRouteIdRouteTypeRouteTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3RunsRouteRouteIdRouteTypeRouteTypeQueryKey>
  >({
    queryKey: getV3RunsRouteRouteIdRouteTypeRouteTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.runs.route[':route_id'].route_type[':route_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3RunsRouteRouteIdRouteTypeRouteType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3RunsRouteRouteIdRouteTypeRouteTypeQueryKey>
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
      ...getV3RunsRouteRouteIdRouteTypeRouteTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3RunsRunRefQueryKey(
  args: InferRequestType<(typeof client.v3.runs)[':run_ref']['$get']>,
) {
  return ['v3', '/v3/runs/:run_ref', args] as const
}

export function getV3RunsRunRefQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs)[':run_ref']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.runs)[':run_ref']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs)[':run_ref']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3RunsRunRefQueryKey>
  >({
    queryKey: getV3RunsRunRefQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.runs[':run_ref'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV3RunsRunRef<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs)[':run_ref']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.runs)[':run_ref']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs)[':run_ref']['$get']>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3RunsRunRefQueryKey>
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
    return { ...getV3RunsRunRefQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3RunsRunRefRouteTypeRouteTypeQueryKey(
  args: InferRequestType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>,
) {
  return ['v3', '/v3/runs/:run_ref/route_type/:route_type', args] as const
}

export function getV3RunsRunRefRouteTypeRouteTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3RunsRunRefRouteTypeRouteTypeQueryKey>
  >({
    queryKey: getV3RunsRunRefRouteTypeRouteTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.runs[':run_ref'].route_type[':route_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3RunsRunRefRouteTypeRouteType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3RunsRunRefRouteTypeRouteTypeQueryKey>
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
      ...getV3RunsRunRefRouteTypeRouteTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3SearchSearchTermQueryKey(
  args: InferRequestType<(typeof client.v3.search)[':search_term']['$get']>,
) {
  return ['v3', '/v3/search/:search_term', args] as const
}

export function getV3SearchSearchTermQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.search)[':search_term']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.search)[':search_term']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.search)[':search_term']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SearchSearchTermQueryKey>
  >({
    queryKey: getV3SearchSearchTermQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.search[':search_term'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3SearchSearchTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.search)[':search_term']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.search)[':search_term']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.search)[':search_term']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3SearchSearchTermQueryKey>
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
    return { ...getV3SearchSearchTermQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV3StopsLocationLatitudeLongitudeQueryKey(
  args: InferRequestType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>,
) {
  return ['v3', '/v3/stops/location/:latitude,{longitude}', args] as const
}

export function getV3StopsLocationLatitudeLongitudeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StopsLocationLatitudeLongitudeQueryKey>
  >({
    queryKey: getV3StopsLocationLatitudeLongitudeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.stops.location[':latitude,{longitude}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3StopsLocationLatitudeLongitude<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3StopsLocationLatitudeLongitudeQueryKey>
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
      ...getV3StopsLocationLatitudeLongitudeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3StopsRouteRouteIdRouteTypeRouteTypeQueryKey(
  args: InferRequestType<
    (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
  >,
) {
  return ['v3', '/v3/stops/route/:route_id/route_type/:route_type', args] as const
}

export function getV3StopsRouteRouteIdRouteTypeRouteTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StopsRouteRouteIdRouteTypeRouteTypeQueryKey>
  >({
    queryKey: getV3StopsRouteRouteIdRouteTypeRouteTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.stops.route[':route_id'].route_type[':route_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3StopsRouteRouteIdRouteTypeRouteType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3StopsRouteRouteIdRouteTypeRouteTypeQueryKey>
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
      ...getV3StopsRouteRouteIdRouteTypeRouteTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV3StopsStopIdRouteTypeRouteTypeQueryKey(
  args: InferRequestType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>,
) {
  return ['v3', '/v3/stops/:stop_id/route_type/:route_type', args] as const
}

export function getV3StopsStopIdRouteTypeRouteTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StopsStopIdRouteTypeRouteTypeQueryKey>
  >({
    queryKey: getV3StopsStopIdRouteTypeRouteTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.stops[':stop_id'].route_type[':route_type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV3StopsStopIdRouteTypeRouteType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV3StopsStopIdRouteTypeRouteTypeQueryKey>
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
      ...getV3StopsStopIdRouteTypeRouteTypeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
