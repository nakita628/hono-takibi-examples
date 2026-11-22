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

export function getApplicationsKey() {
  return ['applications'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getQueriesKey() {
  return ['queries'] as const
}

export function getRolesKey() {
  return ['roles'] as const
}

export function getTablesKey() {
  return ['tables'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getViewsKey() {
  return ['views'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getPostApplicationsMutationKey() {
  return ['applications', '/applications', 'POST'] as const
}

export function getPostApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.applications.$post>) {
      return parseResponse(client.applications.$post(args, options))
    },
  })
}

export function usePostApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.applications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getApplicationsAppIdQueryKey(
  args: InferRequestType<(typeof client.applications)[':appId']['$get']>,
) {
  return ['applications', '/applications/:appId', args] as const
}

export function getApplicationsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.applications)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.applications)[':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationsAppIdQueryKey>
  >({
    queryKey: getApplicationsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.applications[':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.applications)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':appId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApplicationsAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApplicationsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.applications)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.applications)[':appId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApplicationsAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApplicationsAppIdMutationKey() {
  return ['applications', '/applications/:appId', 'PUT'] as const
}

export function getPutApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.applications)[':appId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':appId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.applications)[':appId']['$put']>) {
      return parseResponse(client.applications[':appId'].$put(args, options))
    },
  })
}

export function usePutApplicationsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':appId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.applications)[':appId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApplicationsAppIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApplicationsAppIdMutationKey() {
  return ['applications', '/applications/:appId', 'DELETE'] as const
}

export function getDeleteApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.applications)[':appId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApplicationsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.applications)[':appId']['$delete']>) {
      return parseResponse(client.applications[':appId'].$delete(args, options))
    },
  })
}

export function useDeleteApplicationsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':appId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.applications)[':appId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApplicationsAppIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApplicationsAppIdUnpublishMutationKey() {
  return ['applications', '/applications/:appId/unpublish', 'POST'] as const
}

export function getPostApplicationsAppIdUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':appId']['unpublish']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.applications)[':appId']['unpublish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsAppIdUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':appId']['unpublish']['$post']>,
    ) {
      return parseResponse(client.applications[':appId'].unpublish.$post(args, options))
    },
  })
}

export function usePostApplicationsAppIdUnpublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':appId']['unpublish']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.applications)[':appId']['unpublish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApplicationsAppIdUnpublishMutationOptions<
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

export function getPostApplicationsAppIdPublishMutationKey() {
  return ['applications', '/applications/:appId/publish', 'POST'] as const
}

export function getPostApplicationsAppIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':appId']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':appId']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsAppIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':appId']['publish']['$post']>,
    ) {
      return parseResponse(client.applications[':appId'].publish.$post(args, options))
    },
  })
}

export function usePostApplicationsAppIdPublish<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':appId']['publish']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.applications)[':appId']['publish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApplicationsAppIdPublishMutationOptions<TError, TOnMutateResult>(
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

export function getPostApplicationsAppIdImportMutationKey() {
  return ['applications', '/applications/:appId/import', 'POST'] as const
}

export function getPostApplicationsAppIdImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.applications)[':appId']['import']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.applications)[':appId']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsAppIdImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':appId']['import']['$post']>,
    ) {
      return parseResponse(client.applications[':appId'].import.$post(args, options))
    },
  })
}

export function usePostApplicationsAppIdImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.applications)[':appId']['import']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.applications)[':appId']['import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApplicationsAppIdImportMutationOptions<TError, TOnMutateResult>(
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

export function getPostApplicationsAppIdExportMutationKey() {
  return ['applications', '/applications/:appId/export', 'POST'] as const
}

export function getPostApplicationsAppIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.applications)[':appId']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.applications)[':appId']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsAppIdExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.applications)[':appId']['export']['$post']>,
    ) {
      return parseResponse(client.applications[':appId'].export.$post(args, options))
    },
  })
}

export function usePostApplicationsAppIdExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.applications)[':appId']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.applications)[':appId']['export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApplicationsAppIdExportMutationOptions<TError, TOnMutateResult>(
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

export function getPostApplicationsSearchMutationKey() {
  return ['applications', '/applications/search', 'POST'] as const
}

export function getPostApplicationsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.applications.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.applications.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApplicationsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.applications.search.$post>) {
      return parseResponse(client.applications.search.$post(args, options))
    },
  })
}

export function usePostApplicationsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.applications.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.applications.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApplicationsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostQueriesQueryIdMutationKey() {
  return ['queries', '/queries/:queryId', 'POST'] as const
}

export function getPostQueriesQueryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':queryId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.queries)[':queryId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueriesQueryIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.queries)[':queryId']['$post']>) {
      return parseResponse(client.queries[':queryId'].$post(args, options))
    },
  })
}

export function usePostQueriesQueryId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.queries)[':queryId']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.queries)[':queryId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueriesQueryIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostQueriesSearchMutationKey() {
  return ['queries', '/queries/search', 'POST'] as const
}

export function getPostQueriesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.queries.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQueriesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.queries.search.$post>) {
      return parseResponse(client.queries.search.$post(args, options))
    },
  })
}

export function usePostQueriesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.queries.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.queries.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQueriesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostRolesAssignMutationKey() {
  return ['roles', '/roles/assign', 'POST'] as const
}

export function getPostRolesAssignMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.assign.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.roles.assign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRolesAssignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.roles.assign.$post>) {
      return parseResponse(client.roles.assign.$post(args, options))
    },
  })
}

export function usePostRolesAssign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.assign.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.roles.assign.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRolesAssignMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostRolesUnassignMutationKey() {
  return ['roles', '/roles/unassign', 'POST'] as const
}

export function getPostRolesUnassignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.unassign.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.roles.unassign.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRolesUnassignMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.roles.unassign.$post>) {
      return parseResponse(client.roles.unassign.$post(args, options))
    },
  })
}

export function usePostRolesUnassign<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.unassign.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.roles.unassign.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRolesUnassignMutationOptions<TError, TOnMutateResult>(
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

export function getPostTablesTableIdRowsMutationKey() {
  return ['tables', '/tables/:tableId/rows', 'POST'] as const
}

export function getPostTablesTableIdRowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tables)[':tableId']['rows']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tables)[':tableId']['rows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTablesTableIdRowsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tables)[':tableId']['rows']['$post']>) {
      return parseResponse(client.tables[':tableId'].rows.$post(args, options))
    },
  })
}

export function usePostTablesTableIdRows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tables)[':tableId']['rows']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tables)[':tableId']['rows']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTablesTableIdRowsMutationOptions<TError, TOnMutateResult>(
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

export function getTablesTableIdRowsRowIdQueryKey(
  args: InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tables', '/tables/:tableId/rows/:rowId', keyArgs] as const
}

export function getTablesTableIdRowsRowIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tables)[':tableId']['rows'][':rowId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tables)[':tableId']['rows'][':rowId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesTableIdRowsRowIdQueryKey>
  >({
    queryKey: getTablesTableIdRowsRowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tables[':tableId'].rows[':rowId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTablesTableIdRowsRowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tables)[':tableId']['rows'][':rowId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tables)[':tableId']['rows'][':rowId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableIdRowsRowIdQueryKey>
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
      ...getTablesTableIdRowsRowIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTablesTableIdRowsRowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tables)[':tableId']['rows'][':rowId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tables)[':tableId']['rows'][':rowId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableIdRowsRowIdQueryKey>
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
      ...getTablesTableIdRowsRowIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutTablesTableIdRowsRowIdMutationKey() {
  return ['tables', '/tables/:tableId/rows/:rowId', 'PUT'] as const
}

export function getPutTablesTableIdRowsRowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tables)[':tableId']['rows'][':rowId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTablesTableIdRowsRowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$put']>,
    ) {
      return parseResponse(client.tables[':tableId'].rows[':rowId'].$put(args, options))
    },
  })
}

export function usePutTablesTableIdRowsRowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tables)[':tableId']['rows'][':rowId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTablesTableIdRowsRowIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTablesTableIdRowsRowIdMutationKey() {
  return ['tables', '/tables/:tableId/rows/:rowId', 'DELETE'] as const
}

export function getDeleteTablesTableIdRowsRowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tables)[':tableId']['rows'][':rowId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTablesTableIdRowsRowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$delete']>,
    ) {
      return parseResponse(client.tables[':tableId'].rows[':rowId'].$delete(args, options))
    },
  })
}

export function useDeleteTablesTableIdRowsRowId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tables)[':tableId']['rows'][':rowId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tables)[':tableId']['rows'][':rowId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTablesTableIdRowsRowIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostTablesTableIdRowsSearchMutationKey() {
  return ['tables', '/tables/:tableId/rows/search', 'POST'] as const
}

export function getPostTablesTableIdRowsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tables)[':tableId']['rows']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tables)[':tableId']['rows']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTablesTableIdRowsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tables)[':tableId']['rows']['search']['$post']>,
    ) {
      return parseResponse(client.tables[':tableId'].rows.search.$post(args, options))
    },
  })
}

export function usePostTablesTableIdRowsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.tables)[':tableId']['rows']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.tables)[':tableId']['rows']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTablesTableIdRowsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostTablesMutationKey() {
  return ['tables', '/tables', 'POST'] as const
}

export function getPostTablesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$post>>>>>,
    TError,
    InferRequestType<typeof client.tables.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTablesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tables.$post>) {
      return parseResponse(client.tables.$post(args, options))
    },
  })
}

export function usePostTables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.$post>>>>>,
        TError,
        InferRequestType<typeof client.tables.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTablesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTablesTableIdQueryKey(
  args: InferRequestType<(typeof client.tables)[':tableId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tables', '/tables/:tableId', keyArgs] as const
}

export function getTablesTableIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':tableId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':tableId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':tableId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTablesTableIdQueryKey>
  >({
    queryKey: getTablesTableIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tables[':tableId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTablesTableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':tableId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':tableId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':tableId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTablesTableIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTablesTableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':tableId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tables)[':tableId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':tableId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTablesTableIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTablesTableIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTablesTableIdMutationKey() {
  return ['tables', '/tables/:tableId', 'PUT'] as const
}

export function getPutTablesTableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':tableId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tables)[':tableId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTablesTableIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tables)[':tableId']['$put']>) {
      return parseResponse(client.tables[':tableId'].$put(args, options))
    },
  })
}

export function usePutTablesTableId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':tableId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tables)[':tableId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTablesTableIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTablesTableIdMutationKey() {
  return ['tables', '/tables/:tableId', 'DELETE'] as const
}

export function getDeleteTablesTableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':tableId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tables)[':tableId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTablesTableIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tables)[':tableId']['$delete']>) {
      return parseResponse(client.tables[':tableId'].$delete(args, options))
    },
  })
}

export function useDeleteTablesTableId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tables)[':tableId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.tables)[':tableId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTablesTableIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostTablesSearchMutationKey() {
  return ['tables', '/tables/search', 'POST'] as const
}

export function getPostTablesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.tables.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTablesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tables.search.$post>) {
      return parseResponse(client.tables.search.$post(args, options))
    },
  })
}

export function usePostTablesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tables.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.tables.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTablesSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
) {
  return ['users', '/users/:userId', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'PUT'] as const
}

export function getPutUsersUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$put']>) {
      return parseResponse(client.users[':userId'].$put(args, options))
    },
  })
}

export function usePutUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutUsersUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteUsersUserIdMutationKey() {
  return ['users', '/users/:userId', 'DELETE'] as const
}

export function getDeleteUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':userId']['$delete']>) {
      return parseResponse(client.users[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':userId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostUsersSearchMutationKey() {
  return ['users', '/users/search', 'POST'] as const
}

export function getPostUsersSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.users.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.search.$post>) {
      return parseResponse(client.users.search.$post(args, options))
    },
  })
}

export function usePostUsersSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.users.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostViewsMutationKey() {
  return ['views', '/views', 'POST'] as const
}

export function getPostViewsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.views.$post>>>>>,
    TError,
    InferRequestType<typeof client.views.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostViewsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.views.$post>) {
      return parseResponse(client.views.$post(args, options))
    },
  })
}

export function usePostViews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.views.$post>>>>>,
        TError,
        InferRequestType<typeof client.views.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostViewsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getViewsViewIdQueryKey(
  args: InferRequestType<(typeof client.views)[':viewId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['views', '/views/:viewId', keyArgs] as const
}

export function getViewsViewIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':viewId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.views)[':viewId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':viewId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getViewsViewIdQueryKey>
  >({
    queryKey: getViewsViewIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.views[':viewId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useViewsViewId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':viewId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.views)[':viewId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':viewId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getViewsViewIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getViewsViewIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseViewsViewId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':viewId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.views)[':viewId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':viewId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getViewsViewIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getViewsViewIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutViewsViewIdMutationKey() {
  return ['views', '/views/:viewId', 'PUT'] as const
}

export function getPutViewsViewIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':viewId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.views)[':viewId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutViewsViewIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.views)[':viewId']['$put']>) {
      return parseResponse(client.views[':viewId'].$put(args, options))
    },
  })
}

export function usePutViewsViewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':viewId']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.views)[':viewId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutViewsViewIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteViewsViewIdMutationKey() {
  return ['views', '/views/:viewId', 'DELETE'] as const
}

export function getDeleteViewsViewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':viewId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.views)[':viewId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteViewsViewIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.views)[':viewId']['$delete']>) {
      return parseResponse(client.views[':viewId'].$delete(args, options))
    },
  })
}

export function useDeleteViewsViewId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.views)[':viewId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.views)[':viewId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteViewsViewIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostViewsSearchMutationKey() {
  return ['views', '/views/search', 'POST'] as const
}

export function getPostViewsSearchMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.views.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.views.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostViewsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.views.search.$post>) {
      return parseResponse(client.views.search.$post(args, options))
    },
  })
}

export function usePostViewsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.views.search.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.views.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostViewsSearchMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostViewsViewIdRowsSearchMutationKey() {
  return ['views', '/views/:viewId/rows/search', 'POST'] as const
}

export function getPostViewsViewIdRowsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.views)[':viewId']['rows']['search']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.views)[':viewId']['rows']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostViewsViewIdRowsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.views)[':viewId']['rows']['search']['$post']>,
    ) {
      return parseResponse(client.views[':viewId'].rows.search.$post(args, options))
    },
  })
}

export function usePostViewsViewIdRowsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.views)[':viewId']['rows']['search']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.views)[':viewId']['rows']['search']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostViewsViewIdRowsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getPostWorkspacesMutationKey() {
  return ['workspaces', '/workspaces', 'POST'] as const
}

export function getPostWorkspacesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$post>>>>>,
    TError,
    InferRequestType<typeof client.workspaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workspaces.$post>) {
      return parseResponse(client.workspaces.$post(args, options))
    },
  })
}

export function usePostWorkspaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.workspaces.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkspacesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceIdQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspaceId', args] as const
}

export function getWorkspacesWorkspaceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspaceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkspacesWorkspaceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
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
      ...getWorkspacesWorkspaceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
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
      ...getWorkspacesWorkspaceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutWorkspacesWorkspaceIdMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId', 'PUT'] as const
}

export function getPutWorkspacesWorkspaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspaceId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspaceIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$put']>) {
      return parseResponse(client.workspaces[':workspaceId'].$put(args, options))
    },
  })
}

export function usePutWorkspacesWorkspaceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workspaces)[':workspaceId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutWorkspacesWorkspaceIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteWorkspacesWorkspaceIdMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId', 'DELETE'] as const
}

export function getDeleteWorkspacesWorkspaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspaceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$delete']>,
    ) {
      return parseResponse(client.workspaces[':workspaceId'].$delete(args, options))
    },
  })
}

export function useDeleteWorkspacesWorkspaceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workspaces)[':workspaceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteWorkspacesWorkspaceIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostWorkspacesWorkspaceIdPublishMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/publish', 'POST'] as const
}

export function getPostWorkspacesWorkspaceIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['publish']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspaceId']['publish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspaceId']['publish']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspaceId'].publish.$post(args, options))
    },
  })
}

export function usePostWorkspacesWorkspaceIdPublish<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['publish']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workspaces)[':workspaceId']['publish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkspacesWorkspaceIdPublishMutationOptions<
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

export function getPostWorkspacesWorkspaceIdUnpublishMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/unpublish', 'POST'] as const
}

export function getPostWorkspacesWorkspaceIdUnpublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['unpublish']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspaceId']['unpublish']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceIdUnpublishMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspaceId']['unpublish']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspaceId'].unpublish.$post(args, options))
    },
  })
}

export function usePostWorkspacesWorkspaceIdUnpublish<
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
                  ReturnType<(typeof client.workspaces)[':workspaceId']['unpublish']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.workspaces)[':workspaceId']['unpublish']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkspacesWorkspaceIdUnpublishMutationOptions<
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

export function getPostWorkspacesWorkspaceIdImportMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/import', 'POST'] as const
}

export function getPostWorkspacesWorkspaceIdImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['import']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspaceId']['import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceIdImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspaceId']['import']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspaceId'].import.$post(args, options))
    },
  })
}

export function usePostWorkspacesWorkspaceIdImport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['import']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.workspaces)[':workspaceId']['import']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkspacesWorkspaceIdImportMutationOptions<
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

export function getPostWorkspacesWorkspaceIdExportMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/export', 'POST'] as const
}

export function getPostWorkspacesWorkspaceIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspaceId']['export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceIdExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspaceId']['export']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspaceId'].export.$post(args, options))
    },
  })
}

export function usePostWorkspacesWorkspaceIdExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['export']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.workspaces)[':workspaceId']['export']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkspacesWorkspaceIdExportMutationOptions<
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

export function getWorkspacesWorkspaceIdGroupsQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['groups']['$get']>,
) {
  return ['workspaces', '/workspaces/:workspaceId/groups', args] as const
}

export function getWorkspacesWorkspaceIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdGroupsQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspaceId'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useWorkspacesWorkspaceIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceIdGroupsQueryKey>
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
      ...getWorkspacesWorkspaceIdGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseWorkspacesWorkspaceIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['groups']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWorkspacesWorkspaceIdGroupsQueryKey>
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
      ...getWorkspacesWorkspaceIdGroupsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostWorkspacesSearchMutationKey() {
  return ['workspaces', '/workspaces/search', 'POST'] as const
}

export function getPostWorkspacesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.workspaces.search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workspaces.search.$post>) {
      return parseResponse(client.workspaces.search.$post(args, options))
    },
  })
}

export function usePostWorkspacesSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.search.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.workspaces.search.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostWorkspacesSearchMutationOptions<TError, TOnMutateResult>(
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
