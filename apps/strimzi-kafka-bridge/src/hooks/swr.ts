import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostConsumersGroupidKey() {
  return ['consumers', '/consumers/:groupid', 'POST'] as const
}

export function usePostConsumersGroupid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.consumers)[':groupid']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.consumers)[':groupid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumersGroupidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.consumers)[':groupid']['$post']> },
      ) => parseResponse(client.consumers[':groupid'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConsumersGroupidInstancesNamePositionsBeginningKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/positions/beginning', 'POST'] as const
}

export function usePostConsumersGroupidInstancesNamePositionsBeginning<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['positions']['beginning']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumersGroupidInstancesNamePositionsBeginningKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.consumers)[':groupid']['instances'][':name']['positions']['beginning']['$post']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':groupid'].instances[':name'].positions.beginning.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostConsumersGroupidInstancesNamePositionsEndKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/positions/end', 'POST'] as const
}

export function usePostConsumersGroupidInstancesNamePositionsEnd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['positions']['end']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumersGroupidInstancesNamePositionsEndKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.consumers)[':groupid']['instances'][':name']['positions']['end']['$post']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':groupid'].instances[':name'].positions.end.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConsumersGroupidInstancesNameSubscriptionKey(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
  >,
) {
  return ['consumers', '/consumers/:groupid/instances/:name/subscription', args] as const
}

export function useGetConsumersGroupidInstancesNameSubscription<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConsumersGroupidInstancesNameSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumers[':groupid'].instances[':name'].subscription.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumersGroupidInstancesNameSubscription<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConsumersGroupidInstancesNameSubscriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumers[':groupid'].instances[':name'].subscription.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostConsumersGroupidInstancesNameSubscriptionKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/subscription', 'POST'] as const
}

export function usePostConsumersGroupidInstancesNameSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumersGroupidInstancesNameSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$post']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':groupid'].instances[':name'].subscription.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConsumersGroupidInstancesNameSubscriptionKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/subscription', 'DELETE'] as const
}

export function useDeleteConsumersGroupidInstancesNameSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConsumersGroupidInstancesNameSubscriptionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':groupid'].instances[':name'].subscription.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostConsumersGroupidInstancesNamePositionsKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/positions', 'POST'] as const
}

export function usePostConsumersGroupidInstancesNamePositions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['positions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumersGroupidInstancesNamePositionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.consumers)[':groupid']['instances'][':name']['positions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':groupid'].instances[':name'].positions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostConsumersGroupidInstancesNameAssignmentsKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/assignments', 'POST'] as const
}

export function usePostConsumersGroupidInstancesNameAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['assignments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumersGroupidInstancesNameAssignmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.consumers)[':groupid']['instances'][':name']['assignments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':groupid'].instances[':name'].assignments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTopicsKey() {
  return ['topics', '/topics'] as const
}

export function useGetTopics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopicsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopicsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTopicsTopicnameKey(
  args: InferRequestType<(typeof client.topics)[':topicname']['$get']>,
) {
  return ['topics', '/topics/:topicname', args] as const
}

export function useGetTopicsTopicname<TError = unknown>(
  args: InferRequestType<(typeof client.topics)[':topicname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTopicsTopicnameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topics[':topicname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopicsTopicname<TError = unknown>(
  args: InferRequestType<(typeof client.topics)[':topicname']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTopicsTopicnameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topics[':topicname'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTopicsTopicnameKey() {
  return ['topics', '/topics/:topicname', 'POST'] as const
}

export function usePostTopicsTopicname<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.topics)[':topicname']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.topics)[':topicname']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTopicsTopicnameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.topics)[':topicname']['$post']> },
      ) => parseResponse(client.topics[':topicname'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminTopicsKey() {
  return ['admin', '/admin/topics', 'POST'] as const
}

export function usePostAdminTopics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.topics.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.topics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTopicsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.topics.$post> }) =>
        parseResponse(client.admin.topics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConsumersGroupidInstancesNameRecordsKey(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
  >,
) {
  return ['consumers', '/consumers/:groupid/instances/:name/records', args] as const
}

export function useGetConsumersGroupidInstancesNameRecords<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConsumersGroupidInstancesNameRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumers[':groupid'].instances[':name'].records.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConsumersGroupidInstancesNameRecords<TError = unknown>(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConsumersGroupidInstancesNameRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.consumers[':groupid'].instances[':name'].records.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetTopicsTopicnamePartitionsKey(
  args: InferRequestType<(typeof client.topics)[':topicname']['partitions']['$get']>,
) {
  return ['topics', '/topics/:topicname/partitions', args] as const
}

export function useGetTopicsTopicnamePartitions<TError = unknown>(
  args: InferRequestType<(typeof client.topics)[':topicname']['partitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTopicsTopicnamePartitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topics[':topicname'].partitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopicsTopicnamePartitions<TError = unknown>(
  args: InferRequestType<(typeof client.topics)[':topicname']['partitions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTopicsTopicnamePartitionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.topics)[':topicname']['partitions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topics[':topicname'].partitions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTopicsTopicnamePartitionsPartitionidKey(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
  >,
) {
  return ['topics', '/topics/:topicname/partitions/:partitionid', args] as const
}

export function useGetTopicsTopicnamePartitionsPartitionid<TError = unknown>(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTopicsTopicnamePartitionsPartitionidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.topics[':topicname'].partitions[':partitionid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopicsTopicnamePartitionsPartitionid<TError = unknown>(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTopicsTopicnamePartitionsPartitionidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.topics[':topicname'].partitions[':partitionid'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTopicsTopicnamePartitionsPartitionidKey() {
  return ['topics', '/topics/:topicname/partitions/:partitionid', 'POST'] as const
}

export function usePostTopicsTopicnamePartitionsPartitionid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.topics)[':topicname']['partitions'][':partitionid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTopicsTopicnamePartitionsPartitionidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.topics)[':topicname']['partitions'][':partitionid']['$post']
          >
        },
      ) =>
        parseResponse(
          client.topics[':topicname'].partitions[':partitionid'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTopicsTopicnamePartitionsPartitionidOffsetsKey(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
  >,
) {
  return ['topics', '/topics/:topicname/partitions/:partitionid/offsets', args] as const
}

export function useGetTopicsTopicnamePartitionsPartitionidOffsets<TError = unknown>(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTopicsTopicnamePartitionsPartitionidOffsetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.topics[':topicname'].partitions[':partitionid'].offsets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopicsTopicnamePartitionsPartitionidOffsets<TError = unknown>(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTopicsTopicnamePartitionsPartitionidOffsetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.topics[':topicname'].partitions[':partitionid'].offsets.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteConsumersGroupidInstancesNameKey() {
  return ['consumers', '/consumers/:groupid/instances/:name', 'DELETE'] as const
}

export function useDeleteConsumersGroupidInstancesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.consumers)[':groupid']['instances'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConsumersGroupidInstancesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.consumers)[':groupid']['instances'][':name']['$delete']
          >
        },
      ) =>
        parseResponse(client.consumers[':groupid'].instances[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConsumersGroupidInstancesNameOffsetsKey() {
  return ['consumers', '/consumers/:groupid/instances/:name/offsets', 'POST'] as const
}

export function usePostConsumersGroupidInstancesNameOffsets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.consumers)[':groupid']['instances'][':name']['offsets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConsumersGroupidInstancesNameOffsetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.consumers)[':groupid']['instances'][':name']['offsets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.consumers[':groupid'].instances[':name'].offsets.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetHealthyKey() {
  return ['healthy', '/healthy'] as const
}

export function useGetHealthy<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.healthy.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthy<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthy.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.healthy.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReadyKey() {
  return ['ready', '/ready'] as const
}

export function useGetReady<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetReadyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ready.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReady<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetReadyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ready.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOpenapiKey() {
  return ['openapi', '/openapi'] as const
}

export function useGetOpenapi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenapiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.openapi.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOpenapi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenapiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.openapi.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOpenapiV3Key() {
  return ['openapi', '/openapi/v3'] as const
}

export function useGetOpenapiV3<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenapiV3Key() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.openapi.v3.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOpenapiV3<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOpenapiV3Key() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.v3.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.openapi.v3.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsKey() {
  return ['metrics', '/metrics'] as const
}

export function useGetMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetKey() {
  return ['', '/'] as const
}

export function useGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGet<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
