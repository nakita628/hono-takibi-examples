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

export function getApiKey() {
  return ['api'] as const
}

export function getApiPublicAnnotationQueuesQueryKey(
  args: InferRequestType<(typeof client.api.public)['annotation-queues']['$get']>,
) {
  return ['api', '/api/public/annotation-queues', args] as const
}

export function getApiPublicAnnotationQueuesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['annotation-queues']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicAnnotationQueuesQueryKey>
  >({
    queryKey: getApiPublicAnnotationQueuesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public['annotation-queues'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicAnnotationQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['annotation-queues']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicAnnotationQueuesQueryKey>
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
      ...getApiPublicAnnotationQueuesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicAnnotationQueues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['annotation-queues']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicAnnotationQueuesQueryKey>
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
      ...getApiPublicAnnotationQueuesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiPublicAnnotationQueuesMutationKey() {
  return ['api', '/api/public/annotation-queues', 'POST'] as const
}

export function getPostApiPublicAnnotationQueuesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public)['annotation-queues']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicAnnotationQueuesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public)['annotation-queues']['$post']>,
    ) {
      return parseResponse(client.api.public['annotation-queues'].$post(args, options))
    },
  })
}

export function usePostApiPublicAnnotationQueues<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['annotation-queues']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public)['annotation-queues']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicAnnotationQueuesMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicAnnotationQueuesQueueIdQueryKey(
  args: InferRequestType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>,
) {
  return ['api', '/api/public/annotation-queues/:queueId', args] as const
}

export function getApiPublicAnnotationQueuesQueueIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicAnnotationQueuesQueueIdQueryKey>
  >({
    queryKey: getApiPublicAnnotationQueuesQueueIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public['annotation-queues'][':queueId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicAnnotationQueuesQueueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicAnnotationQueuesQueueIdQueryKey>
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
      ...getApiPublicAnnotationQueuesQueueIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicAnnotationQueuesQueueId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicAnnotationQueuesQueueIdQueryKey>
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
      ...getApiPublicAnnotationQueuesQueueIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicAnnotationQueuesQueueIdItemsQueryKey(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
  >,
) {
  return ['api', '/api/public/annotation-queues/:queueId/items', args] as const
}

export function getApiPublicAnnotationQueuesQueueIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicAnnotationQueuesQueueIdItemsQueryKey>
  >({
    queryKey: getApiPublicAnnotationQueuesQueueIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public['annotation-queues'][':queueId'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicAnnotationQueuesQueueIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicAnnotationQueuesQueueIdItemsQueryKey>
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
      ...getApiPublicAnnotationQueuesQueueIdItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicAnnotationQueuesQueueIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.public)['annotation-queues'][':queueId']['items']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicAnnotationQueuesQueueIdItemsQueryKey>
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
      ...getApiPublicAnnotationQueuesQueueIdItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiPublicAnnotationQueuesQueueIdItemsMutationKey() {
  return ['api', '/api/public/annotation-queues/:queueId/items', 'POST'] as const
}

export function getPostApiPublicAnnotationQueuesQueueIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public)['annotation-queues'][':queueId']['items']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public)['annotation-queues'][':queueId']['items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicAnnotationQueuesQueueIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public)['annotation-queues'][':queueId']['items']['$post']
      >,
    ) {
      return parseResponse(
        client.api.public['annotation-queues'][':queueId'].items.$post(args, options),
      )
    },
  })
}

export function usePostApiPublicAnnotationQueuesQueueIdItems<
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
                  (typeof client.api.public)['annotation-queues'][':queueId']['items']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public)['annotation-queues'][':queueId']['items']['$post']
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
  const mutationDefaults = getPostApiPublicAnnotationQueuesQueueIdItemsMutationOptions<
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

export function getApiPublicAnnotationQueuesQueueIdItemsItemIdQueryKey(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
  >,
) {
  return ['api', '/api/public/annotation-queues/:queueId/items/:itemId', args] as const
}

export function getApiPublicAnnotationQueuesQueueIdItemsItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicAnnotationQueuesQueueIdItemsItemIdQueryKey>
  >({
    queryKey: getApiPublicAnnotationQueuesQueueIdItemsItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public['annotation-queues'][':queueId'].items[':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicAnnotationQueuesQueueIdItemsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicAnnotationQueuesQueueIdItemsItemIdQueryKey>
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
      ...getApiPublicAnnotationQueuesQueueIdItemsItemIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicAnnotationQueuesQueueIdItemsItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicAnnotationQueuesQueueIdItemsItemIdQueryKey>
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
      ...getApiPublicAnnotationQueuesQueueIdItemsItemIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiPublicAnnotationQueuesQueueIdItemsItemIdMutationKey() {
  return ['api', '/api/public/annotation-queues/:queueId/items/:itemId', 'DELETE'] as const
}

export function getDeleteApiPublicAnnotationQueuesQueueIdItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicAnnotationQueuesQueueIdItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.public['annotation-queues'][':queueId'].items[':itemId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiPublicAnnotationQueuesQueueIdItemsItemId<
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
                  (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$delete']
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
  const mutationDefaults = getDeleteApiPublicAnnotationQueuesQueueIdItemsItemIdMutationOptions<
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

export function getPatchApiPublicAnnotationQueuesQueueIdItemsItemIdMutationKey() {
  return ['api', '/api/public/annotation-queues/:queueId/items/:itemId', 'PATCH'] as const
}

export function getPatchApiPublicAnnotationQueuesQueueIdItemsItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPublicAnnotationQueuesQueueIdItemsItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.public['annotation-queues'][':queueId'].items[':itemId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiPublicAnnotationQueuesQueueIdItemsItemId<
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
                  (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public)['annotation-queues'][':queueId']['items'][':itemId']['$patch']
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
  const mutationDefaults = getPatchApiPublicAnnotationQueuesQueueIdItemsItemIdMutationOptions<
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

export function getPostApiPublicAnnotationQueuesQueueIdAssignmentsMutationKey() {
  return ['api', '/api/public/annotation-queues/:queueId/assignments', 'POST'] as const
}

export function getPostApiPublicAnnotationQueuesQueueIdAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicAnnotationQueuesQueueIdAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.public['annotation-queues'][':queueId'].assignments.$post(args, options),
      )
    },
  })
}

export function usePostApiPublicAnnotationQueuesQueueIdAssignments<
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
                  (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$post']
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
  const mutationDefaults = getPostApiPublicAnnotationQueuesQueueIdAssignmentsMutationOptions<
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

export function getDeleteApiPublicAnnotationQueuesQueueIdAssignmentsMutationKey() {
  return ['api', '/api/public/annotation-queues/:queueId/assignments', 'DELETE'] as const
}

export function getDeleteApiPublicAnnotationQueuesQueueIdAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicAnnotationQueuesQueueIdAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.public['annotation-queues'][':queueId'].assignments.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiPublicAnnotationQueuesQueueIdAssignments<
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
                  (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public)['annotation-queues'][':queueId']['assignments']['$delete']
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
  const mutationDefaults = getDeleteApiPublicAnnotationQueuesQueueIdAssignmentsMutationOptions<
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

export function getApiPublicIntegrationsBlobStorageQueryKey() {
  return ['api', '/api/public/integrations/blob-storage'] as const
}

export function getApiPublicIntegrationsBlobStorageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicIntegrationsBlobStorageQueryKey>
  >({
    queryKey: getApiPublicIntegrationsBlobStorageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.integrations['blob-storage'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicIntegrationsBlobStorage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicIntegrationsBlobStorageQueryKey>
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
      ...getApiPublicIntegrationsBlobStorageQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicIntegrationsBlobStorage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicIntegrationsBlobStorageQueryKey>
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
      ...getApiPublicIntegrationsBlobStorageQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiPublicIntegrationsBlobStorageMutationKey() {
  return ['api', '/api/public/integrations/blob-storage', 'PUT'] as const
}

export function getPutApiPublicIntegrationsBlobStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.integrations)['blob-storage']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPublicIntegrationsBlobStorageMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.integrations)['blob-storage']['$put']>,
    ) {
      return parseResponse(client.api.public.integrations['blob-storage'].$put(args, options))
    },
  })
}

export function usePutApiPublicIntegrationsBlobStorage<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.integrations)['blob-storage']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPublicIntegrationsBlobStorageMutationOptions<
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

export function getApiPublicIntegrationsBlobStorageIdQueryKey(
  args: InferRequestType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>,
) {
  return ['api', '/api/public/integrations/blob-storage/:id', args] as const
}

export function getApiPublicIntegrationsBlobStorageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicIntegrationsBlobStorageIdQueryKey>
  >({
    queryKey: getApiPublicIntegrationsBlobStorageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.integrations['blob-storage'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicIntegrationsBlobStorageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicIntegrationsBlobStorageIdQueryKey>
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
      ...getApiPublicIntegrationsBlobStorageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicIntegrationsBlobStorageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.integrations)['blob-storage'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicIntegrationsBlobStorageIdQueryKey>
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
      ...getApiPublicIntegrationsBlobStorageIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiPublicIntegrationsBlobStorageIdMutationKey() {
  return ['api', '/api/public/integrations/blob-storage/:id', 'DELETE'] as const
}

export function getDeleteApiPublicIntegrationsBlobStorageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.integrations)['blob-storage'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.integrations)['blob-storage'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicIntegrationsBlobStorageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.integrations)['blob-storage'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.public.integrations['blob-storage'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiPublicIntegrationsBlobStorageId<
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
                  (typeof client.api.public.integrations)['blob-storage'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.integrations)['blob-storage'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicIntegrationsBlobStorageIdMutationOptions<
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

export function getApiPublicCommentsQueryKey(
  args: InferRequestType<typeof client.api.public.comments.$get>,
) {
  return ['api', '/api/public/comments', args] as const
}

export function getApiPublicCommentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.public.comments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicCommentsQueryKey>
  >({
    queryKey: getApiPublicCommentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.comments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPublicComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.comments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicComments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.comments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicCommentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicCommentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiPublicCommentsMutationKey() {
  return ['api', '/api/public/comments', 'POST'] as const
}

export function getPostApiPublicCommentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.public.comments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicCommentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.comments.$post>) {
      return parseResponse(client.api.public.comments.$post(args, options))
    },
  })
}

export function usePostApiPublicComments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.comments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.comments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicCommentsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicCommentsCommentIdQueryKey(
  args: InferRequestType<(typeof client.api.public.comments)[':commentId']['$get']>,
) {
  return ['api', '/api/public/comments/:commentId', args] as const
}

export function getApiPublicCommentsCommentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.comments)[':commentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.comments)[':commentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.comments)[':commentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicCommentsCommentIdQueryKey>
  >({
    queryKey: getApiPublicCommentsCommentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.comments[':commentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.comments)[':commentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.comments)[':commentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.comments)[':commentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicCommentsCommentIdQueryKey>
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
      ...getApiPublicCommentsCommentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicCommentsCommentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.comments)[':commentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.comments)[':commentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.comments)[':commentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicCommentsCommentIdQueryKey>
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
      ...getApiPublicCommentsCommentIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicDatasetItemsQueryKey(
  args: InferRequestType<(typeof client.api.public)['dataset-items']['$get']>,
) {
  return ['api', '/api/public/dataset-items', args] as const
}

export function getApiPublicDatasetItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['dataset-items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicDatasetItemsQueryKey>
  >({
    queryKey: getApiPublicDatasetItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public['dataset-items'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicDatasetItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['dataset-items']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicDatasetItemsQueryKey>
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
      ...getApiPublicDatasetItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicDatasetItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['dataset-items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicDatasetItemsQueryKey>
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
      ...getApiPublicDatasetItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiPublicDatasetItemsMutationKey() {
  return ['api', '/api/public/dataset-items', 'POST'] as const
}

export function getPostApiPublicDatasetItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public)['dataset-items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicDatasetItemsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.public)['dataset-items']['$post']>) {
      return parseResponse(client.api.public['dataset-items'].$post(args, options))
    },
  })
}

export function usePostApiPublicDatasetItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['dataset-items']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public)['dataset-items']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicDatasetItemsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicDatasetItemsIdQueryKey(
  args: InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$get']>,
) {
  return ['api', '/api/public/dataset-items/:id', args] as const
}

export function getApiPublicDatasetItemsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicDatasetItemsIdQueryKey>
  >({
    queryKey: getApiPublicDatasetItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public['dataset-items'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicDatasetItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicDatasetItemsIdQueryKey>
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
      ...getApiPublicDatasetItemsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicDatasetItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicDatasetItemsIdQueryKey>
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
      ...getApiPublicDatasetItemsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiPublicDatasetItemsIdMutationKey() {
  return ['api', '/api/public/dataset-items/:id', 'DELETE'] as const
}

export function getDeleteApiPublicDatasetItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicDatasetItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$delete']>,
    ) {
      return parseResponse(client.api.public['dataset-items'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiPublicDatasetItemsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['dataset-items'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public)['dataset-items'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicDatasetItemsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicV2DatasetsQueryKey(
  args: InferRequestType<typeof client.api.public.v2.datasets.$get>,
) {
  return ['api', '/api/public/v2/datasets', args] as const
}

export function getApiPublicV2DatasetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.datasets.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicV2DatasetsQueryKey>
  >({
    queryKey: getApiPublicV2DatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.v2.datasets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicV2Datasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.datasets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2DatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicV2DatasetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicV2Datasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.datasets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2DatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicV2DatasetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiPublicV2DatasetsMutationKey() {
  return ['api', '/api/public/v2/datasets', 'POST'] as const
}

export function getPostApiPublicV2DatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.public.v2.datasets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicV2DatasetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.v2.datasets.$post>) {
      return parseResponse(client.api.public.v2.datasets.$post(args, options))
    },
  })
}

export function usePostApiPublicV2Datasets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.datasets.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.v2.datasets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicV2DatasetsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicV2DatasetsDatasetNameQueryKey(
  args: InferRequestType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>,
) {
  return ['api', '/api/public/v2/datasets/:datasetName', args] as const
}

export function getApiPublicV2DatasetsDatasetNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicV2DatasetsDatasetNameQueryKey>
  >({
    queryKey: getApiPublicV2DatasetsDatasetNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.v2.datasets[':datasetName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicV2DatasetsDatasetName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2DatasetsDatasetNameQueryKey>
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
      ...getApiPublicV2DatasetsDatasetNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicV2DatasetsDatasetName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.v2.datasets)[':datasetName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2DatasetsDatasetNameQueryKey>
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
      ...getApiPublicV2DatasetsDatasetNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicV2EvaluationRulesQueryKey(
  args: InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$get']>,
) {
  return ['api', '/api/public/v2/evaluation-rules', args] as const
}

export function getApiPublicV2EvaluationRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicV2EvaluationRulesQueryKey>
  >({
    queryKey: getApiPublicV2EvaluationRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.v2['evaluation-rules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicV2EvaluationRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2EvaluationRulesQueryKey>
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
      ...getApiPublicV2EvaluationRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicV2EvaluationRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2EvaluationRulesQueryKey>
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
      ...getApiPublicV2EvaluationRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiPublicV2EvaluationRulesMutationKey() {
  return ['api', '/api/public/v2/evaluation-rules', 'POST'] as const
}

export function getPostApiPublicV2EvaluationRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicV2EvaluationRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$post']>,
    ) {
      return parseResponse(client.api.public.v2['evaluation-rules'].$post(args, options))
    },
  })
}

export function usePostApiPublicV2EvaluationRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.v2)['evaluation-rules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.v2)['evaluation-rules']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicV2EvaluationRulesMutationOptions<
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

export function getApiPublicV2EvaluationRulesEvaluationRuleIdQueryKey(
  args: InferRequestType<
    (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
  >,
) {
  return ['api', '/api/public/v2/evaluation-rules/:evaluationRuleId', args] as const
}

export function getApiPublicV2EvaluationRulesEvaluationRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicV2EvaluationRulesEvaluationRuleIdQueryKey>
  >({
    queryKey: getApiPublicV2EvaluationRulesEvaluationRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.v2['evaluation-rules'][':evaluationRuleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicV2EvaluationRulesEvaluationRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2EvaluationRulesEvaluationRuleIdQueryKey>
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
      ...getApiPublicV2EvaluationRulesEvaluationRuleIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicV2EvaluationRulesEvaluationRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2EvaluationRulesEvaluationRuleIdQueryKey>
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
      ...getApiPublicV2EvaluationRulesEvaluationRuleIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiPublicV2EvaluationRulesEvaluationRuleIdMutationKey() {
  return ['api', '/api/public/v2/evaluation-rules/:evaluationRuleId', 'DELETE'] as const
}

export function getDeleteApiPublicV2EvaluationRulesEvaluationRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicV2EvaluationRulesEvaluationRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.public.v2['evaluation-rules'][':evaluationRuleId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiPublicV2EvaluationRulesEvaluationRuleId<
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
                  (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$delete']
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
  const mutationDefaults = getDeleteApiPublicV2EvaluationRulesEvaluationRuleIdMutationOptions<
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

export function getPatchApiPublicV2EvaluationRulesEvaluationRuleIdMutationKey() {
  return ['api', '/api/public/v2/evaluation-rules/:evaluationRuleId', 'PATCH'] as const
}

export function getPatchApiPublicV2EvaluationRulesEvaluationRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPublicV2EvaluationRulesEvaluationRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.public.v2['evaluation-rules'][':evaluationRuleId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiPublicV2EvaluationRulesEvaluationRuleId<
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
                  (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.v2)['evaluation-rules'][':evaluationRuleId']['$patch']
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
  const mutationDefaults = getPatchApiPublicV2EvaluationRulesEvaluationRuleIdMutationOptions<
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

export function getApiPublicV2EvaluatorsQueryKey(
  args: InferRequestType<typeof client.api.public.v2.evaluators.$get>,
) {
  return ['api', '/api/public/v2/evaluators', args] as const
}

export function getApiPublicV2EvaluatorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.evaluators.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicV2EvaluatorsQueryKey>
  >({
    queryKey: getApiPublicV2EvaluatorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.v2.evaluators.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicV2Evaluators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.evaluators.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2EvaluatorsQueryKey>
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
      ...getApiPublicV2EvaluatorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicV2Evaluators<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.evaluators.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2EvaluatorsQueryKey>
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
      ...getApiPublicV2EvaluatorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiPublicV2EvaluatorsMutationKey() {
  return ['api', '/api/public/v2/evaluators', 'POST'] as const
}

export function getPostApiPublicV2EvaluatorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.public.v2.evaluators.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicV2EvaluatorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.v2.evaluators.$post>) {
      return parseResponse(client.api.public.v2.evaluators.$post(args, options))
    },
  })
}

export function usePostApiPublicV2Evaluators<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.evaluators.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.v2.evaluators.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicV2EvaluatorsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicV2EvaluatorsEvaluatorIdQueryKey(
  args: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>,
) {
  return ['api', '/api/public/v2/evaluators/:evaluatorId', args] as const
}

export function getApiPublicV2EvaluatorsEvaluatorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicV2EvaluatorsEvaluatorIdQueryKey>
  >({
    queryKey: getApiPublicV2EvaluatorsEvaluatorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.v2.evaluators[':evaluatorId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicV2EvaluatorsEvaluatorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2EvaluatorsEvaluatorIdQueryKey>
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
      ...getApiPublicV2EvaluatorsEvaluatorIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicV2EvaluatorsEvaluatorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2EvaluatorsEvaluatorIdQueryKey>
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
      ...getApiPublicV2EvaluatorsEvaluatorIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiPublicV2EvaluatorsEvaluatorIdMutationKey() {
  return ['api', '/api/public/v2/evaluators/:evaluatorId', 'DELETE'] as const
}

export function getDeleteApiPublicV2EvaluatorsEvaluatorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicV2EvaluatorsEvaluatorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$delete']>,
    ) {
      return parseResponse(client.api.public.v2.evaluators[':evaluatorId'].$delete(args, options))
    },
  })
}

export function useDeleteApiPublicV2EvaluatorsEvaluatorId<
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
                ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicV2EvaluatorsEvaluatorIdMutationOptions<
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

export function getPatchApiPublicV2EvaluatorsEvaluatorIdMutationKey() {
  return ['api', '/api/public/v2/evaluators/:evaluatorId', 'PATCH'] as const
}

export function getPatchApiPublicV2EvaluatorsEvaluatorIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPublicV2EvaluatorsEvaluatorIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$patch']>,
    ) {
      return parseResponse(client.api.public.v2.evaluators[':evaluatorId'].$patch(args, options))
    },
  })
}

export function usePatchApiPublicV2EvaluatorsEvaluatorId<
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
                ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiPublicV2EvaluatorsEvaluatorIdMutationOptions<
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

export function getApiPublicV2EvaluatorsEvaluatorIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
  >,
) {
  return ['api', '/api/public/v2/evaluators/:evaluatorId/versions', args] as const
}

export function getApiPublicV2EvaluatorsEvaluatorIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicV2EvaluatorsEvaluatorIdVersionsQueryKey>
  >({
    queryKey: getApiPublicV2EvaluatorsEvaluatorIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.v2.evaluators[':evaluatorId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicV2EvaluatorsEvaluatorIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2EvaluatorsEvaluatorIdVersionsQueryKey>
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
      ...getApiPublicV2EvaluatorsEvaluatorIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicV2EvaluatorsEvaluatorIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.public.v2.evaluators)[':evaluatorId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2EvaluatorsEvaluatorIdVersionsQueryKey>
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
      ...getApiPublicV2EvaluatorsEvaluatorIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicExperimentsQueryKey(
  args: InferRequestType<typeof client.api.public.experiments.$get>,
) {
  return ['api', '/api/public/experiments', args] as const
}

export function getApiPublicExperimentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.experiments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.experiments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.experiments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicExperimentsQueryKey>
  >({
    queryKey: getApiPublicExperimentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.experiments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicExperiments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.experiments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.experiments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.experiments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicExperimentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicExperimentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicExperiments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.experiments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.experiments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.experiments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicExperimentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicExperimentsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPublicExperimentItemsQueryKey(
  args: InferRequestType<(typeof client.api.public)['experiment-items']['$get']>,
) {
  return ['api', '/api/public/experiment-items', args] as const
}

export function getApiPublicExperimentItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['experiment-items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['experiment-items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['experiment-items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicExperimentItemsQueryKey>
  >({
    queryKey: getApiPublicExperimentItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public['experiment-items'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicExperimentItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['experiment-items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['experiment-items']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['experiment-items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicExperimentItemsQueryKey>
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
      ...getApiPublicExperimentItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicExperimentItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['experiment-items']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['experiment-items']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['experiment-items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicExperimentItemsQueryKey>
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
      ...getApiPublicExperimentItemsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiPublicFeedbackMutationKey() {
  return ['api', '/api/public/feedback', 'POST'] as const
}

export function getPostApiPublicFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.feedback.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.public.feedback.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicFeedbackMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.feedback.$post>) {
      return parseResponse(client.api.public.feedback.$post(args, options))
    },
  })
}

export function usePostApiPublicFeedback<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.feedback.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.feedback.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicFeedbackMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicHealthQueryKey() {
  return ['api', '/api/public/health'] as const
}

export function getApiPublicHealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.health.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicHealthQueryKey>
  >({
    queryKey: getApiPublicHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.health.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicHealth<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.health.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPublicLlmConnectionsQueryKey(
  args: InferRequestType<(typeof client.api.public)['llm-connections']['$get']>,
) {
  return ['api', '/api/public/llm-connections', args] as const
}

export function getApiPublicLlmConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['llm-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicLlmConnectionsQueryKey>
  >({
    queryKey: getApiPublicLlmConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public['llm-connections'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicLlmConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['llm-connections']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicLlmConnectionsQueryKey>
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
      ...getApiPublicLlmConnectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicLlmConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['llm-connections']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicLlmConnectionsQueryKey>
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
      ...getApiPublicLlmConnectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiPublicLlmConnectionsMutationKey() {
  return ['api', '/api/public/llm-connections', 'PUT'] as const
}

export function getPutApiPublicLlmConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public)['llm-connections']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPublicLlmConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public)['llm-connections']['$put']>,
    ) {
      return parseResponse(client.api.public['llm-connections'].$put(args, options))
    },
  })
}

export function usePutApiPublicLlmConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['llm-connections']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public)['llm-connections']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPublicLlmConnectionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiPublicLlmConnectionsIdMutationKey() {
  return ['api', '/api/public/llm-connections/:id', 'DELETE'] as const
}

export function getDeleteApiPublicLlmConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['llm-connections'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public)['llm-connections'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicLlmConnectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public)['llm-connections'][':id']['$delete']>,
    ) {
      return parseResponse(client.api.public['llm-connections'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiPublicLlmConnectionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['llm-connections'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public)['llm-connections'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicLlmConnectionsIdMutationOptions<
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

export function getApiPublicOrganizationsLlmConnectionsQueryKey(
  args: InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$get']>,
) {
  return ['api', '/api/public/organizations/llm-connections', args] as const
}

export function getApiPublicOrganizationsLlmConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.organizations)['llm-connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.organizations)['llm-connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicOrganizationsLlmConnectionsQueryKey>
  >({
    queryKey: getApiPublicOrganizationsLlmConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.organizations['llm-connections'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicOrganizationsLlmConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.organizations)['llm-connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.organizations)['llm-connections']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicOrganizationsLlmConnectionsQueryKey>
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
      ...getApiPublicOrganizationsLlmConnectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicOrganizationsLlmConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.organizations)['llm-connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.organizations)['llm-connections']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicOrganizationsLlmConnectionsQueryKey>
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
      ...getApiPublicOrganizationsLlmConnectionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiPublicOrganizationsLlmConnectionsMutationKey() {
  return ['api', '/api/public/organizations/llm-connections', 'PUT'] as const
}

export function getPutApiPublicOrganizationsLlmConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.organizations)['llm-connections']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPublicOrganizationsLlmConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$put']>,
    ) {
      return parseResponse(client.api.public.organizations['llm-connections'].$put(args, options))
    },
  })
}

export function usePutApiPublicOrganizationsLlmConnections<
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
                ReturnType<(typeof client.api.public.organizations)['llm-connections']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.organizations)['llm-connections']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPublicOrganizationsLlmConnectionsMutationOptions<
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

export function getDeleteApiPublicOrganizationsLlmConnectionsIdMutationKey() {
  return ['api', '/api/public/organizations/llm-connections/:id', 'DELETE'] as const
}

export function getDeleteApiPublicOrganizationsLlmConnectionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.organizations)['llm-connections'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.organizations)['llm-connections'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicOrganizationsLlmConnectionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.organizations)['llm-connections'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.public.organizations['llm-connections'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiPublicOrganizationsLlmConnectionsId<
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
                  (typeof client.api.public.organizations)['llm-connections'][':id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.organizations)['llm-connections'][':id']['$delete']
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
  const mutationDefaults = getDeleteApiPublicOrganizationsLlmConnectionsIdMutationOptions<
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

export function getApiPublicMediaMediaIdQueryKey(
  args: InferRequestType<(typeof client.api.public.media)[':mediaId']['$get']>,
) {
  return ['api', '/api/public/media/:mediaId', args] as const
}

export function getApiPublicMediaMediaIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.media)[':mediaId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicMediaMediaIdQueryKey>
  >({
    queryKey: getApiPublicMediaMediaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.media[':mediaId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicMediaMediaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.media)[':mediaId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicMediaMediaIdQueryKey>
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
      ...getApiPublicMediaMediaIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicMediaMediaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.media)[':mediaId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicMediaMediaIdQueryKey>
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
      ...getApiPublicMediaMediaIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchApiPublicMediaMediaIdMutationKey() {
  return ['api', '/api/public/media/:mediaId', 'PATCH'] as const
}

export function getPatchApiPublicMediaMediaIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.public.media)[':mediaId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPublicMediaMediaIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.media)[':mediaId']['$patch']>,
    ) {
      return parseResponse(client.api.public.media[':mediaId'].$patch(args, options))
    },
  })
}

export function usePatchApiPublicMediaMediaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.public.media)[':mediaId']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.public.media)[':mediaId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiPublicMediaMediaIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiPublicMediaMutationKey() {
  return ['api', '/api/public/media', 'POST'] as const
}

export function getPostApiPublicMediaMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.media.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.public.media.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.media.$post>) {
      return parseResponse(client.api.public.media.$post(args, options))
    },
  })
}

export function usePostApiPublicMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.media.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.media.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicMediaMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicV2MetricsQueryKey(
  args: InferRequestType<typeof client.api.public.v2.metrics.$get>,
) {
  return ['api', '/api/public/v2/metrics', args] as const
}

export function getApiPublicV2MetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.metrics.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.metrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicV2MetricsQueryKey>
  >({
    queryKey: getApiPublicV2MetricsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.v2.metrics.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPublicV2Metrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.metrics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.metrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2MetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicV2MetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicV2Metrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.metrics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.metrics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2MetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicV2MetricsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPublicModelsQueryKey(
  args: InferRequestType<typeof client.api.public.models.$get>,
) {
  return ['api', '/api/public/models', args] as const
}

export function getApiPublicModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.public.models.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicModelsQueryKey>
  >({
    queryKey: getApiPublicModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.models.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPublicModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.models.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.models.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiPublicModelsMutationKey() {
  return ['api', '/api/public/models', 'POST'] as const
}

export function getPostApiPublicModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.public.models.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicModelsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.models.$post>) {
      return parseResponse(client.api.public.models.$post(args, options))
    },
  })
}

export function usePostApiPublicModels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.models.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.models.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicModelsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicModelsIdQueryKey(
  args: InferRequestType<(typeof client.api.public.models)[':id']['$get']>,
) {
  return ['api', '/api/public/models/:id', args] as const
}

export function getApiPublicModelsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.public.models)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.models)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.public.models)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicModelsIdQueryKey>
  >({
    queryKey: getApiPublicModelsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.models[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicModelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.public.models)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.models)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.models)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicModelsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicModelsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicModelsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.public.models)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.models)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.models)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicModelsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicModelsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutApiPublicModelsIdMutationKey() {
  return ['api', '/api/public/models/:id', 'PUT'] as const
}

export function getPutApiPublicModelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.public.models)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.models)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPublicModelsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.public.models)[':id']['$put']>) {
      return parseResponse(client.api.public.models[':id'].$put(args, options))
    },
  })
}

export function usePutApiPublicModelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.models)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.models)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPublicModelsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiPublicModelsIdMutationKey() {
  return ['api', '/api/public/models/:id', 'DELETE'] as const
}

export function getDeleteApiPublicModelsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.models)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.public.models)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicModelsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.public.models)[':id']['$delete']>) {
      return parseResponse(client.api.public.models[':id'].$delete(args, options))
    },
  })
}

export function useDeleteApiPublicModelsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.public.models)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.public.models)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicModelsIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicV2ObservationsQueryKey(
  args: InferRequestType<typeof client.api.public.v2.observations.$get>,
) {
  return ['api', '/api/public/v2/observations', args] as const
}

export function getApiPublicV2ObservationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.observations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.observations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.observations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicV2ObservationsQueryKey>
  >({
    queryKey: getApiPublicV2ObservationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.v2.observations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicV2Observations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.observations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.observations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.observations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2ObservationsQueryKey>
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
      ...getApiPublicV2ObservationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicV2Observations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.observations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.observations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.observations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2ObservationsQueryKey>
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
      ...getApiPublicV2ObservationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiPublicOtelV1TracesMutationKey() {
  return ['api', '/api/public/otel/v1/traces', 'POST'] as const
}

export function getPostApiPublicOtelV1TracesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.otel.v1.traces.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.public.otel.v1.traces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicOtelV1TracesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.otel.v1.traces.$post>) {
      return parseResponse(client.api.public.otel.v1.traces.$post(args, options))
    },
  })
}

export function usePostApiPublicOtelV1Traces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.otel.v1.traces.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.otel.v1.traces.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicOtelV1TracesMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicOrganizationsMembershipsQueryKey() {
  return ['api', '/api/public/organizations/memberships'] as const
}

export function getApiPublicOrganizationsMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.public.organizations.memberships.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.memberships.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicOrganizationsMembershipsQueryKey>
  >({
    queryKey: getApiPublicOrganizationsMembershipsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.organizations.memberships.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicOrganizationsMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.public.organizations.memberships.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.organizations.memberships.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicOrganizationsMembershipsQueryKey>
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
      ...getApiPublicOrganizationsMembershipsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicOrganizationsMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.public.organizations.memberships.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.organizations.memberships.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicOrganizationsMembershipsQueryKey>
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
      ...getApiPublicOrganizationsMembershipsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiPublicOrganizationsMembershipsMutationKey() {
  return ['api', '/api/public/organizations/memberships', 'PUT'] as const
}

export function getPutApiPublicOrganizationsMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.memberships.$put>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.public.organizations.memberships.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPublicOrganizationsMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.public.organizations.memberships.$put>,
    ) {
      return parseResponse(client.api.public.organizations.memberships.$put(args, options))
    },
  })
}

export function usePutApiPublicOrganizationsMemberships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.organizations.memberships.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.organizations.memberships.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPublicOrganizationsMembershipsMutationOptions<
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

export function getDeleteApiPublicOrganizationsMembershipsMutationKey() {
  return ['api', '/api/public/organizations/memberships', 'DELETE'] as const
}

export function getDeleteApiPublicOrganizationsMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.memberships.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.public.organizations.memberships.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicOrganizationsMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.public.organizations.memberships.$delete>,
    ) {
      return parseResponse(client.api.public.organizations.memberships.$delete(args, options))
    },
  })
}

export function useDeleteApiPublicOrganizationsMemberships<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.organizations.memberships.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.organizations.memberships.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicOrganizationsMembershipsMutationOptions<
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

export function getApiPublicProjectsProjectIdMembershipsQueryKey(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>,
) {
  return ['api', '/api/public/projects/:projectId/memberships', args] as const
}

export function getApiPublicProjectsProjectIdMembershipsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicProjectsProjectIdMembershipsQueryKey>
  >({
    queryKey: getApiPublicProjectsProjectIdMembershipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.projects[':projectId'].memberships.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicProjectsProjectIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicProjectsProjectIdMembershipsQueryKey>
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
      ...getApiPublicProjectsProjectIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicProjectsProjectIdMemberships<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicProjectsProjectIdMembershipsQueryKey>
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
      ...getApiPublicProjectsProjectIdMembershipsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApiPublicProjectsProjectIdMembershipsMutationKey() {
  return ['api', '/api/public/projects/:projectId/memberships', 'PUT'] as const
}

export function getPutApiPublicProjectsProjectIdMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPublicProjectsProjectIdMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.projects)[':projectId']['memberships']['$put']
      >,
    ) {
      return parseResponse(client.api.public.projects[':projectId'].memberships.$put(args, options))
    },
  })
}

export function usePutApiPublicProjectsProjectIdMemberships<
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
                ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPublicProjectsProjectIdMembershipsMutationOptions<
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

export function getDeleteApiPublicProjectsProjectIdMembershipsMutationKey() {
  return ['api', '/api/public/projects/:projectId/memberships', 'DELETE'] as const
}

export function getDeleteApiPublicProjectsProjectIdMembershipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.projects)[':projectId']['memberships']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.projects)[':projectId']['memberships']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicProjectsProjectIdMembershipsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.projects)[':projectId']['memberships']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.public.projects[':projectId'].memberships.$delete(args, options),
      )
    },
  })
}

export function useDeleteApiPublicProjectsProjectIdMemberships<
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
                  (typeof client.api.public.projects)[':projectId']['memberships']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.projects)[':projectId']['memberships']['$delete']
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
  const mutationDefaults = getDeleteApiPublicProjectsProjectIdMembershipsMutationOptions<
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

export function getApiPublicOrganizationsProjectsQueryKey() {
  return ['api', '/api/public/organizations/projects'] as const
}

export function getApiPublicOrganizationsProjectsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.public.organizations.projects.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.projects.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicOrganizationsProjectsQueryKey>
  >({
    queryKey: getApiPublicOrganizationsProjectsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.organizations.projects.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicOrganizationsProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.public.organizations.projects.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.organizations.projects.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicOrganizationsProjectsQueryKey>
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
      ...getApiPublicOrganizationsProjectsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicOrganizationsProjects<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.public.organizations.projects.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.organizations.projects.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicOrganizationsProjectsQueryKey>
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
      ...getApiPublicOrganizationsProjectsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicOrganizationsApiKeysQueryKey() {
  return ['api', '/api/public/organizations/apiKeys'] as const
}

export function getApiPublicOrganizationsApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.organizations.apiKeys.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.organizations.apiKeys.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicOrganizationsApiKeysQueryKey>
  >({
    queryKey: getApiPublicOrganizationsApiKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.organizations.apiKeys.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicOrganizationsApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.organizations.apiKeys.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.organizations.apiKeys.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicOrganizationsApiKeysQueryKey>
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
      ...getApiPublicOrganizationsApiKeysQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicOrganizationsApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.organizations.apiKeys.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.organizations.apiKeys.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicOrganizationsApiKeysQueryKey>
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
      ...getApiPublicOrganizationsApiKeysQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicProjectsQueryKey() {
  return ['api', '/api/public/projects'] as const
}

export function getApiPublicProjectsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicProjectsQueryKey>
  >({
    queryKey: getApiPublicProjectsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.projects.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicProjectsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicProjects<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicProjectsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicProjectsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiPublicProjectsMutationKey() {
  return ['api', '/api/public/projects', 'POST'] as const
}

export function getPostApiPublicProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.public.projects.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicProjectsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.projects.$post>) {
      return parseResponse(client.api.public.projects.$post(args, options))
    },
  })
}

export function usePostApiPublicProjects<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.projects.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.projects.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicProjectsMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiPublicProjectsProjectIdMutationKey() {
  return ['api', '/api/public/projects/:projectId', 'PUT'] as const
}

export function getPutApiPublicProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.projects)[':projectId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.projects)[':projectId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPublicProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.projects)[':projectId']['$put']>,
    ) {
      return parseResponse(client.api.public.projects[':projectId'].$put(args, options))
    },
  })
}

export function usePutApiPublicProjectsProjectId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.projects)[':projectId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.projects)[':projectId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApiPublicProjectsProjectIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiPublicProjectsProjectIdMutationKey() {
  return ['api', '/api/public/projects/:projectId', 'DELETE'] as const
}

export function getDeleteApiPublicProjectsProjectIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.projects)[':projectId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.projects)[':projectId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicProjectsProjectIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.projects)[':projectId']['$delete']>,
    ) {
      return parseResponse(client.api.public.projects[':projectId'].$delete(args, options))
    },
  })
}

export function useDeleteApiPublicProjectsProjectId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.projects)[':projectId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.projects)[':projectId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicProjectsProjectIdMutationOptions<
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

export function getApiPublicProjectsProjectIdApiKeysQueryKey(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>,
) {
  return ['api', '/api/public/projects/:projectId/apiKeys', args] as const
}

export function getApiPublicProjectsProjectIdApiKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicProjectsProjectIdApiKeysQueryKey>
  >({
    queryKey: getApiPublicProjectsProjectIdApiKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.projects[':projectId'].apiKeys.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicProjectsProjectIdApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicProjectsProjectIdApiKeysQueryKey>
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
      ...getApiPublicProjectsProjectIdApiKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicProjectsProjectIdApiKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicProjectsProjectIdApiKeysQueryKey>
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
      ...getApiPublicProjectsProjectIdApiKeysQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiPublicProjectsProjectIdApiKeysMutationKey() {
  return ['api', '/api/public/projects/:projectId/apiKeys', 'POST'] as const
}

export function getPostApiPublicProjectsProjectIdApiKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicProjectsProjectIdApiKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$post']>,
    ) {
      return parseResponse(client.api.public.projects[':projectId'].apiKeys.$post(args, options))
    },
  })
}

export function usePostApiPublicProjectsProjectIdApiKeys<
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
                ReturnType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.projects)[':projectId']['apiKeys']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicProjectsProjectIdApiKeysMutationOptions<
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

export function getDeleteApiPublicProjectsProjectIdApiKeysApiKeyIdMutationKey() {
  return ['api', '/api/public/projects/:projectId/apiKeys/:apiKeyId', 'DELETE'] as const
}

export function getDeleteApiPublicProjectsProjectIdApiKeysApiKeyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.projects)[':projectId']['apiKeys'][':apiKeyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public.projects)[':projectId']['apiKeys'][':apiKeyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicProjectsProjectIdApiKeysApiKeyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.projects)[':projectId']['apiKeys'][':apiKeyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.public.projects[':projectId'].apiKeys[':apiKeyId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiPublicProjectsProjectIdApiKeysApiKeyId<
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
                  (typeof client.api.public.projects)[':projectId']['apiKeys'][':apiKeyId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.projects)[':projectId']['apiKeys'][':apiKeyId']['$delete']
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
  const mutationDefaults = getDeleteApiPublicProjectsProjectIdApiKeysApiKeyIdMutationOptions<
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

export function getPatchApiPublicV2PromptsNameVersionsVersionMutationKey() {
  return ['api', '/api/public/v2/prompts/:name/versions/:version', 'PATCH'] as const
}

export function getPatchApiPublicV2PromptsNameVersionsVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.v2.prompts)[':name']['versions'][':version']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public.v2.prompts)[':name']['versions'][':version']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPublicV2PromptsNameVersionsVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.v2.prompts)[':name']['versions'][':version']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.public.v2.prompts[':name'].versions[':version'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiPublicV2PromptsNameVersionsVersion<
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
                  (typeof client.api.public.v2.prompts)[':name']['versions'][':version']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.v2.prompts)[':name']['versions'][':version']['$patch']
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
  const mutationDefaults = getPatchApiPublicV2PromptsNameVersionsVersionMutationOptions<
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

export function getApiPublicV2PromptsPromptNameQueryKey(
  args: InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>,
) {
  return ['api', '/api/public/v2/prompts/:promptName', args] as const
}

export function getApiPublicV2PromptsPromptNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicV2PromptsPromptNameQueryKey>
  >({
    queryKey: getApiPublicV2PromptsPromptNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.v2.prompts[':promptName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicV2PromptsPromptName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2PromptsPromptNameQueryKey>
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
      ...getApiPublicV2PromptsPromptNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicV2PromptsPromptName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2PromptsPromptNameQueryKey>
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
      ...getApiPublicV2PromptsPromptNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiPublicV2PromptsPromptNameMutationKey() {
  return ['api', '/api/public/v2/prompts/:promptName', 'DELETE'] as const
}

export function getDeleteApiPublicV2PromptsPromptNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicV2PromptsPromptNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$delete']>,
    ) {
      return parseResponse(client.api.public.v2.prompts[':promptName'].$delete(args, options))
    },
  })
}

export function useDeleteApiPublicV2PromptsPromptName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.public.v2.prompts)[':promptName']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.public.v2.prompts)[':promptName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicV2PromptsPromptNameMutationOptions<
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

export function getApiPublicV2PromptsQueryKey(
  args: InferRequestType<typeof client.api.public.v2.prompts.$get>,
) {
  return ['api', '/api/public/v2/prompts', args] as const
}

export function getApiPublicV2PromptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.prompts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicV2PromptsQueryKey>
  >({
    queryKey: getApiPublicV2PromptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.v2.prompts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPublicV2Prompts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.prompts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2PromptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicV2PromptsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicV2Prompts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v2.prompts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV2PromptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicV2PromptsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiPublicV2PromptsMutationKey() {
  return ['api', '/api/public/v2/prompts', 'POST'] as const
}

export function getPostApiPublicV2PromptsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.public.v2.prompts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicV2PromptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.v2.prompts.$post>) {
      return parseResponse(client.api.public.v2.prompts.$post(args, options))
    },
  })
}

export function usePostApiPublicV2Prompts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v2.prompts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.v2.prompts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicV2PromptsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicScimServiceProviderConfigQueryKey() {
  return ['api', '/api/public/scim/ServiceProviderConfig'] as const
}

export function getApiPublicScimServiceProviderConfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.public.scim.ServiceProviderConfig.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.scim.ServiceProviderConfig.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicScimServiceProviderConfigQueryKey>
  >({
    queryKey: getApiPublicScimServiceProviderConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.scim.ServiceProviderConfig.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicScimServiceProviderConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.public.scim.ServiceProviderConfig.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.scim.ServiceProviderConfig.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScimServiceProviderConfigQueryKey>
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
      ...getApiPublicScimServiceProviderConfigQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicScimServiceProviderConfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.public.scim.ServiceProviderConfig.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.scim.ServiceProviderConfig.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScimServiceProviderConfigQueryKey>
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
      ...getApiPublicScimServiceProviderConfigQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicScimResourceTypesQueryKey() {
  return ['api', '/api/public/scim/ResourceTypes'] as const
}

export function getApiPublicScimResourceTypesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.ResourceTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.ResourceTypes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicScimResourceTypesQueryKey>
  >({
    queryKey: getApiPublicScimResourceTypesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.scim.ResourceTypes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicScimResourceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.ResourceTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.scim.ResourceTypes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScimResourceTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicScimResourceTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicScimResourceTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.ResourceTypes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.scim.ResourceTypes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScimResourceTypesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicScimResourceTypesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPublicScimSchemasQueryKey() {
  return ['api', '/api/public/scim/Schemas'] as const
}

export function getApiPublicScimSchemasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Schemas.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Schemas.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicScimSchemasQueryKey>
  >({
    queryKey: getApiPublicScimSchemasQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.scim.Schemas.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicScimSchemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Schemas.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Schemas.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScimSchemasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicScimSchemasQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicScimSchemas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Schemas.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Schemas.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScimSchemasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicScimSchemasQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPublicScimUsersQueryKey(
  args: InferRequestType<typeof client.api.public.scim.Users.$get>,
) {
  return ['api', '/api/public/scim/Users', args] as const
}

export function getApiPublicScimUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.scim.Users.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicScimUsersQueryKey>
  >({
    queryKey: getApiPublicScimUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.scim.Users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPublicScimUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.scim.Users.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScimUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicScimUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicScimUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.scim.Users.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScimUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicScimUsersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiPublicScimUsersMutationKey() {
  return ['api', '/api/public/scim/Users', 'POST'] as const
}

export function getPostApiPublicScimUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.public.scim.Users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicScimUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.scim.Users.$post>) {
      return parseResponse(client.api.public.scim.Users.$post(args, options))
    },
  })
}

export function usePostApiPublicScimUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scim.Users.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.scim.Users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicScimUsersMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicScimUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$get']>,
) {
  return ['api', '/api/public/scim/Users/:userId', args] as const
}

export function getApiPublicScimUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicScimUsersUserIdQueryKey>
  >({
    queryKey: getApiPublicScimUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.scim.Users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicScimUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScimUsersUserIdQueryKey>
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
      ...getApiPublicScimUsersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicScimUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScimUsersUserIdQueryKey>
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
      ...getApiPublicScimUsersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiPublicScimUsersUserIdMutationKey() {
  return ['api', '/api/public/scim/Users/:userId', 'DELETE'] as const
}

export function getDeleteApiPublicScimUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicScimUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$delete']>,
    ) {
      return parseResponse(client.api.public.scim.Users[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteApiPublicScimUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.scim.Users)[':userId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.scim.Users)[':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicScimUsersUserIdMutationOptions<
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

export function getApiPublicScoreConfigsQueryKey(
  args: InferRequestType<(typeof client.api.public)['score-configs']['$get']>,
) {
  return ['api', '/api/public/score-configs', args] as const
}

export function getApiPublicScoreConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.public)['score-configs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['score-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['score-configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicScoreConfigsQueryKey>
  >({
    queryKey: getApiPublicScoreConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public['score-configs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicScoreConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.public)['score-configs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['score-configs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['score-configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScoreConfigsQueryKey>
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
      ...getApiPublicScoreConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicScoreConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.public)['score-configs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['score-configs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['score-configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScoreConfigsQueryKey>
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
      ...getApiPublicScoreConfigsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiPublicScoreConfigsMutationKey() {
  return ['api', '/api/public/score-configs', 'POST'] as const
}

export function getPostApiPublicScoreConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['score-configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public)['score-configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicScoreConfigsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.public)['score-configs']['$post']>) {
      return parseResponse(client.api.public['score-configs'].$post(args, options))
    },
  })
}

export function usePostApiPublicScoreConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['score-configs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public)['score-configs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicScoreConfigsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicScoreConfigsConfigIdQueryKey(
  args: InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$get']>,
) {
  return ['api', '/api/public/score-configs/:configId', args] as const
}

export function getApiPublicScoreConfigsConfigIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['score-configs'][':configId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['score-configs'][':configId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicScoreConfigsConfigIdQueryKey>
  >({
    queryKey: getApiPublicScoreConfigsConfigIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public['score-configs'][':configId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicScoreConfigsConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['score-configs'][':configId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['score-configs'][':configId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScoreConfigsConfigIdQueryKey>
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
      ...getApiPublicScoreConfigsConfigIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicScoreConfigsConfigId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public)['score-configs'][':configId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public)['score-configs'][':configId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicScoreConfigsConfigIdQueryKey>
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
      ...getApiPublicScoreConfigsConfigIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchApiPublicScoreConfigsConfigIdMutationKey() {
  return ['api', '/api/public/score-configs/:configId', 'PATCH'] as const
}

export function getPatchApiPublicScoreConfigsConfigIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public)['score-configs'][':configId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPublicScoreConfigsConfigIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$patch']>,
    ) {
      return parseResponse(client.api.public['score-configs'][':configId'].$patch(args, options))
    },
  })
}

export function usePatchApiPublicScoreConfigsConfigId<
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
                ReturnType<(typeof client.api.public)['score-configs'][':configId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public)['score-configs'][':configId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiPublicScoreConfigsConfigIdMutationOptions<
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

export function getPostApiPublicScoresMutationKey() {
  return ['api', '/api/public/scores', 'POST'] as const
}

export function getPostApiPublicScoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scores.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.public.scores.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicScoresMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.scores.$post>) {
      return parseResponse(client.api.public.scores.$post(args, options))
    },
  })
}

export function usePostApiPublicScores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.scores.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.scores.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicScoresMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiPublicScoresScoreIdMutationKey() {
  return ['api', '/api/public/scores/:scoreId', 'DELETE'] as const
}

export function getDeleteApiPublicScoresScoreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.public.scores)[':scoreId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.public.scores)[':scoreId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicScoresScoreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.scores)[':scoreId']['$delete']>,
    ) {
      return parseResponse(client.api.public.scores[':scoreId'].$delete(args, options))
    },
  })
}

export function useDeleteApiPublicScoresScoreId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.public.scores)[':scoreId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.public.scores)[':scoreId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicScoresScoreIdMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicV3ScoresQueryKey(
  args: InferRequestType<typeof client.api.public.v3.scores.$get>,
) {
  return ['api', '/api/public/v3/scores', args] as const
}

export function getApiPublicV3ScoresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v3.scores.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.public.v3.scores.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v3.scores.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicV3ScoresQueryKey>
  >({
    queryKey: getApiPublicV3ScoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.v3.scores.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPublicV3Scores<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v3.scores.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v3.scores.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v3.scores.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV3ScoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicV3ScoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicV3Scores<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v3.scores.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.v3.scores.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.v3.scores.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicV3ScoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicV3ScoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApiPublicSkillsQueryKey(
  args: InferRequestType<typeof client.api.public.skills.$get>,
) {
  return ['api', '/api/public/skills', args] as const
}

export function getApiPublicSkillsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.public.skills.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicSkillsQueryKey>
  >({
    queryKey: getApiPublicSkillsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.skills.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useApiPublicSkills<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.skills.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicSkillsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiPublicSkillsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiPublicSkills<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.skills.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicSkillsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiPublicSkillsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostApiPublicSkillsMutationKey() {
  return ['api', '/api/public/skills', 'POST'] as const
}

export function getPostApiPublicSkillsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.public.skills.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicSkillsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.skills.$post>) {
      return parseResponse(client.api.public.skills.$post(args, options))
    },
  })
}

export function usePostApiPublicSkills<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.skills.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicSkillsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicSkillsSkillNameQueryKey(
  args: InferRequestType<(typeof client.api.public.skills)[':skillName']['$get']>,
) {
  return ['api', '/api/public/skills/:skillName', args] as const
}

export function getApiPublicSkillsSkillNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.skills)[':skillName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicSkillsSkillNameQueryKey>
  >({
    queryKey: getApiPublicSkillsSkillNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.skills[':skillName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicSkillsSkillName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.skills)[':skillName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicSkillsSkillNameQueryKey>
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
      ...getApiPublicSkillsSkillNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicSkillsSkillName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.skills)[':skillName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicSkillsSkillNameQueryKey>
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
      ...getApiPublicSkillsSkillNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchApiPublicSkillsSkillNameMutationKey() {
  return ['api', '/api/public/skills/:skillName', 'PATCH'] as const
}

export function getPatchApiPublicSkillsSkillNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.skills)[':skillName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPublicSkillsSkillNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.skills)[':skillName']['$patch']>,
    ) {
      return parseResponse(client.api.public.skills[':skillName'].$patch(args, options))
    },
  })
}

export function usePatchApiPublicSkillsSkillName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.skills)[':skillName']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.skills)[':skillName']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiPublicSkillsSkillNameMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicSkillsFilesContentQueryKey(
  args: InferRequestType<typeof client.api.public.skills.files.content.$get>,
) {
  return ['api', '/api/public/skills/files/content', args] as const
}

export function getApiPublicSkillsFilesContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.files.content.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.skills.files.content.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.skills.files.content.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicSkillsFilesContentQueryKey>
  >({
    queryKey: getApiPublicSkillsFilesContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.skills.files.content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicSkillsFilesContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.files.content.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.skills.files.content.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.skills.files.content.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicSkillsFilesContentQueryKey>
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
      ...getApiPublicSkillsFilesContentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicSkillsFilesContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.skills.files.content.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.skills.files.content.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.skills.files.content.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicSkillsFilesContentQueryKey>
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
      ...getApiPublicSkillsFilesContentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiPublicSkillsSkillNameVersionsSkillVersionMutationKey() {
  return ['api', '/api/public/skills/:skillName/versions/:skillVersion', 'DELETE'] as const
}

export function getDeleteApiPublicSkillsSkillNameVersionsSkillVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicSkillsSkillNameVersionsSkillVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.public.skills[':skillName'].versions[':skillVersion'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiPublicSkillsSkillNameVersionsSkillVersion<
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
                  (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$delete']
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
  const mutationDefaults = getDeleteApiPublicSkillsSkillNameVersionsSkillVersionMutationOptions<
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

export function getPatchApiPublicSkillsSkillNameVersionsSkillVersionMutationKey() {
  return ['api', '/api/public/skills/:skillName/versions/:skillVersion', 'PATCH'] as const
}

export function getPatchApiPublicSkillsSkillNameVersionsSkillVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPublicSkillsSkillNameVersionsSkillVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.public.skills[':skillName'].versions[':skillVersion'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiPublicSkillsSkillNameVersionsSkillVersion<
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
                  (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.skills)[':skillName']['versions'][':skillVersion']['$patch']
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
  const mutationDefaults = getPatchApiPublicSkillsSkillNameVersionsSkillVersionMutationOptions<
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

export function getDeleteApiPublicTracesTraceIdMutationKey() {
  return ['api', '/api/public/traces/:traceId', 'DELETE'] as const
}

export function getDeleteApiPublicTracesTraceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.traces)[':traceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.traces)[':traceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicTracesTraceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.traces)[':traceId']['$delete']>,
    ) {
      return parseResponse(client.api.public.traces[':traceId'].$delete(args, options))
    },
  })
}

export function useDeleteApiPublicTracesTraceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.traces)[':traceId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.traces)[':traceId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicTracesTraceIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiPublicTracesMutationKey() {
  return ['api', '/api/public/traces', 'DELETE'] as const
}

export function getDeleteApiPublicTracesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.public.traces.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.api.public.traces.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicTracesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.traces.$delete>) {
      return parseResponse(client.api.public.traces.$delete(args, options))
    },
  })
}

export function useDeleteApiPublicTraces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.traces.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.traces.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicTracesMutationOptions<TError, TOnMutateResult>(
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

export function getApiPublicUnstableOrganizationsBillableUnitsQueryKey(
  args: InferRequestType<
    (typeof client.api.public.unstable.organizations)['billable-units']['$get']
  >,
) {
  return ['api', '/api/public/unstable/organizations/billable-units', args] as const
}

export function getApiPublicUnstableOrganizationsBillableUnitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.unstable.organizations)['billable-units']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public.unstable.organizations)['billable-units']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.unstable.organizations)['billable-units']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableOrganizationsBillableUnitsQueryKey>
  >({
    queryKey: getApiPublicUnstableOrganizationsBillableUnitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable.organizations['billable-units'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableOrganizationsBillableUnits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.unstable.organizations)['billable-units']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public.unstable.organizations)['billable-units']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.public.unstable.organizations)['billable-units']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableOrganizationsBillableUnitsQueryKey>
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
      ...getApiPublicUnstableOrganizationsBillableUnitsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableOrganizationsBillableUnits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.unstable.organizations)['billable-units']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public.unstable.organizations)['billable-units']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.public.unstable.organizations)['billable-units']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableOrganizationsBillableUnitsQueryKey>
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
      ...getApiPublicUnstableOrganizationsBillableUnitsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicUnstableDashboardWidgetsQueryKey(
  args: InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>,
) {
  return ['api', '/api/public/unstable/dashboard-widgets', args] as const
}

export function getApiPublicUnstableDashboardWidgetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableDashboardWidgetsQueryKey>
  >({
    queryKey: getApiPublicUnstableDashboardWidgetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable['dashboard-widgets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableDashboardWidgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableDashboardWidgetsQueryKey>
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
      ...getApiPublicUnstableDashboardWidgetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableDashboardWidgets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableDashboardWidgetsQueryKey>
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
      ...getApiPublicUnstableDashboardWidgetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiPublicUnstableDashboardWidgetsMutationKey() {
  return ['api', '/api/public/unstable/dashboard-widgets', 'POST'] as const
}

export function getPostApiPublicUnstableDashboardWidgetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicUnstableDashboardWidgetsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$post']>,
    ) {
      return parseResponse(client.api.public.unstable['dashboard-widgets'].$post(args, options))
    },
  })
}

export function usePostApiPublicUnstableDashboardWidgets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.unstable)['dashboard-widgets']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.unstable)['dashboard-widgets']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicUnstableDashboardWidgetsMutationOptions<
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

export function getApiPublicUnstableDashboardWidgetsWidgetIdQueryKey(
  args: InferRequestType<
    (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
  >,
) {
  return ['api', '/api/public/unstable/dashboard-widgets/:widgetId', args] as const
}

export function getApiPublicUnstableDashboardWidgetsWidgetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableDashboardWidgetsWidgetIdQueryKey>
  >({
    queryKey: getApiPublicUnstableDashboardWidgetsWidgetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable['dashboard-widgets'][':widgetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableDashboardWidgetsWidgetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableDashboardWidgetsWidgetIdQueryKey>
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
      ...getApiPublicUnstableDashboardWidgetsWidgetIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableDashboardWidgetsWidgetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableDashboardWidgetsWidgetIdQueryKey>
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
      ...getApiPublicUnstableDashboardWidgetsWidgetIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiPublicUnstableDashboardWidgetsWidgetIdMutationKey() {
  return ['api', '/api/public/unstable/dashboard-widgets/:widgetId', 'DELETE'] as const
}

export function getDeleteApiPublicUnstableDashboardWidgetsWidgetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicUnstableDashboardWidgetsWidgetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.public.unstable['dashboard-widgets'][':widgetId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiPublicUnstableDashboardWidgetsWidgetId<
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
                  (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$delete']
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
  const mutationDefaults = getDeleteApiPublicUnstableDashboardWidgetsWidgetIdMutationOptions<
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

export function getPatchApiPublicUnstableDashboardWidgetsWidgetIdMutationKey() {
  return ['api', '/api/public/unstable/dashboard-widgets/:widgetId', 'PATCH'] as const
}

export function getPatchApiPublicUnstableDashboardWidgetsWidgetIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPublicUnstableDashboardWidgetsWidgetIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.public.unstable['dashboard-widgets'][':widgetId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiPublicUnstableDashboardWidgetsWidgetId<
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
                  (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.unstable)['dashboard-widgets'][':widgetId']['$patch']
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
  const mutationDefaults = getPatchApiPublicUnstableDashboardWidgetsWidgetIdMutationOptions<
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

export function getApiPublicUnstableDashboardsQueryKey(
  args: InferRequestType<typeof client.api.public.unstable.dashboards.$get>,
) {
  return ['api', '/api/public/unstable/dashboards', args] as const
}

export function getApiPublicUnstableDashboardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.unstable.dashboards.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableDashboardsQueryKey>
  >({
    queryKey: getApiPublicUnstableDashboardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable.dashboards.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.unstable.dashboards.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableDashboardsQueryKey>
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
      ...getApiPublicUnstableDashboardsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.unstable.dashboards.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableDashboardsQueryKey>
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
      ...getApiPublicUnstableDashboardsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostApiPublicUnstableDashboardsMutationKey() {
  return ['api', '/api/public/unstable/dashboards', 'POST'] as const
}

export function getPostApiPublicUnstableDashboardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.public.unstable.dashboards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicUnstableDashboardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.public.unstable.dashboards.$post>) {
      return parseResponse(client.api.public.unstable.dashboards.$post(args, options))
    },
  })
}

export function usePostApiPublicUnstableDashboards<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.public.unstable.dashboards.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.public.unstable.dashboards.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiPublicUnstableDashboardsMutationOptions<
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

export function getApiPublicUnstableDashboardsDashboardIdQueryKey(
  args: InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>,
) {
  return ['api', '/api/public/unstable/dashboards/:dashboardId', args] as const
}

export function getApiPublicUnstableDashboardsDashboardIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableDashboardsDashboardIdQueryKey>
  >({
    queryKey: getApiPublicUnstableDashboardsDashboardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable.dashboards[':dashboardId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableDashboardsDashboardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableDashboardsDashboardIdQueryKey>
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
      ...getApiPublicUnstableDashboardsDashboardIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableDashboardsDashboardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableDashboardsDashboardIdQueryKey>
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
      ...getApiPublicUnstableDashboardsDashboardIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteApiPublicUnstableDashboardsDashboardIdMutationKey() {
  return ['api', '/api/public/unstable/dashboards/:dashboardId', 'DELETE'] as const
}

export function getDeleteApiPublicUnstableDashboardsDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicUnstableDashboardsDashboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.unstable.dashboards)[':dashboardId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.public.unstable.dashboards[':dashboardId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiPublicUnstableDashboardsDashboardId<
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
                  (typeof client.api.public.unstable.dashboards)[':dashboardId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiPublicUnstableDashboardsDashboardIdMutationOptions<
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

export function getPatchApiPublicUnstableDashboardsDashboardIdMutationKey() {
  return ['api', '/api/public/unstable/dashboards/:dashboardId', 'PATCH'] as const
}

export function getPatchApiPublicUnstableDashboardsDashboardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPublicUnstableDashboardsDashboardIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.unstable.dashboards)[':dashboardId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.public.unstable.dashboards[':dashboardId'].$patch(args, options),
      )
    },
  })
}

export function usePatchApiPublicUnstableDashboardsDashboardId<
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
                ReturnType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.public.unstable.dashboards)[':dashboardId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchApiPublicUnstableDashboardsDashboardIdMutationOptions<
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

export function getPostApiPublicUnstableDashboardsDashboardIdPlacementsMutationKey() {
  return ['api', '/api/public/unstable/dashboards/:dashboardId/placements', 'POST'] as const
}

export function getPostApiPublicUnstableDashboardsDashboardIdPlacementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiPublicUnstableDashboardsDashboardIdPlacementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements']['$post']
      >,
    ) {
      return parseResponse(
        client.api.public.unstable.dashboards[':dashboardId'].placements.$post(args, options),
      )
    },
  })
}

export function usePostApiPublicUnstableDashboardsDashboardIdPlacements<
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
                  (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements']['$post']
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
  const mutationDefaults = getPostApiPublicUnstableDashboardsDashboardIdPlacementsMutationOptions<
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

export function getDeleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdMutationKey() {
  return [
    'api',
    '/api/public/unstable/dashboards/:dashboardId/placements/:placementId',
    'DELETE',
  ] as const
}

export function getDeleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.public.unstable.dashboards[':dashboardId'].placements[':placementId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementId<
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
                  (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$delete']
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
    getDeleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdMutationOptions<
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

export function getPatchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdMutationKey() {
  return [
    'api',
    '/api/public/unstable/dashboards/:dashboardId/placements/:placementId',
    'PATCH',
  ] as const
}

export function getPatchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.public.unstable.dashboards[':dashboardId'].placements[':placementId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementId<
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
                  (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.public.unstable.dashboards)[':dashboardId']['placements'][':placementId']['$patch']
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
    getPatchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdMutationOptions<
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

export function getApiPublicUnstableTopicFacetsQueryKey(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets']['$get']>,
) {
  return ['api', '/api/public/unstable/topic-facets', args] as const
}

export function getApiPublicUnstableTopicFacetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableTopicFacetsQueryKey>
  >({
    queryKey: getApiPublicUnstableTopicFacetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable['topic-facets'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableTopicFacets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicFacetsQueryKey>
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
      ...getApiPublicUnstableTopicFacetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableTopicFacets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicFacetsQueryKey>
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
      ...getApiPublicUnstableTopicFacetsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicUnstableTopicFacetsFacetIdQueryKey(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>,
) {
  return ['api', '/api/public/unstable/topic-facets/:facetId', args] as const
}

export function getApiPublicUnstableTopicFacetsFacetIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableTopicFacetsFacetIdQueryKey>
  >({
    queryKey: getApiPublicUnstableTopicFacetsFacetIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable['topic-facets'][':facetId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableTopicFacetsFacetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicFacetsFacetIdQueryKey>
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
      ...getApiPublicUnstableTopicFacetsFacetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableTopicFacetsFacetId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.unstable)['topic-facets'][':facetId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicFacetsFacetIdQueryKey>
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
      ...getApiPublicUnstableTopicFacetsFacetIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicUnstableTopicsQueryKey(
  args: InferRequestType<typeof client.api.public.unstable.topics.$get>,
) {
  return ['api', '/api/public/unstable/topics', args] as const
}

export function getApiPublicUnstableTopicsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.topics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.unstable.topics.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.topics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableTopicsQueryKey>
  >({
    queryKey: getApiPublicUnstableTopicsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable.topics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.topics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.unstable.topics.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.topics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicsQueryKey>
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
      ...getApiPublicUnstableTopicsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableTopics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.topics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.public.unstable.topics.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.public.unstable.topics.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicsQueryKey>
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
      ...getApiPublicUnstableTopicsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicUnstableTopicsTopicStableIdQueryKey(
  args: InferRequestType<(typeof client.api.public.unstable.topics)[':topicStableId']['$get']>,
) {
  return ['api', '/api/public/unstable/topics/:topicStableId', args] as const
}

export function getApiPublicUnstableTopicsTopicStableIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable.topics)[':topicStableId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable.topics)[':topicStableId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.unstable.topics)[':topicStableId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableTopicsTopicStableIdQueryKey>
  >({
    queryKey: getApiPublicUnstableTopicsTopicStableIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable.topics[':topicStableId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableTopicsTopicStableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable.topics)[':topicStableId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable.topics)[':topicStableId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.unstable.topics)[':topicStableId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicsTopicStableIdQueryKey>
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
      ...getApiPublicUnstableTopicsTopicStableIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableTopicsTopicStableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable.topics)[':topicStableId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable.topics)[':topicStableId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.unstable.topics)[':topicStableId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicsTopicStableIdQueryKey>
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
      ...getApiPublicUnstableTopicsTopicStableIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicUnstableTopicRulesQueryKey(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules']['$get']>,
) {
  return ['api', '/api/public/unstable/topic-rules', args] as const
}

export function getApiPublicUnstableTopicRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableTopicRulesQueryKey>
  >({
    queryKey: getApiPublicUnstableTopicRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable['topic-rules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableTopicRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicRulesQueryKey>
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
      ...getApiPublicUnstableTopicRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableTopicRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicRulesQueryKey>
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
      ...getApiPublicUnstableTopicRulesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicUnstableTopicRulesRuleIdQueryKey(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>,
) {
  return ['api', '/api/public/unstable/topic-rules/:ruleId', args] as const
}

export function getApiPublicUnstableTopicRulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableTopicRulesRuleIdQueryKey>
  >({
    queryKey: getApiPublicUnstableTopicRulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable['topic-rules'][':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableTopicRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicRulesRuleIdQueryKey>
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
      ...getApiPublicUnstableTopicRulesRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableTopicRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.public.unstable)['topic-rules'][':ruleId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicRulesRuleIdQueryKey>
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
      ...getApiPublicUnstableTopicRulesRuleIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicUnstableTopicSummariesQueryKey(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-summaries']['$get']>,
) {
  return ['api', '/api/public/unstable/topic-summaries', args] as const
}

export function getApiPublicUnstableTopicSummariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-summaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-summaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.unstable)['topic-summaries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableTopicSummariesQueryKey>
  >({
    queryKey: getApiPublicUnstableTopicSummariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable['topic-summaries'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableTopicSummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-summaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-summaries']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.unstable)['topic-summaries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicSummariesQueryKey>
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
      ...getApiPublicUnstableTopicSummariesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableTopicSummaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-summaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-summaries']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.unstable)['topic-summaries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicSummariesQueryKey>
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
      ...getApiPublicUnstableTopicSummariesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getApiPublicUnstableTopicAssignmentsQueryKey(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-assignments']['$get']>,
) {
  return ['api', '/api/public/unstable/topic-assignments', args] as const
}

export function getApiPublicUnstableTopicAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-assignments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.public.unstable)['topic-assignments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPublicUnstableTopicAssignmentsQueryKey>
  >({
    queryKey: getApiPublicUnstableTopicAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.public.unstable['topic-assignments'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApiPublicUnstableTopicAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-assignments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-assignments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.unstable)['topic-assignments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicAssignmentsQueryKey>
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
      ...getApiPublicUnstableTopicAssignmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiPublicUnstableTopicAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.public.unstable)['topic-assignments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.public.unstable)['topic-assignments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.public.unstable)['topic-assignments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPublicUnstableTopicAssignmentsQueryKey>
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
      ...getApiPublicUnstableTopicAssignmentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
