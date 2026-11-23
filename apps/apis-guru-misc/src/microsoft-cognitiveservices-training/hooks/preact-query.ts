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

export function getDomainsKey() {
  return ['domains'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getDomainsQueryKey() {
  return ['domains', '/domains'] as const
}

export function getDomainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDomainsQueryKey>
  >({
    queryKey: getDomainsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.domains.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.domains.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDomainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDomainsDomainIdQueryKey(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
) {
  return ['domains', '/domains/:domainId', args] as const
}

export function getDomainsDomainIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDomainsDomainIdQueryKey>
  >({
    queryKey: getDomainsDomainIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.domains[':domainId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDomainsDomainIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDomainsDomainId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.domains)[':domainId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.domains)[':domainId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDomainsDomainIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDomainsDomainIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProjectsQueryKey() {
  return ['projects', '/projects'] as const
}

export function getProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProjectsQueryKey>
  >({
    queryKey: getProjectsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.$get(undefined, { ...options, init: { ...options?.init, signal } }),
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
    { ...getProjectsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.$get>>>>
  >,
  TError = DefaultError,
>(
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
    { ...getProjectsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
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

export function getPostProjectsImportMutationKey() {
  return ['projects', '/projects/import', 'POST'] as const
}

export function getPostProjectsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.projects.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.import.$post>) {
      return parseResponse(client.projects.import.$post(args, options))
    },
  })
}

export function usePostProjectsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.import.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.projects.import.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsImportMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
) {
  return ['projects', '/projects/:projectId', args] as const
}

export function getProjectsProjectIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdQueryKey>
  >({
    queryKey: getProjectsProjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].$get(args, {
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['$get']>>
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
  return ['projects', '/projects/:projectId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':projectId']['$delete']>) {
      return parseResponse(client.projects[':projectId'].$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['$delete']>,
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
  return ['projects', '/projects/:projectId', 'PATCH'] as const
}

export function getPatchProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.projects)[':projectId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.projects)[':projectId']['$patch']>) {
      return parseResponse(client.projects[':projectId'].$patch(args, options))
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
              Awaited<ReturnType<(typeof client.projects)[':projectId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['$patch']>,
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

export function getProjectsProjectIdExportQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['export']['$get']>,
) {
  return ['projects', '/projects/:projectId/export', args] as const
}

export function getProjectsProjectIdExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdExportQueryKey>
  >({
    queryKey: getProjectsProjectIdExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['export']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['export']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdExportQueryKey>
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
      ...getProjectsProjectIdExportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['export']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['export']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdExportQueryKey>
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
      ...getProjectsProjectIdExportQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdImagesMutationKey() {
  return ['projects', '/projects/:projectId/images', 'POST'] as const
}

export function getPostProjectsProjectIdImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['images']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['images']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].images.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['images']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdImagesMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteProjectsProjectIdImagesMutationKey() {
  return ['projects', '/projects/:projectId/images', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['images']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['images']['$delete']>,
    ) {
      return parseResponse(client.projects[':projectId'].images.$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectIdImages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['images']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectIdImagesMutationOptions<TError, TOnMutateResult>(
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

export function getPostProjectsProjectIdImagesFilesMutationKey() {
  return ['projects', '/projects/:projectId/images/files', 'POST'] as const
}

export function getPostProjectsProjectIdImagesFilesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['files']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['images']['files']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdImagesFilesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['images']['files']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].images.files.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdImagesFiles<
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
                ReturnType<(typeof client.projects)[':projectId']['images']['files']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['images']['files']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdImagesFilesMutationOptions<
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

export function getProjectsProjectIdImagesIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['id']['$get']>,
) {
  return ['projects', '/projects/:projectId/images/id', args] as const
}

export function getProjectsProjectIdImagesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdImagesIdQueryKey>
  >({
    queryKey: getProjectsProjectIdImagesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].images.id.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdImagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdImagesIdQueryKey>
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
      ...getProjectsProjectIdImagesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdImagesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdImagesIdQueryKey>
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
      ...getProjectsProjectIdImagesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdImagesPredictionsMutationKey() {
  return ['projects', '/projects/:projectId/images/predictions', 'POST'] as const
}

export function getPostProjectsProjectIdImagesPredictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['images']['predictions']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['images']['predictions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdImagesPredictionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['images']['predictions']['$post']
      >,
    ) {
      return parseResponse(client.projects[':projectId'].images.predictions.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdImagesPredictions<
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
                ReturnType<(typeof client.projects)[':projectId']['images']['predictions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['images']['predictions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdImagesPredictionsMutationOptions<
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

export function getPostProjectsProjectIdImagesRegionsMutationKey() {
  return ['projects', '/projects/:projectId/images/regions', 'POST'] as const
}

export function getPostProjectsProjectIdImagesRegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['regions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['images']['regions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdImagesRegionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['images']['regions']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].images.regions.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdImagesRegions<
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
                ReturnType<(typeof client.projects)[':projectId']['images']['regions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['images']['regions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdImagesRegionsMutationOptions<
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

export function getDeleteProjectsProjectIdImagesRegionsMutationKey() {
  return ['projects', '/projects/:projectId/images/regions', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdImagesRegionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.projects)[':projectId']['images']['regions']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['images']['regions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdImagesRegionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['images']['regions']['$delete']
      >,
    ) {
      return parseResponse(client.projects[':projectId'].images.regions.$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectIdImagesRegions<
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
                  ReturnType<(typeof client.projects)[':projectId']['images']['regions']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['images']['regions']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectIdImagesRegionsMutationOptions<
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

export function getPostProjectsProjectIdImagesSuggestedMutationKey() {
  return ['projects', '/projects/:projectId/images/suggested', 'POST'] as const
}

export function getPostProjectsProjectIdImagesSuggestedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['images']['suggested']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['images']['suggested']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdImagesSuggestedMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['images']['suggested']['$post']
      >,
    ) {
      return parseResponse(client.projects[':projectId'].images.suggested.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdImagesSuggested<
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
                ReturnType<(typeof client.projects)[':projectId']['images']['suggested']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['images']['suggested']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdImagesSuggestedMutationOptions<
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

export function getPostProjectsProjectIdImagesSuggestedCountMutationKey() {
  return ['projects', '/projects/:projectId/images/suggested/count', 'POST'] as const
}

export function getPostProjectsProjectIdImagesSuggestedCountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['images']['suggested']['count']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['images']['suggested']['count']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdImagesSuggestedCountMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['images']['suggested']['count']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].images.suggested.count.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdImagesSuggestedCount<
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
                  (typeof client.projects)[':projectId']['images']['suggested']['count']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['images']['suggested']['count']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdImagesSuggestedCountMutationOptions<
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

export function getProjectsProjectIdImagesTaggedQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['tagged']['$get']>,
) {
  return ['projects', '/projects/:projectId/images/tagged', args] as const
}

export function getProjectsProjectIdImagesTaggedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['tagged']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['tagged']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['tagged']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdImagesTaggedQueryKey>
  >({
    queryKey: getProjectsProjectIdImagesTaggedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].images.tagged.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdImagesTagged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['tagged']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['tagged']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)[':projectId']['images']['tagged']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdImagesTaggedQueryKey>
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
      ...getProjectsProjectIdImagesTaggedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdImagesTagged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['tagged']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['tagged']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)[':projectId']['images']['tagged']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdImagesTaggedQueryKey>
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
      ...getProjectsProjectIdImagesTaggedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsProjectIdImagesTaggedCountQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['images']['tagged']['count']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/images/tagged/count', args] as const
}

export function getProjectsProjectIdImagesTaggedCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['images']['tagged']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['images']['tagged']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['images']['tagged']['count']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdImagesTaggedCountQueryKey>
  >({
    queryKey: getProjectsProjectIdImagesTaggedCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].images.tagged.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdImagesTaggedCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['images']['tagged']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['images']['tagged']['count']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['images']['tagged']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdImagesTaggedCountQueryKey>
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
      ...getProjectsProjectIdImagesTaggedCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdImagesTaggedCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['images']['tagged']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['images']['tagged']['count']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['images']['tagged']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdImagesTaggedCountQueryKey>
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
      ...getProjectsProjectIdImagesTaggedCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdImagesTagsMutationKey() {
  return ['projects', '/projects/:projectId/images/tags', 'POST'] as const
}

export function getPostProjectsProjectIdImagesTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['images']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdImagesTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['images']['tags']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].images.tags.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdImagesTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['tags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['images']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdImagesTagsMutationOptions<
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

export function getDeleteProjectsProjectIdImagesTagsMutationKey() {
  return ['projects', '/projects/:projectId/images/tags', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdImagesTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['tags']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['images']['tags']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdImagesTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['images']['tags']['$delete']>,
    ) {
      return parseResponse(client.projects[':projectId'].images.tags.$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectIdImagesTags<
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
                  ReturnType<(typeof client.projects)[':projectId']['images']['tags']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['images']['tags']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectIdImagesTagsMutationOptions<
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

export function getProjectsProjectIdImagesUntaggedQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['untagged']['$get']>,
) {
  return ['projects', '/projects/:projectId/images/untagged', args] as const
}

export function getProjectsProjectIdImagesUntaggedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['untagged']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['untagged']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['untagged']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdImagesUntaggedQueryKey>
  >({
    queryKey: getProjectsProjectIdImagesUntaggedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].images.untagged.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdImagesUntagged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['untagged']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['untagged']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)[':projectId']['images']['untagged']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdImagesUntaggedQueryKey>
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
      ...getProjectsProjectIdImagesUntaggedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdImagesUntagged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['untagged']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['images']['untagged']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.projects)[':projectId']['images']['untagged']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdImagesUntaggedQueryKey>
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
      ...getProjectsProjectIdImagesUntaggedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsProjectIdImagesUntaggedCountQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['images']['untagged']['count']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/images/untagged/count', args] as const
}

export function getProjectsProjectIdImagesUntaggedCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['images']['untagged']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['images']['untagged']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['images']['untagged']['count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdImagesUntaggedCountQueryKey>
  >({
    queryKey: getProjectsProjectIdImagesUntaggedCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].images.untagged.count.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdImagesUntaggedCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['images']['untagged']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['images']['untagged']['count']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['images']['untagged']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdImagesUntaggedCountQueryKey>
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
      ...getProjectsProjectIdImagesUntaggedCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdImagesUntaggedCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['images']['untagged']['count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['images']['untagged']['count']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['images']['untagged']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdImagesUntaggedCountQueryKey>
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
      ...getProjectsProjectIdImagesUntaggedCountQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdImagesUrlsMutationKey() {
  return ['projects', '/projects/:projectId/images/urls', 'POST'] as const
}

export function getPostProjectsProjectIdImagesUrlsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['urls']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['images']['urls']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdImagesUrlsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['images']['urls']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].images.urls.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdImagesUrls<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['images']['urls']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['images']['urls']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdImagesUrlsMutationOptions<
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

export function getPostProjectsProjectIdImagesImageIdRegionproposalsMutationKey() {
  return ['projects', '/projects/:projectId/images/:imageId/regionproposals', 'POST'] as const
}

export function getPostProjectsProjectIdImagesImageIdRegionproposalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['images'][':imageId']['regionproposals']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['images'][':imageId']['regionproposals']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdImagesImageIdRegionproposalsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['images'][':imageId']['regionproposals']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].images[':imageId'].regionproposals.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdImagesImageIdRegionproposals<
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
                  (typeof client.projects)[':projectId']['images'][':imageId']['regionproposals']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['images'][':imageId']['regionproposals']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdImagesImageIdRegionproposalsMutationOptions<
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

export function getProjectsProjectIdIterationsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['iterations']['$get']>,
) {
  return ['projects', '/projects/:projectId/iterations', args] as const
}

export function getProjectsProjectIdIterationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['iterations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['iterations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['iterations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdIterationsQueryKey>
  >({
    queryKey: getProjectsProjectIdIterationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].iterations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdIterations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['iterations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['iterations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['iterations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdIterationsQueryKey>
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
      ...getProjectsProjectIdIterationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdIterations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['iterations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['iterations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['iterations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdIterationsQueryKey>
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
      ...getProjectsProjectIdIterationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsProjectIdIterationsIterationIdQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/iterations/:iterationId', args] as const
}

export function getProjectsProjectIdIterationsIterationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['iterations'][':iterationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['iterations'][':iterationId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdIterationsIterationIdQueryKey>
  >({
    queryKey: getProjectsProjectIdIterationsIterationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].iterations[':iterationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdIterationsIterationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['iterations'][':iterationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdIterationsIterationIdQueryKey>
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
      ...getProjectsProjectIdIterationsIterationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdIterationsIterationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.projects)[':projectId']['iterations'][':iterationId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdIterationsIterationIdQueryKey>
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
      ...getProjectsProjectIdIterationsIterationIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdIterationsIterationIdMutationKey() {
  return ['projects', '/projects/:projectId/iterations/:iterationId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdIterationsIterationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['iterations'][':iterationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['iterations'][':iterationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdIterationsIterationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['iterations'][':iterationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].iterations[':iterationId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdIterationsIterationId<
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
                    (typeof client.projects)[':projectId']['iterations'][':iterationId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['iterations'][':iterationId']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdIterationsIterationIdMutationOptions<
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

export function getPatchProjectsProjectIdIterationsIterationIdMutationKey() {
  return ['projects', '/projects/:projectId/iterations/:iterationId', 'PATCH'] as const
}

export function getPatchProjectsProjectIdIterationsIterationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['iterations'][':iterationId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['iterations'][':iterationId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdIterationsIterationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['iterations'][':iterationId']['$patch']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].iterations[':iterationId'].$patch(args, options),
      )
    },
  })
}

export function usePatchProjectsProjectIdIterationsIterationId<
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
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['iterations'][':iterationId']['$patch']
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
  const mutationDefaults = getPatchProjectsProjectIdIterationsIterationIdMutationOptions<
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

export function getProjectsProjectIdIterationsIterationIdExportQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/iterations/:iterationId/export', args] as const
}

export function getProjectsProjectIdIterationsIterationIdExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdIterationsIterationIdExportQueryKey>
  >({
    queryKey: getProjectsProjectIdIterationsIterationIdExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].iterations[':iterationId'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdIterationsIterationIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdIterationsIterationIdExportQueryKey>
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
      ...getProjectsProjectIdIterationsIterationIdExportQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdIterationsIterationIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdIterationsIterationIdExportQueryKey>
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
      ...getProjectsProjectIdIterationsIterationIdExportQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdIterationsIterationIdExportMutationKey() {
  return ['projects', '/projects/:projectId/iterations/:iterationId/export', 'POST'] as const
}

export function getPostProjectsProjectIdIterationsIterationIdExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdIterationsIterationIdExportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].iterations[':iterationId'].export.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdIterationsIterationIdExport<
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
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['iterations'][':iterationId']['export']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdIterationsIterationIdExportMutationOptions<
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

export function getProjectsProjectIdIterationsIterationIdPerformanceQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['$get']
  >,
) {
  return ['projects', '/projects/:projectId/iterations/:iterationId/performance', args] as const
}

export function getProjectsProjectIdIterationsIterationIdPerformanceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdIterationsIterationIdPerformanceQueryKey>
  >({
    queryKey: getProjectsProjectIdIterationsIterationIdPerformanceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].iterations[':iterationId'].performance.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdIterationsIterationIdPerformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdIterationsIterationIdPerformanceQueryKey>
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
      ...getProjectsProjectIdIterationsIterationIdPerformanceQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdIterationsIterationIdPerformance<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdIterationsIterationIdPerformanceQueryKey>
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
      ...getProjectsProjectIdIterationsIterationIdPerformanceQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsProjectIdIterationsIterationIdPerformanceImagesQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:projectId/iterations/:iterationId/performance/images',
    args,
  ] as const
}

export function getProjectsProjectIdIterationsIterationIdPerformanceImagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdIterationsIterationIdPerformanceImagesQueryKey>
  >({
    queryKey: getProjectsProjectIdIterationsIterationIdPerformanceImagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].iterations[':iterationId'].performance.images.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdIterationsIterationIdPerformanceImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdIterationsIterationIdPerformanceImagesQueryKey>
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
      ...getProjectsProjectIdIterationsIterationIdPerformanceImagesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdIterationsIterationIdPerformanceImages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdIterationsIterationIdPerformanceImagesQueryKey>
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
      ...getProjectsProjectIdIterationsIterationIdPerformanceImagesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProjectsProjectIdIterationsIterationIdPerformanceImagesCountQueryKey(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['count']['$get']
  >,
) {
  return [
    'projects',
    '/projects/:projectId/iterations/:iterationId/performance/images/count',
    args,
  ] as const
}

export function getProjectsProjectIdIterationsIterationIdPerformanceImagesCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdIterationsIterationIdPerformanceImagesCountQueryKey>
  >({
    queryKey: getProjectsProjectIdIterationsIterationIdPerformanceImagesCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].iterations[':iterationId'].performance.images.count.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useProjectsProjectIdIterationsIterationIdPerformanceImagesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['count']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdIterationsIterationIdPerformanceImagesCountQueryKey>
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
      ...getProjectsProjectIdIterationsIterationIdPerformanceImagesCountQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdIterationsIterationIdPerformanceImagesCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['count']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['performance']['images']['count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdIterationsIterationIdPerformanceImagesCountQueryKey>
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
      ...getProjectsProjectIdIterationsIterationIdPerformanceImagesCountQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdIterationsIterationIdPublishMutationKey() {
  return ['projects', '/projects/:projectId/iterations/:iterationId/publish', 'POST'] as const
}

export function getPostProjectsProjectIdIterationsIterationIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['iterations'][':iterationId']['publish']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['iterations'][':iterationId']['publish']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdIterationsIterationIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['iterations'][':iterationId']['publish']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].iterations[':iterationId'].publish.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdIterationsIterationIdPublish<
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
                  (typeof client.projects)[':projectId']['iterations'][':iterationId']['publish']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['iterations'][':iterationId']['publish']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdIterationsIterationIdPublishMutationOptions<
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

export function getDeleteProjectsProjectIdIterationsIterationIdPublishMutationKey() {
  return ['projects', '/projects/:projectId/iterations/:iterationId/publish', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdIterationsIterationIdPublishMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.projects)[':projectId']['iterations'][':iterationId']['publish']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['iterations'][':iterationId']['publish']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdIterationsIterationIdPublishMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['iterations'][':iterationId']['publish']['$delete']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].iterations[':iterationId'].publish.$delete(args, options),
      )
    },
  })
}

export function useDeleteProjectsProjectIdIterationsIterationIdPublish<
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
                    (typeof client.projects)[':projectId']['iterations'][':iterationId']['publish']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['iterations'][':iterationId']['publish']['$delete']
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
  const mutationDefaults = getDeleteProjectsProjectIdIterationsIterationIdPublishMutationOptions<
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

export function getDeleteProjectsProjectIdPredictionsMutationKey() {
  return ['projects', '/projects/:projectId/predictions', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdPredictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['predictions']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['predictions']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdPredictionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['predictions']['$delete']>,
    ) {
      return parseResponse(client.projects[':projectId'].predictions.$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectIdPredictions<
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
                  ReturnType<(typeof client.projects)[':projectId']['predictions']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['predictions']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectIdPredictionsMutationOptions<
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

export function getPostProjectsProjectIdPredictionsQueryMutationKey() {
  return ['projects', '/projects/:projectId/predictions/query', 'POST'] as const
}

export function getPostProjectsProjectIdPredictionsQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.projects)[':projectId']['predictions']['query']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['predictions']['query']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdPredictionsQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['predictions']['query']['$post']
      >,
    ) {
      return parseResponse(client.projects[':projectId'].predictions.query.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdPredictionsQuery<
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
                ReturnType<(typeof client.projects)[':projectId']['predictions']['query']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['predictions']['query']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdPredictionsQueryMutationOptions<
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

export function getPostProjectsProjectIdQuicktestImageMutationKey() {
  return ['projects', '/projects/:projectId/quicktest/image', 'POST'] as const
}

export function getPostProjectsProjectIdQuicktestImageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['quicktest']['image']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['quicktest']['image']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdQuicktestImageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['quicktest']['image']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].quicktest.image.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdQuicktestImage<
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
                ReturnType<(typeof client.projects)[':projectId']['quicktest']['image']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['quicktest']['image']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdQuicktestImageMutationOptions<
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

export function getPostProjectsProjectIdQuicktestUrlMutationKey() {
  return ['projects', '/projects/:projectId/quicktest/url', 'POST'] as const
}

export function getPostProjectsProjectIdQuicktestUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['quicktest']['url']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['quicktest']['url']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdQuicktestUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['quicktest']['url']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].quicktest.url.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdQuicktestUrl<
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
                ReturnType<(typeof client.projects)[':projectId']['quicktest']['url']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['quicktest']['url']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdQuicktestUrlMutationOptions<
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

export function getProjectsProjectIdTagsQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags']['$get']>,
) {
  return ['projects', '/projects/:projectId/tags', args] as const
}

export function getProjectsProjectIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdTagsQueryKey>
  >({
    queryKey: getProjectsProjectIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdTagsQueryKey>
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
      ...getProjectsProjectIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdTagsQueryKey>
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
      ...getProjectsProjectIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostProjectsProjectIdTagsMutationKey() {
  return ['projects', '/projects/:projectId/tags', 'POST'] as const
}

export function getPostProjectsProjectIdTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['tags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['tags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['tags']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].tags.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['tags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['tags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdTagsMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectIdTagsTagIdQueryKey(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$get']>,
) {
  return ['projects', '/projects/:projectId/tags/:tagId', args] as const
}

export function getProjectsProjectIdTagsTagIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['tags'][':tagId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['tags'][':tagId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectIdTagsTagIdQueryKey>
  >({
    queryKey: getProjectsProjectIdTagsTagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':projectId'].tags[':tagId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectIdTagsTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['tags'][':tagId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['tags'][':tagId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdTagsTagIdQueryKey>
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
      ...getProjectsProjectIdTagsTagIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectIdTagsTagId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':projectId']['tags'][':tagId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['tags'][':tagId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectIdTagsTagIdQueryKey>
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
      ...getProjectsProjectIdTagsTagIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteProjectsProjectIdTagsTagIdMutationKey() {
  return ['projects', '/projects/:projectId/tags/:tagId', 'DELETE'] as const
}

export function getDeleteProjectsProjectIdTagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.projects)[':projectId']['tags'][':tagId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteProjectsProjectIdTagsTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$delete']>,
    ) {
      return parseResponse(client.projects[':projectId'].tags[':tagId'].$delete(args, options))
    },
  })
}

export function useDeleteProjectsProjectIdTagsTagId<
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
                  ReturnType<(typeof client.projects)[':projectId']['tags'][':tagId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteProjectsProjectIdTagsTagIdMutationOptions<
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

export function getPatchProjectsProjectIdTagsTagIdMutationKey() {
  return ['projects', '/projects/:projectId/tags/:tagId', 'PATCH'] as const
}

export function getPatchProjectsProjectIdTagsTagIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['tags'][':tagId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchProjectsProjectIdTagsTagIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$patch']>,
    ) {
      return parseResponse(client.projects[':projectId'].tags[':tagId'].$patch(args, options))
    },
  })
}

export function usePatchProjectsProjectIdTagsTagId<
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
                ReturnType<(typeof client.projects)[':projectId']['tags'][':tagId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['tags'][':tagId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchProjectsProjectIdTagsTagIdMutationOptions<
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

export function getPostProjectsProjectIdTagsandregionsSuggestionsMutationKey() {
  return ['projects', '/projects/:projectId/tagsandregions/suggestions', 'POST'] as const
}

export function getPostProjectsProjectIdTagsandregionsSuggestionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.projects)[':projectId']['tagsandregions']['suggestions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.projects)[':projectId']['tagsandregions']['suggestions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdTagsandregionsSuggestionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.projects)[':projectId']['tagsandregions']['suggestions']['$post']
      >,
    ) {
      return parseResponse(
        client.projects[':projectId'].tagsandregions.suggestions.$post(args, options),
      )
    },
  })
}

export function usePostProjectsProjectIdTagsandregionsSuggestions<
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
                  (typeof client.projects)[':projectId']['tagsandregions']['suggestions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.projects)[':projectId']['tagsandregions']['suggestions']['$post']
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
  const mutationDefaults = getPostProjectsProjectIdTagsandregionsSuggestionsMutationOptions<
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

export function getPostProjectsProjectIdTrainMutationKey() {
  return ['projects', '/projects/:projectId/train', 'POST'] as const
}

export function getPostProjectsProjectIdTrainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':projectId']['train']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.projects)[':projectId']['train']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsProjectIdTrainMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.projects)[':projectId']['train']['$post']>,
    ) {
      return parseResponse(client.projects[':projectId'].train.$post(args, options))
    },
  })
}

export function usePostProjectsProjectIdTrain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':projectId']['train']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.projects)[':projectId']['train']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsProjectIdTrainMutationOptions<TError, TOnMutateResult>(
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
