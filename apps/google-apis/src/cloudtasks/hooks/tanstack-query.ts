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

export function getV2beta3Key() {
  return ['v2beta3'] as const
}

export function getV2beta3NameQueryKey(
  args: InferRequestType<(typeof client.v2beta3)[':name']['$get']>,
) {
  return ['v2beta3', '/v2beta3/:name', args] as const
}

export function getV2beta3NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta3)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta3NameQueryKey>
  >({
    queryKey: getV2beta3NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta3[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV2beta3Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta3)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta3NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2beta3NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2beta3Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta3)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta3NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2beta3NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV2beta3NameMutationKey() {
  return ['v2beta3', '/v2beta3/:name', 'DELETE'] as const
}

export function getDeleteV2beta3NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta3)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2beta3NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta3)[':name']['$delete']>) {
      return parseResponse(client.v2beta3[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV2beta3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta3)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV2beta3NameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2beta3NameMutationKey() {
  return ['v2beta3', '/v2beta3/:name', 'PATCH'] as const
}

export function getPatchV2beta3NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta3)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2beta3NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta3)[':name']['$patch']>) {
      return parseResponse(client.v2beta3[':name'].$patch(args, options))
    },
  })
}

export function usePatchV2beta3Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta3)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV2beta3NameMutationOptions<TError, TOnMutateResult>(
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

export function getV2beta3NameLocationsQueryKey(
  args: InferRequestType<(typeof client.v2beta3)[':name']['locations']['$get']>,
) {
  return ['v2beta3', '/v2beta3/:name/locations', args] as const
}

export function getV2beta3NameLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta3)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta3)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta3NameLocationsQueryKey>
  >({
    queryKey: getV2beta3NameLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta3[':name'].locations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta3NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta3)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta3)[':name']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta3NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2beta3NameLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2beta3NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta3)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta3)[':name']['locations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta3NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2beta3NameLocationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2beta3NamePauseMutationKey() {
  return ['v2beta3', '/v2beta3/:name:pause', 'POST'] as const
}

export function getPostV2beta3NamePauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name:pause']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta3)[':name:pause']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta3NamePauseMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta3)[':name:pause']['$post']>) {
      return parseResponse(client.v2beta3[':name:pause'].$post(args, options))
    },
  })
}

export function usePostV2beta3NamePause<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':name:pause']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta3)[':name:pause']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta3NamePauseMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2beta3NamePurgeMutationKey() {
  return ['v2beta3', '/v2beta3/:name:purge', 'POST'] as const
}

export function getPostV2beta3NamePurgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name:purge']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta3)[':name:purge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta3NamePurgeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta3)[':name:purge']['$post']>) {
      return parseResponse(client.v2beta3[':name:purge'].$post(args, options))
    },
  })
}

export function usePostV2beta3NamePurge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':name:purge']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta3)[':name:purge']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta3NamePurgeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2beta3NameResumeMutationKey() {
  return ['v2beta3', '/v2beta3/:name:resume', 'POST'] as const
}

export function getPostV2beta3NameResumeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name:resume']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta3)[':name:resume']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta3NameResumeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta3)[':name:resume']['$post']>) {
      return parseResponse(client.v2beta3[':name:resume'].$post(args, options))
    },
  })
}

export function usePostV2beta3NameResume<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':name:resume']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta3)[':name:resume']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta3NameResumeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2beta3NameRunMutationKey() {
  return ['v2beta3', '/v2beta3/:name:run', 'POST'] as const
}

export function getPostV2beta3NameRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name:run']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta3)[':name:run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta3NameRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta3)[':name:run']['$post']>) {
      return parseResponse(client.v2beta3[':name:run'].$post(args, options))
    },
  })
}

export function usePostV2beta3NameRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name:run']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta3)[':name:run']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta3NameRunMutationOptions<TError, TOnMutateResult>(
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

export function getV2beta3ParentQueuesQueryKey(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$get']>,
) {
  return ['v2beta3', '/v2beta3/:parent/queues', args] as const
}

export function getV2beta3ParentQueuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta3ParentQueuesQueryKey>
  >({
    queryKey: getV2beta3ParentQueuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta3[':parent'].queues.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta3ParentQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta3ParentQueuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2beta3ParentQueuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2beta3ParentQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta3ParentQueuesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2beta3ParentQueuesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2beta3ParentQueuesMutationKey() {
  return ['v2beta3', '/v2beta3/:parent/queues', 'POST'] as const
}

export function getPostV2beta3ParentQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta3ParentQueuesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$post']>,
    ) {
      return parseResponse(client.v2beta3[':parent'].queues.$post(args, options))
    },
  })
}

export function usePostV2beta3ParentQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta3ParentQueuesMutationOptions<TError, TOnMutateResult>(
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

export function getV2beta3ParentTasksQueryKey(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$get']>,
) {
  return ['v2beta3', '/v2beta3/:parent/tasks', args] as const
}

export function getV2beta3ParentTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2beta3ParentTasksQueryKey>
  >({
    queryKey: getV2beta3ParentTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2beta3[':parent'].tasks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV2beta3ParentTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta3ParentTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV2beta3ParentTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV2beta3ParentTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2beta3ParentTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV2beta3ParentTasksQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2beta3ParentTasksMutationKey() {
  return ['v2beta3', '/v2beta3/:parent/tasks', 'POST'] as const
}

export function getPostV2beta3ParentTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta3ParentTasksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$post']>) {
      return parseResponse(client.v2beta3[':parent'].tasks.$post(args, options))
    },
  })
}

export function usePostV2beta3ParentTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta3ParentTasksMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2beta3QueueTasksTaskIdBufferMutationKey() {
  return ['v2beta3', '/v2beta3/:queue/tasks/:taskId:buffer', 'POST'] as const
}

export function getPostV2beta3QueueTasksTaskIdBufferMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':queue']['tasks'][':taskId:buffer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta3)[':queue']['tasks'][':taskId:buffer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta3QueueTasksTaskIdBufferMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta3)[':queue']['tasks'][':taskId:buffer']['$post']>,
    ) {
      return parseResponse(client.v2beta3[':queue'].tasks[':taskId:buffer'].$post(args, options))
    },
  })
}

export function usePostV2beta3QueueTasksTaskIdBuffer<
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
                ReturnType<(typeof client.v2beta3)[':queue']['tasks'][':taskId:buffer']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta3)[':queue']['tasks'][':taskId:buffer']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta3QueueTasksTaskIdBufferMutationOptions<
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

export function getPostV2beta3ResourceGetIamPolicyMutationKey() {
  return ['v2beta3', '/v2beta3/:resource:getIamPolicy', 'POST'] as const
}

export function getPostV2beta3ResourceGetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':resource:getIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta3)[':resource:getIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta3ResourceGetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta3)[':resource:getIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v2beta3[':resource:getIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV2beta3ResourceGetIamPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':resource:getIamPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta3)[':resource:getIamPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta3ResourceGetIamPolicyMutationOptions<
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

export function getPostV2beta3ResourceSetIamPolicyMutationKey() {
  return ['v2beta3', '/v2beta3/:resource:setIamPolicy', 'POST'] as const
}

export function getPostV2beta3ResourceSetIamPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta3)[':resource:setIamPolicy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta3ResourceSetIamPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta3)[':resource:setIamPolicy']['$post']>,
    ) {
      return parseResponse(client.v2beta3[':resource:setIamPolicy'].$post(args, options))
    },
  })
}

export function usePostV2beta3ResourceSetIamPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':resource:setIamPolicy']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta3)[':resource:setIamPolicy']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta3ResourceSetIamPolicyMutationOptions<
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

export function getPostV2beta3ResourceTestIamPermissionsMutationKey() {
  return ['v2beta3', '/v2beta3/:resource:testIamPermissions', 'POST'] as const
}

export function getPostV2beta3ResourceTestIamPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta3)[':resource:testIamPermissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2beta3ResourceTestIamPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta3)[':resource:testIamPermissions']['$post']>,
    ) {
      return parseResponse(client.v2beta3[':resource:testIamPermissions'].$post(args, options))
    },
  })
}

export function usePostV2beta3ResourceTestIamPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v2beta3)[':resource:testIamPermissions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2beta3)[':resource:testIamPermissions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2beta3ResourceTestIamPermissionsMutationOptions<
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
