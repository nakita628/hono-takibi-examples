import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGreengrassKey() {
  return ['greengrass'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getGreengrassGroupsGroupIdRoleQueryKey(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups/:GroupId/role', keyArgs] as const
}

export function getGreengrassGroupsGroupIdRoleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassGroupsGroupIdRoleQueryKey>
  >({
    queryKey: getGreengrassGroupsGroupIdRoleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.groups[':GroupId'].role.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassGroupsGroupIdRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdRoleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassGroupsGroupIdRoleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassGroupsGroupIdRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdRoleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassGroupsGroupIdRoleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassGroupsGroupIdRoleMutationKey() {
  return ['greengrass', '/greengrass/groups/:GroupId/role', 'PUT'] as const
}

export function getPutGreengrassGroupsGroupIdRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassGroupsGroupIdRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$put']>,
    ) {
      return parseResponse(client.greengrass.groups[':GroupId'].role.$put(args, options))
    },
  })
}

export function usePutGreengrassGroupsGroupIdRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGreengrassGroupsGroupIdRoleMutationOptions<
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

export function getDeleteGreengrassGroupsGroupIdRoleMutationKey() {
  return ['greengrass', '/greengrass/groups/:GroupId/role', 'DELETE'] as const
}

export function getDeleteGreengrassGroupsGroupIdRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassGroupsGroupIdRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$delete']>,
    ) {
      return parseResponse(client.greengrass.groups[':GroupId'].role.$delete(args, options))
    },
  })
}

export function useDeleteGreengrassGroupsGroupIdRole<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGreengrassGroupsGroupIdRoleMutationOptions<
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

export function getGreengrassServiceroleQueryKey(
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/servicerole', keyArgs] as const
}

export function getGreengrassServiceroleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassServiceroleQueryKey>
  >({
    queryKey: getGreengrassServiceroleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.servicerole.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassServicerole<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassServiceroleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassServiceroleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassServicerole<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassServiceroleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassServiceroleQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassServiceroleMutationKey() {
  return ['greengrass', '/greengrass/servicerole', 'PUT'] as const
}

export function getPutGreengrassServiceroleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.servicerole.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassServiceroleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.servicerole.$put>) {
      return parseResponse(client.greengrass.servicerole.$put(args, options))
    },
  })
}

export function usePutGreengrassServicerole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.servicerole.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGreengrassServiceroleMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGreengrassServiceroleMutationKey() {
  return ['greengrass', '/greengrass/servicerole', 'DELETE'] as const
}

export function getDeleteGreengrassServiceroleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$delete>>>
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.servicerole.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassServiceroleMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.servicerole.$delete>) {
      return parseResponse(client.greengrass.servicerole.$delete(args, options))
    },
  })
}

export function useDeleteGreengrassServicerole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.servicerole.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGreengrassServiceroleMutationOptions<TError, TOnMutateResult>(
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

export function getGreengrassDefinitionConnectorsQueryKey(
  args: InferRequestType<typeof client.greengrass.definition.connectors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/connectors', keyArgs] as const
}

export function getGreengrassDefinitionConnectorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.connectors.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.connectors.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.definition.connectors.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionConnectorsQueryKey>
  >({
    queryKey: getGreengrassDefinitionConnectorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.connectors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionConnectors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.connectors.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.connectors.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.connectors.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionConnectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionConnectorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionConnectors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.connectors.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.connectors.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.connectors.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionConnectorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionConnectorsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionConnectorsMutationKey() {
  return ['greengrass', '/greengrass/definition/connectors', 'POST'] as const
}

export function getPostGreengrassDefinitionConnectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.definition.connectors.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.definition.connectors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionConnectorsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.definition.connectors.$post>) {
      return parseResponse(client.greengrass.definition.connectors.$post(args, options))
    },
  })
}

export function usePostGreengrassDefinitionConnectors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.connectors.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.definition.connectors.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassDefinitionConnectorsMutationOptions<
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

export function getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/connectors/:ConnectorDefinitionId/versions',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsQueryKey>
  >({
    queryKey: getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.connectors[':ConnectorDefinitionId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionConnectorsConnectorDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionConnectorsConnectorDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsMutationKey() {
  return [
    'greengrass',
    '/greengrass/definition/connectors/:ConnectorDefinitionId/versions',
    'POST',
  ] as const
}

export function getPostGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.connectors[':ConnectorDefinitionId'].versions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGreengrassDefinitionConnectorsConnectorDefinitionIdVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsMutationOptions<
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

export function getGreengrassDefinitionCoresQueryKey(
  args: InferRequestType<typeof client.greengrass.definition.cores.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/cores', keyArgs] as const
}

export function getGreengrassDefinitionCoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.cores.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.cores.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.cores.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionCoresQueryKey>
  >({
    queryKey: getGreengrassDefinitionCoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.cores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionCores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.cores.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.cores.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.cores.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionCoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionCoresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionCores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.cores.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.cores.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.cores.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionCoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionCoresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionCoresMutationKey() {
  return ['greengrass', '/greengrass/definition/cores', 'POST'] as const
}

export function getPostGreengrassDefinitionCoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.cores.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.definition.cores.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionCoresMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.definition.cores.$post>) {
      return parseResponse(client.greengrass.definition.cores.$post(args, options))
    },
  })
}

export function usePostGreengrassDefinitionCores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.cores.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.definition.cores.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassDefinitionCoresMutationOptions<TError, TOnMutateResult>(
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

export function getGreengrassDefinitionCoresCoreDefinitionIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/cores/:CoreDefinitionId/versions', keyArgs] as const
}

export function getGreengrassDefinitionCoresCoreDefinitionIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionCoresCoreDefinitionIdVersionsQueryKey>
  >({
    queryKey: getGreengrassDefinitionCoresCoreDefinitionIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.cores[':CoreDefinitionId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionCoresCoreDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionCoresCoreDefinitionIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionCoresCoreDefinitionIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionCoresCoreDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionCoresCoreDefinitionIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionCoresCoreDefinitionIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionCoresCoreDefinitionIdVersionsMutationKey() {
  return ['greengrass', '/greengrass/definition/cores/:CoreDefinitionId/versions', 'POST'] as const
}

export function getPostGreengrassDefinitionCoresCoreDefinitionIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionCoresCoreDefinitionIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.cores[':CoreDefinitionId'].versions.$post(args, options),
      )
    },
  })
}

export function usePostGreengrassDefinitionCoresCoreDefinitionIdVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassDefinitionCoresCoreDefinitionIdVersionsMutationOptions<
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

export function getGreengrassGroupsGroupIdDeploymentsQueryKey(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups/:GroupId/deployments', keyArgs] as const
}

export function getGreengrassGroupsGroupIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassGroupsGroupIdDeploymentsQueryKey>
  >({
    queryKey: getGreengrassGroupsGroupIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.groups[':GroupId'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassGroupsGroupIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassGroupsGroupIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassGroupsGroupIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassGroupsGroupIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassGroupsGroupIdDeploymentsMutationKey() {
  return ['greengrass', '/greengrass/groups/:GroupId/deployments', 'POST'] as const
}

export function getPostGreengrassGroupsGroupIdDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassGroupsGroupIdDeploymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$post']>,
    ) {
      return parseResponse(client.greengrass.groups[':GroupId'].deployments.$post(args, options))
    },
  })
}

export function usePostGreengrassGroupsGroupIdDeployments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassGroupsGroupIdDeploymentsMutationOptions<
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

export function getGreengrassDefinitionDevicesQueryKey(
  args: InferRequestType<typeof client.greengrass.definition.devices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/devices', keyArgs] as const
}

export function getGreengrassDefinitionDevicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.devices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.devices.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.devices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionDevicesQueryKey>
  >({
    queryKey: getGreengrassDefinitionDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.devices.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.devices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.devices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.devices.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionDevicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionDevices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.devices.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.devices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.devices.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionDevicesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionDevicesMutationKey() {
  return ['greengrass', '/greengrass/definition/devices', 'POST'] as const
}

export function getPostGreengrassDefinitionDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.devices.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.definition.devices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionDevicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.definition.devices.$post>) {
      return parseResponse(client.greengrass.definition.devices.$post(args, options))
    },
  })
}

export function usePostGreengrassDefinitionDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.devices.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.definition.devices.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassDefinitionDevicesMutationOptions<
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

export function getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/devices/:DeviceDefinitionId/versions',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsQueryKey>
  >({
    queryKey: getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.devices[':DeviceDefinitionId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionDevicesDeviceDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionDevicesDeviceDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionDevicesDeviceDefinitionIdVersionsMutationKey() {
  return [
    'greengrass',
    '/greengrass/definition/devices/:DeviceDefinitionId/versions',
    'POST',
  ] as const
}

export function getPostGreengrassDefinitionDevicesDeviceDefinitionIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionDevicesDeviceDefinitionIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.devices[':DeviceDefinitionId'].versions.$post(args, options),
      )
    },
  })
}

export function usePostGreengrassDefinitionDevicesDeviceDefinitionIdVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostGreengrassDefinitionDevicesDeviceDefinitionIdVersionsMutationOptions<
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

export function getGreengrassDefinitionFunctionsQueryKey(
  args: InferRequestType<typeof client.greengrass.definition.functions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/functions', keyArgs] as const
}

export function getGreengrassDefinitionFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.functions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.functions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.definition.functions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionFunctionsQueryKey>
  >({
    queryKey: getGreengrassDefinitionFunctionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.functions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.functions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.functions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.functions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionFunctionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionFunctions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.functions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.functions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.functions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionFunctionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionFunctionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionFunctionsMutationKey() {
  return ['greengrass', '/greengrass/definition/functions', 'POST'] as const
}

export function getPostGreengrassDefinitionFunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.definition.functions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.definition.functions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionFunctionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.definition.functions.$post>) {
      return parseResponse(client.greengrass.definition.functions.$post(args, options))
    },
  })
}

export function usePostGreengrassDefinitionFunctions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.functions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.definition.functions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassDefinitionFunctionsMutationOptions<
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

export function getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/functions/:FunctionDefinitionId/versions',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsQueryKey>
  >({
    queryKey: getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.functions[':FunctionDefinitionId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionFunctionsFunctionDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionFunctionsFunctionDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsMutationKey() {
  return [
    'greengrass',
    '/greengrass/definition/functions/:FunctionDefinitionId/versions',
    'POST',
  ] as const
}

export function getPostGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.functions[':FunctionDefinitionId'].versions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGreengrassDefinitionFunctionsFunctionDefinitionIdVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsMutationOptions<
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

export function getGreengrassGroupsQueryKey(
  args: InferRequestType<typeof client.greengrass.groups.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups', keyArgs] as const
}

export function getGreengrassGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.greengrass.groups.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassGroupsQueryKey>
  >({
    queryKey: getGreengrassGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.groups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGreengrassGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.groups.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGreengrassGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGreengrassGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.groups.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGreengrassGroupsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGreengrassGroupsMutationKey() {
  return ['greengrass', '/greengrass/groups', 'POST'] as const
}

export function getPostGreengrassGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.greengrass.groups.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassGroupsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.groups.$post>) {
      return parseResponse(client.greengrass.groups.$post(args, options))
    },
  })
}

export function usePostGreengrassGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.groups.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getGreengrassGroupsGroupIdCertificateauthoritiesQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups/:GroupId/certificateauthorities', keyArgs] as const
}

export function getGreengrassGroupsGroupIdCertificateauthoritiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassGroupsGroupIdCertificateauthoritiesQueryKey>
  >({
    queryKey: getGreengrassGroupsGroupIdCertificateauthoritiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.groups[':GroupId'].certificateauthorities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassGroupsGroupIdCertificateauthorities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdCertificateauthoritiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassGroupsGroupIdCertificateauthoritiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassGroupsGroupIdCertificateauthorities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdCertificateauthoritiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassGroupsGroupIdCertificateauthoritiesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassGroupsGroupIdCertificateauthoritiesMutationKey() {
  return ['greengrass', '/greengrass/groups/:GroupId/certificateauthorities', 'POST'] as const
}

export function getPostGreengrassGroupsGroupIdCertificateauthoritiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassGroupsGroupIdCertificateauthoritiesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$post']
      >,
    ) {
      return parseResponse(
        client.greengrass.groups[':GroupId'].certificateauthorities.$post(args, options),
      )
    },
  })
}

export function usePostGreengrassGroupsGroupIdCertificateauthorities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassGroupsGroupIdCertificateauthoritiesMutationOptions<
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

export function getGreengrassGroupsGroupIdVersionsQueryKey(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups/:GroupId/versions', keyArgs] as const
}

export function getGreengrassGroupsGroupIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassGroupsGroupIdVersionsQueryKey>
  >({
    queryKey: getGreengrassGroupsGroupIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.groups[':GroupId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassGroupsGroupIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassGroupsGroupIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassGroupsGroupIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassGroupsGroupIdVersionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassGroupsGroupIdVersionsMutationKey() {
  return ['greengrass', '/greengrass/groups/:GroupId/versions', 'POST'] as const
}

export function getPostGreengrassGroupsGroupIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassGroupsGroupIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$post']>,
    ) {
      return parseResponse(client.greengrass.groups[':GroupId'].versions.$post(args, options))
    },
  })
}

export function usePostGreengrassGroupsGroupIdVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassGroupsGroupIdVersionsMutationOptions<
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

export function getGreengrassDefinitionLoggersQueryKey(
  args: InferRequestType<typeof client.greengrass.definition.loggers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/loggers', keyArgs] as const
}

export function getGreengrassDefinitionLoggersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.loggers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.loggers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.loggers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionLoggersQueryKey>
  >({
    queryKey: getGreengrassDefinitionLoggersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.loggers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionLoggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.loggers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.loggers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.loggers.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionLoggersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionLoggersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionLoggers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.loggers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.loggers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.loggers.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionLoggersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionLoggersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionLoggersMutationKey() {
  return ['greengrass', '/greengrass/definition/loggers', 'POST'] as const
}

export function getPostGreengrassDefinitionLoggersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.loggers.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.definition.loggers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionLoggersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.definition.loggers.$post>) {
      return parseResponse(client.greengrass.definition.loggers.$post(args, options))
    },
  })
}

export function usePostGreengrassDefinitionLoggers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.loggers.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.definition.loggers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassDefinitionLoggersMutationOptions<
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

export function getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/loggers/:LoggerDefinitionId/versions',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsQueryKey>
  >({
    queryKey: getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.loggers[':LoggerDefinitionId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionLoggersLoggerDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionLoggersLoggerDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionLoggersLoggerDefinitionIdVersionsMutationKey() {
  return [
    'greengrass',
    '/greengrass/definition/loggers/:LoggerDefinitionId/versions',
    'POST',
  ] as const
}

export function getPostGreengrassDefinitionLoggersLoggerDefinitionIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionLoggersLoggerDefinitionIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.loggers[':LoggerDefinitionId'].versions.$post(args, options),
      )
    },
  })
}

export function usePostGreengrassDefinitionLoggersLoggerDefinitionIdVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostGreengrassDefinitionLoggersLoggerDefinitionIdVersionsMutationOptions<
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

export function getGreengrassDefinitionResourcesQueryKey(
  args: InferRequestType<typeof client.greengrass.definition.resources.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/resources', keyArgs] as const
}

export function getGreengrassDefinitionResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.resources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.resources.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.definition.resources.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionResourcesQueryKey>
  >({
    queryKey: getGreengrassDefinitionResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.resources.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.resources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.resources.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.resources.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionResourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.resources.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.resources.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.resources.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionResourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionResourcesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionResourcesMutationKey() {
  return ['greengrass', '/greengrass/definition/resources', 'POST'] as const
}

export function getPostGreengrassDefinitionResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.definition.resources.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.definition.resources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionResourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.definition.resources.$post>) {
      return parseResponse(client.greengrass.definition.resources.$post(args, options))
    },
  })
}

export function usePostGreengrassDefinitionResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.resources.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.definition.resources.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassDefinitionResourcesMutationOptions<
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

export function getGreengrassDefinitionResourcesResourceDefinitionIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/resources/:ResourceDefinitionId/versions',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionResourcesResourceDefinitionIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionResourcesResourceDefinitionIdVersionsQueryKey>
  >({
    queryKey: getGreengrassDefinitionResourcesResourceDefinitionIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.resources[':ResourceDefinitionId'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionResourcesResourceDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionResourcesResourceDefinitionIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionResourcesResourceDefinitionIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionResourcesResourceDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionResourcesResourceDefinitionIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionResourcesResourceDefinitionIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionResourcesResourceDefinitionIdVersionsMutationKey() {
  return [
    'greengrass',
    '/greengrass/definition/resources/:ResourceDefinitionId/versions',
    'POST',
  ] as const
}

export function getPostGreengrassDefinitionResourcesResourceDefinitionIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionResourcesResourceDefinitionIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.resources[':ResourceDefinitionId'].versions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGreengrassDefinitionResourcesResourceDefinitionIdVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostGreengrassDefinitionResourcesResourceDefinitionIdVersionsMutationOptions<
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

export function getPostGreengrassUpdatesMutationKey() {
  return ['greengrass', '/greengrass/updates', 'POST'] as const
}

export function getPostGreengrassUpdatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.updates.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.greengrass.updates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassUpdatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.updates.$post>) {
      return parseResponse(client.greengrass.updates.$post(args, options))
    },
  })
}

export function usePostGreengrassUpdates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.updates.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.updates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassUpdatesMutationOptions<TError, TOnMutateResult>(
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

export function getGreengrassDefinitionSubscriptionsQueryKey(
  args: InferRequestType<typeof client.greengrass.definition.subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/subscriptions', keyArgs] as const
}

export function getGreengrassDefinitionSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.subscriptions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionSubscriptionsQueryKey>
  >({
    queryKey: getGreengrassDefinitionSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.subscriptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionSubscriptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.definition.subscriptions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionSubscriptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionSubscriptionsMutationKey() {
  return ['greengrass', '/greengrass/definition/subscriptions', 'POST'] as const
}

export function getPostGreengrassDefinitionSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.definition.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassDefinitionSubscriptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.greengrass.definition.subscriptions.$post>,
    ) {
      return parseResponse(client.greengrass.definition.subscriptions.$post(args, options))
    },
  })
}

export function usePostGreengrassDefinitionSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.definition.subscriptions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassDefinitionSubscriptionsMutationOptions<
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

export function getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/subscriptions/:SubscriptionDefinitionId/versions',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsQueryKey>
  >({
    queryKey: getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].versions.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsMutationKey() {
  return [
    'greengrass',
    '/greengrass/definition/subscriptions/:SubscriptionDefinitionId/versions',
    'POST',
  ] as const
}

export function getPostGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$post']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].versions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsMutationOptions<
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

export function getGreengrassDefinitionConnectorsConnectorDefinitionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/connectors/:ConnectorDefinitionId',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionConnectorsConnectorDefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionConnectorsConnectorDefinitionIdQueryKey>
  >({
    queryKey: getGreengrassDefinitionConnectorsConnectorDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.connectors[':ConnectorDefinitionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionConnectorsConnectorDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionConnectorsConnectorDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionConnectorsConnectorDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionConnectorsConnectorDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionConnectorsConnectorDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionConnectorsConnectorDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassDefinitionConnectorsConnectorDefinitionIdMutationKey() {
  return ['greengrass', '/greengrass/definition/connectors/:ConnectorDefinitionId', 'PUT'] as const
}

export function getPutGreengrassDefinitionConnectorsConnectorDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassDefinitionConnectorsConnectorDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$put']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.connectors[':ConnectorDefinitionId'].$put(args, options),
      )
    },
  })
}

export function usePutGreengrassDefinitionConnectorsConnectorDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGreengrassDefinitionConnectorsConnectorDefinitionIdMutationOptions<
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

export function getDeleteGreengrassDefinitionConnectorsConnectorDefinitionIdMutationKey() {
  return [
    'greengrass',
    '/greengrass/definition/connectors/:ConnectorDefinitionId',
    'DELETE',
  ] as const
}

export function getDeleteGreengrassDefinitionConnectorsConnectorDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassDefinitionConnectorsConnectorDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.connectors[':ConnectorDefinitionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGreengrassDefinitionConnectorsConnectorDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteGreengrassDefinitionConnectorsConnectorDefinitionIdMutationOptions<
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

export function getGreengrassDefinitionCoresCoreDefinitionIdQueryKey(
  args: InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/cores/:CoreDefinitionId', keyArgs] as const
}

export function getGreengrassDefinitionCoresCoreDefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionCoresCoreDefinitionIdQueryKey>
  >({
    queryKey: getGreengrassDefinitionCoresCoreDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.cores[':CoreDefinitionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionCoresCoreDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionCoresCoreDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionCoresCoreDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionCoresCoreDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionCoresCoreDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionCoresCoreDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassDefinitionCoresCoreDefinitionIdMutationKey() {
  return ['greengrass', '/greengrass/definition/cores/:CoreDefinitionId', 'PUT'] as const
}

export function getPutGreengrassDefinitionCoresCoreDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassDefinitionCoresCoreDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$put']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.cores[':CoreDefinitionId'].$put(args, options),
      )
    },
  })
}

export function usePutGreengrassDefinitionCoresCoreDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGreengrassDefinitionCoresCoreDefinitionIdMutationOptions<
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

export function getDeleteGreengrassDefinitionCoresCoreDefinitionIdMutationKey() {
  return ['greengrass', '/greengrass/definition/cores/:CoreDefinitionId', 'DELETE'] as const
}

export function getDeleteGreengrassDefinitionCoresCoreDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassDefinitionCoresCoreDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.cores[':CoreDefinitionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGreengrassDefinitionCoresCoreDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGreengrassDefinitionCoresCoreDefinitionIdMutationOptions<
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

export function getGreengrassDefinitionDevicesDeviceDefinitionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/devices/:DeviceDefinitionId', keyArgs] as const
}

export function getGreengrassDefinitionDevicesDeviceDefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionDevicesDeviceDefinitionIdQueryKey>
  >({
    queryKey: getGreengrassDefinitionDevicesDeviceDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.devices[':DeviceDefinitionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionDevicesDeviceDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionDevicesDeviceDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionDevicesDeviceDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionDevicesDeviceDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionDevicesDeviceDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionDevicesDeviceDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassDefinitionDevicesDeviceDefinitionIdMutationKey() {
  return ['greengrass', '/greengrass/definition/devices/:DeviceDefinitionId', 'PUT'] as const
}

export function getPutGreengrassDefinitionDevicesDeviceDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassDefinitionDevicesDeviceDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$put']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.devices[':DeviceDefinitionId'].$put(args, options),
      )
    },
  })
}

export function usePutGreengrassDefinitionDevicesDeviceDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGreengrassDefinitionDevicesDeviceDefinitionIdMutationOptions<
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

export function getDeleteGreengrassDefinitionDevicesDeviceDefinitionIdMutationKey() {
  return ['greengrass', '/greengrass/definition/devices/:DeviceDefinitionId', 'DELETE'] as const
}

export function getDeleteGreengrassDefinitionDevicesDeviceDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassDefinitionDevicesDeviceDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.devices[':DeviceDefinitionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGreengrassDefinitionDevicesDeviceDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGreengrassDefinitionDevicesDeviceDefinitionIdMutationOptions<
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

export function getGreengrassDefinitionFunctionsFunctionDefinitionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/functions/:FunctionDefinitionId', keyArgs] as const
}

export function getGreengrassDefinitionFunctionsFunctionDefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionFunctionsFunctionDefinitionIdQueryKey>
  >({
    queryKey: getGreengrassDefinitionFunctionsFunctionDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.functions[':FunctionDefinitionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionFunctionsFunctionDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionFunctionsFunctionDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionFunctionsFunctionDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionFunctionsFunctionDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionFunctionsFunctionDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionFunctionsFunctionDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassDefinitionFunctionsFunctionDefinitionIdMutationKey() {
  return ['greengrass', '/greengrass/definition/functions/:FunctionDefinitionId', 'PUT'] as const
}

export function getPutGreengrassDefinitionFunctionsFunctionDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassDefinitionFunctionsFunctionDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$put']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.functions[':FunctionDefinitionId'].$put(args, options),
      )
    },
  })
}

export function usePutGreengrassDefinitionFunctionsFunctionDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGreengrassDefinitionFunctionsFunctionDefinitionIdMutationOptions<
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

export function getDeleteGreengrassDefinitionFunctionsFunctionDefinitionIdMutationKey() {
  return ['greengrass', '/greengrass/definition/functions/:FunctionDefinitionId', 'DELETE'] as const
}

export function getDeleteGreengrassDefinitionFunctionsFunctionDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassDefinitionFunctionsFunctionDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.functions[':FunctionDefinitionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGreengrassDefinitionFunctionsFunctionDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteGreengrassDefinitionFunctionsFunctionDefinitionIdMutationOptions<
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

export function getGreengrassGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups/:GroupId', keyArgs] as const
}

export function getGreengrassGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassGroupsGroupIdQueryKey>
  >({
    queryKey: getGreengrassGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.groups[':GroupId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassGroupsGroupIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassGroupsGroupIdMutationKey() {
  return ['greengrass', '/greengrass/groups/:GroupId', 'PUT'] as const
}

export function getPutGreengrassGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$put']>,
    ) {
      return parseResponse(client.greengrass.groups[':GroupId'].$put(args, options))
    },
  })
}

export function usePutGreengrassGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGreengrassGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteGreengrassGroupsGroupIdMutationKey() {
  return ['greengrass', '/greengrass/groups/:GroupId', 'DELETE'] as const
}

export function getDeleteGreengrassGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$delete']>,
    ) {
      return parseResponse(client.greengrass.groups[':GroupId'].$delete(args, options))
    },
  })
}

export function useDeleteGreengrassGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGreengrassGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getGreengrassDefinitionLoggersLoggerDefinitionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/loggers/:LoggerDefinitionId', keyArgs] as const
}

export function getGreengrassDefinitionLoggersLoggerDefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionLoggersLoggerDefinitionIdQueryKey>
  >({
    queryKey: getGreengrassDefinitionLoggersLoggerDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.loggers[':LoggerDefinitionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionLoggersLoggerDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionLoggersLoggerDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionLoggersLoggerDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionLoggersLoggerDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionLoggersLoggerDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionLoggersLoggerDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassDefinitionLoggersLoggerDefinitionIdMutationKey() {
  return ['greengrass', '/greengrass/definition/loggers/:LoggerDefinitionId', 'PUT'] as const
}

export function getPutGreengrassDefinitionLoggersLoggerDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassDefinitionLoggersLoggerDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$put']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.loggers[':LoggerDefinitionId'].$put(args, options),
      )
    },
  })
}

export function usePutGreengrassDefinitionLoggersLoggerDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGreengrassDefinitionLoggersLoggerDefinitionIdMutationOptions<
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

export function getDeleteGreengrassDefinitionLoggersLoggerDefinitionIdMutationKey() {
  return ['greengrass', '/greengrass/definition/loggers/:LoggerDefinitionId', 'DELETE'] as const
}

export function getDeleteGreengrassDefinitionLoggersLoggerDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassDefinitionLoggersLoggerDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.loggers[':LoggerDefinitionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGreengrassDefinitionLoggersLoggerDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGreengrassDefinitionLoggersLoggerDefinitionIdMutationOptions<
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

export function getGreengrassDefinitionResourcesResourceDefinitionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/resources/:ResourceDefinitionId', keyArgs] as const
}

export function getGreengrassDefinitionResourcesResourceDefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionResourcesResourceDefinitionIdQueryKey>
  >({
    queryKey: getGreengrassDefinitionResourcesResourceDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.resources[':ResourceDefinitionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionResourcesResourceDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionResourcesResourceDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionResourcesResourceDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionResourcesResourceDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionResourcesResourceDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionResourcesResourceDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassDefinitionResourcesResourceDefinitionIdMutationKey() {
  return ['greengrass', '/greengrass/definition/resources/:ResourceDefinitionId', 'PUT'] as const
}

export function getPutGreengrassDefinitionResourcesResourceDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassDefinitionResourcesResourceDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$put']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.resources[':ResourceDefinitionId'].$put(args, options),
      )
    },
  })
}

export function usePutGreengrassDefinitionResourcesResourceDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGreengrassDefinitionResourcesResourceDefinitionIdMutationOptions<
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

export function getDeleteGreengrassDefinitionResourcesResourceDefinitionIdMutationKey() {
  return ['greengrass', '/greengrass/definition/resources/:ResourceDefinitionId', 'DELETE'] as const
}

export function getDeleteGreengrassDefinitionResourcesResourceDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassDefinitionResourcesResourceDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.resources[':ResourceDefinitionId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteGreengrassDefinitionResourcesResourceDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteGreengrassDefinitionResourcesResourceDefinitionIdMutationOptions<
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

export function getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/subscriptions/:SubscriptionDefinitionId',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdQueryKey>
  >({
    queryKey: getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassDefinitionSubscriptionsSubscriptionDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionSubscriptionsSubscriptionDefinitionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdMutationKey() {
  return [
    'greengrass',
    '/greengrass/definition/subscriptions/:SubscriptionDefinitionId',
    'PUT',
  ] as const
}

export function getPutGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$put']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].$put(args, options),
      )
    },
  })
}

export function usePutGreengrassDefinitionSubscriptionsSubscriptionDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdMutationOptions<
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

export function getDeleteGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdMutationKey() {
  return [
    'greengrass',
    '/greengrass/definition/subscriptions/:SubscriptionDefinitionId',
    'DELETE',
  ] as const
}

export function getDeleteGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$delete']
      >,
    ) {
      return parseResponse(
        client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteGreengrassDefinitionSubscriptionsSubscriptionDefinitionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdMutationOptions<
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

export function getGreengrassBulkDeploymentsBulkDeploymentIdStatusQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/bulk/deployments/:BulkDeploymentId/status', keyArgs] as const
}

export function getGreengrassBulkDeploymentsBulkDeploymentIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassBulkDeploymentsBulkDeploymentIdStatusQueryKey>
  >({
    queryKey: getGreengrassBulkDeploymentsBulkDeploymentIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.bulk.deployments[':BulkDeploymentId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassBulkDeploymentsBulkDeploymentIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassBulkDeploymentsBulkDeploymentIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassBulkDeploymentsBulkDeploymentIdStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassBulkDeploymentsBulkDeploymentIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassBulkDeploymentsBulkDeploymentIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassBulkDeploymentsBulkDeploymentIdStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGreengrassThingsThingNameConnectivityInfoQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/things/:ThingName/connectivityInfo', keyArgs] as const
}

export function getGreengrassThingsThingNameConnectivityInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassThingsThingNameConnectivityInfoQueryKey>
  >({
    queryKey: getGreengrassThingsThingNameConnectivityInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.things[':ThingName'].connectivityInfo.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassThingsThingNameConnectivityInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassThingsThingNameConnectivityInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassThingsThingNameConnectivityInfoQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassThingsThingNameConnectivityInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassThingsThingNameConnectivityInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassThingsThingNameConnectivityInfoQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassThingsThingNameConnectivityInfoMutationKey() {
  return ['greengrass', '/greengrass/things/:ThingName/connectivityInfo', 'PUT'] as const
}

export function getPutGreengrassThingsThingNameConnectivityInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassThingsThingNameConnectivityInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$put']
      >,
    ) {
      return parseResponse(
        client.greengrass.things[':ThingName'].connectivityInfo.$put(args, options),
      )
    },
  })
}

export function usePutGreengrassThingsThingNameConnectivityInfo<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGreengrassThingsThingNameConnectivityInfoMutationOptions<
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

export function getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/connectors/:ConnectorDefinitionId/versions/:ConnectorDefinitionVersionId',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdQueryKey
    >
  >({
    queryKey:
      getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.connectors[':ConnectorDefinitionId'].versions[
          ':ConnectorDefinitionVersionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/cores/:CoreDefinitionId/versions/:CoreDefinitionVersionId',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdQueryKey
    >
  >({
    queryKey:
      getGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.cores[':CoreDefinitionId'].versions[
          ':CoreDefinitionVersionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/groups/:GroupId/deployments/:DeploymentId/status',
    keyArgs,
  ] as const
}

export function getGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusQueryKey>
  >({
    queryKey: getGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.groups[':GroupId'].deployments[':DeploymentId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassGroupsGroupIdDeploymentsDeploymentIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassGroupsGroupIdDeploymentsDeploymentIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/devices/:DeviceDefinitionId/versions/:DeviceDefinitionVersionId',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdQueryKey
    >
  >({
    queryKey:
      getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.devices[':DeviceDefinitionId'].versions[
          ':DeviceDefinitionVersionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/functions/:FunctionDefinitionId/versions/:FunctionDefinitionVersionId',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdQueryKey
    >
  >({
    queryKey:
      getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.functions[':FunctionDefinitionId'].versions[
          ':FunctionDefinitionVersionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/groups/:GroupId/certificateauthorities/:CertificateAuthorityId',
    keyArgs,
  ] as const
}

export function getGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdQueryKey
    >
  >({
    queryKey: getGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.groups[':GroupId'].certificateauthorities[':CertificateAuthorityId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/groups/:GroupId/certificateauthorities/configuration/expiry',
    keyArgs,
  ] as const
}

export function getGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryQueryKey>
  >({
    queryKey: getGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.groups[':GroupId'].certificateauthorities.configuration.expiry.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiry<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryMutationKey() {
  return [
    'greengrass',
    '/greengrass/groups/:GroupId/certificateauthorities/configuration/expiry',
    'PUT',
  ] as const
}

export function getPutGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$put']
      >,
    ) {
      return parseResponse(
        client.greengrass.groups[':GroupId'].certificateauthorities.configuration.expiry.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiry<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryMutationOptions<
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

export function getGreengrassGroupsGroupIdVersionsGroupVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups/:GroupId/versions/:GroupVersionId', keyArgs] as const
}

export function getGreengrassGroupsGroupIdVersionsGroupVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassGroupsGroupIdVersionsGroupVersionIdQueryKey>
  >({
    queryKey: getGreengrassGroupsGroupIdVersionsGroupVersionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.groups[':GroupId'].versions[':GroupVersionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassGroupsGroupIdVersionsGroupVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdVersionsGroupVersionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassGroupsGroupIdVersionsGroupVersionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassGroupsGroupIdVersionsGroupVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassGroupsGroupIdVersionsGroupVersionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassGroupsGroupIdVersionsGroupVersionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/loggers/:LoggerDefinitionId/versions/:LoggerDefinitionVersionId',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdQueryKey
    >
  >({
    queryKey:
      getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.loggers[':LoggerDefinitionId'].versions[
          ':LoggerDefinitionVersionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/resources/:ResourceDefinitionId/versions/:ResourceDefinitionVersionId',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdQueryKey
    >
  >({
    queryKey:
      getGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.resources[':ResourceDefinitionId'].versions[
          ':ResourceDefinitionVersionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/definition/subscriptions/:SubscriptionDefinitionId/versions/:SubscriptionDefinitionVersionId',
    keyArgs,
  ] as const
}

export function getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdQueryKey
    >
  >({
    queryKey:
      getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].versions[
          ':SubscriptionDefinitionVersionId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGreengrassThingsThingNameRuntimeconfigQueryKey(
  args: InferRequestType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/things/:ThingName/runtimeconfig', keyArgs] as const
}

export function getGreengrassThingsThingNameRuntimeconfigQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassThingsThingNameRuntimeconfigQueryKey>
  >({
    queryKey: getGreengrassThingsThingNameRuntimeconfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.things[':ThingName'].runtimeconfig.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassThingsThingNameRuntimeconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassThingsThingNameRuntimeconfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassThingsThingNameRuntimeconfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassThingsThingNameRuntimeconfig<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassThingsThingNameRuntimeconfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassThingsThingNameRuntimeconfigQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutGreengrassThingsThingNameRuntimeconfigMutationKey() {
  return ['greengrass', '/greengrass/things/:ThingName/runtimeconfig', 'PUT'] as const
}

export function getPutGreengrassThingsThingNameRuntimeconfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassThingsThingNameRuntimeconfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$put']
      >,
    ) {
      return parseResponse(client.greengrass.things[':ThingName'].runtimeconfig.$put(args, options))
    },
  })
}

export function usePutGreengrassThingsThingNameRuntimeconfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGreengrassThingsThingNameRuntimeconfigMutationOptions<
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

export function getGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsQueryKey(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'greengrass',
    '/greengrass/bulk/deployments/:BulkDeploymentId/detailed-reports',
    keyArgs,
  ] as const
}

export function getGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsQueryKey>
  >({
    queryKey: getGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.bulk.deployments[':BulkDeploymentId']['detailed-reports'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassBulkDeploymentsBulkDeploymentIdDetailedReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassBulkDeploymentsBulkDeploymentIdDetailedReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGreengrassBulkDeploymentsQueryKey(
  args: InferRequestType<typeof client.greengrass.bulk.deployments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/bulk/deployments', keyArgs] as const
}

export function getGreengrassBulkDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.bulk.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGreengrassBulkDeploymentsQueryKey>
  >({
    queryKey: getGreengrassBulkDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.greengrass.bulk.deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGreengrassBulkDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.bulk.deployments.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassBulkDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGreengrassBulkDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGreengrassBulkDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.greengrass.bulk.deployments.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGreengrassBulkDeploymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGreengrassBulkDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGreengrassBulkDeploymentsMutationKey() {
  return ['greengrass', '/greengrass/bulk/deployments', 'POST'] as const
}

export function getPostGreengrassBulkDeploymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.greengrass.bulk.deployments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassBulkDeploymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.greengrass.bulk.deployments.$post>) {
      return parseResponse(client.greengrass.bulk.deployments.$post(args, options))
    },
  })
}

export function usePostGreengrassBulkDeployments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.greengrass.bulk.deployments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassBulkDeploymentsMutationOptions<TError, TOnMutateResult>(
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
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resource-arn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resource-arn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTagsResourceArnQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTagsResourceArnQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resource-arn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resource-arn']['$post']>) {
      return parseResponse(client.tags[':resource-arn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resource-arn']['$post']>,
        TOnMutateResult
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

export function getPostGreengrassGroupsGroupIdDeploymentsResetMutationKey() {
  return ['greengrass', '/greengrass/groups/:GroupId/deployments/$reset', 'POST'] as const
}

export function getPostGreengrassGroupsGroupIdDeploymentsResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.groups)[':GroupId']['deployments']['$reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.groups)[':GroupId']['deployments']['$reset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGreengrassGroupsGroupIdDeploymentsResetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.groups)[':GroupId']['deployments']['$reset']['$post']
      >,
    ) {
      return parseResponse(
        client.greengrass.groups[':GroupId'].deployments.$reset.$post(args, options),
      )
    },
  })
}

export function usePostGreengrassGroupsGroupIdDeploymentsReset<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.groups)[':GroupId']['deployments']['$reset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.groups)[':GroupId']['deployments']['$reset']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGreengrassGroupsGroupIdDeploymentsResetMutationOptions<
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

export function getPutGreengrassBulkDeploymentsBulkDeploymentIdStopMutationKey() {
  return ['greengrass', '/greengrass/bulk/deployments/:BulkDeploymentId/$stop', 'PUT'] as const
}

export function getPutGreengrassBulkDeploymentsBulkDeploymentIdStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['$stop']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['$stop']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutGreengrassBulkDeploymentsBulkDeploymentIdStopMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['$stop']['$put']
      >,
    ) {
      return parseResponse(
        client.greengrass.bulk.deployments[':BulkDeploymentId'].$stop.$put(args, options),
      )
    },
  })
}

export function usePutGreengrassBulkDeploymentsBulkDeploymentIdStop<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['$stop']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['$stop']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGreengrassBulkDeploymentsBulkDeploymentIdStopMutationOptions<
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resource-arn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>,
        TOnMutateResult
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
