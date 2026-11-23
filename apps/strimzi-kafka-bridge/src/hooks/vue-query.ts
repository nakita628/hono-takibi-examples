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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
    >
  >,
) {
  return ['consumers', '/consumers/:groupid/instances/:name/subscription', toValue(args)] as const
}

export function getConsumersGroupidInstancesNameSubscriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumersGroupidInstancesNameSubscriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumers[':groupid'].instances[':name'].subscription.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
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
                    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
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
                    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConsumersGroupidInstancesNameSubscriptionQueryKey>
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
              (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumersGroupidInstancesNameSubscriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumersGroupidInstancesNameSubscriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumers[':groupid'].instances[':name'].subscription.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getTopicsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getTopicsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTopics<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
          ReturnType<typeof getTopicsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopicsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getTopicsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.topics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopicsTopicnameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.topics)[':topicname']['$get']>>,
) {
  return ['topics', '/topics/:topicname', toValue(args)] as const
}

export function getTopicsTopicnameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.topics)[':topicname']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopicsTopicnameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topics[':topicname'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTopicsTopicname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.topics)[':topicname']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTopicsTopicnameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsTopicnameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopicsTopicnameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.topics[':topicname'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.topics)[':topicname']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.topics)[':topicname']['$post']>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.topics.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.topics.$post>,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']>
  >,
) {
  return ['consumers', '/consumers/:groupid/instances/:name/records', toValue(args)] as const
}

export function getConsumersGroupidInstancesNameRecordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConsumersGroupidInstancesNameRecordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.consumers[':groupid'].instances[':name'].records.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']>
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
                    (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
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
                    (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConsumersGroupidInstancesNameRecordsQueryKey>
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
              (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConsumersGroupidInstancesNameRecordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConsumersGroupidInstancesNameRecordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.consumers[':groupid'].instances[':name'].records.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopicsTopicnamePartitionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.topics)[':topicname']['partitions']['$get']>
  >,
) {
  return ['topics', '/topics/:topicname/partitions', toValue(args)] as const
}

export function getTopicsTopicnamePartitionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.topics)[':topicname']['partitions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopicsTopicnamePartitionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topics[':topicname'].partitions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.topics)[':topicname']['partitions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTopicsTopicnamePartitionsQueryKey>
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
          Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsTopicnamePartitionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopicsTopicnamePartitionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.topics[':topicname'].partitions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopicsTopicnamePartitionsPartitionidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']>
  >,
) {
  return ['topics', '/topics/:topicname/partitions/:partitionid', toValue(args)] as const
}

export function getTopicsTopicnamePartitionsPartitionidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopicsTopicnamePartitionsPartitionidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topics[':topicname'].partitions[':partitionid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']>
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
                    (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
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
                    (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTopicsTopicnamePartitionsPartitionidQueryKey>
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
            ReturnType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsTopicnamePartitionsPartitionidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopicsTopicnamePartitionsPartitionidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.topics[':topicname'].partitions[':partitionid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
    >
  >,
) {
  return ['topics', '/topics/:topicname/partitions/:partitionid/offsets', toValue(args)] as const
}

export function getTopicsTopicnamePartitionsPartitionidOffsetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopicsTopicnamePartitionsPartitionidOffsetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topics[':topicname'].partitions[':partitionid'].offsets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
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
                    (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
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
                    (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTopicsTopicnamePartitionsPartitionidOffsetsQueryKey>
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
              (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTopicsTopicnamePartitionsPartitionidOffsetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopicsTopicnamePartitionsPartitionidOffsetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.topics[':topicname'].partitions[':partitionid'].offsets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.consumers)[':groupid']['instances'][':name']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.consumers)[':groupid']['instances'][':name']['$delete']>,
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
      Extract<
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
        { mutationFn?: unknown }
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

export function getHealthyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.healthy.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>
          >,
          ReturnType<typeof getHealthyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.healthy.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReadyQueryKey() {
  return ['ready', '/ready'] as const
}

export function getReadyQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReadyQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ready.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
          ReturnType<typeof getReadyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReadyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReadyQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.ready.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenapiQueryKey() {
  return ['openapi', '/openapi'] as const
}

export function getOpenapiQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenapiQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.openapi.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
          >,
          ReturnType<typeof getOpenapiQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOpenapiQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenapiQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.openapi.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOpenapiV3QueryKey() {
  return ['openapi', '/openapi/v3'] as const
}

export function getOpenapiV3QueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOpenapiV3QueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.openapi.v3.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOpenapiV3<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>
          >,
          ReturnType<typeof getOpenapiV3QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOpenapiV3QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOpenapiV3QueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.openapi.v3.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          ReturnType<typeof getMetricsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getQueryKey() {
  return ['', '/'] as const
}

export function getQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.index.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function use<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
          ReturnType<typeof getQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.index.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
