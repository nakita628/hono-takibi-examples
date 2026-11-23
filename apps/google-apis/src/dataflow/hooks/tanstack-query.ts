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

export function getV1b3Key() {
  return ['v1b3'] as const
}

export function getPostV1b3ProjectsProjectIdWorkerMessagesMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/WorkerMessages', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdWorkerMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1b3.projects)[':projectId']['WorkerMessages']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['WorkerMessages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdWorkerMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['WorkerMessages']['$post']
      >,
    ) {
      return parseResponse(client.v1b3.projects[':projectId'].WorkerMessages.$post(args, options))
    },
  })
}

export function usePostV1b3ProjectsProjectIdWorkerMessages<
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
                ReturnType<(typeof client.v1b3.projects)[':projectId']['WorkerMessages']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1b3.projects)[':projectId']['WorkerMessages']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1b3ProjectsProjectIdWorkerMessagesMutationOptions<
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

export function getV1b3ProjectsProjectIdJobsQueryKey(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs', args] as const
}

export function getV1b3ProjectsProjectIdJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdJobsQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdJobsQueryKey>
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
      ...getV1b3ProjectsProjectIdJobsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdJobsQueryKey>
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
      ...getV1b3ProjectsProjectIdJobsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1b3ProjectsProjectIdJobsMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$post']>,
    ) {
      return parseResponse(client.v1b3.projects[':projectId'].jobs.$post(args, options))
    },
  })
}

export function usePostV1b3ProjectsProjectIdJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1b3ProjectsProjectIdJobsMutationOptions<TError, TOnMutateResult>(
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

export function getV1b3ProjectsProjectIdJobsJobIdQueryKey(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId', args] as const
}

export function getV1b3ProjectsProjectIdJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdQueryKey>
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
      ...getV1b3ProjectsProjectIdJobsJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdQueryKey>
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
      ...getV1b3ProjectsProjectIdJobsJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1b3ProjectsProjectIdJobsJobIdMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId', 'PUT'] as const
}

export function getPutV1b3ProjectsProjectIdJobsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1b3ProjectsProjectIdJobsJobIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$put']>,
    ) {
      return parseResponse(client.v1b3.projects[':projectId'].jobs[':jobId'].$put(args, options))
    },
  })
}

export function usePutV1b3ProjectsProjectIdJobsJobId<
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
                ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1b3ProjectsProjectIdJobsJobIdMutationOptions<
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

export function getPostV1b3ProjectsProjectIdJobsJobIdDebugGetConfigMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/debug/getConfig', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdJobsJobIdDebugGetConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['getConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['getConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdJobsJobIdDebugGetConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['getConfig']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs[':jobId'].debug.getConfig.$post(args, options),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdJobsJobIdDebugGetConfig<
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
                  (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['getConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['getConfig']['$post']
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
  const mutationDefaults = getPostV1b3ProjectsProjectIdJobsJobIdDebugGetConfigMutationOptions<
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

export function getPostV1b3ProjectsProjectIdJobsJobIdDebugSendCaptureMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/debug/sendCapture', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdJobsJobIdDebugSendCaptureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['sendCapture']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['sendCapture']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdJobsJobIdDebugSendCaptureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['sendCapture']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs[':jobId'].debug.sendCapture.$post(args, options),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdJobsJobIdDebugSendCapture<
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
                  (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['sendCapture']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['sendCapture']['$post']
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
  const mutationDefaults = getPostV1b3ProjectsProjectIdJobsJobIdDebugSendCaptureMutationOptions<
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

export function getV1b3ProjectsProjectIdJobsJobIdMessagesQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/messages', args] as const
}

export function getV1b3ProjectsProjectIdJobsJobIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdMessagesQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdJobsJobIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs[':jobId'].messages.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdJobsJobIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdMessagesQueryKey>
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
      ...getV1b3ProjectsProjectIdJobsJobIdMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdJobsJobIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdMessagesQueryKey>
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
      ...getV1b3ProjectsProjectIdJobsJobIdMessagesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1b3ProjectsProjectIdJobsJobIdMetricsQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/metrics', args] as const
}

export function getV1b3ProjectsProjectIdJobsJobIdMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdMetricsQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdJobsJobIdMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs[':jobId'].metrics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdJobsJobIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdMetricsQueryKey>
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
      ...getV1b3ProjectsProjectIdJobsJobIdMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdJobsJobIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdMetricsQueryKey>
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
      ...getV1b3ProjectsProjectIdJobsJobIdMetricsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1b3ProjectsProjectIdJobsJobIdWorkItemsLeaseMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/workItems:lease', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdJobsJobIdWorkItemsLeaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:lease']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:lease']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdJobsJobIdWorkItemsLeaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:lease']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs[':jobId']['workItems:lease'].$post(args, options),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdJobsJobIdWorkItemsLease<
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
                  (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:lease']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:lease']['$post']
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
  const mutationDefaults = getPostV1b3ProjectsProjectIdJobsJobIdWorkItemsLeaseMutationOptions<
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

export function getPostV1b3ProjectsProjectIdJobsJobIdWorkItemsReportStatusMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/workItems:reportStatus', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdJobsJobIdWorkItemsReportStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:reportStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:reportStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdJobsJobIdWorkItemsReportStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:reportStatus']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs[':jobId']['workItems:reportStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdJobsJobIdWorkItemsReportStatus<
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
                  (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:reportStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:reportStatus']['$post']
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
    getPostV1b3ProjectsProjectIdJobsJobIdWorkItemsReportStatusMutationOptions<
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

export function getPostV1b3ProjectsProjectIdJobsJobIdSnapshotMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId:snapshot', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdJobsJobIdSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId:snapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId:snapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdJobsJobIdSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId:snapshot']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs[':jobId:snapshot'].$post(args, options),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdJobsJobIdSnapshot<
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
                  (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId:snapshot']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId:snapshot']['$post']
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
  const mutationDefaults = getPostV1b3ProjectsProjectIdJobsJobIdSnapshotMutationOptions<
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

export function getV1b3ProjectsProjectIdJobsAggregatedQueryKey(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs:aggregated', args] as const
}

export function getV1b3ProjectsProjectIdJobsAggregatedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdJobsAggregatedQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdJobsAggregatedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId']['jobs:aggregated'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdJobsAggregated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdJobsAggregatedQueryKey>
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
      ...getV1b3ProjectsProjectIdJobsAggregatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdJobsAggregated<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdJobsAggregatedQueryKey>
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
      ...getV1b3ProjectsProjectIdJobsAggregatedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1b3ProjectsProjectIdLocationsLocationWorkerMessagesMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/WorkerMessages', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdLocationsLocationWorkerMessagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['WorkerMessages']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['WorkerMessages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdLocationsLocationWorkerMessagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['locations'][':location']['WorkerMessages']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].WorkerMessages.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdLocationsLocationWorkerMessages<
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
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['WorkerMessages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['locations'][':location']['WorkerMessages']['$post']
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
    getPostV1b3ProjectsProjectIdLocationsLocationWorkerMessagesMutationOptions<
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

export function getPostV1b3ProjectsProjectIdLocationsLocationFlexTemplatesLaunchMutationKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/flexTemplates:launch',
    'POST',
  ] as const
}

export function getPostV1b3ProjectsProjectIdLocationsLocationFlexTemplatesLaunchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['flexTemplates:launch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['flexTemplates:launch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdLocationsLocationFlexTemplatesLaunchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['locations'][':location']['flexTemplates:launch']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location']['flexTemplates:launch'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdLocationsLocationFlexTemplatesLaunch<
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
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['flexTemplates:launch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['locations'][':location']['flexTemplates:launch']['$post']
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
    getPostV1b3ProjectsProjectIdLocationsLocationFlexTemplatesLaunchMutationOptions<
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

export function getV1b3ProjectsProjectIdLocationsLocationJobsQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/jobs', args] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdLocationsLocationJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdLocationsLocationJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdLocationsLocationJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/jobs', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdLocationsLocationJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs.$post(args, options),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdLocationsLocationJobs<
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
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$post']
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
  const mutationDefaults = getPostV1b3ProjectsProjectIdLocationsLocationJobsMutationOptions<
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

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/jobs/:jobId', args] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdLocationsLocationJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdLocationsLocationJobsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV1b3ProjectsProjectIdLocationsLocationJobsJobIdMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/jobs/:jobId', 'PUT'] as const
}

export function getPutV1b3ProjectsProjectIdLocationsLocationJobsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1b3ProjectsProjectIdLocationsLocationJobsJobIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV1b3ProjectsProjectIdLocationsLocationJobsJobId<
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
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$put']
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
  const mutationDefaults = getPutV1b3ProjectsProjectIdLocationsLocationJobsJobIdMutationOptions<
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

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugGetConfigMutationKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/debug/getConfig',
    'POST',
  ] as const
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugGetConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['getConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['getConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugGetConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['getConfig']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[
          ':jobId'
        ].debug.getConfig.$post(args, options),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugGetConfig<
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
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['getConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['getConfig']['$post']
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
    getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugGetConfigMutationOptions<
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

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugSendCaptureMutationKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/debug/sendCapture',
    'POST',
  ] as const
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugSendCaptureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['sendCapture']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['sendCapture']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugSendCaptureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['sendCapture']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[
          ':jobId'
        ].debug.sendCapture.$post(args, options),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugSendCapture<
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
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['sendCapture']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['sendCapture']['$post']
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
    getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugSendCaptureMutationOptions<
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

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/executionDetails',
    args,
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[
          ':jobId'
        ].executionDetails.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryKey
        >
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryKey
        >
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/messages',
    args,
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].messages.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/metrics',
    args,
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].metrics.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/snapshots',
    args,
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].snapshots.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/stages/:stageId/executionDetails',
    args,
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryKey
    >
  >({
    queryKey:
      getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].stages[
          ':stageId'
        ].executionDetails.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryKey
        >
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryKey
        >
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
      ...getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsLeaseMutationKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/workItems:lease',
    'POST',
  ] as const
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsLeaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:lease']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:lease']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsLeaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:lease']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'][
          'workItems:lease'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsLease<
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
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:lease']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:lease']['$post']
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
    getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsLeaseMutationOptions<
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

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsReportStatusMutationKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/workItems:reportStatus',
    'POST',
  ] as const
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsReportStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:reportStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:reportStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsReportStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:reportStatus']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'][
          'workItems:reportStatus'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsReportStatus<
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
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:reportStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:reportStatus']['$post']
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
    getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsReportStatusMutationOptions<
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

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotMutationKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId:snapshot',
    'POST',
  ] as const
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId:snapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId:snapshot']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId:snapshot']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId:snapshot'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshot<
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
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId:snapshot']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId:snapshot']['$post']
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
    getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotMutationOptions<
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

export function getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/snapshots', args] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdLocationsLocationSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdLocationsLocationSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/snapshots/:snapshotId',
    args,
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].snapshots[':snapshotId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdMutationKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/snapshots/:snapshotId',
    'DELETE',
  ] as const
}

export function getDeleteV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].snapshots[':snapshotId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotId<
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
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$delete']
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
    getDeleteV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdMutationOptions<
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

export function getPostV1b3ProjectsProjectIdLocationsLocationTemplatesMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/templates', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdLocationsLocationTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdLocationsLocationTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].templates.$post(args, options),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdLocationsLocationTemplates<
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
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates']['$post']
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
  const mutationDefaults = getPostV1b3ProjectsProjectIdLocationsLocationTemplatesMutationOptions<
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

export function getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/templates:get', args] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location']['templates:get'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdLocationsLocationTemplatesGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdLocationsLocationTemplatesGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryKey>
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
      ...getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1b3ProjectsProjectIdLocationsLocationTemplatesLaunchMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/templates:launch', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdLocationsLocationTemplatesLaunchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:launch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:launch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdLocationsLocationTemplatesLaunchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:launch']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location']['templates:launch'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdLocationsLocationTemplatesLaunch<
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
                  (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:launch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:launch']['$post']
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
    getPostV1b3ProjectsProjectIdLocationsLocationTemplatesLaunchMutationOptions<
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

export function getV1b3ProjectsProjectIdSnapshotsQueryKey(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>,
) {
  return ['v1b3', '/v1b3/projects/:projectId/snapshots', args] as const
}

export function getV1b3ProjectsProjectIdSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdSnapshotsQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdSnapshotsQueryKey>
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
      ...getV1b3ProjectsProjectIdSnapshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdSnapshotsQueryKey>
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
      ...getV1b3ProjectsProjectIdSnapshotsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV1b3ProjectsProjectIdSnapshotsMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/snapshots', 'DELETE'] as const
}

export function getDeleteV1b3ProjectsProjectIdSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1b3ProjectsProjectIdSnapshotsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$delete']>,
    ) {
      return parseResponse(client.v1b3.projects[':projectId'].snapshots.$delete(args, options))
    },
  })
}

export function useDeleteV1b3ProjectsProjectIdSnapshots<
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
                ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1b3ProjectsProjectIdSnapshotsMutationOptions<
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

export function getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/snapshots/:snapshotId', args] as const
}

export function getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId'].snapshots[':snapshotId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdSnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryKey>
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
      ...getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdSnapshotsSnapshotId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryKey>
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
      ...getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1b3ProjectsProjectIdTemplatesMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/templates', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdTemplatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['templates']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdTemplatesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates']['$post']>,
    ) {
      return parseResponse(client.v1b3.projects[':projectId'].templates.$post(args, options))
    },
  })
}

export function usePostV1b3ProjectsProjectIdTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['templates']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1b3ProjectsProjectIdTemplatesMutationOptions<
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

export function getV1b3ProjectsProjectIdTemplatesGetQueryKey(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>,
) {
  return ['v1b3', '/v1b3/projects/:projectId/templates:get', args] as const
}

export function getV1b3ProjectsProjectIdTemplatesGetQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdTemplatesGetQueryKey>
  >({
    queryKey: getV1b3ProjectsProjectIdTemplatesGetQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1b3.projects[':projectId']['templates:get'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1b3ProjectsProjectIdTemplatesGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdTemplatesGetQueryKey>
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
      ...getV1b3ProjectsProjectIdTemplatesGetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1b3ProjectsProjectIdTemplatesGet<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1b3ProjectsProjectIdTemplatesGetQueryKey>
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
      ...getV1b3ProjectsProjectIdTemplatesGetQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1b3ProjectsProjectIdTemplatesLaunchMutationKey() {
  return ['v1b3', '/v1b3/projects/:projectId/templates:launch', 'POST'] as const
}

export function getPostV1b3ProjectsProjectIdTemplatesLaunchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:launch']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:launch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1b3ProjectsProjectIdTemplatesLaunchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1b3.projects)[':projectId']['templates:launch']['$post']
      >,
    ) {
      return parseResponse(
        client.v1b3.projects[':projectId']['templates:launch'].$post(args, options),
      )
    },
  })
}

export function usePostV1b3ProjectsProjectIdTemplatesLaunch<
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
                ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:launch']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:launch']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1b3ProjectsProjectIdTemplatesLaunchMutationOptions<
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
