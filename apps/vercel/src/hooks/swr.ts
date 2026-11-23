import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAiGatewayKey() {
  return ['ai-gateway'] as const
}

export function getAliasesKey() {
  return ['aliases'] as const
}

export function getApiKeysKey() {
  return ['api-keys'] as const
}

export function getDomainsKey() {
  return ['domains'] as const
}

export function getProjectsKey() {
  return ['projects'] as const
}

export function getSpeedInsightsKey() {
  return ['speed-insights'] as const
}

export function getStorageKey() {
  return ['storage'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getV10Key() {
  return ['v10'] as const
}

export function getV11Key() {
  return ['v11'] as const
}

export function getV12Key() {
  return ['v12'] as const
}

export function getV13Key() {
  return ['v13'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV4Key() {
  return ['v4'] as const
}

export function getV5Key() {
  return ['v5'] as const
}

export function getV6Key() {
  return ['v6'] as const
}

export function getV7Key() {
  return ['v7'] as const
}

export function getV8Key() {
  return ['v8'] as const
}

export function getV9Key() {
  return ['v9'] as const
}

export function getWebKey() {
  return ['web'] as const
}

export function getGetV1AccessGroupsIdOrNameKey(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['$get']>,
) {
  return ['v1', '/v1/access-groups/:idOrName', args] as const
}

export function useGetV1AccessGroupsIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['access-groups'][':idOrName']['$get']>>
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
        ? getGetV1AccessGroupsIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['access-groups'][':idOrName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['access-groups'][':idOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccessGroupsIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['access-groups'][':idOrName']['$get']>>
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
        ? getGetV1AccessGroupsIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['access-groups'][':idOrName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['access-groups'][':idOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccessGroupsIdOrNameKey() {
  return ['v1', '/v1/access-groups/:idOrName', 'POST'] as const
}

export function usePostV1AccessGroupsIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['access-groups'][':idOrName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccessGroupsIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['$post']> },
      ) => parseResponse(client.v1['access-groups'][':idOrName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1AccessGroupsIdOrNameKey() {
  return ['v1', '/v1/access-groups/:idOrName', 'DELETE'] as const
}

export function useDeleteV1AccessGroupsIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['access-groups'][':idOrName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccessGroupsIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['$delete']> },
      ) => parseResponse(client.v1['access-groups'][':idOrName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccessGroupsIdOrNameMembersKey(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['members']['$get']>,
) {
  return ['v1', '/v1/access-groups/:idOrName/members', args] as const
}

export function useGetV1AccessGroupsIdOrNameMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['access-groups'][':idOrName']['members']['$get']>>
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
        ? getGetV1AccessGroupsIdOrNameMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['access-groups'][':idOrName']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['access-groups'][':idOrName'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccessGroupsIdOrNameMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['access-groups'][':idOrName']['members']['$get']>>
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
        ? getGetV1AccessGroupsIdOrNameMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['access-groups'][':idOrName']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['access-groups'][':idOrName'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1AccessGroupsKey(
  args: InferRequestType<(typeof client.v1)['access-groups']['$get']>,
) {
  return ['v1', '/v1/access-groups', args] as const
}

export function useGetV1AccessGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['access-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['access-groups']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AccessGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['access-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['access-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccessGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['access-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['access-groups']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1AccessGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['access-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['access-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccessGroupsKey() {
  return ['v1', '/v1/access-groups', 'POST'] as const
}

export function usePostV1AccessGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['access-groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['access-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccessGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['access-groups']['$post']> },
      ) => parseResponse(client.v1['access-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccessGroupsIdOrNameProjectsKey(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['projects']['$get']>,
) {
  return ['v1', '/v1/access-groups/:idOrName/projects', args] as const
}

export function useGetV1AccessGroupsIdOrNameProjects<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['access-groups'][':idOrName']['projects']['$get']>
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
        ? getGetV1AccessGroupsIdOrNameProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['access-groups'][':idOrName']['projects']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['access-groups'][':idOrName'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccessGroupsIdOrNameProjects<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['access-groups'][':idOrName']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['access-groups'][':idOrName']['projects']['$get']>
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
        ? getGetV1AccessGroupsIdOrNameProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['access-groups'][':idOrName']['projects']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['access-groups'][':idOrName'].projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1AccessGroupsAccessGroupIdOrNameProjectsKey() {
  return ['v1', '/v1/access-groups/:accessGroupIdOrName/projects', 'POST'] as const
}

export function usePostV1AccessGroupsAccessGroupIdOrNameProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AccessGroupsAccessGroupIdOrNameProjectsKey()
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
            (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['access-groups'][':accessGroupIdOrName'].projects.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdKey(
  args: InferRequestType<
    (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$get']
  >,
) {
  return ['v1', '/v1/access-groups/:accessGroupIdOrName/projects/:projectId', args] as const
}

export function useGetV1AccessGroupsAccessGroupIdOrNameProjectsProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$get']
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
        ? getGetV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdKey(args)
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
                (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$get']
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
          client.v1['access-groups'][':accessGroupIdOrName'].projects[':projectId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AccessGroupsAccessGroupIdOrNameProjectsProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$get']
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
        ? getGetV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdKey(args)
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
                (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$get']
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
          client.v1['access-groups'][':accessGroupIdOrName'].projects[':projectId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdKey() {
  return ['v1', '/v1/access-groups/:accessGroupIdOrName/projects/:projectId', 'DELETE'] as const
}

export function useDeleteV1AccessGroupsAccessGroupIdOrNameProjectsProjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdKey()
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
            (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['access-groups'][':accessGroupIdOrName'].projects[':projectId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdKey() {
  return ['v1', '/v1/access-groups/:accessGroupIdOrName/projects/:projectId', 'PATCH'] as const
}

export function usePatchV1AccessGroupsAccessGroupIdOrNameProjectsProjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1AccessGroupsAccessGroupIdOrNameProjectsProjectIdKey()
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
            (typeof client.v1)['access-groups'][':accessGroupIdOrName']['projects'][':projectId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1['access-groups'][':accessGroupIdOrName'].projects[':projectId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAiGatewayByokCredentialsKey() {
  return ['ai-gateway', '/ai-gateway/byok-credentials', 'POST'] as const
}

export function usePostAiGatewayByokCredentials<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ai-gateway']['byok-credentials']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['byok-credentials']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiGatewayByokCredentialsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['ai-gateway']['byok-credentials']['$post']> },
      ) => parseResponse(client['ai-gateway']['byok-credentials'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiGatewayByokCredentialsListKey(
  args: InferRequestType<(typeof client)['ai-gateway']['byok-credentials']['list']['$get']>,
) {
  return ['ai-gateway', '/ai-gateway/byok-credentials/list', args] as const
}

export function useGetAiGatewayByokCredentialsList<TError = unknown>(
  args: InferRequestType<(typeof client)['ai-gateway']['byok-credentials']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['byok-credentials']['list']['$get']>>
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
        ? getGetAiGatewayByokCredentialsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['byok-credentials']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['ai-gateway']['byok-credentials'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiGatewayByokCredentialsList<TError = unknown>(
  args: InferRequestType<(typeof client)['ai-gateway']['byok-credentials']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['byok-credentials']['list']['$get']>>
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
        ? getGetAiGatewayByokCredentialsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['byok-credentials']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['ai-gateway']['byok-credentials'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAiGatewayByokCredentialsCredentialIdKey(
  args: InferRequestType<
    (typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$get']
  >,
) {
  return ['ai-gateway', '/ai-gateway/byok-credentials/:credentialId', args] as const
}

export function useGetAiGatewayByokCredentialsCredentialId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$get']>
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
        ? getGetAiGatewayByokCredentialsCredentialIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['ai-gateway']['byok-credentials'][':credentialId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiGatewayByokCredentialsCredentialId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$get']>
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
        ? getGetAiGatewayByokCredentialsCredentialIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['ai-gateway']['byok-credentials'][':credentialId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAiGatewayByokCredentialsCredentialIdKey() {
  return ['ai-gateway', '/ai-gateway/byok-credentials/:credentialId', 'DELETE'] as const
}

export function useDeleteAiGatewayByokCredentialsCredentialId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiGatewayByokCredentialsCredentialIdKey()
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
            (typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['ai-gateway']['byok-credentials'][':credentialId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAiGatewayByokCredentialsCredentialIdKey() {
  return ['ai-gateway', '/ai-gateway/byok-credentials/:credentialId', 'PATCH'] as const
}

export function usePatchAiGatewayByokCredentialsCredentialId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAiGatewayByokCredentialsCredentialIdKey()
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
            (typeof client)['ai-gateway']['byok-credentials'][':credentialId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['ai-gateway']['byok-credentials'][':credentialId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAiGatewayVirtualModelConfigsKey(
  args: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$get']>,
) {
  return ['ai-gateway', '/ai-gateway/virtual-model-configs', args] as const
}

export function useGetAiGatewayVirtualModelConfigs<TError = unknown>(
  args: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['virtual-model-configs']['$get']>>
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
        ? getGetAiGatewayVirtualModelConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['virtual-model-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['ai-gateway']['virtual-model-configs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiGatewayVirtualModelConfigs<TError = unknown>(
  args: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['virtual-model-configs']['$get']>>
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
        ? getGetAiGatewayVirtualModelConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['virtual-model-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['ai-gateway']['virtual-model-configs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAiGatewayVirtualModelConfigsKey() {
  return ['ai-gateway', '/ai-gateway/virtual-model-configs', 'POST'] as const
}

export function usePostAiGatewayVirtualModelConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ai-gateway']['virtual-model-configs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiGatewayVirtualModelConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$post']>
        },
      ) => parseResponse(client['ai-gateway']['virtual-model-configs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAiGatewayVirtualModelConfigsKey() {
  return ['ai-gateway', '/ai-gateway/virtual-model-configs', 'DELETE'] as const
}

export function useDeleteAiGatewayVirtualModelConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['virtual-model-configs']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiGatewayVirtualModelConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$delete']>
        },
      ) => parseResponse(client['ai-gateway']['virtual-model-configs'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAiGatewayVirtualModelConfigsKey() {
  return ['ai-gateway', '/ai-gateway/virtual-model-configs', 'PATCH'] as const
}

export function usePatchAiGatewayVirtualModelConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ai-gateway']['virtual-model-configs']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAiGatewayVirtualModelConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['$patch']>
        },
      ) => parseResponse(client['ai-gateway']['virtual-model-configs'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiGatewayVirtualModelConfigsListKey(
  args: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['list']['$get']>,
) {
  return ['ai-gateway', '/ai-gateway/virtual-model-configs/list', args] as const
}

export function useGetAiGatewayVirtualModelConfigsList<TError = unknown>(
  args: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['virtual-model-configs']['list']['$get']>
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
        ? getGetAiGatewayVirtualModelConfigsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['virtual-model-configs']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['ai-gateway']['virtual-model-configs'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiGatewayVirtualModelConfigsList<TError = unknown>(
  args: InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['virtual-model-configs']['list']['$get']>
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
        ? getGetAiGatewayVirtualModelConfigsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['virtual-model-configs']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['ai-gateway']['virtual-model-configs'].list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAiGatewayVirtualModelConfigsVmcSlugKey(
  args: InferRequestType<
    (typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$get']
  >,
) {
  return ['ai-gateway', '/ai-gateway/virtual-model-configs/:vmcSlug', args] as const
}

export function useGetAiGatewayVirtualModelConfigsVmcSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$get']>
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
        ? getGetAiGatewayVirtualModelConfigsVmcSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['ai-gateway']['virtual-model-configs'][':vmcSlug'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiGatewayVirtualModelConfigsVmcSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$get']>
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
        ? getGetAiGatewayVirtualModelConfigsVmcSlugKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['ai-gateway']['virtual-model-configs'][':vmcSlug'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAiGatewayVirtualModelConfigsVmcSlugKey() {
  return ['ai-gateway', '/ai-gateway/virtual-model-configs/:vmcSlug', 'DELETE'] as const
}

export function useDeleteAiGatewayVirtualModelConfigsVmcSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiGatewayVirtualModelConfigsVmcSlugKey()
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
            (typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['ai-gateway']['virtual-model-configs'][':vmcSlug'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAiGatewayVirtualModelConfigsVmcSlugKey() {
  return ['ai-gateway', '/ai-gateway/virtual-model-configs/:vmcSlug', 'PATCH'] as const
}

export function usePatchAiGatewayVirtualModelConfigsVmcSlug<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAiGatewayVirtualModelConfigsVmcSlugKey()
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
            (typeof client)['ai-gateway']['virtual-model-configs'][':vmcSlug']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['ai-gateway']['virtual-model-configs'][':vmcSlug'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1AiGatewayRoutersKey(
  args: InferRequestType<(typeof client.v1)['ai-gateway']['routers']['$get']>,
) {
  return ['v1', '/v1/ai-gateway/routers', args] as const
}

export function useGetV1AiGatewayRouters<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['ai-gateway']['routers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ai-gateway']['routers']['$get']>>
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
        ? getGetV1AiGatewayRoutersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ai-gateway']['routers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['ai-gateway'].routers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1AiGatewayRouters<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['ai-gateway']['routers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ai-gateway']['routers']['$get']>>
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
        ? getGetV1AiGatewayRoutersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['ai-gateway']['routers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['ai-gateway'].routers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAiGatewayRulesKey(
  args: InferRequestType<(typeof client)['ai-gateway']['rules']['$get']>,
) {
  return ['ai-gateway', '/ai-gateway/rules', args] as const
}

export function useGetAiGatewayRules<TError = unknown>(
  args: InferRequestType<(typeof client)['ai-gateway']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ai-gateway']['rules']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAiGatewayRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ai-gateway']['rules']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ai-gateway'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiGatewayRules<TError = unknown>(
  args: InferRequestType<(typeof client)['ai-gateway']['rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ai-gateway']['rules']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAiGatewayRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['ai-gateway']['rules']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ai-gateway'].rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAiGatewayRulesKey() {
  return ['ai-gateway', '/ai-gateway/rules', 'POST'] as const
}

export function usePostAiGatewayRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ai-gateway']['rules']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAiGatewayRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['ai-gateway']['rules']['$post']> },
      ) => parseResponse(client['ai-gateway'].rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAiGatewayRulesKey() {
  return ['ai-gateway', '/ai-gateway/rules', 'DELETE'] as const
}

export function useDeleteAiGatewayRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['rules']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['rules']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiGatewayRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['ai-gateway']['rules']['$delete']> },
      ) => parseResponse(client['ai-gateway'].rules.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAiGatewayRulesKey() {
  return ['ai-gateway', '/ai-gateway/rules', 'PATCH'] as const
}

export function usePatchAiGatewayRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ai-gateway']['rules']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['rules']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAiGatewayRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['ai-gateway']['rules']['$patch']> },
      ) => parseResponse(client['ai-gateway'].rules.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiGatewayBudgetsListKey(
  args: InferRequestType<(typeof client)['ai-gateway']['budgets']['list']['$get']>,
) {
  return ['ai-gateway', '/ai-gateway/budgets/list', args] as const
}

export function useGetAiGatewayBudgetsList<TError = unknown>(
  args: InferRequestType<(typeof client)['ai-gateway']['budgets']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['budgets']['list']['$get']>>
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
        ? getGetAiGatewayBudgetsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['budgets']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ai-gateway'].budgets.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiGatewayBudgetsList<TError = unknown>(
  args: InferRequestType<(typeof client)['ai-gateway']['budgets']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['budgets']['list']['$get']>>
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
        ? getGetAiGatewayBudgetsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['budgets']['list']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ai-gateway'].budgets.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAiGatewayBudgetsKey() {
  return ['ai-gateway', '/ai-gateway/budgets', 'PUT'] as const
}

export function usePutAiGatewayBudgets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['ai-gateway']['budgets']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['budgets']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAiGatewayBudgetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['ai-gateway']['budgets']['$put']> },
      ) => parseResponse(client['ai-gateway'].budgets.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAiGatewayBudgetsKey() {
  return ['ai-gateway', '/ai-gateway/budgets', 'DELETE'] as const
}

export function useDeleteAiGatewayBudgets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ai-gateway']['budgets']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['budgets']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiGatewayBudgetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['ai-gateway']['budgets']['$delete']> },
      ) => parseResponse(client['ai-gateway'].budgets.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiGatewayBudgetsDefaultsListKey(
  args: InferRequestType<(typeof client)['ai-gateway']['budgets']['defaults']['list']['$get']>,
) {
  return ['ai-gateway', '/ai-gateway/budgets/defaults/list', args] as const
}

export function useGetAiGatewayBudgetsDefaultsList<TError = unknown>(
  args: InferRequestType<(typeof client)['ai-gateway']['budgets']['defaults']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['budgets']['defaults']['list']['$get']>
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
        ? getGetAiGatewayBudgetsDefaultsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['budgets']['defaults']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['ai-gateway'].budgets.defaults.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiGatewayBudgetsDefaultsList<TError = unknown>(
  args: InferRequestType<(typeof client)['ai-gateway']['budgets']['defaults']['list']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['budgets']['defaults']['list']['$get']>
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
        ? getGetAiGatewayBudgetsDefaultsListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['ai-gateway']['budgets']['defaults']['list']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['ai-gateway'].budgets.defaults.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAiGatewayBudgetsDefaultsKey() {
  return ['ai-gateway', '/ai-gateway/budgets/defaults', 'PUT'] as const
}

export function usePutAiGatewayBudgetsDefaults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ai-gateway']['budgets']['defaults']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['budgets']['defaults']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAiGatewayBudgetsDefaultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['ai-gateway']['budgets']['defaults']['$put']> },
      ) => parseResponse(client['ai-gateway'].budgets.defaults.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAiGatewayBudgetsDefaultsKey() {
  return ['ai-gateway', '/ai-gateway/budgets/defaults', 'DELETE'] as const
}

export function useDeleteAiGatewayBudgetsDefaults<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['budgets']['defaults']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['ai-gateway']['budgets']['defaults']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAiGatewayBudgetsDefaultsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['ai-gateway']['budgets']['defaults']['$delete']>
        },
      ) => parseResponse(client['ai-gateway'].budgets.defaults.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV8ArtifactsEventsKey() {
  return ['v8', '/v8/artifacts/events', 'POST'] as const
}

export function usePostV8ArtifactsEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.events.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v8.artifacts.events.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV8ArtifactsEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v8.artifacts.events.$post> }) =>
        parseResponse(client.v8.artifacts.events.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV8ArtifactsStatusKey(
  args: InferRequestType<typeof client.v8.artifacts.status.$get>,
) {
  return ['v8', '/v8/artifacts/status', args] as const
}

export function useGetV8ArtifactsStatus<TError = unknown>(
  args: InferRequestType<typeof client.v8.artifacts.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>
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
        ? getGetV8ArtifactsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v8.artifacts.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV8ArtifactsStatus<TError = unknown>(
  args: InferRequestType<typeof client.v8.artifacts.status.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>
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
        ? getGetV8ArtifactsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.status.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v8.artifacts.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV8ArtifactsHashKey(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v8', '/v8/artifacts/:hash', keyArgs] as const
}

export function useGetV8ArtifactsHash<TError = unknown>(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
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
        ? getGetV8ArtifactsHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v8.artifacts[':hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV8ArtifactsHash<TError = unknown>(
  args: InferRequestType<(typeof client.v8.artifacts)[':hash']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
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
        ? getGetV8ArtifactsHashKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v8.artifacts[':hash'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV8ArtifactsHashKey() {
  return ['v8', '/v8/artifacts/:hash', 'PUT'] as const
}

export function usePutV8ArtifactsHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v8.artifacts)[':hash']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV8ArtifactsHashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v8.artifacts)[':hash']['$put']> },
      ) => parseResponse(client.v8.artifacts[':hash'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getHeadV8ArtifactsHashKey() {
  return ['v8', '/v8/artifacts/:hash', 'HEAD'] as const
}

export function useHeadV8ArtifactsHash<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v8.artifacts)[':hash']['$head']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v8.artifacts)[':hash']['$head']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadV8ArtifactsHashKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v8.artifacts)[':hash']['$head']> },
      ) => parseResponse(client.v8.artifacts[':hash'].$head(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV8ArtifactsKey() {
  return ['v8', '/v8/artifacts', 'POST'] as const
}

export function usePostV8Artifacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v8.artifacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV8ArtifactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v8.artifacts.$post> }) =>
        parseResponse(client.v8.artifacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV8ArtifactsKey() {
  return ['v8', '/v8/artifacts', 'DELETE'] as const
}

export function useDeleteV8Artifacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.artifacts.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v8.artifacts.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV8ArtifactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v8.artifacts.$delete> }) =>
        parseResponse(client.v8.artifacts.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BillingChargesKey(
  args: InferRequestType<typeof client.v1.billing.charges.$get>,
) {
  return ['v1', '/v1/billing/charges', args] as const
}

export function useGetV1BillingCharges<TError = unknown>(
  args: InferRequestType<typeof client.v1.billing.charges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.charges.$get>>>>
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
        ? getGetV1BillingChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.charges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.billing.charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BillingCharges<TError = unknown>(
  args: InferRequestType<typeof client.v1.billing.charges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.charges.$get>>>>
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
        ? getGetV1BillingChargesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.charges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.billing.charges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BillingBuyKey() {
  return ['v1', '/v1/billing/buy', 'POST'] as const
}

export function usePostV1BillingBuy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.billing.buy.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.billing.buy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BillingBuyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.billing.buy.$post> }) =>
        parseResponse(client.v1.billing.buy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BulkRedirectsKey(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['$get']>,
) {
  return ['v1', '/v1/bulk-redirects', args] as const
}

export function useGetV1BulkRedirects<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['$get']>>>
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
        ? getGetV1BulkRedirectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['bulk-redirects'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BulkRedirects<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['$get']>>>
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
        ? getGetV1BulkRedirectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['bulk-redirects'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1BulkRedirectsKey() {
  return ['v1', '/v1/bulk-redirects', 'PUT'] as const
}

export function usePutV1BulkRedirects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['bulk-redirects']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1BulkRedirectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['bulk-redirects']['$put']> },
      ) => parseResponse(client.v1['bulk-redirects'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1BulkRedirectsKey() {
  return ['v1', '/v1/bulk-redirects', 'DELETE'] as const
}

export function useDeleteV1BulkRedirects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['bulk-redirects']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1BulkRedirectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['bulk-redirects']['$delete']> },
      ) => parseResponse(client.v1['bulk-redirects'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1BulkRedirectsKey() {
  return ['v1', '/v1/bulk-redirects', 'PATCH'] as const
}

export function usePatchV1BulkRedirects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['bulk-redirects']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1BulkRedirectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['bulk-redirects']['$patch']> },
      ) => parseResponse(client.v1['bulk-redirects'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1BulkRedirectsRestoreKey() {
  return ['v1', '/v1/bulk-redirects/restore', 'POST'] as const
}

export function usePostV1BulkRedirectsRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['restore']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['bulk-redirects']['restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BulkRedirectsRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['bulk-redirects']['restore']['$post']> },
      ) => parseResponse(client.v1['bulk-redirects'].restore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1BulkRedirectsVersionsKey(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['versions']['$get']>,
) {
  return ['v1', '/v1/bulk-redirects/versions', args] as const
}

export function useGetV1BulkRedirectsVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['versions']['$get']>>
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
        ? getGetV1BulkRedirectsVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['bulk-redirects'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1BulkRedirectsVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['bulk-redirects']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['versions']['$get']>>
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
        ? getGetV1BulkRedirectsVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['bulk-redirects'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1BulkRedirectsVersionsKey() {
  return ['v1', '/v1/bulk-redirects/versions', 'POST'] as const
}

export function usePostV1BulkRedirectsVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['bulk-redirects']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['bulk-redirects']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1BulkRedirectsVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['bulk-redirects']['versions']['$post']> },
      ) => parseResponse(client.v1['bulk-redirects'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdOrNameChecksKey(
  args: InferRequestType<(typeof client.v2.projects)[':projectIdOrName']['checks']['$get']>,
) {
  return ['v2', '/v2/projects/:projectIdOrName/checks', args] as const
}

export function useGetV2ProjectsProjectIdOrNameChecks<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectIdOrName']['checks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectIdOrName']['checks']['$get']>>
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
        ? getGetV2ProjectsProjectIdOrNameChecksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectIdOrName']['checks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects[':projectIdOrName'].checks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdOrNameChecks<TError = unknown>(
  args: InferRequestType<(typeof client.v2.projects)[':projectIdOrName']['checks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectIdOrName']['checks']['$get']>>
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
        ? getGetV2ProjectsProjectIdOrNameChecksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.projects)[':projectIdOrName']['checks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.projects[':projectIdOrName'].checks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2ProjectsProjectIdOrNameChecksKey() {
  return ['v2', '/v2/projects/:projectIdOrName/checks', 'POST'] as const
}

export function usePostV2ProjectsProjectIdOrNameChecks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.projects)[':projectIdOrName']['checks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.projects)[':projectIdOrName']['checks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ProjectsProjectIdOrNameChecksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.projects)[':projectIdOrName']['checks']['$post']>
        },
      ) => parseResponse(client.v2.projects[':projectIdOrName'].checks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdOrNameChecksCheckIdKey(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$get']
  >,
) {
  return ['v2', '/v2/projects/:projectIdOrName/checks/:checkId', args] as const
}

export function useGetV2ProjectsProjectIdOrNameChecksCheckId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$get']
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
        ? getGetV2ProjectsProjectIdOrNameChecksCheckIdKey(args)
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
                (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$get']
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
          client.v2.projects[':projectIdOrName'].checks[':checkId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdOrNameChecksCheckId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$get']
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
        ? getGetV2ProjectsProjectIdOrNameChecksCheckIdKey(args)
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
                (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$get']
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
          client.v2.projects[':projectIdOrName'].checks[':checkId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2ProjectsProjectIdOrNameChecksCheckIdKey() {
  return ['v2', '/v2/projects/:projectIdOrName/checks/:checkId', 'DELETE'] as const
}

export function useDeleteV2ProjectsProjectIdOrNameChecksCheckId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2ProjectsProjectIdOrNameChecksCheckIdKey()
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
            (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.projects[':projectIdOrName'].checks[':checkId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ProjectsProjectIdOrNameChecksCheckIdKey() {
  return ['v2', '/v2/projects/:projectIdOrName/checks/:checkId', 'PATCH'] as const
}

export function usePatchV2ProjectsProjectIdOrNameChecksCheckId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ProjectsProjectIdOrNameChecksCheckIdKey()
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
            (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.projects[':projectIdOrName'].checks[':checkId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdOrNameChecksCheckIdRunsKey(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['runs']['$get']
  >,
) {
  return ['v2', '/v2/projects/:projectIdOrName/checks/:checkId/runs', args] as const
}

export function useGetV2ProjectsProjectIdOrNameChecksCheckIdRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['runs']['$get']
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
        ? getGetV2ProjectsProjectIdOrNameChecksCheckIdRunsKey(args)
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
                (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['runs']['$get']
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
          client.v2.projects[':projectIdOrName'].checks[':checkId'].runs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdOrNameChecksCheckIdRuns<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['runs']['$get']
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
        ? getGetV2ProjectsProjectIdOrNameChecksCheckIdRunsKey(args)
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
                (typeof client.v2.projects)[':projectIdOrName']['checks'][':checkId']['runs']['$get']
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
          client.v2.projects[':projectIdOrName'].checks[':checkId'].runs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2DeploymentsDeploymentIdCheckRunsKey(
  args: InferRequestType<(typeof client.v2.deployments)[':deploymentId']['check-runs']['$get']>,
) {
  return ['v2', '/v2/deployments/:deploymentId/check-runs', args] as const
}

export function useGetV2DeploymentsDeploymentIdCheckRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v2.deployments)[':deploymentId']['check-runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.deployments)[':deploymentId']['check-runs']['$get']>
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
        ? getGetV2DeploymentsDeploymentIdCheckRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.deployments)[':deploymentId']['check-runs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.deployments[':deploymentId']['check-runs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DeploymentsDeploymentIdCheckRuns<TError = unknown>(
  args: InferRequestType<(typeof client.v2.deployments)[':deploymentId']['check-runs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.deployments)[':deploymentId']['check-runs']['$get']>
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
        ? getGetV2DeploymentsDeploymentIdCheckRunsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.deployments)[':deploymentId']['check-runs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.deployments[':deploymentId']['check-runs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2DeploymentsDeploymentIdCheckRunsKey() {
  return ['v2', '/v2/deployments/:deploymentId/check-runs', 'POST'] as const
}

export function usePostV2DeploymentsDeploymentIdCheckRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.deployments)[':deploymentId']['check-runs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.deployments)[':deploymentId']['check-runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DeploymentsDeploymentIdCheckRunsKey()
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
            (typeof client.v2.deployments)[':deploymentId']['check-runs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.deployments[':deploymentId']['check-runs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2DeploymentsDeploymentIdCheckRunsCheckRunIdKey(
  args: InferRequestType<
    (typeof client.v2.deployments)[':deploymentId']['check-runs'][':checkRunId']['$get']
  >,
) {
  return ['v2', '/v2/deployments/:deploymentId/check-runs/:checkRunId', args] as const
}

export function useGetV2DeploymentsDeploymentIdCheckRunsCheckRunId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.deployments)[':deploymentId']['check-runs'][':checkRunId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.deployments)[':deploymentId']['check-runs'][':checkRunId']['$get']
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
        ? getGetV2DeploymentsDeploymentIdCheckRunsCheckRunIdKey(args)
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
                (typeof client.v2.deployments)[':deploymentId']['check-runs'][':checkRunId']['$get']
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
          client.v2.deployments[':deploymentId']['check-runs'][':checkRunId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DeploymentsDeploymentIdCheckRunsCheckRunId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.deployments)[':deploymentId']['check-runs'][':checkRunId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.deployments)[':deploymentId']['check-runs'][':checkRunId']['$get']
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
        ? getGetV2DeploymentsDeploymentIdCheckRunsCheckRunIdKey(args)
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
                (typeof client.v2.deployments)[':deploymentId']['check-runs'][':checkRunId']['$get']
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
          client.v2.deployments[':deploymentId']['check-runs'][':checkRunId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV2DeploymentsDeploymentIdCheckRunsCheckRunIdKey() {
  return ['v2', '/v2/deployments/:deploymentId/check-runs/:checkRunId', 'PATCH'] as const
}

export function usePatchV2DeploymentsDeploymentIdCheckRunsCheckRunId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.deployments)[':deploymentId']['check-runs'][':checkRunId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.deployments)[':deploymentId']['check-runs'][':checkRunId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2DeploymentsDeploymentIdCheckRunsCheckRunIdKey()
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
            (typeof client.v2.deployments)[':deploymentId']['check-runs'][':checkRunId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2.deployments[':deploymentId']['check-runs'][':checkRunId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DeploymentsDeploymentIdChecksKey(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>,
) {
  return ['v1', '/v1/deployments/:deploymentId/checks', args] as const
}

export function useGetV1DeploymentsDeploymentIdChecks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
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
        ? getGetV1DeploymentsDeploymentIdChecksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.deployments[':deploymentId'].checks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DeploymentsDeploymentIdChecks<TError = unknown>(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
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
        ? getGetV1DeploymentsDeploymentIdChecksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.deployments[':deploymentId'].checks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DeploymentsDeploymentIdChecksKey() {
  return ['v1', '/v1/deployments/:deploymentId/checks', 'POST'] as const
}

export function usePostV1DeploymentsDeploymentIdChecks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.deployments)[':deploymentId']['checks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeploymentsDeploymentIdChecksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['checks']['$post']>
        },
      ) => parseResponse(client.v1.deployments[':deploymentId'].checks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DeploymentsDeploymentIdChecksCheckIdKey(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
  >,
) {
  return ['v1', '/v1/deployments/:deploymentId/checks/:checkId', args] as const
}

export function useGetV1DeploymentsDeploymentIdChecksCheckId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
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
        ? getGetV1DeploymentsDeploymentIdChecksCheckIdKey(args)
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
                (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
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
          client.v1.deployments[':deploymentId'].checks[':checkId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DeploymentsDeploymentIdChecksCheckId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
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
        ? getGetV1DeploymentsDeploymentIdChecksCheckIdKey(args)
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
                (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$get']
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
          client.v1.deployments[':deploymentId'].checks[':checkId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1DeploymentsDeploymentIdChecksCheckIdKey() {
  return ['v1', '/v1/deployments/:deploymentId/checks/:checkId', 'PATCH'] as const
}

export function usePatchV1DeploymentsDeploymentIdChecksCheckId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DeploymentsDeploymentIdChecksCheckIdKey()
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
            (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.deployments[':deploymentId'].checks[':checkId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1DeploymentsDeploymentIdChecksCheckIdRerequestKey() {
  return ['v1', '/v1/deployments/:deploymentId/checks/:checkId/rerequest', 'POST'] as const
}

export function usePostV1DeploymentsDeploymentIdChecksCheckIdRerequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['rerequest']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['rerequest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DeploymentsDeploymentIdChecksCheckIdRerequestKey()
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
            (typeof client.v1.deployments)[':deploymentId']['checks'][':checkId']['rerequest']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.deployments[':deploymentId'].checks[':checkId'].rerequest.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConnectNetworksKey(
  args: InferRequestType<typeof client.v1.connect.networks.$get>,
) {
  return ['v1', '/v1/connect/networks', args] as const
}

export function useGetV1ConnectNetworks<TError = unknown>(
  args: InferRequestType<typeof client.v1.connect.networks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.networks.$get>>>
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
        ? getGetV1ConnectNetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.networks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.connect.networks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectNetworks<TError = unknown>(
  args: InferRequestType<typeof client.v1.connect.networks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.networks.$get>>>
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
        ? getGetV1ConnectNetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.networks.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.connect.networks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConnectNetworksKey() {
  return ['v1', '/v1/connect/networks', 'POST'] as const
}

export function usePostV1ConnectNetworks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.networks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connect.networks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectNetworksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.connect.networks.$post> }) =>
        parseResponse(client.v1.connect.networks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ConnectNetworksNetworkIdKey(
  args: InferRequestType<(typeof client.v1.connect.networks)[':networkId']['$get']>,
) {
  return ['v1', '/v1/connect/networks/:networkId', args] as const
}

export function useGetV1ConnectNetworksNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connect.networks)[':networkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connect.networks)[':networkId']['$get']>>
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
        ? getGetV1ConnectNetworksNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connect.networks)[':networkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.connect.networks[':networkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectNetworksNetworkId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connect.networks)[':networkId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connect.networks)[':networkId']['$get']>>
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
        ? getGetV1ConnectNetworksNetworkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connect.networks)[':networkId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.connect.networks[':networkId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ConnectNetworksNetworkIdKey() {
  return ['v1', '/v1/connect/networks/:networkId', 'DELETE'] as const
}

export function useDeleteV1ConnectNetworksNetworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connect.networks)[':networkId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connect.networks)[':networkId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConnectNetworksNetworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.connect.networks)[':networkId']['$delete']> },
      ) => parseResponse(client.v1.connect.networks[':networkId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ConnectNetworksNetworkIdKey() {
  return ['v1', '/v1/connect/networks/:networkId', 'PATCH'] as const
}

export function usePatchV1ConnectNetworksNetworkId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connect.networks)[':networkId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connect.networks)[':networkId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ConnectNetworksNetworkIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.connect.networks)[':networkId']['$patch']> },
      ) => parseResponse(client.v1.connect.networks[':networkId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1NetworkingPrivatelinkEndpointsKey(
  args: InferRequestType<typeof client.v1.networking.privatelink.endpoints.$get>,
) {
  return ['v1', '/v1/networking/privatelink/endpoints', args] as const
}

export function useGetV1NetworkingPrivatelinkEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.v1.networking.privatelink.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.networking.privatelink.endpoints.$get>>
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
        ? getGetV1NetworkingPrivatelinkEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.networking.privatelink.endpoints.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.networking.privatelink.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NetworkingPrivatelinkEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.v1.networking.privatelink.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.networking.privatelink.endpoints.$get>>
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
        ? getGetV1NetworkingPrivatelinkEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.networking.privatelink.endpoints.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.networking.privatelink.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1NetworkingPrivatelinkEndpointsKey() {
  return ['v1', '/v1/networking/privatelink/endpoints', 'POST'] as const
}

export function usePostV1NetworkingPrivatelinkEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.networking.privatelink.endpoints.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.networking.privatelink.endpoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1NetworkingPrivatelinkEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.networking.privatelink.endpoints.$post> },
      ) => parseResponse(client.v1.networking.privatelink.endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1NetworkingPrivatelinkEndpointsEndpointIdKey(
  args: InferRequestType<
    (typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$get']
  >,
) {
  return ['v1', '/v1/networking/privatelink/endpoints/:endpointId', args] as const
}

export function useGetV1NetworkingPrivatelinkEndpointsEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$get']>
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
        ? getGetV1NetworkingPrivatelinkEndpointsEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.networking.privatelink.endpoints[':endpointId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1NetworkingPrivatelinkEndpointsEndpointId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$get']>
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
        ? getGetV1NetworkingPrivatelinkEndpointsEndpointIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.networking.privatelink.endpoints[':endpointId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1NetworkingPrivatelinkEndpointsEndpointIdKey() {
  return ['v1', '/v1/networking/privatelink/endpoints/:endpointId', 'DELETE'] as const
}

export function useDeleteV1NetworkingPrivatelinkEndpointsEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1NetworkingPrivatelinkEndpointsEndpointIdKey()
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
            (typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.networking.privatelink.endpoints[':endpointId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1NetworkingPrivatelinkEndpointsEndpointIdKey() {
  return ['v1', '/v1/networking/privatelink/endpoints/:endpointId', 'PATCH'] as const
}

export function usePatchV1NetworkingPrivatelinkEndpointsEndpointId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1NetworkingPrivatelinkEndpointsEndpointIdKey()
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
            (typeof client.v1.networking.privatelink.endpoints)[':endpointId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.networking.privatelink.endpoints[':endpointId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ConnectConnectorsKey(
  args: InferRequestType<typeof client.v2.connect.connectors.$get>,
) {
  return ['v2', '/v2/connect/connectors', args] as const
}

export function useGetV2ConnectConnectors<TError = unknown>(
  args: InferRequestType<typeof client.v2.connect.connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.connect.connectors.$get>>>
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
        ? getGetV2ConnectConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.connect.connectors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.connect.connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ConnectConnectors<TError = unknown>(
  args: InferRequestType<typeof client.v2.connect.connectors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.connect.connectors.$get>>>
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
        ? getGetV2ConnectConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.connect.connectors.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.connect.connectors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConnectConnectorsConnectorKey(
  args: InferRequestType<(typeof client.v1.connect.connectors)[':connector']['$get']>,
) {
  return ['v1', '/v1/connect/connectors/:connector', args] as const
}

export function useGetV1ConnectConnectorsConnector<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connect.connectors)[':connector']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connect.connectors)[':connector']['$get']>>
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
        ? getGetV1ConnectConnectorsConnectorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connect.connectors)[':connector']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.connect.connectors[':connector'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectConnectorsConnector<TError = unknown>(
  args: InferRequestType<(typeof client.v1.connect.connectors)[':connector']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connect.connectors)[':connector']['$get']>>
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
        ? getGetV1ConnectConnectorsConnectorKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connect.connectors)[':connector']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.connect.connectors[':connector'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ConnectConnectorsConnectorKey() {
  return ['v1', '/v1/connect/connectors/:connector', 'DELETE'] as const
}

export function useDeleteV1ConnectConnectorsConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.connect.connectors)[':connector']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connect.connectors)[':connector']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConnectConnectorsConnectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.connect.connectors)[':connector']['$delete']>
        },
      ) => parseResponse(client.v1.connect.connectors[':connector'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectConnectorsKey() {
  return ['v1', '/v1/connect/connectors', 'POST'] as const
}

export function usePostV1ConnectConnectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.connect.connectors.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.connect.connectors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectConnectorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.connect.connectors.$post> },
      ) => parseResponse(client.v1.connect.connectors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2ConnectConnectorsConnectorKey() {
  return ['v2', '/v2/connect/connectors/:connector', 'PATCH'] as const
}

export function usePatchV2ConnectConnectorsConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.connect.connectors)[':connector']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.connect.connectors)[':connector']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2ConnectConnectorsConnectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.connect.connectors)[':connector']['$patch']> },
      ) => parseResponse(client.v2.connect.connectors[':connector'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ConnectConnectorsConnectorTriggerDestinationsKey() {
  return ['v1', '/v1/connect/connectors/:connector/trigger-destinations', 'PATCH'] as const
}

export function usePatchV1ConnectConnectorsConnectorTriggerDestinations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connect.connectors)[':connector']['trigger-destinations']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.connect.connectors)[':connector']['trigger-destinations']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ConnectConnectorsConnectorTriggerDestinationsKey()
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
            (typeof client.v1.connect.connectors)[':connector']['trigger-destinations']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.connect.connectors[':connector']['trigger-destinations'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectConnectorsConnectorManagedEjectKey() {
  return ['v1', '/v1/connect/connectors/:connector/managed/eject', 'POST'] as const
}

export function usePostV1ConnectConnectorsConnectorManagedEject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connect.connectors)[':connector']['managed']['eject']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.connect.connectors)[':connector']['managed']['eject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectConnectorsConnectorManagedEjectKey()
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
            (typeof client.v1.connect.connectors)[':connector']['managed']['eject']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.connect.connectors[':connector'].managed.eject.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ConnectConnectorsConnectorProjectsKey(
  args: InferRequestType<(typeof client.v2.connect.connectors)[':connector']['projects']['$get']>,
) {
  return ['v2', '/v2/connect/connectors/:connector/projects', args] as const
}

export function useGetV2ConnectConnectorsConnectorProjects<TError = unknown>(
  args: InferRequestType<(typeof client.v2.connect.connectors)[':connector']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.connect.connectors)[':connector']['projects']['$get']>
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
        ? getGetV2ConnectConnectorsConnectorProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.connect.connectors)[':connector']['projects']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.connect.connectors[':connector'].projects.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ConnectConnectorsConnectorProjects<TError = unknown>(
  args: InferRequestType<(typeof client.v2.connect.connectors)[':connector']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.connect.connectors)[':connector']['projects']['$get']>
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
        ? getGetV2ConnectConnectorsConnectorProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.connect.connectors)[':connector']['projects']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.connect.connectors[':connector'].projects.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ConnectConnectorsConnectorProjectsProjectIdKey(
  args: InferRequestType<
    (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$get']
  >,
) {
  return ['v1', '/v1/connect/connectors/:connector/projects/:projectId', args] as const
}

export function useGetV1ConnectConnectorsConnectorProjectsProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$get']
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
        ? getGetV1ConnectConnectorsConnectorProjectsProjectIdKey(args)
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
                (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$get']
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
          client.v1.connect.connectors[':connector'].projects[':projectId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ConnectConnectorsConnectorProjectsProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$get']
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
        ? getGetV1ConnectConnectorsConnectorProjectsProjectIdKey(args)
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
                (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$get']
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
          client.v1.connect.connectors[':connector'].projects[':projectId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConnectConnectorsConnectorProjectsProjectIdKey() {
  return ['v1', '/v1/connect/connectors/:connector/projects/:projectId', 'POST'] as const
}

export function usePostV1ConnectConnectorsConnectorProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectConnectorsConnectorProjectsProjectIdKey()
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
            (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.connect.connectors[':connector'].projects[':projectId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConnectConnectorsConnectorProjectsProjectIdKey() {
  return ['v1', '/v1/connect/connectors/:connector/projects/:projectId', 'DELETE'] as const
}

export function useDeleteV1ConnectConnectorsConnectorProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ConnectConnectorsConnectorProjectsProjectIdKey()
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
            (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.connect.connectors[':connector'].projects[':projectId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ConnectConnectorsConnectorProjectsProjectIdEnvironmentsEnvironmentKey() {
  return [
    'v1',
    '/v1/connect/connectors/:connector/projects/:projectId/environments/:environment',
    'DELETE',
  ] as const
}

export function useDeleteV1ConnectConnectorsConnectorProjectsProjectIdEnvironmentsEnvironment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['environments'][':environment']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['environments'][':environment']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1ConnectConnectorsConnectorProjectsProjectIdEnvironmentsEnvironmentKey()
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
            (typeof client.v1.connect.connectors)[':connector']['projects'][':projectId']['environments'][':environment']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.connect.connectors[':connector'].projects[':projectId'].environments[
            ':environment'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ConnectProjectsProjectIdConnectorsKey(
  args: InferRequestType<(typeof client.v2.connect.projects)[':projectId']['connectors']['$get']>,
) {
  return ['v2', '/v2/connect/projects/:projectId/connectors', args] as const
}

export function useGetV2ConnectProjectsProjectIdConnectors<TError = unknown>(
  args: InferRequestType<(typeof client.v2.connect.projects)[':projectId']['connectors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.connect.projects)[':projectId']['connectors']['$get']>
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
        ? getGetV2ConnectProjectsProjectIdConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.connect.projects)[':projectId']['connectors']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.connect.projects[':projectId'].connectors.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ConnectProjectsProjectIdConnectors<TError = unknown>(
  args: InferRequestType<(typeof client.v2.connect.projects)[':projectId']['connectors']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.connect.projects)[':projectId']['connectors']['$get']>
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
        ? getGetV2ConnectProjectsProjectIdConnectorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.connect.projects)[':projectId']['connectors']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v2.connect.projects[':projectId'].connectors.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ConnectTokenConnectorKey() {
  return ['v1', '/v1/connect/token/:connector', 'POST'] as const
}

export function usePostV1ConnectTokenConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connect.token)[':connector']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connect.token)[':connector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectTokenConnectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.connect.token)[':connector']['$post']> },
      ) => parseResponse(client.v1.connect.token[':connector'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ConnectAuthorizeConnectorKey() {
  return ['v1', '/v1/connect/authorize/:connector', 'POST'] as const
}

export function usePostV1ConnectAuthorizeConnector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.connect.authorize)[':connector']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.connect.authorize)[':connector']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ConnectAuthorizeConnectorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.connect.authorize)[':connector']['$post']> },
      ) => parseResponse(client.v1.connect.authorize[':connector'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsIdOrNameDaemonsKey(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['daemons']['$get']>,
) {
  return ['v1', '/v1/projects/:idOrName/daemons', args] as const
}

export function useGetV1ProjectsIdOrNameDaemons<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['daemons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['daemons']['$get']>>
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
        ? getGetV1ProjectsIdOrNameDaemonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['daemons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':idOrName'].daemons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsIdOrNameDaemons<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['daemons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['daemons']['$get']>>
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
        ? getGetV1ProjectsIdOrNameDaemonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['daemons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':idOrName'].daemons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsIdOrNameDaemonsDaemonNameInstancesKey() {
  return ['v1', '/v1/projects/:idOrName/daemons/:daemonName/instances', 'PUT'] as const
}

export function usePutV1ProjectsIdOrNameDaemonsDaemonNameInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':idOrName']['daemons'][':daemonName']['instances']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':idOrName']['daemons'][':daemonName']['instances']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsIdOrNameDaemonsDaemonNameInstancesKey()
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
            (typeof client.v1.projects)[':idOrName']['daemons'][':daemonName']['instances']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':idOrName'].daemons[':daemonName'].instances.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsIdOrNameDaemonsDaemonNameInstancesInstanceIdRestartKey() {
  return [
    'v1',
    '/v1/projects/:idOrName/daemons/:daemonName/instances/:instanceId/restart',
    'POST',
  ] as const
}

export function usePostV1ProjectsIdOrNameDaemonsDaemonNameInstancesInstanceIdRestart<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':idOrName']['daemons'][':daemonName']['instances'][':instanceId']['restart']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':idOrName']['daemons'][':daemonName']['instances'][':instanceId']['restart']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1ProjectsIdOrNameDaemonsDaemonNameInstancesInstanceIdRestartKey()
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
            (typeof client.v1.projects)[':idOrName']['daemons'][':daemonName']['instances'][':instanceId']['restart']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':idOrName'].daemons[':daemonName'].instances[
            ':instanceId'
          ].restart.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV3DeploymentsIdOrUrlEventsKey(
  args: InferRequestType<(typeof client.v3.deployments)[':idOrUrl']['events']['$get']>,
) {
  return ['v3', '/v3/deployments/:idOrUrl/events', args] as const
}

export function useGetV3DeploymentsIdOrUrlEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v3.deployments)[':idOrUrl']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.deployments)[':idOrUrl']['events']['$get']>>
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
        ? getGetV3DeploymentsIdOrUrlEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.deployments)[':idOrUrl']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.deployments[':idOrUrl'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3DeploymentsIdOrUrlEvents<TError = unknown>(
  args: InferRequestType<(typeof client.v3.deployments)[':idOrUrl']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.deployments)[':idOrUrl']['events']['$get']>>
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
        ? getGetV3DeploymentsIdOrUrlEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.deployments)[':idOrUrl']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.deployments[':idOrUrl'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1DeploymentsDeploymentIdIntegrationsIntegrationConfigurationIdResourcesResourceIdActionsActionKey() {
  return [
    'v1',
    '/v1/deployments/:deploymentId/integrations/:integrationConfigurationId/resources/:resourceId/actions/:action',
    'PATCH',
  ] as const
}

export function usePatchV1DeploymentsDeploymentIdIntegrationsIntegrationConfigurationIdResourcesResourceIdActionsAction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.deployments)[':deploymentId']['integrations'][':integrationConfigurationId']['resources'][':resourceId']['actions'][':action']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.deployments)[':deploymentId']['integrations'][':integrationConfigurationId']['resources'][':resourceId']['actions'][':action']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchV1DeploymentsDeploymentIdIntegrationsIntegrationConfigurationIdResourcesResourceIdActionsActionKey()
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
            (typeof client.v1.deployments)[':deploymentId']['integrations'][':integrationConfigurationId']['resources'][':resourceId']['actions'][':action']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.deployments[':deploymentId'].integrations[
            ':integrationConfigurationId'
          ].resources[':resourceId'].actions[':action'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV13DeploymentsIdOrUrlKey(
  args: InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>,
) {
  return ['v13', '/v13/deployments/:idOrUrl', args] as const
}

export function useGetV13DeploymentsIdOrUrl<TError = unknown>(
  args: InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>
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
        ? getGetV13DeploymentsIdOrUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v13.deployments[':idOrUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV13DeploymentsIdOrUrl<TError = unknown>(
  args: InferRequestType<(typeof client.v13.deployments)[':idOrUrl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>
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
        ? getGetV13DeploymentsIdOrUrlKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v13.deployments)[':idOrUrl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v13.deployments[':idOrUrl'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV13DeploymentsKey() {
  return ['v13', '/v13/deployments', 'POST'] as const
}

export function usePostV13Deployments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v13.deployments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v13.deployments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV13DeploymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v13.deployments.$post> }) =>
        parseResponse(client.v13.deployments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV12DeploymentsIdCancelKey() {
  return ['v12', '/v12/deployments/:id/cancel', 'PATCH'] as const
}

export function usePatchV12DeploymentsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v12.deployments)[':id']['cancel']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v12.deployments)[':id']['cancel']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV12DeploymentsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v12.deployments)[':id']['cancel']['$patch']> },
      ) => parseResponse(client.v12.deployments[':id'].cancel.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV5DomainsDomainRecordsKey(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['records']['$get']>,
) {
  return ['v5', '/v5/domains/:domain/records', args] as const
}

export function useGetV5DomainsDomainRecords<TError = unknown>(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v5.domains)[':domain']['records']['$get']>>
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
        ? getGetV5DomainsDomainRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v5.domains)[':domain']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.domains[':domain'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV5DomainsDomainRecords<TError = unknown>(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v5.domains)[':domain']['records']['$get']>>
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
        ? getGetV5DomainsDomainRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v5.domains)[':domain']['records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.domains[':domain'].records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DomainsDomainRecordsKey() {
  return ['v2', '/v2/domains/:domain/records', 'POST'] as const
}

export function usePostV2DomainsDomainRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.domains)[':domain']['records']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.domains)[':domain']['records']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DomainsDomainRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.domains)[':domain']['records']['$post']> },
      ) => parseResponse(client.v2.domains[':domain'].records.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DomainsRecordsRecordIdKey() {
  return ['v1', '/v1/domains/records/:recordId', 'PATCH'] as const
}

export function usePatchV1DomainsRecordsRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.domains.records)[':recordId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.domains.records)[':recordId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DomainsRecordsRecordIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.domains.records)[':recordId']['$patch']> },
      ) => parseResponse(client.v1.domains.records[':recordId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDomainsDomainRecordsKey() {
  return ['domains', '/domains/:domain/records', 'PUT'] as const
}

export function usePutDomainsDomainRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.domains)[':domain']['records']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.domains)[':domain']['records']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDomainsDomainRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.domains)[':domain']['records']['$put']> },
      ) => parseResponse(client.domains[':domain'].records.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDomainsRecordsRecordIdKey(
  args: InferRequestType<(typeof client.domains.records)[':recordId']['$get']>,
) {
  return ['domains', '/domains/records/:recordId', args] as const
}

export function useGetDomainsRecordsRecordId<TError = unknown>(
  args: InferRequestType<(typeof client.domains.records)[':recordId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains.records)[':recordId']['$get']>>
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
        ? getGetDomainsRecordsRecordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains.records)[':recordId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.records[':recordId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDomainsRecordsRecordId<TError = unknown>(
  args: InferRequestType<(typeof client.domains.records)[':recordId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains.records)[':recordId']['$get']>>
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
        ? getGetDomainsRecordsRecordIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.domains.records)[':recordId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.domains.records[':recordId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2DomainsDomainRecordsRecordIdKey() {
  return ['v2', '/v2/domains/:domain/records/:recordId', 'DELETE'] as const
}

export function useDeleteV2DomainsDomainRecordsRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2DomainsDomainRecordsRecordIdKey()
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
            (typeof client.v2.domains)[':domain']['records'][':recordId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2.domains[':domain'].records[':recordId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrarDomainsSearchKey() {
  return ['v1', '/v1/registrar/domains/search', 'POST'] as const
}

export function usePostV1RegistrarDomainsSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.registrar.domains.search.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registrar.domains.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrarDomainsSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.registrar.domains.search.$post> },
      ) => parseResponse(client.v1.registrar.domains.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RegistrarTldsSupportedKey(
  args: InferRequestType<typeof client.v1.registrar.tlds.supported.$get>,
) {
  return ['v1', '/v1/registrar/tlds/supported', args] as const
}

export function useGetV1RegistrarTldsSupported<TError = unknown>(
  args: InferRequestType<typeof client.v1.registrar.tlds.supported.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.registrar.tlds.supported.$get>>>
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
        ? getGetV1RegistrarTldsSupportedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.registrar.tlds.supported.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.registrar.tlds.supported.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistrarTldsSupported<TError = unknown>(
  args: InferRequestType<typeof client.v1.registrar.tlds.supported.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.registrar.tlds.supported.$get>>>
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
        ? getGetV1RegistrarTldsSupportedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.registrar.tlds.supported.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.registrar.tlds.supported.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RegistrarTldsTldKey(
  args: InferRequestType<(typeof client.v1.registrar.tlds)[':tld']['$get']>,
) {
  return ['v1', '/v1/registrar/tlds/:tld', args] as const
}

export function useGetV1RegistrarTldsTld<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.tlds)[':tld']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.tlds)[':tld']['$get']>>
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
        ? getGetV1RegistrarTldsTldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.tlds)[':tld']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.registrar.tlds[':tld'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistrarTldsTld<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.tlds)[':tld']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.tlds)[':tld']['$get']>>
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
        ? getGetV1RegistrarTldsTldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.tlds)[':tld']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.registrar.tlds[':tld'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RegistrarTldsTldPriceKey(
  args: InferRequestType<(typeof client.v1.registrar.tlds)[':tld']['price']['$get']>,
) {
  return ['v1', '/v1/registrar/tlds/:tld/price', args] as const
}

export function useGetV1RegistrarTldsTldPrice<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.tlds)[':tld']['price']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.tlds)[':tld']['price']['$get']>>
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
        ? getGetV1RegistrarTldsTldPriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.tlds)[':tld']['price']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.registrar.tlds[':tld'].price.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistrarTldsTldPrice<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.tlds)[':tld']['price']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.tlds)[':tld']['price']['$get']>>
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
        ? getGetV1RegistrarTldsTldPriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.tlds)[':tld']['price']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.registrar.tlds[':tld'].price.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1RegistrarDomainsDomainAvailabilityKey(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['availability']['$get']>,
) {
  return ['v1', '/v1/registrar/domains/:domain/availability', args] as const
}

export function useGetV1RegistrarDomainsDomainAvailability<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['availability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registrar.domains)[':domain']['availability']['$get']>
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
        ? getGetV1RegistrarDomainsDomainAvailabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registrar.domains)[':domain']['availability']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.registrar.domains[':domain'].availability.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistrarDomainsDomainAvailability<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['availability']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registrar.domains)[':domain']['availability']['$get']>
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
        ? getGetV1RegistrarDomainsDomainAvailabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registrar.domains)[':domain']['availability']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.registrar.domains[':domain'].availability.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RegistrarDomainsDomainPriceKey(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['price']['$get']>,
) {
  return ['v1', '/v1/registrar/domains/:domain/price', args] as const
}

export function useGetV1RegistrarDomainsDomainPrice<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['price']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.domains)[':domain']['price']['$get']>>
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
        ? getGetV1RegistrarDomainsDomainPriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.domains)[':domain']['price']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.registrar.domains[':domain'].price.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistrarDomainsDomainPrice<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['price']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.domains)[':domain']['price']['$get']>>
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
        ? getGetV1RegistrarDomainsDomainPriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.domains)[':domain']['price']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.registrar.domains[':domain'].price.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RegistrarDomainsPriceKey() {
  return ['v1', '/v1/registrar/domains/price', 'POST'] as const
}

export function usePostV1RegistrarDomainsPrice<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.registrar.domains.price.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registrar.domains.price.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrarDomainsPriceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.registrar.domains.price.$post> },
      ) => parseResponse(client.v1.registrar.domains.price.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrarDomainsAvailabilityKey() {
  return ['v1', '/v1/registrar/domains/availability', 'POST'] as const
}

export function usePostV1RegistrarDomainsAvailability<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.registrar.domains.availability.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registrar.domains.availability.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrarDomainsAvailabilityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.registrar.domains.availability.$post> },
      ) => parseResponse(client.v1.registrar.domains.availability.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RegistrarDomainsDomainContactInfoSchemaKey(
  args: InferRequestType<
    (typeof client.v1.registrar.domains)[':domain']['contact-info']['schema']['$get']
  >,
) {
  return ['v1', '/v1/registrar/domains/:domain/contact-info/schema', args] as const
}

export function useGetV1RegistrarDomainsDomainContactInfoSchema<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.registrar.domains)[':domain']['contact-info']['schema']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registrar.domains)[':domain']['contact-info']['schema']['$get']
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
        ? getGetV1RegistrarDomainsDomainContactInfoSchemaKey(args)
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
                (typeof client.v1.registrar.domains)[':domain']['contact-info']['schema']['$get']
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
          client.v1.registrar.domains[':domain']['contact-info'].schema.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistrarDomainsDomainContactInfoSchema<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.registrar.domains)[':domain']['contact-info']['schema']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registrar.domains)[':domain']['contact-info']['schema']['$get']
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
        ? getGetV1RegistrarDomainsDomainContactInfoSchemaKey(args)
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
                (typeof client.v1.registrar.domains)[':domain']['contact-info']['schema']['$get']
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
          client.v1.registrar.domains[':domain']['contact-info'].schema.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RegistrarDomainsDomainAuthCodeKey(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['auth-code']['$get']>,
) {
  return ['v1', '/v1/registrar/domains/:domain/auth-code', args] as const
}

export function useGetV1RegistrarDomainsDomainAuthCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['auth-code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registrar.domains)[':domain']['auth-code']['$get']>
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
        ? getGetV1RegistrarDomainsDomainAuthCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registrar.domains)[':domain']['auth-code']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.registrar.domains[':domain']['auth-code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistrarDomainsDomainAuthCode<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['auth-code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registrar.domains)[':domain']['auth-code']['$get']>
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
        ? getGetV1RegistrarDomainsDomainAuthCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registrar.domains)[':domain']['auth-code']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.registrar.domains[':domain']['auth-code'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1RegistrarDomainsDomainBuyKey() {
  return ['v1', '/v1/registrar/domains/:domain/buy', 'POST'] as const
}

export function usePostV1RegistrarDomainsDomainBuy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.registrar.domains)[':domain']['buy']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.registrar.domains)[':domain']['buy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrarDomainsDomainBuyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['buy']['$post']>
        },
      ) => parseResponse(client.v1.registrar.domains[':domain'].buy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrarDomainsBuyKey() {
  return ['v1', '/v1/registrar/domains/buy', 'POST'] as const
}

export function usePostV1RegistrarDomainsBuy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.registrar.domains.buy.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.registrar.domains.buy.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrarDomainsBuyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.registrar.domains.buy.$post> },
      ) => parseResponse(client.v1.registrar.domains.buy.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1RegistrarDomainsDomainTransferKey(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['transfer']['$get']>,
) {
  return ['v1', '/v1/registrar/domains/:domain/transfer', args] as const
}

export function useGetV1RegistrarDomainsDomainTransfer<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['transfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.domains)[':domain']['transfer']['$get']>>
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
        ? getGetV1RegistrarDomainsDomainTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.domains)[':domain']['transfer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.registrar.domains[':domain'].transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistrarDomainsDomainTransfer<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['transfer']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.domains)[':domain']['transfer']['$get']>>
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
        ? getGetV1RegistrarDomainsDomainTransferKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.domains)[':domain']['transfer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.registrar.domains[':domain'].transfer.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1RegistrarDomainsDomainTransferKey() {
  return ['v1', '/v1/registrar/domains/:domain/transfer', 'POST'] as const
}

export function usePostV1RegistrarDomainsDomainTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.registrar.domains)[':domain']['transfer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.registrar.domains)[':domain']['transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrarDomainsDomainTransferKey()
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
            (typeof client.v1.registrar.domains)[':domain']['transfer']['$post']
          >
        },
      ) => parseResponse(client.v1.registrar.domains[':domain'].transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1RegistrarDomainsDomainRenewKey() {
  return ['v1', '/v1/registrar/domains/:domain/renew', 'POST'] as const
}

export function usePostV1RegistrarDomainsDomainRenew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.registrar.domains)[':domain']['renew']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.registrar.domains)[':domain']['renew']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1RegistrarDomainsDomainRenewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.registrar.domains)[':domain']['renew']['$post']>
        },
      ) => parseResponse(client.v1.registrar.domains[':domain'].renew.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1RegistrarDomainsDomainAutoRenewKey() {
  return ['v1', '/v1/registrar/domains/:domain/auto-renew', 'PATCH'] as const
}

export function usePatchV1RegistrarDomainsDomainAutoRenew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registrar.domains)[':domain']['auto-renew']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.registrar.domains)[':domain']['auto-renew']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1RegistrarDomainsDomainAutoRenewKey()
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
            (typeof client.v1.registrar.domains)[':domain']['auto-renew']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.registrar.domains[':domain']['auto-renew'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1RegistrarDomainsDomainNameserversKey() {
  return ['v1', '/v1/registrar/domains/:domain/nameservers', 'PATCH'] as const
}

export function usePatchV1RegistrarDomainsDomainNameservers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.registrar.domains)[':domain']['nameservers']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.registrar.domains)[':domain']['nameservers']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1RegistrarDomainsDomainNameserversKey()
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
            (typeof client.v1.registrar.domains)[':domain']['nameservers']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.registrar.domains[':domain'].nameservers.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1RegistrarDomainsDomainContactVerificationKey(
  args: InferRequestType<
    (typeof client.v1.registrar.domains)[':domain']['contact-verification']['$get']
  >,
) {
  return ['v1', '/v1/registrar/domains/:domain/contact-verification', args] as const
}

export function useGetV1RegistrarDomainsDomainContactVerification<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.registrar.domains)[':domain']['contact-verification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registrar.domains)[':domain']['contact-verification']['$get']
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
        ? getGetV1RegistrarDomainsDomainContactVerificationKey(args)
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
                (typeof client.v1.registrar.domains)[':domain']['contact-verification']['$get']
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
          client.v1.registrar.domains[':domain']['contact-verification'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistrarDomainsDomainContactVerification<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.registrar.domains)[':domain']['contact-verification']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.registrar.domains)[':domain']['contact-verification']['$get']
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
        ? getGetV1RegistrarDomainsDomainContactVerificationKey(args)
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
                (typeof client.v1.registrar.domains)[':domain']['contact-verification']['$get']
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
          client.v1.registrar.domains[':domain']['contact-verification'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1RegistrarOrdersOrderIdKey(
  args: InferRequestType<(typeof client.v1.registrar.orders)[':orderId']['$get']>,
) {
  return ['v1', '/v1/registrar/orders/:orderId', args] as const
}

export function useGetV1RegistrarOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.orders)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.orders)[':orderId']['$get']>>
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
        ? getGetV1RegistrarOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.orders)[':orderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.registrar.orders[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1RegistrarOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.registrar.orders)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.orders)[':orderId']['$get']>>
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
        ? getGetV1RegistrarOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.registrar.orders)[':orderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.registrar.orders[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV6DomainsDomainConfigKey(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>,
) {
  return ['v6', '/v6/domains/:domain/config', args] as const
}

export function useGetV6DomainsDomainConfig<TError = unknown>(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
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
        ? getGetV6DomainsDomainConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v6.domains[':domain'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV6DomainsDomainConfig<TError = unknown>(
  args: InferRequestType<(typeof client.v6.domains)[':domain']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
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
        ? getGetV6DomainsDomainConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.domains)[':domain']['config']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v6.domains[':domain'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV9DomainsDomainVerificationKey(
  args: InferRequestType<(typeof client.v9.domains)[':domain']['verification']['$get']>,
) {
  return ['v9', '/v9/domains/:domain/verification', args] as const
}

export function useGetV9DomainsDomainVerification<TError = unknown>(
  args: InferRequestType<(typeof client.v9.domains)[':domain']['verification']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.domains)[':domain']['verification']['$get']>>
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
        ? getGetV9DomainsDomainVerificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.domains)[':domain']['verification']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v9.domains[':domain'].verification.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV9DomainsDomainVerification<TError = unknown>(
  args: InferRequestType<(typeof client.v9.domains)[':domain']['verification']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.domains)[':domain']['verification']['$get']>>
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
        ? getGetV9DomainsDomainVerificationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.domains)[':domain']['verification']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v9.domains[':domain'].verification.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV9DomainsDomainClaimKey() {
  return ['v9', '/v9/domains/:domain/claim', 'POST'] as const
}

export function usePostV9DomainsDomainClaim<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.domains)[':domain']['claim']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.domains)[':domain']['claim']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV9DomainsDomainClaimKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v9.domains)[':domain']['claim']['$post']> },
      ) => parseResponse(client.v9.domains[':domain'].claim.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DomainsDomainProjectDomainsKey(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['project-domains']['$get']>,
) {
  return ['v1', '/v1/domains/:domain/project-domains', args] as const
}

export function useGetV1DomainsDomainProjectDomains<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['project-domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['project-domains']['$get']>>
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
        ? getGetV1DomainsDomainProjectDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['project-domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.domains[':domain']['project-domains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DomainsDomainProjectDomains<TError = unknown>(
  args: InferRequestType<(typeof client.v1.domains)[':domain']['project-domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['project-domains']['$get']>>
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
        ? getGetV1DomainsDomainProjectDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.domains)[':domain']['project-domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.domains[':domain']['project-domains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV5DomainsDomainKey(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['$get']>,
) {
  return ['v5', '/v5/domains/:domain', args] as const
}

export function useGetV5DomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
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
        ? getGetV5DomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV5DomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v5.domains)[':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
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
        ? getGetV5DomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v5.domains)[':domain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV5DomainsKey(args: InferRequestType<typeof client.v5.domains.$get>) {
  return ['v5', '/v5/domains', args] as const
}

export function useGetV5Domains<TError = unknown>(
  args: InferRequestType<typeof client.v5.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV5DomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV5Domains<TError = unknown>(
  args: InferRequestType<typeof client.v5.domains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV5DomainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v5.domains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV7DomainsKey() {
  return ['v7', '/v7/domains', 'POST'] as const
}

export function usePostV7Domains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.domains.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v7.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV7DomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v7.domains.$post> }) =>
        parseResponse(client.v7.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV3DomainsDomainKey() {
  return ['v3', '/v3/domains/:domain', 'PATCH'] as const
}

export function usePatchV3DomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.domains)[':domain']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.domains)[':domain']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV3DomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.domains)[':domain']['$patch']> },
      ) => parseResponse(client.v3.domains[':domain'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV6DomainsDomainKey() {
  return ['v6', '/v6/domains/:domain', 'DELETE'] as const
}

export function useDeleteV6DomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v6.domains)[':domain']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v6.domains)[':domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV6DomainsDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v6.domains)[':domain']['$delete']> },
      ) => parseResponse(client.v6.domains[':domain'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LogDrainsIdKey(
  args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>,
) {
  return ['v1', '/v1/log-drains/:id', args] as const
}

export function useGetV1LogDrainsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1LogDrainsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['log-drains'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LogDrainsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['log-drains'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1LogDrainsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['log-drains'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1LogDrainsIdKey() {
  return ['v1', '/v1/log-drains/:id', 'DELETE'] as const
}

export function useDeleteV1LogDrainsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['log-drains'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['log-drains'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1LogDrainsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['log-drains'][':id']['$delete']> },
      ) => parseResponse(client.v1['log-drains'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1LogDrainsKey(
  args: InferRequestType<(typeof client.v1)['log-drains']['$get']>,
) {
  return ['v1', '/v1/log-drains', args] as const
}

export function useGetV1LogDrains<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['log-drains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1LogDrainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['log-drains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1LogDrains<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['log-drains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1LogDrainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['log-drains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1LogDrainsKey() {
  return ['v1', '/v1/log-drains', 'POST'] as const
}

export function usePostV1LogDrains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['log-drains']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['log-drains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LogDrainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['log-drains']['$post']> },
      ) => parseResponse(client.v1['log-drains'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DrainsKey(args: InferRequestType<typeof client.v1.drains.$get>) {
  return ['v1', '/v1/drains', args] as const
}

export function useGetV1Drains<TError = unknown>(
  args: InferRequestType<typeof client.v1.drains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DrainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.drains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Drains<TError = unknown>(
  args: InferRequestType<typeof client.v1.drains.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drains.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DrainsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drains.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.drains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1DrainsKey() {
  return ['v1', '/v1/drains', 'POST'] as const
}

export function usePostV1Drains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drains.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.drains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DrainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.drains.$post> }) =>
        parseResponse(client.v1.drains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DrainsIdKey(
  args: InferRequestType<(typeof client.v1.drains)[':id']['$get']>,
) {
  return ['v1', '/v1/drains/:id', args] as const
}

export function useGetV1DrainsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.drains)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drains)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DrainsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drains)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.drains[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DrainsId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.drains)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drains)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1DrainsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drains)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.drains[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DrainsIdKey() {
  return ['v1', '/v1/drains/:id', 'DELETE'] as const
}

export function useDeleteV1DrainsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drains)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.drains)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DrainsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.drains)[':id']['$delete']> },
      ) => parseResponse(client.v1.drains[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1DrainsIdKey() {
  return ['v1', '/v1/drains/:id', 'PATCH'] as const
}

export function usePatchV1DrainsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drains)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.drains)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1DrainsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.drains)[':id']['$patch']> },
      ) => parseResponse(client.v1.drains[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DrainsTestKey() {
  return ['v1', '/v1/drains/test', 'POST'] as const
}

export function usePostV1DrainsTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drains.test.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.drains.test.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DrainsTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.drains.test.$post> }) =>
        parseResponse(client.v1.drains.test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DrivesKey(args: InferRequestType<typeof client.v1.drives.$get>) {
  return ['v1', '/v1/drives', args] as const
}

export function useGetV1Drives<TError = unknown>(
  args: InferRequestType<typeof client.v1.drives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DrivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drives.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.drives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Drives<TError = unknown>(
  args: InferRequestType<typeof client.v1.drives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drives.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1DrivesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.drives.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.drives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DrivesNameOrIdKey(
  args: InferRequestType<(typeof client.v1.drives)[':nameOrId']['$get']>,
) {
  return ['v1', '/v1/drives/:nameOrId', args] as const
}

export function useGetV1DrivesNameOrId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.drives)[':nameOrId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drives)[':nameOrId']['$get']>>>
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
        ? getGetV1DrivesNameOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drives)[':nameOrId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.drives[':nameOrId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DrivesNameOrId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.drives)[':nameOrId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drives)[':nameOrId']['$get']>>>
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
        ? getGetV1DrivesNameOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drives)[':nameOrId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.drives[':nameOrId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1DrivesNameOrIdKey() {
  return ['v1', '/v1/drives/:nameOrId', 'DELETE'] as const
}

export function useDeleteV1DrivesNameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drives)[':nameOrId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.drives)[':nameOrId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1DrivesNameOrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.drives)[':nameOrId']['$delete']> },
      ) => parseResponse(client.v1.drives[':nameOrId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DrivesNameKey() {
  return ['v1', '/v1/drives/:name', 'POST'] as const
}

export function usePostV1DrivesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.drives)[':name']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.drives)[':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DrivesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.drives)[':name']['$post']> },
      ) => parseResponse(client.v1.drives[':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1DrivesNameForkKey() {
  return ['v1', '/v1/drives/:name/fork', 'POST'] as const
}

export function usePostV1DrivesNameFork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.drives)[':name']['fork']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.drives)[':name']['fork']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1DrivesNameForkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.drives)[':name']['fork']['$post']> },
      ) => parseResponse(client.v1.drives[':name'].fork.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EdgeCacheInvalidateByTagsKey() {
  return ['v1', '/v1/edge-cache/invalidate-by-tags', 'POST'] as const
}

export function usePostV1EdgeCacheInvalidateByTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['edge-cache']['invalidate-by-tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['edge-cache']['invalidate-by-tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EdgeCacheInvalidateByTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['edge-cache']['invalidate-by-tags']['$post']>
        },
      ) => parseResponse(client.v1['edge-cache']['invalidate-by-tags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1EdgeCacheDangerouslyDeleteByTagsKey() {
  return ['v1', '/v1/edge-cache/dangerously-delete-by-tags', 'POST'] as const
}

export function usePostV1EdgeCacheDangerouslyDeleteByTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['edge-cache']['dangerously-delete-by-tags']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['edge-cache']['dangerously-delete-by-tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EdgeCacheDangerouslyDeleteByTagsKey()
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
            (typeof client.v1)['edge-cache']['dangerously-delete-by-tags']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['edge-cache']['dangerously-delete-by-tags'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1EdgeCacheInvalidateBySrcImagesKey() {
  return ['v1', '/v1/edge-cache/invalidate-by-src-images', 'POST'] as const
}

export function usePostV1EdgeCacheInvalidateBySrcImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['edge-cache']['invalidate-by-src-images']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['edge-cache']['invalidate-by-src-images']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EdgeCacheInvalidateBySrcImagesKey()
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
            (typeof client.v1)['edge-cache']['invalidate-by-src-images']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['edge-cache']['invalidate-by-src-images'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1EdgeCacheDangerouslyDeleteBySrcImagesKey() {
  return ['v1', '/v1/edge-cache/dangerously-delete-by-src-images', 'POST'] as const
}

export function usePostV1EdgeCacheDangerouslyDeleteBySrcImages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['edge-cache']['dangerously-delete-by-src-images']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['edge-cache']['dangerously-delete-by-src-images']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EdgeCacheDangerouslyDeleteBySrcImagesKey()
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
            (typeof client.v1)['edge-cache']['dangerously-delete-by-src-images']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['edge-cache']['dangerously-delete-by-src-images'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GlobalConfigKey(
  args: InferRequestType<(typeof client.v1)['global-config']['$get']>,
) {
  return ['v1', '/v1/global-config', args] as const
}

export function useGetV1GlobalConfig<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['global-config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['global-config']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1GlobalConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['global-config']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['global-config'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GlobalConfig<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['global-config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['global-config']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1GlobalConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['global-config']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['global-config'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1GlobalConfigKey() {
  return ['v1', '/v1/global-config', 'POST'] as const
}

export function usePostV1GlobalConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['global-config']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['global-config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GlobalConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['global-config']['$post']> },
      ) => parseResponse(client.v1['global-config'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GlobalConfigEdgeConfigIdKey(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['$get']>,
) {
  return ['v1', '/v1/global-config/:edgeConfigId', args] as const
}

export function useGetV1GlobalConfigEdgeConfigId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['$get']>>
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
        ? getGetV1GlobalConfigEdgeConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['global-config'][':edgeConfigId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GlobalConfigEdgeConfigId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['$get']>>
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
        ? getGetV1GlobalConfigEdgeConfigIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['global-config'][':edgeConfigId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1GlobalConfigEdgeConfigIdKey() {
  return ['v1', '/v1/global-config/:edgeConfigId', 'PUT'] as const
}

export function usePutV1GlobalConfigEdgeConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1GlobalConfigEdgeConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['$put']> },
      ) => parseResponse(client.v1['global-config'][':edgeConfigId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1GlobalConfigEdgeConfigIdKey() {
  return ['v1', '/v1/global-config/:edgeConfigId', 'DELETE'] as const
}

export function useDeleteV1GlobalConfigEdgeConfigId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1GlobalConfigEdgeConfigIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['$delete']>
        },
      ) => parseResponse(client.v1['global-config'][':edgeConfigId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GlobalConfigEdgeConfigIdItemsKey(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['items']['$get']>,
) {
  return ['v1', '/v1/global-config/:edgeConfigId/items', args] as const
}

export function useGetV1GlobalConfigEdgeConfigIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['items']['$get']>
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
        ? getGetV1GlobalConfigEdgeConfigIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['global-config'][':edgeConfigId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GlobalConfigEdgeConfigIdItems<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['items']['$get']>
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
        ? getGetV1GlobalConfigEdgeConfigIdItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['global-config'][':edgeConfigId'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1GlobalConfigEdgeConfigIdItemsKey() {
  return ['v1', '/v1/global-config/:edgeConfigId/items', 'PATCH'] as const
}

export function usePatchV1GlobalConfigEdgeConfigIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['items']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['items']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1GlobalConfigEdgeConfigIdItemsKey()
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
            (typeof client.v1)['global-config'][':edgeConfigId']['items']['$patch']
          >
        },
      ) =>
        parseResponse(client.v1['global-config'][':edgeConfigId'].items.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GlobalConfigEdgeConfigIdSchemaKey(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$get']>,
) {
  return ['v1', '/v1/global-config/:edgeConfigId/schema', args] as const
}

export function useGetV1GlobalConfigEdgeConfigIdSchema<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$get']>
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
        ? getGetV1GlobalConfigEdgeConfigIdSchemaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['global-config'][':edgeConfigId'].schema.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GlobalConfigEdgeConfigIdSchema<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$get']>
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
        ? getGetV1GlobalConfigEdgeConfigIdSchemaKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['global-config'][':edgeConfigId'].schema.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1GlobalConfigEdgeConfigIdSchemaKey() {
  return ['v1', '/v1/global-config/:edgeConfigId/schema', 'POST'] as const
}

export function usePostV1GlobalConfigEdgeConfigIdSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GlobalConfigEdgeConfigIdSchemaKey()
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
            (typeof client.v1)['global-config'][':edgeConfigId']['schema']['$post']
          >
        },
      ) =>
        parseResponse(client.v1['global-config'][':edgeConfigId'].schema.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1GlobalConfigEdgeConfigIdSchemaKey() {
  return ['v1', '/v1/global-config/:edgeConfigId/schema', 'DELETE'] as const
}

export function useDeleteV1GlobalConfigEdgeConfigIdSchema<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['schema']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1GlobalConfigEdgeConfigIdSchemaKey()
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
            (typeof client.v1)['global-config'][':edgeConfigId']['schema']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['global-config'][':edgeConfigId'].schema.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GlobalConfigEdgeConfigIdItemEdgeConfigItemKeyKey(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
  >,
) {
  return ['v1', '/v1/global-config/:edgeConfigId/item/:edgeConfigItemKey', args] as const
}

export function useGetV1GlobalConfigEdgeConfigIdItemEdgeConfigItemKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['global-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
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
        ? getGetV1GlobalConfigEdgeConfigIdItemEdgeConfigItemKeyKey(args)
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
                (typeof client.v1)['global-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
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
          client.v1['global-config'][':edgeConfigId'].item[':edgeConfigItemKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GlobalConfigEdgeConfigIdItemEdgeConfigItemKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['global-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
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
        ? getGetV1GlobalConfigEdgeConfigIdItemEdgeConfigItemKeyKey(args)
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
                (typeof client.v1)['global-config'][':edgeConfigId']['item'][':edgeConfigItemKey']['$get']
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
          client.v1['global-config'][':edgeConfigId'].item[':edgeConfigItemKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1GlobalConfigEdgeConfigIdTokensKey(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['tokens']['$get']>,
) {
  return ['v1', '/v1/global-config/:edgeConfigId/tokens', args] as const
}

export function useGetV1GlobalConfigEdgeConfigIdTokens<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['tokens']['$get']>
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
        ? getGetV1GlobalConfigEdgeConfigIdTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['global-config'][':edgeConfigId'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GlobalConfigEdgeConfigIdTokens<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['tokens']['$get']>
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
        ? getGetV1GlobalConfigEdgeConfigIdTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['global-config'][':edgeConfigId'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1GlobalConfigEdgeConfigIdTokensKey() {
  return ['v1', '/v1/global-config/:edgeConfigId/tokens', 'DELETE'] as const
}

export function useDeleteV1GlobalConfigEdgeConfigIdTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['tokens']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['tokens']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1GlobalConfigEdgeConfigIdTokensKey()
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
            (typeof client.v1)['global-config'][':edgeConfigId']['tokens']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1['global-config'][':edgeConfigId'].tokens.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GlobalConfigEdgeConfigIdTokenTokenKey(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['token'][':token']['$get']
  >,
) {
  return ['v1', '/v1/global-config/:edgeConfigId/token/:token', args] as const
}

export function useGetV1GlobalConfigEdgeConfigIdTokenToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['token'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['global-config'][':edgeConfigId']['token'][':token']['$get']
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
        ? getGetV1GlobalConfigEdgeConfigIdTokenTokenKey(args)
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
                (typeof client.v1)['global-config'][':edgeConfigId']['token'][':token']['$get']
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
          client.v1['global-config'][':edgeConfigId'].token[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GlobalConfigEdgeConfigIdTokenToken<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['token'][':token']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['global-config'][':edgeConfigId']['token'][':token']['$get']
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
        ? getGetV1GlobalConfigEdgeConfigIdTokenTokenKey(args)
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
                (typeof client.v1)['global-config'][':edgeConfigId']['token'][':token']['$get']
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
          client.v1['global-config'][':edgeConfigId'].token[':token'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1GlobalConfigEdgeConfigIdTokenKey() {
  return ['v1', '/v1/global-config/:edgeConfigId/token', 'POST'] as const
}

export function usePostV1GlobalConfigEdgeConfigIdToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['token']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1GlobalConfigEdgeConfigIdTokenKey()
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
            (typeof client.v1)['global-config'][':edgeConfigId']['token']['$post']
          >
        },
      ) =>
        parseResponse(client.v1['global-config'][':edgeConfigId'].token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdKey(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['backups'][':edgeConfigBackupVersionId']['$get']
  >,
) {
  return ['v1', '/v1/global-config/:edgeConfigId/backups/:edgeConfigBackupVersionId', args] as const
}

export function useGetV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['backups'][':edgeConfigBackupVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['global-config'][':edgeConfigId']['backups'][':edgeConfigBackupVersionId']['$get']
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
        ? getGetV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdKey(args)
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
                (typeof client.v1)['global-config'][':edgeConfigId']['backups'][':edgeConfigBackupVersionId']['$get']
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
          client.v1['global-config'][':edgeConfigId'].backups[':edgeConfigBackupVersionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['global-config'][':edgeConfigId']['backups'][':edgeConfigBackupVersionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['global-config'][':edgeConfigId']['backups'][':edgeConfigBackupVersionId']['$get']
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
        ? getGetV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdKey(args)
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
                (typeof client.v1)['global-config'][':edgeConfigId']['backups'][':edgeConfigBackupVersionId']['$get']
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
          client.v1['global-config'][':edgeConfigId'].backups[':edgeConfigBackupVersionId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRestoreKey() {
  return [
    'v1',
    '/v1/global-config/:edgeConfigId/backups/:edgeConfigBackupVersionId/restore',
    'POST',
  ] as const
}

export function usePostV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRestore<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['global-config'][':edgeConfigId']['backups'][':edgeConfigBackupVersionId']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['global-config'][':edgeConfigId']['backups'][':edgeConfigBackupVersionId']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1GlobalConfigEdgeConfigIdBackupsEdgeConfigBackupVersionIdRestoreKey()
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
            (typeof client.v1)['global-config'][':edgeConfigId']['backups'][':edgeConfigBackupVersionId']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['global-config'][':edgeConfigId'].backups[
            ':edgeConfigBackupVersionId'
          ].restore.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1GlobalConfigEdgeConfigIdBackupsKey(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['backups']['$get']>,
) {
  return ['v1', '/v1/global-config/:edgeConfigId/backups', args] as const
}

export function useGetV1GlobalConfigEdgeConfigIdBackups<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['backups']['$get']>
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
        ? getGetV1GlobalConfigEdgeConfigIdBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['backups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['global-config'][':edgeConfigId'].backups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1GlobalConfigEdgeConfigIdBackups<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['global-config'][':edgeConfigId']['backups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['backups']['$get']>
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
        ? getGetV1GlobalConfigEdgeConfigIdBackupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['global-config'][':edgeConfigId']['backups']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['global-config'][':edgeConfigId'].backups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1EnvKey(args: InferRequestType<typeof client.v1.env.$get>) {
  return ['v1', '/v1/env', args] as const
}

export function useGetV1Env<TError = unknown>(
  args: InferRequestType<typeof client.v1.env.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.env.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EnvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.env.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.env.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV1Env<TError = unknown>(
  args: InferRequestType<typeof client.v1.env.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.env.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EnvKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.env.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v1.env.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV1EnvKey() {
  return ['v1', '/v1/env', 'POST'] as const
}

export function usePostV1Env<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.env.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.env.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1EnvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.env.$post> }) =>
        parseResponse(client.v1.env.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1EnvKey() {
  return ['v1', '/v1/env', 'DELETE'] as const
}

export function useDeleteV1Env<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.env.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.env.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1EnvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.env.$delete> }) =>
        parseResponse(client.v1.env.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1EnvKey() {
  return ['v1', '/v1/env', 'PATCH'] as const
}

export function usePatchV1Env<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.env.$patch>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.env.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1EnvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.env.$patch> }) =>
        parseResponse(client.v1.env.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1EnvIdKey(args: InferRequestType<(typeof client.v1.env)[':id']['$get']>) {
  return ['v1', '/v1/env/:id', args] as const
}

export function useGetV1EnvId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.env)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.env)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EnvIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.env)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.env[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EnvId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.env)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.env)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EnvIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1.env)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.env[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1EnvIdUnlinkProjectIdKey() {
  return ['v1', '/v1/env/:id/unlink/:projectId', 'PATCH'] as const
}

export function usePatchV1EnvIdUnlinkProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.env)[':id']['unlink'][':projectId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.env)[':id']['unlink'][':projectId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1EnvIdUnlinkProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.env)[':id']['unlink'][':projectId']['$patch']>
        },
      ) => parseResponse(client.v1.env[':id'].unlink[':projectId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3EventsKey(args: InferRequestType<typeof client.v3.events.$get>) {
  return ['v3', '/v3/events', args] as const
}

export function useGetV3Events<TError = unknown>(
  args: InferRequestType<typeof client.v3.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Events<TError = unknown>(
  args: InferRequestType<typeof client.v3.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3EventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1EventsTypesKey(args: InferRequestType<typeof client.v1.events.types.$get>) {
  return ['v1', '/v1/events/types', args] as const
}

export function useGetV1EventsTypes<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EventsTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1EventsTypes<TError = unknown>(
  args: InferRequestType<typeof client.v1.events.types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1EventsTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.events.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.events.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdOrNameFeatureFlagsOverridesSignKey() {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/overrides/sign', 'POST'] as const
}

export function usePostV1ProjectsProjectIdOrNameFeatureFlagsOverridesSign<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['overrides']['sign']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['overrides']['sign']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdOrNameFeatureFlagsOverridesSignKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['overrides']['sign']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags'].overrides.sign.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2ProjectsProjectIdOrNameFeatureFlagsFlagsKey(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
  >,
) {
  return ['v2', '/v2/projects/:projectIdOrName/feature-flags/flags', args] as const
}

export function useGetV2ProjectsProjectIdOrNameFeatureFlagsFlags<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
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
        ? getGetV2ProjectsProjectIdOrNameFeatureFlagsFlagsKey(args)
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
                (typeof client.v2.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
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
          client.v2.projects[':projectIdOrName']['feature-flags'].flags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ProjectsProjectIdOrNameFeatureFlagsFlags<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
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
        ? getGetV2ProjectsProjectIdOrNameFeatureFlagsFlagsKey(args)
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
                (typeof client.v2.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
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
          client.v2.projects[':projectIdOrName']['feature-flags'].flags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
  >,
) {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/flags', args] as const
}

export function useGetV1ProjectsProjectIdOrNameFeatureFlagsFlags<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].flags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdOrNameFeatureFlagsFlags<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].flags.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectIdOrNameFeatureFlagsFlagsKey() {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/flags', 'PUT'] as const
}

export function usePutV1ProjectsProjectIdOrNameFeatureFlagsFlags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectIdOrNameFeatureFlagsFlagsKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags'].flags.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$get']
  >,
) {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/flags/:flagIdOrSlug', args] as const
}

export function useGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlug<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].flags[':flagIdOrSlug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlug<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].flags[':flagIdOrSlug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugKey() {
  return [
    'v1',
    '/v1/projects/:projectIdOrName/feature-flags/flags/:flagIdOrSlug',
    'DELETE',
  ] as const
}

export function useDeleteV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags'].flags[':flagIdOrSlug'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugKey() {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/flags/:flagIdOrSlug', 'PATCH'] as const
}

export function usePatchV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags'].flags[':flagIdOrSlug'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugVersionsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['versions']['$get']
  >,
) {
  return [
    'v1',
    '/v1/projects/:projectIdOrName/feature-flags/flags/:flagIdOrSlug/versions',
    args,
  ] as const
}

export function useGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['versions']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugVersionsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['versions']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].flags[
            ':flagIdOrSlug'
          ].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugVersions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['versions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['versions']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsFlagsFlagIdOrSlugVersionsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['flags'][':flagIdOrSlug']['versions']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].flags[
            ':flagIdOrSlug'
          ].versions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdOrNameFeatureFlagsSettingsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['settings']['$get']
  >,
) {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/settings', args] as const
}

export function useGetV1ProjectsProjectIdOrNameFeatureFlagsSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['settings']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsSettingsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['settings']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdOrNameFeatureFlagsSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['settings']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsSettingsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['settings']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].settings.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectIdOrNameFeatureFlagsSettingsKey() {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/settings', 'PATCH'] as const
}

export function usePatchV1ProjectsProjectIdOrNameFeatureFlagsSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['settings']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['settings']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsProjectIdOrNameFeatureFlagsSettingsKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['settings']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags'].settings.$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdOrNameFeatureFlagsLabelsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['$get']
  >,
) {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/labels', args] as const
}

export function useGetV1ProjectsProjectIdOrNameFeatureFlagsLabels<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsLabelsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].labels.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdOrNameFeatureFlagsLabels<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsLabelsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].labels.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdOrNameFeatureFlagsLabelsCountsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['counts']['$get']
  >,
) {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/labels/counts', args] as const
}

export function useGetV1ProjectsProjectIdOrNameFeatureFlagsLabelsCounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['counts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['counts']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsLabelsCountsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['counts']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].labels.counts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdOrNameFeatureFlagsLabelsCounts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['counts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['counts']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsLabelsCountsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['counts']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].labels.counts.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdOrNameFeatureFlagsLabelsLookupKey() {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/labels/lookup', 'POST'] as const
}

export function usePostV1ProjectsProjectIdOrNameFeatureFlagsLabelsLookup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['lookup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['lookup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdOrNameFeatureFlagsLabelsLookupKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['labels']['lookup']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags'].labels.lookup.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1TeamsTeamIdFeatureFlagsSettingsKey(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['feature-flags']['settings']['$get']>,
) {
  return ['v1', '/v1/teams/:teamId/feature-flags/settings', args] as const
}

export function useGetV1TeamsTeamIdFeatureFlagsSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['feature-flags']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.teams)[':teamId']['feature-flags']['settings']['$get']>
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
        ? getGetV1TeamsTeamIdFeatureFlagsSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.teams)[':teamId']['feature-flags']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.teams[':teamId']['feature-flags'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TeamsTeamIdFeatureFlagsSettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['feature-flags']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.teams)[':teamId']['feature-flags']['settings']['$get']>
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
        ? getGetV1TeamsTeamIdFeatureFlagsSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.teams)[':teamId']['feature-flags']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.teams[':teamId']['feature-flags'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV2TeamsTeamIdFeatureFlagsFlagsKey(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['feature-flags']['flags']['$get']>,
) {
  return ['v2', '/v2/teams/:teamId/feature-flags/flags', args] as const
}

export function useGetV2TeamsTeamIdFeatureFlagsFlags<TError = unknown>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['feature-flags']['flags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.teams)[':teamId']['feature-flags']['flags']['$get']>
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
        ? getGetV2TeamsTeamIdFeatureFlagsFlagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.teams)[':teamId']['feature-flags']['flags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.teams[':teamId']['feature-flags'].flags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TeamsTeamIdFeatureFlagsFlags<TError = unknown>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['feature-flags']['flags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.teams)[':teamId']['feature-flags']['flags']['$get']>
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
        ? getGetV2TeamsTeamIdFeatureFlagsFlagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v2.teams)[':teamId']['feature-flags']['flags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.teams[':teamId']['feature-flags'].flags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1TeamsTeamIdFeatureFlagsFlagsKey(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['feature-flags']['flags']['$get']>,
) {
  return ['v1', '/v1/teams/:teamId/feature-flags/flags', args] as const
}

export function useGetV1TeamsTeamIdFeatureFlagsFlags<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['feature-flags']['flags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.teams)[':teamId']['feature-flags']['flags']['$get']>
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
        ? getGetV1TeamsTeamIdFeatureFlagsFlagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.teams)[':teamId']['feature-flags']['flags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.teams[':teamId']['feature-flags'].flags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TeamsTeamIdFeatureFlagsFlags<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['feature-flags']['flags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.teams)[':teamId']['feature-flags']['flags']['$get']>
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
        ? getGetV1TeamsTeamIdFeatureFlagsFlagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.teams)[':teamId']['feature-flags']['flags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.teams[':teamId']['feature-flags'].flags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdOrNameFeatureFlagsSegmentsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments']['$get']
  >,
) {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/segments', args] as const
}

export function useGetV1ProjectsProjectIdOrNameFeatureFlagsSegments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsSegmentsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].segments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdOrNameFeatureFlagsSegments<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsSegmentsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].segments.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectIdOrNameFeatureFlagsSegmentsKey() {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/segments', 'PUT'] as const
}

export function usePutV1ProjectsProjectIdOrNameFeatureFlagsSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectIdOrNameFeatureFlagsSegmentsKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags'].segments.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$get']
  >,
) {
  return [
    'v1',
    '/v1/projects/:projectIdOrName/feature-flags/segments/:segmentIdOrSlug',
    args,
  ] as const
}

export function useGetV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlug<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].segments[':segmentIdOrSlug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlug<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].segments[':segmentIdOrSlug'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugKey() {
  return [
    'v1',
    '/v1/projects/:projectIdOrName/feature-flags/segments/:segmentIdOrSlug',
    'DELETE',
  ] as const
}

export function useDeleteV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags'].segments[
            ':segmentIdOrSlug'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugKey() {
  return [
    'v1',
    '/v1/projects/:projectIdOrName/feature-flags/segments/:segmentIdOrSlug',
    'PATCH',
  ] as const
}

export function usePatchV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlug<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1ProjectsProjectIdOrNameFeatureFlagsSegmentsSegmentIdOrSlugKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['segments'][':segmentIdOrSlug']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags'].segments[
            ':segmentIdOrSlug'
          ].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1DeploymentsDeploymentIdFeatureFlagsKey(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['feature-flags']['$get']>,
) {
  return ['v1', '/v1/deployments/:deploymentId/feature-flags', args] as const
}

export function useGetV1DeploymentsDeploymentIdFeatureFlags<TError = unknown>(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['feature-flags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.deployments)[':deploymentId']['feature-flags']['$get']>
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
        ? getGetV1DeploymentsDeploymentIdFeatureFlagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.deployments)[':deploymentId']['feature-flags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.deployments[':deploymentId']['feature-flags'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DeploymentsDeploymentIdFeatureFlags<TError = unknown>(
  args: InferRequestType<(typeof client.v1.deployments)[':deploymentId']['feature-flags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.deployments)[':deploymentId']['feature-flags']['$get']>
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
        ? getGetV1DeploymentsDeploymentIdFeatureFlagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.deployments)[':deploymentId']['feature-flags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.deployments[':deploymentId']['feature-flags'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys']['$get']
  >,
) {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/sdk-keys', args] as const
}

export function useGetV1ProjectsProjectIdOrNameFeatureFlagsSdkKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags']['sdk-keys'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdOrNameFeatureFlagsSdkKeys<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags']['sdk-keys'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysKey() {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/sdk-keys', 'PUT'] as const
}

export function usePutV1ProjectsProjectIdOrNameFeatureFlagsSdkKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags']['sdk-keys'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysHashKeyKey() {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/sdk-keys/:hashKey', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysHashKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys'][':hashKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys'][':hashKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdOrNameFeatureFlagsSdkKeysHashKeyKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['sdk-keys'][':hashKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags']['sdk-keys'][':hashKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdOrNameFeatureFlagsConnectionsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections']['$get']
  >,
) {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/connections', args] as const
}

export function useGetV1ProjectsProjectIdOrNameFeatureFlagsConnections<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsConnectionsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].connections.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdOrNameFeatureFlagsConnections<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections']['$get']
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
        ? getGetV1ProjectsProjectIdOrNameFeatureFlagsConnectionsKey(args)
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
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections']['$get']
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
          client.v1.projects[':projectIdOrName']['feature-flags'].connections.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectIdOrNameFeatureFlagsConnectionsKey() {
  return ['v1', '/v1/projects/:projectIdOrName/feature-flags/connections', 'PUT'] as const
}

export function usePutV1ProjectsProjectIdOrNameFeatureFlagsConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectIdOrNameFeatureFlagsConnectionsKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags'].connections.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdOrNameFeatureFlagsConnectionsConsumerProjectIdKey() {
  return [
    'v1',
    '/v1/projects/:projectIdOrName/feature-flags/connections/:consumerProjectId',
    'DELETE',
  ] as const
}

export function useDeleteV1ProjectsProjectIdOrNameFeatureFlagsConnectionsConsumerProjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections'][':consumerProjectId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections'][':consumerProjectId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1ProjectsProjectIdOrNameFeatureFlagsConnectionsConsumerProjectIdKey()
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
            (typeof client.v1.projects)[':projectIdOrName']['feature-flags']['connections'][':consumerProjectId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectIdOrName']['feature-flags'].connections[
            ':consumerProjectId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1IntegrationsGitNamespacesKey(
  args: InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>,
) {
  return ['v1', '/v1/integrations/git-namespaces', args] as const
}

export function useGetV1IntegrationsGitNamespaces<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
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
        ? getGetV1IntegrationsGitNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations['git-namespaces'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IntegrationsGitNamespaces<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations)['git-namespaces']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
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
        ? getGetV1IntegrationsGitNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['git-namespaces']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations['git-namespaces'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IntegrationsSearchRepoKey(
  args: InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>,
) {
  return ['v1', '/v1/integrations/search-repo', args] as const
}

export function useGetV1IntegrationsSearchRepo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
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
        ? getGetV1IntegrationsSearchRepoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations['search-repo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IntegrationsSearchRepo<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations)['search-repo']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
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
        ? getGetV1IntegrationsSearchRepoKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['search-repo']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations['search-repo'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansKey(
  args: InferRequestType<
    (typeof client.v1.integrations.integration)[':integrationIdOrSlug']['products'][':productIdOrSlug']['plans']['$get']
  >,
) {
  return [
    'v1',
    '/v1/integrations/integration/:integrationIdOrSlug/products/:productIdOrSlug/plans',
    args,
  ] as const
}

export function useGetV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlans<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.integrations.integration)[':integrationIdOrSlug']['products'][':productIdOrSlug']['plans']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.integrations.integration)[':integrationIdOrSlug']['products'][':productIdOrSlug']['plans']['$get']
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
        ? getGetV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansKey(args)
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
                (typeof client.v1.integrations.integration)[':integrationIdOrSlug']['products'][':productIdOrSlug']['plans']['$get']
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
          client.v1.integrations.integration[':integrationIdOrSlug'].products[
            ':productIdOrSlug'
          ].plans.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlans<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.integrations.integration)[':integrationIdOrSlug']['products'][':productIdOrSlug']['plans']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.integrations.integration)[':integrationIdOrSlug']['products'][':productIdOrSlug']['plans']['$get']
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
        ? getGetV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansKey(args)
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
                (typeof client.v1.integrations.integration)[':integrationIdOrSlug']['products'][':productIdOrSlug']['plans']['$get']
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
          client.v1.integrations.integration[':integrationIdOrSlug'].products[
            ':productIdOrSlug'
          ].plans.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1IntegrationsInstallationsIntegrationConfigurationIdResourcesResourceIdConnectionsKey() {
  return [
    'v1',
    '/v1/integrations/installations/:integrationConfigurationId/resources/:resourceId/connections',
    'POST',
  ] as const
}

export function usePostV1IntegrationsInstallationsIntegrationConfigurationIdResourcesResourceIdConnections<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.integrations.installations)[':integrationConfigurationId']['resources'][':resourceId']['connections']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.integrations.installations)[':integrationConfigurationId']['resources'][':resourceId']['connections']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1IntegrationsInstallationsIntegrationConfigurationIdResourcesResourceIdConnectionsKey()
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
            (typeof client.v1.integrations.installations)[':integrationConfigurationId']['resources'][':resourceId']['connections']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.integrations.installations[':integrationConfigurationId'].resources[
            ':resourceId'
          ].connections.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1InstallationsIntegrationConfigurationIdKey() {
  return ['v1', '/v1/installations/:integrationConfigurationId', 'PATCH'] as const
}

export function usePatchV1InstallationsIntegrationConfigurationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.installations)[':integrationConfigurationId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.installations)[':integrationConfigurationId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1InstallationsIntegrationConfigurationIdKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1InstallationsIntegrationConfigurationIdAccountKey(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['account']['$get']
  >,
) {
  return ['v1', '/v1/installations/:integrationConfigurationId/account', args] as const
}

export function useGetV1InstallationsIntegrationConfigurationIdAccount<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['account']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['account']['$get']
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
        ? getGetV1InstallationsIntegrationConfigurationIdAccountKey(args)
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
                (typeof client.v1.installations)[':integrationConfigurationId']['account']['$get']
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
          client.v1.installations[':integrationConfigurationId'].account.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstallationsIntegrationConfigurationIdAccount<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['account']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['account']['$get']
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
        ? getGetV1InstallationsIntegrationConfigurationIdAccountKey(args)
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
                (typeof client.v1.installations)[':integrationConfigurationId']['account']['$get']
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
          client.v1.installations[':integrationConfigurationId'].account.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1InstallationsIntegrationConfigurationIdMemberMemberIdKey(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['member'][':memberId']['$get']
  >,
) {
  return ['v1', '/v1/installations/:integrationConfigurationId/member/:memberId', args] as const
}

export function useGetV1InstallationsIntegrationConfigurationIdMemberMemberId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['member'][':memberId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['member'][':memberId']['$get']
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
        ? getGetV1InstallationsIntegrationConfigurationIdMemberMemberIdKey(args)
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
                (typeof client.v1.installations)[':integrationConfigurationId']['member'][':memberId']['$get']
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
          client.v1.installations[':integrationConfigurationId'].member[':memberId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstallationsIntegrationConfigurationIdMemberMemberId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['member'][':memberId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['member'][':memberId']['$get']
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
        ? getGetV1InstallationsIntegrationConfigurationIdMemberMemberIdKey(args)
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
                (typeof client.v1.installations)[':integrationConfigurationId']['member'][':memberId']['$get']
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
          client.v1.installations[':integrationConfigurationId'].member[':memberId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1InstallationsIntegrationConfigurationIdCredentialsRotateKey() {
  return ['v1', '/v1/installations/:integrationConfigurationId/credentials/rotate', 'POST'] as const
}

export function usePostV1InstallationsIntegrationConfigurationIdCredentialsRotate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.installations)[':integrationConfigurationId']['credentials']['rotate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['credentials']['rotate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InstallationsIntegrationConfigurationIdCredentialsRotateKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['credentials']['rotate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].credentials.rotate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1InstallationsIntegrationConfigurationIdCredentialsRevokeKey() {
  return ['v1', '/v1/installations/:integrationConfigurationId/credentials/revoke', 'POST'] as const
}

export function usePostV1InstallationsIntegrationConfigurationIdCredentialsRevoke<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.installations)[':integrationConfigurationId']['credentials']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['credentials']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InstallationsIntegrationConfigurationIdCredentialsRevokeKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['credentials']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].credentials.revoke.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1InstallationsIntegrationConfigurationIdEventsKey() {
  return ['v1', '/v1/installations/:integrationConfigurationId/events', 'POST'] as const
}

export function usePostV1InstallationsIntegrationConfigurationIdEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.installations)[':integrationConfigurationId']['events']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['events']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InstallationsIntegrationConfigurationIdEventsKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['events']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].events.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1InstallationsIntegrationConfigurationIdResourcesKey(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources']['$get']
  >,
) {
  return ['v1', '/v1/installations/:integrationConfigurationId/resources', args] as const
}

export function useGetV1InstallationsIntegrationConfigurationIdResources<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['resources']['$get']
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
        ? getGetV1InstallationsIntegrationConfigurationIdResourcesKey(args)
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
                (typeof client.v1.installations)[':integrationConfigurationId']['resources']['$get']
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
          client.v1.installations[':integrationConfigurationId'].resources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstallationsIntegrationConfigurationIdResources<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['resources']['$get']
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
        ? getGetV1InstallationsIntegrationConfigurationIdResourcesKey(args)
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
                (typeof client.v1.installations)[':integrationConfigurationId']['resources']['$get']
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
          client.v1.installations[':integrationConfigurationId'].resources.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1InstallationsIntegrationConfigurationIdResourcesResourceIdKey(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/resources/:resourceId',
    args,
  ] as const
}

export function useGetV1InstallationsIntegrationConfigurationIdResourcesResourceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$get']
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
        ? getGetV1InstallationsIntegrationConfigurationIdResourcesResourceIdKey(args)
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
                (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$get']
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
          client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstallationsIntegrationConfigurationIdResourcesResourceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$get']
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
        ? getGetV1InstallationsIntegrationConfigurationIdResourcesResourceIdKey(args)
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
                (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$get']
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
          client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1InstallationsIntegrationConfigurationIdResourcesResourceIdKey() {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/resources/:resourceId',
    'PUT',
  ] as const
}

export function usePutV1InstallationsIntegrationConfigurationIdResourcesResourceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV1InstallationsIntegrationConfigurationIdResourcesResourceIdKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdKey() {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/resources/:resourceId',
    'DELETE',
  ] as const
}

export function useDeleteV1InstallationsIntegrationConfigurationIdResourcesResourceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdKey() {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/resources/:resourceId',
    'PATCH',
  ] as const
}

export function usePatchV1InstallationsIntegrationConfigurationIdResourcesResourceId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].resources[':resourceId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1InstallationsIntegrationConfigurationIdBillingKey() {
  return ['v1', '/v1/installations/:integrationConfigurationId/billing', 'POST'] as const
}

export function usePostV1InstallationsIntegrationConfigurationIdBilling<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.installations)[':integrationConfigurationId']['billing']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['billing']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InstallationsIntegrationConfigurationIdBillingKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['billing']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].billing.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1InstallationsIntegrationConfigurationIdBillingInvoicesKey() {
  return ['v1', '/v1/installations/:integrationConfigurationId/billing/invoices', 'POST'] as const
}

export function usePostV1InstallationsIntegrationConfigurationIdBillingInvoices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InstallationsIntegrationConfigurationIdBillingInvoicesKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].billing.invoices.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1InstallationsIntegrationConfigurationIdBillingFinalizeKey() {
  return ['v1', '/v1/installations/:integrationConfigurationId/billing/finalize', 'POST'] as const
}

export function usePostV1InstallationsIntegrationConfigurationIdBillingFinalize<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['billing']['finalize']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['billing']['finalize']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InstallationsIntegrationConfigurationIdBillingFinalizeKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['billing']['finalize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].billing.finalize.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdKey(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices'][':invoiceId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/billing/invoices/:invoiceId',
    args,
  ] as const
}

export function useGetV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices'][':invoiceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices'][':invoiceId']['$get']
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
        ? getGetV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdKey(args)
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
                (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices'][':invoiceId']['$get']
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
          client.v1.installations[':integrationConfigurationId'].billing.invoices[
            ':invoiceId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices'][':invoiceId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices'][':invoiceId']['$get']
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
        ? getGetV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdKey(args)
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
                (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices'][':invoiceId']['$get']
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
          client.v1.installations[':integrationConfigurationId'].billing.invoices[
            ':invoiceId'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdActionsKey() {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/billing/invoices/:invoiceId/actions',
    'POST',
  ] as const
}

export function usePostV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdActions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices'][':invoiceId']['actions']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices'][':invoiceId']['actions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdActionsKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['billing']['invoices'][':invoiceId']['actions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].billing.invoices[
            ':invoiceId'
          ].actions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1InstallationsIntegrationConfigurationIdBillingBalanceKey() {
  return ['v1', '/v1/installations/:integrationConfigurationId/billing/balance', 'POST'] as const
}

export function usePostV1InstallationsIntegrationConfigurationIdBillingBalance<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.installations)[':integrationConfigurationId']['billing']['balance']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['billing']['balance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1InstallationsIntegrationConfigurationIdBillingBalanceKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['billing']['balance']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].billing.balance.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1InstallationsIntegrationConfigurationIdProductsIntegrationProductIdOrSlugResourcesResourceIdSecretsKey() {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/products/:integrationProductIdOrSlug/resources/:resourceId/secrets',
    'PUT',
  ] as const
}

export function usePutV1InstallationsIntegrationConfigurationIdProductsIntegrationProductIdOrSlugResourcesResourceIdSecrets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.installations)[':integrationConfigurationId']['products'][':integrationProductIdOrSlug']['resources'][':resourceId']['secrets']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['products'][':integrationProductIdOrSlug']['resources'][':resourceId']['secrets']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1InstallationsIntegrationConfigurationIdProductsIntegrationProductIdOrSlugResourcesResourceIdSecretsKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['products'][':integrationProductIdOrSlug']['resources'][':resourceId']['secrets']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].products[
            ':integrationProductIdOrSlug'
          ].resources[':resourceId'].secrets.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1InstallationsIntegrationConfigurationIdResourcesResourceIdSecretsKey() {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/resources/:resourceId/secrets',
    'PUT',
  ] as const
}

export function usePutV1InstallationsIntegrationConfigurationIdResourcesResourceIdSecrets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['secrets']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['secrets']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutV1InstallationsIntegrationConfigurationIdResourcesResourceIdSecretsKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['secrets']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].resources[
            ':resourceId'
          ].secrets.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1IntegrationsConfigurationsKey(
  args: InferRequestType<typeof client.v1.integrations.configurations.$get>,
) {
  return ['v1', '/v1/integrations/configurations', args] as const
}

export function useGetV1IntegrationsConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.v1.integrations.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>
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
        ? getGetV1IntegrationsConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IntegrationsConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.v1.integrations.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>
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
        ? getGetV1IntegrationsConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.integrations.configurations.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.integrations.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1IntegrationsConfigurationIdKey(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>,
) {
  return ['v1', '/v1/integrations/configuration/:id', args] as const
}

export function useGetV1IntegrationsConfigurationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
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
        ? getGetV1IntegrationsConfigurationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.integrations.configuration[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IntegrationsConfigurationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
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
        ? getGetV1IntegrationsConfigurationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.integrations.configuration[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1IntegrationsConfigurationIdKey() {
  return ['v1', '/v1/integrations/configuration/:id', 'DELETE'] as const
}

export function useDeleteV1IntegrationsConfigurationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations.configuration)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1IntegrationsConfigurationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['$delete']>
        },
      ) => parseResponse(client.v1.integrations.configuration[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1IntegrationsConfigurationIdProductsKey(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['products']['$get']>,
) {
  return ['v1', '/v1/integrations/configuration/:id/products', args] as const
}

export function useGetV1IntegrationsConfigurationIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.integrations.configuration)[':id']['products']['$get']>
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
        ? getGetV1IntegrationsConfigurationIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.integrations.configuration)[':id']['products']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.integrations.configuration[':id'].products.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1IntegrationsConfigurationIdProducts<TError = unknown>(
  args: InferRequestType<(typeof client.v1.integrations.configuration)[':id']['products']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.integrations.configuration)[':id']['products']['$get']>
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
        ? getGetV1IntegrationsConfigurationIdProductsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.integrations.configuration)[':id']['products']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.integrations.configuration[':id'].products.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1IntegrationsSsoTokenKey() {
  return ['v1', '/v1/integrations/sso/token', 'POST'] as const
}

export function usePostV1IntegrationsSsoToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.integrations.sso.token.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.integrations.sso.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1IntegrationsSsoTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.integrations.sso.token.$post> },
      ) => parseResponse(client.v1.integrations.sso.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2IntegrationsLogDrainsKey(
  args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>,
) {
  return ['v2', '/v2/integrations/log-drains', args] as const
}

export function useGetV2IntegrationsLogDrains<TError = unknown>(
  args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
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
        ? getGetV2IntegrationsLogDrainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.integrations['log-drains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2IntegrationsLogDrains<TError = unknown>(
  args: InferRequestType<(typeof client.v2.integrations)['log-drains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
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
        ? getGetV2IntegrationsLogDrainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.integrations['log-drains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2IntegrationsLogDrainsKey() {
  return ['v2', '/v2/integrations/log-drains', 'POST'] as const
}

export function usePostV2IntegrationsLogDrains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.integrations)['log-drains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.integrations)['log-drains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2IntegrationsLogDrainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.integrations)['log-drains']['$post']> },
      ) => parseResponse(client.v2.integrations['log-drains'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1IntegrationsLogDrainsIdKey() {
  return ['v1', '/v1/integrations/log-drains/:id', 'DELETE'] as const
}

export function useDeleteV1IntegrationsLogDrainsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1IntegrationsLogDrainsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.integrations)['log-drains'][':id']['$delete']>
        },
      ) => parseResponse(client.v1.integrations['log-drains'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiKeysKey() {
  return ['api-keys', '/api-keys', 'POST'] as const
}

export function usePostApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['api-keys']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['api-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['api-keys']['$post']> }) =>
        parseResponse(client['api-keys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiKeysApiKeyIDQuotaKey() {
  return ['api-keys', '/api-keys/:apiKeyID/quota', 'PATCH'] as const
}

export function usePatchApiKeysApiKeyIDQuota<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['api-keys'][':apiKeyID']['quota']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['api-keys'][':apiKeyID']['quota']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiKeysApiKeyIDQuotaKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['api-keys'][':apiKeyID']['quota']['$patch']> },
      ) => parseResponse(client['api-keys'][':apiKeyID'].quota.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1KmsIssuersIssuerIdSignMessageKey() {
  return ['v1', '/v1/kms/issuers/:issuerId/sign/message', 'POST'] as const
}

export function usePostV1KmsIssuersIssuerIdSignMessage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.kms.issuers)[':issuerId']['sign']['message']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['sign']['message']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1KmsIssuersIssuerIdSignMessageKey()
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
            (typeof client.v1.kms.issuers)[':issuerId']['sign']['message']['$post']
          >
        },
      ) => parseResponse(client.v1.kms.issuers[':issuerId'].sign.message.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1KmsIssuersIssuerIdSignTokenKey() {
  return ['v1', '/v1/kms/issuers/:issuerId/sign/token', 'POST'] as const
}

export function usePostV1KmsIssuersIssuerIdSignToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.kms.issuers)[':issuerId']['sign']['token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['sign']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1KmsIssuersIssuerIdSignTokenKey()
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
            (typeof client.v1.kms.issuers)[':issuerId']['sign']['token']['$post']
          >
        },
      ) => parseResponse(client.v1.kms.issuers[':issuerId'].sign.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1KmsIssuersKey(args: InferRequestType<typeof client.v1.kms.issuers.$get>) {
  return ['v1', '/v1/kms/issuers', args] as const
}

export function useGetV1KmsIssuers<TError = unknown>(
  args: InferRequestType<typeof client.v1.kms.issuers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.kms.issuers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1KmsIssuersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.kms.issuers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.kms.issuers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1KmsIssuers<TError = unknown>(
  args: InferRequestType<typeof client.v1.kms.issuers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.kms.issuers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1KmsIssuersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.kms.issuers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.kms.issuers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1KmsIssuersKey() {
  return ['v1', '/v1/kms/issuers', 'POST'] as const
}

export function usePostV1KmsIssuers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.kms.issuers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.kms.issuers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1KmsIssuersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.kms.issuers.$post> }) =>
        parseResponse(client.v1.kms.issuers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1KmsIssuersIssuerIdKeysKey() {
  return ['v1', '/v1/kms/issuers/:issuerId/keys', 'POST'] as const
}

export function usePostV1KmsIssuersIssuerIdKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.kms.issuers)[':issuerId']['keys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1KmsIssuersIssuerIdKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['keys']['$post']> },
      ) => parseResponse(client.v1.kms.issuers[':issuerId'].keys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1KmsIssuersIssuerIdKeysKeyIdActivateKey() {
  return ['v1', '/v1/kms/issuers/:issuerId/keys/:keyId/activate', 'POST'] as const
}

export function usePostV1KmsIssuersIssuerIdKeysKeyIdActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.kms.issuers)[':issuerId']['keys'][':keyId']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.kms.issuers)[':issuerId']['keys'][':keyId']['activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1KmsIssuersIssuerIdKeysKeyIdActivateKey()
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
            (typeof client.v1.kms.issuers)[':issuerId']['keys'][':keyId']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.kms.issuers[':issuerId'].keys[':keyId'].activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1KmsIssuersIssuerIdKeysKeyIdRevokeKey() {
  return ['v1', '/v1/kms/issuers/:issuerId/keys/:keyId/revoke', 'POST'] as const
}

export function usePostV1KmsIssuersIssuerIdKeysKeyIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.kms.issuers)[':issuerId']['keys'][':keyId']['revoke']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.kms.issuers)[':issuerId']['keys'][':keyId']['revoke']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1KmsIssuersIssuerIdKeysKeyIdRevokeKey()
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
            (typeof client.v1.kms.issuers)[':issuerId']['keys'][':keyId']['revoke']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.kms.issuers[':issuerId'].keys[':keyId'].revoke.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1KmsIssuersIssuerIdKey(
  args: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['$get']>,
) {
  return ['v1', '/v1/kms/issuers/:issuerId', args] as const
}

export function useGetV1KmsIssuersIssuerId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.kms.issuers)[':issuerId']['$get']>>
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
        ? getGetV1KmsIssuersIssuerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.kms.issuers)[':issuerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.kms.issuers[':issuerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1KmsIssuersIssuerId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.kms.issuers)[':issuerId']['$get']>>
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
        ? getGetV1KmsIssuersIssuerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.kms.issuers)[':issuerId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.kms.issuers[':issuerId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1KmsIssuersIssuerIdKey() {
  return ['v1', '/v1/kms/issuers/:issuerId', 'DELETE'] as const
}

export function useDeleteV1KmsIssuersIssuerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.kms.issuers)[':issuerId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1KmsIssuersIssuerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['$delete']> },
      ) => parseResponse(client.v1.kms.issuers[':issuerId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1KmsIssuersIssuerIdKey() {
  return ['v1', '/v1/kms/issuers/:issuerId', 'PATCH'] as const
}

export function usePatchV1KmsIssuersIssuerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.kms.issuers)[':issuerId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1KmsIssuersIssuerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['$patch']> },
      ) => parseResponse(client.v1.kms.issuers[':issuerId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1KmsIssuersIssuerIdPoliciesKey() {
  return ['v1', '/v1/kms/issuers/:issuerId/policies', 'POST'] as const
}

export function usePostV1KmsIssuersIssuerIdPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.kms.issuers)[':issuerId']['policies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['policies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1KmsIssuersIssuerIdPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.kms.issuers)[':issuerId']['policies']['$post']>
        },
      ) => parseResponse(client.v1.kms.issuers[':issuerId'].policies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1KmsIssuersIssuerIdPoliciesKindPolicyKeyKey() {
  return ['v1', '/v1/kms/issuers/:issuerId/policies/:kind/:policyKey', 'DELETE'] as const
}

export function useDeleteV1KmsIssuersIssuerIdPoliciesKindPolicyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.kms.issuers)[':issuerId']['policies'][':kind'][':policyKey']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.kms.issuers)[':issuerId']['policies'][':kind'][':policyKey']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1KmsIssuersIssuerIdPoliciesKindPolicyKeyKey()
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
            (typeof client.v1.kms.issuers)[':issuerId']['policies'][':kind'][':policyKey']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.kms.issuers[':issuerId'].policies[':kind'][':policyKey'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1KmsIssuersIssuerIdPoliciesKindPolicyKeyKey() {
  return ['v1', '/v1/kms/issuers/:issuerId/policies/:kind/:policyKey', 'PATCH'] as const
}

export function usePatchV1KmsIssuersIssuerIdPoliciesKindPolicyKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.kms.issuers)[':issuerId']['policies'][':kind'][':policyKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.kms.issuers)[':issuerId']['policies'][':kind'][':policyKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1KmsIssuersIssuerIdPoliciesKindPolicyKeyKey()
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
            (typeof client.v1.kms.issuers)[':issuerId']['policies'][':kind'][':policyKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.kms.issuers[':issuerId'].policies[':kind'][':policyKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdDeploymentsDeploymentIdRuntimeLogsKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['deployments'][':deploymentId']['runtime-logs']['$get']
  >,
) {
  return ['v1', '/v1/projects/:projectId/deployments/:deploymentId/runtime-logs', args] as const
}

export function useGetV1ProjectsProjectIdDeploymentsDeploymentIdRuntimeLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['deployments'][':deploymentId']['runtime-logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectId']['deployments'][':deploymentId']['runtime-logs']['$get']
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
        ? getGetV1ProjectsProjectIdDeploymentsDeploymentIdRuntimeLogsKey(args)
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
                (typeof client.v1.projects)[':projectId']['deployments'][':deploymentId']['runtime-logs']['$get']
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
          client.v1.projects[':projectId'].deployments[':deploymentId']['runtime-logs'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdDeploymentsDeploymentIdRuntimeLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.projects)[':projectId']['deployments'][':deploymentId']['runtime-logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':projectId']['deployments'][':deploymentId']['runtime-logs']['$get']
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
        ? getGetV1ProjectsProjectIdDeploymentsDeploymentIdRuntimeLogsKey(args)
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
                (typeof client.v1.projects)[':projectId']['deployments'][':deploymentId']['runtime-logs']['$get']
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
          client.v1.projects[':projectId'].deployments[':deploymentId']['runtime-logs'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsKey() {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/resources/:resourceId/experimentation/items',
    'POST',
  ] as const
}

export function usePostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItems<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['items']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['items']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].resources[
            ':resourceId'
          ].experimentation.items.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdKey() {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/resources/:resourceId/experimentation/items/:itemId',
    'DELETE',
  ] as const
}

export function useDeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['items'][':itemId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['items'][':itemId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['items'][':itemId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].resources[
            ':resourceId'
          ].experimentation.items[':itemId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdKey() {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/resources/:resourceId/experimentation/items/:itemId',
    'PATCH',
  ] as const
}

export function usePatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['items'][':itemId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['items'][':itemId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['items'][':itemId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].resources[
            ':resourceId'
          ].experimentation.items[':itemId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigKey(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$get']
  >,
) {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/resources/:resourceId/experimentation/global-config',
    args,
  ] as const
}

export function useGetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$get']
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
        ? getGetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigKey(
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
                (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$get']
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
          client.v1.installations[':integrationConfigurationId'].resources[
            ':resourceId'
          ].experimentation['global-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$get']
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
        ? getGetV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigKey(
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
                (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$get']
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
          client.v1.installations[':integrationConfigurationId'].resources[
            ':resourceId'
          ].experimentation['global-config'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigKey() {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/resources/:resourceId/experimentation/global-config',
    'PUT',
  ] as const
}

export function usePutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].resources[
            ':resourceId'
          ].experimentation['global-config'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getHeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigKey() {
  return [
    'v1',
    '/v1/installations/:integrationConfigurationId/resources/:resourceId/experimentation/global-config',
    'HEAD',
  ] as const
}

export function useHeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$head']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getHeadV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigKey()
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
            (typeof client.v1.installations)[':integrationConfigurationId']['resources'][':resourceId']['experimentation']['global-config']['$head']
          >
        },
      ) =>
        parseResponse(
          client.v1.installations[':integrationConfigurationId'].resources[
            ':resourceId'
          ].experimentation['global-config'].$head(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1MicrofrontendsGroupsKey(
  args: InferRequestType<typeof client.v1.microfrontends.groups.$get>,
) {
  return ['v1', '/v1/microfrontends/groups', args] as const
}

export function useGetV1MicrofrontendsGroups<TError = unknown>(
  args: InferRequestType<typeof client.v1.microfrontends.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.microfrontends.groups.$get>>>
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
        ? getGetV1MicrofrontendsGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.microfrontends.groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.microfrontends.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MicrofrontendsGroups<TError = unknown>(
  args: InferRequestType<typeof client.v1.microfrontends.groups.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.microfrontends.groups.$get>>>
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
        ? getGetV1MicrofrontendsGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.microfrontends.groups.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.microfrontends.groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1MicrofrontendsGroupsGroupIdProjectsKey(
  args: InferRequestType<(typeof client.v1.microfrontends.groups)[':groupId']['projects']['$get']>,
) {
  return ['v1', '/v1/microfrontends/groups/:groupId/projects', args] as const
}

export function useGetV1MicrofrontendsGroupsGroupIdProjects<TError = unknown>(
  args: InferRequestType<(typeof client.v1.microfrontends.groups)[':groupId']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.microfrontends.groups)[':groupId']['projects']['$get']>
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
        ? getGetV1MicrofrontendsGroupsGroupIdProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.microfrontends.groups)[':groupId']['projects']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.microfrontends.groups[':groupId'].projects.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MicrofrontendsGroupsGroupIdProjects<TError = unknown>(
  args: InferRequestType<(typeof client.v1.microfrontends.groups)[':groupId']['projects']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.microfrontends.groups)[':groupId']['projects']['$get']>
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
        ? getGetV1MicrofrontendsGroupsGroupIdProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.microfrontends.groups)[':groupId']['projects']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.microfrontends.groups[':groupId'].projects.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1MicrofrontendsDeploymentIdConfigKey(
  args: InferRequestType<(typeof client.v1.microfrontends)[':deploymentId']['config']['$get']>,
) {
  return ['v1', '/v1/microfrontends/:deploymentId/config', args] as const
}

export function useGetV1MicrofrontendsDeploymentIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client.v1.microfrontends)[':deploymentId']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.microfrontends)[':deploymentId']['config']['$get']>
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
        ? getGetV1MicrofrontendsDeploymentIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.microfrontends)[':deploymentId']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.microfrontends[':deploymentId'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MicrofrontendsDeploymentIdConfig<TError = unknown>(
  args: InferRequestType<(typeof client.v1.microfrontends)[':deploymentId']['config']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.microfrontends)[':deploymentId']['config']['$get']>
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
        ? getGetV1MicrofrontendsDeploymentIdConfigKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.microfrontends)[':deploymentId']['config']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.microfrontends[':deploymentId'].config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1MicrofrontendsProjectsProjectIdOrNameProductionMfeConfigKey(
  args: InferRequestType<
    (typeof client.v1.microfrontends.projects)[':projectIdOrName']['production-mfe-config']['$get']
  >,
) {
  return ['v1', '/v1/microfrontends/projects/:projectIdOrName/production-mfe-config', args] as const
}

export function useGetV1MicrofrontendsProjectsProjectIdOrNameProductionMfeConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.microfrontends.projects)[':projectIdOrName']['production-mfe-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.microfrontends.projects)[':projectIdOrName']['production-mfe-config']['$get']
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
        ? getGetV1MicrofrontendsProjectsProjectIdOrNameProductionMfeConfigKey(args)
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
                (typeof client.v1.microfrontends.projects)[':projectIdOrName']['production-mfe-config']['$get']
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
          client.v1.microfrontends.projects[':projectIdOrName']['production-mfe-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1MicrofrontendsProjectsProjectIdOrNameProductionMfeConfig<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1.microfrontends.projects)[':projectIdOrName']['production-mfe-config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.microfrontends.projects)[':projectIdOrName']['production-mfe-config']['$get']
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
        ? getGetV1MicrofrontendsProjectsProjectIdOrNameProductionMfeConfigKey(args)
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
                (typeof client.v1.microfrontends.projects)[':projectIdOrName']['production-mfe-config']['$get']
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
          client.v1.microfrontends.projects[':projectIdOrName']['production-mfe-config'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1MicrofrontendsGroupKey() {
  return ['v1', '/v1/microfrontends/group', 'POST'] as const
}

export function usePostV1MicrofrontendsGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.microfrontends.group.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.microfrontends.group.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1MicrofrontendsGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.microfrontends.group.$post> },
      ) => parseResponse(client.v1.microfrontends.group.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ObservabilityManageConfigurationProjectsKey(
  args: InferRequestType<typeof client.v1.observability.manage.configuration.projects.$get>,
) {
  return ['v1', '/v1/observability/manage/configuration/projects', args] as const
}

export function useGetV1ObservabilityManageConfigurationProjects<TError = unknown>(
  args: InferRequestType<typeof client.v1.observability.manage.configuration.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.manage.configuration.projects.$get>>
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
        ? getGetV1ObservabilityManageConfigurationProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.manage.configuration.projects.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.manage.configuration.projects.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ObservabilityManageConfigurationProjects<TError = unknown>(
  args: InferRequestType<typeof client.v1.observability.manage.configuration.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.manage.configuration.projects.$get>>
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
        ? getGetV1ObservabilityManageConfigurationProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.observability.manage.configuration.projects.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.observability.manage.configuration.projects.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ObservabilityManageConfigurationProjectsProjectIdOrNameKey() {
  return ['v1', '/v1/observability/manage/configuration/projects/:projectIdOrName', 'PUT'] as const
}

export function usePutV1ObservabilityManageConfigurationProjectsProjectIdOrName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.observability.manage.configuration.projects)[':projectIdOrName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.observability.manage.configuration.projects)[':projectIdOrName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ObservabilityManageConfigurationProjectsProjectIdOrNameKey()
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
            (typeof client.v1.observability.manage.configuration.projects)[':projectIdOrName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.observability.manage.configuration.projects[':projectIdOrName'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2ObservabilityQueryKey() {
  return ['v2', '/v2/observability/query', 'POST'] as const
}

export function usePostV2ObservabilityQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.observability.query.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.observability.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2ObservabilityQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.observability.query.$post> },
      ) => parseResponse(client.v2.observability.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2ObservabilitySchemaKey() {
  return ['v2', '/v2/observability/schema'] as const
}

export function useGetV2ObservabilitySchema<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.observability.schema.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ObservabilitySchemaKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.observability.schema.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.observability.schema.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ObservabilitySchema<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.observability.schema.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2ObservabilitySchemaKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.observability.schema.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.observability.schema.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2ObservabilitySchemaMetricIdKey(
  args: InferRequestType<(typeof client.v2.observability.schema)[':metricId']['$get']>,
) {
  return ['v2', '/v2/observability/schema/:metricId', args] as const
}

export function useGetV2ObservabilitySchemaMetricId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.observability.schema)[':metricId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.observability.schema)[':metricId']['$get']>>
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
        ? getGetV2ObservabilitySchemaMetricIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.observability.schema)[':metricId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.observability.schema[':metricId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2ObservabilitySchemaMetricId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.observability.schema)[':metricId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.observability.schema)[':metricId']['$get']>>
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
        ? getGetV2ObservabilitySchemaMetricIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.observability.schema)[':metricId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.observability.schema[':metricId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsKey() {
  return ['v1', '/v1/organizations'] as const
}

export function useGetV1Organizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrganizationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Organizations<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1OrganizationsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.organizations.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsKey() {
  return ['v1', '/v1/organizations', 'POST'] as const
}

export function usePostV1Organizations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.organizations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.organizations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.organizations.$post> }) =>
        parseResponse(client.v1.organizations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId', args] as const
}

export function useGetV1OrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
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
        ? getGetV1OrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
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
        ? getGetV1OrganizationsOrganizationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1OrganizationsOrganizationIdKey() {
  return ['v1', '/v1/organizations/:organizationId', 'PATCH'] as const
}

export function usePatchV1OrganizationsOrganizationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1OrganizationsOrganizationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.organizations)[':organizationId']['$patch']> },
      ) => parseResponse(client.v1.organizations[':organizationId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdTeamsKey(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['teams']['$get']>,
) {
  return ['v1', '/v1/organizations/:organizationId/teams', args] as const
}

export function useGetV1OrganizationsOrganizationIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['teams']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['teams']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['teams']['$get']>
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
        ? getGetV1OrganizationsOrganizationIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.organizations)[':organizationId']['teams']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.organizations[':organizationId'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1OrganizationsOrganizationIdTeamsKey() {
  return ['v1', '/v1/organizations/:organizationId/teams', 'POST'] as const
}

export function usePostV1OrganizationsOrganizationIdTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.organizations)[':organizationId']['teams']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.organizations)[':organizationId']['teams']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1OrganizationsOrganizationIdTeamsKey()
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
            (typeof client.v1.organizations)[':organizationId']['teams']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.organizations[':organizationId'].teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdTeamsTargetTeamIdKey() {
  return ['v1', '/v1/organizations/:organizationId/teams/:targetTeamId', 'DELETE'] as const
}

export function useDeleteV1OrganizationsOrganizationIdTeamsTargetTeamId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['teams'][':targetTeamId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['teams'][':targetTeamId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1OrganizationsOrganizationIdTeamsTargetTeamIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['teams'][':targetTeamId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].teams[':targetTeamId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdTeamsTargetTeamIdDsyncKey() {
  return ['v1', '/v1/organizations/:organizationId/teams/:targetTeamId/dsync', 'PUT'] as const
}

export function usePutV1OrganizationsOrganizationIdTeamsTargetTeamIdDsync<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['teams'][':targetTeamId']['dsync']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['teams'][':targetTeamId']['dsync']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1OrganizationsOrganizationIdTeamsTargetTeamIdDsyncKey()
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
            (typeof client.v1.organizations)[':organizationId']['teams'][':targetTeamId']['dsync']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].teams[':targetTeamId'].dsync.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdDsyncGroupsKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['dsync']['groups']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/dsync/groups', args] as const
}

export function useGetV1OrganizationsOrganizationIdDsyncGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['dsync']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':organizationId']['dsync']['groups']['$get']
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
        ? getGetV1OrganizationsOrganizationIdDsyncGroupsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['dsync']['groups']['$get']
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
          client.v1.organizations[':organizationId'].dsync.groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdDsyncGroups<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['dsync']['groups']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':organizationId']['dsync']['groups']['$get']
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
        ? getGetV1OrganizationsOrganizationIdDsyncGroupsKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['dsync']['groups']['$get']
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
          client.v1.organizations[':organizationId'].dsync.groups.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1OrganizationsOrganizationIdDsyncGroupsGroupIdKey(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$get']
  >,
) {
  return ['v1', '/v1/organizations/:organizationId/dsync/groups/:groupId', args] as const
}

export function useGetV1OrganizationsOrganizationIdDsyncGroupsGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$get']
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
        ? getGetV1OrganizationsOrganizationIdDsyncGroupsGroupIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$get']
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
          client.v1.organizations[':organizationId'].dsync.groups[':groupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1OrganizationsOrganizationIdDsyncGroupsGroupId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$get']
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
        ? getGetV1OrganizationsOrganizationIdDsyncGroupsGroupIdKey(args)
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
                (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$get']
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
          client.v1.organizations[':organizationId'].dsync.groups[':groupId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1OrganizationsOrganizationIdDsyncGroupsGroupIdKey() {
  return ['v1', '/v1/organizations/:organizationId/dsync/groups/:groupId', 'PUT'] as const
}

export function usePutV1OrganizationsOrganizationIdDsyncGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1OrganizationsOrganizationIdDsyncGroupsGroupIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].dsync.groups[':groupId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1OrganizationsOrganizationIdDsyncGroupsGroupIdKey() {
  return ['v1', '/v1/organizations/:organizationId/dsync/groups/:groupId', 'DELETE'] as const
}

export function useDeleteV1OrganizationsOrganizationIdDsyncGroupsGroupId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1OrganizationsOrganizationIdDsyncGroupsGroupIdKey()
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
            (typeof client.v1.organizations)[':organizationId']['dsync']['groups'][':groupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.organizations[':organizationId'].dsync.groups[':groupId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsIdOrNameMembersKey(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['members']['$get']>,
) {
  return ['v1', '/v1/projects/:idOrName/members', args] as const
}

export function useGetV1ProjectsIdOrNameMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['members']['$get']>>
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
        ? getGetV1ProjectsIdOrNameMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':idOrName'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsIdOrNameMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['members']['$get']>>
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
        ? getGetV1ProjectsIdOrNameMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':idOrName'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsIdOrNameMembersKey() {
  return ['v1', '/v1/projects/:idOrName/members', 'POST'] as const
}

export function usePostV1ProjectsIdOrNameMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':idOrName']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsIdOrNameMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':idOrName']['members']['$post']> },
      ) => parseResponse(client.v1.projects[':idOrName'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsIdOrNameMembersUidKey() {
  return ['v1', '/v1/projects/:idOrName/members/:uid', 'DELETE'] as const
}

export function useDeleteV1ProjectsIdOrNameMembersUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':idOrName']['members'][':uid']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':idOrName']['members'][':uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsIdOrNameMembersUidKey()
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
            (typeof client.v1.projects)[':idOrName']['members'][':uid']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.projects[':idOrName'].members[':uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdRoutesKey(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$get']>,
) {
  return ['v1', '/v1/projects/:projectId/routes', args] as const
}

export function useGetV1ProjectsProjectIdRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['routes']['$get']>>
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
        ? getGetV1ProjectsProjectIdRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':projectId'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdRoutes<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['routes']['$get']>>
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
        ? getGetV1ProjectsProjectIdRoutesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['routes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects[':projectId'].routes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProjectsProjectIdRoutesKey() {
  return ['v1', '/v1/projects/:projectId/routes', 'PUT'] as const
}

export function usePutV1ProjectsProjectIdRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['routes']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProjectsProjectIdRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$put']> },
      ) => parseResponse(client.v1.projects[':projectId'].routes.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdRoutesKey() {
  return ['v1', '/v1/projects/:projectId/routes', 'POST'] as const
}

export function usePostV1ProjectsProjectIdRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['routes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$post']> },
      ) => parseResponse(client.v1.projects[':projectId'].routes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsProjectIdRoutesKey() {
  return ['v1', '/v1/projects/:projectId/routes', 'DELETE'] as const
}

export function useDeleteV1ProjectsProjectIdRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['routes']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsProjectIdRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['$delete']>
        },
      ) => parseResponse(client.v1.projects[':projectId'].routes.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectIdRoutesRouteIdKey() {
  return ['v1', '/v1/projects/:projectId/routes/:routeId', 'PATCH'] as const
}

export function usePatchV1ProjectsProjectIdRoutesRouteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':projectId']['routes'][':routeId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':projectId']['routes'][':routeId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsProjectIdRoutesRouteIdKey()
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
            (typeof client.v1.projects)[':projectId']['routes'][':routeId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectId'].routes[':routeId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdRoutesGenerateKey() {
  return ['v1', '/v1/projects/:projectId/routes/generate', 'POST'] as const
}

export function usePostV1ProjectsProjectIdRoutesGenerate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':projectId']['routes']['generate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['generate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdRoutesGenerateKey()
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
            (typeof client.v1.projects)[':projectId']['routes']['generate']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.projects[':projectId'].routes.generate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdRoutesVersionsKey(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['versions']['$get']>,
) {
  return ['v1', '/v1/projects/:projectId/routes/versions', args] as const
}

export function useGetV1ProjectsProjectIdRoutesVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':projectId']['routes']['versions']['$get']>
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
        ? getGetV1ProjectsProjectIdRoutesVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':projectId']['routes']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':projectId'].routes.versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdRoutesVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':projectId']['routes']['versions']['$get']>
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
        ? getGetV1ProjectsProjectIdRoutesVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':projectId']['routes']['versions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':projectId'].routes.versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdRoutesVersionsKey() {
  return ['v1', '/v1/projects/:projectId/routes/versions', 'POST'] as const
}

export function usePostV1ProjectsProjectIdRoutesVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':projectId']['routes']['versions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':projectId']['routes']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdRoutesVersionsKey()
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
            (typeof client.v1.projects)[':projectId']['routes']['versions']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.projects[':projectId'].routes.versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV10ProjectsKey(args: InferRequestType<typeof client.v10.projects.$get>) {
  return ['v10', '/v10/projects', args] as const
}

export function useGetV10Projects<TError = unknown>(
  args: InferRequestType<typeof client.v10.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v10.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV10ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v10.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v10.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV10Projects<TError = unknown>(
  args: InferRequestType<typeof client.v10.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v10.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV10ProjectsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v10.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v10.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsTracesKey(
  args: InferRequestType<typeof client.v1.projects.traces.$get>,
) {
  return ['v1', '/v1/projects/traces', args] as const
}

export function useGetV1ProjectsTraces<TError = unknown>(
  args: InferRequestType<typeof client.v1.projects.traces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.traces.$get>>>>
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
        ? getGetV1ProjectsTracesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.traces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects.traces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsTraces<TError = unknown>(
  args: InferRequestType<typeof client.v1.projects.traces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.traces.$get>>>>
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
        ? getGetV1ProjectsTracesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.traces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.projects.traces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV11ProjectsKey() {
  return ['v11', '/v11/projects', 'POST'] as const
}

export function usePostV11Projects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v11.projects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v11.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV11ProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v11.projects.$post> }) =>
        parseResponse(client.v11.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsIdOrNameTokenKey() {
  return ['v1', '/v1/projects/:idOrName/token', 'POST'] as const
}

export function usePostV1ProjectsIdOrNameToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':idOrName']['token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsIdOrNameTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':idOrName']['token']['$post']> },
      ) => parseResponse(client.v1.projects[':idOrName'].token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsTracesSessionKey() {
  return ['v1', '/v1/projects/traces/session', 'POST'] as const
}

export function usePostV1ProjectsTracesSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.projects.traces.session.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.projects.traces.session.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsTracesSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.projects.traces.session.$post> },
      ) => parseResponse(client.v1.projects.traces.session.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV9ProjectsIdOrNameKey(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>,
) {
  return ['v9', '/v9/projects/:idOrName', args] as const
}

export function useGetV9ProjectsIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>
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
        ? getGetV9ProjectsIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v9.projects[':idOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV9ProjectsIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>
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
        ? getGetV9ProjectsIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v9.projects[':idOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV9ProjectsIdOrNameKey() {
  return ['v9', '/v9/projects/:idOrName', 'DELETE'] as const
}

export function useDeleteV9ProjectsIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV9ProjectsIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v9.projects)[':idOrName']['$delete']> },
      ) => parseResponse(client.v9.projects[':idOrName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV9ProjectsIdOrNameKey() {
  return ['v9', '/v9/projects/:idOrName', 'PATCH'] as const
}

export function usePatchV9ProjectsIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV9ProjectsIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v9.projects)[':idOrName']['$patch']> },
      ) => parseResponse(client.v9.projects[':idOrName'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsIdOrNameAvatarKey() {
  return ['v1', '/v1/projects/:idOrName/avatar', 'POST'] as const
}

export function usePostV1ProjectsIdOrNameAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['avatar']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':idOrName']['avatar']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsIdOrNameAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':idOrName']['avatar']['$post']> },
      ) => parseResponse(client.v1.projects[':idOrName'].avatar.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsIdOrNameAvatarKey() {
  return ['v1', '/v1/projects/:idOrName/avatar', 'DELETE'] as const
}

export function useDeleteV1ProjectsIdOrNameAvatar<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['avatar']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':idOrName']['avatar']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsIdOrNameAvatarKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':idOrName']['avatar']['$delete']> },
      ) => parseResponse(client.v1.projects[':idOrName'].avatar.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsIdOrNameSharedConnectLinksKey() {
  return ['v1', '/v1/projects/:idOrName/shared-connect-links', 'PATCH'] as const
}

export function usePatchV1ProjectsIdOrNameSharedConnectLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':idOrName']['shared-connect-links']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':idOrName']['shared-connect-links']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsIdOrNameSharedConnectLinksKey()
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
            (typeof client.v1.projects)[':idOrName']['shared-connect-links']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':idOrName']['shared-connect-links'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV9ProjectsIdOrNameCustomEnvironmentsKey(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['custom-environments']['$get']>,
) {
  return ['v9', '/v9/projects/:idOrName/custom-environments', args] as const
}

export function useGetV9ProjectsIdOrNameCustomEnvironments<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['custom-environments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v9.projects)[':idOrName']['custom-environments']['$get']>
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
        ? getGetV9ProjectsIdOrNameCustomEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v9.projects)[':idOrName']['custom-environments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v9.projects[':idOrName']['custom-environments'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV9ProjectsIdOrNameCustomEnvironments<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['custom-environments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v9.projects)[':idOrName']['custom-environments']['$get']>
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
        ? getGetV9ProjectsIdOrNameCustomEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v9.projects)[':idOrName']['custom-environments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v9.projects[':idOrName']['custom-environments'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV9ProjectsIdOrNameCustomEnvironmentsKey() {
  return ['v9', '/v9/projects/:idOrName/custom-environments', 'POST'] as const
}

export function usePostV9ProjectsIdOrNameCustomEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v9.projects)[':idOrName']['custom-environments']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['custom-environments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV9ProjectsIdOrNameCustomEnvironmentsKey()
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
            (typeof client.v9.projects)[':idOrName']['custom-environments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v9.projects[':idOrName']['custom-environments'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdKey(
  args: InferRequestType<
    (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$get']
  >,
) {
  return ['v9', '/v9/projects/:idOrName/custom-environments/:environmentSlugOrId', args] as const
}

export function useGetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$get']
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
        ? getGetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdKey(args)
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
                (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$get']
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
          client.v9.projects[':idOrName']['custom-environments'][':environmentSlugOrId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$get']
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
        ? getGetV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdKey(args)
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
                (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$get']
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
          client.v9.projects[':idOrName']['custom-environments'][':environmentSlugOrId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdKey() {
  return [
    'v9',
    '/v9/projects/:idOrName/custom-environments/:environmentSlugOrId',
    'DELETE',
  ] as const
}

export function useDeleteV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdKey()
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
            (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v9.projects[':idOrName']['custom-environments'][':environmentSlugOrId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdKey() {
  return ['v9', '/v9/projects/:idOrName/custom-environments/:environmentSlugOrId', 'PATCH'] as const
}

export function usePatchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV9ProjectsIdOrNameCustomEnvironmentsEnvironmentSlugOrIdKey()
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
            (typeof client.v9.projects)[':idOrName']['custom-environments'][':environmentSlugOrId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v9.projects[':idOrName']['custom-environments'][':environmentSlugOrId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV9ProjectsIdOrNameDomainsKey(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>,
) {
  return ['v9', '/v9/projects/:idOrName/domains', args] as const
}

export function useGetV9ProjectsIdOrNameDomains<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
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
        ? getGetV9ProjectsIdOrNameDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v9.projects[':idOrName'].domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV9ProjectsIdOrNameDomains<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
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
        ? getGetV9ProjectsIdOrNameDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['domains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v9.projects[':idOrName'].domains.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV9ProjectsIdOrNameDomainsDomainKey(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>,
) {
  return ['v9', '/v9/projects/:idOrName/domains/:domain', args] as const
}

export function useGetV9ProjectsIdOrNameDomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
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
        ? getGetV9ProjectsIdOrNameDomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v9.projects[':idOrName'].domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV9ProjectsIdOrNameDomainsDomain<TError = unknown>(
  args: InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
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
        ? getGetV9ProjectsIdOrNameDomainsDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v9.projects[':idOrName'].domains[':domain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV9ProjectsIdOrNameDomainsDomainKey() {
  return ['v9', '/v9/projects/:idOrName/domains/:domain', 'DELETE'] as const
}

export function useDeleteV9ProjectsIdOrNameDomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV9ProjectsIdOrNameDomainsDomainKey()
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
            (typeof client.v9.projects)[':idOrName']['domains'][':domain']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v9.projects[':idOrName'].domains[':domain'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV9ProjectsIdOrNameDomainsDomainKey() {
  return ['v9', '/v9/projects/:idOrName/domains/:domain', 'PATCH'] as const
}

export function usePatchV9ProjectsIdOrNameDomainsDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV9ProjectsIdOrNameDomainsDomainKey()
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
            (typeof client.v9.projects)[':idOrName']['domains'][':domain']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v9.projects[':idOrName'].domains[':domain'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV10ProjectsIdOrNameDomainsKey() {
  return ['v10', '/v10/projects/:idOrName/domains', 'POST'] as const
}

export function usePostV10ProjectsIdOrNameDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v10.projects)[':idOrName']['domains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v10.projects)[':idOrName']['domains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV10ProjectsIdOrNameDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v10.projects)[':idOrName']['domains']['$post']> },
      ) => parseResponse(client.v10.projects[':idOrName'].domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsIdOrNameDomainsDomainMoveKey() {
  return ['v1', '/v1/projects/:idOrName/domains/:domain/move', 'POST'] as const
}

export function usePostV1ProjectsIdOrNameDomainsDomainMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':idOrName']['domains'][':domain']['move']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':idOrName']['domains'][':domain']['move']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsIdOrNameDomainsDomainMoveKey()
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
            (typeof client.v1.projects)[':idOrName']['domains'][':domain']['move']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':idOrName'].domains[':domain'].move.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV9ProjectsIdOrNameDomainsDomainVerifyKey() {
  return ['v9', '/v9/projects/:idOrName/domains/:domain/verify', 'POST'] as const
}

export function usePostV9ProjectsIdOrNameDomainsDomainVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v9.projects)[':idOrName']['domains'][':domain']['verify']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v9.projects)[':idOrName']['domains'][':domain']['verify']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV9ProjectsIdOrNameDomainsDomainVerifyKey()
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
            (typeof client.v9.projects)[':idOrName']['domains'][':domain']['verify']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v9.projects[':idOrName'].domains[':domain'].verify.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV10ProjectsIdOrNameEnvKey(
  args: InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$get']>,
) {
  return ['v10', '/v10/projects/:idOrName/env', args] as const
}

export function useGetV10ProjectsIdOrNameEnv<TError = unknown>(
  args: InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v10.projects)[':idOrName']['env']['$get']>>
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
        ? getGetV10ProjectsIdOrNameEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v10.projects)[':idOrName']['env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v10.projects[':idOrName'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV10ProjectsIdOrNameEnv<TError = unknown>(
  args: InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v10.projects)[':idOrName']['env']['$get']>>
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
        ? getGetV10ProjectsIdOrNameEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v10.projects)[':idOrName']['env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v10.projects[':idOrName'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV10ProjectsIdOrNameEnvKey() {
  return ['v10', '/v10/projects/:idOrName/env', 'POST'] as const
}

export function usePostV10ProjectsIdOrNameEnv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v10.projects)[':idOrName']['env']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV10ProjectsIdOrNameEnvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v10.projects)[':idOrName']['env']['$post']> },
      ) => parseResponse(client.v10.projects[':idOrName'].env.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsIdOrNameEnvIdKey(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>,
) {
  return ['v1', '/v1/projects/:idOrName/env/:id', args] as const
}

export function useGetV1ProjectsIdOrNameEnvId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
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
        ? getGetV1ProjectsIdOrNameEnvIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':idOrName'].env[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsIdOrNameEnvId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
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
        ? getGetV1ProjectsIdOrNameEnvIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':idOrName'].env[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV9ProjectsIdOrNameEnvIdKey() {
  return ['v9', '/v9/projects/:idOrName/env/:id', 'DELETE'] as const
}

export function useDeleteV9ProjectsIdOrNameEnvId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV9ProjectsIdOrNameEnvIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$delete']>
        },
      ) => parseResponse(client.v9.projects[':idOrName'].env[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV9ProjectsIdOrNameEnvIdKey() {
  return ['v9', '/v9/projects/:idOrName/env/:id', 'PATCH'] as const
}

export function usePatchV9ProjectsIdOrNameEnvId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV9ProjectsIdOrNameEnvIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v9.projects)[':idOrName']['env'][':id']['$patch']>
        },
      ) => parseResponse(client.v9.projects[':idOrName'].env[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProjectsIdOrNameEnvKey() {
  return ['v1', '/v1/projects/:idOrName/env', 'DELETE'] as const
}

export function useDeleteV1ProjectsIdOrNameEnv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['env']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':idOrName']['env']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsIdOrNameEnvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':idOrName']['env']['$delete']> },
      ) => parseResponse(client.v1.projects[':idOrName'].env.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsIdOrNameRollingReleaseBillingKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['billing']['$get']
  >,
) {
  return ['v1', '/v1/projects/:idOrName/rolling-release/billing', args] as const
}

export function useGetV1ProjectsIdOrNameRollingReleaseBilling<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['billing']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':idOrName']['rolling-release']['billing']['$get']
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
        ? getGetV1ProjectsIdOrNameRollingReleaseBillingKey(args)
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
                (typeof client.v1.projects)[':idOrName']['rolling-release']['billing']['$get']
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
          client.v1.projects[':idOrName']['rolling-release'].billing.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsIdOrNameRollingReleaseBilling<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['billing']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':idOrName']['rolling-release']['billing']['$get']
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
        ? getGetV1ProjectsIdOrNameRollingReleaseBillingKey(args)
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
                (typeof client.v1.projects)[':idOrName']['rolling-release']['billing']['$get']
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
          client.v1.projects[':idOrName']['rolling-release'].billing.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProjectsIdOrNameRollingReleaseConfigKey(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$get']
  >,
) {
  return ['v1', '/v1/projects/:idOrName/rolling-release/config', args] as const
}

export function useGetV1ProjectsIdOrNameRollingReleaseConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$get']
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
        ? getGetV1ProjectsIdOrNameRollingReleaseConfigKey(args)
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
                (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$get']
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
          client.v1.projects[':idOrName']['rolling-release'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsIdOrNameRollingReleaseConfig<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$get']
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
        ? getGetV1ProjectsIdOrNameRollingReleaseConfigKey(args)
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
                (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$get']
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
          client.v1.projects[':idOrName']['rolling-release'].config.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1ProjectsIdOrNameRollingReleaseConfigKey() {
  return ['v1', '/v1/projects/:idOrName/rolling-release/config', 'DELETE'] as const
}

export function useDeleteV1ProjectsIdOrNameRollingReleaseConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProjectsIdOrNameRollingReleaseConfigKey()
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
            (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':idOrName']['rolling-release'].config.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsIdOrNameRollingReleaseConfigKey() {
  return ['v1', '/v1/projects/:idOrName/rolling-release/config', 'PATCH'] as const
}

export function usePatchV1ProjectsIdOrNameRollingReleaseConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsIdOrNameRollingReleaseConfigKey()
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
            (typeof client.v1.projects)[':idOrName']['rolling-release']['config']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':idOrName']['rolling-release'].config.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsIdOrNameRollingReleaseKey(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['rolling-release']['$get']>,
) {
  return ['v1', '/v1/projects/:idOrName/rolling-release', args] as const
}

export function useGetV1ProjectsIdOrNameRollingRelease<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['rolling-release']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['rolling-release']['$get']>>
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
        ? getGetV1ProjectsIdOrNameRollingReleaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['rolling-release']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':idOrName']['rolling-release'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsIdOrNameRollingRelease<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':idOrName']['rolling-release']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['rolling-release']['$get']>>
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
        ? getGetV1ProjectsIdOrNameRollingReleaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.projects)[':idOrName']['rolling-release']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':idOrName']['rolling-release'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsIdOrNameRollingReleaseApproveStageKey() {
  return ['v1', '/v1/projects/:idOrName/rolling-release/approve-stage', 'POST'] as const
}

export function usePostV1ProjectsIdOrNameRollingReleaseApproveStage<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':idOrName']['rolling-release']['approve-stage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':idOrName']['rolling-release']['approve-stage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsIdOrNameRollingReleaseApproveStageKey()
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
            (typeof client.v1.projects)[':idOrName']['rolling-release']['approve-stage']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':idOrName']['rolling-release']['approve-stage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsIdOrNameRollingReleaseStartKey() {
  return ['v1', '/v1/projects/:idOrName/rolling-release/start', 'POST'] as const
}

export function usePostV1ProjectsIdOrNameRollingReleaseStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':idOrName']['rolling-release']['start']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':idOrName']['rolling-release']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsIdOrNameRollingReleaseStartKey()
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
            (typeof client.v1.projects)[':idOrName']['rolling-release']['start']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':idOrName']['rolling-release'].start.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsIdOrNameRollingReleaseCompleteKey() {
  return ['v1', '/v1/projects/:idOrName/rolling-release/complete', 'POST'] as const
}

export function usePostV1ProjectsIdOrNameRollingReleaseComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':idOrName']['rolling-release']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':idOrName']['rolling-release']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsIdOrNameRollingReleaseCompleteKey()
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
            (typeof client.v1.projects)[':idOrName']['rolling-release']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':idOrName']['rolling-release'].complete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostProjectsIdOrNameTransferRequestKey() {
  return ['projects', '/projects/:idOrName/transfer-request', 'POST'] as const
}

export function usePostProjectsIdOrNameTransferRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)[':idOrName']['transfer-request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)[':idOrName']['transfer-request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostProjectsIdOrNameTransferRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.projects)[':idOrName']['transfer-request']['$post']>
        },
      ) =>
        parseResponse(client.projects[':idOrName']['transfer-request'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutProjectsTransferRequestCodeKey() {
  return ['projects', '/projects/transfer-request/:code', 'PUT'] as const
}

export function usePutProjectsTransferRequestCode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.projects)['transfer-request'][':code']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.projects)['transfer-request'][':code']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutProjectsTransferRequestCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.projects)['transfer-request'][':code']['$put']> },
      ) => parseResponse(client.projects['transfer-request'][':code'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsIdOrNameProtectionBypassKey() {
  return ['v1', '/v1/projects/:idOrName/protection-bypass', 'PATCH'] as const
}

export function usePatchV1ProjectsIdOrNameProtectionBypass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.projects)[':idOrName']['protection-bypass']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':idOrName']['protection-bypass']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsIdOrNameProtectionBypassKey()
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
            (typeof client.v1.projects)[':idOrName']['protection-bypass']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':idOrName']['protection-bypass'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdRollbackDeploymentIdKey() {
  return ['v1', '/v1/projects/:projectId/rollback/:deploymentId', 'POST'] as const
}

export function usePostV1ProjectsProjectIdRollbackDeploymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectId']['rollback'][':deploymentId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectId']['rollback'][':deploymentId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdRollbackDeploymentIdKey()
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
            (typeof client.v1.projects)[':projectId']['rollback'][':deploymentId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectId'].rollback[':deploymentId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionKey() {
  return [
    'v1',
    '/v1/projects/:projectId/rollback/:deploymentId/update-description',
    'PATCH',
  ] as const
}

export function usePatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescription<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.projects)[':projectId']['rollback'][':deploymentId']['update-description']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.projects)[':projectId']['rollback'][':deploymentId']['update-description']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsProjectIdRollbackDeploymentIdUpdateDescriptionKey()
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
            (typeof client.v1.projects)[':projectId']['rollback'][':deploymentId']['update-description']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.projects[':projectId'].rollback[':deploymentId']['update-description'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1ProjectsProjectIdMicrofrontendsKey() {
  return ['v1', '/v1/projects/:projectId/microfrontends', 'PATCH'] as const
}

export function usePatchV1ProjectsProjectIdMicrofrontends<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['microfrontends']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':projectId']['microfrontends']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1ProjectsProjectIdMicrofrontendsKey()
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
            (typeof client.v1.projects)[':projectId']['microfrontends']['$patch']
          >
        },
      ) =>
        parseResponse(client.v1.projects[':projectId'].microfrontends.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV10ProjectsProjectIdPromoteDeploymentIdKey() {
  return ['v10', '/v10/projects/:projectId/promote/:deploymentId', 'POST'] as const
}

export function usePostV10ProjectsProjectIdPromoteDeploymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v10.projects)[':projectId']['promote'][':deploymentId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v10.projects)[':projectId']['promote'][':deploymentId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV10ProjectsProjectIdPromoteDeploymentIdKey()
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
            (typeof client.v10.projects)[':projectId']['promote'][':deploymentId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v10.projects[':projectId'].promote[':deploymentId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProjectsProjectIdPromoteAliasesKey(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['promote']['aliases']['$get']>,
) {
  return ['v1', '/v1/projects/:projectId/promote/aliases', args] as const
}

export function useGetV1ProjectsProjectIdPromoteAliases<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['promote']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':projectId']['promote']['aliases']['$get']>
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
        ? getGetV1ProjectsProjectIdPromoteAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':projectId']['promote']['aliases']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':projectId'].promote.aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProjectsProjectIdPromoteAliases<TError = unknown>(
  args: InferRequestType<(typeof client.v1.projects)[':projectId']['promote']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':projectId']['promote']['aliases']['$get']>
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
        ? getGetV1ProjectsProjectIdPromoteAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.projects)[':projectId']['promote']['aliases']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.projects[':projectId'].promote.aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdPauseKey() {
  return ['v1', '/v1/projects/:projectId/pause', 'POST'] as const
}

export function usePostV1ProjectsProjectIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['pause']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':projectId']['pause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':projectId']['pause']['$post']> },
      ) => parseResponse(client.v1.projects[':projectId'].pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1ProjectsProjectIdUnpauseKey() {
  return ['v1', '/v1/projects/:projectId/unpause', 'POST'] as const
}

export function usePostV1ProjectsProjectIdUnpause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.projects)[':projectId']['unpause']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.projects)[':projectId']['unpause']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProjectsProjectIdUnpauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.projects)[':projectId']['unpause']['$post']> },
      ) => parseResponse(client.v1.projects[':projectId'].unpause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SandboxesKey(args: InferRequestType<typeof client.v2.sandboxes.$get>) {
  return ['v2', '/v2/sandboxes', args] as const
}

export function useGetV2Sandboxes<TError = unknown>(
  args: InferRequestType<typeof client.v2.sandboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SandboxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Sandboxes<TError = unknown>(
  args: InferRequestType<typeof client.v2.sandboxes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2SandboxesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SandboxesKey() {
  return ['v2', '/v2/sandboxes', 'POST'] as const
}

export function usePostV2Sandboxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.sandboxes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.sandboxes.$post> }) =>
        parseResponse(client.v2.sandboxes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SandboxesDrivesKey(
  args: InferRequestType<typeof client.v2.sandboxes.drives.$get>,
) {
  return ['v2', '/v2/sandboxes/drives', args] as const
}

export function useGetV2SandboxesDrives<TError = unknown>(
  args: InferRequestType<typeof client.v2.sandboxes.drives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.drives.$get>>>
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
        ? getGetV2SandboxesDrivesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.drives.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes.drives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SandboxesDrives<TError = unknown>(
  args: InferRequestType<typeof client.v2.sandboxes.drives.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.drives.$get>>>
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
        ? getGetV2SandboxesDrivesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.drives.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes.drives.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SandboxesDrivesNameOrIdKey(
  args: InferRequestType<(typeof client.v2.sandboxes.drives)[':nameOrId']['$get']>,
) {
  return ['v2', '/v2/sandboxes/drives/:nameOrId', args] as const
}

export function useGetV2SandboxesDrivesNameOrId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sandboxes.drives)[':nameOrId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.drives)[':nameOrId']['$get']>>
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
        ? getGetV2SandboxesDrivesNameOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.drives)[':nameOrId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes.drives[':nameOrId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SandboxesDrivesNameOrId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sandboxes.drives)[':nameOrId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.drives)[':nameOrId']['$get']>>
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
        ? getGetV2SandboxesDrivesNameOrIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.drives)[':nameOrId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes.drives[':nameOrId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2SandboxesDrivesNameOrIdKey() {
  return ['v2', '/v2/sandboxes/drives/:nameOrId', 'DELETE'] as const
}

export function useDeleteV2SandboxesDrivesNameOrId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sandboxes.drives)[':nameOrId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes.drives)[':nameOrId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SandboxesDrivesNameOrIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.sandboxes.drives)[':nameOrId']['$delete']> },
      ) => parseResponse(client.v2.sandboxes.drives[':nameOrId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SandboxesDrivesNameKey() {
  return ['v2', '/v2/sandboxes/drives/:name', 'POST'] as const
}

export function usePostV2SandboxesDrivesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sandboxes.drives)[':name']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes.drives)[':name']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesDrivesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.sandboxes.drives)[':name']['$post']> },
      ) => parseResponse(client.v2.sandboxes.drives[':name'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SandboxesDrivesNameForkKey() {
  return ['v2', '/v2/sandboxes/drives/:name/fork', 'POST'] as const
}

export function usePostV2SandboxesDrivesNameFork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sandboxes.drives)[':name']['fork']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes.drives)[':name']['fork']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesDrivesNameForkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.sandboxes.drives)[':name']['fork']['$post']> },
      ) => parseResponse(client.v2.sandboxes.drives[':name'].fork.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SandboxesSnapshotsKey(
  args: InferRequestType<typeof client.v2.sandboxes.snapshots.$get>,
) {
  return ['v2', '/v2/sandboxes/snapshots', args] as const
}

export function useGetV2SandboxesSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.v2.sandboxes.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.snapshots.$get>>>
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
        ? getGetV2SandboxesSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SandboxesSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.v2.sandboxes.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.snapshots.$get>>>
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
        ? getGetV2SandboxesSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SandboxesSnapshotsSnapshotIdKey(
  args: InferRequestType<(typeof client.v2.sandboxes.snapshots)[':snapshotId']['$get']>,
) {
  return ['v2', '/v2/sandboxes/snapshots/:snapshotId', args] as const
}

export function useGetV2SandboxesSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sandboxes.snapshots)[':snapshotId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.snapshots)[':snapshotId']['$get']>>
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
        ? getGetV2SandboxesSnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.snapshots)[':snapshotId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.sandboxes.snapshots[':snapshotId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SandboxesSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sandboxes.snapshots)[':snapshotId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.snapshots)[':snapshotId']['$get']>>
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
        ? getGetV2SandboxesSnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.snapshots)[':snapshotId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.sandboxes.snapshots[':snapshotId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2SandboxesSnapshotsSnapshotIdKey() {
  return ['v2', '/v2/sandboxes/snapshots/:snapshotId', 'DELETE'] as const
}

export function useDeleteV2SandboxesSnapshotsSnapshotId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sandboxes.snapshots)[':snapshotId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes.snapshots)[':snapshotId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SandboxesSnapshotsSnapshotIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.sandboxes.snapshots)[':snapshotId']['$delete']>
        },
      ) => parseResponse(client.v2.sandboxes.snapshots[':snapshotId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SandboxesSessionsKey(
  args: InferRequestType<typeof client.v2.sandboxes.sessions.$get>,
) {
  return ['v2', '/v2/sandboxes/sessions', args] as const
}

export function useGetV2SandboxesSessions<TError = unknown>(
  args: InferRequestType<typeof client.v2.sandboxes.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.sessions.$get>>>
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
        ? getGetV2SandboxesSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.sessions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SandboxesSessions<TError = unknown>(
  args: InferRequestType<typeof client.v2.sandboxes.sessions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.sessions.$get>>>
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
        ? getGetV2SandboxesSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.sandboxes.sessions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes.sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SandboxesSessionsSessionIdKey(
  args: InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['$get']>,
) {
  return ['v2', '/v2/sandboxes/sessions/:sessionId', args] as const
}

export function useGetV2SandboxesSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['$get']>>
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
        ? getGetV2SandboxesSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.sandboxes.sessions[':sessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SandboxesSessionsSessionId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['$get']>>
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
        ? getGetV2SandboxesSessionsSessionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.sandboxes.sessions[':sessionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SandboxesNameKey(
  args: InferRequestType<(typeof client.v2.sandboxes)[':name']['$get']>,
) {
  return ['v2', '/v2/sandboxes/:name', args] as const
}

export function useGetV2SandboxesName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sandboxes)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sandboxes)[':name']['$get']>>>
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
        ? getGetV2SandboxesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sandboxes)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SandboxesName<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sandboxes)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sandboxes)[':name']['$get']>>>
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
        ? getGetV2SandboxesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sandboxes)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sandboxes[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2SandboxesNameKey() {
  return ['v2', '/v2/sandboxes/:name', 'DELETE'] as const
}

export function useDeleteV2SandboxesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sandboxes)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2SandboxesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.sandboxes)[':name']['$delete']> },
      ) => parseResponse(client.v2.sandboxes[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV2SandboxesNameKey() {
  return ['v2', '/v2/sandboxes/:name', 'PATCH'] as const
}

export function usePatchV2SandboxesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.sandboxes)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2SandboxesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.sandboxes)[':name']['$patch']> },
      ) => parseResponse(client.v2.sandboxes[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SandboxesSessionsSessionIdCmdKey(
  args: InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['cmd']['$get']>,
) {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/cmd', args] as const
}

export function useGetV2SandboxesSessionsSessionIdCmd<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['cmd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['cmd']['$get']>>
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
        ? getGetV2SandboxesSessionsSessionIdCmdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['cmd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.sandboxes.sessions[':sessionId'].cmd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SandboxesSessionsSessionIdCmd<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['cmd']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['cmd']['$get']>>
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
        ? getGetV2SandboxesSessionsSessionIdCmdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['cmd']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.sandboxes.sessions[':sessionId'].cmd.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SandboxesSessionsSessionIdCmdKey() {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/cmd', 'POST'] as const
}

export function usePostV2SandboxesSessionsSessionIdCmd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['cmd']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['cmd']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesSessionsSessionIdCmdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['cmd']['$post']>
        },
      ) => parseResponse(client.v2.sandboxes.sessions[':sessionId'].cmd.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2SandboxesSessionsSessionIdCmdCmdIdKey(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['$get']
  >,
) {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/cmd/:cmdId', args] as const
}

export function useGetV2SandboxesSessionsSessionIdCmdCmdId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['$get']
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
        ? getGetV2SandboxesSessionsSessionIdCmdCmdIdKey(args)
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
                (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['$get']
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
          client.v2.sandboxes.sessions[':sessionId'].cmd[':cmdId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SandboxesSessionsSessionIdCmdCmdId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['$get']
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
        ? getGetV2SandboxesSessionsSessionIdCmdCmdIdKey(args)
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
                (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['$get']
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
          client.v2.sandboxes.sessions[':sessionId'].cmd[':cmdId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2SandboxesSessionsSessionIdCmdCmdIdKillKey() {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/cmd/:cmdId/kill', 'POST'] as const
}

export function usePostV2SandboxesSessionsSessionIdCmdCmdIdKill<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['kill']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['kill']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesSessionsSessionIdCmdCmdIdKillKey()
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
            (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['kill']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.sandboxes.sessions[':sessionId'].cmd[':cmdId'].kill.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SandboxesSessionsSessionIdCmdCmdIdStdinKey() {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/cmd/:cmdId/stdin', 'POST'] as const
}

export function usePostV2SandboxesSessionsSessionIdCmdCmdIdStdin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['stdin']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['stdin']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesSessionsSessionIdCmdCmdIdStdinKey()
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
            (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['stdin']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.sandboxes.sessions[':sessionId'].cmd[':cmdId'].stdin.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2SandboxesSessionsSessionIdCmdCmdIdLogsKey(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['logs']['$get']
  >,
) {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/cmd/:cmdId/logs', args] as const
}

export function useGetV2SandboxesSessionsSessionIdCmdCmdIdLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['logs']['$get']
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
        ? getGetV2SandboxesSessionsSessionIdCmdCmdIdLogsKey(args)
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
                (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['logs']['$get']
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
          client.v2.sandboxes.sessions[':sessionId'].cmd[':cmdId'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SandboxesSessionsSessionIdCmdCmdIdLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['logs']['$get']
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
        ? getGetV2SandboxesSessionsSessionIdCmdCmdIdLogsKey(args)
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
                (typeof client.v2.sandboxes.sessions)[':sessionId']['cmd'][':cmdId']['logs']['$get']
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
          client.v2.sandboxes.sessions[':sessionId'].cmd[':cmdId'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV2SandboxesSessionsSessionIdStopKey() {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/stop', 'POST'] as const
}

export function usePostV2SandboxesSessionsSessionIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesSessionsSessionIdStopKey()
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
            (typeof client.v2.sandboxes.sessions)[':sessionId']['stop']['$post']
          >
        },
      ) => parseResponse(client.v2.sandboxes.sessions[':sessionId'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SandboxesSessionsSessionIdExtendTimeoutKey() {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/extend-timeout', 'POST'] as const
}

export function usePostV2SandboxesSessionsSessionIdExtendTimeout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.sandboxes.sessions)[':sessionId']['extend-timeout']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['extend-timeout']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesSessionsSessionIdExtendTimeoutKey()
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
            (typeof client.v2.sandboxes.sessions)[':sessionId']['extend-timeout']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.sandboxes.sessions[':sessionId']['extend-timeout'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SandboxesSessionsSessionIdNetworkPolicyKey() {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/network-policy', 'POST'] as const
}

export function usePostV2SandboxesSessionsSessionIdNetworkPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.sandboxes.sessions)[':sessionId']['network-policy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['network-policy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesSessionsSessionIdNetworkPolicyKey()
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
            (typeof client.v2.sandboxes.sessions)[':sessionId']['network-policy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.sandboxes.sessions[':sessionId']['network-policy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SandboxesSessionsSessionIdFsReadKey() {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/fs/read', 'POST'] as const
}

export function usePostV2SandboxesSessionsSessionIdFsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['fs']['read']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['fs']['read']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesSessionsSessionIdFsReadKey()
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
            (typeof client.v2.sandboxes.sessions)[':sessionId']['fs']['read']['$post']
          >
        },
      ) =>
        parseResponse(client.v2.sandboxes.sessions[':sessionId'].fs.read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2SandboxesSessionsSessionIdFsMkdirKey() {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/fs/mkdir', 'POST'] as const
}

export function usePostV2SandboxesSessionsSessionIdFsMkdir<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['fs']['mkdir']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['fs']['mkdir']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesSessionsSessionIdFsMkdirKey()
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
            (typeof client.v2.sandboxes.sessions)[':sessionId']['fs']['mkdir']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.sandboxes.sessions[':sessionId'].fs.mkdir.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SandboxesSessionsSessionIdFsWriteKey() {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/fs/write', 'POST'] as const
}

export function usePostV2SandboxesSessionsSessionIdFsWrite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['fs']['write']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['fs']['write']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesSessionsSessionIdFsWriteKey()
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
            (typeof client.v2.sandboxes.sessions)[':sessionId']['fs']['write']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.sandboxes.sessions[':sessionId'].fs.write.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SandboxesSessionsSessionIdSnapshotKey() {
  return ['v2', '/v2/sandboxes/sessions/:sessionId/snapshot', 'POST'] as const
}

export function usePostV2SandboxesSessionsSessionIdSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v2.sandboxes.sessions)[':sessionId']['snapshot']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes.sessions)[':sessionId']['snapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesSessionsSessionIdSnapshotKey()
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
            (typeof client.v2.sandboxes.sessions)[':sessionId']['snapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.sandboxes.sessions[':sessionId'].snapshot.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SandboxesNameForkKey() {
  return ['v2', '/v2/sandboxes/:name/fork', 'POST'] as const
}

export function usePostV2SandboxesNameFork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.sandboxes)[':name']['fork']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.sandboxes)[':name']['fork']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SandboxesNameForkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.sandboxes)[':name']['fork']['$post']> },
      ) => parseResponse(client.v2.sandboxes[':name'].fork.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3SandboxesKey() {
  return ['v3', '/v3/sandboxes', 'POST'] as const
}

export function usePostV3Sandboxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.sandboxes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v3.sandboxes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SandboxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.sandboxes.$post> }) =>
        parseResponse(client.v3.sandboxes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3SandboxesSessionsSessionIdSnapshotKey() {
  return ['v3', '/v3/sandboxes/sessions/:sessionId/snapshot', 'POST'] as const
}

export function usePostV3SandboxesSessionsSessionIdSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v3.sandboxes.sessions)[':sessionId']['snapshot']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.sandboxes.sessions)[':sessionId']['snapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SandboxesSessionsSessionIdSnapshotKey()
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
            (typeof client.v3.sandboxes.sessions)[':sessionId']['snapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3.sandboxes.sessions[':sessionId'].snapshot.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV3SandboxesNameForkKey() {
  return ['v3', '/v3/sandboxes/:name/fork', 'POST'] as const
}

export function usePostV3SandboxesNameFork<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.sandboxes)[':name']['fork']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.sandboxes)[':name']['fork']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SandboxesNameForkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.sandboxes)[':name']['fork']['$post']> },
      ) => parseResponse(client.v3.sandboxes[':name'].fork.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4SandboxesKey() {
  return ['v4', '/v4/sandboxes', 'POST'] as const
}

export function usePostV4Sandboxes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.sandboxes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v4.sandboxes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4SandboxesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.sandboxes.$post> }) =>
        parseResponse(client.v4.sandboxes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SecurityAttackModeKey() {
  return ['v1', '/v1/security/attack-mode', 'POST'] as const
}

export function usePostV1SecurityAttackMode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.security)['attack-mode']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.security)['attack-mode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SecurityAttackModeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.security)['attack-mode']['$post']> },
      ) => parseResponse(client.v1.security['attack-mode'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SecurityFirewallConfigKey() {
  return ['v1', '/v1/security/firewall/config'] as const
}

export function useGetV1SecurityFirewallConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.config.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SecurityFirewallConfigKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.security.firewall.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SecurityFirewallConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.config.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SecurityFirewallConfigKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.security.firewall.config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SecurityFirewallConfigKey() {
  return ['v1', '/v1/security/firewall/config', 'PUT'] as const
}

export function usePutV1SecurityFirewallConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.config.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.security.firewall.config.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SecurityFirewallConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.security.firewall.config.$put> },
      ) => parseResponse(client.v1.security.firewall.config.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1SecurityFirewallConfigKey() {
  return ['v1', '/v1/security/firewall/config', 'PATCH'] as const
}

export function usePatchV1SecurityFirewallConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.config.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.security.firewall.config.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1SecurityFirewallConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.security.firewall.config.$patch> },
      ) => parseResponse(client.v1.security.firewall.config.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SecurityFirewallConfigConfigVersionKey(
  args: InferRequestType<(typeof client.v1.security.firewall.config)[':configVersion']['$get']>,
) {
  return ['v1', '/v1/security/firewall/config/:configVersion', args] as const
}

export function useGetV1SecurityFirewallConfigConfigVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1.security.firewall.config)[':configVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.security.firewall.config)[':configVersion']['$get']>
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
        ? getGetV1SecurityFirewallConfigConfigVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.security.firewall.config)[':configVersion']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.security.firewall.config[':configVersion'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SecurityFirewallConfigConfigVersion<TError = unknown>(
  args: InferRequestType<(typeof client.v1.security.firewall.config)[':configVersion']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.security.firewall.config)[':configVersion']['$get']>
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
        ? getGetV1SecurityFirewallConfigConfigVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.security.firewall.config)[':configVersion']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.security.firewall.config[':configVersion'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1SecurityFirewallConfigConfigVersionKey() {
  return ['v1', '/v1/security/firewall/config/:configVersion', 'DELETE'] as const
}

export function useDeleteV1SecurityFirewallConfigConfigVersion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.security.firewall.config)[':configVersion']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.security.firewall.config)[':configVersion']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SecurityFirewallConfigConfigVersionKey()
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
            (typeof client.v1.security.firewall.config)[':configVersion']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.security.firewall.config[':configVersion'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1SecurityFirewallConfigConfigVersionActivateKey() {
  return ['v1', '/v1/security/firewall/config/:configVersion/activate', 'POST'] as const
}

export function usePostV1SecurityFirewallConfigConfigVersionActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.security.firewall.config)[':configVersion']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.security.firewall.config)[':configVersion']['activate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SecurityFirewallConfigConfigVersionActivateKey()
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
            (typeof client.v1.security.firewall.config)[':configVersion']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.security.firewall.config[':configVersion'].activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SecurityFirewallAttackStatusKey(
  args: InferRequestType<(typeof client.v1.security.firewall)['attack-status']['$get']>,
) {
  return ['v1', '/v1/security/firewall/attack-status', args] as const
}

export function useGetV1SecurityFirewallAttackStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.security.firewall)['attack-status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.security.firewall)['attack-status']['$get']>>
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
        ? getGetV1SecurityFirewallAttackStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.security.firewall)['attack-status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.security.firewall['attack-status'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SecurityFirewallAttackStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v1.security.firewall)['attack-status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.security.firewall)['attack-status']['$get']>>
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
        ? getGetV1SecurityFirewallAttackStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.security.firewall)['attack-status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.security.firewall['attack-status'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SecurityFirewallBypassKey(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.$get>,
) {
  return ['v1', '/v1/security/firewall/bypass', args] as const
}

export function useGetV1SecurityFirewallBypass<TError = unknown>(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.bypass.$get>>>
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
        ? getGetV1SecurityFirewallBypassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.bypass.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.security.firewall.bypass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SecurityFirewallBypass<TError = unknown>(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.bypass.$get>>>
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
        ? getGetV1SecurityFirewallBypassKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.bypass.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.security.firewall.bypass.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SecurityFirewallBypassKey() {
  return ['v1', '/v1/security/firewall/bypass', 'POST'] as const
}

export function usePostV1SecurityFirewallBypass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.bypass.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.security.firewall.bypass.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SecurityFirewallBypassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.security.firewall.bypass.$post> },
      ) => parseResponse(client.v1.security.firewall.bypass.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SecurityFirewallBypassKey() {
  return ['v1', '/v1/security/firewall/bypass', 'DELETE'] as const
}

export function useDeleteV1SecurityFirewallBypass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.bypass.$delete>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.security.firewall.bypass.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SecurityFirewallBypassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.security.firewall.bypass.$delete> },
      ) => parseResponse(client.v1.security.firewall.bypass.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SecurityFirewallBypassRulesKey(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.rules.$get>,
) {
  return ['v1', '/v1/security/firewall/bypass/rules', args] as const
}

export function useGetV1SecurityFirewallBypassRules<TError = unknown>(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.security.firewall.bypass.rules.$get>>
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
        ? getGetV1SecurityFirewallBypassRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.security.firewall.bypass.rules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.security.firewall.bypass.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SecurityFirewallBypassRules<TError = unknown>(
  args: InferRequestType<typeof client.v1.security.firewall.bypass.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.security.firewall.bypass.rules.$get>>
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
        ? getGetV1SecurityFirewallBypassRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.security.firewall.bypass.rules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.security.firewall.bypass.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SecurityFirewallBypassRulesKey() {
  return ['v1', '/v1/security/firewall/bypass/rules', 'PUT'] as const
}

export function usePutV1SecurityFirewallBypassRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.security.firewall.bypass.rules.$put>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.security.firewall.bypass.rules.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SecurityFirewallBypassRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.security.firewall.bypass.rules.$put> },
      ) => parseResponse(client.v1.security.firewall.bypass.rules.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SecurityFirewallBypassRulesKey() {
  return ['v1', '/v1/security/firewall/bypass/rules', 'POST'] as const
}

export function usePostV1SecurityFirewallBypassRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.security.firewall.bypass.rules.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.security.firewall.bypass.rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SecurityFirewallBypassRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.security.firewall.bypass.rules.$post> },
      ) => parseResponse(client.v1.security.firewall.bypass.rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SecurityFirewallBypassRulesKey() {
  return ['v1', '/v1/security/firewall/bypass/rules', 'DELETE'] as const
}

export function useDeleteV1SecurityFirewallBypassRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.security.firewall.bypass.rules.$delete>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.security.firewall.bypass.rules.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SecurityFirewallBypassRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.security.firewall.bypass.rules.$delete> },
      ) => parseResponse(client.v1.security.firewall.bypass.rules.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SecurityFirewallEventsKey(
  args: InferRequestType<typeof client.v1.security.firewall.events.$get>,
) {
  return ['v1', '/v1/security/firewall/events', args] as const
}

export function useGetV1SecurityFirewallEvents<TError = unknown>(
  args: InferRequestType<typeof client.v1.security.firewall.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.events.$get>>>
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
        ? getGetV1SecurityFirewallEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.security.firewall.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SecurityFirewallEvents<TError = unknown>(
  args: InferRequestType<typeof client.v1.security.firewall.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.events.$get>>>
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
        ? getGetV1SecurityFirewallEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.security.firewall.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.security.firewall.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SecurityFirewallEventsSummaryKey(
  args: InferRequestType<typeof client.v1.security.firewall.events.summary.$get>,
) {
  return ['v1', '/v1/security/firewall/events/summary', args] as const
}

export function useGetV1SecurityFirewallEventsSummary<TError = unknown>(
  args: InferRequestType<typeof client.v1.security.firewall.events.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.security.firewall.events.summary.$get>>
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
        ? getGetV1SecurityFirewallEventsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.security.firewall.events.summary.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.security.firewall.events.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SecurityFirewallEventsSummary<TError = unknown>(
  args: InferRequestType<typeof client.v1.security.firewall.events.summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.security.firewall.events.summary.$get>>
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
        ? getGetV1SecurityFirewallEventsSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.security.firewall.events.summary.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.security.firewall.events.summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1SecurityFirewallConfigGenerateRuleKey() {
  return ['v1', '/v1/security/firewall/config/generate-rule', 'POST'] as const
}

export function usePostV1SecurityFirewallConfigGenerateRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.security.firewall.config)['generate-rule']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.security.firewall.config)['generate-rule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SecurityFirewallConfigGenerateRuleKey()
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
            (typeof client.v1.security.firewall.config)['generate-rule']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.security.firewall.config['generate-rule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSpeedInsightsToggleKey() {
  return ['speed-insights', '/speed-insights/toggle', 'POST'] as const
}

export function usePostSpeedInsightsToggle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['speed-insights']['toggle']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['speed-insights']['toggle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSpeedInsightsToggleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['speed-insights']['toggle']['$post']> },
      ) => parseResponse(client['speed-insights'].toggle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetStorageStoresIdKey(
  args: InferRequestType<(typeof client.storage.stores)[':id']['$get']>,
) {
  return ['storage', '/storage/stores/:id', args] as const
}

export function useGetStorageStoresId<TError = unknown>(
  args: InferRequestType<(typeof client.storage.stores)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.storage.stores)[':id']['$get']>>>
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
        ? getGetStorageStoresIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.storage.stores)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.storage.stores[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetStorageStoresId<TError = unknown>(
  args: InferRequestType<(typeof client.storage.stores)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.storage.stores)[':id']['$get']>>>
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
        ? getGetStorageStoresIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.storage.stores)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.storage.stores[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostStorageStoresBlobKey() {
  return ['storage', '/storage/stores/blob', 'POST'] as const
}

export function usePostStorageStoresBlob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.storage.stores.blob.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.storage.stores.blob.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostStorageStoresBlobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.storage.stores.blob.$post> }) =>
        parseResponse(client.storage.stores.blob.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteStorageStoresBlobIdKey() {
  return ['storage', '/storage/stores/blob/:id', 'DELETE'] as const
}

export function useDeleteStorageStoresBlobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.storage.stores.blob)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.storage.stores.blob)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteStorageStoresBlobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.storage.stores.blob)[':id']['$delete']> },
      ) => parseResponse(client.storage.stores.blob[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1StorageStoresIntegrationDirectKey() {
  return ['v1', '/v1/storage/stores/integration/direct', 'POST'] as const
}

export function usePostV1StorageStoresIntegrationDirect<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.storage.stores.integration.direct.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.storage.stores.integration.direct.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1StorageStoresIntegrationDirectKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.v1.storage.stores.integration.direct.$post> },
      ) => parseResponse(client.v1.storage.stores.integration.direct.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3TeamsTeamIdMembersKey(
  args: InferRequestType<(typeof client.v3.teams)[':teamId']['members']['$get']>,
) {
  return ['v3', '/v3/teams/:teamId/members', args] as const
}

export function useGetV3TeamsTeamIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v3.teams)[':teamId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.teams)[':teamId']['members']['$get']>>
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
        ? getGetV3TeamsTeamIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.teams)[':teamId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.teams[':teamId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3TeamsTeamIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.v3.teams)[':teamId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.teams)[':teamId']['members']['$get']>>
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
        ? getGetV3TeamsTeamIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.teams)[':teamId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.teams[':teamId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2TeamsTeamIdMembersKey() {
  return ['v2', '/v2/teams/:teamId/members', 'POST'] as const
}

export function usePostV2TeamsTeamIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TeamsTeamIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.teams)[':teamId']['members']['$post']> },
      ) => parseResponse(client.v2.teams[':teamId'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TeamsTeamIdRequestKey() {
  return ['v1', '/v1/teams/:teamId/request', 'POST'] as const
}

export function usePostV1TeamsTeamIdRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsTeamIdRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.teams)[':teamId']['request']['$post']> },
      ) => parseResponse(client.v1.teams[':teamId'].request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1TeamsTeamIdRequestUserIdKey(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>,
) {
  return ['v1', '/v1/teams/:teamId/request/:userId', args] as const
}

export function useGetV1TeamsTeamIdRequestUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
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
        ? getGetV1TeamsTeamIdRequestUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.teams[':teamId'].request[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1TeamsTeamIdRequestUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
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
        ? getGetV1TeamsTeamIdRequestUserIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['request'][':userId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.teams[':teamId'].request[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1TeamsTeamIdMembersTeamsJoinKey() {
  return ['v1', '/v1/teams/:teamId/members/teams/join', 'POST'] as const
}

export function usePostV1TeamsTeamIdMembersTeamsJoin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsTeamIdMembersTeamsJoinKey()
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
            (typeof client.v1.teams)[':teamId']['members']['teams']['join']['$post']
          >
        },
      ) => parseResponse(client.v1.teams[':teamId'].members.teams.join.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TeamsTeamIdMembersUidKey() {
  return ['v1', '/v1/teams/:teamId/members/:uid', 'DELETE'] as const
}

export function useDeleteV1TeamsTeamIdMembersUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TeamsTeamIdMembersUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$delete']>
        },
      ) => parseResponse(client.v1.teams[':teamId'].members[':uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1TeamsTeamIdMembersUidKey() {
  return ['v1', '/v1/teams/:teamId/members/:uid', 'PATCH'] as const
}

export function usePatchV1TeamsTeamIdMembersUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1TeamsTeamIdMembersUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.teams)[':teamId']['members'][':uid']['$patch']>
        },
      ) => parseResponse(client.v1.teams[':teamId'].members[':uid'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TeamsTeamIdKey(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>,
) {
  return ['v2', '/v2/teams/:teamId', args] as const
}

export function useGetV2TeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2TeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.teams[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.teams)[':teamId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2TeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.teams[':teamId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV2TeamsTeamIdKey() {
  return ['v2', '/v2/teams/:teamId', 'PATCH'] as const
}

export function usePatchV2TeamsTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.teams)[':teamId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.teams)[':teamId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2TeamsTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.teams)[':teamId']['$patch']> },
      ) => parseResponse(client.v2.teams[':teamId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2TeamsKey(args: InferRequestType<typeof client.v2.teams.$get>) {
  return ['v2', '/v2/teams', args] as const
}

export function useGetV2Teams<TError = unknown>(
  args: InferRequestType<typeof client.v2.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Teams<TError = unknown>(
  args: InferRequestType<typeof client.v2.teams.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2TeamsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.teams.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.teams.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV1TeamsKey() {
  return ['v1', '/v1/teams', 'POST'] as const
}

export function usePostV1Teams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.teams.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.teams.$post> }) =>
        parseResponse(client.v1.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1TeamsTeamIdDsyncRolesKey() {
  return ['v1', '/v1/teams/:teamId/dsync-roles', 'POST'] as const
}

export function usePostV1TeamsTeamIdDsyncRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['dsync-roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['dsync-roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1TeamsTeamIdDsyncRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.teams)[':teamId']['dsync-roles']['$post']> },
      ) => parseResponse(client.v1.teams[':teamId']['dsync-roles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TeamsTeamIdKey() {
  return ['v1', '/v1/teams/:teamId', 'DELETE'] as const
}

export function useDeleteV1TeamsTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.teams)[':teamId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TeamsTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.teams)[':teamId']['$delete']> },
      ) => parseResponse(client.v1.teams[':teamId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TeamsTeamIdInvitesInviteIdKey() {
  return ['v1', '/v1/teams/:teamId/invites/:inviteId', 'DELETE'] as const
}

export function useDeleteV1TeamsTeamIdInvitesInviteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.teams)[':teamId']['invites'][':inviteId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['invites'][':inviteId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TeamsTeamIdInvitesInviteIdKey()
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
            (typeof client.v1.teams)[':teamId']['invites'][':inviteId']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.teams[':teamId'].invites[':inviteId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1TeamsTeamIdMicrofrontendsGroupIdKey() {
  return ['v1', '/v1/teams/:teamId/microfrontends/:groupId', 'DELETE'] as const
}

export function useDeleteV1TeamsTeamIdMicrofrontendsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.teams)[':teamId']['microfrontends'][':groupId']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['microfrontends'][':groupId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1TeamsTeamIdMicrofrontendsGroupIdKey()
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
            (typeof client.v1.teams)[':teamId']['microfrontends'][':groupId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.teams[':teamId'].microfrontends[':groupId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV1TeamsTeamIdMicrofrontendsGroupIdKey() {
  return ['v1', '/v1/teams/:teamId/microfrontends/:groupId', 'PATCH'] as const
}

export function usePatchV1TeamsTeamIdMicrofrontendsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.teams)[':teamId']['microfrontends'][':groupId']['$patch']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.teams)[':teamId']['microfrontends'][':groupId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1TeamsTeamIdMicrofrontendsGroupIdKey()
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
            (typeof client.v1.teams)[':teamId']['microfrontends'][':groupId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v1.teams[':teamId'].microfrontends[':groupId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2FilesKey() {
  return ['v2', '/v2/files', 'POST'] as const
}

export function usePostV2Files<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.files.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v2.files.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.files.$post> }) =>
        parseResponse(client.v2.files.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV6UserTokensKey() {
  return ['v6', '/v6/user/tokens'] as const
}

export function useGetV6UserTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.user.tokens.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV6UserTokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.user.tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v6.user.tokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV6UserTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.user.tokens.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV6UserTokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v6.user.tokens.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v6.user.tokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3UserTokensKey() {
  return ['v3', '/v3/user/tokens', 'POST'] as const
}

export function usePostV3UserTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.user.tokens.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v3.user.tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3UserTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.user.tokens.$post> }) =>
        parseResponse(client.v3.user.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV5UserTokensTokenIdKey(
  args: InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>,
) {
  return ['v5', '/v5/user/tokens/:tokenId', args] as const
}

export function useGetV5UserTokensTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>
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
        ? getGetV5UserTokensTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.user.tokens[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV5UserTokensTokenId<TError = unknown>(
  args: InferRequestType<(typeof client.v5.user.tokens)[':tokenId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>
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
        ? getGetV5UserTokensTokenIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v5.user.tokens)[':tokenId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v5.user.tokens[':tokenId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3UserTokensTokenIdKey() {
  return ['v3', '/v3/user/tokens/:tokenId', 'DELETE'] as const
}

export function useDeleteV3UserTokensTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.user.tokens)[':tokenId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.user.tokens)[':tokenId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3UserTokensTokenIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.user.tokens)[':tokenId']['$delete']> },
      ) => parseResponse(client.v3.user.tokens[':tokenId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UserKey() {
  return ['v2', '/v2/user'] as const
}

export function useGetV2User<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2User<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1UserKey() {
  return ['v1', '/v1/user', 'DELETE'] as const
}

export function useDeleteV1User<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.user.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.user.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1UserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.user.$delete> }) =>
        parseResponse(client.v1.user.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1VcrRepositoryKey(
  args: InferRequestType<typeof client.v1.vcr.repository.$get>,
) {
  return ['v1', '/v1/vcr/repository', args] as const
}

export function useGetV1VcrRepository<TError = unknown>(
  args: InferRequestType<typeof client.v1.vcr.repository.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vcr.repository.$get>>>>
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
        ? getGetV1VcrRepositoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vcr.repository.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.vcr.repository.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VcrRepository<TError = unknown>(
  args: InferRequestType<typeof client.v1.vcr.repository.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vcr.repository.$get>>>>
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
        ? getGetV1VcrRepositoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vcr.repository.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.vcr.repository.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1VcrRepositoryKey() {
  return ['v1', '/v1/vcr/repository', 'POST'] as const
}

export function usePostV1VcrRepository<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.vcr.repository.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.vcr.repository.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VcrRepositoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.vcr.repository.$post> }) =>
        parseResponse(client.v1.vcr.repository.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1VcrRepositoryIdOrNameKey(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['$get']>,
) {
  return ['v1', '/v1/vcr/repository/:idOrName', args] as const
}

export function useGetV1VcrRepositoryIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['$get']>>
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
        ? getGetV1VcrRepositoryIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.vcr.repository[':idOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VcrRepositoryIdOrName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['$get']>>
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
        ? getGetV1VcrRepositoryIdOrNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.vcr.repository[':idOrName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1VcrRepositoryIdOrNameKey() {
  return ['v1', '/v1/vcr/repository/:idOrName', 'DELETE'] as const
}

export function useDeleteV1VcrRepositoryIdOrName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1VcrRepositoryIdOrNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['$delete']> },
      ) => parseResponse(client.v1.vcr.repository[':idOrName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1VcrRepositoryIdOrNameImagesKey(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['images']['$get']>,
) {
  return ['v1', '/v1/vcr/repository/:idOrName/images', args] as const
}

export function useGetV1VcrRepositoryIdOrNameImages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['images']['$get']>>
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
        ? getGetV1VcrRepositoryIdOrNameImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.vcr.repository[':idOrName'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VcrRepositoryIdOrNameImages<TError = unknown>(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['images']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['images']['$get']>>
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
        ? getGetV1VcrRepositoryIdOrNameImagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['images']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.vcr.repository[':idOrName'].images.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1VcrRepositoryIdOrNamePermissionsKey(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$get']>,
) {
  return ['v1', '/v1/vcr/repository/:idOrName/permissions', args] as const
}

export function useGetV1VcrRepositoryIdOrNamePermissions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$get']>
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
        ? getGetV1VcrRepositoryIdOrNamePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.vcr.repository[':idOrName'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VcrRepositoryIdOrNamePermissions<TError = unknown>(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$get']>
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
        ? getGetV1VcrRepositoryIdOrNamePermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.vcr.repository[':idOrName'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1VcrRepositoryIdOrNamePermissionsKey() {
  return ['v1', '/v1/vcr/repository/:idOrName/permissions', 'POST'] as const
}

export function usePostV1VcrRepositoryIdOrNamePermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VcrRepositoryIdOrNamePermissionsKey()
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
            (typeof client.v1.vcr.repository)[':idOrName']['permissions']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.vcr.repository[':idOrName'].permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1VcrRepositoryIdOrNamePermissionsKey() {
  return ['v1', '/v1/vcr/repository/:idOrName/permissions', 'DELETE'] as const
}

export function useDeleteV1VcrRepositoryIdOrNamePermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['permissions']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1VcrRepositoryIdOrNamePermissionsKey()
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
            (typeof client.v1.vcr.repository)[':idOrName']['permissions']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.vcr.repository[':idOrName'].permissions.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1VcrRepositoryIdOrNamePermissionsAllKey() {
  return ['v1', '/v1/vcr/repository/:idOrName/permissions/all', 'DELETE'] as const
}

export function useDeleteV1VcrRepositoryIdOrNamePermissionsAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.vcr.repository)[':idOrName']['permissions']['all']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.vcr.repository)[':idOrName']['permissions']['all']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1VcrRepositoryIdOrNamePermissionsAllKey()
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
            (typeof client.v1.vcr.repository)[':idOrName']['permissions']['all']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.vcr.repository[':idOrName'].permissions.all.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1VcrRepositoryIdOrNameTagsKey(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['tags']['$get']>,
) {
  return ['v1', '/v1/vcr/repository/:idOrName/tags', args] as const
}

export function useGetV1VcrRepositoryIdOrNameTags<TError = unknown>(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['tags']['$get']>>
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
        ? getGetV1VcrRepositoryIdOrNameTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.vcr.repository[':idOrName'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VcrRepositoryIdOrNameTags<TError = unknown>(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['tags']['$get']>>
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
        ? getGetV1VcrRepositoryIdOrNameTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.vcr.repository[':idOrName'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1VcrRepositoryIdOrNameTagsTagKey(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['tags'][':tag']['$get']>,
) {
  return ['v1', '/v1/vcr/repository/:idOrName/tags/:tag', args] as const
}

export function useGetV1VcrRepositoryIdOrNameTagsTag<TError = unknown>(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['tags'][':tag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['tags'][':tag']['$get']>
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
        ? getGetV1VcrRepositoryIdOrNameTagsTagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['tags'][':tag']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.vcr.repository[':idOrName'].tags[':tag'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VcrRepositoryIdOrNameTagsTag<TError = unknown>(
  args: InferRequestType<(typeof client.v1.vcr.repository)[':idOrName']['tags'][':tag']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['tags'][':tag']['$get']>
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
        ? getGetV1VcrRepositoryIdOrNameTagsTagKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.vcr.repository)[':idOrName']['tags'][':tag']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.vcr.repository[':idOrName'].tags[':tag'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1VcrRepositoryIdOrNameImagesImageIdOrDigestKey(
  args: InferRequestType<
    (typeof client.v1.vcr.repository)[':idOrName']['images'][':imageIdOrDigest']['$get']
  >,
) {
  return ['v1', '/v1/vcr/repository/:idOrName/images/:imageIdOrDigest', args] as const
}

export function useGetV1VcrRepositoryIdOrNameImagesImageIdOrDigest<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.vcr.repository)[':idOrName']['images'][':imageIdOrDigest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.vcr.repository)[':idOrName']['images'][':imageIdOrDigest']['$get']
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
        ? getGetV1VcrRepositoryIdOrNameImagesImageIdOrDigestKey(args)
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
                (typeof client.v1.vcr.repository)[':idOrName']['images'][':imageIdOrDigest']['$get']
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
          client.v1.vcr.repository[':idOrName'].images[':imageIdOrDigest'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VcrRepositoryIdOrNameImagesImageIdOrDigest<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.vcr.repository)[':idOrName']['images'][':imageIdOrDigest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.vcr.repository)[':idOrName']['images'][':imageIdOrDigest']['$get']
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
        ? getGetV1VcrRepositoryIdOrNameImagesImageIdOrDigestKey(args)
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
                (typeof client.v1.vcr.repository)[':idOrName']['images'][':imageIdOrDigest']['$get']
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
          client.v1.vcr.repository[':idOrName'].images[':imageIdOrDigest'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1VcrRepositoryIdOrNameImagesImageIdKey() {
  return ['v1', '/v1/vcr/repository/:idOrName/images/:imageId', 'DELETE'] as const
}

export function useDeleteV1VcrRepositoryIdOrNameImagesImageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.vcr.repository)[':idOrName']['images'][':imageId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.vcr.repository)[':idOrName']['images'][':imageId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1VcrRepositoryIdOrNameImagesImageIdKey()
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
            (typeof client.v1.vcr.repository)[':idOrName']['images'][':imageId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.vcr.repository[':idOrName'].images[':imageId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2IndexKey() {
  return ['v2', '/v2/'] as const
}

export function useGetV2Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2IndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Index<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.index.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2IndexKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.index.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.index.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2TeamSlugProjectSlugRepositoryNameBlobsDigestKey(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$get']
  >,
) {
  return ['v2', '/v2/:teamSlug/:projectSlug/:repositoryName/blobs/:digest', args] as const
}

export function useGetV2TeamSlugProjectSlugRepositoryNameBlobsDigest<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$get']
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
        ? getGetV2TeamSlugProjectSlugRepositoryNameBlobsDigestKey(args)
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
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$get']
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
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs[':digest'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TeamSlugProjectSlugRepositoryNameBlobsDigest<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$get']
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
        ? getGetV2TeamSlugProjectSlugRepositoryNameBlobsDigestKey(args)
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
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$get']
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
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs[':digest'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2TeamSlugProjectSlugRepositoryNameBlobsDigestKey() {
  return ['v2', '/v2/:teamSlug/:projectSlug/:repositoryName/blobs/:digest', 'DELETE'] as const
}

export function useDeleteV2TeamSlugProjectSlugRepositoryNameBlobsDigest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2TeamSlugProjectSlugRepositoryNameBlobsDigestKey()
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
            (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs[':digest'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getHeadV2TeamSlugProjectSlugRepositoryNameBlobsDigestKey() {
  return ['v2', '/v2/:teamSlug/:projectSlug/:repositoryName/blobs/:digest', 'HEAD'] as const
}

export function useHeadV2TeamSlugProjectSlugRepositoryNameBlobsDigest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$head']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadV2TeamSlugProjectSlugRepositoryNameBlobsDigestKey()
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
            (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs'][':digest']['$head']
          >
        },
      ) =>
        parseResponse(
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs[':digest'].$head(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidKey(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$get']
  >,
) {
  return ['v2', '/v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid', args] as const
}

export function useGetV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuid<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$get']
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
        ? getGetV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidKey(args)
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
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$get']
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
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs.uploads[':uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuid<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$get']
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
        ? getGetV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidKey(args)
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
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$get']
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
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs.uploads[':uuid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidKey() {
  return ['v2', '/v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid', 'PUT'] as const
}

export function usePutV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidKey()
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
            (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs.uploads[':uuid'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidKey() {
  return ['v2', '/v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid', 'DELETE'] as const
}

export function useDeleteV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidKey()
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
            (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs.uploads[':uuid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidKey() {
  return ['v2', '/v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/:uuid', 'PATCH'] as const
}

export function usePatchV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuid<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV2TeamSlugProjectSlugRepositoryNameBlobsUploadsUuidKey()
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
            (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads'][':uuid']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs.uploads[':uuid'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2TeamSlugProjectSlugRepositoryNameBlobsUploadsIndexKey() {
  return ['v2', '/v2/:teamSlug/:projectSlug/:repositoryName/blobs/uploads/', 'POST'] as const
}

export function usePostV2TeamSlugProjectSlugRepositoryNameBlobsUploadsIndex<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads']['index']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads']['index']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2TeamSlugProjectSlugRepositoryNameBlobsUploadsIndexKey()
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
            (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['blobs']['uploads']['index']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].blobs.uploads.index.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2TeamSlugProjectSlugRepositoryNameManifestsReferenceKey(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$get']
  >,
) {
  return ['v2', '/v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference', args] as const
}

export function useGetV2TeamSlugProjectSlugRepositoryNameManifestsReference<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$get']
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
        ? getGetV2TeamSlugProjectSlugRepositoryNameManifestsReferenceKey(args)
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
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$get']
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
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].manifests[':reference'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TeamSlugProjectSlugRepositoryNameManifestsReference<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$get']
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
        ? getGetV2TeamSlugProjectSlugRepositoryNameManifestsReferenceKey(args)
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
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$get']
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
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].manifests[':reference'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV2TeamSlugProjectSlugRepositoryNameManifestsReferenceKey() {
  return ['v2', '/v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference', 'PUT'] as const
}

export function usePutV2TeamSlugProjectSlugRepositoryNameManifestsReference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV2TeamSlugProjectSlugRepositoryNameManifestsReferenceKey()
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
            (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].manifests[':reference'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV2TeamSlugProjectSlugRepositoryNameManifestsReferenceKey() {
  return [
    'v2',
    '/v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference',
    'DELETE',
  ] as const
}

export function useDeleteV2TeamSlugProjectSlugRepositoryNameManifestsReference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2TeamSlugProjectSlugRepositoryNameManifestsReferenceKey()
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
            (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].manifests[':reference'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getHeadV2TeamSlugProjectSlugRepositoryNameManifestsReferenceKey() {
  return ['v2', '/v2/:teamSlug/:projectSlug/:repositoryName/manifests/:reference', 'HEAD'] as const
}

export function useHeadV2TeamSlugProjectSlugRepositoryNameManifestsReference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$head']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$head']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getHeadV2TeamSlugProjectSlugRepositoryNameManifestsReferenceKey()
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
            (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['manifests'][':reference']['$head']
          >
        },
      ) =>
        parseResponse(
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].manifests[':reference'].$head(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2TeamSlugProjectSlugRepositoryNameTagsListKey(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['tags']['list']['$get']
  >,
) {
  return ['v2', '/v2/:teamSlug/:projectSlug/:repositoryName/tags/list', args] as const
}

export function useGetV2TeamSlugProjectSlugRepositoryNameTagsList<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['tags']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['tags']['list']['$get']
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
        ? getGetV2TeamSlugProjectSlugRepositoryNameTagsListKey(args)
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
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['tags']['list']['$get']
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
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].tags.list.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2TeamSlugProjectSlugRepositoryNameTagsList<TError = unknown>(
  args: InferRequestType<
    (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['tags']['list']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['tags']['list']['$get']
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
        ? getGetV2TeamSlugProjectSlugRepositoryNameTagsListKey(args)
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
                (typeof client.v2)[':teamSlug'][':projectSlug'][':repositoryName']['tags']['list']['$get']
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
          client.v2[':teamSlug'][':projectSlug'][':repositoryName'].tags.list.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiRepositorySettingsKey(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['repository-settings']['$get']>,
) {
  return ['v1', '/v1/vercel-ci/repository-settings', args] as const
}

export function useGetV1VercelCiRepositorySettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['repository-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['vercel-ci']['repository-settings']['$get']>>
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
        ? getGetV1VercelCiRepositorySettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['vercel-ci']['repository-settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['vercel-ci']['repository-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiRepositorySettings<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['repository-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['vercel-ci']['repository-settings']['$get']>>
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
        ? getGetV1VercelCiRepositorySettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['vercel-ci']['repository-settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1['vercel-ci']['repository-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchV1VercelCiRepositorySettingsKey() {
  return ['v1', '/v1/vercel-ci/repository-settings', 'PATCH'] as const
}

export function usePatchV1VercelCiRepositorySettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['vercel-ci']['repository-settings']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['vercel-ci']['repository-settings']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1VercelCiRepositorySettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1)['vercel-ci']['repository-settings']['$patch']>
        },
      ) => parseResponse(client.v1['vercel-ci']['repository-settings'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2VercelCiInvocationsKey(
  args: InferRequestType<(typeof client.v2)['vercel-ci']['invocations']['$get']>,
) {
  return ['v2', '/v2/vercel-ci/invocations', args] as const
}

export function useGetV2VercelCiInvocations<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['vercel-ci']['invocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['vercel-ci']['invocations']['$get']>>
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
        ? getGetV2VercelCiInvocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['vercel-ci']['invocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['vercel-ci'].invocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VercelCiInvocations<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['vercel-ci']['invocations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['vercel-ci']['invocations']['$get']>>
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
        ? getGetV2VercelCiInvocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['vercel-ci']['invocations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['vercel-ci'].invocations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2VercelCiBranchesKey(
  args: InferRequestType<(typeof client.v2)['vercel-ci']['branches']['$get']>,
) {
  return ['v2', '/v2/vercel-ci/branches', args] as const
}

export function useGetV2VercelCiBranches<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['vercel-ci']['branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['vercel-ci']['branches']['$get']>>
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
        ? getGetV2VercelCiBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['vercel-ci']['branches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['vercel-ci'].branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2VercelCiBranches<TError = unknown>(
  args: InferRequestType<(typeof client.v2)['vercel-ci']['branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['vercel-ci']['branches']['$get']>>
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
        ? getGetV2VercelCiBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2)['vercel-ci']['branches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2['vercel-ci'].branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1VercelCiTaskAnalysesKey() {
  return ['v1', '/v1/vercel-ci/task-analyses', 'POST'] as const
}

export function usePostV1VercelCiTaskAnalyses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['vercel-ci']['task-analyses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['vercel-ci']['task-analyses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VercelCiTaskAnalysesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1)['vercel-ci']['task-analyses']['$post']> },
      ) => parseResponse(client.v1['vercel-ci']['task-analyses'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1VercelCiTaskAnalysesAnalysisIdKey(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['$get']>,
) {
  return ['v1', '/v1/vercel-ci/task-analyses/:analysisId', args] as const
}

export function useGetV1VercelCiTaskAnalysesAnalysisId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['$get']>
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
        ? getGetV1VercelCiTaskAnalysesAnalysisIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['vercel-ci']['task-analyses'][':analysisId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiTaskAnalysesAnalysisId<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['$get']>
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
        ? getGetV1VercelCiTaskAnalysesAnalysisIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1['vercel-ci']['task-analyses'][':analysisId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1VercelCiTaskAnalysesAnalysisIdPullRequestKey() {
  return ['v1', '/v1/vercel-ci/task-analyses/:analysisId/pull-request', 'POST'] as const
}

export function usePostV1VercelCiTaskAnalysesAnalysisIdPullRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['pull-request']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['pull-request']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VercelCiTaskAnalysesAnalysisIdPullRequestKey()
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
            (typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['pull-request']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['vercel-ci']['task-analyses'][':analysisId']['pull-request'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1VercelCiTaskAnalysesAnalysisIdTasksKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['tasks']['$get']
  >,
) {
  return ['v1', '/v1/vercel-ci/task-analyses/:analysisId/tasks', args] as const
}

export function useGetV1VercelCiTaskAnalysesAnalysisIdTasks<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['tasks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['tasks']['$get']
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
        ? getGetV1VercelCiTaskAnalysesAnalysisIdTasksKey(args)
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
                (typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['tasks']['$get']
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
          client.v1['vercel-ci']['task-analyses'][':analysisId'].tasks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiTaskAnalysesAnalysisIdTasks<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['tasks']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['tasks']['$get']
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
        ? getGetV1VercelCiTaskAnalysesAnalysisIdTasksKey(args)
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
                (typeof client.v1)['vercel-ci']['task-analyses'][':analysisId']['tasks']['$get']
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
          client.v1['vercel-ci']['task-analyses'][':analysisId'].tasks.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdAttemptsKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts']['$get']
  >,
) {
  return ['v1', '/v1/vercel-ci/invocations/:invocationId/attempts', args] as const
}

export function useGetV1VercelCiInvocationsInvocationIdAttempts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsKey(args)
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdAttempts<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsKey(args)
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdTreeKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['tree']['$get']
  >,
) {
  return ['v1', '/v1/vercel-ci/invocations/:invocationId/tree', args] as const
}

export function useGetV1VercelCiInvocationsInvocationIdTree<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['tree']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['tree']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdTreeKey(args)
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['tree']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].tree.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdTree<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['tree']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['tree']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdTreeKey(args)
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['tree']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].tree.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['$get']
  >,
) {
  return ['v1', '/v1/vercel-ci/invocations/:invocationId/attempts/:attempt', args] as const
}

export function useGetV1VercelCiInvocationsInvocationIdAttemptsAttempt<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptKey(args)
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdAttemptsAttempt<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptKey(args)
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1VercelCiInvocationsInvocationIdAttemptsAttemptRetryKey() {
  return ['v1', '/v1/vercel-ci/invocations/:invocationId/attempts/:attempt/retry', 'POST'] as const
}

export function usePostV1VercelCiInvocationsInvocationIdAttemptsAttemptRetry<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['retry']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['retry']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1VercelCiInvocationsInvocationIdAttemptsAttemptRetryKey()
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
            (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['retry']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'].retry.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions']['$get']
  >,
) {
  return [
    'v1',
    '/v1/vercel-ci/invocations/:invocationId/attempts/:attempt/job-definitions',
    args,
  ] as const
}

export function useGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsKey(args)
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsKey(args)
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['$get']
  >,
) {
  return [
    'v1',
    '/v1/vercel-ci/invocations/:invocationId/attempts/:attempt/job-definitions/:jobDefinitionId',
    args,
  ] as const
}

export function useGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs']['$get']
  >,
) {
  return [
    'v1',
    '/v1/vercel-ci/invocations/:invocationId/attempts/:attempt/job-definitions/:jobDefinitionId/runs',
    args,
  ] as const
}

export function useGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRuns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].runs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRuns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].runs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['$get']
  >,
) {
  return [
    'v1',
    '/v1/vercel-ci/invocations/:invocationId/attempts/:attempt/job-definitions/:jobDefinitionId/runs/:runAttempt',
    args,
  ] as const
}

export function useGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttempt<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].runs[':runAttempt'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttempt<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].runs[':runAttempt'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions']['$get']
  >,
) {
  return [
    'v1',
    '/v1/vercel-ci/invocations/:invocationId/attempts/:attempt/job-definitions/:jobDefinitionId/runs/:runAttempt/task-definitions',
    args,
  ] as const
}

export function useGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].runs[':runAttempt']['task-definitions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitions<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].runs[':runAttempt']['task-definitions'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskRunsKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-runs']['$get']
  >,
) {
  return [
    'v1',
    '/v1/vercel-ci/invocations/:invocationId/attempts/:attempt/job-definitions/:jobDefinitionId/runs/:runAttempt/task-runs',
    args,
  ] as const
}

export function useGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskRuns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-runs']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskRunsKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-runs']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].runs[':runAttempt']['task-runs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskRuns<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-runs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-runs']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskRunsKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-runs']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].runs[':runAttempt']['task-runs'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptLogsKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['logs']['$get']
  >,
) {
  return ['v1', '/v1/vercel-ci/invocations/:invocationId/attempts/:attempt/logs', args] as const
}

export function useGetV1VercelCiInvocationsInvocationIdAttemptsAttemptLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['logs']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptLogsKey(args)
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['logs']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'].logs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdAttemptsAttemptLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['logs']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptLogsKey(args)
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['logs']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'].logs.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptTaskLogsKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['task-logs']['$get']
  >,
) {
  return [
    'v1',
    '/v1/vercel-ci/invocations/:invocationId/attempts/:attempt/task-logs',
    args,
  ] as const
}

export function useGetV1VercelCiInvocationsInvocationIdAttemptsAttemptTaskLogs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['task-logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['task-logs']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptTaskLogsKey(args)
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['task-logs']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'task-logs'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdAttemptsAttemptTaskLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['task-logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['task-logs']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptTaskLogsKey(args)
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['task-logs']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'task-logs'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiLogSearchKey(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['log-search']['$get']>,
) {
  return ['v1', '/v1/vercel-ci/log-search', args] as const
}

export function useGetV1VercelCiLogSearch<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['log-search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['vercel-ci']['log-search']['$get']>>
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
        ? getGetV1VercelCiLogSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['vercel-ci']['log-search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['vercel-ci']['log-search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiLogSearch<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['vercel-ci']['log-search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['vercel-ci']['log-search']['$get']>>
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
        ? getGetV1VercelCiLogSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['vercel-ci']['log-search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['vercel-ci']['log-search'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptLogsKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['logs']['$get']
  >,
) {
  return [
    'v1',
    '/v1/vercel-ci/invocations/:invocationId/attempts/:attempt/job-definitions/:jobDefinitionId/runs/:runAttempt/logs',
    args,
  ] as const
}

export function useGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['logs']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptLogsKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['logs']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].runs[':runAttempt'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['logs']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptLogsKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['logs']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].runs[':runAttempt'].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsTaskDefinitionIdRunsTaskRunAttemptLogsKey(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions'][':taskDefinitionId']['runs'][':taskRunAttempt']['logs']['$get']
  >,
) {
  return [
    'v1',
    '/v1/vercel-ci/invocations/:invocationId/attempts/:attempt/job-definitions/:jobDefinitionId/runs/:runAttempt/task-definitions/:taskDefinitionId/runs/:taskRunAttempt/logs',
    args,
  ] as const
}

export function useGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsTaskDefinitionIdRunsTaskRunAttemptLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions'][':taskDefinitionId']['runs'][':taskRunAttempt']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions'][':taskDefinitionId']['runs'][':taskRunAttempt']['logs']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsTaskDefinitionIdRunsTaskRunAttemptLogsKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions'][':taskDefinitionId']['runs'][':taskRunAttempt']['logs']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].runs[':runAttempt']['task-definitions'][':taskDefinitionId'].runs[
            ':taskRunAttempt'
          ].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsTaskDefinitionIdRunsTaskRunAttemptLogs<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions'][':taskDefinitionId']['runs'][':taskRunAttempt']['logs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions'][':taskDefinitionId']['runs'][':taskRunAttempt']['logs']['$get']
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
        ? getGetV1VercelCiInvocationsInvocationIdAttemptsAttemptJobDefinitionsJobDefinitionIdRunsRunAttemptTaskDefinitionsTaskDefinitionIdRunsTaskRunAttemptLogsKey(
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
                (typeof client.v1)['vercel-ci']['invocations'][':invocationId']['attempts'][':attempt']['job-definitions'][':jobDefinitionId']['runs'][':runAttempt']['task-definitions'][':taskDefinitionId']['runs'][':taskRunAttempt']['logs']['$get']
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
          client.v1['vercel-ci'].invocations[':invocationId'].attempts[':attempt'][
            'job-definitions'
          ][':jobDefinitionId'].runs[':runAttempt']['task-definitions'][':taskDefinitionId'].runs[
            ':taskRunAttempt'
          ].logs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostWebInsightsToggleKey() {
  return ['web', '/web/insights/toggle', 'POST'] as const
}

export function usePostWebInsightsToggle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.web.insights.toggle.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.web.insights.toggle.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebInsightsToggleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.web.insights.toggle.$post> }) =>
        parseResponse(client.web.insights.toggle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1QueryWebAnalyticsVisitsAggregateKey(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['visits']['aggregate']['$get']>,
) {
  return ['v1', '/v1/query/web-analytics/visits/aggregate', args] as const
}

export function useGetV1QueryWebAnalyticsVisitsAggregate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['visits']['aggregate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['visits']['aggregate']['$get']>
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
        ? getGetV1QueryWebAnalyticsVisitsAggregateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['visits']['aggregate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.query['web-analytics'].visits.aggregate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1QueryWebAnalyticsVisitsAggregate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['visits']['aggregate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['visits']['aggregate']['$get']>
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
        ? getGetV1QueryWebAnalyticsVisitsAggregateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['visits']['aggregate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.query['web-analytics'].visits.aggregate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1QueryWebAnalyticsEventsAggregateKey(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['events']['aggregate']['$get']>,
) {
  return ['v1', '/v1/query/web-analytics/events/aggregate', args] as const
}

export function useGetV1QueryWebAnalyticsEventsAggregate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['events']['aggregate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['events']['aggregate']['$get']>
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
        ? getGetV1QueryWebAnalyticsEventsAggregateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['events']['aggregate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.query['web-analytics'].events.aggregate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1QueryWebAnalyticsEventsAggregate<TError = unknown>(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['events']['aggregate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['events']['aggregate']['$get']>
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
        ? getGetV1QueryWebAnalyticsEventsAggregateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['events']['aggregate']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.query['web-analytics'].events.aggregate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1QueryWebAnalyticsVisitsCountKey(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['visits']['count']['$get']>,
) {
  return ['v1', '/v1/query/web-analytics/visits/count', args] as const
}

export function useGetV1QueryWebAnalyticsVisitsCount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['visits']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['visits']['count']['$get']>
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
        ? getGetV1QueryWebAnalyticsVisitsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['visits']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.query['web-analytics'].visits.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1QueryWebAnalyticsVisitsCount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['visits']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['visits']['count']['$get']>
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
        ? getGetV1QueryWebAnalyticsVisitsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['visits']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.query['web-analytics'].visits.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1QueryWebAnalyticsEventsCountKey(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['events']['count']['$get']>,
) {
  return ['v1', '/v1/query/web-analytics/events/count', args] as const
}

export function useGetV1QueryWebAnalyticsEventsCount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['events']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['events']['count']['$get']>
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
        ? getGetV1QueryWebAnalyticsEventsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['events']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.query['web-analytics'].events.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1QueryWebAnalyticsEventsCount<TError = unknown>(
  args: InferRequestType<(typeof client.v1.query)['web-analytics']['events']['count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['events']['count']['$get']>
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
        ? getGetV1QueryWebAnalyticsEventsCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.query)['web-analytics']['events']['count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.query['web-analytics'].events.count.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1WebhooksKey(args: InferRequestType<typeof client.v1.webhooks.$get>) {
  return ['v1', '/v1/webhooks', args] as const
}

export function useGetV1Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WebhooksKey() {
  return ['v1', '/v1/webhooks', 'POST'] as const
}

export function usePostV1Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.webhooks.$post> }) =>
        parseResponse(client.v1.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebhooksIdKey(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
) {
  return ['v1', '/v1/webhooks/:id', args] as const
}

export function useGetV1WebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WebhooksId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhooks)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1WebhooksIdKey() {
  return ['v1', '/v1/webhooks/:id', 'DELETE'] as const
}

export function useDeleteV1WebhooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1WebhooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.webhooks)[':id']['$delete']> },
      ) => parseResponse(client.v1.webhooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2DeploymentsIdAliasesKey(
  args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>,
) {
  return ['v2', '/v2/deployments/:id/aliases', args] as const
}

export function useGetV2DeploymentsIdAliases<TError = unknown>(
  args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
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
        ? getGetV2DeploymentsIdAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.deployments[':id'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2DeploymentsIdAliases<TError = unknown>(
  args: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
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
        ? getGetV2DeploymentsIdAliasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.deployments[':id'].aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2DeploymentsIdAliasesKey() {
  return ['v2', '/v2/deployments/:id/aliases', 'POST'] as const
}

export function usePostV2DeploymentsIdAliases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.deployments)[':id']['aliases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2DeploymentsIdAliasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.deployments)[':id']['aliases']['$post']> },
      ) => parseResponse(client.v2.deployments[':id'].aliases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4AliasesKey(args: InferRequestType<typeof client.v4.aliases.$get>) {
  return ['v4', '/v4/aliases', args] as const
}

export function useGetV4Aliases<TError = unknown>(
  args: InferRequestType<typeof client.v4.aliases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4AliasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4Aliases<TError = unknown>(
  args: InferRequestType<typeof client.v4.aliases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4AliasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.aliases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.aliases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4AliasesIdOrAliasKey(
  args: InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>,
) {
  return ['v4', '/v4/aliases/:idOrAlias', args] as const
}

export function useGetV4AliasesIdOrAlias<TError = unknown>(
  args: InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>
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
        ? getGetV4AliasesIdOrAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.aliases[':idOrAlias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4AliasesIdOrAlias<TError = unknown>(
  args: InferRequestType<(typeof client.v4.aliases)[':idOrAlias']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>
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
        ? getGetV4AliasesIdOrAliasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.aliases)[':idOrAlias']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.aliases[':idOrAlias'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2AliasesAliasIdKey() {
  return ['v2', '/v2/aliases/:aliasId', 'DELETE'] as const
}

export function useDeleteV2AliasesAliasId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.aliases)[':aliasId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v2.aliases)[':aliasId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2AliasesAliasIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.aliases)[':aliasId']['$delete']> },
      ) => parseResponse(client.v2.aliases[':aliasId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAliasesIdProtectionBypassKey() {
  return ['aliases', '/aliases/:id/protection-bypass', 'PATCH'] as const
}

export function usePatchAliasesIdProtectionBypass<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.aliases)[':id']['protection-bypass']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.aliases)[':id']['protection-bypass']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAliasesIdProtectionBypassKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.aliases)[':id']['protection-bypass']['$patch']> },
      ) => parseResponse(client.aliases[':id']['protection-bypass'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV8CertsIdKey(
  args: InferRequestType<(typeof client.v8.certs)[':id']['$get']>,
) {
  return ['v8', '/v8/certs/:id', args] as const
}

export function useGetV8CertsId<TError = unknown>(
  args: InferRequestType<(typeof client.v8.certs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v8.certs)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV8CertsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v8.certs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v8.certs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV8CertsId<TError = unknown>(
  args: InferRequestType<(typeof client.v8.certs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v8.certs)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV8CertsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v8.certs)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v8.certs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV8CertsIdKey() {
  return ['v8', '/v8/certs/:id', 'DELETE'] as const
}

export function useDeleteV8CertsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v8.certs)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v8.certs)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV8CertsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v8.certs)[':id']['$delete']> },
      ) => parseResponse(client.v8.certs[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV8CertsKey(args: InferRequestType<typeof client.v8.certs.$get>) {
  return ['v8', '/v8/certs', args] as const
}

export function useGetV8Certs<TError = unknown>(
  args: InferRequestType<typeof client.v8.certs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.certs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV8CertsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.certs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v8.certs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV8Certs<TError = unknown>(
  args: InferRequestType<typeof client.v8.certs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.certs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV8CertsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.certs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v8.certs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutV8CertsKey() {
  return ['v8', '/v8/certs', 'PUT'] as const
}

export function usePutV8Certs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.certs.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v8.certs.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV8CertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v8.certs.$put> }) =>
        parseResponse(client.v8.certs.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV8CertsKey() {
  return ['v8', '/v8/certs', 'POST'] as const
}

export function usePostV8Certs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v8.certs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v8.certs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV8CertsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v8.certs.$post> }) =>
        parseResponse(client.v8.certs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV6DeploymentsIdFilesKey(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>,
) {
  return ['v6', '/v6/deployments/:id/files', args] as const
}

export function useGetV6DeploymentsIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
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
        ? getGetV6DeploymentsIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v6.deployments[':id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV6DeploymentsIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.v6.deployments)[':id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
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
        ? getGetV6DeploymentsIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v6.deployments)[':id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v6.deployments[':id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV8DeploymentsIdFilesFileIdKey(
  args: InferRequestType<(typeof client.v8.deployments)[':id']['files'][':fileId']['$get']>,
) {
  return ['v8', '/v8/deployments/:id/files/:fileId', args] as const
}

export function useGetV8DeploymentsIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.v8.deployments)[':id']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v8.deployments)[':id']['files'][':fileId']['$get']>>
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
        ? getGetV8DeploymentsIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v8.deployments)[':id']['files'][':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v8.deployments[':id'].files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV8DeploymentsIdFilesFileId<TError = unknown>(
  args: InferRequestType<(typeof client.v8.deployments)[':id']['files'][':fileId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v8.deployments)[':id']['files'][':fileId']['$get']>>
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
        ? getGetV8DeploymentsIdFilesFileIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v8.deployments)[':id']['files'][':fileId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v8.deployments[':id'].files[':fileId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV7DeploymentsKey(args: InferRequestType<typeof client.v7.deployments.$get>) {
  return ['v7', '/v7/deployments', args] as const
}

export function useGetV7Deployments<TError = unknown>(
  args: InferRequestType<typeof client.v7.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.deployments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV7DeploymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.deployments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v7.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV7Deployments<TError = unknown>(
  args: InferRequestType<typeof client.v7.deployments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.deployments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV7DeploymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v7.deployments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v7.deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV13DeploymentsIdKey() {
  return ['v13', '/v13/deployments/:id', 'DELETE'] as const
}

export function useDeleteV13DeploymentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v13.deployments)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v13.deployments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV13DeploymentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v13.deployments)[':id']['$delete']> },
      ) => parseResponse(client.v13.deployments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
