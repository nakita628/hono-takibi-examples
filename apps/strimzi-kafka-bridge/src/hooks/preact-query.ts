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

export function getAdminKey() {
  return ['admin'] as const
}

export function getConsumersKey() {
  return ['consumers'] as const
}

export function getHealthyKey() {
  return ['healthy'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getOpenapiKey() {
  return ['openapi'] as const
}

export function getReadyKey() {
  return ['ready'] as const
}

export function getTopicsKey() {
  return ['topics'] as const
}

export function getPostConsumersGroupidMutationKey() {
  return ['consumers', '/consumers/:groupid', 'POST'] as const
}

export function getPostConsumersGroupidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':groupid']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.consumers)[':groupid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConsumersGroupidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.consumers)[':groupid']['$post']>) {
      return parseResponse(client.consumers[':groupid'].$post(args, options))
    },
  })
}

export function usePostConsumersGroupid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.consumers)[':groupid']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.consumers)[':groupid']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConsumersGroupidMutationOptions<TError, TOnMutateResult>(
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

export function getPostConsumersGroupidInstancesNamePositionsBeginningMutationKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/positions/beginning', 'POST'] as const
}

export function getPostConsumersGroupidInstancesNamePositionsBeginningMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':groupid']['instances'][':name']['positions']['beginning']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['positions']['beginning']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConsumersGroupidInstancesNamePositionsBeginningMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':groupid']['instances'][':name']['positions']['beginning']['$post']
      >,
    ) {
      return parseResponse(
        client.consumers[':groupid'].instances[':name'].positions.beginning.$post(args, options),
      )
    },
  })
}

export function usePostConsumersGroupidInstancesNamePositionsBeginning<
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
                    (typeof client.consumers)[':groupid']['instances'][':name']['positions']['beginning']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.consumers)[':groupid']['instances'][':name']['positions']['beginning']['$post']
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
  const mutationDefaults = getPostConsumersGroupidInstancesNamePositionsBeginningMutationOptions<
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

export function getPostConsumersGroupidInstancesNamePositionsEndMutationKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/positions/end', 'POST'] as const
}

export function getPostConsumersGroupidInstancesNamePositionsEndMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':groupid']['instances'][':name']['positions']['end']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['positions']['end']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConsumersGroupidInstancesNamePositionsEndMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':groupid']['instances'][':name']['positions']['end']['$post']
      >,
    ) {
      return parseResponse(
        client.consumers[':groupid'].instances[':name'].positions.end.$post(args, options),
      )
    },
  })
}

export function usePostConsumersGroupidInstancesNamePositionsEnd<
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
                    (typeof client.consumers)[':groupid']['instances'][':name']['positions']['end']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.consumers)[':groupid']['instances'][':name']['positions']['end']['$post']
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
  const mutationDefaults = getPostConsumersGroupidInstancesNamePositionsEndMutationOptions<
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

export function getConsumersGroupidInstancesNameSubscriptionQueryKey(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
  >,
) {
  return ['consumers', '/consumers/:groupid/instances/:name/subscription', args] as const
}

export function getConsumersGroupidInstancesNameSubscriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumersGroupidInstancesNameSubscriptionQueryKey>
  >({
    queryKey: getConsumersGroupidInstancesNameSubscriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumers[':groupid'].instances[':name'].subscription.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConsumersGroupidInstancesNameSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConsumersGroupidInstancesNameSubscriptionQueryKey>
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
      ...getConsumersGroupidInstancesNameSubscriptionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConsumersGroupidInstancesNameSubscription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConsumersGroupidInstancesNameSubscriptionQueryKey>
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
      ...getConsumersGroupidInstancesNameSubscriptionQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostConsumersGroupidInstancesNameSubscriptionMutationKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/subscription', 'POST'] as const
}

export function getPostConsumersGroupidInstancesNameSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConsumersGroupidInstancesNameSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$post']
      >,
    ) {
      return parseResponse(
        client.consumers[':groupid'].instances[':name'].subscription.$post(args, options),
      )
    },
  })
}

export function usePostConsumersGroupidInstancesNameSubscription<
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
                    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$post']
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
  const mutationDefaults = getPostConsumersGroupidInstancesNameSubscriptionMutationOptions<
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

export function getDeleteConsumersGroupidInstancesNameSubscriptionMutationKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/subscription', 'DELETE'] as const
}

export function getDeleteConsumersGroupidInstancesNameSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConsumersGroupidInstancesNameSubscriptionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$delete']
      >,
    ) {
      return parseResponse(
        client.consumers[':groupid'].instances[':name'].subscription.$delete(args, options),
      )
    },
  })
}

export function useDeleteConsumersGroupidInstancesNameSubscription<
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
                    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$delete']
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
  const mutationDefaults = getDeleteConsumersGroupidInstancesNameSubscriptionMutationOptions<
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

export function getPostConsumersGroupidInstancesNamePositionsMutationKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/positions', 'POST'] as const
}

export function getPostConsumersGroupidInstancesNamePositionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':groupid']['instances'][':name']['positions']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['positions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConsumersGroupidInstancesNamePositionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':groupid']['instances'][':name']['positions']['$post']
      >,
    ) {
      return parseResponse(
        client.consumers[':groupid'].instances[':name'].positions.$post(args, options),
      )
    },
  })
}

export function usePostConsumersGroupidInstancesNamePositions<
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
                    (typeof client.consumers)[':groupid']['instances'][':name']['positions']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.consumers)[':groupid']['instances'][':name']['positions']['$post']
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
  const mutationDefaults = getPostConsumersGroupidInstancesNamePositionsMutationOptions<
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

export function getPostConsumersGroupidInstancesNameAssignmentsMutationKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/assignments', 'POST'] as const
}

export function getPostConsumersGroupidInstancesNameAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':groupid']['instances'][':name']['assignments']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['assignments']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConsumersGroupidInstancesNameAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':groupid']['instances'][':name']['assignments']['$post']
      >,
    ) {
      return parseResponse(
        client.consumers[':groupid'].instances[':name'].assignments.$post(args, options),
      )
    },
  })
}

export function usePostConsumersGroupidInstancesNameAssignments<
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
                    (typeof client.consumers)[':groupid']['instances'][':name']['assignments']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.consumers)[':groupid']['instances'][':name']['assignments']['$post']
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
  const mutationDefaults = getPostConsumersGroupidInstancesNameAssignmentsMutationOptions<
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

export function getTopicsQueryKey() {
  return ['topics', '/topics'] as const
}

export function getTopicsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopicsQueryKey>
  >({
    queryKey: getTopicsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.topics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopics<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopicsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopics<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopicsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTopicsTopicnameQueryKey(
  args: InferRequestType<(typeof client.topics)[':topicname']['$get']>,
) {
  return ['topics', '/topics/:topicname', args] as const
}

export function getTopicsTopicnameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)[':topicname']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsTopicnameQueryKey>
  >({
    queryKey: getTopicsTopicnameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.topics[':topicname'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopicsTopicname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)[':topicname']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsTopicnameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopicsTopicnameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopicsTopicname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)[':topicname']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsTopicnameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopicsTopicnameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTopicsTopicnameMutationKey() {
  return ['topics', '/topics/:topicname', 'POST'] as const
}

export function getPostTopicsTopicnameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.topics)[':topicname']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTopicsTopicnameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.topics)[':topicname']['$post']>) {
      return parseResponse(client.topics[':topicname'].$post(args, options))
    },
  })
}

export function usePostTopicsTopicname<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.topics)[':topicname']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTopicsTopicnameMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminTopicsMutationKey() {
  return ['admin', '/admin/topics', 'POST'] as const
}

export function getPostAdminTopicsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.topics.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.admin.topics.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminTopicsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.topics.$post>) {
      return parseResponse(client.admin.topics.$post(args, options))
    },
  })
}

export function usePostAdminTopics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.topics.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.admin.topics.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminTopicsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getConsumersGroupidInstancesNameRecordsQueryKey(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
  >,
) {
  return ['consumers', '/consumers/:groupid/instances/:name/records', args] as const
}

export function getConsumersGroupidInstancesNameRecordsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumersGroupidInstancesNameRecordsQueryKey>
  >({
    queryKey: getConsumersGroupidInstancesNameRecordsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.consumers[':groupid'].instances[':name'].records.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useConsumersGroupidInstancesNameRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConsumersGroupidInstancesNameRecordsQueryKey>
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
      ...getConsumersGroupidInstancesNameRecordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseConsumersGroupidInstancesNameRecords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConsumersGroupidInstancesNameRecordsQueryKey>
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
      ...getConsumersGroupidInstancesNameRecordsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTopicsTopicnamePartitionsQueryKey(
  args: InferRequestType<(typeof client.topics)[':topicname']['partitions']['$get']>,
) {
  return ['topics', '/topics/:topicname/partitions', args] as const
}

export function getTopicsTopicnamePartitionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)[':topicname']['partitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsTopicnamePartitionsQueryKey>
  >({
    queryKey: getTopicsTopicnamePartitionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.topics[':topicname'].partitions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTopicsTopicnamePartitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)[':topicname']['partitions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsTopicnamePartitionsQueryKey>
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
      ...getTopicsTopicnamePartitionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTopicsTopicnamePartitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.topics)[':topicname']['partitions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsTopicnamePartitionsQueryKey>
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
      ...getTopicsTopicnamePartitionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getTopicsTopicnamePartitionsPartitionidQueryKey(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
  >,
) {
  return ['topics', '/topics/:topicname/partitions/:partitionid', args] as const
}

export function getTopicsTopicnamePartitionsPartitionidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsTopicnamePartitionsPartitionidQueryKey>
  >({
    queryKey: getTopicsTopicnamePartitionsPartitionidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.topics[':topicname'].partitions[':partitionid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTopicsTopicnamePartitionsPartitionid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsTopicnamePartitionsPartitionidQueryKey>
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
      ...getTopicsTopicnamePartitionsPartitionidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTopicsTopicnamePartitionsPartitionid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsTopicnamePartitionsPartitionidQueryKey>
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
      ...getTopicsTopicnamePartitionsPartitionidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostTopicsTopicnamePartitionsPartitionidMutationKey() {
  return ['topics', '/topics/:topicname/partitions/:partitionid', 'POST'] as const
}

export function getPostTopicsTopicnamePartitionsPartitionidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTopicsTopicnamePartitionsPartitionidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.topics)[':topicname']['partitions'][':partitionid']['$post']
      >,
    ) {
      return parseResponse(
        client.topics[':topicname'].partitions[':partitionid'].$post(args, options),
      )
    },
  })
}

export function usePostTopicsTopicnamePartitionsPartitionid<
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
                  (typeof client.topics)[':topicname']['partitions'][':partitionid']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.topics)[':topicname']['partitions'][':partitionid']['$post']
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
  const mutationDefaults = getPostTopicsTopicnamePartitionsPartitionidMutationOptions<
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

export function getTopicsTopicnamePartitionsPartitionidOffsetsQueryKey(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
  >,
) {
  return ['topics', '/topics/:topicname/partitions/:partitionid/offsets', args] as const
}

export function getTopicsTopicnamePartitionsPartitionidOffsetsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsTopicnamePartitionsPartitionidOffsetsQueryKey>
  >({
    queryKey: getTopicsTopicnamePartitionsPartitionidOffsetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.topics[':topicname'].partitions[':partitionid'].offsets.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTopicsTopicnamePartitionsPartitionidOffsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsTopicnamePartitionsPartitionidOffsetsQueryKey>
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
      ...getTopicsTopicnamePartitionsPartitionidOffsetsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTopicsTopicnamePartitionsPartitionidOffsets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTopicsTopicnamePartitionsPartitionidOffsetsQueryKey>
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
      ...getTopicsTopicnamePartitionsPartitionidOffsetsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteConsumersGroupidInstancesNameMutationKey() {
  return ['consumers', '/consumers/:groupid/instances/:name', 'DELETE'] as const
}

export function getDeleteConsumersGroupidInstancesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.consumers)[':groupid']['instances'][':name']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.consumers)[':groupid']['instances'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConsumersGroupidInstancesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':groupid']['instances'][':name']['$delete']
      >,
    ) {
      return parseResponse(client.consumers[':groupid'].instances[':name'].$delete(args, options))
    },
  })
}

export function useDeleteConsumersGroupidInstancesName<
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
                  ReturnType<(typeof client.consumers)[':groupid']['instances'][':name']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.consumers)[':groupid']['instances'][':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConsumersGroupidInstancesNameMutationOptions<
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

export function getPostConsumersGroupidInstancesNameOffsetsMutationKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/offsets', 'POST'] as const
}

export function getPostConsumersGroupidInstancesNameOffsetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.consumers)[':groupid']['instances'][':name']['offsets']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['offsets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConsumersGroupidInstancesNameOffsetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.consumers)[':groupid']['instances'][':name']['offsets']['$post']
      >,
    ) {
      return parseResponse(
        client.consumers[':groupid'].instances[':name'].offsets.$post(args, options),
      )
    },
  })
}

export function usePostConsumersGroupidInstancesNameOffsets<
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
                    (typeof client.consumers)[':groupid']['instances'][':name']['offsets']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.consumers)[':groupid']['instances'][':name']['offsets']['$post']
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
  const mutationDefaults = getPostConsumersGroupidInstancesNameOffsetsMutationOptions<
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

export function getHealthyQueryKey() {
  return ['healthy', '/healthy'] as const
}

export function getHealthyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthyQueryKey>
  >({
    queryKey: getHealthyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.healthy.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealthy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealthy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReadyQueryKey() {
  return ['ready', '/ready'] as const
}

export function getReadyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyQueryKey>
  >({
    queryKey: getReadyQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReadyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReadyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReadyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReadyQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOpenapiQueryKey() {
  return ['openapi', '/openapi'] as const
}

export function getOpenapiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOpenapiQueryKey>
  >({
    queryKey: getOpenapiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.openapi.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOpenapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOpenapiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOpenapiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOpenapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOpenapiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOpenapiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOpenapiV3QueryKey() {
  return ['openapi', '/openapi/v3'] as const
}

export function getOpenapiV3QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOpenapiV3QueryKey>
  >({
    queryKey: getOpenapiV3QueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.openapi.v3.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOpenapiV3<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiV3QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOpenapiV3QueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOpenapiV3<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiV3QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOpenapiV3QueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >({
    queryKey: getQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspense<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}
