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

export function getApiKey() {
  return ['api'] as const
}

export function getClusterKey() {
  return ['cluster'] as const
}

export function getNamespacesKey() {
  return ['namespaces'] as const
}

export function getSystemInfoKey() {
  return ['system-info'] as const
}

export function getApiV1ClusterInfoQueryKey() {
  return ['api', '/api/v1/cluster-info'] as const
}

export function getApiV1ClusterInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['cluster-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['cluster-info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1ClusterInfoQueryKey>
  >({
    queryKey: getApiV1ClusterInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['cluster-info'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1ClusterInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['cluster-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1)['cluster-info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1ClusterInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1ClusterInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getApiV1NamespacesQueryKey(
  args: InferRequestType<typeof client.api.v1.namespaces.$get>,
) {
  return ['api', '/api/v1/namespaces', args] as const
}

export function getApiV1NamespacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.v1.namespaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesQueryKey>
  >({
    queryKey: getApiV1NamespacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1Namespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.namespaces.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1NamespacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1NamespacesMutationKey() {
  return ['api', '/api/v1/namespaces', 'POST'] as const
}

export function getPostApiV1NamespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.v1.namespaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.namespaces.$post>) {
      return parseResponse(client.api.v1.namespaces.$post(args, options))
    },
  })
}

export function createPostApiV1Namespaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.namespaces.$post>,
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
    const mutationDefaults = getPostApiV1NamespacesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceQueryKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace', args] as const
}

export function getApiV1NamespacesNamespaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceQueryKey>
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
      ...getApiV1NamespacesNamespaceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceActivitiesQueryKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/activities', args] as const
}

export function getApiV1NamespacesNamespaceActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceActivitiesQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceActivitiesQueryKey>
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
      ...getApiV1NamespacesNamespaceActivitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceActivitiesDeprecatedPauseMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities-deprecated/pause', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesDeprecatedPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesDeprecatedPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['activities-deprecated'].pause.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesDeprecatedPause<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesDeprecatedPauseMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivitiesDeprecatedResetMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities-deprecated/reset', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesDeprecatedResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesDeprecatedResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['activities-deprecated'].reset.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesDeprecatedReset<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesDeprecatedResetMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivitiesDeprecatedUnpauseMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities-deprecated/unpause', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesDeprecatedUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesDeprecatedUnpauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['activities-deprecated'].unpause.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesDeprecatedUnpause<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesDeprecatedUnpauseMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptionsMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/activities-deprecated/update-options',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['activities-deprecated']['update-options'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptions<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptionsMutationOptions<
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

export function getApiV1NamespacesNamespaceActivitiesActivityIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId', args] as const
}

export function getApiV1NamespacesNamespaceActivitiesActivityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceActivitiesActivityIdQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceActivitiesActivityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceActivitiesActivityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceActivitiesActivityIdQueryKey>
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
      ...getApiV1NamespacesNamespaceActivitiesActivityIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesActivityIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesActivityId<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceActivitiesActivityIdMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdCancelMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/cancel', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesActivityIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesActivityIdCancel<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesActivityIdCancelMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdCompleteMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/complete', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesActivityIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId'].complete.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesActivityIdComplete<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesActivityIdCompleteMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdFailMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/fail', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdFailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesActivityIdFailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId'].fail.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesActivityIdFail<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceActivitiesActivityIdFailMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdHeartbeatMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/heartbeat', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesActivityIdHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId'].heartbeat.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesActivityIdHeartbeat<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesActivityIdHeartbeatMutationOptions<
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

export function getApiV1NamespacesNamespaceActivitiesActivityIdOutcomeQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/outcome', args] as const
}

export function getApiV1NamespacesNamespaceActivitiesActivityIdOutcomeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceActivitiesActivityIdOutcomeQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceActivitiesActivityIdOutcomeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId'].outcome.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceActivitiesActivityIdOutcome<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceActivitiesActivityIdOutcomeQueryKey>
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
      ...getApiV1NamespacesNamespaceActivitiesActivityIdOutcomeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdPauseMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/pause', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesActivityIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId'].pause.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesActivityIdPause<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesActivityIdPauseMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdResetMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/reset', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesActivityIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId'].reset.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesActivityIdReset<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesActivityIdResetMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceledMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/activities/:activityId/resolve-as-canceled',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId'][
          'resolve-as-canceled'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceled<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceledMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdTerminateMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/terminate', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesActivityIdTerminateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId'].terminate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesActivityIdTerminate<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesActivityIdTerminateMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdUnpauseMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/unpause', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesActivityIdUnpauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId'].unpause.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesActivityIdUnpause<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesActivityIdUnpauseMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptionsMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/activities/:activityId/update-options',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].activities[':activityId']['update-options'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptions<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptionsMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivityCompleteMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activity-complete', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivityCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activity-complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivityCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activity-complete']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['activity-complete'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivityComplete<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activity-complete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activity-complete']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceActivityCompleteMutationOptions<
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

export function getApiV1NamespacesNamespaceActivityCountQueryKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/activity-count', args] as const
}

export function getApiV1NamespacesNamespaceActivityCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceActivityCountQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceActivityCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['activity-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceActivityCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceActivityCountQueryKey>
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
      ...getApiV1NamespacesNamespaceActivityCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceActivityFailMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activity-fail', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivityFailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activity-fail']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-fail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivityFailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activity-fail']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['activity-fail'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivityFail<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activity-fail']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-fail']['$post']>,
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceActivityFailMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivityHeartbeatMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activity-heartbeat', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivityHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activity-heartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activity-heartbeat']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivityHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activity-heartbeat']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['activity-heartbeat'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivityHeartbeat<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activity-heartbeat']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activity-heartbeat']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceActivityHeartbeatMutationOptions<
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

export function getPostApiV1NamespacesNamespaceActivityResolveAsCanceledMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/activity-resolve-as-canceled', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceActivityResolveAsCanceledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceActivityResolveAsCanceledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['activity-resolve-as-canceled'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceActivityResolveAsCanceled<
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
                  (typeof client.api.v1.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceActivityResolveAsCanceledMutationOptions<
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

export function getApiV1NamespacesNamespaceArchivedWorkflowsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/archived-workflows', args] as const
}

export function getApiV1NamespacesNamespaceArchivedWorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceArchivedWorkflowsQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceArchivedWorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['archived-workflows'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceArchivedWorkflows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceArchivedWorkflowsQueryKey>
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
      ...getApiV1NamespacesNamespaceArchivedWorkflowsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceBatchOperationsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/batch-operations', args] as const
}

export function getApiV1NamespacesNamespaceBatchOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceBatchOperationsQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceBatchOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['batch-operations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceBatchOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceBatchOperationsQueryKey>
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
      ...getApiV1NamespacesNamespaceBatchOperationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceBatchOperationsJobIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/batch-operations/:jobId', args] as const
}

export function getApiV1NamespacesNamespaceBatchOperationsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceBatchOperationsJobIdQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceBatchOperationsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['batch-operations'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceBatchOperationsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceBatchOperationsJobIdQueryKey>
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
      ...getApiV1NamespacesNamespaceBatchOperationsJobIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceBatchOperationsJobIdMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/batch-operations/:jobId', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceBatchOperationsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceBatchOperationsJobIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['batch-operations'][':jobId'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceBatchOperationsJobId<
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
                  (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceBatchOperationsJobIdMutationOptions<
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

export function getPostApiV1NamespacesNamespaceBatchOperationsJobIdStopMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/batch-operations/:jobId/stop', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceBatchOperationsJobIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceBatchOperationsJobIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['batch-operations'][':jobId'].stop.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceBatchOperationsJobIdStop<
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
                  (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceBatchOperationsJobIdStopMutationOptions<
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

export function getPostApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesNameMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/current-deployment/:deployment.series_name',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['current-deployment'][
          ':deployment.series_name'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesName<
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
                  (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesNameMutationOptions<
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

export function getApiV1NamespacesNamespaceCurrentDeploymentSeriesNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/current-deployment/:seriesName', args] as const
}

export function getApiV1NamespacesNamespaceCurrentDeploymentSeriesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceCurrentDeploymentSeriesNameQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceCurrentDeploymentSeriesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['current-deployment'][':seriesName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceCurrentDeploymentSeriesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceCurrentDeploymentSeriesNameQueryKey>
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
      ...getApiV1NamespacesNamespaceCurrentDeploymentSeriesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceDeploymentsQueryKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/deployments', args] as const
}

export function getApiV1NamespacesNamespaceDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceDeploymentsQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceDeploymentsQueryKey>
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
      ...getApiV1NamespacesNamespaceDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/deployments/:deployment.series_name/:deployment.build_id',
    args,
  ] as const
}

export function getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdQueryKey
    >
  >({
    queryKey:
      getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].deployments[':deployment.series_name'][
          ':deployment.build_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdQueryKey
        >
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
      ...getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/deployments/:deployment.series_name/:deployment.build_id/reachability',
    args,
  ] as const
}

export function getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityQueryKey
    >
  >({
    queryKey:
      getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].deployments[':deployment.series_name'][
          ':deployment.build_id'
        ].reachability.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityQueryKey
        >
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
      ...getApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceNexusOperationCountQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/nexus-operation-count', args] as const
}

export function getApiV1NamespacesNamespaceNexusOperationCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceNexusOperationCountQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceNexusOperationCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['nexus-operation-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceNexusOperationCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceNexusOperationCountQueryKey>
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
      ...getApiV1NamespacesNamespaceNexusOperationCountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceNexusOperationsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/nexus-operations', args] as const
}

export function getApiV1NamespacesNamespaceNexusOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceNexusOperationsQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceNexusOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['nexus-operations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceNexusOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceNexusOperationsQueryKey>
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
      ...getApiV1NamespacesNamespaceNexusOperationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceNexusOperationsOperationIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/nexus-operations/:operationId', args] as const
}

export function getApiV1NamespacesNamespaceNexusOperationsOperationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceNexusOperationsOperationIdQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceNexusOperationsOperationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceNexusOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceNexusOperationsOperationIdQueryKey>
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
      ...getApiV1NamespacesNamespaceNexusOperationsOperationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceNexusOperationsOperationIdMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/nexus-operations/:operationId', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceNexusOperationsOperationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceNexusOperationsOperationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceNexusOperationsOperationId<
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
                  (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceNexusOperationsOperationIdMutationOptions<
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

export function getPostApiV1NamespacesNamespaceNexusOperationsOperationIdCancelMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/nexus-operations/:operationId/cancel',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceNexusOperationsOperationIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceNexusOperationsOperationIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceNexusOperationsOperationIdCancel<
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
                  (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceNexusOperationsOperationIdCancelMutationOptions<
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

export function getApiV1NamespacesNamespaceNexusOperationsOperationIdPollQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/nexus-operations/:operationId/poll', args] as const
}

export function getApiV1NamespacesNamespaceNexusOperationsOperationIdPollQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceNexusOperationsOperationIdPollQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceNexusOperationsOperationIdPollQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].poll.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceNexusOperationsOperationIdPoll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceNexusOperationsOperationIdPollQueryKey>
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
      ...getApiV1NamespacesNamespaceNexusOperationsOperationIdPollQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceNexusOperationsOperationIdTerminateMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/nexus-operations/:operationId/terminate',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceNexusOperationsOperationIdTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceNexusOperationsOperationIdTerminateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].terminate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceNexusOperationsOperationIdTerminate<
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
                  (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceNexusOperationsOperationIdTerminateMutationOptions<
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

export function getApiV1NamespacesNamespaceScheduleCountQueryKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/schedule-count', args] as const
}

export function getApiV1NamespacesNamespaceScheduleCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceScheduleCountQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceScheduleCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['schedule-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceScheduleCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceScheduleCountQueryKey>
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
      ...getApiV1NamespacesNamespaceScheduleCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceSchedulesQueryKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/schedules', args] as const
}

export function getApiV1NamespacesNamespaceSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceSchedulesQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].schedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceSchedulesQueryKey>
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
      ...getApiV1NamespacesNamespaceSchedulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceSchedulesScheduleIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/schedules/:scheduleId', args] as const
}

export function getApiV1NamespacesNamespaceSchedulesScheduleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceSchedulesScheduleIdQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceSchedulesScheduleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceSchedulesScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceSchedulesScheduleIdQueryKey>
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
      ...getApiV1NamespacesNamespaceSchedulesScheduleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceSchedulesScheduleIdMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/schedules/:scheduleId', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceSchedulesScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceSchedulesScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceSchedulesScheduleId<
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
                  (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceSchedulesScheduleIdMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceSchedulesScheduleIdMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/schedules/:scheduleId', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceSchedulesScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceSchedulesScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1NamespacesNamespaceSchedulesScheduleId<
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
                  (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
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
    const mutationDefaults = getDeleteApiV1NamespacesNamespaceSchedulesScheduleIdMutationOptions<
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

export function getApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/schedules/:scheduleId/matching-times',
    args,
  ] as const
}

export function getApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].schedules[':scheduleId']['matching-times'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesQueryKey>
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
      ...getApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceSchedulesScheduleIdPatchMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/schedules/:scheduleId/patch', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceSchedulesScheduleIdPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceSchedulesScheduleIdPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].patch.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceSchedulesScheduleIdPatch<
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
                  (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceSchedulesScheduleIdPatchMutationOptions<
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

export function getPostApiV1NamespacesNamespaceSchedulesScheduleIdUpdateMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/schedules/:scheduleId/update', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceSchedulesScheduleIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceSchedulesScheduleIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].update.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceSchedulesScheduleIdUpdate<
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
                  (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceSchedulesScheduleIdUpdateMutationOptions<
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

export function getApiV1NamespacesNamespaceSearchAttributesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/search-attributes', args] as const
}

export function getApiV1NamespacesNamespaceSearchAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceSearchAttributesQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceSearchAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['search-attributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceSearchAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceSearchAttributesQueryKey>
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
      ...getApiV1NamespacesNamespaceSearchAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfigMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/task-queues/:taskQueue/update-config',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['task-queues'][':taskQueue']['update-config'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfig<
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
                  (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfigMutationOptions<
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

export function getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/task-queues/:taskQueue/worker-build-id-compatibility',
    args,
  ] as const
}

export function getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityQueryKey
    >
  >({
    queryKey:
      getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['task-queues'][':taskQueue'][
          'worker-build-id-compatibility'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityQueryKey
        >
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
      ...getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/task-queues/:taskQueue/worker-versioning-rules',
    args,
  ] as const
}

export function getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['task-queues'][':taskQueue'][
          'worker-versioning-rules'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesQueryKey
        >
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
      ...getApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceTaskQueuesTaskQueueNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/task-queues/:task_queue.name', args] as const
}

export function getApiV1NamespacesNamespaceTaskQueuesTaskQueueNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceTaskQueuesTaskQueueNameQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceTaskQueuesTaskQueueNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['task-queues'][':task_queue.name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceTaskQueuesTaskQueueName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceTaskQueuesTaskQueueNameQueryKey>
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
      ...getApiV1NamespacesNamespaceTaskQueuesTaskQueueNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceUpdateMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/update', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['update']['$post']>,
    ) {
      return parseResponse(client.api.v1.namespaces[':namespace'].update.$post(args, options))
    },
  })
}

export function createPostApiV1NamespacesNamespaceUpdate<
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
                ReturnType<(typeof client.api.v1.namespaces)[':namespace']['update']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['update']['$post']>,
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceUpdateMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
          ':deployment_version.deployment_name'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentName<
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
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameMutationOptions<
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

export function getApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id',
    args,
  ] as const
}

export function getApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdQueryKey
    >
  >({
    queryKey:
      getApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
          ':deployment_version.deployment_name'
        ][':deployment_version.build_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdQueryKey
        >
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
      ...getApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id',
    'DELETE',
  ] as const
}

export function getDeleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
          ':deployment_version.deployment_name'
        ][':deployment_version.build_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId<
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
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
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
    const mutationDefaults =
      getDeleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/update-compute-config',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
          ':deployment_version.deployment_name'
        ][':deployment_version.build_id']['update-compute-config'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfig<
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
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/update-metadata',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
          ':deployment_version.deployment_name'
        ][':deployment_version.build_id']['update-metadata'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadata<
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
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/validate-compute-config',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
          ':deployment_version.deployment_name'
        ][':deployment_version.build_id']['validate-compute-config'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfig<
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
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigMutationOptions<
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

export function getApiV1NamespacesNamespaceWorkerDeploymentsQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/worker-deployments', args] as const
}

export function getApiV1NamespacesNamespaceWorkerDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceWorkerDeploymentsQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceWorkerDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployments'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkerDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceWorkerDeploymentsQueryKey>
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
      ...getApiV1NamespacesNamespaceWorkerDeploymentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName', args] as const
}

export function getApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkerDeploymentsDeploymentName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameQueryKey>
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
      ...getApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentName<
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
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameMutationOptions<
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

export function getDeleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName',
    'DELETE',
  ] as const
}

export function getDeleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentName<
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
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
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
    const mutationDefaults =
      getDeleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName/set-current-version',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'][
          'set-current-version'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersion<
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
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName/set-manager',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'][
          'set-manager'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManager<
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
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName/set-ramping-version',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'][
          'set-ramping-version'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersion<
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
                  (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionMutationOptions<
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

export function getApiV1NamespacesNamespaceWorkerTaskReachabilityQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/worker-task-reachability', args] as const
}

export function getApiV1NamespacesNamespaceWorkerTaskReachabilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceWorkerTaskReachabilityQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceWorkerTaskReachabilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['worker-task-reachability'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkerTaskReachability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceWorkerTaskReachabilityQueryKey>
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
      ...getApiV1NamespacesNamespaceWorkerTaskReachabilityQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceWorkersQueryKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/workers', args] as const
}

export function getApiV1NamespacesNamespaceWorkersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceWorkersQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceWorkersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceWorkersQueryKey>
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
      ...getApiV1NamespacesNamespaceWorkersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/workers/describe/:workerInstanceKey', args] as const
}

export function getApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workers.describe[':workerInstanceKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyQueryKey>
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
      ...getApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceWorkersFetchConfigMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/workers/fetch-config', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceWorkersFetchConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workers']['fetch-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workers']['fetch-config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceWorkersFetchConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workers']['fetch-config']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workers['fetch-config'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkersFetchConfig<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workers']['fetch-config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workers']['fetch-config']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceWorkersFetchConfigMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkersHeartbeatMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/workers/heartbeat', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceWorkersHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workers']['heartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workers']['heartbeat']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceWorkersHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workers']['heartbeat']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workers.heartbeat.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkersHeartbeat<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workers']['heartbeat']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workers']['heartbeat']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceWorkersHeartbeatMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkersUpdateConfigMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/workers/update-config', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceWorkersUpdateConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workers']['update-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workers']['update-config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceWorkersUpdateConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workers']['update-config']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workers['update-config'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkersUpdateConfig<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workers']['update-config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workers']['update-config']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceWorkersUpdateConfigMutationOptions<
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

export function getApiV1NamespacesNamespaceWorkflowCountQueryKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/workflow-count', args] as const
}

export function getApiV1NamespacesNamespaceWorkflowCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceWorkflowCountQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceWorkflowCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['workflow-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkflowCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceWorkflowCountQueryKey>
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
      ...getApiV1NamespacesNamespaceWorkflowCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceWorkflowRulesQueryKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/workflow-rules', args] as const
}

export function getApiV1NamespacesNamespaceWorkflowRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceWorkflowRulesQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceWorkflowRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['workflow-rules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkflowRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceWorkflowRulesQueryKey>
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
      ...getApiV1NamespacesNamespaceWorkflowRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceWorkflowRulesMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/workflow-rules', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceWorkflowRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['workflow-rules'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowRules<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceWorkflowRulesMutationOptions<
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

export function getApiV1NamespacesNamespaceWorkflowRulesRuleIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/workflow-rules/:ruleId', args] as const
}

export function getApiV1NamespacesNamespaceWorkflowRulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceWorkflowRulesRuleIdQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceWorkflowRulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['workflow-rules'][':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkflowRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceWorkflowRulesRuleIdQueryKey>
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
      ...getApiV1NamespacesNamespaceWorkflowRulesRuleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1NamespacesNamespaceWorkflowRulesRuleIdMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/workflow-rules/:ruleId', 'DELETE'] as const
}

export function getDeleteApiV1NamespacesNamespaceWorkflowRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NamespacesNamespaceWorkflowRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace']['workflow-rules'][':ruleId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteApiV1NamespacesNamespaceWorkflowRulesRuleId<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
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
    const mutationDefaults = getDeleteApiV1NamespacesNamespaceWorkflowRulesRuleIdMutationOptions<
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

export function getApiV1NamespacesNamespaceWorkflowsQueryKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/workflows', args] as const
}

export function getApiV1NamespacesNamespaceWorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceWorkflowsQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceWorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkflows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceWorkflowsQueryKey>
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
      ...getApiV1NamespacesNamespaceWorkflowsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id', args] as const
}

export function getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkflowsExecutionWorkflowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryKey>
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
      ...getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id/history',
    args,
  ] as const
}

export function getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'].history.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryQueryKey>
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
      ...getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseQueryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id/history-reverse',
    args,
  ] as const
}

export function getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseQueryKey>
  >({
    queryKey: getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'][
          'history-reverse'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseQueryKey
        >
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
      ...getApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id/query/:query.query_type',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'].query[
          ':query.query_type'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryType<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id/trigger-rule',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'][
          'trigger-rule'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRule<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/workflows/:workflowId', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflowId'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowId<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/complete',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
          ':activityId'
        ].complete.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdComplete<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/fail',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
          ':activityId'
        ].fail.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFail<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/heartbeat',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
          ':activityId'
        ].heartbeat.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeat<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/pause',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
          ':activityId'
        ].pause.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPause<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/reset',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
          ':activityId'
        ].reset.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdReset<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/resolve-as-canceled',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'][
          'resolve-as-canceled'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceled<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/unpause',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
          ':activityId'
        ].unpause.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpause<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/update-options',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'][
          'update-options'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptions<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdPauseMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/workflows/:workflowId/pause', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflowId'].pause.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowIdPause<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
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
    const mutationDefaults = getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdPauseMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/signal-with-start/:signalName',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflowId']['signal-with-start'][
          ':signalName'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalName<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpauseMutationKey() {
  return ['api', '/api/v1/namespaces/:namespace/workflows/:workflowId/unpause', 'POST'] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflowId'].unpause.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpause<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpauseMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/cancel',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[
          ':workflow_execution.workflow_id'
        ].cancel.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancel<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/reset',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[
          ':workflow_execution.workflow_id'
        ].reset.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdReset<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/signal/:signalName',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].signal[
          ':signalName'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalName<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/terminate',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[
          ':workflow_execution.workflow_id'
        ].terminate.$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminate<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/update-options',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'][
          'update-options'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptions<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsMutationOptions<
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

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameMutationKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/update/:request.input.name',
    'POST',
  ] as const
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].update[
          ':request.input.name'
        ].$post(args, options),
      )
    },
  })
}

export function createPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputName<
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
                  (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
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
    const mutationDefaults =
      getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameMutationOptions<
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

export function getApiV1NexusEndpointsQueryKey(
  args: InferRequestType<typeof client.api.v1.nexus.endpoints.$get>,
) {
  return ['api', '/api/v1/nexus/endpoints', args] as const
}

export function getApiV1NexusEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nexus.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.v1.nexus.endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nexus.endpoints.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NexusEndpointsQueryKey>
  >({
    queryKey: getApiV1NexusEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.nexus.endpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NexusEndpoints<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nexus.endpoints.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.v1.nexus.endpoints.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nexus.endpoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NexusEndpointsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1NexusEndpointsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1NexusEndpointsMutationKey() {
  return ['api', '/api/v1/nexus/endpoints', 'POST'] as const
}

export function getPostApiV1NexusEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nexus.endpoints.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.nexus.endpoints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NexusEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.nexus.endpoints.$post>) {
      return parseResponse(client.api.v1.nexus.endpoints.$post(args, options))
    },
  })
}

export function createPostApiV1NexusEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nexus.endpoints.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.v1.nexus.endpoints.$post>,
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
    const mutationDefaults = getPostApiV1NexusEndpointsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1NexusEndpointsIdQueryKey(
  args: InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>,
) {
  return ['api', '/api/v1/nexus/endpoints/:id', args] as const
}

export function getApiV1NexusEndpointsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1NexusEndpointsIdQueryKey>
  >({
    queryKey: getApiV1NexusEndpointsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.nexus.endpoints[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1NexusEndpointsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1NexusEndpointsIdQueryKey>
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
      ...getApiV1NexusEndpointsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteApiV1NexusEndpointsIdMutationKey() {
  return ['api', '/api/v1/nexus/endpoints/:id', 'DELETE'] as const
}

export function getDeleteApiV1NexusEndpointsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiV1NexusEndpointsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.v1.nexus.endpoints[':id'].$delete(args, options))
    },
  })
}

export function createDeleteApiV1NexusEndpointsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteApiV1NexusEndpointsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1NexusEndpointsIdUpdateMutationKey() {
  return ['api', '/api/v1/nexus/endpoints/:id/update', 'POST'] as const
}

export function getPostApiV1NexusEndpointsIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1NexusEndpointsIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['update']['$post']>,
    ) {
      return parseResponse(client.api.v1.nexus.endpoints[':id'].update.$post(args, options))
    },
  })
}

export function createPostApiV1NexusEndpointsIdUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['update']['$post']>,
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
    const mutationDefaults = getPostApiV1NexusEndpointsIdUpdateMutationOptions<
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

export function getApiV1SystemInfoQueryKey() {
  return ['api', '/api/v1/system-info'] as const
}

export function getApiV1SystemInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['system-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['system-info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1SystemInfoQueryKey>
  >({
    queryKey: getApiV1SystemInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['system-info'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1SystemInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['system-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['system-info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiV1SystemInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiV1SystemInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getClusterQueryKey() {
  return ['cluster', '/cluster'] as const
}

export function getClusterQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getClusterQueryKey>
  >({
    queryKey: getClusterQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cluster.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createCluster<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getClusterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClusterQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getClusterNamespacesQueryKey(
  args: InferRequestType<typeof client.cluster.namespaces.$get>,
) {
  return ['cluster', '/cluster/namespaces', args] as const
}

export function getClusterNamespacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cluster.namespaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.namespaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getClusterNamespacesQueryKey>
  >({
    queryKey: getClusterNamespacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cluster.namespaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createClusterNamespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cluster.namespaces.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cluster.namespaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClusterNamespacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getClusterNamespacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostClusterNamespacesMutationKey() {
  return ['cluster', '/cluster/namespaces', 'POST'] as const
}

export function getPostClusterNamespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.namespaces.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.cluster.namespaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClusterNamespacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cluster.namespaces.$post>) {
      return parseResponse(client.cluster.namespaces.$post(args, options))
    },
  })
}

export function createPostClusterNamespaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cluster.namespaces.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cluster.namespaces.$post>,
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
    const mutationDefaults = getPostClusterNamespacesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClusterNamespacesNamespaceQueryKey(
  args: InferRequestType<(typeof client.cluster.namespaces)[':namespace']['$get']>,
) {
  return ['cluster', '/cluster/namespaces/:namespace', args] as const
}

export function getClusterNamespacesNamespaceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cluster.namespaces)[':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cluster.namespaces)[':namespace']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cluster.namespaces)[':namespace']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClusterNamespacesNamespaceQueryKey>
  >({
    queryKey: getClusterNamespacesNamespaceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cluster.namespaces[':namespace'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClusterNamespacesNamespace<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cluster.namespaces)[':namespace']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cluster.namespaces)[':namespace']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cluster.namespaces)[':namespace']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClusterNamespacesNamespaceQueryKey>
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
      ...getClusterNamespacesNamespaceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getClusterNamespacesNamespaceSearchAttributesQueryKey(
  args: InferRequestType<
    (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
  >,
) {
  return ['cluster', '/cluster/namespaces/:namespace/search-attributes', args] as const
}

export function getClusterNamespacesNamespaceSearchAttributesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClusterNamespacesNamespaceSearchAttributesQueryKey>
  >({
    queryKey: getClusterNamespacesNamespaceSearchAttributesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cluster.namespaces[':namespace']['search-attributes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClusterNamespacesNamespaceSearchAttributes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClusterNamespacesNamespaceSearchAttributesQueryKey>
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
      ...getClusterNamespacesNamespaceSearchAttributesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostClusterNamespacesNamespaceUpdateMutationKey() {
  return ['cluster', '/cluster/namespaces/:namespace/update', 'POST'] as const
}

export function getPostClusterNamespacesNamespaceUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cluster.namespaces)[':namespace']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cluster.namespaces)[':namespace']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClusterNamespacesNamespaceUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cluster.namespaces)[':namespace']['update']['$post']>,
    ) {
      return parseResponse(client.cluster.namespaces[':namespace'].update.$post(args, options))
    },
  })
}

export function createPostClusterNamespacesNamespaceUpdate<
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
                ReturnType<(typeof client.cluster.namespaces)[':namespace']['update']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cluster.namespaces)[':namespace']['update']['$post']>,
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
    const mutationDefaults = getPostClusterNamespacesNamespaceUpdateMutationOptions<
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

export function getClusterNexusEndpointsQueryKey(
  args: InferRequestType<typeof client.cluster.nexus.endpoints.$get>,
) {
  return ['cluster', '/cluster/nexus/endpoints', args] as const
}

export function getClusterNexusEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cluster.nexus.endpoints.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.cluster.nexus.endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cluster.nexus.endpoints.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClusterNexusEndpointsQueryKey>
  >({
    queryKey: getClusterNexusEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cluster.nexus.endpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClusterNexusEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cluster.nexus.endpoints.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cluster.nexus.endpoints.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cluster.nexus.endpoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClusterNexusEndpointsQueryKey>
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
      ...getClusterNexusEndpointsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostClusterNexusEndpointsMutationKey() {
  return ['cluster', '/cluster/nexus/endpoints', 'POST'] as const
}

export function getPostClusterNexusEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cluster.nexus.endpoints.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cluster.nexus.endpoints.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostClusterNexusEndpointsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cluster.nexus.endpoints.$post>) {
      return parseResponse(client.cluster.nexus.endpoints.$post(args, options))
    },
  })
}

export function createPostClusterNexusEndpoints<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cluster.nexus.endpoints.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cluster.nexus.endpoints.$post>,
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
    const mutationDefaults = getPostClusterNexusEndpointsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getClusterNexusEndpointsIdQueryKey(
  args: InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>,
) {
  return ['cluster', '/cluster/nexus/endpoints/:id', args] as const
}

export function getClusterNexusEndpointsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClusterNexusEndpointsIdQueryKey>
  >({
    queryKey: getClusterNexusEndpointsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cluster.nexus.endpoints[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClusterNexusEndpointsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getClusterNexusEndpointsIdQueryKey>
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
      ...getClusterNexusEndpointsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteClusterNexusEndpointsIdMutationKey() {
  return ['cluster', '/cluster/nexus/endpoints/:id', 'DELETE'] as const
}

export function getDeleteClusterNexusEndpointsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteClusterNexusEndpointsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$delete']>,
    ) {
      return parseResponse(client.cluster.nexus.endpoints[':id'].$delete(args, options))
    },
  })
}

export function createDeleteClusterNexusEndpointsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteClusterNexusEndpointsIdMutationOptions<
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

export function getPostClusterNexusEndpointsIdUpdateMutationKey() {
  return ['cluster', '/cluster/nexus/endpoints/:id/update', 'POST'] as const
}

export function getPostClusterNexusEndpointsIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostClusterNexusEndpointsIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['update']['$post']>,
    ) {
      return parseResponse(client.cluster.nexus.endpoints[':id'].update.$post(args, options))
    },
  })
}

export function createPostClusterNexusEndpointsIdUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['update']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['update']['$post']>,
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
    const mutationDefaults = getPostClusterNexusEndpointsIdUpdateMutationOptions<
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

export function getNamespacesNamespaceActivitiesQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activities']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/activities', args] as const
}

export function getNamespacesNamespaceActivitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceActivitiesQueryKey>
  >({
    queryKey: getNamespacesNamespaceActivitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].activities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceActivities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.namespaces)[':namespace']['activities']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activities']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceActivitiesQueryKey>
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
      ...getNamespacesNamespaceActivitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceActivitiesDeprecatedPauseMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activities-deprecated/pause', 'POST'] as const
}

export function getPostNamespacesNamespaceActivitiesDeprecatedPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesDeprecatedPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['activities-deprecated'].pause.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesDeprecatedPause<
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
                  (typeof client.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivitiesDeprecatedPauseMutationOptions<
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

export function getPostNamespacesNamespaceActivitiesDeprecatedResetMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activities-deprecated/reset', 'POST'] as const
}

export function getPostNamespacesNamespaceActivitiesDeprecatedResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesDeprecatedResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['activities-deprecated'].reset.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesDeprecatedReset<
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
                  (typeof client.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivitiesDeprecatedResetMutationOptions<
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

export function getPostNamespacesNamespaceActivitiesDeprecatedUnpauseMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activities-deprecated/unpause', 'POST'] as const
}

export function getPostNamespacesNamespaceActivitiesDeprecatedUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesDeprecatedUnpauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['activities-deprecated'].unpause.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesDeprecatedUnpause<
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
                  (typeof client.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivitiesDeprecatedUnpauseMutationOptions<
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

export function getPostNamespacesNamespaceActivitiesDeprecatedUpdateOptionsMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/activities-deprecated/update-options',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceActivitiesDeprecatedUpdateOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesDeprecatedUpdateOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['activities-deprecated']['update-options'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesDeprecatedUpdateOptions<
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
                  (typeof client.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceActivitiesDeprecatedUpdateOptionsMutationOptions<
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

export function getNamespacesNamespaceActivitiesActivityIdQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId', args] as const
}

export function getNamespacesNamespaceActivitiesActivityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceActivitiesActivityIdQueryKey>
  >({
    queryKey: getNamespacesNamespaceActivitiesActivityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceActivitiesActivityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceActivitiesActivityIdQueryKey>
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
      ...getNamespacesNamespaceActivitiesActivityIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceActivitiesActivityIdMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId', 'POST'] as const
}

export function getPostNamespacesNamespaceActivitiesActivityIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesActivityIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities'][':activityId']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesActivityId<
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
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities'][':activityId']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivitiesActivityIdMutationOptions<
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

export function getPostNamespacesNamespaceActivitiesActivityIdCancelMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/cancel', 'POST'] as const
}

export function getPostNamespacesNamespaceActivitiesActivityIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesActivityIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId'].cancel.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesActivityIdCancel<
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
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivitiesActivityIdCancelMutationOptions<
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

export function getPostNamespacesNamespaceActivitiesActivityIdCompleteMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/complete', 'POST'] as const
}

export function getPostNamespacesNamespaceActivitiesActivityIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesActivityIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId'].complete.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesActivityIdComplete<
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
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivitiesActivityIdCompleteMutationOptions<
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

export function getPostNamespacesNamespaceActivitiesActivityIdFailMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/fail', 'POST'] as const
}

export function getPostNamespacesNamespaceActivitiesActivityIdFailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesActivityIdFailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId'].fail.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesActivityIdFail<
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
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivitiesActivityIdFailMutationOptions<
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

export function getPostNamespacesNamespaceActivitiesActivityIdHeartbeatMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/heartbeat', 'POST'] as const
}

export function getPostNamespacesNamespaceActivitiesActivityIdHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesActivityIdHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId'].heartbeat.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesActivityIdHeartbeat<
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
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivitiesActivityIdHeartbeatMutationOptions<
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

export function getNamespacesNamespaceActivitiesActivityIdOutcomeQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/outcome', args] as const
}

export function getNamespacesNamespaceActivitiesActivityIdOutcomeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceActivitiesActivityIdOutcomeQueryKey>
  >({
    queryKey: getNamespacesNamespaceActivitiesActivityIdOutcomeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId'].outcome.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceActivitiesActivityIdOutcome<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceActivitiesActivityIdOutcomeQueryKey>
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
      ...getNamespacesNamespaceActivitiesActivityIdOutcomeQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceActivitiesActivityIdPauseMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/pause', 'POST'] as const
}

export function getPostNamespacesNamespaceActivitiesActivityIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesActivityIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId'].pause.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesActivityIdPause<
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
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivitiesActivityIdPauseMutationOptions<
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

export function getPostNamespacesNamespaceActivitiesActivityIdResetMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/reset', 'POST'] as const
}

export function getPostNamespacesNamespaceActivitiesActivityIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesActivityIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId'].reset.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesActivityIdReset<
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
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivitiesActivityIdResetMutationOptions<
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

export function getPostNamespacesNamespaceActivitiesActivityIdResolveAsCanceledMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/activities/:activityId/resolve-as-canceled',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceActivitiesActivityIdResolveAsCanceledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesActivityIdResolveAsCanceledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId']['resolve-as-canceled'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesActivityIdResolveAsCanceled<
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
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceActivitiesActivityIdResolveAsCanceledMutationOptions<
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

export function getPostNamespacesNamespaceActivitiesActivityIdTerminateMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/terminate', 'POST'] as const
}

export function getPostNamespacesNamespaceActivitiesActivityIdTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesActivityIdTerminateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId'].terminate.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesActivityIdTerminate<
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
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivitiesActivityIdTerminateMutationOptions<
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

export function getPostNamespacesNamespaceActivitiesActivityIdUnpauseMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/unpause', 'POST'] as const
}

export function getPostNamespacesNamespaceActivitiesActivityIdUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesActivityIdUnpauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId'].unpause.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesActivityIdUnpause<
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
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivitiesActivityIdUnpauseMutationOptions<
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

export function getPostNamespacesNamespaceActivitiesActivityIdUpdateOptionsMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/activities/:activityId/update-options',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceActivitiesActivityIdUpdateOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivitiesActivityIdUpdateOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].activities[':activityId']['update-options'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivitiesActivityIdUpdateOptions<
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
                  (typeof client.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceActivitiesActivityIdUpdateOptionsMutationOptions<
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

export function getPostNamespacesNamespaceActivityCompleteMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activity-complete', 'POST'] as const
}

export function getPostNamespacesNamespaceActivityCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['activity-complete']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.namespaces)[':namespace']['activity-complete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivityCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activity-complete']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['activity-complete'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivityComplete<
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
                ReturnType<(typeof client.namespaces)[':namespace']['activity-complete']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.namespaces)[':namespace']['activity-complete']['$post']>,
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
    const mutationDefaults = getPostNamespacesNamespaceActivityCompleteMutationOptions<
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

export function getNamespacesNamespaceActivityCountQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/activity-count', args] as const
}

export function getNamespacesNamespaceActivityCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceActivityCountQueryKey>
  >({
    queryKey: getNamespacesNamespaceActivityCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['activity-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceActivityCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceActivityCountQueryKey>
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
      ...getNamespacesNamespaceActivityCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceActivityFailMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activity-fail', 'POST'] as const
}

export function getPostNamespacesNamespaceActivityFailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activity-fail']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.namespaces)[':namespace']['activity-fail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivityFailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.namespaces)[':namespace']['activity-fail']['$post']>,
    ) {
      return parseResponse(client.namespaces[':namespace']['activity-fail'].$post(args, options))
    },
  })
}

export function createPostNamespacesNamespaceActivityFail<
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
                ReturnType<(typeof client.namespaces)[':namespace']['activity-fail']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.namespaces)[':namespace']['activity-fail']['$post']>,
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
    const mutationDefaults = getPostNamespacesNamespaceActivityFailMutationOptions<
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

export function getPostNamespacesNamespaceActivityHeartbeatMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activity-heartbeat', 'POST'] as const
}

export function getPostNamespacesNamespaceActivityHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['activity-heartbeat']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.namespaces)[':namespace']['activity-heartbeat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivityHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activity-heartbeat']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['activity-heartbeat'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivityHeartbeat<
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
                ReturnType<(typeof client.namespaces)[':namespace']['activity-heartbeat']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.namespaces)[':namespace']['activity-heartbeat']['$post']>,
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
    const mutationDefaults = getPostNamespacesNamespaceActivityHeartbeatMutationOptions<
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

export function getPostNamespacesNamespaceActivityResolveAsCanceledMutationKey() {
  return ['namespaces', '/namespaces/:namespace/activity-resolve-as-canceled', 'POST'] as const
}

export function getPostNamespacesNamespaceActivityResolveAsCanceledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceActivityResolveAsCanceledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['activity-resolve-as-canceled'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceActivityResolveAsCanceled<
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
                  (typeof client.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceActivityResolveAsCanceledMutationOptions<
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

export function getNamespacesNamespaceArchivedWorkflowsQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/archived-workflows', args] as const
}

export function getNamespacesNamespaceArchivedWorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceArchivedWorkflowsQueryKey>
  >({
    queryKey: getNamespacesNamespaceArchivedWorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['archived-workflows'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceArchivedWorkflows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['archived-workflows']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceArchivedWorkflowsQueryKey>
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
      ...getNamespacesNamespaceArchivedWorkflowsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceBatchOperationsQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/batch-operations', args] as const
}

export function getNamespacesNamespaceBatchOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceBatchOperationsQueryKey>
  >({
    queryKey: getNamespacesNamespaceBatchOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['batch-operations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceBatchOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['batch-operations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceBatchOperationsQueryKey>
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
      ...getNamespacesNamespaceBatchOperationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceBatchOperationsJobIdQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/batch-operations/:jobId', args] as const
}

export function getNamespacesNamespaceBatchOperationsJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceBatchOperationsJobIdQueryKey>
  >({
    queryKey: getNamespacesNamespaceBatchOperationsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['batch-operations'][':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceBatchOperationsJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceBatchOperationsJobIdQueryKey>
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
      ...getNamespacesNamespaceBatchOperationsJobIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceBatchOperationsJobIdMutationKey() {
  return ['namespaces', '/namespaces/:namespace/batch-operations/:jobId', 'POST'] as const
}

export function getPostNamespacesNamespaceBatchOperationsJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceBatchOperationsJobIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['batch-operations'][':jobId'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceBatchOperationsJobId<
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
                  (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceBatchOperationsJobIdMutationOptions<
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

export function getPostNamespacesNamespaceBatchOperationsJobIdStopMutationKey() {
  return ['namespaces', '/namespaces/:namespace/batch-operations/:jobId/stop', 'POST'] as const
}

export function getPostNamespacesNamespaceBatchOperationsJobIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceBatchOperationsJobIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['batch-operations'][':jobId'].stop.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceBatchOperationsJobIdStop<
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
                  (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceBatchOperationsJobIdStopMutationOptions<
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

export function getPostNamespacesNamespaceCurrentDeploymentDeploymentSeriesNameMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/current-deployment/:deployment.series_name',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceCurrentDeploymentDeploymentSeriesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceCurrentDeploymentDeploymentSeriesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['current-deployment'][':deployment.series_name'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostNamespacesNamespaceCurrentDeploymentDeploymentSeriesName<
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
                  (typeof client.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceCurrentDeploymentDeploymentSeriesNameMutationOptions<
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

export function getNamespacesNamespaceCurrentDeploymentSeriesNameQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/current-deployment/:seriesName', args] as const
}

export function getNamespacesNamespaceCurrentDeploymentSeriesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceCurrentDeploymentSeriesNameQueryKey>
  >({
    queryKey: getNamespacesNamespaceCurrentDeploymentSeriesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['current-deployment'][':seriesName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceCurrentDeploymentSeriesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceCurrentDeploymentSeriesNameQueryKey>
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
      ...getNamespacesNamespaceCurrentDeploymentSeriesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceDeploymentsQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['deployments']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/deployments', args] as const
}

export function getNamespacesNamespaceDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceDeploymentsQueryKey>
  >({
    queryKey: getNamespacesNamespaceDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.namespaces)[':namespace']['deployments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.namespaces)[':namespace']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceDeploymentsQueryKey>
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
      ...getNamespacesNamespaceDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/deployments/:deployment.series_name/:deployment.build_id',
    args,
  ] as const
}

export function getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdQueryKey
    >
  >({
    queryKey: getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].deployments[':deployment.series_name'][
          ':deployment.build_id'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdQueryKey
        >
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
      ...getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/deployments/:deployment.series_name/:deployment.build_id/reachability',
    args,
  ] as const
}

export function getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityQueryKey
    >
  >({
    queryKey:
      getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].deployments[':deployment.series_name'][
          ':deployment.build_id'
        ].reachability.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityQueryKey
        >
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
      ...getNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceNexusOperationCountQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/nexus-operation-count', args] as const
}

export function getNamespacesNamespaceNexusOperationCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceNexusOperationCountQueryKey>
  >({
    queryKey: getNamespacesNamespaceNexusOperationCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['nexus-operation-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceNexusOperationCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceNexusOperationCountQueryKey>
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
      ...getNamespacesNamespaceNexusOperationCountQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceNexusOperationsQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/nexus-operations', args] as const
}

export function getNamespacesNamespaceNexusOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceNexusOperationsQueryKey>
  >({
    queryKey: getNamespacesNamespaceNexusOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['nexus-operations'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceNexusOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceNexusOperationsQueryKey>
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
      ...getNamespacesNamespaceNexusOperationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceNexusOperationsOperationIdQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/nexus-operations/:operationId', args] as const
}

export function getNamespacesNamespaceNexusOperationsOperationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceNexusOperationsOperationIdQueryKey>
  >({
    queryKey: getNamespacesNamespaceNexusOperationsOperationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['nexus-operations'][':operationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceNexusOperationsOperationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceNexusOperationsOperationIdQueryKey>
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
      ...getNamespacesNamespaceNexusOperationsOperationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceNexusOperationsOperationIdMutationKey() {
  return ['namespaces', '/namespaces/:namespace/nexus-operations/:operationId', 'POST'] as const
}

export function getPostNamespacesNamespaceNexusOperationsOperationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceNexusOperationsOperationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['nexus-operations'][':operationId'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceNexusOperationsOperationId<
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
                  (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceNexusOperationsOperationIdMutationOptions<
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

export function getPostNamespacesNamespaceNexusOperationsOperationIdCancelMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/nexus-operations/:operationId/cancel',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceNexusOperationsOperationIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceNexusOperationsOperationIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['nexus-operations'][':operationId'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostNamespacesNamespaceNexusOperationsOperationIdCancel<
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
                  (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceNexusOperationsOperationIdCancelMutationOptions<
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

export function getNamespacesNamespaceNexusOperationsOperationIdPollQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/nexus-operations/:operationId/poll', args] as const
}

export function getNamespacesNamespaceNexusOperationsOperationIdPollQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceNexusOperationsOperationIdPollQueryKey>
  >({
    queryKey: getNamespacesNamespaceNexusOperationsOperationIdPollQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['nexus-operations'][':operationId'].poll.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceNexusOperationsOperationIdPoll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceNexusOperationsOperationIdPollQueryKey>
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
      ...getNamespacesNamespaceNexusOperationsOperationIdPollQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceNexusOperationsOperationIdTerminateMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/nexus-operations/:operationId/terminate',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceNexusOperationsOperationIdTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceNexusOperationsOperationIdTerminateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['nexus-operations'][':operationId'].terminate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostNamespacesNamespaceNexusOperationsOperationIdTerminate<
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
                  (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceNexusOperationsOperationIdTerminateMutationOptions<
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

export function getNamespacesNamespaceScheduleCountQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/schedule-count', args] as const
}

export function getNamespacesNamespaceScheduleCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceScheduleCountQueryKey>
  >({
    queryKey: getNamespacesNamespaceScheduleCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['schedule-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceScheduleCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceScheduleCountQueryKey>
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
      ...getNamespacesNamespaceScheduleCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceSchedulesQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['schedules']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/schedules', args] as const
}

export function getNamespacesNamespaceSchedulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['schedules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceSchedulesQueryKey>
  >({
    queryKey: getNamespacesNamespaceSchedulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].schedules.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.namespaces)[':namespace']['schedules']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceSchedulesQueryKey>
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
      ...getNamespacesNamespaceSchedulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceSchedulesScheduleIdQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/schedules/:scheduleId', args] as const
}

export function getNamespacesNamespaceSchedulesScheduleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceSchedulesScheduleIdQueryKey>
  >({
    queryKey: getNamespacesNamespaceSchedulesScheduleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].schedules[':scheduleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceSchedulesScheduleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceSchedulesScheduleIdQueryKey>
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
      ...getNamespacesNamespaceSchedulesScheduleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceSchedulesScheduleIdMutationKey() {
  return ['namespaces', '/namespaces/:namespace/schedules/:scheduleId', 'POST'] as const
}

export function getPostNamespacesNamespaceSchedulesScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceSchedulesScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].schedules[':scheduleId'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceSchedulesScheduleId<
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
                  (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceSchedulesScheduleIdMutationOptions<
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

export function getDeleteNamespacesNamespaceSchedulesScheduleIdMutationKey() {
  return ['namespaces', '/namespaces/:namespace/schedules/:scheduleId', 'DELETE'] as const
}

export function getDeleteNamespacesNamespaceSchedulesScheduleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNamespacesNamespaceSchedulesScheduleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].schedules[':scheduleId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteNamespacesNamespaceSchedulesScheduleId<
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
                  (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
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
    const mutationDefaults = getDeleteNamespacesNamespaceSchedulesScheduleIdMutationOptions<
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

export function getNamespacesNamespaceSchedulesScheduleIdMatchingTimesQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/schedules/:scheduleId/matching-times',
    args,
  ] as const
}

export function getNamespacesNamespaceSchedulesScheduleIdMatchingTimesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceSchedulesScheduleIdMatchingTimesQueryKey>
  >({
    queryKey: getNamespacesNamespaceSchedulesScheduleIdMatchingTimesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].schedules[':scheduleId']['matching-times'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceSchedulesScheduleIdMatchingTimes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceSchedulesScheduleIdMatchingTimesQueryKey>
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
      ...getNamespacesNamespaceSchedulesScheduleIdMatchingTimesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceSchedulesScheduleIdPatchMutationKey() {
  return ['namespaces', '/namespaces/:namespace/schedules/:scheduleId/patch', 'POST'] as const
}

export function getPostNamespacesNamespaceSchedulesScheduleIdPatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceSchedulesScheduleIdPatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].schedules[':scheduleId'].patch.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceSchedulesScheduleIdPatch<
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
                  (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceSchedulesScheduleIdPatchMutationOptions<
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

export function getPostNamespacesNamespaceSchedulesScheduleIdUpdateMutationKey() {
  return ['namespaces', '/namespaces/:namespace/schedules/:scheduleId/update', 'POST'] as const
}

export function getPostNamespacesNamespaceSchedulesScheduleIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceSchedulesScheduleIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].schedules[':scheduleId'].update.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceSchedulesScheduleIdUpdate<
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
                  (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceSchedulesScheduleIdUpdateMutationOptions<
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

export function getPostNamespacesNamespaceTaskQueuesTaskQueueUpdateConfigMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/task-queues/:taskQueue/update-config',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceTaskQueuesTaskQueueUpdateConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceTaskQueuesTaskQueueUpdateConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['task-queues'][':taskQueue']['update-config'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostNamespacesNamespaceTaskQueuesTaskQueueUpdateConfig<
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
                  (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceTaskQueuesTaskQueueUpdateConfigMutationOptions<
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

export function getNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/task-queues/:taskQueue/worker-build-id-compatibility',
    args,
  ] as const
}

export function getNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityQueryKey>
  >({
    queryKey: getNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['task-queues'][':taskQueue'][
          'worker-build-id-compatibility'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibility<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityQueryKey
        >
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
      ...getNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/task-queues/:taskQueue/worker-versioning-rules',
    args,
  ] as const
}

export function getNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesQueryKey>
  >({
    queryKey: getNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['task-queues'][':taskQueue'][
          'worker-versioning-rules'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesQueryKey>
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
      ...getNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceTaskQueuesTaskQueueNameQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/task-queues/:task_queue.name', args] as const
}

export function getNamespacesNamespaceTaskQueuesTaskQueueNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceTaskQueuesTaskQueueNameQueryKey>
  >({
    queryKey: getNamespacesNamespaceTaskQueuesTaskQueueNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['task-queues'][':task_queue.name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceTaskQueuesTaskQueueName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceTaskQueuesTaskQueueNameQueryKey>
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
      ...getNamespacesNamespaceTaskQueuesTaskQueueNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployment-versions'][
          ':deployment_version.deployment_name'
        ].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentName<
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
                  (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameMutationOptions<
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

export function getNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id',
    args,
  ] as const
}

export function getNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdQueryKey
    >
  >({
    queryKey:
      getNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployment-versions'][
          ':deployment_version.deployment_name'
        ][':deployment_version.build_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdQueryKey
        >
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
      ...getNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id',
    'DELETE',
  ] as const
}

export function getDeleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployment-versions'][
          ':deployment_version.deployment_name'
        ][':deployment_version.build_id'].$delete(args, options),
      )
    },
  })
}

export function createDeleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId<
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
                  (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
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
    const mutationDefaults =
      getDeleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdMutationOptions<
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

export function getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/update-compute-config',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployment-versions'][
          ':deployment_version.deployment_name'
        ][':deployment_version.build_id']['update-compute-config'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfig<
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
                  (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigMutationOptions<
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

export function getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/update-metadata',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployment-versions'][
          ':deployment_version.deployment_name'
        ][':deployment_version.build_id']['update-metadata'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadata<
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
                  (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataMutationOptions<
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

export function getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/validate-compute-config',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployment-versions'][
          ':deployment_version.deployment_name'
        ][':deployment_version.build_id']['validate-compute-config'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfig<
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
                  (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigMutationOptions<
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

export function getNamespacesNamespaceWorkerDeploymentsQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/worker-deployments', args] as const
}

export function getNamespacesNamespaceWorkerDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceWorkerDeploymentsQueryKey>
  >({
    queryKey: getNamespacesNamespaceWorkerDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployments'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceWorkerDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceWorkerDeploymentsQueryKey>
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
      ...getNamespacesNamespaceWorkerDeploymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceWorkerDeploymentsDeploymentNameQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/worker-deployments/:deploymentName', args] as const
}

export function getNamespacesNamespaceWorkerDeploymentsDeploymentNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceWorkerDeploymentsDeploymentNameQueryKey>
  >({
    queryKey: getNamespacesNamespaceWorkerDeploymentsDeploymentNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployments'][':deploymentName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceWorkerDeploymentsDeploymentName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceWorkerDeploymentsDeploymentNameQueryKey>
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
      ...getNamespacesNamespaceWorkerDeploymentsDeploymentNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployments/:deploymentName',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployments'][':deploymentName'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkerDeploymentsDeploymentName<
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
                  (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameMutationOptions<
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

export function getDeleteNamespacesNamespaceWorkerDeploymentsDeploymentNameMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployments/:deploymentName',
    'DELETE',
  ] as const
}

export function getDeleteNamespacesNamespaceWorkerDeploymentsDeploymentNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNamespacesNamespaceWorkerDeploymentsDeploymentNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployments'][':deploymentName'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function createDeleteNamespacesNamespaceWorkerDeploymentsDeploymentName<
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
                  (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
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
    const mutationDefaults =
      getDeleteNamespacesNamespaceWorkerDeploymentsDeploymentNameMutationOptions<
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

export function getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployments/:deploymentName/set-current-version',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployments'][':deploymentName'][
          'set-current-version'
        ].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersion<
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
                  (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionMutationOptions<
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

export function getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployments/:deploymentName/set-manager',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployments'][':deploymentName'][
          'set-manager'
        ].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManager<
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
                  (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerMutationOptions<
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

export function getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployments/:deploymentName/set-ramping-version',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['worker-deployments'][':deploymentName'][
          'set-ramping-version'
        ].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersion<
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
                  (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionMutationOptions<
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

export function getNamespacesNamespaceWorkerTaskReachabilityQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/worker-task-reachability', args] as const
}

export function getNamespacesNamespaceWorkerTaskReachabilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceWorkerTaskReachabilityQueryKey>
  >({
    queryKey: getNamespacesNamespaceWorkerTaskReachabilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['worker-task-reachability'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceWorkerTaskReachability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceWorkerTaskReachabilityQueryKey>
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
      ...getNamespacesNamespaceWorkerTaskReachabilityQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceWorkersQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workers']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/workers', args] as const
}

export function getNamespacesNamespaceWorkersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceWorkersQueryKey>
  >({
    queryKey: getNamespacesNamespaceWorkersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].workers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceWorkers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.namespaces)[':namespace']['workers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceWorkersQueryKey>
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
      ...getNamespacesNamespaceWorkersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceWorkersDescribeWorkerInstanceKeyQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/workers/describe/:workerInstanceKey', args] as const
}

export function getNamespacesNamespaceWorkersDescribeWorkerInstanceKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceWorkersDescribeWorkerInstanceKeyQueryKey>
  >({
    queryKey: getNamespacesNamespaceWorkersDescribeWorkerInstanceKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].workers.describe[':workerInstanceKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceWorkersDescribeWorkerInstanceKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceWorkersDescribeWorkerInstanceKeyQueryKey>
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
      ...getNamespacesNamespaceWorkersDescribeWorkerInstanceKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceWorkersFetchConfigMutationKey() {
  return ['namespaces', '/namespaces/:namespace/workers/fetch-config', 'POST'] as const
}

export function getPostNamespacesNamespaceWorkersFetchConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['workers']['fetch-config']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.namespaces)[':namespace']['workers']['fetch-config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkersFetchConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workers']['fetch-config']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workers['fetch-config'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkersFetchConfig<
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
                  (typeof client.namespaces)[':namespace']['workers']['fetch-config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workers']['fetch-config']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceWorkersFetchConfigMutationOptions<
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

export function getPostNamespacesNamespaceWorkersHeartbeatMutationKey() {
  return ['namespaces', '/namespaces/:namespace/workers/heartbeat', 'POST'] as const
}

export function getPostNamespacesNamespaceWorkersHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['workers']['heartbeat']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.namespaces)[':namespace']['workers']['heartbeat']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkersHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workers']['heartbeat']['$post']
      >,
    ) {
      return parseResponse(client.namespaces[':namespace'].workers.heartbeat.$post(args, options))
    },
  })
}

export function createPostNamespacesNamespaceWorkersHeartbeat<
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
                  (typeof client.namespaces)[':namespace']['workers']['heartbeat']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.namespaces)[':namespace']['workers']['heartbeat']['$post']>,
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
    const mutationDefaults = getPostNamespacesNamespaceWorkersHeartbeatMutationOptions<
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

export function getPostNamespacesNamespaceWorkersUpdateConfigMutationKey() {
  return ['namespaces', '/namespaces/:namespace/workers/update-config', 'POST'] as const
}

export function getPostNamespacesNamespaceWorkersUpdateConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workers']['update-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.namespaces)[':namespace']['workers']['update-config']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkersUpdateConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workers']['update-config']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workers['update-config'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkersUpdateConfig<
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
                  (typeof client.namespaces)[':namespace']['workers']['update-config']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workers']['update-config']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceWorkersUpdateConfigMutationOptions<
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

export function getNamespacesNamespaceWorkflowCountQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/workflow-count', args] as const
}

export function getNamespacesNamespaceWorkflowCountQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceWorkflowCountQueryKey>
  >({
    queryKey: getNamespacesNamespaceWorkflowCountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['workflow-count'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceWorkflowCount<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceWorkflowCountQueryKey>
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
      ...getNamespacesNamespaceWorkflowCountQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceWorkflowRulesQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/workflow-rules', args] as const
}

export function getNamespacesNamespaceWorkflowRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceWorkflowRulesQueryKey>
  >({
    queryKey: getNamespacesNamespaceWorkflowRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['workflow-rules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceWorkflowRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceWorkflowRulesQueryKey>
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
      ...getNamespacesNamespaceWorkflowRulesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceWorkflowRulesMutationKey() {
  return ['namespaces', '/namespaces/:namespace/workflow-rules', 'POST'] as const
}

export function getPostNamespacesNamespaceWorkflowRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkflowRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$post']>,
    ) {
      return parseResponse(client.namespaces[':namespace']['workflow-rules'].$post(args, options))
    },
  })
}

export function createPostNamespacesNamespaceWorkflowRules<
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
                ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$post']>,
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
    const mutationDefaults = getPostNamespacesNamespaceWorkflowRulesMutationOptions<
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

export function getNamespacesNamespaceWorkflowRulesRuleIdQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/workflow-rules/:ruleId', args] as const
}

export function getNamespacesNamespaceWorkflowRulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceWorkflowRulesRuleIdQueryKey>
  >({
    queryKey: getNamespacesNamespaceWorkflowRulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace']['workflow-rules'][':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceWorkflowRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceWorkflowRulesRuleIdQueryKey>
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
      ...getNamespacesNamespaceWorkflowRulesRuleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteNamespacesNamespaceWorkflowRulesRuleIdMutationKey() {
  return ['namespaces', '/namespaces/:namespace/workflow-rules/:ruleId', 'DELETE'] as const
}

export function getDeleteNamespacesNamespaceWorkflowRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteNamespacesNamespaceWorkflowRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace']['workflow-rules'][':ruleId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteNamespacesNamespaceWorkflowRulesRuleId<
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
                  (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
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
    const mutationDefaults = getDeleteNamespacesNamespaceWorkflowRulesRuleIdMutationOptions<
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

export function getNamespacesNamespaceWorkflowsQueryKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflows']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/workflows', args] as const
}

export function getNamespacesNamespaceWorkflowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceWorkflowsQueryKey>
  >({
    queryKey: getNamespacesNamespaceWorkflowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].workflows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceWorkflows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflows']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.namespaces)[':namespace']['workflows']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceWorkflowsQueryKey>
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
      ...getNamespacesNamespaceWorkflowsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/workflows/:execution.workflow_id', args] as const
}

export function getNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryKey>
  >({
    queryKey: getNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':execution.workflow_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceWorkflowsExecutionWorkflowId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryKey>
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
      ...getNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:execution.workflow_id/history',
    args,
  ] as const
}

export function getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryQueryKey>
  >({
    queryKey: getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':execution.workflow_id'].history.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createNamespacesNamespaceWorkflowsExecutionWorkflowIdHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryQueryKey>
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
      ...getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseQueryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:execution.workflow_id/history-reverse',
    args,
  ] as const
}

export function getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseQueryKey>
  >({
    queryKey: getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':execution.workflow_id']['history-reverse'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function createNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseQueryKey>
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
      ...getNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:execution.workflow_id/query/:query.query_type',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':execution.workflow_id'].query[
          ':query.query_type'
        ].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryType<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:execution.workflow_id/trigger-rule',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':execution.workflow_id']['trigger-rule'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRule<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowIdMutationKey() {
  return ['namespaces', '/namespaces/:namespace/workflows/:workflowId', 'POST'] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.namespaces)[':namespace']['workflows'][':workflowId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkflowsWorkflowIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflowId'].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowId<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceWorkflowsWorkflowIdMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/complete',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflowId'].activities[
          ':activityId'
        ].complete.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdComplete<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/fail',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflowId'].activities[
          ':activityId'
        ].fail.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFail<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/heartbeat',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflowId'].activities[
          ':activityId'
        ].heartbeat.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeat<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/pause',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflowId'].activities[
          ':activityId'
        ].pause.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPause<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/reset',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflowId'].activities[
          ':activityId'
        ].reset.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdReset<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/resolve-as-canceled',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'][
          'resolve-as-canceled'
        ].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceled<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/unpause',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflowId'].activities[
          ':activityId'
        ].unpause.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpause<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/update-options',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'][
          'update-options'
        ].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptions<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowIdPauseMutationKey() {
  return ['namespaces', '/namespaces/:namespace/workflows/:workflowId/pause', 'POST'] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdPauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkflowsWorkflowIdPauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflowId'].pause.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowIdPause<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceWorkflowsWorkflowIdPauseMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/signal-with-start/:signalName',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflowId']['signal-with-start'][
          ':signalName'
        ].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalName<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowIdUnpauseMutationKey() {
  return ['namespaces', '/namespaces/:namespace/workflows/:workflowId/unpause', 'POST'] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdUnpauseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkflowsWorkflowIdUnpauseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflowId'].unpause.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowIdUnpause<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
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
    const mutationDefaults = getPostNamespacesNamespaceWorkflowsWorkflowIdUnpauseMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/cancel',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancel<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/reset',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].reset.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdReset<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/signal/:signalName',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].signal[
          ':signalName'
        ].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalName<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/terminate',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[
          ':workflow_execution.workflow_id'
        ].terminate.$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminate<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/update-options',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'][
          'update-options'
        ].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptions<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsMutationOptions<
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

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameMutationKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/update/:request.input.name',
    'POST',
  ] as const
}

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
      >,
    ) {
      return parseResponse(
        client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].update[
          ':request.input.name'
        ].$post(args, options),
      )
    },
  })
}

export function createPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputName<
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
                  (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
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
    const mutationDefaults =
      getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameMutationOptions<
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

export function getSystemInfoQueryKey() {
  return ['system-info', '/system-info'] as const
}

export function getSystemInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['system-info']['$get']>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['system-info']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemInfoQueryKey>
  >({
    queryKey: getSystemInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['system-info'].$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystemInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['system-info']['$get']>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['system-info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSystemInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSystemInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}
