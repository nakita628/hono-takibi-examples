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

export function getArtifactKey() {
  return ['artifact'] as const
}

export function getExportKey() {
  return ['export'] as const
}

export function getFeaturesKey() {
  return ['features'] as const
}

export function getImportKey() {
  return ['import'] as const
}

export function getJobsKey() {
  return ['jobs'] as const
}

export function getKeycloakKey() {
  return ['keycloak'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getResourcesKey() {
  return ['resources'] as const
}

export function getSecretsKey() {
  return ['secrets'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getTestsKey() {
  return ['tests'] as const
}

export function getPostArtifactUploadMutationKey() {
  return ['artifact', '/artifact/upload', 'POST'] as const
}

export function getPostArtifactUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.artifact.upload.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.artifact.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostArtifactUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.artifact.upload.$post>) {
      return parseResponse(client.artifact.upload.$post(args, options))
    },
  })
}

export function usePostArtifactUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.artifact.upload.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.artifact.upload.$post>,
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
  const mutationDefaults = getPostArtifactUploadMutationOptions<TError, TOnMutateResult>(
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

export function getExportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.export.$get>>,
) {
  return ['export', '/export', toValue(args)] as const
}

export function getExportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.export.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.export.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExport<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.export.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.$get>>>>>,
          ReturnType<typeof getExportQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.export.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFeaturesConfigQueryKey() {
  return ['features', '/features/config'] as const
}

export function getFeaturesConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getFeaturesConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.features.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFeaturesConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.features.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.features.config.$get>>>
            >
          >,
          ReturnType<typeof getFeaturesConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.features.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getFeaturesConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getFeaturesConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.features.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostImportMutationKey() {
  return ['import', '/import', 'POST'] as const
}

export function getPostImportMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.$post>>>>>,
    TError,
    InferRequestType<typeof client.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.import.$post>) {
      return parseResponse(client.import.$post(args, options))
    },
  })
}

export function usePostImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.import.$post>,
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
  const mutationDefaults = getPostImportMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getJobsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>) {
  return ['jobs', '/jobs', toValue(args)] as const
}

export function getJobsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.jobs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
          ReturnType<typeof getJobsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostJobsMutationKey() {
  return ['jobs', '/jobs', 'POST'] as const
}

export function getPostJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.jobs.$post>) {
      return parseResponse(client.jobs.$post(args, options))
    },
  })
}

export function usePostJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.$post>>>>>,
          TError,
          InferRequestType<typeof client.jobs.$post>,
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
  const mutationDefaults = getPostJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getJobsCountQueryKey() {
  return ['jobs', '/jobs/count'] as const
}

export function getJobsCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getJobsCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs.count.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.count.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.count.$get>>>>
          >,
          ReturnType<typeof getJobsCountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.jobs.count.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getJobsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getJobsCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getJobsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['$get']>>,
) {
  return ['jobs', '/jobs/:id', toValue(args)] as const
}

export function getJobsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getJobsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.jobs[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useJobsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.jobs)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getJobsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getJobsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getJobsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.jobs[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostJobsIdMutationKey() {
  return ['jobs', '/jobs/:id', 'POST'] as const
}

export function getPostJobsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostJobsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['$post']>) {
      return parseResponse(client.jobs[':id'].$post(args, options))
    },
  })
}

export function usePostJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':id']['$post']>,
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
  const mutationDefaults = getPostJobsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteJobsIdMutationKey() {
  return ['jobs', '/jobs/:id', 'DELETE'] as const
}

export function getDeleteJobsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteJobsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['$delete']>) {
      return parseResponse(client.jobs[':id'].$delete(args, options))
    },
  })
}

export function useDeleteJobsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteJobsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutJobsIdActivateMutationKey() {
  return ['jobs', '/jobs/:id/activate', 'PUT'] as const
}

export function getPutJobsIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['activate']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['activate']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJobsIdActivateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['activate']['$put']>) {
      return parseResponse(client.jobs[':id'].activate.$put(args, options))
    },
  })
}

export function usePutJobsIdActivate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':id']['activate']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':id']['activate']['$put']>,
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
  const mutationDefaults = getPutJobsIdActivateMutationOptions<TError, TOnMutateResult>(
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

export function getPutJobsIdStartMutationKey() {
  return ['jobs', '/jobs/:id/start', 'PUT'] as const
}

export function getPutJobsIdStartMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['start']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['start']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJobsIdStartMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['start']['$put']>) {
      return parseResponse(client.jobs[':id'].start.$put(args, options))
    },
  })
}

export function usePutJobsIdStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.jobs)[':id']['start']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':id']['start']['$put']>,
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
  const mutationDefaults = getPutJobsIdStartMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutJobsIdStopMutationKey() {
  return ['jobs', '/jobs/:id/stop', 'PUT'] as const
}

export function getPutJobsIdStopMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['stop']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.jobs)[':id']['stop']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutJobsIdStopMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.jobs)[':id']['stop']['$put']>) {
      return parseResponse(client.jobs[':id'].stop.$put(args, options))
    },
  })
}

export function usePutJobsIdStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.jobs)[':id']['stop']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.jobs)[':id']['stop']['$put']>,
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
  const mutationDefaults = getPutJobsIdStopMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getKeycloakConfigQueryKey() {
  return ['keycloak', '/keycloak/config'] as const
}

export function getKeycloakConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getKeycloakConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.keycloak.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useKeycloakConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.config.$get>>>
            >
          >,
          ReturnType<typeof getKeycloakConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.keycloak.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getKeycloakConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getKeycloakConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.keycloak.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsConformanceAggregateQueryKey() {
  return ['metrics', '/metrics/conformance/aggregate'] as const
}

export function getMetricsConformanceAggregateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetricsConformanceAggregateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.conformance.aggregate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsConformanceAggregate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.conformance.aggregate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metrics.conformance.aggregate.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metrics.conformance.aggregate.$get>>
              >
            >
          >,
          ReturnType<typeof getMetricsConformanceAggregateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.conformance.aggregate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsConformanceAggregateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetricsConformanceAggregateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.conformance.aggregate.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsConformanceServiceServiceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.conformance.service)[':serviceId']['$get']>
  >,
) {
  return ['metrics', '/metrics/conformance/service/:serviceId', toValue(args)] as const
}

export function getMetricsConformanceServiceServiceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.conformance.service)[':serviceId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsConformanceServiceServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.conformance.service[':serviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsConformanceServiceServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.metrics.conformance.service)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.conformance.service)[':serviceId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.metrics.conformance.service)[':serviceId']['$get']>
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
                  ReturnType<(typeof client.metrics.conformance.service)[':serviceId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMetricsConformanceServiceServiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.metrics.conformance.service)[':serviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsConformanceServiceServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsConformanceServiceServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.conformance.service[':serviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsInvocationsGlobalQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.invocations.global.$get>>,
) {
  return ['metrics', '/metrics/invocations/global', toValue(args)] as const
}

export function getMetricsInvocationsGlobalQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.invocations.global.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsInvocationsGlobalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.invocations.global.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsInvocationsGlobal<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.invocations.global.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.invocations.global.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metrics.invocations.global.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metrics.invocations.global.$get>>
              >
            >
          >,
          ReturnType<typeof getMetricsInvocationsGlobalQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.invocations.global.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsInvocationsGlobalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsInvocationsGlobalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.invocations.global.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsInvocationsGlobalLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.invocations.global.latest.$get>>,
) {
  return ['metrics', '/metrics/invocations/global/latest', toValue(args)] as const
}

export function getMetricsInvocationsGlobalLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.invocations.global.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsInvocationsGlobalLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.invocations.global.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsInvocationsGlobalLatest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.metrics.invocations.global.latest.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.invocations.global.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metrics.invocations.global.latest.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.metrics.invocations.global.latest.$get>>
              >
            >
          >,
          ReturnType<typeof getMetricsInvocationsGlobalLatestQueryKey>
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
          Awaited<ReturnType<typeof client.metrics.invocations.global.latest.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsInvocationsGlobalLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsInvocationsGlobalLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.invocations.global.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsInvocationsTopQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.invocations.top.$get>>,
) {
  return ['metrics', '/metrics/invocations/top', toValue(args)] as const
}

export function getMetricsInvocationsTopQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.invocations.top.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsInvocationsTopQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.invocations.top.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsInvocationsTop<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.metrics.invocations.top.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.invocations.top.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.invocations.top.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.invocations.top.$get>>>
            >
          >,
          ReturnType<typeof getMetricsInvocationsTopQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.metrics.invocations.top.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsInvocationsTopQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsInvocationsTopQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.invocations.top.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsInvocationsServiceNameServiceVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.invocations)[':serviceName'][':serviceVersion']['$get']>
  >,
) {
  return ['metrics', '/metrics/invocations/:serviceName/:serviceVersion', toValue(args)] as const
}

export function getMetricsInvocationsServiceNameServiceVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.invocations)[':serviceName'][':serviceVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsInvocationsServiceNameServiceVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.invocations[':serviceName'][':serviceVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsInvocationsServiceNameServiceVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.metrics.invocations)[':serviceName'][':serviceVersion']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.metrics.invocations)[':serviceName'][':serviceVersion']['$get']>
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
                    (typeof client.metrics.invocations)[':serviceName'][':serviceVersion']['$get']
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
                    (typeof client.metrics.invocations)[':serviceName'][':serviceVersion']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetricsInvocationsServiceNameServiceVersionQueryKey>
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
              (typeof client.metrics.invocations)[':serviceName'][':serviceVersion']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsInvocationsServiceNameServiceVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsInvocationsServiceNameServiceVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.invocations[':serviceName'][':serviceVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsTestsLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.tests.latest.$get>>,
) {
  return ['metrics', '/metrics/tests/latest', toValue(args)] as const
}

export function getMetricsTestsLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.tests.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetricsTestsLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.tests.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetricsTestsLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.tests.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.metrics.tests.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.tests.latest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.metrics.tests.latest.$get>>>
            >
          >,
          ReturnType<typeof getMetricsTestsLatestQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.tests.latest.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetricsTestsLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetricsTestsLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.tests.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesServiceServiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.service)[':serviceId']['$get']>>,
) {
  return ['resources', '/resources/service/:serviceId', toValue(args)] as const
}

export function getResourcesServiceServiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.service)[':serviceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesServiceServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.service[':serviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesServiceServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.service)[':serviceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources.service)[':serviceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.service)[':serviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.service)[':serviceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesServiceServiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.service)[':serviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesServiceServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesServiceServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.service[':serviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':name']['$get']>>,
) {
  return ['resources', '/resources/:name', toValue(args)] as const
}

export function getResourcesNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.resources)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getResourcesNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.resources)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSecretsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secrets.$get>>,
) {
  return ['secrets', '/secrets', toValue(args)] as const
}

export function getSecretsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secrets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecretsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.secrets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>
          >,
          ReturnType<typeof getSecretsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecretsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.secrets.$post>,
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

export function getSecretsCountQueryKey() {
  return ['secrets', '/secrets/count'] as const
}

export function getSecretsCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSecretsCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets.count.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSecretsCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.count.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.count.$get>>>>
          >,
          ReturnType<typeof getSecretsCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secrets.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSecretsCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSecretsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secrets)[':id']['$get']>>,
) {
  return ['secrets', '/secrets/:id', toValue(args)] as const
}

export function getSecretsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secrets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecretsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secrets[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecretsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secrets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getSecretsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSecretsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecretsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secrets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSecretsIdMutationKey() {
  return ['secrets', '/secrets/:id', 'PUT'] as const
}

export function getPutSecretsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.secrets)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSecretsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.secrets)[':id']['$put']>) {
      return parseResponse(client.secrets[':id'].$put(args, options))
    },
  })
}

export function usePutSecretsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets)[':id']['$put']>,
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
  const mutationDefaults = getPutSecretsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSecretsIdMutationKey() {
  return ['secrets', '/secrets/:id', 'DELETE'] as const
}

export function getDeleteSecretsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.secrets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecretsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.secrets)[':id']['$delete']>) {
      return parseResponse(client.secrets[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSecretsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.secrets)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.secrets)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteSecretsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getServicesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
) {
  return ['services', '/services', toValue(args)] as const
}

export function getServicesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>
          >,
          ReturnType<typeof getServicesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesCountQueryKey() {
  return ['services', '/services/count'] as const
}

export function getServicesCountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServicesCountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.count.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServicesCount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.count.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.count.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.count.$get>>>>
          >,
          ReturnType<typeof getServicesCountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.count.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServicesCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServicesCountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.services.count.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesLabelsQueryKey() {
  return ['services', '/services/labels'] as const
}

export function getServicesLabelsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getServicesLabelsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.labels.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useServicesLabels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.labels.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.services.labels.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.services.labels.$get>>>
            >
          >,
          ReturnType<typeof getServicesLabelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.labels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServicesLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getServicesLabelsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.services.labels.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.search.$get>>,
) {
  return ['services', '/services/search', toValue(args)] as const
}

export function getServicesSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.services.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.services.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.services.search.$get>>>
            >
          >,
          ReturnType<typeof getServicesSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServicesSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServicesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':id']['$get']>>,
) {
  return ['services', '/services/:id', toValue(args)] as const
}

export function getServicesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServicesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.services[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.services)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getServicesIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getServicesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServicesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.services[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteServicesIdMutationKey() {
  return ['services', '/services/:id', 'DELETE'] as const
}

export function getDeleteServicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.services)[':id']['$delete']>) {
      return parseResponse(client.services[':id'].$delete(args, options))
    },
  })
}

export function useDeleteServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteServicesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutServicesIdMetadataMutationKey() {
  return ['services', '/services/:id/metadata', 'PUT'] as const
}

export function getPutServicesIdMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':id']['metadata']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':id']['metadata']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServicesIdMetadataMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.services)[':id']['metadata']['$put']>) {
      return parseResponse(client.services[':id'].metadata.$put(args, options))
    },
  })
}

export function usePutServicesIdMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':id']['metadata']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':id']['metadata']['$put']>,
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
  const mutationDefaults = getPutServicesIdMetadataMutationOptions<TError, TOnMutateResult>(
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

export function getPutServicesIdOperationMutationKey() {
  return ['services', '/services/:id/operation', 'PUT'] as const
}

export function getPutServicesIdOperationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.services)[':id']['operation']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.services)[':id']['operation']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutServicesIdOperationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.services)[':id']['operation']['$put']>) {
      return parseResponse(client.services[':id'].operation.$put(args, options))
    },
  })
}

export function usePutServicesIdOperation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.services)[':id']['operation']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.services)[':id']['operation']['$put']>,
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
  const mutationDefaults = getPutServicesIdOperationMutationOptions<TError, TOnMutateResult>(
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

export function getPostTestsMutationKey() {
  return ['tests', '/tests', 'POST'] as const
}

export function getPostTestsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tests.$post>>>>>,
    TError,
    InferRequestType<typeof client.tests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tests.$post>) {
      return parseResponse(client.tests.$post(args, options))
    },
  })
}

export function usePostTests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tests.$post>>>>>,
          TError,
          InferRequestType<typeof client.tests.$post>,
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
  const mutationDefaults = getPostTestsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTestsServiceServiceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tests.service)[':serviceId']['$get']>>,
) {
  return ['tests', '/tests/service/:serviceId', toValue(args)] as const
}

export function getTestsServiceServiceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tests.service)[':serviceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestsServiceServiceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tests.service[':serviceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestsServiceServiceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tests.service)[':serviceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tests.service)[':serviceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tests.service)[':serviceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tests.service)[':serviceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestsServiceServiceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.tests.service)[':serviceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestsServiceServiceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestsServiceServiceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tests.service[':serviceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestsServiceServiceIdCountQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tests.service)[':serviceId']['count']['$get']>
  >,
) {
  return ['tests', '/tests/service/:serviceId/count', toValue(args)] as const
}

export function getTestsServiceServiceIdCountQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tests.service)[':serviceId']['count']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestsServiceServiceIdCountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tests.service[':serviceId'].count.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestsServiceServiceIdCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tests.service)[':serviceId']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tests.service)[':serviceId']['count']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tests.service)[':serviceId']['count']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tests.service)[':serviceId']['count']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestsServiceServiceIdCountQueryKey>
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
          Awaited<ReturnType<(typeof client.tests.service)[':serviceId']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestsServiceServiceIdCountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestsServiceServiceIdCountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tests.service[':serviceId'].count.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tests)[':id']['$get']>>,
) {
  return ['tests', '/tests/:id', toValue(args)] as const
}

export function getTestsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tests)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tests[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTestsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tests)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tests)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tests)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tests)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTestsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tests)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTestsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tests[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestsIdEventsTestCaseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tests)[':id']['events'][':testCaseId']['$get']>
  >,
) {
  return ['tests', '/tests/:id/events/:testCaseId', toValue(args)] as const
}

export function getTestsIdEventsTestCaseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tests)[':id']['events'][':testCaseId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestsIdEventsTestCaseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tests[':id'].events[':testCaseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestsIdEventsTestCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tests)[':id']['events'][':testCaseId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tests)[':id']['events'][':testCaseId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tests)[':id']['events'][':testCaseId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tests)[':id']['events'][':testCaseId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestsIdEventsTestCaseIdQueryKey>
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
          Awaited<ReturnType<(typeof client.tests)[':id']['events'][':testCaseId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestsIdEventsTestCaseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestsIdEventsTestCaseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tests[':id'].events[':testCaseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTestsIdMessagesTestCaseIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tests)[':id']['messages'][':testCaseId']['$get']>
  >,
) {
  return ['tests', '/tests/:id/messages/:testCaseId', toValue(args)] as const
}

export function getTestsIdMessagesTestCaseIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tests)[':id']['messages'][':testCaseId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTestsIdMessagesTestCaseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tests[':id'].messages[':testCaseId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTestsIdMessagesTestCaseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tests)[':id']['messages'][':testCaseId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tests)[':id']['messages'][':testCaseId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tests)[':id']['messages'][':testCaseId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tests)[':id']['messages'][':testCaseId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTestsIdMessagesTestCaseIdQueryKey>
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
          Awaited<ReturnType<(typeof client.tests)[':id']['messages'][':testCaseId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTestsIdMessagesTestCaseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTestsIdMessagesTestCaseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tests[':id'].messages[':testCaseId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTestsIdTestCaseResultMutationKey() {
  return ['tests', '/tests/:id/testCaseResult', 'POST'] as const
}

export function getPostTestsIdTestCaseResultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tests)[':id']['testCaseResult']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tests)[':id']['testCaseResult']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTestsIdTestCaseResultMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tests)[':id']['testCaseResult']['$post']>,
    ) {
      return parseResponse(client.tests[':id'].testCaseResult.$post(args, options))
    },
  })
}

export function usePostTestsIdTestCaseResult<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tests)[':id']['testCaseResult']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tests)[':id']['testCaseResult']['$post']>,
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
  const mutationDefaults = getPostTestsIdTestCaseResultMutationOptions<TError, TOnMutateResult>(
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
