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

export function getTagsKey() {
  return ['tags'] as const
}

export function getWorkspacesKey() {
  return ['workspaces'] as const
}

export function getWorkspacesWorkspaceIdAlertmanagerDefinitionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workspaces', '/workspaces/:workspaceId/alertmanager/definition', keyArgs] as const
}

export function getWorkspacesWorkspaceIdAlertmanagerDefinitionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceIdAlertmanagerDefinitionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspaceId'].alertmanager.definition.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceIdAlertmanagerDefinition<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
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
                    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
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
                    (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceIdAlertmanagerDefinitionQueryKey>
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
              (typeof client.workspaces)[':workspaceId']['alertmanager']['definition']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdAlertmanagerDefinitionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceIdAlertmanagerDefinitionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspaceId'].alertmanager.definition.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutWorkspacesWorkspaceIdAlertmanagerDefinition<
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
  const mutationDefaults = getPutWorkspacesWorkspaceIdAlertmanagerDefinitionMutationOptions<
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

export function usePostWorkspacesWorkspaceIdAlertmanagerDefinition<
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
  const mutationDefaults = getPostWorkspacesWorkspaceIdAlertmanagerDefinitionMutationOptions<
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

export function useDeleteWorkspacesWorkspaceIdAlertmanagerDefinition<
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
  const mutationDefaults = getDeleteWorkspacesWorkspaceIdAlertmanagerDefinitionMutationOptions<
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

export function getWorkspacesWorkspaceIdLoggingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workspaces', '/workspaces/:workspaceId/logging', keyArgs] as const
}

export function getWorkspacesWorkspaceIdLoggingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceIdLoggingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspaceId'].logging.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceIdLogging<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceIdLoggingQueryKey>
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
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdLoggingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceIdLoggingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspaceId'].logging.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutWorkspacesWorkspaceIdLogging<
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
                Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$put']>,
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
  const mutationDefaults = getPutWorkspacesWorkspaceIdLoggingMutationOptions<
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

export function usePostWorkspacesWorkspaceIdLogging<
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
                Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$post']>,
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
  const mutationDefaults = getPostWorkspacesWorkspaceIdLoggingMutationOptions<
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

export function useDeleteWorkspacesWorkspaceIdLogging<
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
                  ReturnType<(typeof client.workspaces)[':workspaceId']['logging']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.workspaces)[':workspaceId']['logging']['$delete']>,
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
  const mutationDefaults = getDeleteWorkspacesWorkspaceIdLoggingMutationOptions<
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

export function getWorkspacesWorkspaceIdRulegroupsnamespacesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workspaces', '/workspaces/:workspaceId/rulegroupsnamespaces', keyArgs] as const
}

export function getWorkspacesWorkspaceIdRulegroupsnamespacesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceIdRulegroupsnamespacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspaceId'].rulegroupsnamespaces.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceIdRulegroupsnamespaces<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']>
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
                    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']
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
                    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceIdRulegroupsnamespacesQueryKey>
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
            ReturnType<(typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdRulegroupsnamespacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceIdRulegroupsnamespacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspaceId'].rulegroupsnamespaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWorkspacesWorkspaceIdRulegroupsnamespaces<
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
  const mutationDefaults = getPostWorkspacesWorkspaceIdRulegroupsnamespacesMutationOptions<
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

export function getWorkspacesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workspaces.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workspaces', '/workspaces', keyArgs] as const
}

export function getWorkspacesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workspaces.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWorkspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.workspaces.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>
          >,
          ReturnType<typeof getWorkspacesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWorkspacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostWorkspaces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.workspaces.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.workspaces.$post>,
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
  const mutationDefaults = getPostWorkspacesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWorkspacesWorkspaceIdRulegroupsnamespacesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workspaces', '/workspaces/:workspaceId/rulegroupsnamespaces/:name', keyArgs] as const
}

export function getWorkspacesWorkspaceIdRulegroupsnamespacesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceIdRulegroupsnamespacesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspaceId'].rulegroupsnamespaces[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceIdRulegroupsnamespacesName<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
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
                    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
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
                    (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceIdRulegroupsnamespacesNameQueryKey>
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
              (typeof client.workspaces)[':workspaceId']['rulegroupsnamespaces'][':name']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdRulegroupsnamespacesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceIdRulegroupsnamespacesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspaceId'].rulegroupsnamespaces[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutWorkspacesWorkspaceIdRulegroupsnamespacesName<
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
  const mutationDefaults = getPutWorkspacesWorkspaceIdRulegroupsnamespacesNameMutationOptions<
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

export function useDeleteWorkspacesWorkspaceIdRulegroupsnamespacesName<
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
  const mutationDefaults = getDeleteWorkspacesWorkspaceIdRulegroupsnamespacesNameMutationOptions<
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

export function getWorkspacesWorkspaceIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workspaces)[':workspaceId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['workspaces', '/workspaces/:workspaceId', keyArgs] as const
}

export function getWorkspacesWorkspaceIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workspaces)[':workspaceId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWorkspacesWorkspaceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.workspaces[':workspaceId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWorkspacesWorkspaceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.workspaces)[':workspaceId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.workspaces)[':workspaceId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWorkspacesWorkspaceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWorkspacesWorkspaceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.workspaces[':workspaceId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteWorkspacesWorkspaceId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteWorkspacesWorkspaceIdMutationOptions<TError, TOnMutateResult>(
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

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function usePostWorkspacesWorkspaceIdAlias<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostWorkspacesWorkspaceIdAliasMutationOptions<
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
