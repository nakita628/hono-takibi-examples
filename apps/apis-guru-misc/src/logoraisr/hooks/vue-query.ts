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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.previews)[':file_id']['index']['$get']>>,
) {
  return ['previews', '/previews/:file_id/', toValue(args)] as const
}

export function getPreviewsFileIdIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.previews)[':file_id']['index']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPreviewsFileIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.previews[':file_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.previews)[':file_id']['index']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.previews)[':file_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPreviewsFileIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.previews)[':file_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPreviewsFileIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPreviewsFileIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.previews[':file_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProcessesIndexQueryKey() {
  return ['processes', '/processes/'] as const
}

export function getProcessesIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProcessesIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.processes.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProcessesIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.processes.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.processes.index.$get>>>
            >
          >,
          ReturnType<typeof getProcessesIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.processes.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProcessesIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProcessesIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.processes.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getProjectsIndexQueryKey() {
  return ['projects', '/projects/'] as const
}

export function getProjectsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProjectsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProjectsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$get>>>>
          >,
          ReturnType<typeof getProjectsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProjectsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.projects.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.projects.index.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.projects.index.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_number']['index']['$get']>
  >,
) {
  return ['projects', '/projects/:project_number/', toValue(args)] as const
}

export function getProjectsProjectNumberIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_number']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getProjectsProjectNumberIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.projects[':project_number'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.projects)[':project_number']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.projects)[':project_number']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getProjectsProjectNumberIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.projects)[':project_number']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProjectsProjectNumberIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getProjectsProjectNumberIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.projects[':project_number'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsIndexQueryKey() {
  return ['reports', '/reports/'] as const
}

export function getReportsIndexQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReportsIndexQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReportsIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$get>>>>
          >,
          ReturnType<typeof getReportsIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReportsIndexQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reports.index.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':report_number']['index']['$get']>
  >,
) {
  return ['reports', '/reports/:report_number/', toValue(args)] as const
}

export function getReportsReportNumberIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':report_number']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsReportNumberIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports[':report_number'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.reports)[':report_number']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports)[':report_number']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportsReportNumberIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.reports)[':report_number']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsReportNumberIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsReportNumberIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports[':report_number'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResultsResultFileIdIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.results)[':result_file_id']['index']['$get']>
  >,
) {
  return ['results', '/results/:result_file_id/', toValue(args)] as const
}

export function getResultsResultFileIdIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.results)[':result_file_id']['index']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResultsResultFileIdIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.results[':result_file_id'].index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.results)[':result_file_id']['index']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.results)[':result_file_id']['index']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResultsResultFileIdIndexQueryKey>
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
          Awaited<ReturnType<(typeof client.results)[':result_file_id']['index']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResultsResultFileIdIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResultsResultFileIdIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.results[':result_file_id'].index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.uploads.index.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.uploads.index.$post>,
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
