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

export function getPreviewsKey() {
  return ['previews'] as const
}

export function getProcessesKey() {
  return ['processes'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getResultsKey() {
  return ['results'] as const
}

export function getUploadsKey() {
  return ['uploads'] as const
}

export function getPreviewsFileIdIndexQueryKey(
  args: InferRequestType<(typeof client.previews)[':file_id']['index']['$get']>,
) {
  return ['previews', '/previews/:file_id/', args] as const
}

export function getPreviewsFileIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.previews)[':file_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.previews)[':file_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.previews)[':file_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewsFileIdIndexQueryKey>
  >({
    queryKey: getPreviewsFileIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.previews[':file_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePreviewsFileIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.previews)[':file_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.previews)[':file_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.previews)[':file_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreviewsFileIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPreviewsFileIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePreviewsFileIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.previews)[':file_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.previews)[':file_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.previews)[':file_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPreviewsFileIdIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPreviewsFileIdIndexQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProcessesIndexQueryKey() {
  return ['processes', '/processes/'] as const
}

export function getProcessesIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProcessesIndexQueryKey>
  >({
    queryKey: getProcessesIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.processes.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProcessesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProcessesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProcessesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProcessesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProcessesIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProcessesIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProjectsIndexQueryKey() {
  return ['projects', '/projects/'] as const
}

export function getProjectsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIndexQueryKey>
  >({
    queryKey: getProjectsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.projects.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProjectsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProjectsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProjectsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProjectsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostProjectsIndexMutationKey() {
  return ['projects', '/projects/', 'POST'] as const
}

export function getPostProjectsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.projects.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostProjectsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.projects.index.$post>) {
      return parseResponse(client.projects.index.$post(args, options))
    },
  })
}

export function usePostProjectsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.projects.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostProjectsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getProjectsProjectNumberIndexQueryKey(
  args: InferRequestType<(typeof client.projects)[':project_number']['index']['$get']>,
) {
  return ['projects', '/projects/:project_number/', args] as const
}

export function getProjectsProjectNumberIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_number']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_number']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':project_number']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectNumberIndexQueryKey>
  >({
    queryKey: getProjectsProjectNumberIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.projects[':project_number'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProjectsProjectNumberIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_number']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_number']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_number']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectNumberIndexQueryKey>
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
      ...getProjectsProjectNumberIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProjectsProjectNumberIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.projects)[':project_number']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.projects)[':project_number']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.projects)[':project_number']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProjectsProjectNumberIndexQueryKey>
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
      ...getProjectsProjectNumberIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getReportsIndexQueryKey() {
  return ['reports', '/reports/'] as const
}

export function getReportsIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsIndexQueryKey>
  >({
    queryKey: getReportsIndexQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReportsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReportsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReportsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportsIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReportsIndexQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostReportsIndexMutationKey() {
  return ['reports', '/reports/', 'POST'] as const
}

export function getPostReportsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reports.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.index.$post>) {
      return parseResponse(client.reports.index.$post(args, options))
    },
  })
}

export function usePostReportsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.reports.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportsIndexMutationOptions<TError, TOnMutateResult>(
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

export function getReportsReportNumberIndexQueryKey(
  args: InferRequestType<(typeof client.reports)[':report_number']['index']['$get']>,
) {
  return ['reports', '/reports/:report_number/', args] as const
}

export function getReportsReportNumberIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':report_number']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':report_number']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports)[':report_number']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportNumberIndexQueryKey>
  >({
    queryKey: getReportsReportNumberIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports[':report_number'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useReportsReportNumberIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':report_number']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':report_number']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports)[':report_number']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsReportNumberIndexQueryKey>
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
      ...getReportsReportNumberIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseReportsReportNumberIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.reports)[':report_number']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports)[':report_number']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports)[':report_number']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsReportNumberIndexQueryKey>
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
      ...getReportsReportNumberIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getResultsResultFileIdIndexQueryKey(
  args: InferRequestType<(typeof client.results)[':result_file_id']['index']['$get']>,
) {
  return ['results', '/results/:result_file_id/', args] as const
}

export function getResultsResultFileIdIndexQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.results)[':result_file_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.results)[':result_file_id']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.results)[':result_file_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResultsResultFileIdIndexQueryKey>
  >({
    queryKey: getResultsResultFileIdIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.results[':result_file_id'].index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useResultsResultFileIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.results)[':result_file_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.results)[':result_file_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.results)[':result_file_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResultsResultFileIdIndexQueryKey>
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
      ...getResultsResultFileIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseResultsResultFileIdIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.results)[':result_file_id']['index']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.results)[':result_file_id']['index']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.results)[':result_file_id']['index']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getResultsResultFileIdIndexQueryKey>
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
      ...getResultsResultFileIdIndexQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostUploadsIndexMutationKey() {
  return ['uploads', '/uploads/', 'POST'] as const
}

export function getPostUploadsIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.index.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.uploads.index.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUploadsIndexMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.uploads.index.$post>) {
      return parseResponse(client.uploads.index.$post(args, options))
    },
  })
}

export function usePostUploadsIndex<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.index.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.uploads.index.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUploadsIndexMutationOptions<TError, TOnMutateResult>(
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
