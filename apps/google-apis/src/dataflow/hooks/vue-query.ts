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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs', toValue(args)] as const
}

export function getV1b3ProjectsProjectIdJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1b3ProjectsProjectIdJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdJobsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1b3ProjectsProjectIdJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId', toValue(args)] as const
}

export function getV1b3ProjectsProjectIdJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1b3ProjectsProjectIdJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1b3ProjectsProjectIdJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
    >
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/messages', toValue(args)] as const
}

export function getV1b3ProjectsProjectIdJobsJobIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1b3ProjectsProjectIdJobsJobIdMessagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs[':jobId'].messages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdMessagesQueryKey>
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
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1b3ProjectsProjectIdJobsJobIdMessagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].jobs[':jobId'].messages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1b3ProjectsProjectIdJobsJobIdMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
    >
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/metrics', toValue(args)] as const
}

export function getV1b3ProjectsProjectIdJobsJobIdMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1b3ProjectsProjectIdJobsJobIdMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].jobs[':jobId'].metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdMetricsQueryKey>
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
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdJobsJobIdMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1b3ProjectsProjectIdJobsJobIdMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].jobs[':jobId'].metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs:aggregated', toValue(args)] as const
}

export function getV1b3ProjectsProjectIdJobsAggregatedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1b3ProjectsProjectIdJobsAggregatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId']['jobs:aggregated'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdJobsAggregatedQueryKey>
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
            ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdJobsAggregatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1b3ProjectsProjectIdJobsAggregatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId']['jobs:aggregated'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
    >
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/jobs', toValue(args)] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1b3ProjectsProjectIdLocationsLocationJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsQueryKey>
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
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1b3ProjectsProjectIdLocationsLocationJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
    >
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId',
    toValue(args),
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryKey>
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
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1b3ProjectsProjectIdLocationsLocationJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
    >
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/executionDetails',
    toValue(args),
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[
          ':jobId'
        ].executionDetails.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryKey
          >
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
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[
            ':jobId'
          ].executionDetails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
    >
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/messages',
    toValue(args),
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].messages.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryKey>
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
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].messages.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
    >
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/metrics',
    toValue(args),
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].metrics.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryKey>
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
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].metrics.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
    >
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/snapshots',
    toValue(args),
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].snapshots.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryKey>
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
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].snapshots.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
    >
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/stages/:stageId/executionDetails',
    toValue(args),
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].stages[
          ':stageId'
        ].executionDetails.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].stages[
            ':stageId'
          ].executionDetails.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
    >
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/snapshots', toValue(args)] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryKey>
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
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1b3ProjectsProjectIdLocationsLocationSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
    >
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/snapshots/:snapshotId',
    toValue(args),
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location'].snapshots[':snapshotId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryKey>
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
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].snapshots[':snapshotId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
    >
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/templates:get',
    toValue(args),
  ] as const
}

export function getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].locations[':location']['templates:get'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryKey>
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
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1b3ProjectsProjectIdLocationsLocationTemplatesGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].locations[':location']['templates:get'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/snapshots', toValue(args)] as const
}

export function getV1b3ProjectsProjectIdSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1b3ProjectsProjectIdSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>
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
                  ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1b3ProjectsProjectIdSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
    >
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/snapshots/:snapshotId', toValue(args)] as const
}

export function getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId'].snapshots[':snapshotId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
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
                    (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryKey>
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
              (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1b3ProjectsProjectIdSnapshotsSnapshotIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId'].snapshots[':snapshotId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1b3.projects)[':projectId']['templates']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates']['$post']>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/templates:get', toValue(args)] as const
}

export function getV1b3ProjectsProjectIdTemplatesGetQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1b3ProjectsProjectIdTemplatesGetQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1b3.projects[':projectId']['templates:get'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1b3ProjectsProjectIdTemplatesGetQueryKey>
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
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1b3ProjectsProjectIdTemplatesGetQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1b3ProjectsProjectIdTemplatesGetQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1b3.projects[':projectId']['templates:get'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1b3.projects)[':projectId']['templates:launch']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1b3.projects)[':projectId']['templates:launch']['$post']
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
