import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostConsumersGroupid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConsumersGroupidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConsumersGroupidInstancesNamePositionsBeginning<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConsumersGroupidInstancesNamePositionsBeginningMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConsumersGroupidInstancesNamePositionsEnd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConsumersGroupidInstancesNamePositionsEndMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createConsumersGroupidInstancesNameSubscription<
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
  args: () => InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConsumersGroupidInstancesNameSubscriptionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostConsumersGroupidInstancesNameSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConsumersGroupidInstancesNameSubscriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteConsumersGroupidInstancesNameSubscription<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConsumersGroupidInstancesNameSubscriptionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConsumersGroupidInstancesNamePositions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConsumersGroupidInstancesNamePositionsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConsumersGroupidInstancesNameAssignments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConsumersGroupidInstancesNameAssignmentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTopics<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getTopicsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopicsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createTopicsTopicname<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.topics)[':topicname']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopicsTopicnameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTopicsTopicname<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTopicsTopicnameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostAdminTopics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAdminTopicsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createConsumersGroupidInstancesNameRecords<
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
  args: () => InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConsumersGroupidInstancesNameRecordsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTopicsTopicnamePartitions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.topics)[':topicname']['partitions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTopicsTopicnamePartitionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createTopicsTopicnamePartitionsPartitionid<
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
  args: () => InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTopicsTopicnamePartitionsPartitionidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostTopicsTopicnamePartitionsPartitionid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTopicsTopicnamePartitionsPartitionidMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createTopicsTopicnamePartitionsPartitionidOffsets<
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
  args: () => InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getTopicsTopicnamePartitionsPartitionidOffsetsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createDeleteConsumersGroupidInstancesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConsumersGroupidInstancesNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostConsumersGroupidInstancesNameOffsets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConsumersGroupidInstancesNameOffsetsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createHealthy<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createReady<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReadyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReadyQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createOpenapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOpenapiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenapiQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createOpenapiV3<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOpenapiV3QueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMetricsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function create<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
