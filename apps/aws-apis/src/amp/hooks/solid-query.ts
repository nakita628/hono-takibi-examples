import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getTagsKey() {
  return ['tags'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getWorkspacesWorkspaceIdAlertmanagerDefinitionQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workspaces', '/workspaces/:workspaceId/alertmanager/definition', keyArgs] as const
}

export function getWorkspacesWorkspaceIdAlertmanagerDefinitionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdAlertmanagerDefinitionQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceIdAlertmanagerDefinitionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspaceId'].alertmanager.definition.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceIdAlertmanagerDefinition<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceIdAlertmanagerDefinitionQueryKey>
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
      ...getWorkspacesWorkspaceIdAlertmanagerDefinitionQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutWorkspacesWorkspaceIdAlertmanagerDefinitionMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/alertmanager/definition', 'PUT'] as const
}

export function getPutWorkspacesWorkspaceIdAlertmanagerDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspaceIdAlertmanagerDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$put']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspaceId'].alertmanager.definition.$put(args, options),
      )
    },
  })
}

export function createPutWorkspacesWorkspaceIdAlertmanagerDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWorkspacesWorkspaceIdAlertmanagerDefinitionMutationOptions<
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

export function getPostWorkspacesWorkspaceIdAlertmanagerDefinitionMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/alertmanager/definition', 'POST'] as const
}

export function getPostWorkspacesWorkspaceIdAlertmanagerDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceIdAlertmanagerDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$post']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspaceId'].alertmanager.definition.$post(args, options),
      )
    },
  })
}

export function createPostWorkspacesWorkspaceIdAlertmanagerDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkspacesWorkspaceIdAlertmanagerDefinitionMutationOptions<
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

export function getDeleteWorkspacesWorkspaceIdAlertmanagerDefinitionMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/alertmanager/definition', 'DELETE'] as const
}

export function getDeleteWorkspacesWorkspaceIdAlertmanagerDefinitionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspaceIdAlertmanagerDefinitionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$delete']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspaceId'].alertmanager.definition.$delete(args, options),
      )
    },
  })
}

export function createDeleteWorkspacesWorkspaceIdAlertmanagerDefinition<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWorkspacesWorkspaceIdAlertmanagerDefinitionMutationOptions<
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

export function getWorkspacesWorkspaceIdLoggingQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workspaces', '/workspaces/:workspaceId/logging', keyArgs] as const
}

export function getWorkspacesWorkspaceIdLoggingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdLoggingQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceIdLoggingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspaceId'].logging.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceIdLogging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceIdLoggingQueryKey>
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
      ...getWorkspacesWorkspaceIdLoggingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutWorkspacesWorkspaceIdLoggingMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/logging', 'PUT'] as const
}

export function getPutWorkspacesWorkspaceIdLoggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspaceIdLoggingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$put']>,
    ) {
      return parseResponse(client.workspaces[':workspaceId'].logging.$put(args, options))
    },
  })
}

export function createPutWorkspacesWorkspaceIdLogging<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$put']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWorkspacesWorkspaceIdLoggingMutationOptions<
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

export function getPostWorkspacesWorkspaceIdLoggingMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/logging', 'POST'] as const
}

export function getPostWorkspacesWorkspaceIdLoggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceIdLoggingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspaceId'].logging.$post(args, options))
    },
  })
}

export function createPostWorkspacesWorkspaceIdLogging<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkspacesWorkspaceIdLoggingMutationOptions<
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

export function getDeleteWorkspacesWorkspaceIdLoggingMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/logging', 'DELETE'] as const
}

export function getDeleteWorkspacesWorkspaceIdLoggingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspaceIdLoggingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$delete']>,
    ) {
      return parseResponse(client.workspaces[':workspaceId'].logging.$delete(args, options))
    },
  })
}

export function createDeleteWorkspacesWorkspaceIdLogging<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWorkspacesWorkspaceIdLoggingMutationOptions<
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

export function getWorkspacesWorkspaceIdRulegroupsnamespacesQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workspaces', '/workspaces/:workspaceId/rulegroupsnamespaces', keyArgs] as const
}

export function getWorkspacesWorkspaceIdRulegroupsnamespacesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdRulegroupsnamespacesQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceIdRulegroupsnamespacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspaceId'].rulegroupsnamespaces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceIdRulegroupsnamespaces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceIdRulegroupsnamespacesQueryKey>
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
      ...getWorkspacesWorkspaceIdRulegroupsnamespacesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostWorkspacesWorkspaceIdRulegroupsnamespacesMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/rulegroupsnamespaces', 'POST'] as const
}

export function getPostWorkspacesWorkspaceIdRulegroupsnamespacesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceIdRulegroupsnamespacesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$post']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspaceId'].rulegroupsnamespaces.$post(args, options),
      )
    },
  })
}

export function createPostWorkspacesWorkspaceIdRulegroupsnamespaces<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkspacesWorkspaceIdRulegroupsnamespacesMutationOptions<
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

export function getWorkspacesQueryKey(args: InferRequestType<typeof client.workspaces.$get>) {
  const { header: _, ...keyArgs } = args
  return ['workspaces', '/workspaces', keyArgs] as const
}

export function getWorkspacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.workspaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkspacesQueryKey>
  >({
    queryKey: getWorkspacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.workspaces.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesQueryKey>
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
    return { ...getWorkspacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostWorkspacesMutationKey() {
  return ['workspaces', '/workspaces', 'POST'] as const
}

export function getPostWorkspacesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$post>>>>>,
    TError,
    InferRequestType<typeof client.workspaces.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.workspaces.$post>) {
      return parseResponse(client.workspaces.$post(args, options))
    },
  })
}

export function createPostWorkspaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.workspaces.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkspacesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getWorkspacesWorkspaceIdRulegroupsnamespacesNameQueryKey(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['workspaces', '/workspaces/:workspaceId/rulegroupsnamespaces/:name', keyArgs] as const
}

export function getWorkspacesWorkspaceIdRulegroupsnamespacesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdRulegroupsnamespacesNameQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceIdRulegroupsnamespacesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspaceId'].rulegroupsnamespaces[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceIdRulegroupsnamespacesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceIdRulegroupsnamespacesNameQueryKey>
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
      ...getWorkspacesWorkspaceIdRulegroupsnamespacesNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutWorkspacesWorkspaceIdRulegroupsnamespacesNameMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/rulegroupsnamespaces/:name', 'PUT'] as const
}

export function getPutWorkspacesWorkspaceIdRulegroupsnamespacesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutWorkspacesWorkspaceIdRulegroupsnamespacesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$put']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspaceId'].rulegroupsnamespaces[':name'].$put(args, options),
      )
    },
  })
}

export function createPutWorkspacesWorkspaceIdRulegroupsnamespacesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutWorkspacesWorkspaceIdRulegroupsnamespacesNameMutationOptions<
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

export function getDeleteWorkspacesWorkspaceIdRulegroupsnamespacesNameMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/rulegroupsnamespaces/:name', 'DELETE'] as const
}

export function getDeleteWorkspacesWorkspaceIdRulegroupsnamespacesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspaceIdRulegroupsnamespacesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$delete']
      >,
    ) {
      return parseResponse(
        client.workspaces[':workspaceId'].rulegroupsnamespaces[':name'].$delete(args, options),
      )
    },
  })
}

export function createDeleteWorkspacesWorkspaceIdRulegroupsnamespacesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWorkspacesWorkspaceIdRulegroupsnamespacesNameMutationOptions<
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

export function getWorkspacesWorkspaceIdQueryKey(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['workspaces', '/workspaces/:workspaceId', keyArgs] as const
}

export function getWorkspacesWorkspaceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
  >({
    queryKey: getWorkspacesWorkspaceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.workspaces[':workspaceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createWorkspacesWorkspaceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.workspaces)[':workspaceId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
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
      ...getWorkspacesWorkspaceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteWorkspacesWorkspaceIdMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId', 'DELETE'] as const
}

export function getDeleteWorkspacesWorkspaceIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspaceId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWorkspacesWorkspaceIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspaceId']['$delete']>,
    ) {
      return parseResponse(client.workspaces[':workspaceId'].$delete(args, options))
    },
  })
}

export function createDeleteWorkspacesWorkspaceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspaceId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWorkspacesWorkspaceIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function createDeleteTagsResourceArnTagKeys<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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

export function getPostWorkspacesWorkspaceIdAliasMutationKey() {
  return ['workspaces', '/workspaces/:workspaceId/alias', 'POST'] as const
}

export function getPostWorkspacesWorkspaceIdAliasMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['alias']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.workspaces)[':workspaceId']['alias']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWorkspacesWorkspaceIdAliasMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.workspaces)[':workspaceId']['alias']['$post']>,
    ) {
      return parseResponse(client.workspaces[':workspaceId'].alias.$post(args, options))
    },
  })
}

export function createPostWorkspacesWorkspaceIdAlias<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['alias']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspaceId']['alias']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostWorkspacesWorkspaceIdAliasMutationOptions<
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
