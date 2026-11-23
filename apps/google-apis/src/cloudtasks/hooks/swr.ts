import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV2beta3Key() {
  return ['v2beta3'] as const
}

export function getGetV2beta3NameKey(
  args: InferRequestType<(typeof client.v2beta3)[':name']['$get']>,
) {
  return ['v2beta3', '/v2beta3/:name', args] as const
}

export function useGetV2beta3Name<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta3)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2beta3NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta3[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta3Name<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta3)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2beta3NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta3[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2beta3NameKey() {
  return ['v2beta3', '/v2beta3/:name', 'DELETE'] as const
}

export function useDeleteV2beta3Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta3)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2beta3NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2beta3)[':name']['$delete']> },
      ) => parseResponse(client.v2beta3[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2beta3NameKey() {
  return ['v2beta3', '/v2beta3/:name', 'PATCH'] as const
}

export function usePatchV2beta3Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta3)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2beta3NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2beta3)[':name']['$patch']> },
      ) => parseResponse(client.v2beta3[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta3NameLocationsKey(
  args: InferRequestType<(typeof client.v2beta3)[':name']['locations']['$get']>,
) {
  return ['v2beta3', '/v2beta3/:name/locations', args] as const
}

export function useGetV2beta3NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta3)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta3)[':name']['locations']['$get']>>
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
        ? getGetV2beta3NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta3)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta3[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta3NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta3)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta3)[':name']['locations']['$get']>>
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
        ? getGetV2beta3NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta3)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta3[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2beta3NamePauseKey() {
  return ['v2beta3', '/v2beta3/:name:pause', 'POST'] as const
}

export function usePostV2beta3NamePause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name:pause']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta3)[':name:pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta3NamePauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2beta3)[':name:pause']['$post']> },
      ) => parseResponse(client.v2beta3[':name:pause'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta3NamePurgeKey() {
  return ['v2beta3', '/v2beta3/:name:purge', 'POST'] as const
}

export function usePostV2beta3NamePurge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name:purge']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta3)[':name:purge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta3NamePurgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2beta3)[':name:purge']['$post']> },
      ) => parseResponse(client.v2beta3[':name:purge'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta3NameResumeKey() {
  return ['v2beta3', '/v2beta3/:name:resume', 'POST'] as const
}

export function usePostV2beta3NameResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name:resume']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta3)[':name:resume']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta3NameResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2beta3)[':name:resume']['$post']> },
      ) => parseResponse(client.v2beta3[':name:resume'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta3NameRunKey() {
  return ['v2beta3', '/v2beta3/:name:run', 'POST'] as const
}

export function usePostV2beta3NameRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta3)[':name:run']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta3)[':name:run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta3NameRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2beta3)[':name:run']['$post']> },
      ) => parseResponse(client.v2beta3[':name:run'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta3ParentQueuesKey(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$get']>,
) {
  return ['v2beta3', '/v2beta3/:parent/queues', args] as const
}

export function useGetV2beta3ParentQueues<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$get']>>
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
        ? getGetV2beta3ParentQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta3[':parent'].queues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta3ParentQueues<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$get']>>
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
        ? getGetV2beta3ParentQueuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta3[':parent'].queues.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2beta3ParentQueuesKey() {
  return ['v2beta3', '/v2beta3/:parent/queues', 'POST'] as const
}

export function usePostV2beta3ParentQueues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':parent']['queues']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta3ParentQueuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2beta3)[':parent']['queues']['$post']> },
      ) => parseResponse(client.v2beta3[':parent'].queues.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2beta3ParentTasksKey(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$get']>,
) {
  return ['v2beta3', '/v2beta3/:parent/tasks', args] as const
}

export function useGetV2beta3ParentTasks<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$get']>>
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
        ? getGetV2beta3ParentTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta3[':parent'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2beta3ParentTasks<TError = unknown>(
  args: InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$get']>>
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
        ? getGetV2beta3ParentTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2beta3[':parent'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2beta3ParentTasksKey() {
  return ['v2beta3', '/v2beta3/:parent/tasks', 'POST'] as const
}

export function usePostV2beta3ParentTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':parent']['tasks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta3ParentTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2beta3)[':parent']['tasks']['$post']> },
      ) => parseResponse(client.v2beta3[':parent'].tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta3QueueTasksTaskIdBufferKey() {
  return ['v2beta3', '/v2beta3/:queue/tasks/:taskId:buffer', 'POST'] as const
}

export function usePostV2beta3QueueTasksTaskIdBuffer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':queue']['tasks'][':taskId:buffer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta3)[':queue']['tasks'][':taskId:buffer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta3QueueTasksTaskIdBufferKey()
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
            (typeof client.v2beta3)[':queue']['tasks'][':taskId:buffer']['$post']
          >
        },
      ) =>
        parseResponse(client.v2beta3[':queue'].tasks[':taskId:buffer'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta3ResourceGetIamPolicyKey() {
  return ['v2beta3', '/v2beta3/:resource:getIamPolicy', 'POST'] as const
}

export function usePostV2beta3ResourceGetIamPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':resource:getIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta3)[':resource:getIamPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta3ResourceGetIamPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2beta3)[':resource:getIamPolicy']['$post']> },
      ) => parseResponse(client.v2beta3[':resource:getIamPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta3ResourceSetIamPolicyKey() {
  return ['v2beta3', '/v2beta3/:resource:setIamPolicy', 'POST'] as const
}

export function usePostV2beta3ResourceSetIamPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':resource:setIamPolicy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta3)[':resource:setIamPolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta3ResourceSetIamPolicyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2beta3)[':resource:setIamPolicy']['$post']> },
      ) => parseResponse(client.v2beta3[':resource:setIamPolicy'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2beta3ResourceTestIamPermissionsKey() {
  return ['v2beta3', '/v2beta3/:resource:testIamPermissions', 'POST'] as const
}

export function usePostV2beta3ResourceTestIamPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta3)[':resource:testIamPermissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2beta3)[':resource:testIamPermissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2beta3ResourceTestIamPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2beta3)[':resource:testIamPermissions']['$post']>
        },
      ) => parseResponse(client.v2beta3[':resource:testIamPermissions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
