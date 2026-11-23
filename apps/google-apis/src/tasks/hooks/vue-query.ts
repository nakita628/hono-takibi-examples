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

export function getTasksKey() {
  return ['tasks'] as const
}

export function getPostTasksV1ListsTasklistClearMutationKey() {
  return ['tasks', '/tasks/v1/lists/:tasklist/clear', 'POST'] as const
}

export function getPostTasksV1ListsTasklistClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['clear']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['clear']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksV1ListsTasklistClearMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['clear']['$post']>,
    ) {
      return parseResponse(client.tasks.v1.lists[':tasklist'].clear.$post(args, options))
    },
  })
}

export function usePostTasksV1ListsTasklistClear<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['clear']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['clear']['$post']>,
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
  const mutationDefaults = getPostTasksV1ListsTasklistClearMutationOptions<TError, TOnMutateResult>(
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

export function getTasksV1ListsTasklistTasksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>
  >,
) {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks', toValue(args)] as const
}

export function getTasksV1ListsTasklistTasksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksV1ListsTasklistTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks.v1.lists[':tasklist'].tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksV1ListsTasklistTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksV1ListsTasklistTasksQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksV1ListsTasklistTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksV1ListsTasklistTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks.v1.lists[':tasklist'].tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTasksV1ListsTasklistTasksMutationKey() {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks', 'POST'] as const
}

export function getPostTasksV1ListsTasklistTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksV1ListsTasklistTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$post']>,
    ) {
      return parseResponse(client.tasks.v1.lists[':tasklist'].tasks.$post(args, options))
    },
  })
}

export function usePostTasksV1ListsTasklistTasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks']['$post']>,
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
  const mutationDefaults = getPostTasksV1ListsTasklistTasksMutationOptions<TError, TOnMutateResult>(
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

export function getTasksV1ListsTasklistTasksTaskQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>
  >,
) {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks/:task', toValue(args)] as const
}

export function getTasksV1ListsTasklistTasksTaskQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksV1ListsTasklistTasksTaskQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks.v1.lists[':tasklist'].tasks[':task'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksV1ListsTasklistTasksTask<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>
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
                  ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTasksV1ListsTasklistTasksTaskQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksV1ListsTasklistTasksTaskQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksV1ListsTasklistTasksTaskQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks.v1.lists[':tasklist'].tasks[':task'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTasksV1ListsTasklistTasksTaskMutationKey() {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks/:task', 'PUT'] as const
}

export function getPutTasksV1ListsTasklistTasksTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTasksV1ListsTasklistTasksTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$put']>,
    ) {
      return parseResponse(client.tasks.v1.lists[':tasklist'].tasks[':task'].$put(args, options))
    },
  })
}

export function usePutTasksV1ListsTasklistTasksTask<
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
                  ReturnType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$put']>,
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
  const mutationDefaults = getPutTasksV1ListsTasklistTasksTaskMutationOptions<
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

export function getDeleteTasksV1ListsTasklistTasksTaskMutationKey() {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks/:task', 'DELETE'] as const
}

export function getDeleteTasksV1ListsTasklistTasksTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTasksV1ListsTasklistTasksTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$delete']
      >,
    ) {
      return parseResponse(client.tasks.v1.lists[':tasklist'].tasks[':task'].$delete(args, options))
    },
  })
}

export function useDeleteTasksV1ListsTasklistTasksTask<
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
                    (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$delete']
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
  const mutationDefaults = getDeleteTasksV1ListsTasklistTasksTaskMutationOptions<
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

export function getPatchTasksV1ListsTasklistTasksTaskMutationKey() {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks/:task', 'PATCH'] as const
}

export function getPatchTasksV1ListsTasklistTasksTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTasksV1ListsTasklistTasksTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$patch']
      >,
    ) {
      return parseResponse(client.tasks.v1.lists[':tasklist'].tasks[':task'].$patch(args, options))
    },
  })
}

export function usePatchTasksV1ListsTasklistTasksTask<
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
                    (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['$patch']>,
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
  const mutationDefaults = getPatchTasksV1ListsTasklistTasksTaskMutationOptions<
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

export function getPostTasksV1ListsTasklistTasksTaskMoveMutationKey() {
  return ['tasks', '/tasks/v1/lists/:tasklist/tasks/:task/move', 'POST'] as const
}

export function getPostTasksV1ListsTasklistTasksTaskMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['move']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTasksV1ListsTasklistTasksTaskMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['move']['$post']
      >,
    ) {
      return parseResponse(
        client.tasks.v1.lists[':tasklist'].tasks[':task'].move.$post(args, options),
      )
    },
  })
}

export function usePostTasksV1ListsTasklistTasksTaskMove<
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
                    (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['move']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.tasks.v1.lists)[':tasklist']['tasks'][':task']['move']['$post']
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
  const mutationDefaults = getPostTasksV1ListsTasklistTasksTaskMoveMutationOptions<
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

export function getTasksV1UsersMeListsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>>,
) {
  return ['tasks', '/tasks/v1/users/@me/lists', toValue(args)] as const
}

export function getTasksV1UsersMeListsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksV1UsersMeListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks.v1.users['@me'].lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksV1UsersMeLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTasksV1UsersMeListsQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksV1UsersMeListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksV1UsersMeListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks.v1.users['@me'].lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTasksV1UsersMeListsMutationKey() {
  return ['tasks', '/tasks/v1/users/@me/lists', 'POST'] as const
}

export function getPostTasksV1UsersMeListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTasksV1UsersMeListsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$post']>,
    ) {
      return parseResponse(client.tasks.v1.users['@me'].lists.$post(args, options))
    },
  })
}

export function usePostTasksV1UsersMeLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks.v1.users)['@me']['lists']['$post']>,
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
  const mutationDefaults = getPostTasksV1UsersMeListsMutationOptions<TError, TOnMutateResult>(
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

export function getTasksV1UsersMeListsTasklistQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>
  >,
) {
  return ['tasks', '/tasks/v1/users/@me/lists/:tasklist', toValue(args)] as const
}

export function getTasksV1UsersMeListsTasklistQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTasksV1UsersMeListsTasklistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tasks.v1.users['@me'].lists[':tasklist'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTasksV1UsersMeListsTasklist<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>
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
                  ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getTasksV1UsersMeListsTasklistQueryKey>
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
          Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTasksV1UsersMeListsTasklistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTasksV1UsersMeListsTasklistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tasks.v1.users['@me'].lists[':tasklist'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutTasksV1UsersMeListsTasklistMutationKey() {
  return ['tasks', '/tasks/v1/users/@me/lists/:tasklist', 'PUT'] as const
}

export function getPutTasksV1UsersMeListsTasklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTasksV1UsersMeListsTasklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$put']>,
    ) {
      return parseResponse(client.tasks.v1.users['@me'].lists[':tasklist'].$put(args, options))
    },
  })
}

export function usePutTasksV1UsersMeListsTasklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$put']>,
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
  const mutationDefaults = getPutTasksV1UsersMeListsTasklistMutationOptions<
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

export function getDeleteTasksV1UsersMeListsTasklistMutationKey() {
  return ['tasks', '/tasks/v1/users/@me/lists/:tasklist', 'DELETE'] as const
}

export function getDeleteTasksV1UsersMeListsTasklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTasksV1UsersMeListsTasklistMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$delete']
      >,
    ) {
      return parseResponse(client.tasks.v1.users['@me'].lists[':tasklist'].$delete(args, options))
    },
  })
}

export function useDeleteTasksV1UsersMeListsTasklist<
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
                  ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$delete']>,
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
  const mutationDefaults = getDeleteTasksV1UsersMeListsTasklistMutationOptions<
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

export function getPatchTasksV1UsersMeListsTasklistMutationKey() {
  return ['tasks', '/tasks/v1/users/@me/lists/:tasklist', 'PATCH'] as const
}

export function getPatchTasksV1UsersMeListsTasklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTasksV1UsersMeListsTasklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$patch']>,
    ) {
      return parseResponse(client.tasks.v1.users['@me'].lists[':tasklist'].$patch(args, options))
    },
  })
}

export function usePatchTasksV1UsersMeListsTasklist<
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
                  ReturnType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tasks.v1.users)['@me']['lists'][':tasklist']['$patch']>,
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
  const mutationDefaults = getPatchTasksV1UsersMeListsTasklistMutationOptions<
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
