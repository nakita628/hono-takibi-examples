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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1StatusClusterQueryKey() {
  return ['v1', '/v1/status/cluster'] as const
}

export function getV1StatusClusterQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1StatusClusterQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.status.cluster.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1StatusCluster<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.cluster.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.cluster.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.cluster.$get>>>
            >
          >,
          ReturnType<typeof getV1StatusClusterQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.cluster.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatusClusterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1StatusClusterQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.status.cluster.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1HealthQueryKey() {
  return ['v1', '/v1/health'] as const
}

export function getV1HealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1HealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
          >,
          ReturnType<typeof getV1HealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1HealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1HealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1TasksQueryKey() {
  return ['v1', '/v1/tasks'] as const
}

export function getV1TasksQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1TasksQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tasks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Tasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tasks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tasks.$get>>>>
          >,
          ReturnType<typeof getV1TasksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1TasksQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tasks.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1TasksMutationKey() {
  return ['v1', '/v1/tasks', 'POST'] as const
}

export function getPostV1TasksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tasks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.tasks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1TasksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.tasks.$post>) {
      return parseResponse(client.v1.tasks.$post(args, options))
    },
  })
}

export function usePostV1Tasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tasks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.tasks.$post>,
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
  const mutationDefaults = getPostV1TasksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1TasksNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tasks)[':name']['$get']>>,
) {
  return ['v1', '/v1/tasks/:name', toValue(args)] as const
}

export function getV1TasksNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tasks)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1TasksNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.tasks[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1TasksName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tasks)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.tasks)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tasks)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tasks)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1TasksNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tasks)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TasksNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1TasksNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.tasks[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1TasksNameMutationKey() {
  return ['v1', '/v1/tasks/:name', 'DELETE'] as const
}

export function getDeleteV1TasksNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tasks)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.tasks)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1TasksNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.tasks)[':name']['$delete']>) {
      return parseResponse(client.v1.tasks[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1TasksName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.tasks)[':name']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.tasks)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1TasksNameMutationOptions<TError, TOnMutateResult>(
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
