import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConfigQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getConnectionsQueryKey(args: InferRequestType<typeof client.connections.$get>) {
  return ['connections', '/connections', args] as const
}

export function getConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >({
    queryKey: getConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.connections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.connections.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostConnectionsTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.connections.test.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.connections.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostConnectionsTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConnectionsConnectionIdQueryKey(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$get']>,
) {
  return ['connections', '/connections/:connection_id', args] as const
}

export function getConnectionsConnectionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':connection_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConnectionsConnectionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':connection_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConnectionsConnectionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.connections)[':connection_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connections)[':connection_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getConnectionsConnectionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteConnectionsConnectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchConnectionsConnectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchConnectionsConnectionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDagSourcesFileTokenQueryKey(
  args: InferRequestType<(typeof client.dagSources)[':file_token']['$get']>,
) {
  return ['dagSources', '/dagSources/:file_token', args] as const
}

export function getDagSourcesFileTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dagSources)[':file_token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dagSources)[':file_token']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dagSources)[':file_token']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagSourcesFileTokenQueryKey>
  >({
    queryKey: getDagSourcesFileTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dagSources[':file_token'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDagSourcesFileToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dagSources)[':file_token']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dagSources)[':file_token']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dagSources)[':file_token']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDagSourcesFileTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDagSourcesFileTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDagWarningsQueryKey(args: InferRequestType<typeof client.dagWarnings.$get>) {
  return ['dagWarnings', '/dagWarnings', args] as const
}

export function getDagWarningsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dagWarnings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dagWarnings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dagWarnings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDagWarningsQueryKey>
  >({
    queryKey: getDagWarningsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dagWarnings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDagWarnings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dagWarnings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dagWarnings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dagWarnings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDagWarningsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDagWarningsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDagsQueryKey(args: InferRequestType<typeof client.dags.$get>) {
  return ['dags', '/dags', args] as const
}

export function getDagsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dags.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dags.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDagsQueryKey>
  >({
    queryKey: getDagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDags<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dags.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dags.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPatchDags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dags.$patch>>>>>,
        TError,
        InferRequestType<typeof client.dags.$patch>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDagsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDagsDagIdQueryKey(
  args: InferRequestType<(typeof client.dags)[':dag_id']['$get']>,
) {
  return ['dags', '/dags/:dag_id', args] as const
}

export function getDagsDagIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.dags)[':dag_id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdQueryKey>
  >({
    queryKey: getDagsDagIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDagsDagId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dags)[':dag_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDagsDagIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDagsDagIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteDagsDagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.dags)[':dag_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDagsDagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDagsDagId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.dags)[':dag_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDagsDagIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDagsDagIdClearTaskInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDagsDagIdClearTaskInstancesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDagsDagIdDagRunsQueryKey(
  args: InferRequestType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>,
) {
  return ['dags', '/dags/:dag_id/dagRuns', args] as const
}

export function getDagsDagIdDagRunsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdDagRunsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDagsDagIdDagRuns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dags)[':dag_id']['dagRuns']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDagsDagIdDagRunsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDagsDagIdDagRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDagsDagIdDagRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDagsDagIdDagRunsDagRunIdQueryKey(
  args: InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>,
) {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id', args] as const
}

export function getDagsDagIdDagRunsDagRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdDagRunsDagRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDagsDagIdDagRunsDagRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDagsDagIdDagRunsDagRunIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteDagsDagIdDagRunsDagRunId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDagsDagIdDagRunsDagRunIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDagsDagIdDagRunsDagRunId<
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
                ReturnType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDagsDagIdDagRunsDagRunIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDagsDagIdDagRunsDagRunIdClear<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDagsDagIdDagRunsDagRunIdClearMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDagsDagIdDagRunsDagRunIdSetNote<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDagsDagIdDagRunsDagRunIdSetNoteMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesQueryKey(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
  >,
) {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances', args] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesQueryOptions<
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
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdDagRunsDagRunIdTaskInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDagsDagIdDagRunsDagRunIdTaskInstances<
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
  args: () => InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDagsDagIdDagRunsDagRunIdTaskInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
  >,
) {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id', args] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDagsDagIdDagRunsDagRunIdTaskInstancesTaskId<
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
  args: () => InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
  >,
) {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/links', args] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryOptions<
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
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].links.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinks<
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
  args: () => InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['links']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLinksQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
  >,
) {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/listMapped',
    args,
  ] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryOptions<
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
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].listMapped.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMapped<
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
  args: () => InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['listMapped']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdListMappedQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberQueryKey(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':task_try_number']['$get']
  >,
) {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/logs/:task_try_number',
    args,
  ] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberQueryOptions<
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
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':task_try_number']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].logs[
          ':task_try_number'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumber<
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
  args: () => InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['logs'][':task_try_number']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdLogsTaskTryNumberQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNote<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdSetNoteMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
  >,
) {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries',
    args,
  ] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryOptions<
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
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntries<
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
  args: () => InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
  >,
) {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/xcomEntries/:xcom_key',
    args,
  ] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'].xcomEntries[
          ':xcom_key'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKey<
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
  args: () => InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id']['xcomEntries'][':xcom_key']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdXcomEntriesXcomKeyQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
  >,
) {
  return [
    'dags',
    '/dags/:dag_id/dagRuns/:dag_run_id/taskInstances/:task_id/:map_index',
    args,
  ] as const
}

export function getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryOptions<
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
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].taskInstances[':task_id'][':map_index'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function injectDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex<
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
  args: () => InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['taskInstances'][':task_id'][':map_index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndex<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNote<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchDagsDagIdDagRunsDagRunIdTaskInstancesTaskIdMapIndexSetNoteMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsQueryKey(
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamDatasetEvents']['$get']
  >,
) {
  return ['dags', '/dags/:dag_id/dagRuns/:dag_run_id/upstreamDatasetEvents', args] as const
}

export function getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsQueryOptions<
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
  args: InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamDatasetEvents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].dagRuns[':dag_run_id'].upstreamDatasetEvents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDagsDagIdDagRunsDagRunIdUpstreamDatasetEvents<
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
  args: () => InferRequestType<
    (typeof client.dags)[':dag_id']['dagRuns'][':dag_run_id']['upstreamDatasetEvents']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDagsDagIdDagRunsDagRunIdUpstreamDatasetEventsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDagsDagIdDetailsQueryKey(
  args: InferRequestType<(typeof client.dags)[':dag_id']['details']['$get']>,
) {
  return ['dags', '/dags/:dag_id/details', args] as const
}

export function getDagsDagIdDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['details']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dags)[':dag_id']['details']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDagsDagIdDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['details']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dags)[':dag_id']['details']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDagsDagIdDetailsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDagsDagIdTasksQueryKey(
  args: InferRequestType<(typeof client.dags)[':dag_id']['tasks']['$get']>,
) {
  return ['dags', '/dags/:dag_id/tasks', args] as const
}

export function getDagsDagIdTasksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dags)[':dag_id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDagsDagIdTasksQueryKey>
  >({
    queryKey: getDagsDagIdTasksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].tasks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDagsDagIdTasks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dags)[':dag_id']['tasks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDagsDagIdTasksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDagsDagIdTasksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDagsDagIdTasksTaskIdQueryKey(
  args: InferRequestType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>,
) {
  return ['dags', '/dags/:dag_id/tasks/:task_id', args] as const
}

export function getDagsDagIdTasksTaskIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDagsDagIdTasksTaskIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dags[':dag_id'].tasks[':task_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDagsDagIdTasksTaskId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dags)[':dag_id']['tasks'][':task_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDagsDagIdTasksTaskIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostDagsDagIdUpdateTaskInstancesState<
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
                ReturnType<(typeof client.dags)[':dag_id']['updateTaskInstancesState']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dags)[':dag_id']['updateTaskInstancesState']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDagsDagIdUpdateTaskInstancesStateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDagsTildeDagRunsList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDagsTildeDagRunsListMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostDagsTildeDagRunsTildeTaskInstancesList<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDagsTildeDagRunsTildeTaskInstancesListMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDatasetsQueryKey(args: InferRequestType<typeof client.datasets.$get>) {
  return ['datasets', '/datasets', args] as const
}

export function getDatasetsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.datasets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatasetsQueryKey>
  >({
    queryKey: getDatasetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDatasets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.datasets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDatasetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDatasetsEventsQueryKey(
  args: InferRequestType<typeof client.datasets.events.$get>,
) {
  return ['datasets', '/datasets/events', args] as const
}

export function getDatasetsEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.datasets.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.events.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsEventsQueryKey>
  >({
    queryKey: getDatasetsEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDatasetsEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.datasets.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasets.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetsEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasetsEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDatasetsUriQueryKey(
  args: InferRequestType<(typeof client.datasets)[':uri']['$get']>,
) {
  return ['datasets', '/datasets/:uri', args] as const
}

export function getDatasetsUriQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':uri']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasets)[':uri']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':uri']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasetsUriQueryKey>
  >({
    queryKey: getDatasetsUriQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasets[':uri'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDatasetsUri<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':uri']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasets)[':uri']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.datasets)[':uri']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasetsUriQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasetsUriQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEventLogsQueryKey(args: InferRequestType<typeof client.eventLogs.$get>) {
  return ['eventLogs', '/eventLogs', args] as const
}

export function getEventLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventLogs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.eventLogs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventLogs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getEventLogsQueryKey>
  >({
    queryKey: getEventLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eventLogs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectEventLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventLogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.eventLogs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.eventLogs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getEventLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getEventLogsEventLogIdQueryKey(
  args: InferRequestType<(typeof client.eventLogs)[':event_log_id']['$get']>,
) {
  return ['eventLogs', '/eventLogs/:event_log_id', args] as const
}

export function getEventLogsEventLogIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eventLogs)[':event_log_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.eventLogs)[':event_log_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getEventLogsEventLogIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.eventLogs[':event_log_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectEventLogsEventLogId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.eventLogs)[':event_log_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.eventLogs)[':event_log_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getEventLogsEventLogIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getHealthQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getImportErrorsQueryKey(args: InferRequestType<typeof client.importErrors.$get>) {
  return ['importErrors', '/importErrors', args] as const
}

export function getImportErrorsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importErrors.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.importErrors.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importErrors.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getImportErrorsQueryKey>
  >({
    queryKey: getImportErrorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.importErrors.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectImportErrors<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importErrors.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.importErrors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.importErrors.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getImportErrorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImportErrorsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getImportErrorsImportErrorIdQueryKey(
  args: InferRequestType<(typeof client.importErrors)[':import_error_id']['$get']>,
) {
  return ['importErrors', '/importErrors/:import_error_id', args] as const
}

export function getImportErrorsImportErrorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.importErrors)[':import_error_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.importErrors)[':import_error_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getImportErrorsImportErrorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.importErrors[':import_error_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectImportErrorsImportErrorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.importErrors)[':import_error_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.importErrors)[':import_error_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getImportErrorsImportErrorIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPermissionsQueryKey(args: InferRequestType<typeof client.permissions.$get>) {
  return ['permissions', '/permissions', args] as const
}

export function getPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.permissions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPermissionsQueryKey>
  >({
    queryKey: getPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.permissions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPermissions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.permissions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.permissions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPermissionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPluginsQueryKey(args: InferRequestType<typeof client.plugins.$get>) {
  return ['plugins', '/plugins', args] as const
}

export function getPluginsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.plugins.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPluginsQueryKey>
  >({
    queryKey: getPluginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.plugins.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPlugins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.plugins.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.plugins.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPluginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPluginsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPoolsQueryKey(args: InferRequestType<typeof client.pools.$get>) {
  return ['pools', '/pools', args] as const
}

export function getPoolsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pools.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPoolsQueryKey>
  >({
    queryKey: getPoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPools<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pools.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPoolsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPoolsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pools.$post>>>>>,
        TError,
        InferRequestType<typeof client.pools.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPoolsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPoolsPoolNameQueryKey(
  args: InferRequestType<(typeof client.pools)[':pool_name']['$get']>,
) {
  return ['pools', '/pools/:pool_name', args] as const
}

export function getPoolsPoolNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pools)[':pool_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPoolsPoolNameQueryKey>
  >({
    queryKey: getPoolsPoolNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pools[':pool_name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPoolsPoolName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pools)[':pool_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPoolsPoolNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPoolsPoolNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeletePoolsPoolName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePoolsPoolNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchPoolsPoolName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.pools)[':pool_name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.pools)[':pool_name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPoolsPoolNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getProvidersQueryKey() {
  return ['providers', '/providers'] as const
}

export function getProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProvidersQueryKey>
  >({
    queryKey: getProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.providers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.providers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProvidersQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getRolesQueryKey(args: InferRequestType<typeof client.roles.$get>) {
  return ['roles', '/roles', args] as const
}

export function getRolesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >({
    queryKey: getRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.roles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$post>>>>>,
        TError,
        InferRequestType<typeof client.roles.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostRolesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRolesRoleNameQueryKey(
  args: InferRequestType<(typeof client.roles)[':role_name']['$get']>,
) {
  return ['roles', '/roles/:role_name', args] as const
}

export function getRolesRoleNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.roles)[':role_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRolesRoleNameQueryKey>
  >({
    queryKey: getRolesRoleNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles[':role_name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRolesRoleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.roles)[':role_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRolesRoleNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRolesRoleNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteRolesRoleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteRolesRoleNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchRolesRoleName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':role_name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.roles)[':role_name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchRolesRoleNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersQueryKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function getUsersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersQueryKey>
  >({
    queryKey: getUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersUsernameQueryKey(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
) {
  return ['users', '/users/:username', args] as const
}

export function getUsersUsernameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameQueryKey>
  >({
    queryKey: getUsersUsernameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':username'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersUsername<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':username']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUsernameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteUsersUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteUsersUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchUsersUsername<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':username']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':username']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchUsersUsernameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVariablesQueryKey(args: InferRequestType<typeof client.variables.$get>) {
  return ['variables', '/variables', args] as const
}

export function getVariablesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.variables.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVariablesQueryKey>
  >({
    queryKey: getVariablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.variables.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVariables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.variables.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVariablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVariablesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostVariables<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.variables.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.variables.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostVariablesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVariablesVariableKeyQueryKey(
  args: InferRequestType<(typeof client.variables)[':variable_key']['$get']>,
) {
  return ['variables', '/variables/:variable_key', args] as const
}

export function getVariablesVariableKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variables)[':variable_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.variables)[':variable_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getVariablesVariableKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.variables[':variable_key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectVariablesVariableKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.variables)[':variable_key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.variables)[':variable_key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getVariablesVariableKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteVariablesVariableKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteVariablesVariableKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchVariablesVariableKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchVariablesVariableKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getVersionQueryKey() {
  return ['version', '/version'] as const
}

export function getVersionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVersionQueryKey>
  >({
    queryKey: getVersionQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.version.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectVersion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.version.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getVersionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVersionQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}
