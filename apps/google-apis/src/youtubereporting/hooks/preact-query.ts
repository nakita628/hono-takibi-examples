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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1JobsQueryKey(args: InferRequestType<typeof client.v1.jobs.$get>) {
  return ['v1', '/v1/jobs', args] as const
}

export function getV1JobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.jobs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1JobsQueryKey>
  >({
    queryKey: getV1JobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Jobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.jobs.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1JobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1JobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Jobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.jobs.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1JobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1JobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1JobsMutationKey() {
  return ['v1', '/v1/jobs', 'POST'] as const
}

export function getPostV1JobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1JobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.jobs.$post>) {
      return parseResponse(client.v1.jobs.$post(args, options))
    },
  })
}

export function usePostV1Jobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.jobs.$post>>>>>,
        TError,
        InferRequestType<typeof client.v1.jobs.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1JobsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1JobsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['$get']>,
) {
  return ['v1', '/v1/jobs/:jobId', args] as const
}

export function getV1JobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JobsJobIdQueryKey>
  >({
    queryKey: getV1JobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.jobs[':jobId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1JobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1JobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1JobsJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1JobsJobId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1JobsJobIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1JobsJobIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1JobsJobIdMutationKey() {
  return ['v1', '/v1/jobs/:jobId', 'DELETE'] as const
}

export function getDeleteV1JobsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.jobs)[':jobId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1JobsJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.jobs)[':jobId']['$delete']>) {
      return parseResponse(client.v1.jobs[':jobId'].$delete(args, options))
    },
  })
}

export function useDeleteV1JobsJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.jobs)[':jobId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1JobsJobIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1JobsJobIdReportsQueryKey(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>,
) {
  return ['v1', '/v1/jobs/:jobId/reports', args] as const
}

export function getV1JobsJobIdReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JobsJobIdReportsQueryKey>
  >({
    queryKey: getV1JobsJobIdReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.jobs[':jobId'].reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1JobsJobIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1JobsJobIdReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1JobsJobIdReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1JobsJobIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1JobsJobIdReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1JobsJobIdReportsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1JobsJobIdReportsReportIdQueryKey(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>,
) {
  return ['v1', '/v1/jobs/:jobId/reports/:reportId', args] as const
}

export function getV1JobsJobIdReportsReportIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1JobsJobIdReportsReportIdQueryKey>
  >({
    queryKey: getV1JobsJobIdReportsReportIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.jobs[':jobId'].reports[':reportId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1JobsJobIdReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1JobsJobIdReportsReportIdQueryKey>
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
      ...getV1JobsJobIdReportsReportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1JobsJobIdReportsReportId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.jobs)[':jobId']['reports'][':reportId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1JobsJobIdReportsReportIdQueryKey>
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
      ...getV1JobsJobIdReportsReportIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1MediaResourceNameQueryKey(
  args: InferRequestType<(typeof client.v1.media)[':resourceName']['$get']>,
) {
  return ['v1', '/v1/media/:resourceName', args] as const
}

export function getV1MediaResourceNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.media)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.media)[':resourceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.media)[':resourceName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MediaResourceNameQueryKey>
  >({
    queryKey: getV1MediaResourceNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.media[':resourceName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1MediaResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.media)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.media)[':resourceName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.media)[':resourceName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MediaResourceNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1MediaResourceNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1MediaResourceName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.media)[':resourceName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.media)[':resourceName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.media)[':resourceName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MediaResourceNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1MediaResourceNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1ReportTypesQueryKey(
  args: InferRequestType<typeof client.v1.reportTypes.$get>,
) {
  return ['v1', '/v1/reportTypes', args] as const
}

export function getV1ReportTypesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reportTypes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.reportTypes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reportTypes.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1ReportTypesQueryKey>
  >({
    queryKey: getV1ReportTypesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.reportTypes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ReportTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reportTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reportTypes.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reportTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReportTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ReportTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ReportTypes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reportTypes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.reportTypes.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.reportTypes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1ReportTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ReportTypesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
