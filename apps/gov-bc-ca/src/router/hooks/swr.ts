import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getDirectionsOutputFormatKey() {
  return ['directions.{outputFormat}'] as const
}

export function getDistanceKey() {
  return ['distance'] as const
}

export function getDistanceOutputFormatKey() {
  return ['distance.{outputFormat}'] as const
}

export function getOptimalDirectionsOutputFormatKey() {
  return ['optimalDirections.{outputFormat}'] as const
}

export function getOptimalRouteOutputFormatKey() {
  return ['optimalRoute.{outputFormat}'] as const
}

export function getRouteOutputFormatKey() {
  return ['route.{outputFormat}'] as const
}

export function getTruckKey() {
  return ['truck'] as const
}

export function getGetDirectionsOutputFormatKey(
  args: InferRequestType<(typeof client)['directions.{outputFormat}']['$get']>,
) {
  return ['directions.{outputFormat}', '/directions.{outputFormat}', args] as const
}

export function useGetDirectionsOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['directions.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['directions.{outputFormat}']['$get']>>
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
        ? getGetDirectionsOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['directions.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['directions.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDirectionsOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['directions.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['directions.{outputFormat}']['$get']>>
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
        ? getGetDirectionsOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['directions.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['directions.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDirectionsOutputFormatKey() {
  return ['directions.{outputFormat}', '/directions.{outputFormat}', 'POST'] as const
}

export function usePostDirectionsOutputFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['directions.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['directions.{outputFormat}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDirectionsOutputFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['directions.{outputFormat}']['$post']> },
      ) => parseResponse(client['directions.{outputFormat}'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDistanceOutputFormatKey(
  args: InferRequestType<(typeof client)['distance.{outputFormat}']['$get']>,
) {
  return ['distance.{outputFormat}', '/distance.{outputFormat}', args] as const
}

export function useGetDistanceOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['distance.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['distance.{outputFormat}']['$get']>>
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
        ? getGetDistanceOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['distance.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['distance.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistanceOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['distance.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['distance.{outputFormat}']['$get']>>
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
        ? getGetDistanceOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['distance.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['distance.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDistanceOutputFormatKey() {
  return ['distance.{outputFormat}', '/distance.{outputFormat}', 'POST'] as const
}

export function usePostDistanceOutputFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['distance.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['distance.{outputFormat}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDistanceOutputFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['distance.{outputFormat}']['$post']> },
      ) => parseResponse(client['distance.{outputFormat}'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDistanceBetweenPairsOutputFormatKey(
  args: InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>,
) {
  return ['distance', '/distance/betweenPairs.{outputFormat}', args] as const
}

export function useGetDistanceBetweenPairsOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>>
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
        ? getGetDistanceBetweenPairsOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.distance['betweenPairs.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDistanceBetweenPairsOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>>
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
        ? getGetDistanceBetweenPairsOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.distance)['betweenPairs.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.distance['betweenPairs.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDistanceBetweenPairsOutputFormatKey() {
  return ['distance', '/distance/betweenPairs.{outputFormat}', 'POST'] as const
}

export function usePostDistanceBetweenPairsOutputFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.distance)['betweenPairs.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDistanceBetweenPairsOutputFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.distance)['betweenPairs.{outputFormat}']['$post']>
        },
      ) => parseResponse(client.distance['betweenPairs.{outputFormat}'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOptimalDirectionsOutputFormatKey(
  args: InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$get']>,
) {
  return ['optimalDirections.{outputFormat}', '/optimalDirections.{outputFormat}', args] as const
}

export function useGetOptimalDirectionsOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['optimalDirections.{outputFormat}']['$get']>>
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
        ? getGetOptimalDirectionsOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['optimalDirections.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['optimalDirections.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptimalDirectionsOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['optimalDirections.{outputFormat}']['$get']>>
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
        ? getGetOptimalDirectionsOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['optimalDirections.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['optimalDirections.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOptimalDirectionsOutputFormatKey() {
  return ['optimalDirections.{outputFormat}', '/optimalDirections.{outputFormat}', 'POST'] as const
}

export function usePostOptimalDirectionsOutputFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['optimalDirections.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOptimalDirectionsOutputFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['optimalDirections.{outputFormat}']['$post']> },
      ) => parseResponse(client['optimalDirections.{outputFormat}'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOptimalRouteOutputFormatKey(
  args: InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$get']>,
) {
  return ['optimalRoute.{outputFormat}', '/optimalRoute.{outputFormat}', args] as const
}

export function useGetOptimalRouteOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['optimalRoute.{outputFormat}']['$get']>>
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
        ? getGetOptimalRouteOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['optimalRoute.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['optimalRoute.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOptimalRouteOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['optimalRoute.{outputFormat}']['$get']>>
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
        ? getGetOptimalRouteOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['optimalRoute.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['optimalRoute.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOptimalRouteOutputFormatKey() {
  return ['optimalRoute.{outputFormat}', '/optimalRoute.{outputFormat}', 'POST'] as const
}

export function usePostOptimalRouteOutputFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['optimalRoute.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOptimalRouteOutputFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['optimalRoute.{outputFormat}']['$post']> },
      ) => parseResponse(client['optimalRoute.{outputFormat}'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRouteOutputFormatKey(
  args: InferRequestType<(typeof client)['route.{outputFormat}']['$get']>,
) {
  return ['route.{outputFormat}', '/route.{outputFormat}', args] as const
}

export function useGetRouteOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['route.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['route.{outputFormat}']['$get']>>>
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
        ? getGetRouteOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['route.{outputFormat}']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['route.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRouteOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client)['route.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['route.{outputFormat}']['$get']>>>
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
        ? getGetRouteOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['route.{outputFormat}']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['route.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRouteOutputFormatKey() {
  return ['route.{outputFormat}', '/route.{outputFormat}', 'POST'] as const
}

export function usePostRouteOutputFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['route.{outputFormat}']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['route.{outputFormat}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRouteOutputFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['route.{outputFormat}']['$post']> },
      ) => parseResponse(client['route.{outputFormat}'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTruckDirectionsOutputFormatKey(
  args: InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$get']>,
) {
  return ['truck', '/truck/directions.{outputFormat}', args] as const
}

export function useGetTruckDirectionsOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['directions.{outputFormat}']['$get']>>
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
        ? getGetTruckDirectionsOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['directions.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.truck['directions.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTruckDirectionsOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['directions.{outputFormat}']['$get']>>
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
        ? getGetTruckDirectionsOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['directions.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.truck['directions.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTruckDirectionsOutputFormatKey() {
  return ['truck', '/truck/directions.{outputFormat}', 'POST'] as const
}

export function usePostTruckDirectionsOutputFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['directions.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTruckDirectionsOutputFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.truck)['directions.{outputFormat}']['$post']> },
      ) => parseResponse(client.truck['directions.{outputFormat}'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTruckDistanceOutputFormatKey(
  args: InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$get']>,
) {
  return ['truck', '/truck/distance.{outputFormat}', args] as const
}

export function useGetTruckDistanceOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['distance.{outputFormat}']['$get']>>
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
        ? getGetTruckDistanceOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['distance.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.truck['distance.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTruckDistanceOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['distance.{outputFormat}']['$get']>>
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
        ? getGetTruckDistanceOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['distance.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.truck['distance.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTruckDistanceOutputFormatKey() {
  return ['truck', '/truck/distance.{outputFormat}', 'POST'] as const
}

export function usePostTruckDistanceOutputFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['distance.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTruckDistanceOutputFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.truck)['distance.{outputFormat}']['$post']> },
      ) => parseResponse(client.truck['distance.{outputFormat}'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTruckDistanceBetweenPairsOutputFormatKey(
  args: InferRequestType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>,
) {
  return ['truck', '/truck/distance/betweenPairs.{outputFormat}', args] as const
}

export function useGetTruckDistanceBetweenPairsOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>
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
        ? getGetTruckDistanceBetweenPairsOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.truck.distance['betweenPairs.{outputFormat}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTruckDistanceBetweenPairsOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>
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
        ? getGetTruckDistanceBetweenPairsOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.truck.distance['betweenPairs.{outputFormat}'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTruckDistanceBetweenPairsOutputFormatKey() {
  return ['truck', '/truck/distance/betweenPairs.{outputFormat}', 'POST'] as const
}

export function usePostTruckDistanceBetweenPairsOutputFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.truck.distance)['betweenPairs.{outputFormat}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTruckDistanceBetweenPairsOutputFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.truck.distance)['betweenPairs.{outputFormat}']['$post']
          >
        },
      ) =>
        parseResponse(
          client.truck.distance['betweenPairs.{outputFormat}'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTruckOptimalDirectionsOutputFormatKey(
  args: InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>,
) {
  return ['truck', '/truck/optimalDirections.{outputFormat}', args] as const
}

export function useGetTruckOptimalDirectionsOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>>
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
        ? getGetTruckOptimalDirectionsOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.truck['optimalDirections.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTruckOptimalDirectionsOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>>
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
        ? getGetTruckOptimalDirectionsOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['optimalDirections.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.truck['optimalDirections.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTruckOptimalDirectionsOutputFormatKey() {
  return ['truck', '/truck/optimalDirections.{outputFormat}', 'POST'] as const
}

export function usePostTruckOptimalDirectionsOutputFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['optimalDirections.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTruckOptimalDirectionsOutputFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.truck)['optimalDirections.{outputFormat}']['$post']>
        },
      ) =>
        parseResponse(client.truck['optimalDirections.{outputFormat}'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTruckOptimalRouteOutputFormatKey(
  args: InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>,
) {
  return ['truck', '/truck/optimalRoute.{outputFormat}', args] as const
}

export function useGetTruckOptimalRouteOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>>
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
        ? getGetTruckOptimalRouteOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.truck['optimalRoute.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTruckOptimalRouteOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>>
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
        ? getGetTruckOptimalRouteOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['optimalRoute.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.truck['optimalRoute.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTruckOptimalRouteOutputFormatKey() {
  return ['truck', '/truck/optimalRoute.{outputFormat}', 'POST'] as const
}

export function usePostTruckOptimalRouteOutputFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['optimalRoute.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTruckOptimalRouteOutputFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.truck)['optimalRoute.{outputFormat}']['$post']> },
      ) => parseResponse(client.truck['optimalRoute.{outputFormat}'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTruckRouteOutputFormatKey(
  args: InferRequestType<(typeof client.truck)['route.{outputFormat}']['$get']>,
) {
  return ['truck', '/truck/route.{outputFormat}', args] as const
}

export function useGetTruckRouteOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.truck)['route.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['route.{outputFormat}']['$get']>>
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
        ? getGetTruckRouteOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['route.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.truck['route.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTruckRouteOutputFormat<TError = unknown>(
  args: InferRequestType<(typeof client.truck)['route.{outputFormat}']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['route.{outputFormat}']['$get']>>
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
        ? getGetTruckRouteOutputFormatKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.truck)['route.{outputFormat}']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.truck['route.{outputFormat}'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTruckRouteOutputFormatKey() {
  return ['truck', '/truck/route.{outputFormat}', 'POST'] as const
}

export function usePostTruckRouteOutputFormat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.truck)['route.{outputFormat}']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.truck)['route.{outputFormat}']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTruckRouteOutputFormatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.truck)['route.{outputFormat}']['$post']> },
      ) => parseResponse(client.truck['route.{outputFormat}'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
