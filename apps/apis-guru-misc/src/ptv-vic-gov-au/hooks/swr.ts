import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3Key() {
  return ['v3'] as const
}

export function getGetV3DeparturesRouteTypeRouteTypeStopStopIdKey(
  args: InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
  >,
) {
  return ['v3', '/v3/departures/route_type/:route_type/stop/:stop_id', args] as const
}

export function useGetV3DeparturesRouteTypeRouteTypeStopStopId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DeparturesRouteTypeRouteTypeStopStopIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.departures.route_type[':route_type'].stop[':stop_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3DeparturesRouteTypeRouteTypeStopStopId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DeparturesRouteTypeRouteTypeStopStopIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.departures.route_type[':route_type'].stop[':stop_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdKey(
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

export function useGetV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.departures.route_type[':route_type'].stop[':stop_id'].route[':route_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v3.departures.route_type)[':route_type']['stop'][':stop_id']['route'][':route_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DeparturesRouteTypeRouteTypeStopStopIdRouteRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.departures.route_type[':route_type'].stop[':stop_id'].route[':route_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3DirectionsRouteRouteIdKey(
  args: InferRequestType<(typeof client.v3.directions.route)[':route_id']['$get']>,
) {
  return ['v3', '/v3/directions/route/:route_id', args] as const
}

export function useGetV3DirectionsRouteRouteId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.directions.route)[':route_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.directions.route)[':route_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DirectionsRouteRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.directions.route)[':route_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.directions.route[':route_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3DirectionsRouteRouteId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.directions.route)[':route_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.directions.route)[':route_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DirectionsRouteRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.directions.route)[':route_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.directions.route[':route_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3DirectionsDirectionIdKey(
  args: InferRequestType<(typeof client.v3.directions)[':direction_id']['$get']>,
) {
  return ['v3', '/v3/directions/:direction_id', args] as const
}

export function useGetV3DirectionsDirectionId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.directions)[':direction_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.directions)[':direction_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DirectionsDirectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.directions)[':direction_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.directions[':direction_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3DirectionsDirectionId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.directions)[':direction_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.directions)[':direction_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DirectionsDirectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.directions)[':direction_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.directions[':direction_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3DirectionsDirectionIdRouteTypeRouteTypeKey(
  args: InferRequestType<
    (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
  >,
) {
  return ['v3', '/v3/directions/:direction_id/route_type/:route_type', args] as const
}

export function useGetV3DirectionsDirectionIdRouteTypeRouteType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DirectionsDirectionIdRouteTypeRouteTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.directions[':direction_id'].route_type[':route_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3DirectionsDirectionIdRouteTypeRouteType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.directions)[':direction_id']['route_type'][':route_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DirectionsDirectionIdRouteTypeRouteTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.directions[':direction_id'].route_type[':route_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3DisruptionsKey(args: InferRequestType<typeof client.v3.disruptions.$get>) {
  return ['v3', '/v3/disruptions', args] as const
}

export function useGetV3Disruptions<TError = unknown>(
  args: InferRequestType<typeof client.v3.disruptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3DisruptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.disruptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Disruptions<TError = unknown>(
  args: InferRequestType<typeof client.v3.disruptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3DisruptionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.disruptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3DisruptionsModesKey(
  args: InferRequestType<typeof client.v3.disruptions.modes.$get>,
) {
  return ['v3', '/v3/disruptions/modes', args] as const
}

export function useGetV3DisruptionsModes<TError = unknown>(
  args: InferRequestType<typeof client.v3.disruptions.modes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.modes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DisruptionsModesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.modes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.disruptions.modes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3DisruptionsModes<TError = unknown>(
  args: InferRequestType<typeof client.v3.disruptions.modes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.modes.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DisruptionsModesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.disruptions.modes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.disruptions.modes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3DisruptionsRouteRouteIdKey(
  args: InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['$get']>,
) {
  return ['v3', '/v3/disruptions/route/:route_id', args] as const
}

export function useGetV3DisruptionsRouteRouteId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.disruptions.route)[':route_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DisruptionsRouteRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.disruptions.route)[':route_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.disruptions.route[':route_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3DisruptionsRouteRouteId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.disruptions.route)[':route_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.disruptions.route)[':route_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DisruptionsRouteRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.disruptions.route)[':route_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.disruptions.route[':route_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3DisruptionsRouteRouteIdStopStopIdKey(
  args: InferRequestType<
    (typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']
  >,
) {
  return ['v3', '/v3/disruptions/route/:route_id/stop/:stop_id', args] as const
}

export function useGetV3DisruptionsRouteRouteIdStopStopId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DisruptionsRouteRouteIdStopStopIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.disruptions.route[':route_id'].stop[':stop_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3DisruptionsRouteRouteIdStopStopId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.disruptions.route)[':route_id']['stop'][':stop_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DisruptionsRouteRouteIdStopStopIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.disruptions.route[':route_id'].stop[':stop_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3DisruptionsStopStopIdKey(
  args: InferRequestType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>,
) {
  return ['v3', '/v3/disruptions/stop/:stop_id', args] as const
}

export function useGetV3DisruptionsStopStopId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DisruptionsStopStopIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.disruptions.stop[':stop_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3DisruptionsStopStopId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DisruptionsStopStopIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.disruptions.stop)[':stop_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.disruptions.stop[':stop_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3DisruptionsDisruptionIdKey(
  args: InferRequestType<(typeof client.v3.disruptions)[':disruption_id']['$get']>,
) {
  return ['v3', '/v3/disruptions/:disruption_id', args] as const
}

export function useGetV3DisruptionsDisruptionId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.disruptions)[':disruption_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.disruptions)[':disruption_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DisruptionsDisruptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.disruptions)[':disruption_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.disruptions[':disruption_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3DisruptionsDisruptionId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.disruptions)[':disruption_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.disruptions)[':disruption_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3DisruptionsDisruptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.disruptions)[':disruption_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.disruptions[':disruption_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneKey(
  args: InferRequestType<
    (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
  >,
) {
  return ['v3', '/v3/fare_estimate/min_zone/:minZone/max_zone/:maxZone', args] as const
}

export function useGetV3FareEstimateMinZoneMinZoneMaxZoneMaxZone<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.fare_estimate.min_zone[':minZone'].max_zone[':maxZone'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3FareEstimateMinZoneMinZoneMaxZoneMaxZone<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.fare_estimate.min_zone)[':minZone']['max_zone'][':maxZone']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3FareEstimateMinZoneMinZoneMaxZoneMaxZoneKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.fare_estimate.min_zone[':minZone'].max_zone[':maxZone'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3OutletsKey(args: InferRequestType<typeof client.v3.outlets.$get>) {
  return ['v3', '/v3/outlets', args] as const
}

export function useGetV3Outlets<TError = unknown>(
  args: InferRequestType<typeof client.v3.outlets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.outlets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3OutletsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.outlets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.outlets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Outlets<TError = unknown>(
  args: InferRequestType<typeof client.v3.outlets.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.outlets.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3OutletsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.outlets.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.outlets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3OutletsLocationLatitudeLongitudeKey(
  args: InferRequestType<(typeof client.v3.outlets.location)[':latitude,:longitude']['$get']>,
) {
  return ['v3', '/v3/outlets/location/:latitude,:longitude', args] as const
}

export function useGetV3OutletsLocationLatitudeLongitude<TError = unknown>(
  args: InferRequestType<(typeof client.v3.outlets.location)[':latitude,:longitude']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.outlets.location)[':latitude,:longitude']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3OutletsLocationLatitudeLongitudeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.outlets.location)[':latitude,:longitude']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.outlets.location[':latitude,:longitude'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3OutletsLocationLatitudeLongitude<TError = unknown>(
  args: InferRequestType<(typeof client.v3.outlets.location)[':latitude,:longitude']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.outlets.location)[':latitude,:longitude']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3OutletsLocationLatitudeLongitudeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.outlets.location)[':latitude,:longitude']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.outlets.location[':latitude,:longitude'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3PatternRunRunRefRouteTypeRouteTypeKey(
  args: InferRequestType<
    (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
  >,
) {
  return ['v3', '/v3/pattern/run/:run_ref/route_type/:route_type', args] as const
}

export function useGetV3PatternRunRunRefRouteTypeRouteType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3PatternRunRunRefRouteTypeRouteTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.pattern.run[':run_ref'].route_type[':route_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PatternRunRunRefRouteTypeRouteType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.pattern.run)[':run_ref']['route_type'][':route_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3PatternRunRunRefRouteTypeRouteTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.pattern.run[':run_ref'].route_type[':route_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3RouteTypesKey(args: InferRequestType<typeof client.v3.route_types.$get>) {
  return ['v3', '/v3/route_types', args] as const
}

export function useGetV3RouteTypes<TError = unknown>(
  args: InferRequestType<typeof client.v3.route_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.route_types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3RouteTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.route_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.route_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3RouteTypes<TError = unknown>(
  args: InferRequestType<typeof client.v3.route_types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.route_types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3RouteTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.route_types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.route_types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3RoutesKey(args: InferRequestType<typeof client.v3.routes.$get>) {
  return ['v3', '/v3/routes', args] as const
}

export function useGetV3Routes<TError = unknown>(
  args: InferRequestType<typeof client.v3.routes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.routes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3RoutesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.routes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Routes<TError = unknown>(
  args: InferRequestType<typeof client.v3.routes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.routes.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3RoutesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.routes.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3RoutesRouteIdKey(
  args: InferRequestType<(typeof client.v3.routes)[':route_id']['$get']>,
) {
  return ['v3', '/v3/routes/:route_id', args] as const
}

export function useGetV3RoutesRouteId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.routes)[':route_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.routes)[':route_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3RoutesRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.routes)[':route_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.routes[':route_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3RoutesRouteId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.routes)[':route_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.routes)[':route_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3RoutesRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.routes)[':route_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.routes[':route_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3RunsRouteRouteIdKey(
  args: InferRequestType<(typeof client.v3.runs.route)[':route_id']['$get']>,
) {
  return ['v3', '/v3/runs/route/:route_id', args] as const
}

export function useGetV3RunsRouteRouteId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.runs.route)[':route_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.runs.route)[':route_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3RunsRouteRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.runs.route)[':route_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.runs.route[':route_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3RunsRouteRouteId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.runs.route)[':route_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.runs.route)[':route_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3RunsRouteRouteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.runs.route)[':route_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.runs.route[':route_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3RunsRouteRouteIdRouteTypeRouteTypeKey(
  args: InferRequestType<
    (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
  >,
) {
  return ['v3', '/v3/runs/route/:route_id/route_type/:route_type', args] as const
}

export function useGetV3RunsRouteRouteIdRouteTypeRouteType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3RunsRouteRouteIdRouteTypeRouteTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.runs.route[':route_id'].route_type[':route_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3RunsRouteRouteIdRouteTypeRouteType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.runs.route)[':route_id']['route_type'][':route_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3RunsRouteRouteIdRouteTypeRouteTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.runs.route[':route_id'].route_type[':route_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3RunsRunRefKey(
  args: InferRequestType<(typeof client.v3.runs)[':run_ref']['$get']>,
) {
  return ['v3', '/v3/runs/:run_ref', args] as const
}

export function useGetV3RunsRunRef<TError = unknown>(
  args: InferRequestType<(typeof client.v3.runs)[':run_ref']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs)[':run_ref']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3RunsRunRefKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs)[':run_ref']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.runs[':run_ref'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3RunsRunRef<TError = unknown>(
  args: InferRequestType<(typeof client.v3.runs)[':run_ref']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs)[':run_ref']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3RunsRunRefKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.runs)[':run_ref']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.runs[':run_ref'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3RunsRunRefRouteTypeRouteTypeKey(
  args: InferRequestType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>,
) {
  return ['v3', '/v3/runs/:run_ref/route_type/:route_type', args] as const
}

export function useGetV3RunsRunRefRouteTypeRouteType<TError = unknown>(
  args: InferRequestType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3RunsRunRefRouteTypeRouteTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.runs[':run_ref'].route_type[':route_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3RunsRunRefRouteTypeRouteType<TError = unknown>(
  args: InferRequestType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3RunsRunRefRouteTypeRouteTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.runs)[':run_ref']['route_type'][':route_type']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.runs[':run_ref'].route_type[':route_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3SearchSearchTermKey(
  args: InferRequestType<(typeof client.v3.search)[':search_term']['$get']>,
) {
  return ['v3', '/v3/search/:search_term', args] as const
}

export function useGetV3SearchSearchTerm<TError = unknown>(
  args: InferRequestType<(typeof client.v3.search)[':search_term']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.search)[':search_term']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchSearchTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.search)[':search_term']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search[':search_term'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SearchSearchTerm<TError = unknown>(
  args: InferRequestType<(typeof client.v3.search)[':search_term']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.search)[':search_term']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3SearchSearchTermKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.search)[':search_term']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.search[':search_term'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3StopsLocationLatitudeLongitudeKey(
  args: InferRequestType<(typeof client.v3.stops.location)[':latitude,:longitude']['$get']>,
) {
  return ['v3', '/v3/stops/location/:latitude,:longitude', args] as const
}

export function useGetV3StopsLocationLatitudeLongitude<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stops.location)[':latitude,:longitude']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stops.location)[':latitude,:longitude']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3StopsLocationLatitudeLongitudeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stops.location)[':latitude,:longitude']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.stops.location[':latitude,:longitude'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StopsLocationLatitudeLongitude<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stops.location)[':latitude,:longitude']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stops.location)[':latitude,:longitude']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3StopsLocationLatitudeLongitudeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.stops.location)[':latitude,:longitude']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.stops.location[':latitude,:longitude'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3StopsRouteRouteIdRouteTypeRouteTypeKey(
  args: InferRequestType<
    (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
  >,
) {
  return ['v3', '/v3/stops/route/:route_id/route_type/:route_type', args] as const
}

export function useGetV3StopsRouteRouteIdRouteTypeRouteType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3StopsRouteRouteIdRouteTypeRouteTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.stops.route[':route_id'].route_type[':route_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StopsRouteRouteIdRouteTypeRouteType<TError = unknown>(
  args: InferRequestType<
    (typeof client.v3.stops.route)[':route_id']['route_type'][':route_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3StopsRouteRouteIdRouteTypeRouteTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.stops.route[':route_id'].route_type[':route_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3StopsStopIdRouteTypeRouteTypeKey(
  args: InferRequestType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>,
) {
  return ['v3', '/v3/stops/:stop_id/route_type/:route_type', args] as const
}

export function useGetV3StopsStopIdRouteTypeRouteType<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3StopsStopIdRouteTypeRouteTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.stops[':stop_id'].route_type[':route_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3StopsStopIdRouteTypeRouteType<TError = unknown>(
  args: InferRequestType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV3StopsStopIdRouteTypeRouteTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.stops)[':stop_id']['route_type'][':route_type']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.stops[':stop_id'].route_type[':route_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
