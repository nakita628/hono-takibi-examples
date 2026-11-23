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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1StatusClusterQueryKey() {
  return ['v1', '/v1/status/cluster'] as const
}

export function getV1StatusClusterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.cluster.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.cluster.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1StatusClusterQueryKey>
  >({
    queryKey: getV1StatusClusterQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.status.cluster.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1StatusCluster<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.cluster.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.status.cluster.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1StatusClusterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1StatusClusterQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1HealthQueryKey() {
  return ['v1', '/v1/health'] as const
}

export function getV1HealthQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1HealthQueryKey>
  >({
    queryKey: getV1HealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Health<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.health.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1HealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1HealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getV1TasksQueryKey() {
  return ['v1', '/v1/tasks'] as const
}

export function getV1TasksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tasks.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tasks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1TasksQueryKey>
  >({
    queryKey: getV1TasksQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tasks.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Tasks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tasks.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tasks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV1TasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TasksQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostV1Tasks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.tasks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.tasks.$post>,
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
    const mutationDefaults = getPostV1TasksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1TasksNameQueryKey(
  args: InferRequestType<(typeof client.v1.tasks)[':name']['$get']>,
) {
  return ['v1', '/v1/tasks/:name', args] as const
}

export function getV1TasksNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tasks)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.tasks)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tasks)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1TasksNameQueryKey>
  >({
    queryKey: getV1TasksNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.tasks[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1TasksName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tasks)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.tasks)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tasks)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1TasksNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1TasksNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createDeleteV1TasksName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.tasks)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.tasks)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1TasksNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
