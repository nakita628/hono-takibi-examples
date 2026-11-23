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

export function getApiKeysKey() {
  return ['api_keys'] as const
}

export function getConsumptionHistoryKey() {
  return ['consumption_history'] as const
}

export function getOrganizationsKey() {
  return ['organizations'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getRegionsKey() {
  return ['regions'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getApiKeysQueryKey() {
  return ['api_keys', '/api_keys'] as const
}

export function getApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiKeysQueryKey>
  >({
    queryKey: getApiKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api_keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
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
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$get>>>>>,
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
  return ['api_keys', '/api_keys', 'POST'] as const
}

export function getPostApiKeysMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>>,
    TError,
    InferRequestType<typeof client.api_keys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiKeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api_keys.$post>) {
      return parseResponse(client.api_keys.$post(args, options))
    },
  })
}

export function usePostApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_keys.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api_keys.$post>,
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

export function getDeleteApiKeysKeyIdMutationKey() {
  return ['api_keys', '/api_keys/:key_id', 'DELETE'] as const
}

export function getDeleteApiKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_keys)[':key_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api_keys)[':key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiKeysKeyIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api_keys)[':key_id']['$delete']>) {
      return parseResponse(client.api_keys[':key_id'].$delete(args, options))
    },
  })
}

export function useDeleteApiKeysKeyId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api_keys)[':key_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api_keys)[':key_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiKeysKeyIdMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdOperationsOperationIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['operations'][':operation_id']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/operations/:operation_id', args] as const
}

export function getProjectsProjectIdOperationsOperationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['operations'][':operation_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['operations'][':operation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['operations'][':operation_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdOperationsOperationIdQueryKey>
  >({
    queryKey: getProjectsProjectIdOperationsOperationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].operations[':operation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['operations'][':operation_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['operations'][':operation_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['operations'][':operation_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdOperationsOperationIdQueryKey>
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
      ...getProjectsProjectIdOperationsOperationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['operations'][':operation_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['operations'][':operation_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['operations'][':operation_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdOperationsOperationIdQueryKey>
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
      ...getProjectsProjectIdOperationsOperationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsQueryKey(args: InferRequestType<typeof client.projects.$get>) {
  return ['projects', '/projects', args] as const
}

export function getProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.projects.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >({
    queryKey: getProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.projects.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.projects.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProjectsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProjectsMutationKey() {
  return ['projects', '/projects', 'POST'] as const
}

export function getPostProjectsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>>,
    TError,
    InferRequestType<typeof client.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.$post>) {
      return parseResponse(client.projects.$post(args, options))
    },
  })
}

export function usePostProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getProjectsSharedQueryKey(
  args: InferRequestType<typeof client.projects.shared.$get>,
) {
  return ['projects', '/projects/shared', args] as const
}

export function getProjectsSharedQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.shared.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.projects.shared.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.shared.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsSharedQueryKey>
  >({
    queryKey: getProjectsSharedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.shared.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProjectsShared<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.shared.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.projects.shared.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.shared.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsSharedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProjectsSharedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProjectsShared<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.shared.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.projects.shared.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.shared.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsSharedQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProjectsSharedQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
) {
  return ['projects', '/projects/:project_id', args] as const
}

export function getProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >({
    queryKey: getProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProjectsProjectIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProjectsProjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProjectsProjectIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdMutationKey() {
  return ['projects', '/projects/:project_id', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':project_id']['$delete']>) {
      return parseResponse(client.projects[':project_id'].$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchProjectsProjectIdMutationKey() {
  return ['projects', '/projects/:project_id', 'PATCH'] as const
}

export function getPatchProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':project_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':project_id']['$patch']>) {
      return parseResponse(client.projects[':project_id'].$patch(args, options))
    },
  })
}

export function usePatchProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdOperationsQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['operations']['$get']>,
) {
  return ['projects', '/projects/:project_id/operations', args] as const
}

export function getProjectsProjectIdOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdOperationsQueryKey>
  >({
    queryKey: getProjectsProjectIdOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdOperationsQueryKey>
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
      ...getProjectsProjectIdOperationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdOperationsQueryKey>
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
      ...getProjectsProjectIdOperationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsProjectIdPermissionsQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['permissions']['$get']>,
) {
  return ['projects', '/projects/:project_id/permissions', args] as const
}

export function getProjectsProjectIdPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdPermissionsQueryKey>
  >({
    queryKey: getProjectsProjectIdPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['permissions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdPermissionsQueryKey>
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
      ...getProjectsProjectIdPermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['permissions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdPermissionsQueryKey>
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
      ...getProjectsProjectIdPermissionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdPermissionsMutationKey() {
  return ['projects', '/projects/:project_id/permissions', 'POST'] as const
}

export function getPostProjectsProjectIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['permissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_id']['permissions']['$post']>,
    ) {
      return parseResponse(client.projects[':project_id'].permissions.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['permissions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_id']['permissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdPermissionsMutationOptions<
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

export function getDeleteProjectsProjectIdPermissionsPermissionIdMutationKey() {
  return ['projects', '/projects/:project_id/permissions/:permission_id', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdPermissionsPermissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['permissions'][':permission_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['permissions'][':permission_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdPermissionsPermissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['permissions'][':permission_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].permissions[':permission_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdPermissionsPermissionId<
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
                  (typeof client.projects)[':project_id']['permissions'][':permission_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['permissions'][':permission_id']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdPermissionsPermissionIdMutationOptions<
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

export function getProjectsProjectIdJwksQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['jwks']['$get']>,
) {
  return ['projects', '/projects/:project_id/jwks', args] as const
}

export function getProjectsProjectIdJwksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['jwks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['jwks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['jwks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdJwksQueryKey>
  >({
    queryKey: getProjectsProjectIdJwksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].jwks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdJwks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['jwks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['jwks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['jwks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdJwksQueryKey>
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
      ...getProjectsProjectIdJwksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdJwks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['jwks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['jwks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['jwks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdJwksQueryKey>
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
      ...getProjectsProjectIdJwksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdJwksMutationKey() {
  return ['projects', '/projects/:project_id/jwks', 'POST'] as const
}

export function getPostProjectsProjectIdJwksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['jwks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['jwks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdJwksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_id']['jwks']['$post']>,
    ) {
      return parseResponse(client.projects[':project_id'].jwks.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdJwks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['jwks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_id']['jwks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdJwksMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteProjectsProjectIdJwksJwksIdMutationKey() {
  return ['projects', '/projects/:project_id/jwks/:jwks_id', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdJwksJwksIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_id']['jwks'][':jwks_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['jwks'][':jwks_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdJwksJwksIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['jwks'][':jwks_id']['$delete']
      >,
    ) {
      return parseResponse(client.projects[':project_id'].jwks[':jwks_id'].$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectIdJwksJwksId<
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
                ReturnType<(typeof client.projects)[':project_id']['jwks'][':jwks_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_id']['jwks'][':jwks_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectIdJwksJwksIdMutationOptions<
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

export function getProjectsProjectIdConnectionUriQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['connection_uri']['$get']>,
) {
  return ['projects', '/projects/:project_id/connection_uri', args] as const
}

export function getProjectsProjectIdConnectionUriQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['connection_uri']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['connection_uri']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['connection_uri']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdConnectionUriQueryKey>
  >({
    queryKey: getProjectsProjectIdConnectionUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].connection_uri.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdConnectionUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['connection_uri']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['connection_uri']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['connection_uri']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdConnectionUriQueryKey>
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
      ...getProjectsProjectIdConnectionUriQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdConnectionUri<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['connection_uri']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['connection_uri']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['connection_uri']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdConnectionUriQueryKey>
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
      ...getProjectsProjectIdConnectionUriQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsProjectIdBranchesQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches']['$get']>,
) {
  return ['projects', '/projects/:project_id/branches', args] as const
}

export function getProjectsProjectIdBranchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['branches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdBranchesQueryKey>
  >({
    queryKey: getProjectsProjectIdBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].branches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['branches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesQueryKey>
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
      ...getProjectsProjectIdBranchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['branches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesQueryKey>
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
      ...getProjectsProjectIdBranchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdBranchesMutationKey() {
  return ['projects', '/projects/:project_id/branches', 'POST'] as const
}

export function getPostProjectsProjectIdBranchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['branches']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['branches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdBranchesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_id']['branches']['$post']>,
    ) {
      return parseResponse(client.projects[':project_id'].branches.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdBranches<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['branches']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_id']['branches']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdBranchesMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdBranchesCountQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches']['count']['$get']>,
) {
  return ['projects', '/projects/:project_id/branches/count', args] as const
}

export function getProjectsProjectIdBranchesCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['branches']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['branches']['count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdBranchesCountQueryKey>
  >({
    queryKey: getProjectsProjectIdBranchesCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].branches.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdBranchesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['branches']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches']['count']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)[':project_id']['branches']['count']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesCountQueryKey>
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
      ...getProjectsProjectIdBranchesCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdBranchesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['branches']['count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches']['count']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)[':project_id']['branches']['count']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesCountQueryKey>
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
      ...getProjectsProjectIdBranchesCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsProjectIdBranchesBranchIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches'][':branch_id']['$get']>,
) {
  return ['projects', '/projects/:project_id/branches/:branch_id', args] as const
}

export function getProjectsProjectIdBranchesBranchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['branches'][':branch_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches'][':branch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_id']['branches'][':branch_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdBranchesBranchIdQueryKey>
  >({
    queryKey: getProjectsProjectIdBranchesBranchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdBranchesBranchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['branches'][':branch_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches'][':branch_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdBranchesBranchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['branches'][':branch_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['branches'][':branch_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdBranchesBranchIdMutationKey() {
  return ['projects', '/projects/:project_id/branches/:branch_id', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdBranchesBranchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':project_id']['branches'][':branch_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['branches'][':branch_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdBranchesBranchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['branches'][':branch_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdBranchesBranchId<
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
                    (typeof client.projects)[':project_id']['branches'][':branch_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['branches'][':branch_id']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdBranchesBranchIdMutationOptions<
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

export function getPatchProjectsProjectIdBranchesBranchIdMutationKey() {
  return ['projects', '/projects/:project_id/branches/:branch_id', 'PATCH'] as const
}

export function getPatchProjectsProjectIdBranchesBranchIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_id']['branches'][':branch_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['branches'][':branch_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdBranchesBranchIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['branches'][':branch_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchProjectsProjectIdBranchesBranchId<
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
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['branches'][':branch_id']['$patch']
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
  const mutationDefaults = getPatchProjectsProjectIdBranchesBranchIdMutationOptions<
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

export function getPostProjectsProjectIdBranchesBranchIdRestoreMutationKey() {
  return ['projects', '/projects/:project_id/branches/:branch_id/restore', 'POST'] as const
}

export function getPostProjectsProjectIdBranchesBranchIdRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['branches'][':branch_id']['restore']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdBranchesBranchIdRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['branches'][':branch_id']['restore']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].restore.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdBranchesBranchIdRestore<
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
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['restore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['branches'][':branch_id']['restore']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdBranchesBranchIdRestoreMutationOptions<
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

export function getProjectsProjectIdBranchesBranchIdSchemaQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['schema']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/branches/:branch_id/schema', args] as const
}

export function getProjectsProjectIdBranchesBranchIdSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['schema']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['schema']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdBranchesBranchIdSchemaQueryKey>
  >({
    queryKey: getProjectsProjectIdBranchesBranchIdSchemaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].schema.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdBranchesBranchIdSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['schema']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['schema']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['schema']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdSchemaQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdSchemaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdBranchesBranchIdSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['schema']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['schema']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['schema']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdSchemaQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdSchemaQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsProjectIdBranchesBranchIdCompareSchemaQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['compare_schema']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/branches/:branch_id/compare_schema', args] as const
}

export function getProjectsProjectIdBranchesBranchIdCompareSchemaQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['compare_schema']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['compare_schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['compare_schema']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdBranchesBranchIdCompareSchemaQueryKey>
  >({
    queryKey: getProjectsProjectIdBranchesBranchIdCompareSchemaQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].compare_schema.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdBranchesBranchIdCompareSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['compare_schema']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['compare_schema']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['compare_schema']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdCompareSchemaQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdCompareSchemaQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdBranchesBranchIdCompareSchema<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['compare_schema']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['compare_schema']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['compare_schema']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdCompareSchemaQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdCompareSchemaQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdBranchesBranchIdSetAsDefaultMutationKey() {
  return ['projects', '/projects/:project_id/branches/:branch_id/set_as_default', 'POST'] as const
}

export function getPostProjectsProjectIdBranchesBranchIdSetAsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['set_as_default']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['branches'][':branch_id']['set_as_default']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdBranchesBranchIdSetAsDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['branches'][':branch_id']['set_as_default']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].set_as_default.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdBranchesBranchIdSetAsDefault<
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
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['set_as_default']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['branches'][':branch_id']['set_as_default']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdBranchesBranchIdSetAsDefaultMutationOptions<
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

export function getProjectsProjectIdBranchesBranchIdEndpointsQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['endpoints']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/branches/:branch_id/endpoints', args] as const
}

export function getProjectsProjectIdBranchesBranchIdEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['endpoints']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['endpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['endpoints']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdBranchesBranchIdEndpointsQueryKey>
  >({
    queryKey: getProjectsProjectIdBranchesBranchIdEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].endpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdBranchesBranchIdEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['endpoints']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['endpoints']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['endpoints']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdEndpointsQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdEndpointsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdBranchesBranchIdEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['endpoints']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['endpoints']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['endpoints']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdEndpointsQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdEndpointsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsProjectIdBranchesBranchIdDatabasesQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/branches/:branch_id/databases', args] as const
}

export function getProjectsProjectIdBranchesBranchIdDatabasesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdBranchesBranchIdDatabasesQueryKey>
  >({
    queryKey: getProjectsProjectIdBranchesBranchIdDatabasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].databases.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdBranchesBranchIdDatabases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdDatabasesQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdDatabasesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdBranchesBranchIdDatabases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdDatabasesQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdDatabasesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdBranchesBranchIdDatabasesMutationKey() {
  return ['projects', '/projects/:project_id/branches/:branch_id/databases', 'POST'] as const
}

export function getPostProjectsProjectIdBranchesBranchIdDatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdBranchesBranchIdDatabasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].databases.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdBranchesBranchIdDatabases<
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
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['branches'][':branch_id']['databases']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdBranchesBranchIdDatabasesMutationOptions<
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

export function getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:project_id/branches/:branch_id/databases/:database_name',
    args,
  ] as const
}

export function getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameQueryKey>
  >({
    queryKey: getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].databases[':database_name'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useProjectsProjectIdBranchesBranchIdDatabasesDatabaseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdBranchesBranchIdDatabasesDatabaseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameMutationKey() {
  return [
    'projects',
    '/projects/:project_id/branches/:branch_id/databases/:database_name',
    'DELETE',
  ] as const
}

export function getDeleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].databases[':database_name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseName<
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
                    (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$delete']
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
    getDeleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameMutationOptions<
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

export function getPatchProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameMutationKey() {
  return [
    'projects',
    '/projects/:project_id/branches/:branch_id/databases/:database_name',
    'PATCH',
  ] as const
}

export function getPatchProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$patch']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].databases[':database_name'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchProjectsProjectIdBranchesBranchIdDatabasesDatabaseName<
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
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['branches'][':branch_id']['databases'][':database_name']['$patch']
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
    getPatchProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameMutationOptions<
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

export function getProjectsProjectIdBranchesBranchIdRolesQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/branches/:branch_id/roles', args] as const
}

export function getProjectsProjectIdBranchesBranchIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdBranchesBranchIdRolesQueryKey>
  >({
    queryKey: getProjectsProjectIdBranchesBranchIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdBranchesBranchIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdRolesQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdRolesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdBranchesBranchIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdRolesQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdRolesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdBranchesBranchIdRolesMutationKey() {
  return ['projects', '/projects/:project_id/branches/:branch_id/roles', 'POST'] as const
}

export function getPostProjectsProjectIdBranchesBranchIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdBranchesBranchIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].roles.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdBranchesBranchIdRoles<
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
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['branches'][':branch_id']['roles']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdBranchesBranchIdRolesMutationOptions<
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

export function getProjectsProjectIdBranchesBranchIdRolesRoleNameQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/branches/:branch_id/roles/:role_name', args] as const
}

export function getProjectsProjectIdBranchesBranchIdRolesRoleNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdBranchesBranchIdRolesRoleNameQueryKey>
  >({
    queryKey: getProjectsProjectIdBranchesBranchIdRolesRoleNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].roles[':role_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdBranchesBranchIdRolesRoleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdRolesRoleNameQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdRolesRoleNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdBranchesBranchIdRolesRoleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdRolesRoleNameQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdRolesRoleNameQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdBranchesBranchIdRolesRoleNameMutationKey() {
  return [
    'projects',
    '/projects/:project_id/branches/:branch_id/roles/:role_name',
    'DELETE',
  ] as const
}

export function getDeleteProjectsProjectIdBranchesBranchIdRolesRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdBranchesBranchIdRolesRoleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].roles[':role_name'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteProjectsProjectIdBranchesBranchIdRolesRoleName<
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
                    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdBranchesBranchIdRolesRoleNameMutationOptions<
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

export function getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reveal_password']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:project_id/branches/:branch_id/roles/:role_name/reveal_password',
    args,
  ] as const
}

export function getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reveal_password']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reveal_password']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reveal_password']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordQueryKey>
  >({
    queryKey: getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].roles[
          ':role_name'
        ].reveal_password.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reveal_password']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reveal_password']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reveal_password']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPassword<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reveal_password']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reveal_password']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reveal_password']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordQueryKey>
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
      ...getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdBranchesBranchIdRolesRoleNameResetPasswordMutationKey() {
  return [
    'projects',
    '/projects/:project_id/branches/:branch_id/roles/:role_name/reset_password',
    'POST',
  ] as const
}

export function getPostProjectsProjectIdBranchesBranchIdRolesRoleNameResetPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reset_password']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reset_password']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdBranchesBranchIdRolesRoleNameResetPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reset_password']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].branches[':branch_id'].roles[
          ':role_name'
        ].reset_password.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdBranchesBranchIdRolesRoleNameResetPassword<
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
                  (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reset_password']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['branches'][':branch_id']['roles'][':role_name']['reset_password']['$post']
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
    getPostProjectsProjectIdBranchesBranchIdRolesRoleNameResetPasswordMutationOptions<
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

export function getProjectsProjectIdVpcEndpointsQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['vpc_endpoints']['$get']>,
) {
  return ['projects', '/projects/:project_id/vpc_endpoints', args] as const
}

export function getProjectsProjectIdVpcEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['vpc_endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['vpc_endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['vpc_endpoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdVpcEndpointsQueryKey>
  >({
    queryKey: getProjectsProjectIdVpcEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].vpc_endpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdVpcEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['vpc_endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['vpc_endpoints']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['vpc_endpoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdVpcEndpointsQueryKey>
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
      ...getProjectsProjectIdVpcEndpointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdVpcEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['vpc_endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['vpc_endpoints']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['vpc_endpoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdVpcEndpointsQueryKey>
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
      ...getProjectsProjectIdVpcEndpointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdVpcEndpointsVpcEndpointIdMutationKey() {
  return ['projects', '/projects/:project_id/vpc_endpoints/:vpc_endpoint_id', 'POST'] as const
}

export function getPostProjectsProjectIdVpcEndpointsVpcEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['vpc_endpoints'][':vpc_endpoint_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['vpc_endpoints'][':vpc_endpoint_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdVpcEndpointsVpcEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['vpc_endpoints'][':vpc_endpoint_id']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].vpc_endpoints[':vpc_endpoint_id'].$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdVpcEndpointsVpcEndpointId<
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
                  (typeof client.projects)[':project_id']['vpc_endpoints'][':vpc_endpoint_id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['vpc_endpoints'][':vpc_endpoint_id']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdVpcEndpointsVpcEndpointIdMutationOptions<
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

export function getDeleteProjectsProjectIdVpcEndpointsVpcEndpointIdMutationKey() {
  return ['projects', '/projects/:project_id/vpc_endpoints/:vpc_endpoint_id', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdVpcEndpointsVpcEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['vpc_endpoints'][':vpc_endpoint_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['vpc_endpoints'][':vpc_endpoint_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdVpcEndpointsVpcEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['vpc_endpoints'][':vpc_endpoint_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].vpc_endpoints[':vpc_endpoint_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdVpcEndpointsVpcEndpointId<
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
                  (typeof client.projects)[':project_id']['vpc_endpoints'][':vpc_endpoint_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['vpc_endpoints'][':vpc_endpoint_id']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdVpcEndpointsVpcEndpointIdMutationOptions<
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

export function getProjectsProjectIdEndpointsQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_id']['endpoints']['$get']>,
) {
  return ['projects', '/projects/:project_id/endpoints', args] as const
}

export function getProjectsProjectIdEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['endpoints']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdEndpointsQueryKey>
  >({
    queryKey: getProjectsProjectIdEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].endpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['endpoints']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['endpoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdEndpointsQueryKey>
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
      ...getProjectsProjectIdEndpointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_id']['endpoints']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_id']['endpoints']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['endpoints']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdEndpointsQueryKey>
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
      ...getProjectsProjectIdEndpointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdEndpointsMutationKey() {
  return ['projects', '/projects/:project_id/endpoints', 'POST'] as const
}

export function getPostProjectsProjectIdEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_id']['endpoints']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':project_id']['endpoints']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':project_id']['endpoints']['$post']>,
    ) {
      return parseResponse(client.projects[':project_id'].endpoints.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_id']['endpoints']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':project_id']['endpoints']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdEndpointsMutationOptions<
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

export function getProjectsProjectIdEndpointsEndpointIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$get']
  >,
) {
  return ['projects', '/projects/:project_id/endpoints/:endpoint_id', args] as const
}

export function getProjectsProjectIdEndpointsEndpointIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdEndpointsEndpointIdQueryKey>
  >({
    queryKey: getProjectsProjectIdEndpointsEndpointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_id'].endpoints[':endpoint_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdEndpointsEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdEndpointsEndpointIdQueryKey>
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
      ...getProjectsProjectIdEndpointsEndpointIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdEndpointsEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdEndpointsEndpointIdQueryKey>
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
      ...getProjectsProjectIdEndpointsEndpointIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdEndpointsEndpointIdMutationKey() {
  return ['projects', '/projects/:project_id/endpoints/:endpoint_id', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdEndpointsEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdEndpointsEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].endpoints[':endpoint_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdEndpointsEndpointId<
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
                    (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdEndpointsEndpointIdMutationOptions<
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

export function getPatchProjectsProjectIdEndpointsEndpointIdMutationKey() {
  return ['projects', '/projects/:project_id/endpoints/:endpoint_id', 'PATCH'] as const
}

export function getPatchProjectsProjectIdEndpointsEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdEndpointsEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].endpoints[':endpoint_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchProjectsProjectIdEndpointsEndpointId<
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
                  (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['$patch']
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
  const mutationDefaults = getPatchProjectsProjectIdEndpointsEndpointIdMutationOptions<
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

export function getPostProjectsProjectIdEndpointsEndpointIdStartMutationKey() {
  return ['projects', '/projects/:project_id/endpoints/:endpoint_id/start', 'POST'] as const
}

export function getPostProjectsProjectIdEndpointsEndpointIdStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['start']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdEndpointsEndpointIdStartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['start']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].endpoints[':endpoint_id'].start.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdEndpointsEndpointIdStart<
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
                  (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['start']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['start']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdEndpointsEndpointIdStartMutationOptions<
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

export function getPostProjectsProjectIdEndpointsEndpointIdSuspendMutationKey() {
  return ['projects', '/projects/:project_id/endpoints/:endpoint_id/suspend', 'POST'] as const
}

export function getPostProjectsProjectIdEndpointsEndpointIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['suspend']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['suspend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdEndpointsEndpointIdSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['suspend']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].endpoints[':endpoint_id'].suspend.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdEndpointsEndpointIdSuspend<
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
                  (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['suspend']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['suspend']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdEndpointsEndpointIdSuspendMutationOptions<
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

export function getPostProjectsProjectIdEndpointsEndpointIdRestartMutationKey() {
  return ['projects', '/projects/:project_id/endpoints/:endpoint_id/restart', 'POST'] as const
}

export function getPostProjectsProjectIdEndpointsEndpointIdRestartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['restart']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['restart']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdEndpointsEndpointIdRestartMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['restart']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':project_id'].endpoints[':endpoint_id'].restart.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdEndpointsEndpointIdRestart<
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
                  (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['restart']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':project_id']['endpoints'][':endpoint_id']['restart']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdEndpointsEndpointIdRestartMutationOptions<
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

export function getConsumptionHistoryAccountQueryKey(
  args: InferRequestType<typeof client.consumption_history.account.$get>,
) {
  return ['consumption_history', '/consumption_history/account', args] as const
}

export function getConsumptionHistoryAccountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumption_history.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumption_history.account.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumption_history.account.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumptionHistoryAccountQueryKey>
  >({
    queryKey: getConsumptionHistoryAccountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumption_history.account.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConsumptionHistoryAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumption_history.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumption_history.account.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.consumption_history.account.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConsumptionHistoryAccountQueryKey>
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
      ...getConsumptionHistoryAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConsumptionHistoryAccount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumption_history.account.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumption_history.account.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.consumption_history.account.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConsumptionHistoryAccountQueryKey>
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
      ...getConsumptionHistoryAccountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getConsumptionHistoryProjectsQueryKey(
  args: InferRequestType<typeof client.consumption_history.projects.$get>,
) {
  return ['consumption_history', '/consumption_history/projects', args] as const
}

export function getConsumptionHistoryProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumption_history.projects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumption_history.projects.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.consumption_history.projects.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumptionHistoryProjectsQueryKey>
  >({
    queryKey: getConsumptionHistoryProjectsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumption_history.projects.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConsumptionHistoryProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumption_history.projects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumption_history.projects.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.consumption_history.projects.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConsumptionHistoryProjectsQueryKey>
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
      ...getConsumptionHistoryProjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConsumptionHistoryProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.consumption_history.projects.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.consumption_history.projects.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.consumption_history.projects.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConsumptionHistoryProjectsQueryKey>
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
      ...getConsumptionHistoryProjectsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsOrgIdQueryKey(
  args: InferRequestType<(typeof client.organizations)[':org_id']['$get']>,
) {
  return ['organizations', '/organizations/:org_id', args] as const
}

export function getOrganizationsOrgIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':org_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':org_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdQueryKey>
  >({
    queryKey: getOrganizationsOrgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':org_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':org_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrganizationsOrgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrgId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organizations)[':org_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrganizationsOrgIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOrganizationsOrgIdApiKeysQueryKey(
  args: InferRequestType<(typeof client.organizations)[':org_id']['api_keys']['$get']>,
) {
  return ['organizations', '/organizations/:org_id/api_keys', args] as const
}

export function getOrganizationsOrgIdApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['api_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['api_keys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':org_id']['api_keys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdApiKeysQueryKey>
  >({
    queryKey: getOrganizationsOrgIdApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':org_id'].api_keys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrgIdApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['api_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['api_keys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['api_keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdApiKeysQueryKey>
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
      ...getOrganizationsOrgIdApiKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrgIdApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['api_keys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['api_keys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['api_keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdApiKeysQueryKey>
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
      ...getOrganizationsOrgIdApiKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationsOrgIdApiKeysMutationKey() {
  return ['organizations', '/organizations/:org_id/api_keys', 'POST'] as const
}

export function getPostOrganizationsOrgIdApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':org_id']['api_keys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':org_id']['api_keys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrgIdApiKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':org_id']['api_keys']['$post']>,
    ) {
      return parseResponse(client.organizations[':org_id'].api_keys.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrgIdApiKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['api_keys']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':org_id']['api_keys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrgIdApiKeysMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganizationsOrgIdApiKeysKeyIdMutationKey() {
  return ['organizations', '/organizations/:org_id/api_keys/:key_id', 'DELETE'] as const
}

export function getDeleteOrganizationsOrgIdApiKeysKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':org_id']['api_keys'][':key_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':org_id']['api_keys'][':key_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrgIdApiKeysKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':org_id']['api_keys'][':key_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':org_id'].api_keys[':key_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrgIdApiKeysKeyId<
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
                  (typeof client.organizations)[':org_id']['api_keys'][':key_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organizations)[':org_id']['api_keys'][':key_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsOrgIdApiKeysKeyIdMutationOptions<
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

export function getOrganizationsOrgIdMembersQueryKey(
  args: InferRequestType<(typeof client.organizations)[':org_id']['members']['$get']>,
) {
  return ['organizations', '/organizations/:org_id/members', args] as const
}

export function getOrganizationsOrgIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':org_id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdMembersQueryKey>
  >({
    queryKey: getOrganizationsOrgIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':org_id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrgIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdMembersQueryKey>
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
      ...getOrganizationsOrgIdMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrgIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdMembersQueryKey>
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
      ...getOrganizationsOrgIdMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsOrgIdMembersMemberIdQueryKey(
  args: InferRequestType<(typeof client.organizations)[':org_id']['members'][':member_id']['$get']>,
) {
  return ['organizations', '/organizations/:org_id/members/:member_id', args] as const
}

export function getOrganizationsOrgIdMembersMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':org_id']['members'][':member_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['members'][':member_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':org_id']['members'][':member_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdMembersMemberIdQueryKey>
  >({
    queryKey: getOrganizationsOrgIdMembersMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':org_id'].members[':member_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrgIdMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':org_id']['members'][':member_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['members'][':member_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':org_id']['members'][':member_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdMembersMemberIdQueryKey>
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
      ...getOrganizationsOrgIdMembersMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrgIdMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organizations)[':org_id']['members'][':member_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['members'][':member_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':org_id']['members'][':member_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdMembersMemberIdQueryKey>
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
      ...getOrganizationsOrgIdMembersMemberIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOrganizationsOrgIdMembersMemberIdMutationKey() {
  return ['organizations', '/organizations/:org_id/members/:member_id', 'DELETE'] as const
}

export function getDeleteOrganizationsOrgIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':org_id']['members'][':member_id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':org_id']['members'][':member_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrgIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':org_id']['members'][':member_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':org_id'].members[':member_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrgIdMembersMemberId<
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
                  (typeof client.organizations)[':org_id']['members'][':member_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organizations)[':org_id']['members'][':member_id']['$delete']
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
  const mutationDefaults = getDeleteOrganizationsOrgIdMembersMemberIdMutationOptions<
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

export function getPatchOrganizationsOrgIdMembersMemberIdMutationKey() {
  return ['organizations', '/organizations/:org_id/members/:member_id', 'PATCH'] as const
}

export function getPatchOrganizationsOrgIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organizations)[':org_id']['members'][':member_id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':org_id']['members'][':member_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrganizationsOrgIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':org_id']['members'][':member_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.organizations[':org_id'].members[':member_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchOrganizationsOrgIdMembersMemberId<
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
                  (typeof client.organizations)[':org_id']['members'][':member_id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organizations)[':org_id']['members'][':member_id']['$patch']
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
  const mutationDefaults = getPatchOrganizationsOrgIdMembersMemberIdMutationOptions<
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

export function getOrganizationsOrgIdInvitationsQueryKey(
  args: InferRequestType<(typeof client.organizations)[':org_id']['invitations']['$get']>,
) {
  return ['organizations', '/organizations/:org_id/invitations', args] as const
}

export function getOrganizationsOrgIdInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':org_id']['invitations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdInvitationsQueryKey>
  >({
    queryKey: getOrganizationsOrgIdInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':org_id'].invitations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrgIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['invitations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['invitations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdInvitationsQueryKey>
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
      ...getOrganizationsOrgIdInvitationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrgIdInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organizations)[':org_id']['invitations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organizations)[':org_id']['invitations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['invitations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdInvitationsQueryKey>
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
      ...getOrganizationsOrgIdInvitationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationsOrgIdInvitationsMutationKey() {
  return ['organizations', '/organizations/:org_id/invitations', 'POST'] as const
}

export function getPostOrganizationsOrgIdInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organizations)[':org_id']['invitations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organizations)[':org_id']['invitations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrgIdInvitationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organizations)[':org_id']['invitations']['$post']>,
    ) {
      return parseResponse(client.organizations[':org_id'].invitations.$post(args, options))
    },
  })
}

export function usePostOrganizationsOrgIdInvitations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organizations)[':org_id']['invitations']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organizations)[':org_id']['invitations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganizationsOrgIdInvitationsMutationOptions<
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

export function getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:org_id/vpc/region/:region_id/vpc_endpoints',
    args,
  ] as const
}

export function getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsQueryKey>
  >({
    queryKey: getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':org_id'].vpc.region[':region_id'].vpc_endpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganizationsOrgIdVpcRegionRegionIdVpcEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsQueryKey>
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
      ...getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrgIdVpcRegionRegionIdVpcEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsQueryKey>
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
      ...getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdQueryKey(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$get']
  >,
) {
  return [
    'organizations',
    '/organizations/:org_id/vpc/region/:region_id/vpc_endpoints/:vpc_endpoint_id',
    args,
  ] as const
}

export function getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdQueryKey>
  >({
    queryKey: getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organizations[':org_id'].vpc.region[':region_id'].vpc_endpoints[
          ':vpc_endpoint_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdQueryKey>
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
      ...getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdQueryKey>
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
      ...getOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdMutationKey() {
  return [
    'organizations',
    '/organizations/:org_id/vpc/region/:region_id/vpc_endpoints/:vpc_endpoint_id',
    'POST',
  ] as const
}

export function getPostOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$post']
      >,
    ) {
      return parseResponse(
        client.organizations[':org_id'].vpc.region[':region_id'].vpc_endpoints[
          ':vpc_endpoint_id'
        ].$post(args, options),
      )
    },
  })
}

export function usePostOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointId<
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
                  (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$post']
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
    getPostOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdMutationOptions<
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

export function getDeleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdMutationKey() {
  return [
    'organizations',
    '/organizations/:org_id/vpc/region/:region_id/vpc_endpoints/:vpc_endpoint_id',
    'DELETE',
  ] as const
}

export function getDeleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.organizations[':org_id'].vpc.region[':region_id'].vpc_endpoints[
          ':vpc_endpoint_id'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointId<
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
                  (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organizations)[':org_id']['vpc']['region'][':region_id']['vpc_endpoints'][':vpc_endpoint_id']['$delete']
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
    getDeleteOrganizationsOrgIdVpcRegionRegionIdVpcEndpointsVpcEndpointIdMutationOptions<
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

export function getRegionsQueryKey() {
  return ['regions', '/regions'] as const
}

export function getRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionsQueryKey>
  >({
    queryKey: getRegionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.regions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRegionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regions.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRegionsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersMeQueryKey() {
  return ['users', '/users/me'] as const
}

export function getUsersMeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersMeQueryKey>
  >({
    queryKey: getUsersMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersMe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersMeOrganizationsQueryKey() {
  return ['users', '/users/me/organizations'] as const
}

export function getUsersMeOrganizationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.organizations.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.organizations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersMeOrganizationsQueryKey>
  >({
    queryKey: getUsersMeOrganizationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.me.organizations.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersMeOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.me.organizations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersMeOrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersMeOrganizationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersMeOrganizations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.me.organizations.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.users.me.organizations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersMeOrganizationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersMeOrganizationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersMeProjectsTransferMutationKey() {
  return ['users', '/users/me/projects/transfer', 'POST'] as const
}

export function getPostUsersMeProjectsTransferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.users.me.projects.transfer.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.users.me.projects.transfer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMeProjectsTransferMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.me.projects.transfer.$post>) {
      return parseResponse(client.users.me.projects.transfer.$post(args, options))
    },
  })
}

export function usePostUsersMeProjectsTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.users.me.projects.transfer.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.users.me.projects.transfer.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersMeProjectsTransferMutationOptions<TError, TOnMutateResult>(
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
