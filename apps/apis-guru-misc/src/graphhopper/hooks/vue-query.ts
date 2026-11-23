import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.cluster.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cluster.solution)[':jobId']['$get']>>,
) {
  return ['cluster', '/cluster/solution/:jobId', toValue(args)] as const
}

export function getClusterSolutionJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cluster.solution)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClusterSolutionJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cluster.solution[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useClusterSolutionJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cluster.solution)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getClusterSolutionJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.cluster.solution)[':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClusterSolutionJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClusterSolutionJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cluster.solution[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGeocodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.geocode.$get>>,
) {
  return ['geocode', '/geocode', toValue(args)] as const
}

export function getGeocodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.geocode.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGeocodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.geocode.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGeocode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.geocode.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>
          >,
          ReturnType<typeof getGeocodeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.geocode.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGeocodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGeocodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.geocode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getIsochroneQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.isochrone.$get>>,
) {
  return ['isochrone', '/isochrone', toValue(args)] as const
}

export function getIsochroneQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.isochrone.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIsochroneQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.isochrone.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIsochrone<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.isochrone.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>
          >,
          ReturnType<typeof getIsochroneQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.isochrone.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIsochroneQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIsochroneQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.isochrone.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.match.$post>>>>>,
          TError,
          InferRequestType<typeof client.match.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getMatrixQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matrix.$get>>,
) {
  return ['matrix', '/matrix', toValue(args)] as const
}

export function getMatrixQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matrix.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatrixQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.matrix.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMatrix<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.matrix.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
          ReturnType<typeof getMatrixQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMatrixQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatrixQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.matrix.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.matrix.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.matrix.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.matrix.solution)[':jobId']['$get']>>,
) {
  return ['matrix', '/matrix/solution/:jobId', toValue(args)] as const
}

export function getMatrixSolutionJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.matrix.solution)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMatrixSolutionJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.matrix.solution[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMatrixSolutionJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.matrix.solution)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMatrixSolutionJobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.matrix.solution)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMatrixSolutionJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMatrixSolutionJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.matrix.solution[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRouteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.$get>>,
) {
  return ['route', '/route', toValue(args)] as const
}

export function getRouteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRouteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.route.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoute<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.route.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
          ReturnType<typeof getRouteQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRouteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRouteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.route.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.$post>>>>>,
          TError,
          InferRequestType<typeof client.route.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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

export function getRouteInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRouteInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.route.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRouteInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>
          >,
          ReturnType<typeof getRouteInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.route.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRouteInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRouteInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.route.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vrp.$post>>>>>,
          TError,
          InferRequestType<typeof client.vrp.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vrp.optimize.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.vrp.optimize.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrp.solution)[':jobId']['$get']>>,
) {
  return ['vrp', '/vrp/solution/:jobId', toValue(args)] as const
}

export function getVrpSolutionJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrp.solution)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVrpSolutionJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vrp.solution[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVrpSolutionJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.vrp.solution)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVrpSolutionJobIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.vrp.solution)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVrpSolutionJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVrpSolutionJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vrp.solution[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
