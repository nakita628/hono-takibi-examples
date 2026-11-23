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

export function getApiKey() {
  return ['api'] as const
}

export function getArchivesKey() {
  return ['archives'] as const
}

export function getBrandingKey() {
  return ['branding'] as const
}

export function getChangeRequestsKey() {
  return ['changeRequests'] as const
}

export function getComplianceKey() {
  return ['compliance'] as const
}

export function getCveKey() {
  return ['cve'] as const
}

export function getDatasourcesKey() {
  return ['datasources'] as const
}

export function getDirectivesKey() {
  return ['directives'] as const
}

export function getGroupsKey() {
  return ['groups'] as const
}

export function getInfoKey() {
  return ['info'] as const
}

export function getInventoriesKey() {
  return ['inventories'] as const
}

export function getMethodsKey() {
  return ['methods'] as const
}

export function getNodesKey() {
  return ['nodes'] as const
}

export function getParametersKey() {
  return ['parameters'] as const
}

export function getRulesKey() {
  return ['rules'] as const
}

export function getScaleoutrelayKey() {
  return ['scaleoutrelay'] as const
}

export function getSecretKey() {
  return ['secret'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getStatusKey() {
  return ['status'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getTechniquesKey() {
  return ['techniques'] as const
}

export function getUsermanagementKey() {
  return ['usermanagement'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getValidatedUsersKey() {
  return ['validatedUsers'] as const
}

export function getApiChangeRequestsQueryKey() {
  return ['api', '/api/changeRequests'] as const
}

export function getApiChangeRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiChangeRequestsQueryKey>
  >({
    queryKey: getApiChangeRequestsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.changeRequests.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiChangeRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiChangeRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiChangeRequestsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiChangeRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiChangeRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiChangeRequestsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getArchivesExportQueryKey(
  args: InferRequestType<typeof client.archives.export.$get>,
) {
  return ['archives', '/archives/export', args] as const
}

export function getArchivesExportQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.archives.export.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchivesExportQueryKey>
  >({
    queryKey: getArchivesExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.archives.export.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useArchivesExport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.archives.export.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getArchivesExportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getArchivesExportQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseArchivesExport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.archives.export.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getArchivesExportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getArchivesExportQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostArchivesImportMutationKey() {
  return ['archives', '/archives/import', 'POST'] as const
}

export function getPostArchivesImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.archives.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostArchivesImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.archives.import.$post>) {
      return parseResponse(client.archives.import.$post(args, options))
    },
  })
}

export function usePostArchivesImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.import.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.archives.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostArchivesImportMutationOptions<TError, TOnMutateResult>(
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

export function getBrandingQueryKey() {
  return ['branding', '/branding'] as const
}

export function getBrandingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBrandingQueryKey>
  >({
    queryKey: getBrandingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.branding.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBranding<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBrandingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBrandingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBranding<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBrandingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBrandingQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostBrandingMutationKey() {
  return ['branding', '/branding', 'POST'] as const
}

export function getPostBrandingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$post>>>>>,
    TError,
    InferRequestType<typeof client.branding.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostBrandingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.branding.$post>) {
      return parseResponse(client.branding.$post(args, options))
    },
  })
}

export function usePostBranding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.branding.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBrandingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostBrandingReloadMutationKey() {
  return ['branding', '/branding/reload', 'POST'] as const
}

export function getPostBrandingReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.reload.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostBrandingReloadMutationKey(),
    async mutationFn() {
      return parseResponse(client.branding.reload.$post(undefined, options))
    },
  })
}

export function usePostBrandingReload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.reload.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBrandingReloadMutationOptions<TError, TOnMutateResult>(
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

export function getChangeRequestsChangeRequestIdQueryKey(
  args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$get']>,
) {
  return ['changeRequests', '/changeRequests/:changeRequestId', args] as const
}

export function getChangeRequestsChangeRequestIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChangeRequestsChangeRequestIdQueryKey>
  >({
    queryKey: getChangeRequestsChangeRequestIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.changeRequests[':changeRequestId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useChangeRequestsChangeRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChangeRequestsChangeRequestIdQueryKey>
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
      ...getChangeRequestsChangeRequestIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseChangeRequestsChangeRequestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getChangeRequestsChangeRequestIdQueryKey>
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
      ...getChangeRequestsChangeRequestIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostChangeRequestsChangeRequestIdMutationKey() {
  return ['changeRequests', '/changeRequests/:changeRequestId', 'POST'] as const
}

export function getPostChangeRequestsChangeRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChangeRequestsChangeRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$post']>,
    ) {
      return parseResponse(client.changeRequests[':changeRequestId'].$post(args, options))
    },
  })
}

export function usePostChangeRequestsChangeRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChangeRequestsChangeRequestIdMutationOptions<
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

export function getDeleteChangeRequestsChangeRequestIdMutationKey() {
  return ['changeRequests', '/changeRequests/:changeRequestId', 'DELETE'] as const
}

export function getDeleteChangeRequestsChangeRequestIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteChangeRequestsChangeRequestIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$delete']>,
    ) {
      return parseResponse(client.changeRequests[':changeRequestId'].$delete(args, options))
    },
  })
}

export function useDeleteChangeRequestsChangeRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteChangeRequestsChangeRequestIdMutationOptions<
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

export function getPostChangeRequestsChangeRequestIdAcceptMutationKey() {
  return ['changeRequests', '/changeRequests/:changeRequestId/accept', 'POST'] as const
}

export function getPostChangeRequestsChangeRequestIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['accept']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.changeRequests)[':changeRequestId']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostChangeRequestsChangeRequestIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['accept']['$post']>,
    ) {
      return parseResponse(client.changeRequests[':changeRequestId'].accept.$post(args, options))
    },
  })
}

export function usePostChangeRequestsChangeRequestIdAccept<
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
                ReturnType<(typeof client.changeRequests)[':changeRequestId']['accept']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.changeRequests)[':changeRequestId']['accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostChangeRequestsChangeRequestIdAcceptMutationOptions<
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

export function getComplianceQueryKey(args: InferRequestType<typeof client.compliance.$get>) {
  return ['compliance', '/compliance', args] as const
}

export function getComplianceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.compliance.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getComplianceQueryKey>
  >({
    queryKey: getComplianceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.compliance.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCompliance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.compliance.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getComplianceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getComplianceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCompliance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.compliance.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getComplianceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getComplianceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getComplianceNodesQueryKey(
  args: InferRequestType<typeof client.compliance.nodes.$get>,
) {
  return ['compliance', '/compliance/nodes', args] as const
}

export function getComplianceNodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.compliance.nodes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getComplianceNodesQueryKey>
  >({
    queryKey: getComplianceNodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.compliance.nodes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useComplianceNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.compliance.nodes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getComplianceNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getComplianceNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseComplianceNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.compliance.nodes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getComplianceNodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getComplianceNodesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getComplianceNodesNodeIdQueryKey(
  args: InferRequestType<(typeof client.compliance.nodes)[':nodeId']['$get']>,
) {
  return ['compliance', '/compliance/nodes/:nodeId', args] as const
}

export function getComplianceNodesNodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.compliance.nodes)[':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComplianceNodesNodeIdQueryKey>
  >({
    queryKey: getComplianceNodesNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.compliance.nodes[':nodeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useComplianceNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.compliance.nodes)[':nodeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getComplianceNodesNodeIdQueryKey>
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
      ...getComplianceNodesNodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseComplianceNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.compliance.nodes)[':nodeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getComplianceNodesNodeIdQueryKey>
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
      ...getComplianceNodesNodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getComplianceRulesQueryKey(
  args: InferRequestType<typeof client.compliance.rules.$get>,
) {
  return ['compliance', '/compliance/rules', args] as const
}

export function getComplianceRulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.compliance.rules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getComplianceRulesQueryKey>
  >({
    queryKey: getComplianceRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.compliance.rules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useComplianceRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.compliance.rules.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getComplianceRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getComplianceRulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseComplianceRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.compliance.rules.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getComplianceRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getComplianceRulesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getComplianceRulesRuleIdQueryKey(
  args: InferRequestType<(typeof client.compliance.rules)[':ruleId']['$get']>,
) {
  return ['compliance', '/compliance/rules/:ruleId', args] as const
}

export function getComplianceRulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.compliance.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComplianceRulesRuleIdQueryKey>
  >({
    queryKey: getComplianceRulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.compliance.rules[':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useComplianceRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.compliance.rules)[':ruleId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getComplianceRulesRuleIdQueryKey>
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
      ...getComplianceRulesRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseComplianceRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.compliance.rules)[':ruleId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getComplianceRulesRuleIdQueryKey>
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
      ...getComplianceRulesRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCveQueryKey() {
  return ['cve', '/cve'] as const
}

export function getCveQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCveQueryKey>
  >({
    queryKey: getCveQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cve.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCve<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCve<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCveQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCveQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCveCheckMutationKey() {
  return ['cve', '/cve/check', 'POST'] as const
}

export function getPostCveCheckMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostCveCheckMutationKey(),
    async mutationFn() {
      return parseResponse(client.cve.check.$post(undefined, options))
    },
  })
}

export function usePostCveCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCveCheckMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCveCheckConfigQueryKey() {
  return ['cve', '/cve/check/config'] as const
}

export function getCveCheckConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCveCheckConfigQueryKey>
  >({
    queryKey: getCveCheckConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cve.check.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCveCheckConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCveCheckConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCveCheckConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCveCheckConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCveCheckConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCveCheckConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCveCheckConfigMutationKey() {
  return ['cve', '/cve/check/config', 'POST'] as const
}

export function getPostCveCheckConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cve.check.config.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCveCheckConfigMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cve.check.config.$post>) {
      return parseResponse(client.cve.check.config.$post(args, options))
    },
  })
}

export function usePostCveCheckConfig<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cve.check.config.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCveCheckConfigMutationOptions<TError, TOnMutateResult>(
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

export function getCveCheckLastQueryKey() {
  return ['cve', '/cve/check/last'] as const
}

export function getCveCheckLastQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCveCheckLastQueryKey>
  >({
    queryKey: getCveCheckLastQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cve.check.last.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCveCheckLast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCveCheckLastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCveCheckLastQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCveCheckLast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCveCheckLastQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCveCheckLastQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCveListMutationKey() {
  return ['cve', '/cve/list', 'POST'] as const
}

export function getPostCveListMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.list.$post>>>>>,
    TError,
    InferRequestType<typeof client.cve.list.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCveListMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cve.list.$post>) {
      return parseResponse(client.cve.list.$post(args, options))
    },
  })
}

export function usePostCveList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.list.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.cve.list.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCveListMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostCveUpdateIndexMutationKey() {
  return ['cve', '/cve/update/', 'POST'] as const
}

export function getPostCveUpdateIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.update.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cve.update.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCveUpdateIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cve.update.index.$post>) {
      return parseResponse(client.cve.update.index.$post(args, options))
    },
  })
}

export function usePostCveUpdateIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cve.update.index.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cve.update.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCveUpdateIndexMutationOptions<TError, TOnMutateResult>(
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

export function getPostCveUpdateFsMutationKey() {
  return ['cve', '/cve/update/fs', 'POST'] as const
}

export function getPostCveUpdateFsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.update.fs.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostCveUpdateFsMutationKey(),
    async mutationFn() {
      return parseResponse(client.cve.update.fs.$post(undefined, options))
    },
  })
}

export function usePostCveUpdateFs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.update.fs.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCveUpdateFsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDatasourcesQueryKey() {
  return ['datasources', '/datasources'] as const
}

export function getDatasourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatasourcesQueryKey>
  >({
    queryKey: getDatasourcesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDatasources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDatasourcesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDatasources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDatasourcesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutDatasourcesMutationKey() {
  return ['datasources', '/datasources', 'PUT'] as const
}

export function getPutDatasourcesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$put>>>>>,
    TError,
    InferRequestType<typeof client.datasources.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutDatasourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datasources.$put>) {
      return parseResponse(client.datasources.$put(args, options))
    },
  })
}

export function usePutDatasources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.datasources.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDatasourcesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDatasourcesReloadMutationKey() {
  return ['datasources', '/datasources/reload', 'POST'] as const
}

export function getPostDatasourcesReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.reload.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesReloadMutationKey(),
    async mutationFn() {
      return parseResponse(client.datasources.reload.$post(undefined, options))
    },
  })
}

export function usePostDatasourcesReload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.datasources.reload.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatasourcesReloadMutationOptions<TError, TOnMutateResult>(
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

export function getPostDatasourcesReloadDatasourceIdMutationKey() {
  return ['datasources', '/datasources/reload/:datasourceId', 'POST'] as const
}

export function getPostDatasourcesReloadDatasourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources.reload)[':datasourceId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasources.reload)[':datasourceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesReloadDatasourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.datasources.reload)[':datasourceId']['$post']>,
    ) {
      return parseResponse(client.datasources.reload[':datasourceId'].$post(args, options))
    },
  })
}

export function usePostDatasourcesReloadDatasourceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources.reload)[':datasourceId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasources.reload)[':datasourceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatasourcesReloadDatasourceIdMutationOptions<
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

export function getDatasourcesDatasourceIdQueryKey(
  args: InferRequestType<(typeof client.datasources)[':datasourceId']['$get']>,
) {
  return ['datasources', '/datasources/:datasourceId', args] as const
}

export function getDatasourcesDatasourceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasources)[':datasourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesDatasourceIdQueryKey>
  >({
    queryKey: getDatasourcesDatasourceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources[':datasourceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDatasourcesDatasourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasources)[':datasourceId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesDatasourceIdQueryKey>
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
      ...getDatasourcesDatasourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDatasourcesDatasourceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasources)[':datasourceId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesDatasourceIdQueryKey>
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
      ...getDatasourcesDatasourceIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDatasourcesDatasourceIdMutationKey() {
  return ['datasources', '/datasources/:datasourceId', 'POST'] as const
}

export function getPostDatasourcesDatasourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasources)[':datasourceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesDatasourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.datasources)[':datasourceId']['$post']>,
    ) {
      return parseResponse(client.datasources[':datasourceId'].$post(args, options))
    },
  })
}

export function usePostDatasourcesDatasourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasources)[':datasourceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatasourcesDatasourceIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDatasourcesDatasourceIdMutationKey() {
  return ['datasources', '/datasources/:datasourceId', 'DELETE'] as const
}

export function getDeleteDatasourcesDatasourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasources)[':datasourceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasourcesDatasourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.datasources)[':datasourceId']['$delete']>,
    ) {
      return parseResponse(client.datasources[':datasourceId'].$delete(args, options))
    },
  })
}

export function useDeleteDatasourcesDatasourceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasources)[':datasourceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatasourcesDatasourceIdMutationOptions<TError, TOnMutateResult>(
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

export function getDirectivesQueryKey() {
  return ['directives', '/directives'] as const
}

export function getDirectivesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDirectivesQueryKey>
  >({
    queryKey: getDirectivesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.directives.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDirectives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDirectivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDirectivesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDirectives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDirectivesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDirectivesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutDirectivesMutationKey() {
  return ['directives', '/directives', 'PUT'] as const
}

export function getPutDirectivesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$put>>>>>,
    TError,
    InferRequestType<typeof client.directives.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutDirectivesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.directives.$put>) {
      return parseResponse(client.directives.$put(args, options))
    },
  })
}

export function usePutDirectives<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.directives.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDirectivesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDirectivesDirectiveIdQueryKey(
  args: InferRequestType<(typeof client.directives)[':directiveId']['$get']>,
) {
  return ['directives', '/directives/:directiveId', args] as const
}

export function getDirectivesDirectiveIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directives)[':directiveId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectivesDirectiveIdQueryKey>
  >({
    queryKey: getDirectivesDirectiveIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.directives[':directiveId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDirectivesDirectiveId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directives)[':directiveId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectivesDirectiveIdQueryKey>
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
      ...getDirectivesDirectiveIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDirectivesDirectiveId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.directives)[':directiveId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectivesDirectiveIdQueryKey>
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
      ...getDirectivesDirectiveIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostDirectivesDirectiveIdMutationKey() {
  return ['directives', '/directives/:directiveId', 'POST'] as const
}

export function getPostDirectivesDirectiveIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.directives)[':directiveId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.directives)[':directiveId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDirectivesDirectiveIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.directives)[':directiveId']['$post']>) {
      return parseResponse(client.directives[':directiveId'].$post(args, options))
    },
  })
}

export function usePostDirectivesDirectiveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directives)[':directiveId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.directives)[':directiveId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDirectivesDirectiveIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteDirectivesDirectiveIdMutationKey() {
  return ['directives', '/directives/:directiveId', 'DELETE'] as const
}

export function getDeleteDirectivesDirectiveIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.directives)[':directiveId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.directives)[':directiveId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDirectivesDirectiveIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.directives)[':directiveId']['$delete']>,
    ) {
      return parseResponse(client.directives[':directiveId'].$delete(args, options))
    },
  })
}

export function useDeleteDirectivesDirectiveId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directives)[':directiveId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.directives)[':directiveId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDirectivesDirectiveIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDirectivesDirectiveIdCheckMutationKey() {
  return ['directives', '/directives/:directiveId/check', 'POST'] as const
}

export function getPostDirectivesDirectiveIdCheckMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.directives)[':directiveId']['check']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.directives)[':directiveId']['check']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDirectivesDirectiveIdCheckMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.directives)[':directiveId']['check']['$post']>,
    ) {
      return parseResponse(client.directives[':directiveId'].check.$post(args, options))
    },
  })
}

export function usePostDirectivesDirectiveIdCheck<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.directives)[':directiveId']['check']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.directives)[':directiveId']['check']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDirectivesDirectiveIdCheckMutationOptions<
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

export function getGroupsQueryKey() {
  return ['groups', '/groups'] as const
}

export function getGroupsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >({
    queryKey: getGroupsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutGroupsMutationKey() {
  return ['groups', '/groups', 'PUT'] as const
}

export function getPutGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$put>>>>>,
    TError,
    InferRequestType<typeof client.groups.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.$put>) {
      return parseResponse(client.groups.$put(args, options))
    },
  })
}

export function usePutGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$put>>>>>,
        TError,
        InferRequestType<typeof client.groups.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutGroupsCategoriesMutationKey() {
  return ['groups', '/groups/categories', 'PUT'] as const
}

export function getPutGroupsCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.categories.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.groups.categories.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutGroupsCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.groups.categories.$put>) {
      return parseResponse(client.groups.categories.$put(args, options))
    },
  })
}

export function usePutGroupsCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.groups.categories.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.groups.categories.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGroupsCategoriesMutationOptions<TError, TOnMutateResult>(
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

export function getGroupsCategoriesGroupCategoryIdQueryKey(
  args: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$get']>,
) {
  return ['groups', '/groups/categories/:groupCategoryId', args] as const
}

export function getGroupsCategoriesGroupCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsCategoriesGroupCategoryIdQueryKey>
  >({
    queryKey: getGroupsCategoriesGroupCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.categories[':groupCategoryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGroupsCategoriesGroupCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsCategoriesGroupCategoryIdQueryKey>
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
      ...getGroupsCategoriesGroupCategoryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGroupsCategoriesGroupCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsCategoriesGroupCategoryIdQueryKey>
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
      ...getGroupsCategoriesGroupCategoryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGroupsCategoriesGroupCategoryIdMutationKey() {
  return ['groups', '/groups/categories/:groupCategoryId', 'POST'] as const
}

export function getPostGroupsCategoriesGroupCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsCategoriesGroupCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$post']>,
    ) {
      return parseResponse(client.groups.categories[':groupCategoryId'].$post(args, options))
    },
  })
}

export function usePostGroupsCategoriesGroupCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsCategoriesGroupCategoryIdMutationOptions<
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

export function getDeleteGroupsCategoriesGroupCategoryIdMutationKey() {
  return ['groups', '/groups/categories/:groupCategoryId', 'DELETE'] as const
}

export function getDeleteGroupsCategoriesGroupCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsCategoriesGroupCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$delete']>,
    ) {
      return parseResponse(client.groups.categories[':groupCategoryId'].$delete(args, options))
    },
  })
}

export function useDeleteGroupsCategoriesGroupCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsCategoriesGroupCategoryIdMutationOptions<
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

export function getGroupsTreeQueryKey() {
  return ['groups', '/groups/tree'] as const
}

export function getGroupsTreeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsTreeQueryKey>
  >({
    queryKey: getGroupsTreeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.groups.tree.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsTree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsTreeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsTreeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsTree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsTreeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsTreeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
) {
  return ['groups', '/groups/:groupId', args] as const
}

export function getGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >({
    queryKey: getGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.groups[':groupId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGroupsGroupIdMutationKey() {
  return ['groups', '/groups/:groupId', 'POST'] as const
}

export function getPostGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':groupId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':groupId']['$post']>) {
      return parseResponse(client.groups[':groupId'].$post(args, options))
    },
  })
}

export function usePostGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':groupId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGroupsGroupIdMutationKey() {
  return ['groups', '/groups/:groupId', 'DELETE'] as const
}

export function getDeleteGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':groupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGroupsGroupIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.groups)[':groupId']['$delete']>) {
      return parseResponse(client.groups[':groupId'].$delete(args, options))
    },
  })
}

export function useDeleteGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':groupId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostGroupsGroupIdReloadMutationKey() {
  return ['groups', '/groups/:groupId/reload', 'POST'] as const
}

export function getPostGroupsGroupIdReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.groups)[':groupId']['reload']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.groups)[':groupId']['reload']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGroupsGroupIdReloadMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.groups)[':groupId']['reload']['$post']>,
    ) {
      return parseResponse(client.groups[':groupId'].reload.$post(args, options))
    },
  })
}

export function usePostGroupsGroupIdReload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.groups)[':groupId']['reload']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.groups)[':groupId']['reload']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGroupsGroupIdReloadMutationOptions<TError, TOnMutateResult>(
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

export function getInfoQueryKey() {
  return ['info', '/info'] as const
}

export function getInfoQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoQueryKey>
  >({
    queryKey: getInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInfoDetailsEndpointNameQueryKey(
  args: InferRequestType<(typeof client.info.details)[':endpointName']['$get']>,
) {
  return ['info', '/info/details/:endpointName', args] as const
}

export function getInfoDetailsEndpointNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.info.details)[':endpointName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info.details)[':endpointName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.info.details)[':endpointName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInfoDetailsEndpointNameQueryKey>
  >({
    queryKey: getInfoDetailsEndpointNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.info.details[':endpointName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useInfoDetailsEndpointName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.info.details)[':endpointName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info.details)[':endpointName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.info.details)[':endpointName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInfoDetailsEndpointNameQueryKey>
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
      ...getInfoDetailsEndpointNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseInfoDetailsEndpointName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.info.details)[':endpointName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info.details)[':endpointName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.info.details)[':endpointName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInfoDetailsEndpointNameQueryKey>
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
      ...getInfoDetailsEndpointNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getInfoSectionIdQueryKey(
  args: InferRequestType<(typeof client.info)[':sectionId']['$get']>,
) {
  return ['info', '/info/:sectionId', args] as const
}

export function getInfoSectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info)[':sectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInfoSectionIdQueryKey>
  >({
    queryKey: getInfoSectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.info[':sectionId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInfoSectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info)[':sectionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInfoSectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInfoSectionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInfoSectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.info)[':sectionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInfoSectionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInfoSectionIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInventoriesInfoQueryKey() {
  return ['inventories', '/inventories/info'] as const
}

export function getInventoriesInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInventoriesInfoQueryKey>
  >({
    queryKey: getInventoriesInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.inventories.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInventoriesInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInventoriesInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInventoriesInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInventoriesInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getInventoriesInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInventoriesInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInventoriesUploadMutationKey() {
  return ['inventories', '/inventories/upload', 'POST'] as const
}

export function getPostInventoriesUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.upload.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.inventories.upload.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInventoriesUploadMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.inventories.upload.$post>) {
      return parseResponse(client.inventories.upload.$post(args, options))
    },
  })
}

export function usePostInventoriesUpload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.inventories.upload.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.inventories.upload.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInventoriesUploadMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventoriesWatcherRestartMutationKey() {
  return ['inventories', '/inventories/watcher/restart', 'POST'] as const
}

export function getPostInventoriesWatcherRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.inventories.watcher.restart.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostInventoriesWatcherRestartMutationKey(),
    async mutationFn() {
      return parseResponse(client.inventories.watcher.restart.$post(undefined, options))
    },
  })
}

export function usePostInventoriesWatcherRestart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.inventories.watcher.restart.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInventoriesWatcherRestartMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventoriesWatcherStartMutationKey() {
  return ['inventories', '/inventories/watcher/start', 'POST'] as const
}

export function getPostInventoriesWatcherStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.inventories.watcher.start.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostInventoriesWatcherStartMutationKey(),
    async mutationFn() {
      return parseResponse(client.inventories.watcher.start.$post(undefined, options))
    },
  })
}

export function usePostInventoriesWatcherStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.inventories.watcher.start.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInventoriesWatcherStartMutationOptions<TError, TOnMutateResult>(
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

export function getPostInventoriesWatcherStopMutationKey() {
  return ['inventories', '/inventories/watcher/stop', 'POST'] as const
}

export function getPostInventoriesWatcherStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.inventories.watcher.stop.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostInventoriesWatcherStopMutationKey(),
    async mutationFn() {
      return parseResponse(client.inventories.watcher.stop.$post(undefined, options))
    },
  })
}

export function usePostInventoriesWatcherStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.inventories.watcher.stop.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInventoriesWatcherStopMutationOptions<TError, TOnMutateResult>(
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

export function getMethodsQueryKey() {
  return ['methods', '/methods'] as const
}

export function getMethodsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMethodsQueryKey>
  >({
    queryKey: getMethodsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.methods.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMethodsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMethodsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMethodsReloadMutationKey() {
  return ['methods', '/methods/reload', 'POST'] as const
}

export function getPostMethodsReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.reload.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostMethodsReloadMutationKey(),
    async mutationFn() {
      return parseResponse(client.methods.reload.$post(undefined, options))
    },
  })
}

export function usePostMethodsReload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.reload.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMethodsReloadMutationOptions<TError, TOnMutateResult>(
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

export function getPutNodesMutationKey() {
  return ['nodes', '/nodes', 'PUT'] as const
}

export function getPutNodesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$put>>>>>,
    TError,
    InferRequestType<typeof client.nodes.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutNodesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.nodes.$put>) {
      return parseResponse(client.nodes.$put(args, options))
    },
  })
}

export function usePutNodes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$put>>>>>,
        TError,
        InferRequestType<typeof client.nodes.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNodesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostNodesApplyPolicyMutationKey() {
  return ['nodes', '/nodes/applyPolicy', 'POST'] as const
}

export function getPostNodesApplyPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.applyPolicy.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostNodesApplyPolicyMutationKey(),
    async mutationFn() {
      return parseResponse(client.nodes.applyPolicy.$post(undefined, options))
    },
  })
}

export function usePostNodesApplyPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.nodes.applyPolicy.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesApplyPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getNodesPendingQueryKey(args: InferRequestType<typeof client.nodes.pending.$get>) {
  return ['nodes', '/nodes/pending', args] as const
}

export function getNodesPendingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nodes.pending.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodesPendingQueryKey>
  >({
    queryKey: getNodesPendingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes.pending.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNodesPending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nodes.pending.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodesPendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodesPendingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodesPending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nodes.pending.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodesPendingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodesPendingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNodesPendingNodeIdMutationKey() {
  return ['nodes', '/nodes/pending/:nodeId', 'POST'] as const
}

export function getPostNodesPendingNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nodes.pending)[':nodeId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes.pending)[':nodeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodesPendingNodeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.nodes.pending)[':nodeId']['$post']>) {
      return parseResponse(client.nodes.pending[':nodeId'].$post(args, options))
    },
  })
}

export function usePostNodesPendingNodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes.pending)[':nodeId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.nodes.pending)[':nodeId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesPendingNodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getNodesStatusQueryKey(args: InferRequestType<typeof client.nodes.status.$get>) {
  return ['nodes', '/nodes/status', args] as const
}

export function getNodesStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.nodes.status.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodesStatusQueryKey>
  >({
    queryKey: getNodesStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes.status.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNodesStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nodes.status.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodesStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodesStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodesStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.nodes.status.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNodesStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodesStatusQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNodesNodeIdQueryKey(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['$get']>,
) {
  return ['nodes', '/nodes/:nodeId', args] as const
}

export function getNodesNodeIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdQueryKey>
  >({
    queryKey: getNodesNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':nodeId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNodesNodeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNodesNodeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNodesNodeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNodesNodeIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostNodesNodeIdMutationKey() {
  return ['nodes', '/nodes/:nodeId', 'POST'] as const
}

export function getPostNodesNodeIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes)[':nodeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodesNodeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.nodes)[':nodeId']['$post']>) {
      return parseResponse(client.nodes[':nodeId'].$post(args, options))
    },
  })
}

export function usePostNodesNodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.nodes)[':nodeId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesNodeIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteNodesNodeIdMutationKey() {
  return ['nodes', '/nodes/:nodeId', 'DELETE'] as const
}

export function getDeleteNodesNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes)[':nodeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNodesNodeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.nodes)[':nodeId']['$delete']>) {
      return parseResponse(client.nodes[':nodeId'].$delete(args, options))
    },
  })
}

export function useDeleteNodesNodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.nodes)[':nodeId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNodesNodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostNodesNodeIdApplyPolicyMutationKey() {
  return ['nodes', '/nodes/:nodeId/applyPolicy', 'POST'] as const
}

export function getPostNodesNodeIdApplyPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':nodeId']['applyPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes)[':nodeId']['applyPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodesNodeIdApplyPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodes)[':nodeId']['applyPolicy']['$post']>,
    ) {
      return parseResponse(client.nodes[':nodeId'].applyPolicy.$post(args, options))
    },
  })
}

export function usePostNodesNodeIdApplyPolicy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':nodeId']['applyPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.nodes)[':nodeId']['applyPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesNodeIdApplyPolicyMutationOptions<TError, TOnMutateResult>(
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

export function getPostNodesNodeIdFetchDataMutationKey() {
  return ['nodes', '/nodes/:nodeId/fetchData', 'POST'] as const
}

export function getPostNodesNodeIdFetchDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':nodeId']['fetchData']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes)[':nodeId']['fetchData']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodesNodeIdFetchDataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.nodes)[':nodeId']['fetchData']['$post']>,
    ) {
      return parseResponse(client.nodes[':nodeId'].fetchData.$post(args, options))
    },
  })
}

export function usePostNodesNodeIdFetchData<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':nodeId']['fetchData']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.nodes)[':nodeId']['fetchData']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesNodeIdFetchDataMutationOptions<TError, TOnMutateResult>(
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

export function getPostNodesNodeIdFetchDataDatasourceIdMutationKey() {
  return ['nodes', '/nodes/:nodeId/fetchData/:datasourceId', 'POST'] as const
}

export function getPostNodesNodeIdFetchDataDatasourceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.nodes)[':nodeId']['fetchData'][':datasourceId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.nodes)[':nodeId']['fetchData'][':datasourceId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNodesNodeIdFetchDataDatasourceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.nodes)[':nodeId']['fetchData'][':datasourceId']['$post']
      >,
    ) {
      return parseResponse(client.nodes[':nodeId'].fetchData[':datasourceId'].$post(args, options))
    },
  })
}

export function usePostNodesNodeIdFetchDataDatasourceId<
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
                ReturnType<(typeof client.nodes)[':nodeId']['fetchData'][':datasourceId']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.nodes)[':nodeId']['fetchData'][':datasourceId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNodesNodeIdFetchDataDatasourceIdMutationOptions<
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

export function getNodesNodeIdInheritedPropertiesQueryKey(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>,
) {
  return ['nodes', '/nodes/:nodeId/inheritedProperties', args] as const
}

export function getNodesNodeIdInheritedPropertiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdInheritedPropertiesQueryKey>
  >({
    queryKey: getNodesNodeIdInheritedPropertiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.nodes[':nodeId'].inheritedProperties.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNodesNodeIdInheritedProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdInheritedPropertiesQueryKey>
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
      ...getNodesNodeIdInheritedPropertiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNodesNodeIdInheritedProperties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNodesNodeIdInheritedPropertiesQueryKey>
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
      ...getNodesNodeIdInheritedPropertiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getParametersQueryKey() {
  return ['parameters', '/parameters'] as const
}

export function getParametersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getParametersQueryKey>
  >({
    queryKey: getParametersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.parameters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useParameters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getParametersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getParametersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseParameters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getParametersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getParametersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutParametersMutationKey() {
  return ['parameters', '/parameters', 'PUT'] as const
}

export function getPutParametersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$put>>>>>,
    TError,
    InferRequestType<typeof client.parameters.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutParametersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.parameters.$put>) {
      return parseResponse(client.parameters.$put(args, options))
    },
  })
}

export function usePutParameters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.parameters.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutParametersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getParametersParameterIdQueryKey(
  args: InferRequestType<(typeof client.parameters)[':parameterId']['$get']>,
) {
  return ['parameters', '/parameters/:parameterId', args] as const
}

export function getParametersParameterIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.parameters)[':parameterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getParametersParameterIdQueryKey>
  >({
    queryKey: getParametersParameterIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.parameters[':parameterId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useParametersParameterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.parameters)[':parameterId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getParametersParameterIdQueryKey>
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
      ...getParametersParameterIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseParametersParameterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.parameters)[':parameterId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getParametersParameterIdQueryKey>
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
      ...getParametersParameterIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostParametersParameterIdMutationKey() {
  return ['parameters', '/parameters/:parameterId', 'POST'] as const
}

export function getPostParametersParameterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.parameters)[':parameterId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostParametersParameterIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.parameters)[':parameterId']['$post']>) {
      return parseResponse(client.parameters[':parameterId'].$post(args, options))
    },
  })
}

export function usePostParametersParameterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.parameters)[':parameterId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostParametersParameterIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteParametersParameterIdMutationKey() {
  return ['parameters', '/parameters/:parameterId', 'DELETE'] as const
}

export function getDeleteParametersParameterIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.parameters)[':parameterId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteParametersParameterIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.parameters)[':parameterId']['$delete']>,
    ) {
      return parseResponse(client.parameters[':parameterId'].$delete(args, options))
    },
  })
}

export function useDeleteParametersParameterId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.parameters)[':parameterId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteParametersParameterIdMutationOptions<TError, TOnMutateResult>(
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

export function getRulesQueryKey() {
  return ['rules', '/rules'] as const
}

export function getRulesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRulesQueryKey>
  >({
    queryKey: getRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.rules.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRules<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRulesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRules<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRulesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutRulesMutationKey() {
  return ['rules', '/rules', 'PUT'] as const
}

export function getPutRulesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$put>>>>>,
    TError,
    InferRequestType<typeof client.rules.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rules.$put>) {
      return parseResponse(client.rules.$put(args, options))
    },
  })
}

export function usePutRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$put>>>>>,
        TError,
        InferRequestType<typeof client.rules.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRulesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutRulesCategoriesMutationKey() {
  return ['rules', '/rules/categories', 'PUT'] as const
}

export function getPutRulesCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.categories.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.rules.categories.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRulesCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.rules.categories.$put>) {
      return parseResponse(client.rules.categories.$put(args, options))
    },
  })
}

export function usePutRulesCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.categories.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.rules.categories.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutRulesCategoriesMutationOptions<TError, TOnMutateResult>(
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

export function getRulesCategoriesRuleCategoryIdQueryKey(
  args: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>,
) {
  return ['rules', '/rules/categories/:ruleCategoryId', args] as const
}

export function getRulesCategoriesRuleCategoryIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRulesCategoriesRuleCategoryIdQueryKey>
  >({
    queryKey: getRulesCategoriesRuleCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rules.categories[':ruleCategoryId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useRulesCategoriesRuleCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRulesCategoriesRuleCategoryIdQueryKey>
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
      ...getRulesCategoriesRuleCategoryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseRulesCategoriesRuleCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRulesCategoriesRuleCategoryIdQueryKey>
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
      ...getRulesCategoriesRuleCategoryIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostRulesCategoriesRuleCategoryIdMutationKey() {
  return ['rules', '/rules/categories/:ruleCategoryId', 'POST'] as const
}

export function getPostRulesCategoriesRuleCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRulesCategoriesRuleCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$post']>,
    ) {
      return parseResponse(client.rules.categories[':ruleCategoryId'].$post(args, options))
    },
  })
}

export function usePostRulesCategoriesRuleCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRulesCategoriesRuleCategoryIdMutationOptions<
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

export function getDeleteRulesCategoriesRuleCategoryIdMutationKey() {
  return ['rules', '/rules/categories/:ruleCategoryId', 'DELETE'] as const
}

export function getDeleteRulesCategoriesRuleCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRulesCategoriesRuleCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$delete']>,
    ) {
      return parseResponse(client.rules.categories[':ruleCategoryId'].$delete(args, options))
    },
  })
}

export function useDeleteRulesCategoriesRuleCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRulesCategoriesRuleCategoryIdMutationOptions<
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

export function getRulesTreeQueryKey() {
  return ['rules', '/rules/tree'] as const
}

export function getRulesTreeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRulesTreeQueryKey>
  >({
    queryKey: getRulesTreeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.rules.tree.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRulesTree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRulesTreeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRulesTreeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRulesTree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRulesTreeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRulesTreeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRulesRuleIdQueryKey(
  args: InferRequestType<(typeof client.rules)[':ruleId']['$get']>,
) {
  return ['rules', '/rules/:ruleId', args] as const
}

export function getRulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRulesRuleIdQueryKey>
  >({
    queryKey: getRulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rules[':ruleId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRulesRuleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules)[':ruleId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRulesRuleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRulesRuleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRulesRuleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.rules)[':ruleId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRulesRuleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRulesRuleIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostRulesRuleIdMutationKey() {
  return ['rules', '/rules/:ruleId', 'POST'] as const
}

export function getPostRulesRuleIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rules)[':ruleId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRulesRuleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rules)[':ruleId']['$post']>) {
      return parseResponse(client.rules[':ruleId'].$post(args, options))
    },
  })
}

export function usePostRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.rules)[':ruleId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRulesRuleIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteRulesRuleIdMutationKey() {
  return ['rules', '/rules/:ruleId', 'DELETE'] as const
}

export function getDeleteRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.rules)[':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRulesRuleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.rules)[':ruleId']['$delete']>) {
      return parseResponse(client.rules[':ruleId'].$delete(args, options))
    },
  })
}

export function useDeleteRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.rules)[':ruleId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRulesRuleIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostScaleoutrelayDemoteNodeIdMutationKey() {
  return ['scaleoutrelay', '/scaleoutrelay/demote/:nodeId', 'POST'] as const
}

export function getPostScaleoutrelayDemoteNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scaleoutrelay.demote)[':nodeId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scaleoutrelay.demote)[':nodeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScaleoutrelayDemoteNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scaleoutrelay.demote)[':nodeId']['$post']>,
    ) {
      return parseResponse(client.scaleoutrelay.demote[':nodeId'].$post(args, options))
    },
  })
}

export function usePostScaleoutrelayDemoteNodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scaleoutrelay.demote)[':nodeId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scaleoutrelay.demote)[':nodeId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScaleoutrelayDemoteNodeIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostScaleoutrelayPromoteNodeIdMutationKey() {
  return ['scaleoutrelay', '/scaleoutrelay/promote/:nodeId', 'POST'] as const
}

export function getPostScaleoutrelayPromoteNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.scaleoutrelay.promote)[':nodeId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.scaleoutrelay.promote)[':nodeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostScaleoutrelayPromoteNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.scaleoutrelay.promote)[':nodeId']['$post']>,
    ) {
      return parseResponse(client.scaleoutrelay.promote[':nodeId'].$post(args, options))
    },
  })
}

export function usePostScaleoutrelayPromoteNodeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.scaleoutrelay.promote)[':nodeId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.scaleoutrelay.promote)[':nodeId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostScaleoutrelayPromoteNodeIdMutationOptions<
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

export function getSecretIndexQueryKey() {
  return ['secret', '/secret/'] as const
}

export function getSecretIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSecretIndexQueryKey>
  >({
    queryKey: getSecretIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.secret.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSecretIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSecretIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSecretIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSecretIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSecretIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSecretIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSecretIndexMutationKey() {
  return ['secret', '/secret/', 'PUT'] as const
}

export function getPutSecretIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$put>>>>>,
    TError,
    InferRequestType<typeof client.secret.index.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSecretIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.secret.index.$put>) {
      return parseResponse(client.secret.index.$put(args, options))
    },
  })
}

export function usePutSecretIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.secret.index.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSecretIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSecretIndexMutationKey() {
  return ['secret', '/secret/', 'POST'] as const
}

export function getPostSecretIndexMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.secret.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSecretIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.secret.index.$post>) {
      return parseResponse(client.secret.index.$post(args, options))
    },
  })
}

export function usePostSecretIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.secret.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSecretIndexMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSecretNameQueryKey(
  args: InferRequestType<(typeof client.secret)[':name']['$get']>,
) {
  return ['secret', '/secret/:name', args] as const
}

export function getSecretNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.secret)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSecretNameQueryKey>
  >({
    queryKey: getSecretNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.secret[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSecretName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.secret)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecretNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSecretNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSecretName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.secret)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSecretNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSecretNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSecretNameMutationKey() {
  return ['secret', '/secret/:name', 'DELETE'] as const
}

export function getDeleteSecretNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.secret)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSecretNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.secret)[':name']['$delete']>) {
      return parseResponse(client.secret[':name'].$delete(args, options))
    },
  })
}

export function useDeleteSecretName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.secret)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSecretNameMutationOptions<TError, TOnMutateResult>(
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

export function getSettingsQueryKey() {
  return ['settings', '/settings'] as const
}

export function getSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >({
    queryKey: getSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSettingsAllowedNetworksNodeIdQueryKey(
  args: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>,
) {
  return ['settings', '/settings/allowed_networks/:nodeId', args] as const
}

export function getSettingsAllowedNetworksNodeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsAllowedNetworksNodeIdQueryKey>
  >({
    queryKey: getSettingsAllowedNetworksNodeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.allowed_networks[':nodeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsAllowedNetworksNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsAllowedNetworksNodeIdQueryKey>
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
      ...getSettingsAllowedNetworksNodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSettingsAllowedNetworksNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsAllowedNetworksNodeIdQueryKey>
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
      ...getSettingsAllowedNetworksNodeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSettingsAllowedNetworksNodeIdMutationKey() {
  return ['settings', '/settings/allowed_networks/:nodeId', 'POST'] as const
}

export function getPostSettingsAllowedNetworksNodeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsAllowedNetworksNodeIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$post']>,
    ) {
      return parseResponse(client.settings.allowed_networks[':nodeId'].$post(args, options))
    },
  })
}

export function usePostSettingsAllowedNetworksNodeId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsAllowedNetworksNodeIdMutationOptions<
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

export function getPostSettingsAllowedNetworksNodeIdDiffMutationKey() {
  return ['settings', '/settings/allowed_networks/:nodeId/diff', 'POST'] as const
}

export function getPostSettingsAllowedNetworksNodeIdDiffMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['diff']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['diff']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsAllowedNetworksNodeIdDiffMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['diff']['$post']>,
    ) {
      return parseResponse(client.settings.allowed_networks[':nodeId'].diff.$post(args, options))
    },
  })
}

export function usePostSettingsAllowedNetworksNodeIdDiff<
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
                ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['diff']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['diff']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsAllowedNetworksNodeIdDiffMutationOptions<
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

export function getSettingsSettingIdQueryKey(
  args: InferRequestType<(typeof client.settings)[':settingId']['$get']>,
) {
  return ['settings', '/settings/:settingId', args] as const
}

export function getSettingsSettingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings)[':settingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsSettingIdQueryKey>
  >({
    queryKey: getSettingsSettingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.settings[':settingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSettingsSettingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings)[':settingId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsSettingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsSettingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettingsSettingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.settings)[':settingId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSettingsSettingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsSettingIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSettingsSettingIdMutationKey() {
  return ['settings', '/settings/:settingId', 'POST'] as const
}

export function getPostSettingsSettingIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':settingId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.settings)[':settingId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsSettingIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.settings)[':settingId']['$post']>) {
      return parseResponse(client.settings[':settingId'].$post(args, options))
    },
  })
}

export function usePostSettingsSettingId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.settings)[':settingId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.settings)[':settingId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsSettingIdMutationOptions<TError, TOnMutateResult>(
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

export function getStatusQueryKey() {
  return ['status', '/status'] as const
}

export function getStatusQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >({
    queryKey: getStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSystemArchivesArchiveKindQueryKey(
  args: InferRequestType<(typeof client.system.archives)[':archiveKind']['$get']>,
) {
  return ['system', '/system/archives/:archiveKind', args] as const
}

export function getSystemArchivesArchiveKindQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.system.archives)[':archiveKind']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemArchivesArchiveKindQueryKey>
  >({
    queryKey: getSystemArchivesArchiveKindQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.system.archives[':archiveKind'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSystemArchivesArchiveKind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.system.archives)[':archiveKind']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemArchivesArchiveKindQueryKey>
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
      ...getSystemArchivesArchiveKindQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSystemArchivesArchiveKind<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.system.archives)[':archiveKind']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemArchivesArchiveKindQueryKey>
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
      ...getSystemArchivesArchiveKindQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSystemArchivesArchiveKindMutationKey() {
  return ['system', '/system/archives/:archiveKind', 'POST'] as const
}

export function getPostSystemArchivesArchiveKindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.system.archives)[':archiveKind']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemArchivesArchiveKindMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.system.archives)[':archiveKind']['$post']>,
    ) {
      return parseResponse(client.system.archives[':archiveKind'].$post(args, options))
    },
  })
}

export function usePostSystemArchivesArchiveKind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.system.archives)[':archiveKind']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSystemArchivesArchiveKindMutationOptions<TError, TOnMutateResult>(
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

export function getPostSystemArchivesArchiveKindRestoreArchiveRestoreKindMutationKey() {
  return ['system', '/system/archives/:archiveKind/restore/:archiveRestoreKind', 'POST'] as const
}

export function getPostSystemArchivesArchiveKindRestoreArchiveRestoreKindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.system.archives)[':archiveKind']['restore'][':archiveRestoreKind']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.system.archives)[':archiveKind']['restore'][':archiveRestoreKind']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostSystemArchivesArchiveKindRestoreArchiveRestoreKindMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.system.archives)[':archiveKind']['restore'][':archiveRestoreKind']['$post']
      >,
    ) {
      return parseResponse(
        client.system.archives[':archiveKind'].restore[':archiveRestoreKind'].$post(args, options),
      )
    },
  })
}

export function usePostSystemArchivesArchiveKindRestoreArchiveRestoreKind<
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
                  (typeof client.system.archives)[':archiveKind']['restore'][':archiveRestoreKind']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.system.archives)[':archiveKind']['restore'][':archiveRestoreKind']['$post']
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
  const mutationDefaults = getPostSystemArchivesArchiveKindRestoreArchiveRestoreKindMutationOptions<
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

export function getSystemArchivesArchiveKindZipCommitIdQueryKey(
  args: InferRequestType<
    (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
  >,
) {
  return ['system', '/system/archives/:archiveKind/zip/:commitId', args] as const
}

export function getSystemArchivesArchiveKindZipCommitIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemArchivesArchiveKindZipCommitIdQueryKey>
  >({
    queryKey: getSystemArchivesArchiveKindZipCommitIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.system.archives[':archiveKind'].zip[':commitId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSystemArchivesArchiveKindZipCommitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemArchivesArchiveKindZipCommitIdQueryKey>
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
      ...getSystemArchivesArchiveKindZipCommitIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSystemArchivesArchiveKindZipCommitId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemArchivesArchiveKindZipCommitIdQueryKey>
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
      ...getSystemArchivesArchiveKindZipCommitIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSystemHealthcheckQueryKey() {
  return ['system', '/system/healthcheck'] as const
}

export function getSystemHealthcheckQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemHealthcheckQueryKey>
  >({
    queryKey: getSystemHealthcheckQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.healthcheck.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSystemHealthcheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemHealthcheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSystemHealthcheckQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSystemHealthcheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemHealthcheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSystemHealthcheckQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSystemInfoQueryKey() {
  return ['system', '/system/info'] as const
}

export function getSystemInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemInfoQueryKey>
  >({
    queryKey: getSystemInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSystemInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSystemInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSystemInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSystemInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSystemMaintenancePurgeSoftwareMutationKey() {
  return ['system', '/system/maintenance/purgeSoftware', 'POST'] as const
}

export function getPostSystemMaintenancePurgeSoftwareMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.system.maintenance.purgeSoftware.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSystemMaintenancePurgeSoftwareMutationKey(),
    async mutationFn() {
      return parseResponse(client.system.maintenance.purgeSoftware.$post(undefined, options))
    },
  })
}

export function usePostSystemMaintenancePurgeSoftware<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.system.maintenance.purgeSoftware.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSystemMaintenancePurgeSoftwareMutationOptions<
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

export function getPostSystemRegeneratePoliciesMutationKey() {
  return ['system', '/system/regenerate/policies', 'POST'] as const
}

export function getPostSystemRegeneratePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.regenerate.policies.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSystemRegeneratePoliciesMutationKey(),
    async mutationFn() {
      return parseResponse(client.system.regenerate.policies.$post(undefined, options))
    },
  })
}

export function usePostSystemRegeneratePolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.system.regenerate.policies.$post>>
            >
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSystemRegeneratePoliciesMutationOptions<TError, TOnMutateResult>(
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

export function getPostSystemReloadMutationKey() {
  return ['system', '/system/reload', 'POST'] as const
}

export function getPostSystemReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.reload.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSystemReloadMutationKey(),
    async mutationFn() {
      return parseResponse(client.system.reload.$post(undefined, options))
    },
  })
}

export function usePostSystemReload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.reload.$post>>>>
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSystemReloadMutationOptions<TError, TOnMutateResult>(
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

export function getPostSystemReloadGroupsMutationKey() {
  return ['system', '/system/reload/groups', 'POST'] as const
}

export function getPostSystemReloadGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.reload.groups.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSystemReloadGroupsMutationKey(),
    async mutationFn() {
      return parseResponse(client.system.reload.groups.$post(undefined, options))
    },
  })
}

export function usePostSystemReloadGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.system.reload.groups.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSystemReloadGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSystemReloadTechniquesMutationKey() {
  return ['system', '/system/reload/techniques', 'POST'] as const
}

export function getPostSystemReloadTechniquesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.reload.techniques.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSystemReloadTechniquesMutationKey(),
    async mutationFn() {
      return parseResponse(client.system.reload.techniques.$post(undefined, options))
    },
  })
}

export function usePostSystemReloadTechniques<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.system.reload.techniques.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSystemReloadTechniquesMutationOptions<TError, TOnMutateResult>(
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

export function getSystemStatusQueryKey() {
  return ['system', '/system/status'] as const
}

export function getSystemStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemStatusQueryKey>
  >({
    queryKey: getSystemStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSystemStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSystemStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSystemStatusQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSystemUpdatePoliciesMutationKey() {
  return ['system', '/system/update/policies', 'POST'] as const
}

export function getPostSystemUpdatePoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.system.update.policies.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSystemUpdatePoliciesMutationKey(),
    async mutationFn() {
      return parseResponse(client.system.update.policies.$post(undefined, options))
    },
  })
}

export function usePostSystemUpdatePolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.system.update.policies.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSystemUpdatePoliciesMutationOptions<TError, TOnMutateResult>(
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

export function getTechniquesQueryKey() {
  return ['techniques', '/techniques'] as const
}

export function getTechniquesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTechniquesQueryKey>
  >({
    queryKey: getTechniquesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.techniques.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTechniques<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTechniquesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTechniques<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTechniquesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTechniquesMutationKey() {
  return ['techniques', '/techniques', 'PUT'] as const
}

export function getPutTechniquesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$put>>>>>,
    TError,
    InferRequestType<typeof client.techniques.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutTechniquesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.techniques.$put>) {
      return parseResponse(client.techniques.$put(args, options))
    },
  })
}

export function usePutTechniques<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.techniques.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTechniquesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTechniquesCategoriesQueryKey() {
  return ['techniques', '/techniques/categories'] as const
}

export function getTechniquesCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesCategoriesQueryKey>
  >({
    queryKey: getTechniquesCategoriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.techniques.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTechniquesCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTechniquesCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTechniquesCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTechniquesCategoriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTechniquesReloadMutationKey() {
  return ['techniques', '/techniques/reload', 'POST'] as const
}

export function getPostTechniquesReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.reload.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostTechniquesReloadMutationKey(),
    async mutationFn() {
      return parseResponse(client.techniques.reload.$post(undefined, options))
    },
  })
}

export function usePostTechniquesReload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.techniques.reload.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTechniquesReloadMutationOptions<TError, TOnMutateResult>(
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

export function getTechniquesVersionsQueryKey() {
  return ['techniques', '/techniques/versions'] as const
}

export function getTechniquesVersionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesVersionsQueryKey>
  >({
    queryKey: getTechniquesVersionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.techniques.versions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTechniquesVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTechniquesVersionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTechniquesVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTechniquesVersionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTechniquesTechniqueIdQueryKey(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['$get']>,
) {
  return ['techniques', '/techniques/:techniqueId', args] as const
}

export function getTechniquesTechniqueIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesTechniqueIdQueryKey>
  >({
    queryKey: getTechniquesTechniqueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.techniques[':techniqueId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTechniquesTechniqueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesTechniqueIdQueryKey>
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
      ...getTechniquesTechniqueIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTechniquesTechniqueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesTechniqueIdQueryKey>
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
      ...getTechniquesTechniqueIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTechniquesTechniqueIdDirectivesQueryKey(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['directives']['$get']>,
) {
  return ['techniques', '/techniques/:techniqueId/directives', args] as const
}

export function getTechniquesTechniqueIdDirectivesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['directives']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesTechniqueIdDirectivesQueryKey>
  >({
    queryKey: getTechniquesTechniqueIdDirectivesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.techniques[':techniqueId'].directives.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTechniquesTechniqueIdDirectives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['directives']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesTechniqueIdDirectivesQueryKey>
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
      ...getTechniquesTechniqueIdDirectivesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTechniquesTechniqueIdDirectives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['directives']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesTechniqueIdDirectivesQueryKey>
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
      ...getTechniquesTechniqueIdDirectivesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTechniquesTechniqueIdTechniqueVersionQueryKey(
  args: InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>,
) {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion', args] as const
}

export function getTechniquesTechniqueIdTechniqueVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionQueryKey>
  >({
    queryKey: getTechniquesTechniqueIdTechniqueVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.techniques[':techniqueId'][':techniqueVersion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTechniquesTechniqueIdTechniqueVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionQueryKey>
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
      ...getTechniquesTechniqueIdTechniqueVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTechniquesTechniqueIdTechniqueVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionQueryKey>
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
      ...getTechniquesTechniqueIdTechniqueVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTechniquesTechniqueIdTechniqueVersionMutationKey() {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion', 'POST'] as const
}

export function getPostTechniquesTechniqueIdTechniqueVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTechniquesTechniqueIdTechniqueVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.techniques)[':techniqueId'][':techniqueVersion']['$post']
      >,
    ) {
      return parseResponse(
        client.techniques[':techniqueId'][':techniqueVersion'].$post(args, options),
      )
    },
  })
}

export function usePostTechniquesTechniqueIdTechniqueVersion<
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
                ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTechniquesTechniqueIdTechniqueVersionMutationOptions<
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

export function getDeleteTechniquesTechniqueIdTechniqueVersionMutationKey() {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion', 'DELETE'] as const
}

export function getDeleteTechniquesTechniqueIdTechniqueVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTechniquesTechniqueIdTechniqueVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.techniques)[':techniqueId'][':techniqueVersion']['$delete']
      >,
    ) {
      return parseResponse(
        client.techniques[':techniqueId'][':techniqueVersion'].$delete(args, options),
      )
    },
  })
}

export function useDeleteTechniquesTechniqueIdTechniqueVersion<
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
                  (typeof client.techniques)[':techniqueId'][':techniqueVersion']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.techniques)[':techniqueId'][':techniqueVersion']['$delete']
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
  const mutationDefaults = getDeleteTechniquesTechniqueIdTechniqueVersionMutationOptions<
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

export function getTechniquesTechniqueIdTechniqueVersionDirectivesQueryKey(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
  >,
) {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion/directives', args] as const
}

export function getTechniquesTechniqueIdTechniqueVersionDirectivesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionDirectivesQueryKey>
  >({
    queryKey: getTechniquesTechniqueIdTechniqueVersionDirectivesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.techniques[':techniqueId'][':techniqueVersion'].directives.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTechniquesTechniqueIdTechniqueVersionDirectives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionDirectivesQueryKey>
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
      ...getTechniquesTechniqueIdTechniqueVersionDirectivesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTechniquesTechniqueIdTechniqueVersionDirectives<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionDirectivesQueryKey>
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
      ...getTechniquesTechniqueIdTechniqueVersionDirectivesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTechniquesTechniqueIdTechniqueVersionResourcesQueryKey(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
  >,
) {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion/resources', args] as const
}

export function getTechniquesTechniqueIdTechniqueVersionResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionResourcesQueryKey>
  >({
    queryKey: getTechniquesTechniqueIdTechniqueVersionResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.techniques[':techniqueId'][':techniqueVersion'].resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTechniquesTechniqueIdTechniqueVersionResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionResourcesQueryKey>
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
      ...getTechniquesTechniqueIdTechniqueVersionResourcesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTechniquesTechniqueIdTechniqueVersionResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionResourcesQueryKey>
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
      ...getTechniquesTechniqueIdTechniqueVersionResourcesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTechniquesTechniqueIdTechniqueVersionRevisionsQueryKey(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
  >,
) {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion/revisions', args] as const
}

export function getTechniquesTechniqueIdTechniqueVersionRevisionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionRevisionsQueryKey>
  >({
    queryKey: getTechniquesTechniqueIdTechniqueVersionRevisionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.techniques[':techniqueId'][':techniqueVersion'].revisions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTechniquesTechniqueIdTechniqueVersionRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionRevisionsQueryKey>
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
      ...getTechniquesTechniqueIdTechniqueVersionRevisionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTechniquesTechniqueIdTechniqueVersionRevisions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionRevisionsQueryKey>
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
      ...getTechniquesTechniqueIdTechniqueVersionRevisionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUsermanagementMutationKey() {
  return ['usermanagement', '/usermanagement', 'POST'] as const
}

export function getPostUsermanagementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.usermanagement.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsermanagementMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.usermanagement.$post>) {
      return parseResponse(client.usermanagement.$post(args, options))
    },
  })
}

export function usePostUsermanagement<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.usermanagement.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsermanagementMutationOptions<TError, TOnMutateResult>(
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

export function getUsermanagementRolesQueryKey() {
  return ['usermanagement', '/usermanagement/roles'] as const
}

export function getUsermanagementRolesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsermanagementRolesQueryKey>
  >({
    queryKey: getUsermanagementRolesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.usermanagement.roles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsermanagementRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsermanagementRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsermanagementRolesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsermanagementRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsermanagementRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsermanagementRolesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsermanagementUpdateUsernameMutationKey() {
  return ['usermanagement', '/usermanagement/update/:username', 'POST'] as const
}

export function getPostUsermanagementUpdateUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usermanagement.update)[':username']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.usermanagement.update)[':username']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUsermanagementUpdateUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.usermanagement.update)[':username']['$post']>,
    ) {
      return parseResponse(client.usermanagement.update[':username'].$post(args, options))
    },
  })
}

export function usePostUsermanagementUpdateUsername<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.usermanagement.update)[':username']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.usermanagement.update)[':username']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsermanagementUpdateUsernameMutationOptions<
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

export function getUsermanagementUsersQueryKey() {
  return ['usermanagement', '/usermanagement/users'] as const
}

export function getUsermanagementUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsermanagementUsersQueryKey>
  >({
    queryKey: getUsermanagementUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.usermanagement.users.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsermanagementUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsermanagementUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsermanagementUsersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsermanagementUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsermanagementUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsermanagementUsersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsermanagementUsersReloadQueryKey() {
  return ['usermanagement', '/usermanagement/users/reload'] as const
}

export function getUsermanagementUsersReloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.reload.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.reload.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsermanagementUsersReloadQueryKey>
  >({
    queryKey: getUsermanagementUsersReloadQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.usermanagement.users.reload.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsermanagementUsersReload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.reload.$get>>>
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
              Awaited<ReturnType<typeof client.usermanagement.users.reload.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsermanagementUsersReloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsermanagementUsersReloadQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsermanagementUsersReload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.reload.$get>>>
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
              Awaited<ReturnType<typeof client.usermanagement.users.reload.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsermanagementUsersReloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsermanagementUsersReloadQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteUsermanagementUsernameMutationKey() {
  return ['usermanagement', '/usermanagement/:username', 'DELETE'] as const
}

export function getDeleteUsermanagementUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.usermanagement)[':username']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.usermanagement)[':username']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsermanagementUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.usermanagement)[':username']['$delete']>,
    ) {
      return parseResponse(client.usermanagement[':username'].$delete(args, options))
    },
  })
}

export function useDeleteUsermanagementUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.usermanagement)[':username']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.usermanagement)[':username']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteUsermanagementUsernameMutationOptions<TError, TOnMutateResult>(
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

export function getUsersQueryKey() {
  return ['users', '/users'] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostValidatedUsersMutationKey() {
  return ['validatedUsers', '/validatedUsers', 'POST'] as const
}

export function getPostValidatedUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validatedUsers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.validatedUsers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostValidatedUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.validatedUsers.$post>) {
      return parseResponse(client.validatedUsers.$post(args, options))
    },
  })
}

export function usePostValidatedUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.validatedUsers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.validatedUsers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostValidatedUsersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteValidatedUsersUsernameMutationKey() {
  return ['validatedUsers', '/validatedUsers/:username', 'DELETE'] as const
}

export function getDeleteValidatedUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.validatedUsers)[':username']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.validatedUsers)[':username']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteValidatedUsersUsernameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.validatedUsers)[':username']['$delete']>,
    ) {
      return parseResponse(client.validatedUsers[':username'].$delete(args, options))
    },
  })
}

export function useDeleteValidatedUsersUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.validatedUsers)[':username']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.validatedUsers)[':username']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteValidatedUsersUsernameMutationOptions<TError, TOnMutateResult>(
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
