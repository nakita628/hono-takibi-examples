import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getApiKeysKey() {
  return ['api-keys'] as const
}

export function getClustersKey() {
  return ['clusters'] as const
}

export function getDefaultTemplatesKey() {
  return ['default-templates'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getNodesKey() {
  return ['nodes'] as const
}

export function getSandboxesKey() {
  return ['sandboxes'] as const
}

export function getSecretsKey() {
  return ['secrets'] as const
}

export function getSnapshotsKey() {
  return ['snapshots'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getUnstableKey() {
  return ['unstable'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getVolumesKey() {
  return ['volumes'] as const
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsTeamIDMetricsQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['$get']>,
) {
  return ['teams', '/teams/:teamID/metrics', args] as const
}

export function getTeamsTeamIDMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIDMetricsQueryKey>
  >({
    queryKey: getTeamsTeamIDMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamID'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsTeamIDMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIDMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTeamsTeamIDMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIDMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIDMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTeamsTeamIDMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTeamsTeamIDMetricsMaxQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>,
) {
  return ['teams', '/teams/:teamID/metrics/max', args] as const
}

export function getTeamsTeamIDMetricsMaxQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIDMetricsMaxQueryKey>
  >({
    queryKey: getTeamsTeamIDMetricsMaxQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamID'].metrics.max.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTeamsTeamIDMetricsMax<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIDMetricsMaxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTeamsTeamIDMetricsMaxQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTeamsTeamIDMetricsMax<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':teamID']['metrics']['max']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIDMetricsMaxQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTeamsTeamIDMetricsMaxQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUnstableTeamsTeamIDStatusQueryKey(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['status']['$get']>,
) {
  return ['unstable', '/unstable/teams/:teamID/status', args] as const
}

export function getUnstableTeamsTeamIDStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableTeamsTeamIDStatusQueryKey>
  >({
    queryKey: getUnstableTeamsTeamIDStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.teams[':teamID'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableTeamsTeamIDStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['status']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableTeamsTeamIDStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableTeamsTeamIDStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableTeamsTeamIDStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['status']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableTeamsTeamIDStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableTeamsTeamIDStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUnstableTeamsTeamIDLimitsQueryKey(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>,
) {
  return ['unstable', '/unstable/teams/:teamID/limits', args] as const
}

export function getUnstableTeamsTeamIDLimitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableTeamsTeamIDLimitsQueryKey>
  >({
    queryKey: getUnstableTeamsTeamIDLimitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.teams[':teamID'].limits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableTeamsTeamIDLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableTeamsTeamIDLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableTeamsTeamIDLimitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableTeamsTeamIDLimits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.unstable.teams)[':teamID']['limits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableTeamsTeamIDLimitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableTeamsTeamIDLimitsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSandboxesQueryKey(args: InferRequestType<typeof client.sandboxes.$get>) {
  return ['sandboxes', '/sandboxes', args] as const
}

export function getSandboxesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sandboxes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSandboxesQueryKey>
  >({
    queryKey: getSandboxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandboxes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSandboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sandboxes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSandboxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSandboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sandboxes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSandboxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSandboxesMutationKey() {
  return ['sandboxes', '/sandboxes', 'POST'] as const
}

export function getPostSandboxesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$post>>>>>,
    TError,
    InferRequestType<typeof client.sandboxes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandboxes.$post>) {
      return parseResponse(client.sandboxes.$post(args, options))
    },
  })
}

export function usePostSandboxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sandboxes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2SandboxesQueryKey(args: InferRequestType<typeof client.v2.sandboxes.$get>) {
  return ['v2', '/v2/sandboxes', args] as const
}

export function getV2SandboxesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.sandboxes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2SandboxesQueryKey>
  >({
    queryKey: getV2SandboxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sandboxes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Sandboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.sandboxes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SandboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2SandboxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Sandboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.sandboxes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2SandboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2SandboxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2SandboxesMutationKey() {
  return ['v2', '/v2/sandboxes', 'POST'] as const
}

export function getPostV2SandboxesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.sandboxes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SandboxesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.sandboxes.$post>) {
      return parseResponse(client.v2.sandboxes.$post(args, options))
    },
  })
}

export function usePostV2Sandboxes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v2.sandboxes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SandboxesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSandboxesMetricsQueryKey(
  args: InferRequestType<typeof client.sandboxes.metrics.$get>,
) {
  return ['sandboxes', '/sandboxes/metrics', args] as const
}

export function getSandboxesMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.metrics.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.sandboxes.metrics.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.metrics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxesMetricsQueryKey>
  >({
    queryKey: getSandboxesMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandboxes.metrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSandboxesMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sandboxes.metrics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.metrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSandboxesMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSandboxesMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.sandboxes.metrics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.sandboxes.metrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSandboxesMetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSandboxesSandboxIDLogsQueryKey(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>,
) {
  return ['sandboxes', '/sandboxes/:sandboxID/logs', args] as const
}

export function getSandboxesSandboxIDLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxesSandboxIDLogsQueryKey>
  >({
    queryKey: getSandboxesSandboxIDLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandboxes[':sandboxID'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSandboxesSandboxIDLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesSandboxIDLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSandboxesSandboxIDLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSandboxesSandboxIDLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesSandboxIDLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSandboxesSandboxIDLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV2SandboxesSandboxIDLogsQueryKey(
  args: InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>,
) {
  return ['v2', '/v2/sandboxes/:sandboxID/logs', args] as const
}

export function getV2SandboxesSandboxIDLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SandboxesSandboxIDLogsQueryKey>
  >({
    queryKey: getV2SandboxesSandboxIDLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sandboxes[':sandboxID'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2SandboxesSandboxIDLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SandboxesSandboxIDLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2SandboxesSandboxIDLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2SandboxesSandboxIDLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['logs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SandboxesSandboxIDLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2SandboxesSandboxIDLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSandboxesSandboxIDQueryKey(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['$get']>,
) {
  return ['sandboxes', '/sandboxes/:sandboxID', args] as const
}

export function getSandboxesSandboxIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxesSandboxIDQueryKey>
  >({
    queryKey: getSandboxesSandboxIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandboxes[':sandboxID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSandboxesSandboxID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesSandboxIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSandboxesSandboxIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSandboxesSandboxID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesSandboxIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSandboxesSandboxIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSandboxesSandboxIDMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxID', 'DELETE'] as const
}

export function getDeleteSandboxesSandboxIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSandboxesSandboxIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['$delete']>) {
      return parseResponse(client.sandboxes[':sandboxID'].$delete(args, options))
    },
  })
}

export function useDeleteSandboxesSandboxID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sandboxes)[':sandboxID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSandboxesSandboxIDMutationOptions<TError, TOnMutateResult>(
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

export function getSandboxesSandboxIDMetricsQueryKey(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>,
) {
  return ['sandboxes', '/sandboxes/:sandboxID/metrics', args] as const
}

export function getSandboxesSandboxIDMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxesSandboxIDMetricsQueryKey>
  >({
    queryKey: getSandboxesSandboxIDMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandboxes[':sandboxID'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSandboxesSandboxIDMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesSandboxIDMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getSandboxesSandboxIDMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSandboxesSandboxIDMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['metrics']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxesSandboxIDMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getSandboxesSandboxIDMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUnstableSandboxesSandboxIDRecordQueryKey(
  args: InferRequestType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>,
) {
  return ['unstable', '/unstable/sandboxes/:sandboxID/record', args] as const
}

export function getUnstableSandboxesSandboxIDRecordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableSandboxesSandboxIDRecordQueryKey>
  >({
    queryKey: getUnstableSandboxesSandboxIDRecordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.sandboxes[':sandboxID'].record.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableSandboxesSandboxIDRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableSandboxesSandboxIDRecordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableSandboxesSandboxIDRecordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableSandboxesSandboxIDRecord<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.unstable.sandboxes)[':sandboxID']['record']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableSandboxesSandboxIDRecordQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableSandboxesSandboxIDRecordQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSandboxesSandboxIDPauseMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/pause', 'POST'] as const
}

export function getPostSandboxesSandboxIDPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['pause']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesSandboxIDPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['pause']['$post']>,
    ) {
      return parseResponse(client.sandboxes[':sandboxID'].pause.$post(args, options))
    },
  })
}

export function usePostSandboxesSandboxIDPause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['pause']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sandboxes)[':sandboxID']['pause']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxesSandboxIDPauseMutationOptions<TError, TOnMutateResult>(
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

export function getPostSandboxesSandboxIDResumeMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/resume', 'POST'] as const
}

export function getPostSandboxesSandboxIDResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['resume']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesSandboxIDResumeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['resume']['$post']>,
    ) {
      return parseResponse(client.sandboxes[':sandboxID'].resume.$post(args, options))
    },
  })
}

export function usePostSandboxesSandboxIDResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['resume']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sandboxes)[':sandboxID']['resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxesSandboxIDResumeMutationOptions<TError, TOnMutateResult>(
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

export function getPostSandboxesSandboxIDForkMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/fork', 'POST'] as const
}

export function getPostSandboxesSandboxIDForkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['fork']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['fork']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesSandboxIDForkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['fork']['$post']>,
    ) {
      return parseResponse(client.sandboxes[':sandboxID'].fork.$post(args, options))
    },
  })
}

export function usePostSandboxesSandboxIDFork<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['fork']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sandboxes)[':sandboxID']['fork']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxesSandboxIDForkMutationOptions<TError, TOnMutateResult>(
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

export function getPostSandboxesSandboxIDConnectMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/connect', 'POST'] as const
}

export function getPostSandboxesSandboxIDConnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['connect']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['connect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesSandboxIDConnectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['connect']['$post']>,
    ) {
      return parseResponse(client.sandboxes[':sandboxID'].connect.$post(args, options))
    },
  })
}

export function usePostSandboxesSandboxIDConnect<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['connect']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sandboxes)[':sandboxID']['connect']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxesSandboxIDConnectMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2SandboxesSandboxIDConnectMutationKey() {
  return ['v2', '/v2/sandboxes/:sandboxID/connect', 'POST'] as const
}

export function getPostV2SandboxesSandboxIDConnectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['connect']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['connect']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SandboxesSandboxIDConnectMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['connect']['$post']>,
    ) {
      return parseResponse(client.v2.sandboxes[':sandboxID'].connect.$post(args, options))
    },
  })
}

export function usePostV2SandboxesSandboxIDConnect<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.sandboxes)[':sandboxID']['connect']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.sandboxes)[':sandboxID']['connect']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2SandboxesSandboxIDConnectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSandboxesSandboxIDTimeoutMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/timeout', 'POST'] as const
}

export function getPostSandboxesSandboxIDTimeoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['timeout']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['timeout']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesSandboxIDTimeoutMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['timeout']['$post']>,
    ) {
      return parseResponse(client.sandboxes[':sandboxID'].timeout.$post(args, options))
    },
  })
}

export function usePostSandboxesSandboxIDTimeout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['timeout']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sandboxes)[':sandboxID']['timeout']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxesSandboxIDTimeoutMutationOptions<TError, TOnMutateResult>(
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

export function getPutSandboxesSandboxIDNetworkMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/network', 'PUT'] as const
}

export function getPutSandboxesSandboxIDNetworkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['network']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['network']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSandboxesSandboxIDNetworkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['network']['$put']>,
    ) {
      return parseResponse(client.sandboxes[':sandboxID'].network.$put(args, options))
    },
  })
}

export function usePutSandboxesSandboxIDNetwork<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['network']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sandboxes)[':sandboxID']['network']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSandboxesSandboxIDNetworkMutationOptions<TError, TOnMutateResult>(
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

export function getPostSandboxesSandboxIDRefreshesMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/refreshes', 'POST'] as const
}

export function getPostSandboxesSandboxIDRefreshesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['refreshes']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['refreshes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesSandboxIDRefreshesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['refreshes']['$post']>,
    ) {
      return parseResponse(client.sandboxes[':sandboxID'].refreshes.$post(args, options))
    },
  })
}

export function usePostSandboxesSandboxIDRefreshes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['refreshes']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sandboxes)[':sandboxID']['refreshes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxesSandboxIDRefreshesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSandboxesSandboxIDSnapshotsMutationKey() {
  return ['sandboxes', '/sandboxes/:sandboxID/snapshots', 'POST'] as const
}

export function getPostSandboxesSandboxIDSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['snapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandboxes)[':sandboxID']['snapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxesSandboxIDSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandboxes)[':sandboxID']['snapshots']['$post']>,
    ) {
      return parseResponse(client.sandboxes[':sandboxID'].snapshots.$post(args, options))
    },
  })
}

export function usePostSandboxesSandboxIDSnapshots<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.sandboxes)[':sandboxID']['snapshots']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.sandboxes)[':sandboxID']['snapshots']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSandboxesSandboxIDSnapshotsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSnapshotsQueryKey(args: InferRequestType<typeof client.snapshots.$get>) {
  return ['snapshots', '/snapshots', args] as const
}

export function getSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.snapshots.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSnapshotsQueryKey>
  >({
    queryKey: getSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshots.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.snapshots.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSnapshotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSnapshotsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.snapshots.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSnapshotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSnapshotsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV3TemplatesMutationKey() {
  return ['v3', '/v3/templates', 'POST'] as const
}

export function getPostV3TemplatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.templates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v3.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3TemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.templates.$post>) {
      return parseResponse(client.v3.templates.$post(args, options))
    },
  })
}

export function usePostV3Templates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.templates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v3.templates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3TemplatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2TemplatesQueryKey(args: InferRequestType<typeof client.v2.templates.$get>) {
  return ['v2', '/v2/templates', args] as const
}

export function getV2TemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2TemplatesQueryKey>
  >({
    queryKey: getV2TemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2Templates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2TemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2TemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2Templates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v2.templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2TemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2TemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTemplatesTemplateIDFilesHashQueryKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>,
) {
  return ['templates', '/templates/:templateID/files/:hash', args] as const
}

export function getTemplatesTemplateIDFilesHashQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIDFilesHashQueryKey>
  >({
    queryKey: getTemplatesTemplateIDFilesHashQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':templateID'].files[':hash'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesTemplateIDFilesHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDFilesHashQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTemplatesTemplateIDFilesHashQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTemplatesTemplateIDFilesHash<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.templates)[':templateID']['files'][':hash']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDFilesHashQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTemplatesTemplateIDFilesHashQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTemplatesQueryKey(args: InferRequestType<typeof client.templates.$get>) {
  return ['templates', '/templates', args] as const
}

export function getTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >({
    queryKey: getTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDefaultTemplatesQueryKey() {
  return ['default-templates', '/default-templates'] as const
}

export function getDefaultTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['default-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['default-templates']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDefaultTemplatesQueryKey>
  >({
    queryKey: getDefaultTemplatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['default-templates'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDefaultTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['default-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['default-templates']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDefaultTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDefaultTemplatesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDefaultTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['default-templates']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['default-templates']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDefaultTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDefaultTemplatesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUnstableTemplatesSearchQueryKey(
  args: InferRequestType<typeof client.unstable.templates.search.$get>,
) {
  return ['unstable', '/unstable/templates/search', args] as const
}

export function getUnstableTemplatesSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.templates.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.templates.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unstable.templates.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableTemplatesSearchQueryKey>
  >({
    queryKey: getUnstableTemplatesSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.templates.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableTemplatesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.templates.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.templates.search.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.unstable.templates.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableTemplatesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableTemplatesSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableTemplatesSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.templates.search.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.templates.search.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.unstable.templates.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableTemplatesSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableTemplatesSearchQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUnstableBuildsQueryKey(
  args: InferRequestType<typeof client.unstable.builds.$get>,
) {
  return ['unstable', '/unstable/builds', args] as const
}

export function getUnstableBuildsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.unstable.builds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableBuildsQueryKey>
  >({
    queryKey: getUnstableBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.builds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUnstableBuilds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.builds.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUnstableBuildsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUnstableBuilds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.builds.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUnstableBuildsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUnstableBuildsStatusesQueryKey(
  args: InferRequestType<typeof client.unstable.builds.statuses.$get>,
) {
  return ['unstable', '/unstable/builds/statuses', args] as const
}

export function getUnstableBuildsStatusesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.builds.statuses.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.statuses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableBuildsStatusesQueryKey>
  >({
    queryKey: getUnstableBuildsStatusesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.builds.statuses.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableBuildsStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.builds.statuses.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.statuses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableBuildsStatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableBuildsStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableBuildsStatuses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.statuses.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.builds.statuses.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.unstable.builds.statuses.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableBuildsStatusesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableBuildsStatusesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUnstableBuildsBuildIDQueryKey(
  args: InferRequestType<(typeof client.unstable.builds)[':buildID']['$get']>,
) {
  return ['unstable', '/unstable/builds/:buildID', args] as const
}

export function getUnstableBuildsBuildIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.unstable.builds)[':buildID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.builds)[':buildID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.unstable.builds)[':buildID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableBuildsBuildIDQueryKey>
  >({
    queryKey: getUnstableBuildsBuildIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.builds[':buildID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableBuildsBuildID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.unstable.builds)[':buildID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.builds)[':buildID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.unstable.builds)[':buildID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableBuildsBuildIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableBuildsBuildIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableBuildsBuildID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.unstable.builds)[':buildID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.builds)[':buildID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.unstable.builds)[':buildID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableBuildsBuildIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableBuildsBuildIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTemplatesTemplateIDQueryKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['$get']>,
) {
  return ['templates', '/templates/:templateID', args] as const
}

export function getTemplatesTemplateIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':templateID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':templateID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIDQueryKey>
  >({
    queryKey: getTemplatesTemplateIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':templateID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesTemplateID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':templateID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':templateID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTemplatesTemplateIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTemplatesTemplateID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':templateID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':templateID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTemplatesTemplateIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteTemplatesTemplateIDMutationKey() {
  return ['templates', '/templates/:templateID', 'DELETE'] as const
}

export function getDeleteTemplatesTemplateIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.templates)[':templateID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.templates)[':templateID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTemplatesTemplateIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':templateID']['$delete']>) {
      return parseResponse(client.templates[':templateID'].$delete(args, options))
    },
  })
}

export function useDeleteTemplatesTemplateID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.templates)[':templateID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.templates)[':templateID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTemplatesTemplateIDMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTemplatesTemplateIDMutationKey() {
  return ['templates', '/templates/:templateID', 'PATCH'] as const
}

export function getPatchTemplatesTemplateIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':templateID']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':templateID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTemplatesTemplateIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':templateID']['$patch']>) {
      return parseResponse(client.templates[':templateID'].$patch(args, options))
    },
  })
}

export function usePatchTemplatesTemplateID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':templateID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.templates)[':templateID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTemplatesTemplateIDMutationOptions<TError, TOnMutateResult>(
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

export function getTemplatesTemplateIDBuildsQueryKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['builds']['$get']>,
) {
  return ['templates', '/templates/:templateID/builds', args] as const
}

export function getTemplatesTemplateIDBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':templateID']['builds']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIDBuildsQueryKey>
  >({
    queryKey: getTemplatesTemplateIDBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':templateID'].builds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesTemplateIDBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':templateID']['builds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTemplatesTemplateIDBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTemplatesTemplateIDBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['builds']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':templateID']['builds']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTemplatesTemplateIDBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV2TemplatesTemplateIDBuildsBuildIDMutationKey() {
  return ['v2', '/v2/templates/:templateID/builds/:buildID', 'POST'] as const
}

export function getPostV2TemplatesTemplateIDBuildsBuildIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.templates)[':templateID']['builds'][':buildID']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.templates)[':templateID']['builds'][':buildID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2TemplatesTemplateIDBuildsBuildIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.templates)[':templateID']['builds'][':buildID']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.templates[':templateID'].builds[':buildID'].$post(args, options),
      )
    },
  })
}

export function usePostV2TemplatesTemplateIDBuildsBuildID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v2.templates)[':templateID']['builds'][':buildID']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.templates)[':templateID']['builds'][':buildID']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2TemplatesTemplateIDBuildsBuildIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2TemplatesTemplateIDQueryKey(
  args: InferRequestType<(typeof client.v2.templates)[':templateID']['$get']>,
) {
  return ['v2', '/v2/templates/:templateID', args] as const
}

export function getV2TemplatesTemplateIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.templates)[':templateID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2TemplatesTemplateIDQueryKey>
  >({
    queryKey: getV2TemplatesTemplateIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.templates[':templateID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2TemplatesTemplateID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.templates)[':templateID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TemplatesTemplateIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV2TemplatesTemplateIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV2TemplatesTemplateID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.templates)[':templateID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2TemplatesTemplateIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV2TemplatesTemplateIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchV2TemplatesTemplateIDMutationKey() {
  return ['v2', '/v2/templates/:templateID', 'PATCH'] as const
}

export function getPatchV2TemplatesTemplateIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.templates)[':templateID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2TemplatesTemplateIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.templates)[':templateID']['$patch']>,
    ) {
      return parseResponse(client.v2.templates[':templateID'].$patch(args, options))
    },
  })
}

export function usePatchV2TemplatesTemplateID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2.templates)[':templateID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.templates)[':templateID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2TemplatesTemplateIDMutationOptions<TError, TOnMutateResult>(
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

export function getTemplatesTemplateIDBuildsBuildIDStatusQueryKey(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
  >,
) {
  return ['templates', '/templates/:templateID/builds/:buildID/status', args] as const
}

export function getTemplatesTemplateIDBuildsBuildIDStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIDBuildsBuildIDStatusQueryKey>
  >({
    queryKey: getTemplatesTemplateIDBuildsBuildIDStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':templateID'].builds[':buildID'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesTemplateIDBuildsBuildIDStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDBuildsBuildIDStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTemplatesTemplateIDBuildsBuildIDStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTemplatesTemplateIDBuildsBuildIDStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.templates)[':templateID']['builds'][':buildID']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDBuildsBuildIDStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTemplatesTemplateIDBuildsBuildIDStatusQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTemplatesTemplateIDBuildsBuildIDLogsQueryKey(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
  >,
) {
  return ['templates', '/templates/:templateID/builds/:buildID/logs', args] as const
}

export function getTemplatesTemplateIDBuildsBuildIDLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIDBuildsBuildIDLogsQueryKey>
  >({
    queryKey: getTemplatesTemplateIDBuildsBuildIDLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':templateID'].builds[':buildID'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesTemplateIDBuildsBuildIDLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDBuildsBuildIDLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTemplatesTemplateIDBuildsBuildIDLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTemplatesTemplateIDBuildsBuildIDLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.templates)[':templateID']['builds'][':buildID']['logs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDBuildsBuildIDLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTemplatesTemplateIDBuildsBuildIDLogsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTemplatesTagsMutationKey() {
  return ['templates', '/templates/tags', 'POST'] as const
}

export function getPostTemplatesTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.tags.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.tags.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.tags.$post>) {
      return parseResponse(client.templates.tags.$post(args, options))
    },
  })
}

export function usePostTemplatesTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.tags.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.templates.tags.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplatesTagsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTemplatesTagsMutationKey() {
  return ['templates', '/templates/tags', 'DELETE'] as const
}

export function getDeleteTemplatesTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.tags.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.templates.tags.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTemplatesTagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.tags.$delete>) {
      return parseResponse(client.templates.tags.$delete(args, options))
    },
  })
}

export function useDeleteTemplatesTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.templates.tags.$delete>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.templates.tags.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTemplatesTagsMutationOptions<TError, TOnMutateResult>(
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

export function getTemplatesTemplateIDTagsQueryKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['$get']>,
) {
  return ['templates', '/templates/:templateID/tags', args] as const
}

export function getTemplatesTemplateIDTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIDTagsQueryKey>
  >({
    queryKey: getTemplatesTemplateIDTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':templateID'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesTemplateIDTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTemplatesTemplateIDTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTemplatesTemplateIDTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTemplatesTemplateIDTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTemplatesTemplateIDTagsGroupsQueryKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>,
) {
  return ['templates', '/templates/:templateID/tags/groups', args] as const
}

export function getTemplatesTemplateIDTagsGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIDTagsGroupsQueryKey>
  >({
    queryKey: getTemplatesTemplateIDTagsGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':templateID'].tags.groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesTemplateIDTagsGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDTagsGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTemplatesTemplateIDTagsGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTemplatesTemplateIDTagsGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.templates)[':templateID']['tags']['groups']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDTagsGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTemplatesTemplateIDTagsGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTemplatesTemplateIDTagsCountQueryKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['count']['$get']>,
) {
  return ['templates', '/templates/:templateID/tags/count', args] as const
}

export function getTemplatesTemplateIDTagsCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIDTagsCountQueryKey>
  >({
    queryKey: getTemplatesTemplateIDTagsCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':templateID'].tags.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesTemplateIDTagsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['count']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDTagsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTemplatesTemplateIDTagsCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTemplatesTemplateIDTagsCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['count']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['count']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDTagsCountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTemplatesTemplateIDTagsCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTemplatesTemplateIDTagsExistsQueryKey(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>,
) {
  return ['templates', '/templates/:templateID/tags/exists', args] as const
}

export function getTemplatesTemplateIDTagsExistsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIDTagsExistsQueryKey>
  >({
    queryKey: getTemplatesTemplateIDTagsExistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':templateID'].tags.exists.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesTemplateIDTagsExists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDTagsExistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTemplatesTemplateIDTagsExistsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTemplatesTemplateIDTagsExists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.templates)[':templateID']['tags']['exists']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDTagsExistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTemplatesTemplateIDTagsExistsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTemplatesTemplateIDTagsTagAssignmentsQueryKey(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
  >,
) {
  return ['templates', '/templates/:templateID/tags/:tag/assignments', args] as const
}

export function getTemplatesTemplateIDTagsTagAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesTemplateIDTagsTagAssignmentsQueryKey>
  >({
    queryKey: getTemplatesTemplateIDTagsTagAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':templateID'].tags[':tag'].assignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesTemplateIDTagsTagAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDTagsTagAssignmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTemplatesTemplateIDTagsTagAssignmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTemplatesTemplateIDTagsTagAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.templates)[':templateID']['tags'][':tag']['assignments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesTemplateIDTagsTagAssignmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTemplatesTemplateIDTagsTagAssignmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTemplatesAliasesAliasQueryKey(
  args: InferRequestType<(typeof client.templates.aliases)[':alias']['$get']>,
) {
  return ['templates', '/templates/aliases/:alias', args] as const
}

export function getTemplatesAliasesAliasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates.aliases)[':alias']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates.aliases)[':alias']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates.aliases)[':alias']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesAliasesAliasQueryKey>
  >({
    queryKey: getTemplatesAliasesAliasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.aliases[':alias'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesAliasesAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates.aliases)[':alias']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates.aliases)[':alias']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates.aliases)[':alias']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesAliasesAliasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTemplatesAliasesAliasQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTemplatesAliasesAlias<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates.aliases)[':alias']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates.aliases)[':alias']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates.aliases)[':alias']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesAliasesAliasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTemplatesAliasesAliasQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNodesQueryKey(args: InferRequestType<typeof client.nodes.$get>) {
  return ['nodes', '/nodes', args] as const
}

export function getNodesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodesQueryKey>
  >({
    queryKey: getNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNodes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNodesNodeIDQueryKey(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['$get']>,
) {
  return ['nodes', '/nodes/:nodeID', args] as const
}

export function getNodesNodeIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIDQueryKey>
  >({
    queryKey: getNodesNodeIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':nodeID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNodesNodeID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodesNodeIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodesNodeID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodesNodeIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNodesNodeIDMutationKey() {
  return ['nodes', '/nodes/:nodeID', 'POST'] as const
}

export function getPostNodesNodeIDMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.nodes)[':nodeID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodesNodeIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.nodes)[':nodeID']['$post']>) {
      return parseResponse(client.nodes[':nodeID'].$post(args, options))
    },
  })
}

export function usePostNodesNodeID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeID']['$post']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.nodes)[':nodeID']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesNodeIDMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getNodesNodeIDSandboxesQueryKey(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>,
) {
  return ['nodes', '/nodes/:nodeID/sandboxes', args] as const
}

export function getNodesNodeIDSandboxesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIDSandboxesQueryKey>
  >({
    queryKey: getNodesNodeIDSandboxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':nodeID'].sandboxes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNodesNodeIDSandboxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIDSandboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodesNodeIDSandboxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodesNodeIDSandboxes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':nodeID']['sandboxes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIDSandboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodesNodeIDSandboxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAdminTeamsTeamIDSandboxesKillMutationKey() {
  return ['admin', '/admin/teams/:teamID/sandboxes/kill', 'POST'] as const
}

export function getPostAdminTeamsTeamIDSandboxesKillMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['sandboxes']['kill']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.teams)[':teamID']['sandboxes']['kill']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTeamsTeamIDSandboxesKillMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.teams)[':teamID']['sandboxes']['kill']['$post']>,
    ) {
      return parseResponse(client.admin.teams[':teamID'].sandboxes.kill.$post(args, options))
    },
  })
}

export function usePostAdminTeamsTeamIDSandboxesKill<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.teams)[':teamID']['sandboxes']['kill']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.teams)[':teamID']['sandboxes']['kill']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminTeamsTeamIDSandboxesKillMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdminSandboxesRunningCountsQueryKey() {
  return ['admin', '/admin/sandboxes/running-counts'] as const
}

export function getAdminSandboxesRunningCountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.sandboxes)['running-counts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.sandboxes)['running-counts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSandboxesRunningCountsQueryKey>
  >({
    queryKey: getAdminSandboxesRunningCountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.sandboxes['running-counts'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminSandboxesRunningCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.sandboxes)['running-counts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.sandboxes)['running-counts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminSandboxesRunningCountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdminSandboxesRunningCountsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminSandboxesRunningCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.sandboxes)['running-counts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.sandboxes)['running-counts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminSandboxesRunningCountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdminSandboxesRunningCountsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAdminSandboxesSandboxIDQueryKey(
  args: InferRequestType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>,
) {
  return ['admin', '/admin/sandboxes/:sandboxID', args] as const
}

export function getAdminSandboxesSandboxIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSandboxesSandboxIDQueryKey>
  >({
    queryKey: getAdminSandboxesSandboxIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.sandboxes[':sandboxID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminSandboxesSandboxID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminSandboxesSandboxIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdminSandboxesSandboxIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminSandboxesSandboxID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.sandboxes)[':sandboxID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminSandboxesSandboxIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdminSandboxesSandboxIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUnstableAdminSandboxesSandboxIDOverviewQueryKey(
  args: InferRequestType<
    (typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']
  >,
) {
  return ['unstable', '/unstable/admin/sandboxes/:sandboxID/overview', args] as const
}

export function getUnstableAdminSandboxesSandboxIDOverviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableAdminSandboxesSandboxIDOverviewQueryKey>
  >({
    queryKey: getUnstableAdminSandboxesSandboxIDOverviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.admin.sandboxes[':sandboxID'].overview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableAdminSandboxesSandboxIDOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminSandboxesSandboxIDOverviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableAdminSandboxesSandboxIDOverviewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableAdminSandboxesSandboxIDOverview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.unstable.admin.sandboxes)[':sandboxID']['overview']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminSandboxesSandboxIDOverviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableAdminSandboxesSandboxIDOverviewQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUnstableAdminSandboxesSandboxIDBuildsQueryKey(
  args: InferRequestType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>,
) {
  return ['unstable', '/unstable/admin/sandboxes/:sandboxID/builds', args] as const
}

export function getUnstableAdminSandboxesSandboxIDBuildsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableAdminSandboxesSandboxIDBuildsQueryKey>
  >({
    queryKey: getUnstableAdminSandboxesSandboxIDBuildsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.admin.sandboxes[':sandboxID'].builds.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableAdminSandboxesSandboxIDBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminSandboxesSandboxIDBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableAdminSandboxesSandboxIDBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableAdminSandboxesSandboxIDBuilds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminSandboxesSandboxIDBuildsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableAdminSandboxesSandboxIDBuildsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUnstableAdminSandboxesSandboxIDBuildsRestoreMutationKey() {
  return ['unstable', '/unstable/admin/sandboxes/:sandboxID/builds/restore', 'POST'] as const
}

export function getPostUnstableAdminSandboxesSandboxIDBuildsRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostUnstableAdminSandboxesSandboxIDBuildsRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.unstable.admin.sandboxes[':sandboxID'].builds.restore.$post(args, options),
      )
    },
  })
}

export function usePostUnstableAdminSandboxesSandboxIDBuildsRestore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['restore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.unstable.admin.sandboxes)[':sandboxID']['builds']['restore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnstableAdminSandboxesSandboxIDBuildsRestoreMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAdminTeamsTeamIDBuildsCancelMutationKey() {
  return ['admin', '/admin/teams/:teamID/builds/cancel', 'POST'] as const
}

export function getPostAdminTeamsTeamIDBuildsCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['builds']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.teams)[':teamID']['builds']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTeamsTeamIDBuildsCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.teams)[':teamID']['builds']['cancel']['$post']>,
    ) {
      return parseResponse(client.admin.teams[':teamID'].builds.cancel.$post(args, options))
    },
  })
}

export function usePostAdminTeamsTeamIDBuildsCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.admin.teams)[':teamID']['builds']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.teams)[':teamID']['builds']['cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminTeamsTeamIDBuildsCancelMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdminTeamsTeamIDApiKeysQueryKey(
  args: InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>,
) {
  return ['admin', '/admin/teams/:teamID/api-keys', args] as const
}

export function getAdminTeamsTeamIDApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminTeamsTeamIDApiKeysQueryKey>
  >({
    queryKey: getAdminTeamsTeamIDApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.teams[':teamID']['api-keys'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAdminTeamsTeamIDApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminTeamsTeamIDApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getAdminTeamsTeamIDApiKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAdminTeamsTeamIDApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminTeamsTeamIDApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getAdminTeamsTeamIDApiKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAdminTeamsTeamIDApiKeysMutationKey() {
  return ['admin', '/admin/teams/:teamID/api-keys', 'POST'] as const
}

export function getPostAdminTeamsTeamIDApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTeamsTeamIDApiKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$post']>,
    ) {
      return parseResponse(client.admin.teams[':teamID']['api-keys'].$post(args, options))
    },
  })
}

export function usePostAdminTeamsTeamIDApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.teams)[':teamID']['api-keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminTeamsTeamIDApiKeysMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAdminTeamsTeamIDApiKeysApiKeyIDMutationKey() {
  return ['admin', '/admin/teams/:teamID/api-keys/:apiKeyID', 'DELETE'] as const
}

export function getDeleteAdminTeamsTeamIDApiKeysApiKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.teams)[':teamID']['api-keys'][':apiKeyID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.admin.teams)[':teamID']['api-keys'][':apiKeyID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminTeamsTeamIDApiKeysApiKeyIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.teams)[':teamID']['api-keys'][':apiKeyID']['$delete']
      >,
    ) {
      return parseResponse(
        client.admin.teams[':teamID']['api-keys'][':apiKeyID'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAdminTeamsTeamIDApiKeysApiKeyID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.admin.teams)[':teamID']['api-keys'][':apiKeyID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.admin.teams)[':teamID']['api-keys'][':apiKeyID']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminTeamsTeamIDApiKeysApiKeyIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUnstableManagementTelemetryNamesQueryKey() {
  return ['unstable', '/unstable/management/telemetry/names'] as const
}

export function getUnstableManagementTelemetryNamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.unstable.management.telemetry.names.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unstable.management.telemetry.names.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableManagementTelemetryNamesQueryKey>
  >({
    queryKey: getUnstableManagementTelemetryNamesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.management.telemetry.names.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableManagementTelemetryNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.unstable.management.telemetry.names.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.unstable.management.telemetry.names.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableManagementTelemetryNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableManagementTelemetryNamesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableManagementTelemetryNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.unstable.management.telemetry.names.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.unstable.management.telemetry.names.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableManagementTelemetryNamesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableManagementTelemetryNamesQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUnstableManagementClustersClusterIDMutationKey() {
  return ['unstable', '/unstable/management/clusters/:clusterID', 'PUT'] as const
}

export function getPutUnstableManagementClustersClusterIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.management.clusters)[':clusterID']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.unstable.management.clusters)[':clusterID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableManagementClustersClusterIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.unstable.management.clusters)[':clusterID']['$put']>,
    ) {
      return parseResponse(client.unstable.management.clusters[':clusterID'].$put(args, options))
    },
  })
}

export function usePutUnstableManagementClustersClusterID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.unstable.management.clusters)[':clusterID']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.unstable.management.clusters)[':clusterID']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableManagementClustersClusterIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUnstableManagementClustersClusterIDMutationKey() {
  return ['unstable', '/unstable/management/clusters/:clusterID', 'DELETE'] as const
}

export function getDeleteUnstableManagementClustersClusterIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.management.clusters)[':clusterID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.unstable.management.clusters)[':clusterID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUnstableManagementClustersClusterIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.unstable.management.clusters)[':clusterID']['$delete']>,
    ) {
      return parseResponse(client.unstable.management.clusters[':clusterID'].$delete(args, options))
    },
  })
}

export function useDeleteUnstableManagementClustersClusterID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.unstable.management.clusters)[':clusterID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.unstable.management.clusters)[':clusterID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUnstableManagementClustersClusterIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUnstableManagementClustersClusterIDTelemetryMutationKey() {
  return ['unstable', '/unstable/management/clusters/:clusterID/telemetry', 'PUT'] as const
}

export function getPutUnstableManagementClustersClusterIDTelemetryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.clusters)[':clusterID']['telemetry']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.unstable.management.clusters)[':clusterID']['telemetry']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableManagementClustersClusterIDTelemetryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.management.clusters)[':clusterID']['telemetry']['$put']
      >,
    ) {
      return parseResponse(
        client.unstable.management.clusters[':clusterID'].telemetry.$put(args, options),
      )
    },
  })
}

export function usePutUnstableManagementClustersClusterIDTelemetry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.unstable.management.clusters)[':clusterID']['telemetry']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.unstable.management.clusters)[':clusterID']['telemetry']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableManagementClustersClusterIDTelemetryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUnstableManagementClustersClusterIDProjectsQueryKey(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
  >,
) {
  return ['unstable', '/unstable/management/clusters/:clusterID/projects', args] as const
}

export function getUnstableManagementClustersClusterIDProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableManagementClustersClusterIDProjectsQueryKey>
  >({
    queryKey: getUnstableManagementClustersClusterIDProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.management.clusters[':clusterID'].projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableManagementClustersClusterIDProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableManagementClustersClusterIDProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableManagementClustersClusterIDProjectsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableManagementClustersClusterIDProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.unstable.management.clusters)[':clusterID']['projects']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableManagementClustersClusterIDProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableManagementClustersClusterIDProjectsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUnstableManagementClustersClusterIDDeletionMutationKey() {
  return ['unstable', '/unstable/management/clusters/:clusterID/deletion', 'PUT'] as const
}

export function getPutUnstableManagementClustersClusterIDDeletionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.clusters)[':clusterID']['deletion']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.unstable.management.clusters)[':clusterID']['deletion']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableManagementClustersClusterIDDeletionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.management.clusters)[':clusterID']['deletion']['$put']
      >,
    ) {
      return parseResponse(
        client.unstable.management.clusters[':clusterID'].deletion.$put(args, options),
      )
    },
  })
}

export function usePutUnstableManagementClustersClusterIDDeletion<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.unstable.management.clusters)[':clusterID']['deletion']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.unstable.management.clusters)[':clusterID']['deletion']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableManagementClustersClusterIDDeletionMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUnstableManagementClustersClusterIDDestroyReadinessQueryKey(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
  >,
) {
  return ['unstable', '/unstable/management/clusters/:clusterID/destroy-readiness', args] as const
}

export function getUnstableManagementClustersClusterIDDestroyReadinessQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableManagementClustersClusterIDDestroyReadinessQueryKey>
  >({
    queryKey: getUnstableManagementClustersClusterIDDestroyReadinessQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.management.clusters[':clusterID']['destroy-readiness'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableManagementClustersClusterIDDestroyReadiness<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableManagementClustersClusterIDDestroyReadinessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableManagementClustersClusterIDDestroyReadinessQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableManagementClustersClusterIDDestroyReadiness<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.unstable.management.clusters)[':clusterID']['destroy-readiness']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableManagementClustersClusterIDDestroyReadinessQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableManagementClustersClusterIDDestroyReadinessQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUnstableManagementProjectsProjectIDClusterClusterIDMutationKey() {
  return ['unstable', '/unstable/management/projects/:projectID/cluster/:clusterID', 'PUT'] as const
}

export function getPutUnstableManagementProjectsProjectIDClusterClusterIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableManagementProjectsProjectIDClusterClusterIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$put']
      >,
    ) {
      return parseResponse(
        client.unstable.management.projects[':projectID'].cluster[':clusterID'].$put(args, options),
      )
    },
  })
}

export function usePutUnstableManagementProjectsProjectIDClusterClusterID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableManagementProjectsProjectIDClusterClusterIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUnstableManagementProjectsProjectIDClusterClusterIDMutationKey() {
  return [
    'unstable',
    '/unstable/management/projects/:projectID/cluster/:clusterID',
    'DELETE',
  ] as const
}

export function getDeleteUnstableManagementProjectsProjectIDClusterClusterIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteUnstableManagementProjectsProjectIDClusterClusterIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$delete']
      >,
    ) {
      return parseResponse(
        client.unstable.management.projects[':projectID'].cluster[':clusterID'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteUnstableManagementProjectsProjectIDClusterClusterID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.unstable.management.projects)[':projectID']['cluster'][':clusterID']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteUnstableManagementProjectsProjectIDClusterClusterIDMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUnstableManagementProjectsProjectIDMutationKey() {
  return ['unstable', '/unstable/management/projects/:projectID', 'PUT'] as const
}

export function getPutUnstableManagementProjectsProjectIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.unstable.management.projects)[':projectID']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.unstable.management.projects)[':projectID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableManagementProjectsProjectIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.unstable.management.projects)[':projectID']['$put']>,
    ) {
      return parseResponse(client.unstable.management.projects[':projectID'].$put(args, options))
    },
  })
}

export function usePutUnstableManagementProjectsProjectID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.unstable.management.projects)[':projectID']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.unstable.management.projects)[':projectID']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableManagementProjectsProjectIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUnstableManagementProjectsProjectIDMutationKey() {
  return ['unstable', '/unstable/management/projects/:projectID', 'DELETE'] as const
}

export function getDeleteUnstableManagementProjectsProjectIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.management.projects)[':projectID']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.unstable.management.projects)[':projectID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUnstableManagementProjectsProjectIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.unstable.management.projects)[':projectID']['$delete']>,
    ) {
      return parseResponse(client.unstable.management.projects[':projectID'].$delete(args, options))
    },
  })
}

export function useDeleteUnstableManagementProjectsProjectID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.unstable.management.projects)[':projectID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.unstable.management.projects)[':projectID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUnstableManagementProjectsProjectIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUnstableManagementProjectsProjectIDMembersUserIDMutationKey() {
  return ['unstable', '/unstable/management/projects/:projectID/members/:userID', 'PUT'] as const
}

export function getPutUnstableManagementProjectsProjectIDMembersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.projects)[':projectID']['members'][':userID']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.unstable.management.projects)[':projectID']['members'][':userID']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableManagementProjectsProjectIDMembersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.management.projects)[':projectID']['members'][':userID']['$put']
      >,
    ) {
      return parseResponse(
        client.unstable.management.projects[':projectID'].members[':userID'].$put(args, options),
      )
    },
  })
}

export function usePutUnstableManagementProjectsProjectIDMembersUserID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.unstable.management.projects)[':projectID']['members'][':userID']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.unstable.management.projects)[':projectID']['members'][':userID']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableManagementProjectsProjectIDMembersUserIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUnstableManagementProjectsProjectIDLimitsMutationKey() {
  return ['unstable', '/unstable/management/projects/:projectID/limits', 'PUT'] as const
}

export function getPutUnstableManagementProjectsProjectIDLimitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.projects)[':projectID']['limits']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.unstable.management.projects)[':projectID']['limits']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableManagementProjectsProjectIDLimitsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.management.projects)[':projectID']['limits']['$put']
      >,
    ) {
      return parseResponse(
        client.unstable.management.projects[':projectID'].limits.$put(args, options),
      )
    },
  })
}

export function usePutUnstableManagementProjectsProjectIDLimits<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.unstable.management.projects)[':projectID']['limits']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.unstable.management.projects)[':projectID']['limits']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableManagementProjectsProjectIDLimitsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUnstableManagementProjectsProjectIDSettingsMutationKey() {
  return ['unstable', '/unstable/management/projects/:projectID/settings', 'PUT'] as const
}

export function getPutUnstableManagementProjectsProjectIDSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.projects)[':projectID']['settings']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.unstable.management.projects)[':projectID']['settings']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableManagementProjectsProjectIDSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.management.projects)[':projectID']['settings']['$put']
      >,
    ) {
      return parseResponse(
        client.unstable.management.projects[':projectID'].settings.$put(args, options),
      )
    },
  })
}

export function usePutUnstableManagementProjectsProjectIDSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.unstable.management.projects)[':projectID']['settings']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.unstable.management.projects)[':projectID']['settings']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableManagementProjectsProjectIDSettingsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUnstableManagementProjectsProjectIDBlockMutationKey() {
  return ['unstable', '/unstable/management/projects/:projectID/block', 'PUT'] as const
}

export function getPutUnstableManagementProjectsProjectIDBlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.management.projects)[':projectID']['block']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.unstable.management.projects)[':projectID']['block']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableManagementProjectsProjectIDBlockMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.management.projects)[':projectID']['block']['$put']
      >,
    ) {
      return parseResponse(
        client.unstable.management.projects[':projectID'].block.$put(args, options),
      )
    },
  })
}

export function usePutUnstableManagementProjectsProjectIDBlock<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.unstable.management.projects)[':projectID']['block']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.unstable.management.projects)[':projectID']['block']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableManagementProjectsProjectIDBlockMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUnstableManagementProjectsProjectIDBanMutationKey() {
  return ['unstable', '/unstable/management/projects/:projectID/ban', 'PUT'] as const
}

export function getPutUnstableManagementProjectsProjectIDBanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.management.projects)[':projectID']['ban']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.unstable.management.projects)[':projectID']['ban']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableManagementProjectsProjectIDBanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.management.projects)[':projectID']['ban']['$put']
      >,
    ) {
      return parseResponse(
        client.unstable.management.projects[':projectID'].ban.$put(args, options),
      )
    },
  })
}

export function usePutUnstableManagementProjectsProjectIDBan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.unstable.management.projects)[':projectID']['ban']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.unstable.management.projects)[':projectID']['ban']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableManagementProjectsProjectIDBanMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUnstableAdminTeamsQueryMutationKey() {
  return ['unstable', '/unstable/admin/teams/query', 'POST'] as const
}

export function getPostUnstableAdminTeamsQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.teams.query.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.unstable.admin.teams.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnstableAdminTeamsQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unstable.admin.teams.query.$post>) {
      return parseResponse(client.unstable.admin.teams.query.$post(args, options))
    },
  })
}

export function usePostUnstableAdminTeamsQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.unstable.admin.teams.query.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.unstable.admin.teams.query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnstableAdminTeamsQueryMutationOptions<TError, TOnMutateResult>(
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

export function getPostUnstableAdminTeamsBansMutationKey() {
  return ['unstable', '/unstable/admin/teams/bans', 'POST'] as const
}

export function getPostUnstableAdminTeamsBansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.teams.bans.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.unstable.admin.teams.bans.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnstableAdminTeamsBansMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unstable.admin.teams.bans.$post>) {
      return parseResponse(client.unstable.admin.teams.bans.$post(args, options))
    },
  })
}

export function usePostUnstableAdminTeamsBans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.teams.bans.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.unstable.admin.teams.bans.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnstableAdminTeamsBansMutationOptions<TError, TOnMutateResult>(
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

export function getUnstableAdminTeamsTeamIDQueryKey(
  args: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['$get']>,
) {
  return ['unstable', '/unstable/admin/teams/:teamID', args] as const
}

export function getUnstableAdminTeamsTeamIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableAdminTeamsTeamIDQueryKey>
  >({
    queryKey: getUnstableAdminTeamsTeamIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.admin.teams[':teamID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableAdminTeamsTeamID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminTeamsTeamIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableAdminTeamsTeamIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableAdminTeamsTeamID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminTeamsTeamIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableAdminTeamsTeamIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUnstableAdminTeamsTeamIDSchedulingLabelsMutationKey() {
  return ['unstable', '/unstable/admin/teams/:teamID/scheduling-labels', 'PUT'] as const
}

export function getPutUnstableAdminTeamsTeamIDSchedulingLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.unstable.admin.teams)[':teamID']['scheduling-labels']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['scheduling-labels']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableAdminTeamsTeamIDSchedulingLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.admin.teams)[':teamID']['scheduling-labels']['$put']
      >,
    ) {
      return parseResponse(
        client.unstable.admin.teams[':teamID']['scheduling-labels'].$put(args, options),
      )
    },
  })
}

export function usePutUnstableAdminTeamsTeamIDSchedulingLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.unstable.admin.teams)[':teamID']['scheduling-labels']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.unstable.admin.teams)[':teamID']['scheduling-labels']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableAdminTeamsTeamIDSchedulingLabelsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutUnstableAdminTeamsTeamIDBanMutationKey() {
  return ['unstable', '/unstable/admin/teams/:teamID/ban', 'PUT'] as const
}

export function getPutUnstableAdminTeamsTeamIDBanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableAdminTeamsTeamIDBanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$put']>,
    ) {
      return parseResponse(client.unstable.admin.teams[':teamID'].ban.$put(args, options))
    },
  })
}

export function usePutUnstableAdminTeamsTeamIDBan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableAdminTeamsTeamIDBanMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUnstableAdminTeamsTeamIDBanMutationKey() {
  return ['unstable', '/unstable/admin/teams/:teamID/ban', 'DELETE'] as const
}

export function getDeleteUnstableAdminTeamsTeamIDBanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUnstableAdminTeamsTeamIDBanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$delete']>,
    ) {
      return parseResponse(client.unstable.admin.teams[':teamID'].ban.$delete(args, options))
    },
  })
}

export function useDeleteUnstableAdminTeamsTeamIDBan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.unstable.admin.teams)[':teamID']['ban']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUnstableAdminTeamsTeamIDBanMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUnstableAdminClustersQueryKey(
  args: InferRequestType<typeof client.unstable.admin.clusters.$get>,
) {
  return ['unstable', '/unstable/admin/clusters', args] as const
}

export function getUnstableAdminClustersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.admin.clusters.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableAdminClustersQueryKey>
  >({
    queryKey: getUnstableAdminClustersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.admin.clusters.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableAdminClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.admin.clusters.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminClustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableAdminClustersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableAdminClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.admin.clusters.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminClustersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableAdminClustersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUnstableAdminClustersMutationKey() {
  return ['unstable', '/unstable/admin/clusters', 'POST'] as const
}

export function getPostUnstableAdminClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.unstable.admin.clusters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnstableAdminClustersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unstable.admin.clusters.$post>) {
      return parseResponse(client.unstable.admin.clusters.$post(args, options))
    },
  })
}

export function usePostUnstableAdminClusters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.clusters.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.unstable.admin.clusters.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnstableAdminClustersMutationOptions<TError, TOnMutateResult>(
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

export function getUnstableAdminClustersClusterIDQueryKey(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>,
) {
  return ['unstable', '/unstable/admin/clusters/:clusterID', args] as const
}

export function getUnstableAdminClustersClusterIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableAdminClustersClusterIDQueryKey>
  >({
    queryKey: getUnstableAdminClustersClusterIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.admin.clusters[':clusterID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableAdminClustersClusterID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminClustersClusterIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableAdminClustersClusterIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableAdminClustersClusterID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminClustersClusterIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableAdminClustersClusterIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteUnstableAdminClustersClusterIDMutationKey() {
  return ['unstable', '/unstable/admin/clusters/:clusterID', 'DELETE'] as const
}

export function getDeleteUnstableAdminClustersClusterIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUnstableAdminClustersClusterIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$delete']>,
    ) {
      return parseResponse(client.unstable.admin.clusters[':clusterID'].$delete(args, options))
    },
  })
}

export function useDeleteUnstableAdminClustersClusterID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUnstableAdminClustersClusterIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchUnstableAdminClustersClusterIDMutationKey() {
  return ['unstable', '/unstable/admin/clusters/:clusterID', 'PATCH'] as const
}

export function getPatchUnstableAdminClustersClusterIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUnstableAdminClustersClusterIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$patch']>,
    ) {
      return parseResponse(client.unstable.admin.clusters[':clusterID'].$patch(args, options))
    },
  })
}

export function usePatchUnstableAdminClustersClusterID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUnstableAdminClustersClusterIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUnstableAdminClustersClusterIDMetadataQueryKey(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>,
) {
  return ['unstable', '/unstable/admin/clusters/:clusterID/metadata', args] as const
}

export function getUnstableAdminClustersClusterIDMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableAdminClustersClusterIDMetadataQueryKey>
  >({
    queryKey: getUnstableAdminClustersClusterIDMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.admin.clusters[':clusterID'].metadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableAdminClustersClusterIDMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminClustersClusterIDMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableAdminClustersClusterIDMetadataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableAdminClustersClusterIDMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.unstable.admin.clusters)[':clusterID']['metadata']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminClustersClusterIDMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableAdminClustersClusterIDMetadataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getUnstableAdminClustersClusterIDTeamsQueryKey(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>,
) {
  return ['unstable', '/unstable/admin/clusters/:clusterID/teams', args] as const
}

export function getUnstableAdminClustersClusterIDTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableAdminClustersClusterIDTeamsQueryKey>
  >({
    queryKey: getUnstableAdminClustersClusterIDTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.admin.clusters[':clusterID'].teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableAdminClustersClusterIDTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminClustersClusterIDTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableAdminClustersClusterIDTeamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableAdminClustersClusterIDTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['teams']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminClustersClusterIDTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableAdminClustersClusterIDTeamsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutUnstableAdminClustersClusterIDTokenMutationKey() {
  return ['unstable', '/unstable/admin/clusters/:clusterID/token', 'PUT'] as const
}

export function getPutUnstableAdminClustersClusterIDTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['token']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['token']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUnstableAdminClustersClusterIDTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.admin.clusters)[':clusterID']['token']['$put']
      >,
    ) {
      return parseResponse(client.unstable.admin.clusters[':clusterID'].token.$put(args, options))
    },
  })
}

export function usePutUnstableAdminClustersClusterIDToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.unstable.admin.clusters)[':clusterID']['token']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.unstable.admin.clusters)[':clusterID']['token']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUnstableAdminClustersClusterIDTokenMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUnstableAdminTemplatesAliasesQueryKey(
  args: InferRequestType<typeof client.unstable.admin.templates.aliases.$get>,
) {
  return ['unstable', '/unstable/admin/templates/aliases', args] as const
}

export function getUnstableAdminTemplatesAliasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.admin.templates.aliases.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableAdminTemplatesAliasesQueryKey>
  >({
    queryKey: getUnstableAdminTemplatesAliasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.admin.templates.aliases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableAdminTemplatesAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.admin.templates.aliases.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminTemplatesAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableAdminTemplatesAliasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableAdminTemplatesAliases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.admin.templates.aliases.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminTemplatesAliasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableAdminTemplatesAliasesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUnstableAdminTemplatesAliasesMutationKey() {
  return ['unstable', '/unstable/admin/templates/aliases', 'POST'] as const
}

export function getPostUnstableAdminTemplatesAliasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.unstable.admin.templates.aliases.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnstableAdminTemplatesAliasesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.unstable.admin.templates.aliases.$post>) {
      return parseResponse(client.unstable.admin.templates.aliases.$post(args, options))
    },
  })
}

export function usePostUnstableAdminTemplatesAliases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.unstable.admin.templates.aliases.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.unstable.admin.templates.aliases.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnstableAdminTemplatesAliasesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUnstableAdminTemplatesAliasesAliasIDMutationKey() {
  return ['unstable', '/unstable/admin/templates/aliases/:aliasID', 'DELETE'] as const
}

export function getDeleteUnstableAdminTemplatesAliasesAliasIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.unstable.admin.templates.aliases)[':aliasID']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.unstable.admin.templates.aliases)[':aliasID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUnstableAdminTemplatesAliasesAliasIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.admin.templates.aliases)[':aliasID']['$delete']
      >,
    ) {
      return parseResponse(
        client.unstable.admin.templates.aliases[':aliasID'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUnstableAdminTemplatesAliasesAliasID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.unstable.admin.templates.aliases)[':aliasID']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.unstable.admin.templates.aliases)[':aliasID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUnstableAdminTemplatesAliasesAliasIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostUnstableAdminTemplatesDefaultsMutationKey() {
  return ['unstable', '/unstable/admin/templates/defaults', 'POST'] as const
}

export function getPostUnstableAdminTemplatesDefaultsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unstable.admin.templates.defaults.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.unstable.admin.templates.defaults.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUnstableAdminTemplatesDefaultsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.unstable.admin.templates.defaults.$post>,
    ) {
      return parseResponse(client.unstable.admin.templates.defaults.$post(args, options))
    },
  })
}

export function usePostUnstableAdminTemplatesDefaults<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.unstable.admin.templates.defaults.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.unstable.admin.templates.defaults.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUnstableAdminTemplatesDefaultsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUnstableAdminTemplatesDefaultsTemplateIDMutationKey() {
  return ['unstable', '/unstable/admin/templates/defaults/:templateID', 'DELETE'] as const
}

export function getDeleteUnstableAdminTemplatesDefaultsTemplateIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.unstable.admin.templates.defaults)[':templateID']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.unstable.admin.templates.defaults)[':templateID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUnstableAdminTemplatesDefaultsTemplateIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.admin.templates.defaults)[':templateID']['$delete']
      >,
    ) {
      return parseResponse(
        client.unstable.admin.templates.defaults[':templateID'].$delete(args, options),
      )
    },
  })
}

export function useDeleteUnstableAdminTemplatesDefaultsTemplateID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.unstable.admin.templates.defaults)[':templateID']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.unstable.admin.templates.defaults)[':templateID']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUnstableAdminTemplatesDefaultsTemplateIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchUnstableAdminTemplatesDefaultsTemplateIDMutationKey() {
  return ['unstable', '/unstable/admin/templates/defaults/:templateID', 'PATCH'] as const
}

export function getPatchUnstableAdminTemplatesDefaultsTemplateIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.unstable.admin.templates.defaults)[':templateID']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.unstable.admin.templates.defaults)[':templateID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUnstableAdminTemplatesDefaultsTemplateIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.unstable.admin.templates.defaults)[':templateID']['$patch']
      >,
    ) {
      return parseResponse(
        client.unstable.admin.templates.defaults[':templateID'].$patch(args, options),
      )
    },
  })
}

export function usePatchUnstableAdminTemplatesDefaultsTemplateID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.unstable.admin.templates.defaults)[':templateID']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.unstable.admin.templates.defaults)[':templateID']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchUnstableAdminTemplatesDefaultsTemplateIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUnstableAdminTemplatesLookupQueryKey(
  args: InferRequestType<typeof client.unstable.admin.templates.lookup.$get>,
) {
  return ['unstable', '/unstable/admin/templates/lookup', args] as const
}

export function getUnstableAdminTemplatesLookupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.templates.lookup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.admin.templates.lookup.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unstable.admin.templates.lookup.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUnstableAdminTemplatesLookupQueryKey>
  >({
    queryKey: getUnstableAdminTemplatesLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.unstable.admin.templates.lookup.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUnstableAdminTemplatesLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.templates.lookup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.admin.templates.lookup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.unstable.admin.templates.lookup.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminTemplatesLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getUnstableAdminTemplatesLookupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseUnstableAdminTemplatesLookup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.unstable.admin.templates.lookup.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.unstable.admin.templates.lookup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.unstable.admin.templates.lookup.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUnstableAdminTemplatesLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getUnstableAdminTemplatesLookupQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiKeysQueryKey() {
  return ['api-keys', '/api-keys'] as const
}

export function getApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiKeysQueryKey>
  >({
    queryKey: getApiKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['api-keys'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiKeysMutationKey() {
  return ['api-keys', '/api-keys', 'POST'] as const
}

export function getPostApiKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['api-keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-keys']['$post']>) {
      return parseResponse(client['api-keys'].$post(args, options))
    },
  })
}

export function usePostApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['api-keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiKeysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteApiKeysApiKeyIDMutationKey() {
  return ['api-keys', '/api-keys/:apiKeyID', 'DELETE'] as const
}

export function getDeleteApiKeysApiKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['api-keys'][':apiKeyID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['api-keys'][':apiKeyID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeysApiKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-keys'][':apiKeyID']['$delete']>) {
      return parseResponse(client['api-keys'][':apiKeyID'].$delete(args, options))
    },
  })
}

export function useDeleteApiKeysApiKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['api-keys'][':apiKeyID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['api-keys'][':apiKeyID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiKeysApiKeyIDMutationOptions<TError, TOnMutateResult>(
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

export function getPatchApiKeysApiKeyIDMutationKey() {
  return ['api-keys', '/api-keys/:apiKeyID', 'PATCH'] as const
}

export function getPatchApiKeysApiKeyIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['api-keys'][':apiKeyID']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['api-keys'][':apiKeyID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiKeysApiKeyIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['api-keys'][':apiKeyID']['$patch']>) {
      return parseResponse(client['api-keys'][':apiKeyID'].$patch(args, options))
    },
  })
}

export function usePatchApiKeysApiKeyID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['api-keys'][':apiKeyID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['api-keys'][':apiKeyID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiKeysApiKeyIDMutationOptions<TError, TOnMutateResult>(
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

export function getVolumesQueryKey() {
  return ['volumes', '/volumes'] as const
}

export function getVolumesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVolumesQueryKey>
  >({
    queryKey: getVolumesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVolumesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVolumes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVolumesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVolumesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostVolumesMutationKey() {
  return ['volumes', '/volumes', 'POST'] as const
}

export function getPostVolumesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
    TError,
    InferRequestType<typeof client.volumes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVolumesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.volumes.$post>) {
      return parseResponse(client.volumes.$post(args, options))
    },
  })
}

export function usePostVolumes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.volumes.$post>>>>>,
        TError,
        InferRequestType<typeof client.volumes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVolumesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVolumesVolumeIDQueryKey(
  args: InferRequestType<(typeof client.volumes)[':volumeID']['$get']>,
) {
  return ['volumes', '/volumes/:volumeID', args] as const
}

export function getVolumesVolumeIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':volumeID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVolumesVolumeIDQueryKey>
  >({
    queryKey: getVolumesVolumeIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.volumes[':volumeID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVolumesVolumeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':volumeID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesVolumeIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVolumesVolumeIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVolumesVolumeID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.volumes)[':volumeID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVolumesVolumeIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVolumesVolumeIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteVolumesVolumeIDMutationKey() {
  return ['volumes', '/volumes/:volumeID', 'DELETE'] as const
}

export function getDeleteVolumesVolumeIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.volumes)[':volumeID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVolumesVolumeIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.volumes)[':volumeID']['$delete']>) {
      return parseResponse(client.volumes[':volumeID'].$delete(args, options))
    },
  })
}

export function useDeleteVolumesVolumeID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.volumes)[':volumeID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.volumes)[':volumeID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteVolumesVolumeIDMutationOptions<TError, TOnMutateResult>(
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

export function getSecretsQueryKey(args: InferRequestType<typeof client.secrets.$get>) {
  return ['secrets', '/secrets', args] as const
}

export function getSecretsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.secrets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSecretsQueryKey>
  >({
    queryKey: getSecretsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.secrets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSecretsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.secrets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSecretsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSecretsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSecretsMutationKey() {
  return ['secrets', '/secrets', 'POST'] as const
}

export function getPostSecretsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$post>>>>>,
    TError,
    InferRequestType<typeof client.secrets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.secrets.$post>) {
      return parseResponse(client.secrets.$post(args, options))
    },
  })
}

export function usePostSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$post>>>>>,
        TError,
        InferRequestType<typeof client.secrets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSecretsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSecretsSecretIDQueryKey(
  args: InferRequestType<(typeof client.secrets)[':secretID']['$get']>,
) {
  return ['secrets', '/secrets/:secretID', args] as const
}

export function getSecretsSecretIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.secrets)[':secretID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsSecretIDQueryKey>
  >({
    queryKey: getSecretsSecretIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secrets[':secretID'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSecretsSecretID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.secrets)[':secretID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecretsSecretIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSecretsSecretIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSecretsSecretID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.secrets)[':secretID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecretsSecretIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSecretsSecretIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSecretsSecretIDMutationKey() {
  return ['secrets', '/secrets/:secretID', 'POST'] as const
}

export function getPostSecretsSecretIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.secrets)[':secretID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSecretsSecretIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.secrets)[':secretID']['$post']>) {
      return parseResponse(client.secrets[':secretID'].$post(args, options))
    },
  })
}

export function usePostSecretsSecretID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.secrets)[':secretID']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSecretsSecretIDMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSecretsSecretIDMutationKey() {
  return ['secrets', '/secrets/:secretID', 'DELETE'] as const
}

export function getDeleteSecretsSecretIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':secretID']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.secrets)[':secretID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecretsSecretIDMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.secrets)[':secretID']['$delete']>) {
      return parseResponse(client.secrets[':secretID'].$delete(args, options))
    },
  })
}

export function useDeleteSecretsSecretID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.secrets)[':secretID']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.secrets)[':secretID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSecretsSecretIDMutationOptions<TError, TOnMutateResult>(
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

export function getClustersClusterIDRigsQueryKey(
  args: InferRequestType<(typeof client.clusters)[':clusterID']['rigs']['$get']>,
) {
  return ['clusters', '/clusters/:clusterID/rigs', args] as const
}

export function getClustersClusterIDRigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':clusterID']['rigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':clusterID']['rigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.clusters)[':clusterID']['rigs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIDRigsQueryKey>
  >({
    queryKey: getClustersClusterIDRigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':clusterID'].rigs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIDRigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':clusterID']['rigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':clusterID']['rigs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':clusterID']['rigs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIDRigsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getClustersClusterIDRigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIDRigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.clusters)[':clusterID']['rigs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.clusters)[':clusterID']['rigs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.clusters)[':clusterID']['rigs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIDRigsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getClustersClusterIDRigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutClustersClusterIDRigsRigIDCapacityMutationKey() {
  return ['clusters', '/clusters/:clusterID/rigs/:rigID/capacity', 'PUT'] as const
}

export function getPutClustersClusterIDRigsRigIDCapacityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['capacity']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['capacity']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutClustersClusterIDRigsRigIDCapacityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':clusterID']['rigs'][':rigID']['capacity']['$put']
      >,
    ) {
      return parseResponse(
        client.clusters[':clusterID'].rigs[':rigID'].capacity.$put(args, options),
      )
    },
  })
}

export function usePutClustersClusterIDRigsRigIDCapacity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':clusterID']['rigs'][':rigID']['capacity']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.clusters)[':clusterID']['rigs'][':rigID']['capacity']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutClustersClusterIDRigsRigIDCapacityMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteClustersClusterIDRigsInstancesInstanceIDMutationKey() {
  return ['clusters', '/clusters/:clusterID/rigs/instances/:instanceID', 'DELETE'] as const
}

export function getDeleteClustersClusterIDRigsInstancesInstanceIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':clusterID']['rigs']['instances'][':instanceID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.clusters)[':clusterID']['rigs']['instances'][':instanceID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteClustersClusterIDRigsInstancesInstanceIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.clusters)[':clusterID']['rigs']['instances'][':instanceID']['$delete']
      >,
    ) {
      return parseResponse(
        client.clusters[':clusterID'].rigs.instances[':instanceID'].$delete(args, options),
      )
    },
  })
}

export function useDeleteClustersClusterIDRigsInstancesInstanceID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':clusterID']['rigs']['instances'][':instanceID']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.clusters)[':clusterID']['rigs']['instances'][':instanceID']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteClustersClusterIDRigsInstancesInstanceIDMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getClustersClusterIDRigsRigIDInstancesQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
  >,
) {
  return ['clusters', '/clusters/:clusterID/rigs/:rigID/instances', args] as const
}

export function getClustersClusterIDRigsRigIDInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIDRigsRigIDInstancesQueryKey>
  >({
    queryKey: getClustersClusterIDRigsRigIDInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':clusterID'].rigs[':rigID'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIDRigsRigIDInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIDRigsRigIDInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getClustersClusterIDRigsRigIDInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIDRigsRigIDInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':clusterID']['rigs'][':rigID']['instances']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIDRigsRigIDInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getClustersClusterIDRigsRigIDInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getClustersClusterIDRigsRigIDErrorsQueryKey(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']
  >,
) {
  return ['clusters', '/clusters/:clusterID/rigs/:rigID/errors', args] as const
}

export function getClustersClusterIDRigsRigIDErrorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClustersClusterIDRigsRigIDErrorsQueryKey>
  >({
    queryKey: getClustersClusterIDRigsRigIDErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clusters[':clusterID'].rigs[':rigID'].errors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useClustersClusterIDRigsRigIDErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIDRigsRigIDErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getClustersClusterIDRigsRigIDErrorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseClustersClusterIDRigsRigIDErrors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.clusters)[':clusterID']['rigs'][':rigID']['errors']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClustersClusterIDRigsRigIDErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getClustersClusterIDRigsRigIDErrorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventsSandboxesSandboxIDQueryKey(
  args: InferRequestType<(typeof client.events.sandboxes)[':sandboxID']['$get']>,
) {
  return ['events', '/events/sandboxes/:sandboxID', args] as const
}

export function getEventsSandboxesSandboxIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events.sandboxes)[':sandboxID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.sandboxes)[':sandboxID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.sandboxes)[':sandboxID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsSandboxesSandboxIDQueryKey>
  >({
    queryKey: getEventsSandboxesSandboxIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.sandboxes[':sandboxID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventsSandboxesSandboxID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events.sandboxes)[':sandboxID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.sandboxes)[':sandboxID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events.sandboxes)[':sandboxID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsSandboxesSandboxIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEventsSandboxesSandboxIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventsSandboxesSandboxID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events.sandboxes)[':sandboxID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.sandboxes)[':sandboxID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events.sandboxes)[':sandboxID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsSandboxesSandboxIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEventsSandboxesSandboxIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventsSandboxesQueryKey(
  args: InferRequestType<typeof client.events.sandboxes.$get>,
) {
  return ['events', '/events/sandboxes', args] as const
}

export function getEventsSandboxesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.sandboxes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.events.sandboxes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.sandboxes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsSandboxesQueryKey>
  >({
    queryKey: getEventsSandboxesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.sandboxes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventsSandboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.sandboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.sandboxes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.sandboxes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEventsSandboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsSandboxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventsSandboxes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.sandboxes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.events.sandboxes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.sandboxes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEventsSandboxesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsSandboxesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getEventsWebhooksQueryKey() {
  return ['events', '/events/webhooks'] as const
}

export function getEventsWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getEventsWebhooksQueryKey>
  >({
    queryKey: getEventsWebhooksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.events.webhooks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useEventsWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEventsWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsWebhooksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventsWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEventsWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsWebhooksQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostEventsWebhooksMutationKey() {
  return ['events', '/events/webhooks', 'POST'] as const
}

export function getPostEventsWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.events.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostEventsWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.events.webhooks.$post>) {
      return parseResponse(client.events.webhooks.$post(args, options))
    },
  })
}

export function usePostEventsWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.events.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.events.webhooks.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostEventsWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getEventsWebhooksWebhookIDQueryKey(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$get']>,
) {
  return ['events', '/events/webhooks/:webhookID', args] as const
}

export function getEventsWebhooksWebhookIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsWebhooksWebhookIDQueryKey>
  >({
    queryKey: getEventsWebhooksWebhookIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.webhooks[':webhookID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventsWebhooksWebhookID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsWebhooksWebhookIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEventsWebhooksWebhookIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventsWebhooksWebhookID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsWebhooksWebhookIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEventsWebhooksWebhookIDQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteEventsWebhooksWebhookIDMutationKey() {
  return ['events', '/events/webhooks/:webhookID', 'DELETE'] as const
}

export function getDeleteEventsWebhooksWebhookIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events.webhooks)[':webhookID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteEventsWebhooksWebhookIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$delete']>,
    ) {
      return parseResponse(client.events.webhooks[':webhookID'].$delete(args, options))
    },
  })
}

export function useDeleteEventsWebhooksWebhookID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.events.webhooks)[':webhookID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteEventsWebhooksWebhookIDMutationOptions<TError, TOnMutateResult>(
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

export function getPatchEventsWebhooksWebhookIDMutationKey() {
  return ['events', '/events/webhooks/:webhookID', 'PATCH'] as const
}

export function getPatchEventsWebhooksWebhookIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.events.webhooks)[':webhookID']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchEventsWebhooksWebhookIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['$patch']>,
    ) {
      return parseResponse(client.events.webhooks[':webhookID'].$patch(args, options))
    },
  })
}

export function usePatchEventsWebhooksWebhookID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.events.webhooks)[':webhookID']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchEventsWebhooksWebhookIDMutationOptions<TError, TOnMutateResult>(
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

export function getEventsWebhooksWebhookIDDeliveriesQueryKey(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>,
) {
  return ['events', '/events/webhooks/:webhookID/deliveries', args] as const
}

export function getEventsWebhooksWebhookIDDeliveriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsWebhooksWebhookIDDeliveriesQueryKey>
  >({
    queryKey: getEventsWebhooksWebhookIDDeliveriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.webhooks[':webhookID'].deliveries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventsWebhooksWebhookIDDeliveries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsWebhooksWebhookIDDeliveriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEventsWebhooksWebhookIDDeliveriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventsWebhooksWebhookIDDeliveries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.events.webhooks)[':webhookID']['deliveries']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsWebhooksWebhookIDDeliveriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEventsWebhooksWebhookIDDeliveriesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getEventsWebhooksWebhookIDStatsQueryKey(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>,
) {
  return ['events', '/events/webhooks/:webhookID/stats', args] as const
}

export function getEventsWebhooksWebhookIDStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsWebhooksWebhookIDStatsQueryKey>
  >({
    queryKey: getEventsWebhooksWebhookIDStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.events.webhooks[':webhookID'].stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventsWebhooksWebhookIDStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsWebhooksWebhookIDStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getEventsWebhooksWebhookIDStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseEventsWebhooksWebhookIDStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events.webhooks)[':webhookID']['stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsWebhooksWebhookIDStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getEventsWebhooksWebhookIDStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
