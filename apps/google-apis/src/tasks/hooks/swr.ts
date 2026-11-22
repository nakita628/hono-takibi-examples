import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTasksKey() {
  return ['tasks'] as const
}

export function getPostTasksV1ListsTasklistClearKey() {
  return ['tasks', '/tasks/v1/lists/:tasklist/clear', 'POST'] as const
}

export function usePostTasksV1ListsTasklistClear<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['clear']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['clear']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksV1ListsTasklistClearKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['clear']['$post']> },
      ) => parseResponse(client.tasks.v1.lists[':tasklist'].clear.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksV1ListsTasklistTasksKey(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>,
) {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks', args] as const
}

export function useGetTasksV1ListsTasklistTasks<TError = unknown>(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>>
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
        ? getGetTasksV1ListsTasklistTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks.v1.lists[':tasklist'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksV1ListsTasklistTasks<TError = unknown>(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>>
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
        ? getGetTasksV1ListsTasklistTasksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks.v1.lists[':tasklist'].tasks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksV1ListsTasklistTasksKey() {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks', 'POST'] as const
}

export function usePostTasksV1ListsTasklistTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksV1ListsTasklistTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$post']> },
      ) => parseResponse(client.tasks.v1.lists[':tasklist'].tasks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksV1ListsTasklistTasksTaskKey(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>,
) {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks/:task', args] as const
}

export function useGetTasksV1ListsTasklistTasksTask<TError = unknown>(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>
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
        ? getGetTasksV1ListsTasklistTasksTaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tasks.v1.lists[':tasklist'].tasks[':task'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksV1ListsTasklistTasksTask<TError = unknown>(
  args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>
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
        ? getGetTasksV1ListsTasklistTasksTaskKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tasks.v1.lists[':tasklist'].tasks[':task'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTasksV1ListsTasklistTasksTaskKey() {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks/:task', 'PUT'] as const
}

export function usePutTasksV1ListsTasklistTasksTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTasksV1ListsTasklistTasksTaskKey()
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
            (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$put']
          >
        },
      ) =>
        parseResponse(client.tasks.v1.lists[':tasklist'].tasks[':task'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTasksV1ListsTasklistTasksTaskKey() {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks/:task', 'DELETE'] as const
}

export function useDeleteTasksV1ListsTasklistTasksTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTasksV1ListsTasklistTasksTaskKey()
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
            (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.tasks.v1.lists[':tasklist'].tasks[':task'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchTasksV1ListsTasklistTasksTaskKey() {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks/:task', 'PATCH'] as const
}

export function usePatchTasksV1ListsTasklistTasksTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTasksV1ListsTasklistTasksTaskKey()
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
            (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$patch']
          >
        },
      ) =>
        parseResponse(client.tasks.v1.lists[':tasklist'].tasks[':task'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTasksV1ListsTasklistTasksTaskMoveKey() {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks/:task/move', 'POST'] as const
}

export function usePostTasksV1ListsTasklistTasksTaskMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['move']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksV1ListsTasklistTasksTaskMoveKey()
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
            (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['move']['$post']
          >
        },
      ) =>
        parseResponse(
          client.tasks.v1.lists[':tasklist'].tasks[':task'].move.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetTasksV1UsersMeListsKey(
  args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>,
) {
  return ['tasks', '/tasks/v1/users/@me/lists', args] as const
}

export function useGetTasksV1UsersMeLists<TError = unknown>(
  args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>>
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
        ? getGetTasksV1UsersMeListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks.v1.users['@me'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksV1UsersMeLists<TError = unknown>(
  args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>>
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
        ? getGetTasksV1UsersMeListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tasks.v1.users['@me'].lists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTasksV1UsersMeListsKey() {
  return ['tasks', '/tasks/v1/users/@me/lists', 'POST'] as const
}

export function usePostTasksV1UsersMeLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTasksV1UsersMeListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$post']> },
      ) => parseResponse(client.tasks.v1.users['@me'].lists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTasksV1UsersMeListsTasklistKey(
  args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>,
) {
  return ['tasks', '/tasks/v1/users/@me/lists/:tasklist', args] as const
}

export function useGetTasksV1UsersMeListsTasklist<TError = unknown>(
  args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>>
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
        ? getGetTasksV1UsersMeListsTasklistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tasks.v1.users['@me'].lists[':tasklist'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTasksV1UsersMeListsTasklist<TError = unknown>(
  args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>>
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
        ? getGetTasksV1UsersMeListsTasklistKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.tasks.v1.users['@me'].lists[':tasklist'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTasksV1UsersMeListsTasklistKey() {
  return ['tasks', '/tasks/v1/users/@me/lists/:tasklist', 'PUT'] as const
}

export function usePutTasksV1UsersMeListsTasklist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTasksV1UsersMeListsTasklistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$put']>
        },
      ) => parseResponse(client.tasks.v1.users['@me'].lists[':tasklist'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTasksV1UsersMeListsTasklistKey() {
  return ['tasks', '/tasks/v1/users/@me/lists/:tasklist', 'DELETE'] as const
}

export function useDeleteTasksV1UsersMeListsTasklist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTasksV1UsersMeListsTasklistKey()
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
            (typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$delete']
          >
        },
      ) =>
        parseResponse(client.tasks.v1.users['@me'].lists[':tasklist'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTasksV1UsersMeListsTasklistKey() {
  return ['tasks', '/tasks/v1/users/@me/lists/:tasklist', 'PATCH'] as const
}

export function usePatchTasksV1UsersMeListsTasklist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTasksV1UsersMeListsTasklistKey()
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
            (typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$patch']
          >
        },
      ) =>
        parseResponse(client.tasks.v1.users['@me'].lists[':tasklist'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
