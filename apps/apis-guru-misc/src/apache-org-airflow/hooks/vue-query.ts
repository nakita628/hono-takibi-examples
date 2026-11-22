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

export function getConfigKey() {
  return ['config'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getDagSourcesKey() {
  return ['dagSources'] as const
}

export function getDagWarningsKey() {
  return ['dagWarnings'] as const
}

export function getDagsKey() {
  return ['dags'] as const
}

export function getDatasetsKey() {
  return ['datasets'] as const
}

export function getEventLogsKey() {
  return ['eventLogs'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getImportErrorsKey() {
  return ['importErrors'] as const
}

export function getPermissionsKey() {
  return ['permissions'] as const
}

export function getPluginsKey() {
  return ['plugins'] as const
}

export function getPoolsKey() {
  return ['pools'] as const
}

export function getProvidersKey() {
  return ['providers'] as const
}

export function getRolesKey() {
  return ['roles'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getVariablesKey() {
  return ['variables'] as const
}

export function getVersionKey() {
  return ['version'] as const
}

export function getConfigQueryKey() {
  return ['config', '/config'] as const
}

export function getConfigQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConfigQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
          ReturnType<typeof getConfigQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConfigQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.config.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConnectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
) {
  return ['connections', '/connections', toValue(args)] as const
}

export function getConnectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.connections.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
          >,
          ReturnType<typeof getConnectionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConnectionsMutationKey() {
  return ['connections', '/connections', 'POST'] as const
}

export function getPostConnectionsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>>,
    TError,
    InferRequestType<typeof client.connections.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connections.$post>) {
      return parseResponse(client.connections.$post(args, options))
    },
  })
}

export function usePostConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.connections.$post>,
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
  const mutationDefaults = getPostConnectionsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostConnectionsTestMutationKey() {
  return ['connections', '/connections/test', 'POST'] as const
}

export function getPostConnectionsTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.test.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.connections.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostConnectionsTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.connections.test.$post>) {
      return parseResponse(client.connections.test.$post(args, options))
    },
  })
}

export function usePostConnectionsTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.connections.test.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.connections.test.$post>,
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
  const mutationDefaults = getPostConnectionsTestMutationOptions<TError, TOnMutateResult>(
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

export function getConnectionsConnectionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':connection_id']['$get']>>,
) {
  return ['connections', '/connections/:connection_id', toValue(args)] as const
}

export function getConnectionsConnectionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':connection_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConnectionsConnectionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.connections[':connection_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.connections)[':connection_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getConnectionsConnectionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsConnectionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConnectionsConnectionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.connections[':connection_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteConnectionsConnectionIdMutationKey() {
  return ['connections', '/connections/:connection_id', 'DELETE'] as const
}

export function getDeleteConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connections)[':connection_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.connections)[':connection_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connections)[':connection_id']['$delete']>,
    ) {
      return parseResponse(client.connections[':connection_id'].$delete(args, options))
    },
  })
}

export function useDeleteConnectionsConnectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.connections)[':connection_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.connections)[':connection_id']['$delete']>,
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
  const mutationDefaults = getDeleteConnectionsConnectionIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchConnectionsConnectionIdMutationKey() {
  return ['connections', '/connections/:connection_id', 'PATCH'] as const
}

export function getPatchConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.connections)[':connection_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.connections)[':connection_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.connections)[':connection_id']['$patch']>,
    ) {
      return parseResponse(client.connections[':connection_id'].$patch(args, options))
    },
  })
}

export function usePatchConnectionsConnectionId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.connections)[':connection_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.connections)[':connection_id']['$patch']>,
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
  const mutationDefaults = getPatchConnectionsConnectionIdMutationOptions<TError, TOnMutateResult>(
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

export function getDagSourcesFileTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dagSources)[':file_token']['$get']>>,
) {
  return ['dagSources', '/dagSources/:file_token', toValue(args)] as const
}

export function getDagSourcesFileTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dagSources)[':file_token']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagSourcesFileTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dagSources[':file_token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDagSourcesFileToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dagSources)[':file_token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dagSources)[':file_token']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dagSources)[':file_token']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dagSources)[':file_token']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDagSourcesFileTokenQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.dagSources)[':file_token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagSourcesFileTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagSourcesFileTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dagSources[':file_token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDagWarningsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dagWarnings.$get>>,
) {
  return ['dagWarnings', '/dagWarnings', toValue(args)] as const
}

export function getDagWarningsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dagWarnings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagWarningsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dagWarnings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDagWarnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dagWarnings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dagWarnings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dagWarnings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dagWarnings.$get>>>>
          >,
          ReturnType<typeof getDagWarningsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dagWarnings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDagWarningsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagWarningsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dagWarnings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDagsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.dags.$get>>) {
  return ['dags', '/dags', toValue(args)] as const
}

export function getDagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dags.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dags.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dags.$get>>>>>,
          ReturnType<typeof getDagsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchDagsMutationKey() {
  return ['dags', '/dags', 'PATCH'] as const
}

export function getPatchDagsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dags.$patch>>>>>,
    TError,
    InferRequestType<typeof client.dags.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchDagsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dags.$patch>) {
      return parseResponse(client.dags.$patch(args, options))
    },
  })
}

export function usePatchDags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dags.$patch>>>>>,
          TError,
          InferRequestType<typeof client.dags.$patch>,
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
  const mutationDefaults = getPatchDagsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDagsDagIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dags)[':dag_id']['$get']>>,
) {
  return ['dags', '/dags/:dag_id', toValue(args)] as const
}

export function getDagsDagIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dags)[':dag_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagsDagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDagsDagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dags)[':dag_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$get']>>>
            >
          >,
          ReturnType<typeof getDagsDagIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagsDagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDagsDagIdMutationKey() {
  return ['dags', '/dags/:dag_id', 'DELETE'] as const
}

export function getDeleteDagsDagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dags)[':dag_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDagsDagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dags)[':dag_id']['$delete']>) {
      return parseResponse(client.dags[':dag_id'].$delete(args, options))
    },
  })
}

export function useDeleteDagsDagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.dags)[':dag_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dags)[':dag_id']['$delete']>,
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
  const mutationDefaults = getDeleteDagsDagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchDagsDagIdMutationKey() {
  return ['dags', '/dags/:dag_id', 'PATCH'] as const
}

export function getPatchDagsDagIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.dags)[':dag_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDagsDagIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dags)[':dag_id']['$patch']>) {
      return parseResponse(client.dags[':dag_id'].$patch(args, options))
    },
  })
}

export function usePatchDagsDagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.dags)[':dag_id']['$patch']>,
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
  const mutationDefaults = getPatchDagsDagIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostDagsDagIdClearTaskInstancesMutationKey() {
  return ['dags', '/dags/:dag_id/clearTaskInstances', 'POST'] as const
}

export function getPostDagsDagIdClearTaskInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dags)[':dag_id']['clearTaskInstances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dags)[':dag_id']['clearTaskInstances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDagsDagIdClearTaskInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dags)[':dag_id']['clearTaskInstances']['$post']>,
    ) {
      return parseResponse(client.dags[':dag_id'].clearTaskInstances.$post(args, options))
    },
  })
}

export function usePostDagsDagIdClearTaskInstances<
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
                Awaited<ReturnType<(typeof client.dags)[':dag_id']['clearTaskInstances']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dags)[':dag_id']['clearTaskInstances']['$post']>,
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
  const mutationDefaults = getPostDagsDagIdClearTaskInstancesMutationOptions<
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

export function getDagsDagIdDagRunsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>>,
) {
  return ['dags', '/dags/:dag_id/dagRuns', toValue(args)] as const
}

export function getDagsDagIdDagRunsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagsDagIdDagRunsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDagsDagIdDagRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDagsDagIdDagRunsQueryKey>
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
          Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdDagRunsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagsDagIdDagRunsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].dagRuns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDagsDagIdDagRunsMutationKey() {
  return ['dags', '/dags/:dag_id/dagRuns', 'POST'] as const
}

export function getPostDagsDagIdDagRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dags)[':dag_id']['dagRuns']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDagsDagIdDagRunsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dags)[':dag_id']['dagRuns']['$post']>) {
      return parseResponse(client.dags[':dag_id'].dagRuns.$post(args, options))
    },
  })
}

export function usePostDagsDagIdDagRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dags)[':dag_id']['dagRuns']['$post']>,
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
  const mutationDefaults = getPostDagsDagIdDagRunsMutationOptions<TError, TOnMutateResult>(
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

export function getDagsDagIdDagRunsDagRunIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
  >,
) {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id', toValue(args)] as const
}

export function getDagsDagIdDagRunsDagRunIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagsDagIdDagRunsDagRunIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDagsDagIdDagRunsDagRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
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
                  ReturnType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDagsDagIdDagRunsDagRunIdQueryKey>
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
          Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdDagRunsDagRunIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagsDagIdDagRunsDagRunIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].dagRuns[':dag_run_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDagsDagIdDagRunsDagRunIdMutationKey() {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id', 'DELETE'] as const
}

export function getDeleteDagsDagIdDagRunsDagRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDagsDagIdDagRunsDagRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']>,
    ) {
      return parseResponse(client.dags[':dag_id'].dagRuns[':dag_run_id'].$delete(args, options))
    },
  })
}

export function useDeleteDagsDagIdDagRunsDagRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$delete']>,
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
  const mutationDefaults = getDeleteDagsDagIdDagRunsDagRunIdMutationOptions<
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

export function getPatchDagsDagIdDagRunsDagRunIdMutationKey() {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id', 'PATCH'] as const
}

export function getPatchDagsDagIdDagRunsDagRunIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDagsDagIdDagRunsDagRunIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']>,
    ) {
      return parseResponse(client.dags[':dag_id'].dagRuns[':dag_run_id'].$patch(args, options))
    },
  })
}

export function usePatchDagsDagIdDagRunsDagRunId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']>,
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
  const mutationDefaults = getPatchDagsDagIdDagRunsDagRunIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostDagsDagIdDagRunsDagRunIdClearMutationKey() {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id/clear', 'POST'] as const
}

export function getPostDagsDagIdDagRunsDagRunIdClearMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDagsDagIdDagRunsDagRunIdClearMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
      >,
    ) {
      return parseResponse(client.dags[':dag_id'].dagRuns[':dag_run_id'].clear.$post(args, options))
    },
  })
}

export function usePostDagsDagIdDagRunsDagRunIdClear<
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['clear']['$post']
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
  const mutationDefaults = getPostDagsDagIdDagRunsDagRunIdClearMutationOptions<
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

export function getPatchDagsDagIdDagRunsDagRunIdSetNoteMutationKey() {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id/setNote', 'PATCH'] as const
}

export function getPatchDagsDagIdDagRunsDagRunIdSetNoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['setNote']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['setNote']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDagsDagIdDagRunsDagRunIdSetNoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['setNote']['$patch']
      >,
    ) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].setNote.$patch(args, options),
      )
    },
  })
}

export function usePatchDagsDagIdDagRunsDagRunIdSetNote<
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['setNote']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['setNote']['$patch']
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
  const mutationDefaults = getPatchDagsDagIdDagRunsDagRunIdSetNoteMutationOptions<
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

export function getDagsDagIdDagRunsDagRunIdTaskInstancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
    >
  >,
) {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances', toValue(args)] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagsDagIdDagRunsDagRunIdTaskInstancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDagsDagIdDagRunsDagRunIdTaskInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesQueryKey>
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
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagsDagIdDagRunsDagRunIdTaskInstancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
    >
  >,
) {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id',
    toValue(args),
  ] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDagsDagIdDagRunsDagRunIdTaskInstancesTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey>
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
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationKey() {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id', 'PATCH'] as const
}

export function getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskId<
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$patch']
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
  const mutationDefaults = getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationOptions<
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

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
    >
  >,
) {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/links',
    toValue(args),
  ] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].links.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey>
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
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].links.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
    >
  >,
) {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/listMapped',
    toValue(args),
  ] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].listMapped.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMapped<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey>
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
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].listMapped.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':task_try_number']['$get']
    >
  >,
) {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/logs/:task_try_number',
    toValue(args),
  ] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':task_try_number']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].logs[
          ':task_try_number'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':task_try_number']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':task_try_number']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':task_try_number']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':task_try_number']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberQueryKey>
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
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':task_try_number']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].logs[
            ':task_try_number'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteMutationKey() {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/setNote',
    'PATCH',
  ] as const
}

export function getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['setNote']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['setNote']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['setNote']['$patch']
      >,
    ) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].setNote.$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNote<
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['setNote']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['setNote']['$patch']
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
  const mutationDefaults =
    getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteMutationOptions<
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

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
    >
  >,
) {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries',
    toValue(args),
  ] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey>
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
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
    >
  >,
) {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries/:xcom_key',
    toValue(args),
  ] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries[
          ':xcom_key'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey
          >
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
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries[
            ':xcom_key'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
    >
  >,
) {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index',
    toValue(args),
  ] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][':map_index'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey>
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
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
            ':map_index'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexMutationKey() {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index',
    'PATCH',
  ] as const
}

export function getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
      >,
    ) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex<
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$patch']
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
  const mutationDefaults =
    getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexMutationOptions<
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

export function getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteMutationKey() {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index/setNote',
    'PATCH',
  ] as const
}

export function getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['setNote']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['setNote']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['setNote']['$patch']
      >,
    ) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][
          ':map_index'
        ].setNote.$patch(args, options),
      )
    },
  })
}

export function usePatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNote<
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['setNote']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['setNote']['$patch']
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
  const mutationDefaults =
    getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteMutationOptions<
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

export function getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamDatasetEvents']['$get']
    >
  >,
) {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id/upstreamDatasetEvents', toValue(args)] as const
}

export function getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamDatasetEvents']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].upstreamDatasetEvents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDagsDagIdDagRunsDagRunIdUpstreamDatasetEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamDatasetEvents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamDatasetEvents']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamDatasetEvents']['$get']
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
                    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamDatasetEvents']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsQueryKey>
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
              (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamDatasetEvents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].dagRuns[':dag_run_id'].upstreamDatasetEvents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDagsDagIdDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dags)[':dag_id']['details']['$get']>>,
) {
  return ['dags', '/dags/:dag_id/details', toValue(args)] as const
}

export function getDagsDagIdDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dags)[':dag_id']['details']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagsDagIdDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDagsDagIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['details']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dags)[':dag_id']['details']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dags)[':dag_id']['details']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dags)[':dag_id']['details']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDagsDagIdDetailsQueryKey>
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
          Awaited<ReturnType<(typeof client.dags)[':dag_id']['details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagsDagIdDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDagsDagIdTasksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dags)[':dag_id']['tasks']['$get']>>,
) {
  return ['dags', '/dags/:dag_id/tasks', toValue(args)] as const
}

export function getDagsDagIdTasksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dags)[':dag_id']['tasks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagsDagIdTasksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].tasks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDagsDagIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dags)[':dag_id']['tasks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDagsDagIdTasksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdTasksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagsDagIdTasksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].tasks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDagsDagIdTasksTaskIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>
  >,
) {
  return ['dags', '/dags/:dag_id/tasks/:task_id', toValue(args)] as const
}

export function getDagsDagIdTasksTaskIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDagsDagIdTasksTaskIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dags[':dag_id'].tasks[':task_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDagsDagIdTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDagsDagIdTasksTaskIdQueryKey>
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
          Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdTasksTaskIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDagsDagIdTasksTaskIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dags[':dag_id'].tasks[':task_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDagsDagIdUpdateTaskInstancesStateMutationKey() {
  return ['dags', '/dags/:dag_id/updateTaskInstancesState', 'POST'] as const
}

export function getPostDagsDagIdUpdateTaskInstancesStateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dags)[':dag_id']['updateTaskInstancesState']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dags)[':dag_id']['updateTaskInstancesState']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDagsDagIdUpdateTaskInstancesStateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dags)[':dag_id']['updateTaskInstancesState']['$post']>,
    ) {
      return parseResponse(client.dags[':dag_id'].updateTaskInstancesState.$post(args, options))
    },
  })
}

export function usePostDagsDagIdUpdateTaskInstancesState<
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
                  ReturnType<(typeof client.dags)[':dag_id']['updateTaskInstancesState']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dags)[':dag_id']['updateTaskInstancesState']['$post']>,
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
  const mutationDefaults = getPostDagsDagIdUpdateTaskInstancesStateMutationOptions<
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

export function getPostDagsTildeDagRunsListMutationKey() {
  return ['dags', '/dags/~/dagRuns/list', 'POST'] as const
}

export function getPostDagsTildeDagRunsListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dags)['~']['dagRuns']['list']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dags)['~']['dagRuns']['list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDagsTildeDagRunsListMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dags)['~']['dagRuns']['list']['$post']>,
    ) {
      return parseResponse(client.dags['~'].dagRuns.list.$post(args, options))
    },
  })
}

export function usePostDagsTildeDagRunsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dags)['~']['dagRuns']['list']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dags)['~']['dagRuns']['list']['$post']>,
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
  const mutationDefaults = getPostDagsTildeDagRunsListMutationOptions<TError, TOnMutateResult>(
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

export function getPostDagsTildeDagRunsTildeTaskInstancesListMutationKey() {
  return ['dags', '/dags/~/dagRuns/~/taskInstances/list', 'POST'] as const
}

export function getPostDagsTildeDagRunsTildeTaskInstancesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dags)['~']['dagRuns']['~']['taskInstances']['list']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dags)['~']['dagRuns']['~']['taskInstances']['list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDagsTildeDagRunsTildeTaskInstancesListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dags)['~']['dagRuns']['~']['taskInstances']['list']['$post']
      >,
    ) {
      return parseResponse(client.dags['~'].dagRuns['~'].taskInstances.list.$post(args, options))
    },
  })
}

export function usePostDagsTildeDagRunsTildeTaskInstancesList<
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
                    (typeof client.dags)['~']['dagRuns']['~']['taskInstances']['list']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.dags)['~']['dagRuns']['~']['taskInstances']['list']['$post']
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
  const mutationDefaults = getPostDagsTildeDagRunsTildeTaskInstancesListMutationOptions<
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

export function getDatasetsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.$get>>,
) {
  return ['datasets', '/datasets', toValue(args)] as const
}

export function getDatasetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
          >,
          ReturnType<typeof getDatasetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatasetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatasetsEventsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.events.$get>>,
) {
  return ['datasets', '/datasets/events', toValue(args)] as const
}

export function getDatasetsEventsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.events.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets.events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasets.events.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.datasets.events.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.datasets.events.$get>>>
            >
          >,
          ReturnType<typeof getDatasetsEventsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets.events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatasetsUriQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasets)[':uri']['$get']>>,
) {
  return ['datasets', '/datasets/:uri', toValue(args)] as const
}

export function getDatasetsUriQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasets)[':uri']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasetsUriQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasets[':uri'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasetsUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':uri']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasets)[':uri']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':uri']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':uri']['$get']>>>
            >
          >,
          ReturnType<typeof getDatasetsUriQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':uri']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsUriQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasetsUriQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasets[':uri'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eventLogs.$get>>,
) {
  return ['eventLogs', '/eventLogs', toValue(args)] as const
}

export function getEventLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eventLogs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eventLogs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useEventLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventLogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.eventLogs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventLogs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventLogs.$get>>>>
          >,
          ReturnType<typeof getEventLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventLogs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eventLogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getEventLogsEventLogIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eventLogs)[':event_log_id']['$get']>>,
) {
  return ['eventLogs', '/eventLogs/:event_log_id', toValue(args)] as const
}

export function getEventLogsEventLogIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eventLogs)[':event_log_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getEventLogsEventLogIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.eventLogs[':event_log_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useEventLogsEventLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eventLogs)[':event_log_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.eventLogs)[':event_log_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eventLogs)[':event_log_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.eventLogs)[':event_log_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getEventLogsEventLogIdQueryKey>
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
          Awaited<ReturnType<(typeof client.eventLogs)[':event_log_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventLogsEventLogIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getEventLogsEventLogIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.eventLogs[':event_log_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
          ReturnType<typeof getHealthQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.health.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImportErrorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.importErrors.$get>>,
) {
  return ['importErrors', '/importErrors', toValue(args)] as const
}

export function getImportErrorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.importErrors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImportErrorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.importErrors.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useImportErrors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importErrors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.importErrors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importErrors.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importErrors.$get>>>>
          >,
          ReturnType<typeof getImportErrorsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importErrors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImportErrorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImportErrorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.importErrors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getImportErrorsImportErrorIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.importErrors)[':import_error_id']['$get']>
  >,
) {
  return ['importErrors', '/importErrors/:import_error_id', toValue(args)] as const
}

export function getImportErrorsImportErrorIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.importErrors)[':import_error_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImportErrorsImportErrorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.importErrors[':import_error_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImportErrorsImportErrorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.importErrors)[':import_error_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.importErrors)[':import_error_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.importErrors)[':import_error_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.importErrors)[':import_error_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getImportErrorsImportErrorIdQueryKey>
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
          Awaited<ReturnType<(typeof client.importErrors)[':import_error_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportErrorsImportErrorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImportErrorsImportErrorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.importErrors[':import_error_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPermissionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.permissions.$get>>,
) {
  return ['permissions', '/permissions', toValue(args)] as const
}

export function getPermissionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.permissions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.permissions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePermissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.permissions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
          >,
          ReturnType<typeof getPermissionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPluginsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plugins.$get>>,
) {
  return ['plugins', '/plugins', toValue(args)] as const
}

export function getPluginsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plugins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPluginsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.plugins.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.plugins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
          >,
          ReturnType<typeof getPluginsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPluginsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPluginsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.plugins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPoolsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.$get>>,
) {
  return ['pools', '/pools', toValue(args)] as const
}

export function getPoolsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePools<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pools.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
          ReturnType<typeof getPoolsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPoolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPoolsMutationKey() {
  return ['pools', '/pools', 'POST'] as const
}

export function getPostPoolsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$post>>>>>,
    TError,
    InferRequestType<typeof client.pools.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPoolsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pools.$post>) {
      return parseResponse(client.pools.$post(args, options))
    },
  })
}

export function usePostPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$post>>>>>,
          TError,
          InferRequestType<typeof client.pools.$post>,
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
  const mutationDefaults = getPostPoolsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPoolsPoolNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_name']['$get']>>,
) {
  return ['pools', '/pools/:pool_name', toValue(args)] as const
}

export function getPoolsPoolNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPoolsPoolNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pools[':pool_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePoolsPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pools)[':pool_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_name']['$get']>>>
            >
          >,
          ReturnType<typeof getPoolsPoolNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsPoolNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPoolsPoolNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pools[':pool_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePoolsPoolNameMutationKey() {
  return ['pools', '/pools/:pool_name', 'DELETE'] as const
}

export function getDeletePoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.pools)[':pool_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePoolsPoolNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pools)[':pool_name']['$delete']>) {
      return parseResponse(client.pools[':pool_name'].$delete(args, options))
    },
  })
}

export function useDeletePoolsPoolName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.pools)[':pool_name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.pools)[':pool_name']['$delete']>,
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
  const mutationDefaults = getDeletePoolsPoolNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchPoolsPoolNameMutationKey() {
  return ['pools', '/pools/:pool_name', 'PATCH'] as const
}

export function getPatchPoolsPoolNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pools)[':pool_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPoolsPoolNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pools)[':pool_name']['$patch']>) {
      return parseResponse(client.pools[':pool_name'].$patch(args, options))
    },
  })
}

export function usePatchPoolsPoolName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pools)[':pool_name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pools)[':pool_name']['$patch']>,
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
  const mutationDefaults = getPatchPoolsPoolNameMutationOptions<TError, TOnMutateResult>(
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

export function getProvidersQueryKey() {
  return ['providers', '/providers'] as const
}

export function getProvidersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getProvidersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.providers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
          >,
          ReturnType<typeof getProvidersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProvidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getProvidersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.providers.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roles.$get>>,
) {
  return ['roles', '/roles', toValue(args)] as const
}

export function getRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          ReturnType<typeof getRolesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostRolesMutationKey() {
  return ['roles', '/roles', 'POST'] as const
}

export function getPostRolesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
    TError,
    InferRequestType<typeof client.roles.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostRolesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.roles.$post>) {
      return parseResponse(client.roles.$post(args, options))
    },
  })
}

export function usePostRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
          TError,
          InferRequestType<typeof client.roles.$post>,
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
  const mutationDefaults = getPostRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getRolesRoleNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':role_name']['$get']>>,
) {
  return ['roles', '/roles/:role_name', toValue(args)] as const
}

export function getRolesRoleNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':role_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRolesRoleNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roles[':role_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRolesRoleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.roles)[':role_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_name']['$get']>>>
            >
          >,
          ReturnType<typeof getRolesRoleNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRolesRoleNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRolesRoleNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.roles[':role_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteRolesRoleNameMutationKey() {
  return ['roles', '/roles/:role_name', 'DELETE'] as const
}

export function getDeleteRolesRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.roles)[':role_name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRolesRoleNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.roles)[':role_name']['$delete']>) {
      return parseResponse(client.roles[':role_name'].$delete(args, options))
    },
  })
}

export function useDeleteRolesRoleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.roles)[':role_name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.roles)[':role_name']['$delete']>,
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
  const mutationDefaults = getDeleteRolesRoleNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchRolesRoleNameMutationKey() {
  return ['roles', '/roles/:role_name', 'PATCH'] as const
}

export function getPatchRolesRoleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.roles)[':role_name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchRolesRoleNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.roles)[':role_name']['$patch']>) {
      return parseResponse(client.roles[':role_name'].$patch(args, options))
    },
  })
}

export function usePatchRolesRoleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.roles)[':role_name']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.roles)[':role_name']['$patch']>,
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
  const mutationDefaults = getPatchRolesRoleNameMutationOptions<TError, TOnMutateResult>(
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

export function getUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
) {
  return ['users', '/users', toValue(args)] as const
}

export function getUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
          ReturnType<typeof getUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
          TError,
          InferRequestType<typeof client.users.$post>,
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
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUsernameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['$get']>>,
) {
  return ['users', '/users/:username', toValue(args)] as const
}

export function getUsersUsernameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':username']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUsernameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteUsersUsernameMutationKey() {
  return ['users', '/users/:username', 'DELETE'] as const
}

export function getDeleteUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.users)[':username']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUsersUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':username']['$delete']>) {
      return parseResponse(client.users[':username'].$delete(args, options))
    },
  })
}

export function useDeleteUsersUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.users)[':username']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.users)[':username']['$delete']>,
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
  const mutationDefaults = getDeleteUsersUsernameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchUsersUsernameMutationKey() {
  return ['users', '/users/:username', 'PATCH'] as const
}

export function getPatchUsersUsernameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':username']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchUsersUsernameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':username']['$patch']>) {
      return parseResponse(client.users[':username'].$patch(args, options))
    },
  })
}

export function usePatchUsersUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':username']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':username']['$patch']>,
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
  const mutationDefaults = getPatchUsersUsernameMutationOptions<TError, TOnMutateResult>(
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

export function getVariablesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.variables.$get>>,
) {
  return ['variables', '/variables', toValue(args)] as const
}

export function getVariablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.variables.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVariablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.variables.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVariables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.variables.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>
          >,
          ReturnType<typeof getVariablesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVariablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVariablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.variables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostVariablesMutationKey() {
  return ['variables', '/variables', 'POST'] as const
}

export function getPostVariablesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$post>>>>>,
    TError,
    InferRequestType<typeof client.variables.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostVariablesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.variables.$post>) {
      return parseResponse(client.variables.$post(args, options))
    },
  })
}

export function usePostVariables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.variables.$post>,
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
  const mutationDefaults = getPostVariablesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getVariablesVariableKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variables)[':variable_key']['$get']>>,
) {
  return ['variables', '/variables/:variable_key', toValue(args)] as const
}

export function getVariablesVariableKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variables)[':variable_key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVariablesVariableKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.variables[':variable_key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVariablesVariableKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variables)[':variable_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.variables)[':variable_key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variables)[':variable_key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variables)[':variable_key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getVariablesVariableKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.variables)[':variable_key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVariablesVariableKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVariablesVariableKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.variables[':variable_key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteVariablesVariableKeyMutationKey() {
  return ['variables', '/variables/:variable_key', 'DELETE'] as const
}

export function getDeleteVariablesVariableKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.variables)[':variable_key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.variables)[':variable_key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteVariablesVariableKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.variables)[':variable_key']['$delete']>,
    ) {
      return parseResponse(client.variables[':variable_key'].$delete(args, options))
    },
  })
}

export function useDeleteVariablesVariableKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.variables)[':variable_key']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.variables)[':variable_key']['$delete']>,
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
  const mutationDefaults = getDeleteVariablesVariableKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPatchVariablesVariableKeyMutationKey() {
  return ['variables', '/variables/:variable_key', 'PATCH'] as const
}

export function getPatchVariablesVariableKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.variables)[':variable_key']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.variables)[':variable_key']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchVariablesVariableKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.variables)[':variable_key']['$patch']>) {
      return parseResponse(client.variables[':variable_key'].$patch(args, options))
    },
  })
}

export function usePatchVariablesVariableKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.variables)[':variable_key']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.variables)[':variable_key']['$patch']>,
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
  const mutationDefaults = getPatchVariablesVariableKeyMutationOptions<TError, TOnMutateResult>(
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

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
          >,
          ReturnType<typeof getVersionQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.version.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
