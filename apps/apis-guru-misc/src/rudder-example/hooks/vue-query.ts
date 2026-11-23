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

export function getApiChangeRequestsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiChangeRequestsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.changeRequests.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiChangeRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>
            >
          >,
          ReturnType<typeof getApiChangeRequestsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.changeRequests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiChangeRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiChangeRequestsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.changeRequests.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getArchivesExportQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archives.export.$get>>,
) {
  return ['archives', '/archives/export', toValue(args)] as const
}

export function getArchivesExportQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archives.export.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getArchivesExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.archives.export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useArchivesExport<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.archives.export.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>
            >
          >,
          ReturnType<typeof getArchivesExportQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.archives.export.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getArchivesExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getArchivesExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.archives.export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.archives.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.archives.import.$post>,
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

export function getBrandingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getBrandingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.branding.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBranding<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>
          >,
          ReturnType<typeof getBrandingQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBrandingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getBrandingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.branding.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.branding.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.branding.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.branding.reload.$post>>>
            >
          >,
          TError,
          void,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$get']>
  >,
) {
  return ['changeRequests', '/changeRequests/:changeRequestId', toValue(args)] as const
}

export function getChangeRequestsChangeRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getChangeRequestsChangeRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.changeRequests[':changeRequestId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getChangeRequestsChangeRequestIdQueryKey>
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
          Awaited<ReturnType<(typeof client.changeRequests)[':changeRequestId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getChangeRequestsChangeRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getChangeRequestsChangeRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.changeRequests[':changeRequestId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getComplianceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.compliance.$get>>,
) {
  return ['compliance', '/compliance', toValue(args)] as const
}

export function getComplianceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.compliance.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComplianceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.compliance.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCompliance<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.compliance.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>
          >,
          ReturnType<typeof getComplianceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getComplianceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComplianceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.compliance.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComplianceNodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.compliance.nodes.$get>>,
) {
  return ['compliance', '/compliance/nodes', toValue(args)] as const
}

export function getComplianceNodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.compliance.nodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComplianceNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.compliance.nodes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComplianceNodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.compliance.nodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>
            >
          >,
          ReturnType<typeof getComplianceNodesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.nodes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getComplianceNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComplianceNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.compliance.nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComplianceNodesNodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.compliance.nodes)[':nodeId']['$get']>>,
) {
  return ['compliance', '/compliance/nodes/:nodeId', toValue(args)] as const
}

export function getComplianceNodesNodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.compliance.nodes)[':nodeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComplianceNodesNodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.compliance.nodes[':nodeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComplianceNodesNodeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.compliance.nodes)[':nodeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getComplianceNodesNodeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.compliance.nodes)[':nodeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComplianceNodesNodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComplianceNodesNodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.compliance.nodes[':nodeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComplianceRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.compliance.rules.$get>>,
) {
  return ['compliance', '/compliance/rules', toValue(args)] as const
}

export function getComplianceRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.compliance.rules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComplianceRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.compliance.rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComplianceRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.compliance.rules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>
            >
          >,
          ReturnType<typeof getComplianceRulesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.compliance.rules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getComplianceRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComplianceRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.compliance.rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getComplianceRulesRuleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.compliance.rules)[':ruleId']['$get']>>,
) {
  return ['compliance', '/compliance/rules/:ruleId', toValue(args)] as const
}

export function getComplianceRulesRuleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.compliance.rules)[':ruleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getComplianceRulesRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.compliance.rules[':ruleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useComplianceRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.compliance.rules)[':ruleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getComplianceRulesRuleIdQueryKey>
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
          Awaited<ReturnType<(typeof client.compliance.rules)[':ruleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getComplianceRulesRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getComplianceRulesRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.compliance.rules[':ruleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCveQueryKey() {
  return ['cve', '/cve'] as const
}

export function getCveQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCveQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cve.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCve<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
          ReturnType<typeof getCveQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCveQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cve.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.$post>>>>
          >,
          TError,
          void,
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

export function getCveCheckConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCveCheckConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cve.check.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCveCheckConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>
            >
          >,
          ReturnType<typeof getCveCheckConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCveCheckConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCveCheckConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cve.check.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getCveCheckLastQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCveCheckLastQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cve.check.last.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCveCheckLast<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
          >,
          ReturnType<typeof getCveCheckLastQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.check.last.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCveCheckLastQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCveCheckLastQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cve.check.last.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.list.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.cve.list.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cve.update.fs.$post>>>>
          >,
          TError,
          void,
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

export function getDatasourcesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDatasourcesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDatasources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
          >,
          ReturnType<typeof getDatasourcesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatasourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDatasourcesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.datasources.$put>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasources)[':datasourceId']['$get']>>,
) {
  return ['datasources', '/datasources/:datasourceId', toValue(args)] as const
}

export function getDatasourcesDatasourceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasources)[':datasourceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasourcesDatasourceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources[':datasourceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasources)[':datasourceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasourcesDatasourceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.datasources)[':datasourceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesDatasourceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasourcesDatasourceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources[':datasourceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getDirectivesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDirectivesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.directives.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDirectives<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>
          >,
          ReturnType<typeof getDirectivesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDirectivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDirectivesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.directives.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.directives.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.directives.$put>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.directives)[':directiveId']['$get']>>,
) {
  return ['directives', '/directives/:directiveId', toValue(args)] as const
}

export function getDirectivesDirectiveIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.directives)[':directiveId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDirectivesDirectiveIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.directives[':directiveId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDirectivesDirectiveId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.directives)[':directiveId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDirectivesDirectiveIdQueryKey>
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
          Awaited<ReturnType<(typeof client.directives)[':directiveId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectivesDirectiveIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDirectivesDirectiveIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.directives[':directiveId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getGroupsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGroupsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroups<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
          ReturnType<typeof getGroupsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGroupsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.$put>>>>>,
          TError,
          InferRequestType<typeof client.groups.$put>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$get']>
  >,
) {
  return ['groups', '/groups/categories/:groupCategoryId', toValue(args)] as const
}

export function getGroupsCategoriesGroupCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsCategoriesGroupCategoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.categories[':groupCategoryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGroupsCategoriesGroupCategoryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsCategoriesGroupCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsCategoriesGroupCategoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.categories[':groupCategoryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.groups.categories)[':groupCategoryId']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$delete']>,
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

export function getGroupsTreeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getGroupsTreeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups.tree.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGroupsTree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>
          >,
          ReturnType<typeof getGroupsTreeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.groups.tree.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGroupsTreeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getGroupsTreeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.groups.tree.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['$get']>>,
) {
  return ['groups', '/groups/:groupId', toValue(args)] as const
}

export function getGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.groups[':groupId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.groups)[':groupId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
            >
          >,
          ReturnType<typeof getGroupsGroupIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.groups)[':groupId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.groups[':groupId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.groups)[':groupId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.groups)[':groupId']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInfo<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
          ReturnType<typeof getInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoDetailsEndpointNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info.details)[':endpointName']['$get']>>,
) {
  return ['info', '/info/details/:endpointName', toValue(args)] as const
}

export function getInfoDetailsEndpointNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info.details)[':endpointName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInfoDetailsEndpointNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info.details[':endpointName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info.details)[':endpointName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.info.details)[':endpointName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getInfoDetailsEndpointNameQueryKey>
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
          Awaited<ReturnType<(typeof client.info.details)[':endpointName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInfoDetailsEndpointNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInfoDetailsEndpointNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.info.details[':endpointName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInfoSectionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info)[':sectionId']['$get']>>,
) {
  return ['info', '/info/:sectionId', toValue(args)] as const
}

export function getInfoSectionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info)[':sectionId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getInfoSectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.info[':sectionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useInfoSectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.info)[':sectionId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
            >
          >,
          ReturnType<typeof getInfoSectionIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.info)[':sectionId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getInfoSectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getInfoSectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.info[':sectionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getInventoriesInfoQueryKey() {
  return ['inventories', '/inventories/info'] as const
}

export function getInventoriesInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getInventoriesInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.inventories.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useInventoriesInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>
            >
          >,
          ReturnType<typeof getInventoriesInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inventories.info.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInventoriesInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getInventoriesInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.inventories.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.inventories.watcher.start.$post>>
              >
            >
          >,
          TError,
          void,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.inventories.watcher.stop.$post>>
              >
            >
          >,
          TError,
          void,
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

export function getMethodsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMethodsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.methods.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>
          >,
          ReturnType<typeof getMethodsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.methods.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMethodsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMethodsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.methods.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.methods.reload.$post>>>
            >
          >,
          TError,
          void,
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

export function getNodesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nodes.$get>>,
) {
  return ['nodes', '/nodes', toValue(args)] as const
}

export function getNodesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nodes.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodes<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nodes.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
          ReturnType<typeof getNodesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.$put>>>>>,
          TError,
          InferRequestType<typeof client.nodes.$put>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getNodesPendingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nodes.pending.$get>>,
) {
  return ['nodes', '/nodes/pending', toValue(args)] as const
}

export function getNodesPendingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nodes.pending.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesPendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes.pending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodesPending<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nodes.pending.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
          >,
          ReturnType<typeof getNodesPendingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.pending.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNodesPendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesPendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes.pending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getNodesStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nodes.status.$get>>,
) {
  return ['nodes', '/nodes/status', toValue(args)] as const
}

export function getNodesStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nodes.status.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes.status.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useNodesStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.nodes.status.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>
          >,
          ReturnType<typeof getNodesStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.nodes.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getNodesStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getNodesNodeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nodes)[':nodeId']['$get']>>,
) {
  return ['nodes', '/nodes/:nodeId', toValue(args)] as const
}

export function getNodesNodeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nodes)[':nodeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':nodeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useNodesNodeId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.nodes)[':nodeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>
            >
          >,
          ReturnType<typeof getNodesNodeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.nodes)[':nodeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':nodeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.nodes)[':nodeId']['fetchData'][':datasourceId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.nodes)[':nodeId']['fetchData'][':datasourceId']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>
  >,
) {
  return ['nodes', '/nodes/:nodeId/inheritedProperties', toValue(args)] as const
}

export function getNodesNodeIdInheritedPropertiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getNodesNodeIdInheritedPropertiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.nodes[':nodeId'].inheritedProperties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>>
              >
            >
          >,
          ReturnType<typeof getNodesNodeIdInheritedPropertiesQueryKey>
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
          Awaited<ReturnType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNodesNodeIdInheritedPropertiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getNodesNodeIdInheritedPropertiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.nodes[':nodeId'].inheritedProperties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getParametersQueryKey() {
  return ['parameters', '/parameters'] as const
}

export function getParametersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getParametersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.parameters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useParameters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>
          >,
          ReturnType<typeof getParametersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getParametersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.parameters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.parameters.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.parameters.$put>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.parameters)[':parameterId']['$get']>>,
) {
  return ['parameters', '/parameters/:parameterId', toValue(args)] as const
}

export function getParametersParameterIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.parameters)[':parameterId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getParametersParameterIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.parameters[':parameterId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useParametersParameterId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.parameters)[':parameterId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getParametersParameterIdQueryKey>
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
          Awaited<ReturnType<(typeof client.parameters)[':parameterId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getParametersParameterIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getParametersParameterIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.parameters[':parameterId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getRulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rules.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRules<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
          ReturnType<typeof getRulesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.rules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.$put>>>>>,
          TError,
          InferRequestType<typeof client.rules.$put>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.rules.categories.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.rules.categories.$put>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>
  >,
) {
  return ['rules', '/rules/categories/:ruleCategoryId', toValue(args)] as const
}

export function getRulesCategoriesRuleCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRulesCategoriesRuleCategoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rules.categories[':ruleCategoryId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRulesCategoriesRuleCategoryIdQueryKey>
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
          Awaited<ReturnType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRulesCategoriesRuleCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRulesCategoriesRuleCategoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rules.categories[':ruleCategoryId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getRulesTreeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRulesTreeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rules.tree.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRulesTree<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>
          >,
          ReturnType<typeof getRulesTreeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rules.tree.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRulesTreeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRulesTreeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.rules.tree.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRulesRuleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rules)[':ruleId']['$get']>>,
) {
  return ['rules', '/rules/:ruleId', toValue(args)] as const
}

export function getRulesRuleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rules)[':ruleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRulesRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rules[':ruleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRulesRuleId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.rules)[':ruleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>
            >
          >,
          ReturnType<typeof getRulesRuleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.rules)[':ruleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRulesRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRulesRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rules[':ruleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSecretIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSecretIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secret.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSecretIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>
          >,
          ReturnType<typeof getSecretIndexQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSecretIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSecretIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.secret.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.secret.index.$put>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.secret.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.secret.index.$post>,
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secret)[':name']['$get']>>,
) {
  return ['secret', '/secret/:name', toValue(args)] as const
}

export function getSecretNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secret)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSecretNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.secret[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSecretName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.secret)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getSecretNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.secret)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSecretNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSecretNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.secret[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
          >,
          ReturnType<typeof getSettingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSettingsAllowedNetworksNodeIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>
  >,
) {
  return ['settings', '/settings/allowed_networks/:nodeId', toValue(args)] as const
}

export function getSettingsAllowedNetworksNodeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsAllowedNetworksNodeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings.allowed_networks[':nodeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSettingsAllowedNetworksNodeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsAllowedNetworksNodeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsAllowedNetworksNodeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings.allowed_networks[':nodeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.settings)[':settingId']['$get']>>,
) {
  return ['settings', '/settings/:settingId', toValue(args)] as const
}

export function getSettingsSettingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.settings)[':settingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSettingsSettingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.settings[':settingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSettingsSettingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.settings)[':settingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSettingsSettingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.settings)[':settingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSettingsSettingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSettingsSettingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.settings[':settingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useStatus<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
          ReturnType<typeof getStatusQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.status.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemArchivesArchiveKindQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.system.archives)[':archiveKind']['$get']>>,
) {
  return ['system', '/system/archives/:archiveKind', toValue(args)] as const
}

export function getSystemArchivesArchiveKindQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.system.archives)[':archiveKind']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSystemArchivesArchiveKindQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.archives[':archiveKind'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.system.archives)[':archiveKind']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSystemArchivesArchiveKindQueryKey>
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
          Awaited<ReturnType<(typeof client.system.archives)[':archiveKind']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemArchivesArchiveKindQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSystemArchivesArchiveKindQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.system.archives[':archiveKind'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']>
  >,
) {
  return ['system', '/system/archives/:archiveKind/zip/:commitId', toValue(args)] as const
}

export function getSystemArchivesArchiveKindZipCommitIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSystemArchivesArchiveKindZipCommitIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.archives[':archiveKind'].zip[':commitId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']>
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
                    (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
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
                    (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getSystemArchivesArchiveKindZipCommitIdQueryKey>
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
            ReturnType<(typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemArchivesArchiveKindZipCommitIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSystemArchivesArchiveKindZipCommitIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.system.archives[':archiveKind'].zip[':commitId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemHealthcheckQueryKey() {
  return ['system', '/system/healthcheck'] as const
}

export function getSystemHealthcheckQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemHealthcheckQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.healthcheck.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemHealthcheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>
            >
          >,
          ReturnType<typeof getSystemHealthcheckQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.healthcheck.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemHealthcheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemHealthcheckQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.healthcheck.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemInfoQueryKey() {
  return ['system', '/system/info'] as const
}

export function getSystemInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
          >,
          ReturnType<typeof getSystemInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.reload.$post>>>>
          >,
          TError,
          void,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.system.reload.techniques.$post>>
              >
            >
          >,
          TError,
          void,
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

export function getSystemStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.status.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
          >,
          ReturnType<typeof getSystemStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTechniquesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTechniquesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.techniques.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTechniques<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>
          >,
          ReturnType<typeof getTechniquesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTechniquesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTechniquesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.techniques.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.techniques.$put>,
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

export function getTechniquesCategoriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTechniquesCategoriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.techniques.categories.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTechniquesCategories<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>
            >
          >,
          ReturnType<typeof getTechniquesCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.techniques.categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTechniquesCategoriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.techniques.categories.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTechniquesVersionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTechniquesVersionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.techniques.versions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTechniquesVersions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>
            >
          >,
          ReturnType<typeof getTechniquesVersionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.techniques.versions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTechniquesVersionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.techniques.versions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTechniquesTechniqueIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.techniques)[':techniqueId']['$get']>>,
) {
  return ['techniques', '/techniques/:techniqueId', toValue(args)] as const
}

export function getTechniquesTechniqueIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.techniques)[':techniqueId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTechniquesTechniqueIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.techniques[':techniqueId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTechniquesTechniqueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.techniques)[':techniqueId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTechniquesTechniqueIdQueryKey>
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
          Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesTechniqueIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTechniquesTechniqueIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.techniques[':techniqueId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTechniquesTechniqueIdDirectivesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.techniques)[':techniqueId']['directives']['$get']>
  >,
) {
  return ['techniques', '/techniques/:techniqueId/directives', toValue(args)] as const
}

export function getTechniquesTechniqueIdDirectivesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.techniques)[':techniqueId']['directives']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTechniquesTechniqueIdDirectivesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.techniques[':techniqueId'].directives.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.techniques)[':techniqueId']['directives']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>
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
                  ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTechniquesTechniqueIdDirectivesQueryKey>
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
          Awaited<ReturnType<(typeof client.techniques)[':techniqueId']['directives']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesTechniqueIdDirectivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTechniquesTechniqueIdDirectivesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.techniques[':techniqueId'].directives.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTechniquesTechniqueIdTechniqueVersionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>
  >,
) {
  return ['techniques', '/techniques/:techniqueId/:techniqueVersion', toValue(args)] as const
}

export function getTechniquesTechniqueIdTechniqueVersionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTechniquesTechniqueIdTechniqueVersionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.techniques[':techniqueId'][':techniqueVersion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>
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
                    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']
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
                    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionQueryKey>
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
            ReturnType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTechniquesTechniqueIdTechniqueVersionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.techniques[':techniqueId'][':techniqueVersion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.techniques)[':techniqueId'][':techniqueVersion']['$post']
          >,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
    >
  >,
) {
  return [
    'techniques',
    '/techniques/:techniqueId/:techniqueVersion/directives',
    toValue(args),
  ] as const
}

export function getTechniquesTechniqueIdTechniqueVersionDirectivesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTechniquesTechniqueIdTechniqueVersionDirectivesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.techniques[':techniqueId'][':techniqueVersion'].directives.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
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
                    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
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
                    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionDirectivesQueryKey>
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
              (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionDirectivesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTechniquesTechniqueIdTechniqueVersionDirectivesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.techniques[':techniqueId'][':techniqueVersion'].directives.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTechniquesTechniqueIdTechniqueVersionResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
    >
  >,
) {
  return [
    'techniques',
    '/techniques/:techniqueId/:techniqueVersion/resources',
    toValue(args),
  ] as const
}

export function getTechniquesTechniqueIdTechniqueVersionResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTechniquesTechniqueIdTechniqueVersionResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.techniques[':techniqueId'][':techniqueVersion'].resources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
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
                    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
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
                    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionResourcesQueryKey>
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
              (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionResourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTechniquesTechniqueIdTechniqueVersionResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.techniques[':techniqueId'][':techniqueVersion'].resources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTechniquesTechniqueIdTechniqueVersionRevisionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
    >
  >,
) {
  return [
    'techniques',
    '/techniques/:techniqueId/:techniqueVersion/revisions',
    toValue(args),
  ] as const
}

export function getTechniquesTechniqueIdTechniqueVersionRevisionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTechniquesTechniqueIdTechniqueVersionRevisionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.techniques[':techniqueId'][':techniqueVersion'].revisions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
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
                    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
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
                    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionRevisionsQueryKey>
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
              (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTechniquesTechniqueIdTechniqueVersionRevisionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTechniquesTechniqueIdTechniqueVersionRevisionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.techniques[':techniqueId'][':techniqueVersion'].revisions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.usermanagement.$post>,
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

export function getUsermanagementRolesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsermanagementRolesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.usermanagement.roles.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsermanagementRoles<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>
            >
          >,
          ReturnType<typeof getUsermanagementRolesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.roles.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsermanagementRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsermanagementRolesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.usermanagement.roles.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUsermanagementUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsermanagementUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.usermanagement.users.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsermanagementUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>
            >
          >,
          ReturnType<typeof getUsermanagementUsersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsermanagementUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsermanagementUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.usermanagement.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsermanagementUsersReloadQueryKey() {
  return ['usermanagement', '/usermanagement/users/reload'] as const
}

export function getUsermanagementUsersReloadQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsermanagementUsersReloadQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.usermanagement.users.reload.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.usermanagement.users.reload.$get>>
              >
            >
          >,
          ReturnType<typeof getUsermanagementUsersReloadQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.usermanagement.users.reload.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsermanagementUsersReloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsermanagementUsersReloadQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.usermanagement.users.reload.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getUsersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.validatedUsers.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.validatedUsers.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
