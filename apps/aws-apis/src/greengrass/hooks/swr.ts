import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGreengrassKey() {
  return ['greengrass'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getGetGreengrassGroupsGroupIdRoleKey(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups/:GroupId/role', keyArgs] as const
}

export function useGetGreengrassGroupsGroupIdRole<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>>
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
        ? getGetGreengrassGroupsGroupIdRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.groups[':GroupId'].role.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassGroupsGroupIdRole<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>>
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
        ? getGetGreengrassGroupsGroupIdRoleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.groups[':GroupId'].role.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassGroupsGroupIdRoleKey() {
  return ['greengrass', '/greengrass/groups/:GroupId/role', 'PUT'] as const
}

export function usePutGreengrassGroupsGroupIdRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassGroupsGroupIdRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$put']> },
      ) => parseResponse(client.greengrass.groups[':GroupId'].role.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGreengrassGroupsGroupIdRoleKey() {
  return ['greengrass', '/greengrass/groups/:GroupId/role', 'DELETE'] as const
}

export function useDeleteGreengrassGroupsGroupIdRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['role']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassGroupsGroupIdRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['role']['$delete']>
        },
      ) => parseResponse(client.greengrass.groups[':GroupId'].role.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassServiceroleKey(
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/servicerole', keyArgs] as const
}

export function useGetGreengrassServicerole<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
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
        ? getGetGreengrassServiceroleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.servicerole.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassServicerole<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.servicerole.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
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
        ? getGetGreengrassServiceroleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.servicerole.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassServiceroleKey() {
  return ['greengrass', '/greengrass/servicerole', 'PUT'] as const
}

export function usePutGreengrassServicerole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.servicerole.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassServiceroleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.servicerole.$put> },
      ) => parseResponse(client.greengrass.servicerole.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGreengrassServiceroleKey() {
  return ['greengrass', '/greengrass/servicerole', 'DELETE'] as const
}

export function useDeleteGreengrassServicerole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.servicerole.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.servicerole.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassServiceroleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.servicerole.$delete> },
      ) => parseResponse(client.greengrass.servicerole.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionConnectorsKey(
  args: InferRequestType<typeof client.greengrass.definition.connectors.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/connectors', keyArgs] as const
}

export function useGetGreengrassDefinitionConnectors<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.connectors.$get>>
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
        ? getGetGreengrassDefinitionConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.connectors.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.definition.connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionConnectors<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.connectors.$get>>
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
        ? getGetGreengrassDefinitionConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.connectors.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.definition.connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionConnectorsKey() {
  return ['greengrass', '/greengrass/definition/connectors', 'POST'] as const
}

export function usePostGreengrassDefinitionConnectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.definition.connectors.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.definition.connectors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassDefinitionConnectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.definition.connectors.$post> },
      ) => parseResponse(client.greengrass.definition.connectors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsKey(
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

export function useGetGreengrassDefinitionConnectorsConnectorDefinitionIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.connectors[':ConnectorDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionConnectorsConnectorDefinitionIdVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.connectors[':ConnectorDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsKey() {
  return [
    'greengrass',
    '/greengrass/definition/connectors/:ConnectorDefinitionId/versions',
    'POST',
  ] as const
}

export function usePostGreengrassDefinitionConnectorsConnectorDefinitionIdVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsKey()
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
            (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.connectors[':ConnectorDefinitionId'].versions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionCoresKey(
  args: InferRequestType<typeof client.greengrass.definition.cores.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/cores', keyArgs] as const
}

export function useGetGreengrassDefinitionCores<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.cores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.cores.$get>>>
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
        ? getGetGreengrassDefinitionCoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.cores.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.definition.cores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionCores<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.cores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.cores.$get>>>
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
        ? getGetGreengrassDefinitionCoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.cores.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.definition.cores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionCoresKey() {
  return ['greengrass', '/greengrass/definition/cores', 'POST'] as const
}

export function usePostGreengrassDefinitionCores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.cores.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.definition.cores.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassDefinitionCoresKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.definition.cores.$post> },
      ) => parseResponse(client.greengrass.definition.cores.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionCoresCoreDefinitionIdVersionsKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/cores/:CoreDefinitionId/versions', keyArgs] as const
}

export function useGetGreengrassDefinitionCoresCoreDefinitionIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionCoresCoreDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.cores[':CoreDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionCoresCoreDefinitionIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionCoresCoreDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.cores[':CoreDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionCoresCoreDefinitionIdVersionsKey() {
  return ['greengrass', '/greengrass/definition/cores/:CoreDefinitionId/versions', 'POST'] as const
}

export function usePostGreengrassDefinitionCoresCoreDefinitionIdVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassDefinitionCoresCoreDefinitionIdVersionsKey()
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
            (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.cores[':CoreDefinitionId'].versions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassGroupsGroupIdDeploymentsKey(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups/:GroupId/deployments', keyArgs] as const
}

export function useGetGreengrassGroupsGroupIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>
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
        ? getGetGreengrassGroupsGroupIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.groups[':GroupId'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassGroupsGroupIdDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>
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
        ? getGetGreengrassGroupsGroupIdDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.groups[':GroupId'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassGroupsGroupIdDeploymentsKey() {
  return ['greengrass', '/greengrass/groups/:GroupId/deployments', 'POST'] as const
}

export function usePostGreengrassGroupsGroupIdDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.greengrass.groups)[':GroupId']['deployments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassGroupsGroupIdDeploymentsKey()
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
            (typeof client.greengrass.groups)[':GroupId']['deployments']['$post']
          >
        },
      ) =>
        parseResponse(client.greengrass.groups[':GroupId'].deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionDevicesKey(
  args: InferRequestType<typeof client.greengrass.definition.devices.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/devices', keyArgs] as const
}

export function useGetGreengrassDefinitionDevices<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.devices.$get>>
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
        ? getGetGreengrassDefinitionDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.devices.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.definition.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionDevices<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.devices.$get>>
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
        ? getGetGreengrassDefinitionDevicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.devices.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.definition.devices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionDevicesKey() {
  return ['greengrass', '/greengrass/definition/devices', 'POST'] as const
}

export function usePostGreengrassDefinitionDevices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.devices.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.definition.devices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassDefinitionDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.definition.devices.$post> },
      ) => parseResponse(client.greengrass.definition.devices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionDevicesDeviceDefinitionIdVersionsKey(
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

export function useGetGreengrassDefinitionDevicesDeviceDefinitionIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionDevicesDeviceDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.devices[':DeviceDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionDevicesDeviceDefinitionIdVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionDevicesDeviceDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.devices[':DeviceDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionDevicesDeviceDefinitionIdVersionsKey() {
  return [
    'greengrass',
    '/greengrass/definition/devices/:DeviceDefinitionId/versions',
    'POST',
  ] as const
}

export function usePostGreengrassDefinitionDevicesDeviceDefinitionIdVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassDefinitionDevicesDeviceDefinitionIdVersionsKey()
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
            (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.devices[':DeviceDefinitionId'].versions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionFunctionsKey(
  args: InferRequestType<typeof client.greengrass.definition.functions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/functions', keyArgs] as const
}

export function useGetGreengrassDefinitionFunctions<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.functions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.functions.$get>>
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
        ? getGetGreengrassDefinitionFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.functions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.definition.functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionFunctions<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.functions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.functions.$get>>
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
        ? getGetGreengrassDefinitionFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.functions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.definition.functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionFunctionsKey() {
  return ['greengrass', '/greengrass/definition/functions', 'POST'] as const
}

export function usePostGreengrassDefinitionFunctions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.definition.functions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.definition.functions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassDefinitionFunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.definition.functions.$post> },
      ) => parseResponse(client.greengrass.definition.functions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsKey(
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

export function useGetGreengrassDefinitionFunctionsFunctionDefinitionIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.functions[':FunctionDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionFunctionsFunctionDefinitionIdVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.functions[':FunctionDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsKey() {
  return [
    'greengrass',
    '/greengrass/definition/functions/:FunctionDefinitionId/versions',
    'POST',
  ] as const
}

export function usePostGreengrassDefinitionFunctionsFunctionDefinitionIdVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsKey()
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
            (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.functions[':FunctionDefinitionId'].versions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassGroupsKey(
  args: InferRequestType<typeof client.greengrass.groups.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups', keyArgs] as const
}

export function useGetGreengrassGroups<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$get>>>>
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
        ? getGetGreengrassGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassGroups<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$get>>>>
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
        ? getGetGreengrassGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassGroupsKey() {
  return ['greengrass', '/greengrass/groups', 'POST'] as const
}

export function usePostGreengrassGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.groups.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.groups.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.greengrass.groups.$post> }) =>
        parseResponse(client.greengrass.groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassGroupsGroupIdCertificateauthoritiesKey(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups/:GroupId/certificateauthorities', keyArgs] as const
}

export function useGetGreengrassGroupsGroupIdCertificateauthorities<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassGroupsGroupIdCertificateauthoritiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.groups[':GroupId'].certificateauthorities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassGroupsGroupIdCertificateauthorities<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassGroupsGroupIdCertificateauthoritiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.groups[':GroupId'].certificateauthorities.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassGroupsGroupIdCertificateauthoritiesKey() {
  return ['greengrass', '/greengrass/groups/:GroupId/certificateauthorities', 'POST'] as const
}

export function usePostGreengrassGroupsGroupIdCertificateauthorities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassGroupsGroupIdCertificateauthoritiesKey()
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
            (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['$post']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.groups[':GroupId'].certificateauthorities.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassGroupsGroupIdVersionsKey(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups/:GroupId/versions', keyArgs] as const
}

export function useGetGreengrassGroupsGroupIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>>
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
        ? getGetGreengrassGroupsGroupIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.groups[':GroupId'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassGroupsGroupIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>>
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
        ? getGetGreengrassGroupsGroupIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.groups[':GroupId'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassGroupsGroupIdVersionsKey() {
  return ['greengrass', '/greengrass/groups/:GroupId/versions', 'POST'] as const
}

export function usePostGreengrassGroupsGroupIdVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassGroupsGroupIdVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['versions']['$post']>
        },
      ) => parseResponse(client.greengrass.groups[':GroupId'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionLoggersKey(
  args: InferRequestType<typeof client.greengrass.definition.loggers.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/loggers', keyArgs] as const
}

export function useGetGreengrassDefinitionLoggers<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.loggers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.loggers.$get>>
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
        ? getGetGreengrassDefinitionLoggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.loggers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.definition.loggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionLoggers<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.loggers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.loggers.$get>>
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
        ? getGetGreengrassDefinitionLoggersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.loggers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.definition.loggers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionLoggersKey() {
  return ['greengrass', '/greengrass/definition/loggers', 'POST'] as const
}

export function usePostGreengrassDefinitionLoggers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.definition.loggers.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.definition.loggers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassDefinitionLoggersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.definition.loggers.$post> },
      ) => parseResponse(client.greengrass.definition.loggers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionLoggersLoggerDefinitionIdVersionsKey(
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

export function useGetGreengrassDefinitionLoggersLoggerDefinitionIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionLoggersLoggerDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.loggers[':LoggerDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionLoggersLoggerDefinitionIdVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionLoggersLoggerDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.loggers[':LoggerDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionLoggersLoggerDefinitionIdVersionsKey() {
  return [
    'greengrass',
    '/greengrass/definition/loggers/:LoggerDefinitionId/versions',
    'POST',
  ] as const
}

export function usePostGreengrassDefinitionLoggersLoggerDefinitionIdVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassDefinitionLoggersLoggerDefinitionIdVersionsKey()
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
            (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.loggers[':LoggerDefinitionId'].versions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionResourcesKey(
  args: InferRequestType<typeof client.greengrass.definition.resources.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/resources', keyArgs] as const
}

export function useGetGreengrassDefinitionResources<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.resources.$get>>
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
        ? getGetGreengrassDefinitionResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.resources.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.definition.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionResources<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.resources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.resources.$get>>
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
        ? getGetGreengrassDefinitionResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.resources.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.definition.resources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionResourcesKey() {
  return ['greengrass', '/greengrass/definition/resources', 'POST'] as const
}

export function usePostGreengrassDefinitionResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.definition.resources.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.definition.resources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassDefinitionResourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.definition.resources.$post> },
      ) => parseResponse(client.greengrass.definition.resources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionResourcesResourceDefinitionIdVersionsKey(
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

export function useGetGreengrassDefinitionResourcesResourceDefinitionIdVersions<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionResourcesResourceDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.resources[':ResourceDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionResourcesResourceDefinitionIdVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionResourcesResourceDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.resources[':ResourceDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionResourcesResourceDefinitionIdVersionsKey() {
  return [
    'greengrass',
    '/greengrass/definition/resources/:ResourceDefinitionId/versions',
    'POST',
  ] as const
}

export function usePostGreengrassDefinitionResourcesResourceDefinitionIdVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassDefinitionResourcesResourceDefinitionIdVersionsKey()
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
            (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.resources[':ResourceDefinitionId'].versions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostGreengrassUpdatesKey() {
  return ['greengrass', '/greengrass/updates', 'POST'] as const
}

export function usePostGreengrassUpdates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.updates.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.updates.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassUpdatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.greengrass.updates.$post> }) =>
        parseResponse(client.greengrass.updates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionSubscriptionsKey(
  args: InferRequestType<typeof client.greengrass.definition.subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/subscriptions', keyArgs] as const
}

export function useGetGreengrassDefinitionSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$get>>
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
        ? getGetGreengrassDefinitionSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.definition.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.definition.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$get>>
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
        ? getGetGreengrassDefinitionSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.greengrass.definition.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionSubscriptionsKey() {
  return ['greengrass', '/greengrass/definition/subscriptions', 'POST'] as const
}

export function usePostGreengrassDefinitionSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.greengrass.definition.subscriptions.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.definition.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassDefinitionSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.definition.subscriptions.$post> },
      ) => parseResponse(client.greengrass.definition.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsKey(
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

export function useGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].versions.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsKey() {
  return [
    'greengrass',
    '/greengrass/definition/subscriptions/:SubscriptionDefinitionId/versions',
    'POST',
  ] as const
}

export function usePostGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsKey()
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
            (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].versions.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionConnectorsConnectorDefinitionIdKey(
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

export function useGetGreengrassDefinitionConnectorsConnectorDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionConnectorsConnectorDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.connectors[':ConnectorDefinitionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionConnectorsConnectorDefinitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionConnectorsConnectorDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.connectors[':ConnectorDefinitionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassDefinitionConnectorsConnectorDefinitionIdKey() {
  return ['greengrass', '/greengrass/definition/connectors/:ConnectorDefinitionId', 'PUT'] as const
}

export function usePutGreengrassDefinitionConnectorsConnectorDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassDefinitionConnectorsConnectorDefinitionIdKey()
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
            (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.connectors[':ConnectorDefinitionId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGreengrassDefinitionConnectorsConnectorDefinitionIdKey() {
  return [
    'greengrass',
    '/greengrass/definition/connectors/:ConnectorDefinitionId',
    'DELETE',
  ] as const
}

export function useDeleteGreengrassDefinitionConnectorsConnectorDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassDefinitionConnectorsConnectorDefinitionIdKey()
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
            (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.connectors[':ConnectorDefinitionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionCoresCoreDefinitionIdKey(
  args: InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/cores/:CoreDefinitionId', keyArgs] as const
}

export function useGetGreengrassDefinitionCoresCoreDefinitionId<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>
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
        ? getGetGreengrassDefinitionCoresCoreDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.cores[':CoreDefinitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionCoresCoreDefinitionId<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>
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
        ? getGetGreengrassDefinitionCoresCoreDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.cores[':CoreDefinitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassDefinitionCoresCoreDefinitionIdKey() {
  return ['greengrass', '/greengrass/definition/cores/:CoreDefinitionId', 'PUT'] as const
}

export function usePutGreengrassDefinitionCoresCoreDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassDefinitionCoresCoreDefinitionIdKey()
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
            (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.cores[':CoreDefinitionId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGreengrassDefinitionCoresCoreDefinitionIdKey() {
  return ['greengrass', '/greengrass/definition/cores/:CoreDefinitionId', 'DELETE'] as const
}

export function useDeleteGreengrassDefinitionCoresCoreDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassDefinitionCoresCoreDefinitionIdKey()
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
            (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.cores[':CoreDefinitionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionDevicesDeviceDefinitionIdKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/devices/:DeviceDefinitionId', keyArgs] as const
}

export function useGetGreengrassDefinitionDevicesDeviceDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionDevicesDeviceDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.devices[':DeviceDefinitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionDevicesDeviceDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionDevicesDeviceDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.devices[':DeviceDefinitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassDefinitionDevicesDeviceDefinitionIdKey() {
  return ['greengrass', '/greengrass/definition/devices/:DeviceDefinitionId', 'PUT'] as const
}

export function usePutGreengrassDefinitionDevicesDeviceDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassDefinitionDevicesDeviceDefinitionIdKey()
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
            (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.devices[':DeviceDefinitionId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGreengrassDefinitionDevicesDeviceDefinitionIdKey() {
  return ['greengrass', '/greengrass/definition/devices/:DeviceDefinitionId', 'DELETE'] as const
}

export function useDeleteGreengrassDefinitionDevicesDeviceDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassDefinitionDevicesDeviceDefinitionIdKey()
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
            (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.devices[':DeviceDefinitionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionFunctionsFunctionDefinitionIdKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/functions/:FunctionDefinitionId', keyArgs] as const
}

export function useGetGreengrassDefinitionFunctionsFunctionDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionFunctionsFunctionDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.functions[':FunctionDefinitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionFunctionsFunctionDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionFunctionsFunctionDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.functions[':FunctionDefinitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassDefinitionFunctionsFunctionDefinitionIdKey() {
  return ['greengrass', '/greengrass/definition/functions/:FunctionDefinitionId', 'PUT'] as const
}

export function usePutGreengrassDefinitionFunctionsFunctionDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassDefinitionFunctionsFunctionDefinitionIdKey()
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
            (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.functions[':FunctionDefinitionId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGreengrassDefinitionFunctionsFunctionDefinitionIdKey() {
  return ['greengrass', '/greengrass/definition/functions/:FunctionDefinitionId', 'DELETE'] as const
}

export function useDeleteGreengrassDefinitionFunctionsFunctionDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassDefinitionFunctionsFunctionDefinitionIdKey()
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
            (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.functions[':FunctionDefinitionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassGroupsGroupIdKey(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups/:GroupId', keyArgs] as const
}

export function useGetGreengrassGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$get']>>
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
        ? getGetGreengrassGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.groups[':GroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$get']>>
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
        ? getGetGreengrassGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.groups[':GroupId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassGroupsGroupIdKey() {
  return ['greengrass', '/greengrass/groups/:GroupId', 'PUT'] as const
}

export function usePutGreengrassGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$put']> },
      ) => parseResponse(client.greengrass.groups[':GroupId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteGreengrassGroupsGroupIdKey() {
  return ['greengrass', '/greengrass/groups/:GroupId', 'DELETE'] as const
}

export function useDeleteGreengrassGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.greengrass.groups)[':GroupId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.greengrass.groups)[':GroupId']['$delete']> },
      ) => parseResponse(client.greengrass.groups[':GroupId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionLoggersLoggerDefinitionIdKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/loggers/:LoggerDefinitionId', keyArgs] as const
}

export function useGetGreengrassDefinitionLoggersLoggerDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionLoggersLoggerDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.loggers[':LoggerDefinitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionLoggersLoggerDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionLoggersLoggerDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.loggers[':LoggerDefinitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassDefinitionLoggersLoggerDefinitionIdKey() {
  return ['greengrass', '/greengrass/definition/loggers/:LoggerDefinitionId', 'PUT'] as const
}

export function usePutGreengrassDefinitionLoggersLoggerDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassDefinitionLoggersLoggerDefinitionIdKey()
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
            (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.loggers[':LoggerDefinitionId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGreengrassDefinitionLoggersLoggerDefinitionIdKey() {
  return ['greengrass', '/greengrass/definition/loggers/:LoggerDefinitionId', 'DELETE'] as const
}

export function useDeleteGreengrassDefinitionLoggersLoggerDefinitionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassDefinitionLoggersLoggerDefinitionIdKey()
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
            (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.loggers[':LoggerDefinitionId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionResourcesResourceDefinitionIdKey(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/definition/resources/:ResourceDefinitionId', keyArgs] as const
}

export function useGetGreengrassDefinitionResourcesResourceDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionResourcesResourceDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.resources[':ResourceDefinitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionResourcesResourceDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionResourcesResourceDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.resources[':ResourceDefinitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassDefinitionResourcesResourceDefinitionIdKey() {
  return ['greengrass', '/greengrass/definition/resources/:ResourceDefinitionId', 'PUT'] as const
}

export function usePutGreengrassDefinitionResourcesResourceDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassDefinitionResourcesResourceDefinitionIdKey()
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
            (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.resources[':ResourceDefinitionId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGreengrassDefinitionResourcesResourceDefinitionIdKey() {
  return ['greengrass', '/greengrass/definition/resources/:ResourceDefinitionId', 'DELETE'] as const
}

export function useDeleteGreengrassDefinitionResourcesResourceDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteGreengrassDefinitionResourcesResourceDefinitionIdKey()
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
            (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.resources[':ResourceDefinitionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdKey(
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

export function useGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdKey() {
  return [
    'greengrass',
    '/greengrass/definition/subscriptions/:SubscriptionDefinitionId',
    'PUT',
  ] as const
}

export function usePutGreengrassDefinitionSubscriptionsSubscriptionDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdKey()
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
            (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdKey() {
  return [
    'greengrass',
    '/greengrass/definition/subscriptions/:SubscriptionDefinitionId',
    'DELETE',
  ] as const
}

export function useDeleteGreengrassDefinitionSubscriptionsSubscriptionDefinitionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdKey()
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
            (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassBulkDeploymentsBulkDeploymentIdStatusKey(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/bulk/deployments/:BulkDeploymentId/status', keyArgs] as const
}

export function useGetGreengrassBulkDeploymentsBulkDeploymentIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassBulkDeploymentsBulkDeploymentIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.bulk.deployments[':BulkDeploymentId'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassBulkDeploymentsBulkDeploymentIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassBulkDeploymentsBulkDeploymentIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.bulk.deployments[':BulkDeploymentId'].status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassThingsThingNameConnectivityInfoKey(
  args: InferRequestType<
    (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/things/:ThingName/connectivityInfo', keyArgs] as const
}

export function useGetGreengrassThingsThingNameConnectivityInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassThingsThingNameConnectivityInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.things[':ThingName'].connectivityInfo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassThingsThingNameConnectivityInfo<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassThingsThingNameConnectivityInfoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.things[':ThingName'].connectivityInfo.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassThingsThingNameConnectivityInfoKey() {
  return ['greengrass', '/greengrass/things/:ThingName/connectivityInfo', 'PUT'] as const
}

export function usePutGreengrassThingsThingNameConnectivityInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassThingsThingNameConnectivityInfoKey()
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
            (typeof client.greengrass.things)[':ThingName']['connectivityInfo']['$put']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.things[':ThingName'].connectivityInfo.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdKey(
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

export function useGetGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.connectors[':ConnectorDefinitionId'].versions[
            ':ConnectorDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.connectors)[':ConnectorDefinitionId']['versions'][':ConnectorDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionConnectorsConnectorDefinitionIdVersionsConnectorDefinitionVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.connectors[':ConnectorDefinitionId'].versions[
            ':ConnectorDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdKey(
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

export function useGetGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.cores[':CoreDefinitionId'].versions[
            ':CoreDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.cores)[':CoreDefinitionId']['versions'][':CoreDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionCoresCoreDefinitionIdVersionsCoreDefinitionVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.cores[':CoreDefinitionId'].versions[
            ':CoreDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusKey(
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

export function useGetGreengrassGroupsGroupIdDeploymentsDeploymentIdStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.groups[':GroupId'].deployments[':DeploymentId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassGroupsGroupIdDeploymentsDeploymentIdStatus<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['deployments'][':DeploymentId']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassGroupsGroupIdDeploymentsDeploymentIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.groups[':GroupId'].deployments[':DeploymentId'].status.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdKey(
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

export function useGetGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.devices[':DeviceDefinitionId'].versions[
            ':DeviceDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.devices)[':DeviceDefinitionId']['versions'][':DeviceDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionDevicesDeviceDefinitionIdVersionsDeviceDefinitionVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.devices[':DeviceDefinitionId'].versions[
            ':DeviceDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdKey(
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

export function useGetGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.functions[':FunctionDefinitionId'].versions[
            ':FunctionDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.functions)[':FunctionDefinitionId']['versions'][':FunctionDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionFunctionsFunctionDefinitionIdVersionsFunctionDefinitionVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.functions[':FunctionDefinitionId'].versions[
            ':FunctionDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdKey(
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

export function useGetGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.groups[':GroupId'].certificateauthorities[
            ':CertificateAuthorityId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities'][':CertificateAuthorityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassGroupsGroupIdCertificateauthoritiesCertificateAuthorityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.groups[':GroupId'].certificateauthorities[
            ':CertificateAuthorityId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryKey(
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

export function useGetGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiry<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.groups[':GroupId'].certificateauthorities.configuration.expiry.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiry<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.groups[':GroupId'].certificateauthorities.configuration.expiry.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryKey() {
  return [
    'greengrass',
    '/greengrass/groups/:GroupId/certificateauthorities/configuration/expiry',
    'PUT',
  ] as const
}

export function usePutGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiry<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutGreengrassGroupsGroupIdCertificateauthoritiesConfigurationExpiryKey()
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
            (typeof client.greengrass.groups)[':GroupId']['certificateauthorities']['configuration']['expiry']['$put']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.groups[':GroupId'].certificateauthorities.configuration.expiry.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassGroupsGroupIdVersionsGroupVersionIdKey(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/groups/:GroupId/versions/:GroupVersionId', keyArgs] as const
}

export function useGetGreengrassGroupsGroupIdVersionsGroupVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassGroupsGroupIdVersionsGroupVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.groups[':GroupId'].versions[':GroupVersionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassGroupsGroupIdVersionsGroupVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.groups)[':GroupId']['versions'][':GroupVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassGroupsGroupIdVersionsGroupVersionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.groups[':GroupId'].versions[':GroupVersionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdKey(
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

export function useGetGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.loggers[':LoggerDefinitionId'].versions[
            ':LoggerDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.loggers)[':LoggerDefinitionId']['versions'][':LoggerDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionLoggersLoggerDefinitionIdVersionsLoggerDefinitionVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.loggers[':LoggerDefinitionId'].versions[
            ':LoggerDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdKey(
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

export function useGetGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.resources[':ResourceDefinitionId'].versions[
            ':ResourceDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.resources)[':ResourceDefinitionId']['versions'][':ResourceDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionResourcesResourceDefinitionIdVersionsResourceDefinitionVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.resources[':ResourceDefinitionId'].versions[
            ':ResourceDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdKey(
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

export function useGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].versions[
            ':SubscriptionDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.definition.subscriptions)[':SubscriptionDefinitionId']['versions'][':SubscriptionDefinitionVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassDefinitionSubscriptionsSubscriptionDefinitionIdVersionsSubscriptionDefinitionVersionIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.definition.subscriptions[':SubscriptionDefinitionId'].versions[
            ':SubscriptionDefinitionVersionId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassThingsThingNameRuntimeconfigKey(
  args: InferRequestType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/things/:ThingName/runtimeconfig', keyArgs] as const
}

export function useGetGreengrassThingsThingNameRuntimeconfig<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>
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
        ? getGetGreengrassThingsThingNameRuntimeconfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.things[':ThingName'].runtimeconfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassThingsThingNameRuntimeconfig<TError = unknown>(
  args: InferRequestType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>
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
        ? getGetGreengrassThingsThingNameRuntimeconfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.things[':ThingName'].runtimeconfig.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutGreengrassThingsThingNameRuntimeconfigKey() {
  return ['greengrass', '/greengrass/things/:ThingName/runtimeconfig', 'PUT'] as const
}

export function usePutGreengrassThingsThingNameRuntimeconfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassThingsThingNameRuntimeconfigKey()
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
            (typeof client.greengrass.things)[':ThingName']['runtimeconfig']['$put']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.things[':ThingName'].runtimeconfig.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsKey(
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

export function useGetGreengrassBulkDeploymentsBulkDeploymentIdDetailedReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.bulk.deployments[':BulkDeploymentId']['detailed-reports'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassBulkDeploymentsBulkDeploymentIdDetailedReports<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['detailed-reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetGreengrassBulkDeploymentsBulkDeploymentIdDetailedReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.greengrass.bulk.deployments[':BulkDeploymentId']['detailed-reports'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetGreengrassBulkDeploymentsKey(
  args: InferRequestType<typeof client.greengrass.bulk.deployments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['greengrass', '/greengrass/bulk/deployments', keyArgs] as const
}

export function useGetGreengrassBulkDeployments<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.bulk.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$get>>>
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
        ? getGetGreengrassBulkDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.bulk.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGreengrassBulkDeployments<TError = unknown>(
  args: InferRequestType<typeof client.greengrass.bulk.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$get>>>
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
        ? getGetGreengrassBulkDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.greengrass.bulk.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGreengrassBulkDeploymentsKey() {
  return ['greengrass', '/greengrass/bulk/deployments', 'POST'] as const
}

export function usePostGreengrassBulkDeployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.greengrass.bulk.deployments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.greengrass.bulk.deployments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassBulkDeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.greengrass.bulk.deployments.$post> },
      ) => parseResponse(client.greengrass.bulk.deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resource-arn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resource-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':resource-arn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
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
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':resource-arn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:resource-arn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resource-arn']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resource-arn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':resource-arn']['$post']> },
      ) => parseResponse(client.tags[':resource-arn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostGreengrassGroupsGroupIdDeploymentsResetKey() {
  return ['greengrass', '/greengrass/groups/:GroupId/deployments/$reset', 'POST'] as const
}

export function usePostGreengrassGroupsGroupIdDeploymentsReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.groups)[':GroupId']['deployments']['$reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGreengrassGroupsGroupIdDeploymentsResetKey()
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
            (typeof client.greengrass.groups)[':GroupId']['deployments']['$reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.groups[':GroupId'].deployments.$reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutGreengrassBulkDeploymentsBulkDeploymentIdStopKey() {
  return ['greengrass', '/greengrass/bulk/deployments/:BulkDeploymentId/$stop', 'PUT'] as const
}

export function usePutGreengrassBulkDeploymentsBulkDeploymentIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['$stop']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGreengrassBulkDeploymentsBulkDeploymentIdStopKey()
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
            (typeof client.greengrass.bulk.deployments)[':BulkDeploymentId']['$stop']['$put']
          >
        },
      ) =>
        parseResponse(
          client.greengrass.bulk.deployments[':BulkDeploymentId'].$stop.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:resource-arn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.tags)[':resource-arn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':resource-arn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
