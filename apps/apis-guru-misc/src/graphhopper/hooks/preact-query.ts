import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function getPostClusterMutationKey() {
  return ['cluster', '/cluster', 'POST'] as const
}

export function getPostClusterMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$post>>>>>,
    TError,
    InferRequestType<typeof client.cluster.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClusterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cluster.$post>) {
      return parseResponse(client.cluster.$post(args, options))
    },
  })
}

export function usePostCluster<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$post>>>>>,
        TError,
        InferRequestType<typeof client.cluster.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClusterMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostClusterCalculateMutationKey() {
  return ['cluster', '/cluster/calculate', 'POST'] as const
}

export function getPostClusterCalculateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.calculate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cluster.calculate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClusterCalculateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cluster.calculate.$post>) {
      return parseResponse(client.cluster.calculate.$post(args, options))
    },
  })
}

export function usePostClusterCalculate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cluster.calculate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cluster.calculate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostClusterCalculateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getClusterSolutionJobIdQueryKey(
  args: InferRequestType<(typeof client.cluster.solution)[':jobId']['$get']>,
) {
  return ['cluster', '/cluster/solution/:jobId', args] as const
}

export function getClusterSolutionJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cluster.solution)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClusterSolutionJobIdQueryKey>
  >({
    queryKey: getClusterSolutionJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cluster.solution[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClusterSolutionJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cluster.solution)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClusterSolutionJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getClusterSolutionJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseClusterSolutionJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cluster.solution)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClusterSolutionJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getClusterSolutionJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGeocodeQueryKey(args: InferRequestType<typeof client.geocode.$get>) {
  return ['geocode', '/geocode', args] as const
}

export function getGeocodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.geocode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGeocodeQueryKey>
  >({
    queryKey: getGeocodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.geocode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGeocode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.geocode.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGeocodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGeocodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGeocode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.geocode.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGeocodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGeocodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getIsochroneQueryKey(args: InferRequestType<typeof client.isochrone.$get>) {
  return ['isochrone', '/isochrone', args] as const
}

export function getIsochroneQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.isochrone.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIsochroneQueryKey>
  >({
    queryKey: getIsochroneQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.isochrone.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useIsochrone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.isochrone.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIsochroneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getIsochroneQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseIsochrone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.isochrone.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIsochroneQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getIsochroneQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMatchMutationKey() {
  return ['match', '/match', 'POST'] as const
}

export function getPostMatchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.match.$post>>>>>,
    TError,
    InferRequestType<typeof client.match.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.match.$post>) {
      return parseResponse(client.match.$post(args, options))
    },
  })
}

export function usePostMatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.match.$post>>>>>,
        TError,
        InferRequestType<typeof client.match.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMatchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMatrixQueryKey(args: InferRequestType<typeof client.matrix.$get>) {
  return ['matrix', '/matrix', args] as const
}

export function getMatrixQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.matrix.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMatrixQueryKey>
  >({
    queryKey: getMatrixQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.matrix.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMatrix<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.matrix.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMatrixQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMatrixQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMatrix<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.matrix.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMatrixQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMatrixQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMatrixMutationKey() {
  return ['matrix', '/matrix', 'POST'] as const
}

export function getPostMatrixMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$post>>>>>,
    TError,
    InferRequestType<typeof client.matrix.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMatrixMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.matrix.$post>) {
      return parseResponse(client.matrix.$post(args, options))
    },
  })
}

export function usePostMatrix<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$post>>>>>,
        TError,
        InferRequestType<typeof client.matrix.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMatrixMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostMatrixCalculateMutationKey() {
  return ['matrix', '/matrix/calculate', 'POST'] as const
}

export function getPostMatrixCalculateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.calculate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.matrix.calculate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMatrixCalculateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.matrix.calculate.$post>) {
      return parseResponse(client.matrix.calculate.$post(args, options))
    },
  })
}

export function usePostMatrixCalculate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.matrix.calculate.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.matrix.calculate.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMatrixCalculateMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMatrixSolutionJobIdQueryKey(
  args: InferRequestType<(typeof client.matrix.solution)[':jobId']['$get']>,
) {
  return ['matrix', '/matrix/solution/:jobId', args] as const
}

export function getMatrixSolutionJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.matrix.solution)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatrixSolutionJobIdQueryKey>
  >({
    queryKey: getMatrixSolutionJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.matrix.solution[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMatrixSolutionJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.matrix.solution)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatrixSolutionJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMatrixSolutionJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMatrixSolutionJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.matrix.solution)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMatrixSolutionJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMatrixSolutionJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRouteQueryKey(args: InferRequestType<typeof client.route.$get>) {
  return ['route', '/route', args] as const
}

export function getRouteQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.route.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRouteQueryKey>
  >({
    queryKey: getRouteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.route.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRoute<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.route.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRouteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRouteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRoute<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.route.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRouteQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRouteQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRouteMutationKey() {
  return ['route', '/route', 'POST'] as const
}

export function getPostRouteMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$post>>>>>,
    TError,
    InferRequestType<typeof client.route.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRouteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.route.$post>) {
      return parseResponse(client.route.$post(args, options))
    },
  })
}

export function usePostRoute<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$post>>>>>,
        TError,
        InferRequestType<typeof client.route.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRouteMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRouteInfoQueryKey() {
  return ['route', '/route/info'] as const
}

export function getRouteInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRouteInfoQueryKey>
  >({
    queryKey: getRouteInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.route.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRouteInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRouteInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRouteInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRouteInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRouteInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRouteInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVrpMutationKey() {
  return ['vrp', '/vrp', 'POST'] as const
}

export function getPostVrpMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vrp.$post>>>>>,
    TError,
    InferRequestType<typeof client.vrp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVrpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vrp.$post>) {
      return parseResponse(client.vrp.$post(args, options))
    },
  })
}

export function usePostVrp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vrp.$post>>>>>,
        TError,
        InferRequestType<typeof client.vrp.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVrpMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostVrpOptimizeMutationKey() {
  return ['vrp', '/vrp/optimize', 'POST'] as const
}

export function getPostVrpOptimizeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vrp.optimize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.vrp.optimize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVrpOptimizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.vrp.optimize.$post>) {
      return parseResponse(client.vrp.optimize.$post(args, options))
    },
  })
}

export function usePostVrpOptimize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vrp.optimize.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.vrp.optimize.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVrpOptimizeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVrpSolutionJobIdQueryKey(
  args: InferRequestType<(typeof client.vrp.solution)[':jobId']['$get']>,
) {
  return ['vrp', '/vrp/solution/:jobId', args] as const
}

export function getVrpSolutionJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vrp.solution)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVrpSolutionJobIdQueryKey>
  >({
    queryKey: getVrpSolutionJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vrp.solution[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVrpSolutionJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vrp.solution)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVrpSolutionJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVrpSolutionJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVrpSolutionJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vrp.solution)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVrpSolutionJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVrpSolutionJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
