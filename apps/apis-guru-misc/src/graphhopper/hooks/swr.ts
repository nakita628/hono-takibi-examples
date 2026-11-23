import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getClusterKey() {
  return ['cluster'] as const
}

export function getGeocodeKey() {
  return ['geocode'] as const
}

export function getIsochroneKey() {
  return ['isochrone'] as const
}

export function getMatchKey() {
  return ['match'] as const
}

export function getMatrixKey() {
  return ['matrix'] as const
}

export function getRouteKey() {
  return ['route'] as const
}

export function getVrpKey() {
  return ['vrp'] as const
}

export function getPostClusterKey() {
  return ['cluster', '/cluster', 'POST'] as const
}

export function usePostCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.cluster.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cluster.$post> }) =>
        parseResponse(client.cluster.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClusterCalculateKey() {
  return ['cluster', '/cluster/calculate', 'POST'] as const
}

export function usePostClusterCalculate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.calculate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cluster.calculate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClusterCalculateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cluster.calculate.$post> }) =>
        parseResponse(client.cluster.calculate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClusterSolutionJobIdKey(
  args: InferRequestType<(typeof client.cluster.solution)[':jobId']['$get']>,
) {
  return ['cluster', '/cluster/solution/:jobId', args] as const
}

export function useGetClusterSolutionJobId<TError = unknown>(
  args: InferRequestType<(typeof client.cluster.solution)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>
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
        ? getGetClusterSolutionJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.solution[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClusterSolutionJobId<TError = unknown>(
  args: InferRequestType<(typeof client.cluster.solution)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>
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
        ? getGetClusterSolutionJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.solution[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGeocodeKey(args: InferRequestType<typeof client.geocode.$get>) {
  return ['geocode', '/geocode', args] as const
}

export function useGetGeocode<TError = unknown>(
  args: InferRequestType<typeof client.geocode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeocodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.geocode.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGeocode<TError = unknown>(
  args: InferRequestType<typeof client.geocode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGeocodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.geocode.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetIsochroneKey(args: InferRequestType<typeof client.isochrone.$get>) {
  return ['isochrone', '/isochrone', args] as const
}

export function useGetIsochrone<TError = unknown>(
  args: InferRequestType<typeof client.isochrone.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIsochroneKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.isochrone.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIsochrone<TError = unknown>(
  args: InferRequestType<typeof client.isochrone.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIsochroneKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.isochrone.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMatchKey() {
  return ['match', '/match', 'POST'] as const
}

export function usePostMatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.match.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.match.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.match.$post> }) =>
        parseResponse(client.match.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMatrixKey(args: InferRequestType<typeof client.matrix.$get>) {
  return ['matrix', '/matrix', args] as const
}

export function useGetMatrix<TError = unknown>(
  args: InferRequestType<typeof client.matrix.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMatrixKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.matrix.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMatrix<TError = unknown>(
  args: InferRequestType<typeof client.matrix.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMatrixKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.matrix.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostMatrixKey() {
  return ['matrix', '/matrix', 'POST'] as const
}

export function usePostMatrix<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.matrix.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMatrixKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.matrix.$post> }) =>
        parseResponse(client.matrix.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMatrixCalculateKey() {
  return ['matrix', '/matrix/calculate', 'POST'] as const
}

export function usePostMatrixCalculate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.calculate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.matrix.calculate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMatrixCalculateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.matrix.calculate.$post> }) =>
        parseResponse(client.matrix.calculate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMatrixSolutionJobIdKey(
  args: InferRequestType<(typeof client.matrix.solution)[':jobId']['$get']>,
) {
  return ['matrix', '/matrix/solution/:jobId', args] as const
}

export function useGetMatrixSolutionJobId<TError = unknown>(
  args: InferRequestType<(typeof client.matrix.solution)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>
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
        ? getGetMatrixSolutionJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.matrix.solution[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMatrixSolutionJobId<TError = unknown>(
  args: InferRequestType<(typeof client.matrix.solution)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>
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
        ? getGetMatrixSolutionJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.matrix.solution[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRouteKey(args: InferRequestType<typeof client.route.$get>) {
  return ['route', '/route', args] as const
}

export function useGetRoute<TError = unknown>(
  args: InferRequestType<typeof client.route.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRouteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.route.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRoute<TError = unknown>(
  args: InferRequestType<typeof client.route.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRouteKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.route.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostRouteKey() {
  return ['route', '/route', 'POST'] as const
}

export function usePostRoute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.route.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRouteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.route.$post> }) =>
        parseResponse(client.route.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRouteInfoKey() {
  return ['route', '/route/info'] as const
}

export function useGetRouteInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRouteInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.route.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRouteInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRouteInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.route.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostVrpKey() {
  return ['vrp', '/vrp', 'POST'] as const
}

export function usePostVrp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vrp.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.vrp.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVrpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vrp.$post> }) =>
        parseResponse(client.vrp.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostVrpOptimizeKey() {
  return ['vrp', '/vrp/optimize', 'POST'] as const
}

export function usePostVrpOptimize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vrp.optimize.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.vrp.optimize.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostVrpOptimizeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.vrp.optimize.$post> }) =>
        parseResponse(client.vrp.optimize.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetVrpSolutionJobIdKey(
  args: InferRequestType<(typeof client.vrp.solution)[':jobId']['$get']>,
) {
  return ['vrp', '/vrp/solution/:jobId', args] as const
}

export function useGetVrpSolutionJobId<TError = unknown>(
  args: InferRequestType<(typeof client.vrp.solution)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>>
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
        ? getGetVrpSolutionJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vrp.solution[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVrpSolutionJobId<TError = unknown>(
  args: InferRequestType<(typeof client.vrp.solution)[':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>>
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
        ? getGetVrpSolutionJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vrp.solution[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
