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

export function getV3Key() {
  return ['v3'] as const
}

export function getV3DeparturesRouteTypeRouteTypeStopStopIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
    >
  >,
) {
  return ['v3', '/v3/departures/route_type/:route_type/stop/:stop_id', toValue(args)] as const
}

export function getV3DeparturesRouteTypeRouteTypeStopStopIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3DeparturesRouteTypeRouteTypeStopStopIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.departures.route_type[':route_type'].stop[':stop_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3DeparturesRouteTypeRouteTypeStopStopId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
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
                    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
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
                    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3DeparturesRouteTypeRouteTypeStopStopIdQueryKey>
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
              (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DeparturesRouteTypeRouteTypeStopStopIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3DeparturesRouteTypeRouteTypeStopStopIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.departures.route_type[':route_type'].stop[':stop_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
    >
  >,
) {
  return [
    'v3',
    '/v3/departures/route_type/:route_type/stop/:stop_id/route/:route_id',
    toValue(args),
  ] as const
}

export function getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.departures.route_type[':route_type'].stop[':stop_id'].route[':route_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
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
                    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
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
                    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdQueryKey>
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
              (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.departures.route_type[':route_type'].stop[':stop_id'].route[':route_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV3DirectionsRouteRouteIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.directions.route)[':route_id']['$get']>
  >,
) {
  return ['v3', '/v3/directions/route/:route_id', toValue(args)] as const
}

export function getV3DirectionsRouteRouteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.directions.route)[':route_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3DirectionsRouteRouteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.directions.route[':route_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3DirectionsRouteRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.directions.route)[':route_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.directions.route)[':route_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.directions.route)[':route_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.directions.route)[':route_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3DirectionsRouteRouteIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.directions.route)[':route_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DirectionsRouteRouteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3DirectionsRouteRouteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.directions.route[':route_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3DirectionsDirectionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.directions)[':direction_id']['$get']>>,
) {
  return ['v3', '/v3/directions/:direction_id', toValue(args)] as const
}

export function getV3DirectionsDirectionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.directions)[':direction_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3DirectionsDirectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.directions[':direction_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3DirectionsDirectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.directions)[':direction_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.directions)[':direction_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.directions)[':direction_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.directions)[':direction_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3DirectionsDirectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.directions)[':direction_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DirectionsDirectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3DirectionsDirectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.directions[':direction_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3DirectionsDirectionIdRouteTypeRouteTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
    >
  >,
) {
  return ['v3', '/v3/directions/:direction_id/route_type/:route_type', toValue(args)] as const
}

export function getV3DirectionsDirectionIdRouteTypeRouteTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3DirectionsDirectionIdRouteTypeRouteTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.directions[':direction_id'].route_type[':route_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3DirectionsDirectionIdRouteTypeRouteType<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
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
                    (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
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
                    (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3DirectionsDirectionIdRouteTypeRouteTypeQueryKey>
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
              (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DirectionsDirectionIdRouteTypeRouteTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3DirectionsDirectionIdRouteTypeRouteTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.directions[':direction_id'].route_type[':route_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3DisruptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.disruptions.$get>>,
) {
  return ['v3', '/v3/disruptions', toValue(args)] as const
}

export function getV3DisruptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.disruptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3DisruptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.disruptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3Disruptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.disruptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.$get>>>>
          >,
          ReturnType<typeof getV3DisruptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3DisruptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3DisruptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.disruptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3DisruptionsModesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.disruptions.modes.$get>>,
) {
  return ['v3', '/v3/disruptions/modes', toValue(args)] as const
}

export function getV3DisruptionsModesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.disruptions.modes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3DisruptionsModesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.disruptions.modes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3DisruptionsModes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.modes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.disruptions.modes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.modes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.modes.$get>>>
            >
          >,
          ReturnType<typeof getV3DisruptionsModesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.modes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3DisruptionsModesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3DisruptionsModesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.disruptions.modes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3DisruptionsRouteRouteIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['$get']>
  >,
) {
  return ['v3', '/v3/disruptions/route/:route_id', toValue(args)] as const
}

export function getV3DisruptionsRouteRouteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3DisruptionsRouteRouteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.disruptions.route[':route_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3DisruptionsRouteRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.disruptions.route)[':route_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.disruptions.route)[':route_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.disruptions.route)[':route_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3DisruptionsRouteRouteIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.disruptions.route)[':route_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DisruptionsRouteRouteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3DisruptionsRouteRouteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.disruptions.route[':route_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3DisruptionsRouteRouteIdStopStopIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']>
  >,
) {
  return ['v3', '/v3/disruptions/route/:route_id/stop/:stop_id', toValue(args)] as const
}

export function getV3DisruptionsRouteRouteIdStopStopIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3DisruptionsRouteRouteIdStopStopIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.disruptions.route[':route_id'].stop[':stop_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3DisruptionsRouteRouteIdStopStopId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']>
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
                    (typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']
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
                    (typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3DisruptionsRouteRouteIdStopStopIdQueryKey>
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
              (typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DisruptionsRouteRouteIdStopStopIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3DisruptionsRouteRouteIdStopStopIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.disruptions.route[':route_id'].stop[':stop_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3DisruptionsStopStopIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>,
) {
  return ['v3', '/v3/disruptions/stop/:stop_id', toValue(args)] as const
}

export function getV3DisruptionsStopStopIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3DisruptionsStopStopIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.disruptions.stop[':stop_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3DisruptionsStopStopId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3DisruptionsStopStopIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DisruptionsStopStopIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3DisruptionsStopStopIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.disruptions.stop[':stop_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3DisruptionsDisruptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.disruptions)[':disruption_id']['$get']>
  >,
) {
  return ['v3', '/v3/disruptions/:disruption_id', toValue(args)] as const
}

export function getV3DisruptionsDisruptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.disruptions)[':disruption_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3DisruptionsDisruptionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.disruptions[':disruption_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3DisruptionsDisruptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.disruptions)[':disruption_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.disruptions)[':disruption_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.disruptions)[':disruption_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.disruptions)[':disruption_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3DisruptionsDisruptionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.disruptions)[':disruption_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3DisruptionsDisruptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3DisruptionsDisruptionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.disruptions[':disruption_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
    >
  >,
) {
  return ['v3', '/v3/fare_estimate/min_zone/:minZone/max_zone/:maxZone', toValue(args)] as const
}

export function getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.fare_estimate.min_zone[':minZone'].max_zone[':maxZone'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3FareEstimateMinZoneMinZoneMaxZoneMaxZone<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
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
                    (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
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
                    (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneQueryKey>
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
              (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.fare_estimate.min_zone[':minZone'].max_zone[':maxZone'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3OutletsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.outlets.$get>>,
) {
  return ['v3', '/v3/outlets', toValue(args)] as const
}

export function getV3OutletsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.outlets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3OutletsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.outlets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Outlets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.outlets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.outlets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.outlets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.outlets.$get>>>>
          >,
          ReturnType<typeof getV3OutletsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.outlets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3OutletsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3OutletsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.outlets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3OutletsLocationLatitudeLongitudeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']>
  >,
) {
  return ['v3', '/v3/outlets/location/:latitude,{longitude}', toValue(args)] as const
}

export function getV3OutletsLocationLatitudeLongitudeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3OutletsLocationLatitudeLongitudeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.outlets.location[':latitude,{longitude}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3OutletsLocationLatitudeLongitude<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV3OutletsLocationLatitudeLongitudeQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.outlets.location)[':latitude,{longitude}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3OutletsLocationLatitudeLongitudeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3OutletsLocationLatitudeLongitudeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.outlets.location[':latitude,{longitude}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3PatternRunRunRefRouteTypeRouteTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
    >
  >,
) {
  return ['v3', '/v3/pattern/run/:run_ref/route_type/:route_type', toValue(args)] as const
}

export function getV3PatternRunRunRefRouteTypeRouteTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PatternRunRunRefRouteTypeRouteTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.pattern.run[':run_ref'].route_type[':route_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3PatternRunRunRefRouteTypeRouteType<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
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
                    (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
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
                    (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3PatternRunRunRefRouteTypeRouteTypeQueryKey>
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
              (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PatternRunRunRefRouteTypeRouteTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PatternRunRunRefRouteTypeRouteTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.pattern.run[':run_ref'].route_type[':route_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3RouteTypesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.route_types.$get>>,
) {
  return ['v3', '/v3/route_types', toValue(args)] as const
}

export function getV3RouteTypesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.route_types.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3RouteTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.route_types.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3RouteTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.route_types.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.route_types.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.route_types.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.route_types.$get>>>>
          >,
          ReturnType<typeof getV3RouteTypesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.route_types.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3RouteTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3RouteTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.route_types.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3RoutesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.routes.$get>>,
) {
  return ['v3', '/v3/routes', toValue(args)] as const
}

export function getV3RoutesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.routes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3RoutesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.routes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Routes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.routes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.routes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.routes.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.routes.$get>>>>
          >,
          ReturnType<typeof getV3RoutesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.routes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3RoutesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3RoutesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.routes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3RoutesRouteIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.routes)[':route_id']['$get']>>,
) {
  return ['v3', '/v3/routes/:route_id', toValue(args)] as const
}

export function getV3RoutesRouteIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.routes)[':route_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3RoutesRouteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.routes[':route_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3RoutesRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.routes)[':route_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.routes)[':route_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.routes)[':route_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.routes)[':route_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3RoutesRouteIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.routes)[':route_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3RoutesRouteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3RoutesRouteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.routes[':route_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3RunsRouteRouteIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.runs.route)[':route_id']['$get']>>,
) {
  return ['v3', '/v3/runs/route/:route_id', toValue(args)] as const
}

export function getV3RunsRouteRouteIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.runs.route)[':route_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3RunsRouteRouteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.runs.route[':route_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3RunsRouteRouteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs.route)[':route_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.runs.route)[':route_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.runs.route)[':route_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.runs.route)[':route_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3RunsRouteRouteIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.runs.route)[':route_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3RunsRouteRouteIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3RunsRouteRouteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.runs.route[':route_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3RunsRouteRouteIdRouteTypeRouteTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
    >
  >,
) {
  return ['v3', '/v3/runs/route/:route_id/route_type/:route_type', toValue(args)] as const
}

export function getV3RunsRouteRouteIdRouteTypeRouteTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3RunsRouteRouteIdRouteTypeRouteTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.runs.route[':route_id'].route_type[':route_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3RunsRouteRouteIdRouteTypeRouteType<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
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
                    (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
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
                    (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3RunsRouteRouteIdRouteTypeRouteTypeQueryKey>
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
              (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3RunsRouteRouteIdRouteTypeRouteTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3RunsRouteRouteIdRouteTypeRouteTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.runs.route[':route_id'].route_type[':route_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3RunsRunRefQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.runs)[':run_ref']['$get']>>,
) {
  return ['v3', '/v3/runs/:run_ref', toValue(args)] as const
}

export function getV3RunsRunRefQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.runs)[':run_ref']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3RunsRunRefQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.runs[':run_ref'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3RunsRunRef<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs)[':run_ref']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.runs)[':run_ref']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs)[':run_ref']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs)[':run_ref']['$get']>>>
            >
          >,
          ReturnType<typeof getV3RunsRunRefQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs)[':run_ref']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3RunsRunRefQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3RunsRunRefQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.runs[':run_ref'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3RunsRunRefRouteTypeRouteTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>
  >,
) {
  return ['v3', '/v3/runs/:run_ref/route_type/:route_type', toValue(args)] as const
}

export function getV3RunsRunRefRouteTypeRouteTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3RunsRunRefRouteTypeRouteTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.runs[':run_ref'].route_type[':route_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3RunsRunRefRouteTypeRouteType<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>
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
                    (typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']
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
                    (typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3RunsRunRefRouteTypeRouteTypeQueryKey>
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
            ReturnType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3RunsRunRefRouteTypeRouteTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3RunsRunRefRouteTypeRouteTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.runs[':run_ref'].route_type[':route_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3SearchSearchTermQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.search)[':search_term']['$get']>>,
) {
  return ['v3', '/v3/search/:search_term', toValue(args)] as const
}

export function getV3SearchSearchTermQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.search)[':search_term']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3SearchSearchTermQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.search[':search_term'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3SearchSearchTerm<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.search)[':search_term']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.search)[':search_term']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.search)[':search_term']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.search)[':search_term']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3SearchSearchTermQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.search)[':search_term']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SearchSearchTermQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3SearchSearchTermQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.search[':search_term'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3StopsLocationLatitudeLongitudeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>
  >,
) {
  return ['v3', '/v3/stops/location/:latitude,{longitude}', toValue(args)] as const
}

export function getV3StopsLocationLatitudeLongitudeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3StopsLocationLatitudeLongitudeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.stops.location[':latitude,{longitude}'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3StopsLocationLatitudeLongitude<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV3StopsLocationLatitudeLongitudeQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.stops.location)[':latitude,{longitude}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StopsLocationLatitudeLongitudeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3StopsLocationLatitudeLongitudeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.stops.location[':latitude,{longitude}'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3StopsRouteRouteIdRouteTypeRouteTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
    >
  >,
) {
  return ['v3', '/v3/stops/route/:route_id/route_type/:route_type', toValue(args)] as const
}

export function getV3StopsRouteRouteIdRouteTypeRouteTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3StopsRouteRouteIdRouteTypeRouteTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.stops.route[':route_id'].route_type[':route_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3StopsRouteRouteIdRouteTypeRouteType<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
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
                    (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
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
                    (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3StopsRouteRouteIdRouteTypeRouteTypeQueryKey>
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
              (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StopsRouteRouteIdRouteTypeRouteTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3StopsRouteRouteIdRouteTypeRouteTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.stops.route[':route_id'].route_type[':route_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3StopsStopIdRouteTypeRouteTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>
  >,
) {
  return ['v3', '/v3/stops/:stop_id/route_type/:route_type', toValue(args)] as const
}

export function getV3StopsStopIdRouteTypeRouteTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3StopsStopIdRouteTypeRouteTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.stops[':stop_id'].route_type[':route_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3StopsStopIdRouteTypeRouteType<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>
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
                    (typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']
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
                    (typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3StopsStopIdRouteTypeRouteTypeQueryKey>
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
            ReturnType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3StopsStopIdRouteTypeRouteTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3StopsStopIdRouteTypeRouteTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.stops[':stop_id'].route_type[':route_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
