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

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1NameLocationsQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
) {
  return ['v1', '/v1/:name/locations', args] as const
}

export function getV1NameLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameLocationsQueryKey>
  >({
    queryKey: getV1NameLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1NameLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1NameLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV1NameOperationsQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
) {
  return ['v1', '/v1/:name/operations', args] as const
}

export function getV1NameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameOperationsQueryKey>
  >({
    queryKey: getV1NameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1NameOperationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1NameOperationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1NameCancelMutationKey() {
  return ['v1', '/v1/:name:cancel', 'POST'] as const
}

export function getPostV1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentJobsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>,
) {
  return ['v1', '/v1/:parent/jobs', args] as const
}

export function getV1ParentJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentJobsQueryKey>
  >({
    queryKey: getV1ParentJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].jobs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ParentJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ParentJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ParentJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentJobsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ParentJobsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV1ParentJobsMutationKey() {
  return ['v1', '/v1/:parent/jobs', 'POST'] as const
}

export function getPostV1ParentJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentJobsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['jobs']['$post']>) {
      return parseResponse(client.v1[':parent'].jobs.$post(args, options))
    },
  })
}

export function usePostV1ParentJobs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['jobs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['jobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentJobsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1ParentStateReportMutationKey() {
  return ['v1', '/v1/:parent/state:report', 'POST'] as const
}

export function getPostV1ParentStateReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['state:report']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['state:report']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentStateReportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['state:report']['$post']>,
    ) {
      return parseResponse(client.v1[':parent']['state:report'].$post(args, options))
    },
  })
}

export function usePostV1ParentStateReport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['state:report']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['state:report']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentStateReportMutationOptions<TError, TOnMutateResult>(
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

export function getV1ParentTasksQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['tasks']['$get']>,
) {
  return ['v1', '/v1/:parent/tasks', args] as const
}

export function getV1ParentTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['tasks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentTasksQueryKey>
  >({
    queryKey: getV1ParentTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1ParentTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1ParentTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1ParentTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1ParentTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
