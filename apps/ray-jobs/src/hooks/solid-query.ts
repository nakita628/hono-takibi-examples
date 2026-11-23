import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiVersionQueryKey() {
  return ['api', '/api/version'] as const
}

export function getApiVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiVersionQueryKey>
  >({
    queryKey: getApiVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.version.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiVersionQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiJobsQueryKey() {
  return ['api', '/api/jobs'] as const
}

export function getApiJobsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiJobsQueryKey>
  >({
    queryKey: getApiJobsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiJobs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getApiJobsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostApiJobsMutationKey() {
  return ['api', '/api/jobs', 'POST'] as const
}

export function getPostApiJobsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.jobs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.jobs.$post>) {
      return parseResponse(client.api.jobs.$post(args, options))
    },
  })
}

export function createPostApiJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.jobs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.jobs.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiJobsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiJobsSubmissionIdQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':submission_id']['$get']>,
) {
  return ['api', '/api/jobs/:submission_id', args] as const
}

export function getApiJobsSubmissionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':submission_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsSubmissionIdQueryKey>
  >({
    queryKey: getApiJobsSubmissionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':submission_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiJobsSubmissionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':submission_id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiJobsSubmissionIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJobsSubmissionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiJobsSubmissionIdMutationKey() {
  return ['api', '/api/jobs/:submission_id', 'DELETE'] as const
}

export function getDeleteApiJobsSubmissionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':submission_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiJobsSubmissionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':submission_id']['$delete']>,
    ) {
      return parseResponse(client.api.jobs[':submission_id'].$delete(args, options))
    },
  })
}

export function createDeleteApiJobsSubmissionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.jobs)[':submission_id']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiJobsSubmissionIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiJobsSubmissionIdStopMutationKey() {
  return ['api', '/api/jobs/:submission_id/stop', 'POST'] as const
}

export function getPostApiJobsSubmissionIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['stop']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.jobs)[':submission_id']['stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiJobsSubmissionIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.jobs)[':submission_id']['stop']['$post']>,
    ) {
      return parseResponse(client.api.jobs[':submission_id'].stop.$post(args, options))
    },
  })
}

export function createPostApiJobsSubmissionIdStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['stop']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.jobs)[':submission_id']['stop']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiJobsSubmissionIdStopMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiJobsSubmissionIdLogsQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':submission_id']['logs']['$get']>,
) {
  return ['api', '/api/jobs/:submission_id/logs', args] as const
}

export function getApiJobsSubmissionIdLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':submission_id']['logs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['logs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsSubmissionIdLogsQueryKey>
  >({
    queryKey: getApiJobsSubmissionIdLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':submission_id'].logs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiJobsSubmissionIdLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['logs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':submission_id']['logs']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiJobsSubmissionIdLogsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiJobsSubmissionIdLogsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiJobsSubmissionIdLogsTailQueryKey(
  args: InferRequestType<(typeof client.api.jobs)[':submission_id']['logs']['tail']['$get']>,
) {
  return ['api', '/api/jobs/:submission_id/logs/tail', args] as const
}

export function getApiJobsSubmissionIdLogsTailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['logs']['tail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.jobs)[':submission_id']['logs']['tail']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['logs']['tail']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJobsSubmissionIdLogsTailQueryKey>
  >({
    queryKey: getApiJobsSubmissionIdLogsTailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.jobs[':submission_id'].logs.tail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiJobsSubmissionIdLogsTail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.jobs)[':submission_id']['logs']['tail']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.jobs)[':submission_id']['logs']['tail']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.jobs)[':submission_id']['logs']['tail']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiJobsSubmissionIdLogsTailQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiJobsSubmissionIdLogsTailQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}
