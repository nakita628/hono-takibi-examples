import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getGroupKey() {
  return ['group'] as const
}

export function getMonitorKey() {
  return ['monitor'] as const
}

export function getOrgKey() {
  return ['org'] as const
}

export function getOrgsKey() {
  return ['orgs'] as const
}

export function getReportingKey() {
  return ['reporting'] as const
}

export function getTestKey() {
  return ['test'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getPostGroupGroupIdAuditKey() {
  return ['group', '/group/:groupId/audit', 'POST'] as const
}

export function usePostGroupGroupIdAudit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupId']['audit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.group)[':groupId']['audit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupGroupIdAuditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.group)[':groupId']['audit']['$post']> },
      ) => parseResponse(client.group[':groupId'].audit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupGroupIdMembersKey(
  args: InferRequestType<(typeof client.group)[':groupId']['members']['$get']>,
) {
  return ['group', '/group/:groupId/members', args] as const
}

export function useGetGroupGroupIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.group)[':groupId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupGroupIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group[':groupId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupGroupIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.group)[':groupId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupGroupIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group[':groupId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupGroupIdOrgOrgIdMembersKey() {
  return ['group', '/group/:groupId/org/:orgId/members', 'POST'] as const
}

export function usePostGroupGroupIdOrgOrgIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.group)[':groupId']['org'][':orgId']['members']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.group)[':groupId']['org'][':orgId']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupGroupIdOrgOrgIdMembersKey()
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
            (typeof client.group)[':groupId']['org'][':orgId']['members']['$post']
          >
        },
      ) => parseResponse(client.group[':groupId'].org[':orgId'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupGroupIdOrgsKey(
  args: InferRequestType<(typeof client.group)[':groupId']['orgs']['$get']>,
) {
  return ['group', '/group/:groupId/orgs', args] as const
}

export function useGetGroupGroupIdOrgs<TError = unknown>(
  args: InferRequestType<(typeof client.group)[':groupId']['orgs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['orgs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupGroupIdOrgsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['orgs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group[':groupId'].orgs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupGroupIdOrgs<TError = unknown>(
  args: InferRequestType<(typeof client.group)[':groupId']['orgs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['orgs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupGroupIdOrgsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['orgs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group[':groupId'].orgs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupGroupIdRolesKey(
  args: InferRequestType<(typeof client.group)[':groupId']['roles']['$get']>,
) {
  return ['group', '/group/:groupId/roles', args] as const
}

export function useGetGroupGroupIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.group)[':groupId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupGroupIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group[':groupId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupGroupIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.group)[':groupId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupGroupIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group[':groupId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGroupGroupIdSettingsKey(
  args: InferRequestType<(typeof client.group)[':groupId']['settings']['$get']>,
) {
  return ['group', '/group/:groupId/settings', args] as const
}

export function useGetGroupGroupIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.group)[':groupId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupGroupIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group[':groupId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupGroupIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.group)[':groupId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupGroupIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group[':groupId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutGroupGroupIdSettingsKey() {
  return ['group', '/group/:groupId/settings', 'PUT'] as const
}

export function usePutGroupGroupIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupId']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.group)[':groupId']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutGroupGroupIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.group)[':groupId']['settings']['$put']> },
      ) => parseResponse(client.group[':groupId'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetGroupGroupIdTagsKey(
  args: InferRequestType<(typeof client.group)[':groupId']['tags']['$get']>,
) {
  return ['group', '/group/:groupId/tags', args] as const
}

export function useGetGroupGroupIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.group)[':groupId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupGroupIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group[':groupId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGroupGroupIdTags<TError = unknown>(
  args: InferRequestType<(typeof client.group)[':groupId']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetGroupGroupIdTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.group[':groupId'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostGroupGroupIdTagsDeleteKey() {
  return ['group', '/group/:groupId/tags/delete', 'POST'] as const
}

export function usePostGroupGroupIdTagsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.group)[':groupId']['tags']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.group)[':groupId']['tags']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGroupGroupIdTagsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.group)[':groupId']['tags']['delete']['$post']> },
      ) => parseResponse(client.group[':groupId'].tags.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMonitorDepGraphKey() {
  return ['monitor', '/monitor/dep-graph', 'POST'] as const
}

export function usePostMonitorDepGraph<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.monitor)['dep-graph']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.monitor)['dep-graph']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMonitorDepGraphKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.monitor)['dep-graph']['$post']> },
      ) => parseResponse(client.monitor['dep-graph'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgKey() {
  return ['org', '/org', 'POST'] as const
}

export function usePostOrg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.org.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.org.$post> }) =>
        parseResponse(client.org.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgOrgIdKey() {
  return ['org', '/org/:orgId', 'DELETE'] as const
}

export function useDeleteOrgOrgId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgOrgIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org)[':orgId']['$delete']> },
      ) => parseResponse(client.org[':orgId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdAuditKey() {
  return ['org', '/org/:orgId/audit', 'POST'] as const
}

export function usePostOrgOrgIdAudit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['audit']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['audit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdAuditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org)[':orgId']['audit']['$post']> },
      ) => parseResponse(client.org[':orgId'].audit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdDependenciesKey() {
  return ['org', '/org/:orgId/dependencies', 'POST'] as const
}

export function usePostOrgOrgIdDependencies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['dependencies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['dependencies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdDependenciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org)[':orgId']['dependencies']['$post']> },
      ) => parseResponse(client.org[':orgId'].dependencies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdEntitlementEntitlementKeyKey(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>,
) {
  return ['org', '/org/:orgId/entitlement/:entitlementKey', args] as const
}

export function useGetOrgOrgIdEntitlementEntitlementKey<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>
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
        ? getGetOrgOrgIdEntitlementEntitlementKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.org[':orgId'].entitlement[':entitlementKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdEntitlementEntitlementKey<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>
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
        ? getGetOrgOrgIdEntitlementEntitlementKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.org)[':orgId']['entitlement'][':entitlementKey']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.org[':orgId'].entitlement[':entitlementKey'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrgOrgIdEntitlementsKey(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlements']['$get']>,
) {
  return ['org', '/org/:orgId/entitlements', args] as const
}

export function useGetOrgOrgIdEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['entitlements']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['entitlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org[':orgId'].entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdEntitlements<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['entitlements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['entitlements']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdEntitlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['entitlements']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org[':orgId'].entitlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgOrgIdIntegrationsKey(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations']['$get']>,
) {
  return ['org', '/org/:orgId/integrations', args] as const
}

export function useGetOrgOrgIdIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org[':orgId'].integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdIntegrations<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org[':orgId'].integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgOrgIdIntegrationsKey() {
  return ['org', '/org/:orgId/integrations', 'POST'] as const
}

export function usePostOrgOrgIdIntegrations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['integrations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['integrations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdIntegrationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org)[':orgId']['integrations']['$post']> },
      ) => parseResponse(client.org[':orgId'].integrations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrgOrgIdIntegrationsIntegrationIdKey() {
  return ['org', '/org/:orgId/integrations/:integrationId', 'PUT'] as const
}

export function usePutOrgOrgIdIntegrationsIntegrationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['integrations'][':integrationId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['integrations'][':integrationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgOrgIdIntegrationsIntegrationIdKey()
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
            (typeof client.org)[':orgId']['integrations'][':integrationId']['$put']
          >
        },
      ) =>
        parseResponse(client.org[':orgId'].integrations[':integrationId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgOrgIdIntegrationsIntegrationIdAuthenticationKey() {
  return ['org', '/org/:orgId/integrations/:integrationId/authentication', 'DELETE'] as const
}

export function useDeleteOrgOrgIdIntegrationsIntegrationIdAuthentication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgOrgIdIntegrationsIntegrationIdAuthenticationKey()
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
            (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].integrations[':integrationId'].authentication.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenKey() {
  return [
    'org',
    '/org/:orgId/integrations/:integrationId/authentication/provision-token',
    'POST',
  ] as const
}

export function usePostOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['provision-token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['provision-token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostOrgOrgIdIntegrationsIntegrationIdAuthenticationProvisionTokenKey()
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
            (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['provision-token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].integrations[':integrationId'].authentication[
            'provision-token'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenKey() {
  return [
    'org',
    '/org/:orgId/integrations/:integrationId/authentication/switch-token',
    'POST',
  ] as const
}

export function usePostOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['switch-token']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['switch-token']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdIntegrationsIntegrationIdAuthenticationSwitchTokenKey()
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
            (typeof client.org)[':orgId']['integrations'][':integrationId']['authentication']['switch-token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].integrations[':integrationId'].authentication['switch-token'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdIntegrationsIntegrationIdCloneKey() {
  return ['org', '/org/:orgId/integrations/:integrationId/clone', 'POST'] as const
}

export function usePostOrgOrgIdIntegrationsIntegrationIdClone<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['integrations'][':integrationId']['clone']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdIntegrationsIntegrationIdCloneKey()
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
            (typeof client.org)[':orgId']['integrations'][':integrationId']['clone']['$post']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].integrations[':integrationId'].clone.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdIntegrationsIntegrationIdImportKey() {
  return ['org', '/org/:orgId/integrations/:integrationId/import', 'POST'] as const
}

export function usePostOrgOrgIdIntegrationsIntegrationIdImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['import']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['integrations'][':integrationId']['import']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdIntegrationsIntegrationIdImportKey()
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
            (typeof client.org)[':orgId']['integrations'][':integrationId']['import']['$post']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].integrations[':integrationId'].import.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdIntegrationsIntegrationIdImportJobIdKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
  >,
) {
  return ['org', '/org/:orgId/integrations/:integrationId/import/:jobId', args] as const
}

export function useGetOrgOrgIdIntegrationsIntegrationIdImportJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
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
        ? getGetOrgOrgIdIntegrationsIntegrationIdImportJobIdKey(args)
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
                (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
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
          client.org[':orgId'].integrations[':integrationId'].import[':jobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdIntegrationsIntegrationIdImportJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
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
        ? getGetOrgOrgIdIntegrationsIntegrationIdImportJobIdKey(args)
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
                (typeof client.org)[':orgId']['integrations'][':integrationId']['import'][':jobId']['$get']
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
          client.org[':orgId'].integrations[':integrationId'].import[':jobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrgOrgIdIntegrationsIntegrationIdSettingsKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
  >,
) {
  return ['org', '/org/:orgId/integrations/:integrationId/settings', args] as const
}

export function useGetOrgOrgIdIntegrationsIntegrationIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
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
        ? getGetOrgOrgIdIntegrationsIntegrationIdSettingsKey(args)
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
                (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
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
          client.org[':orgId'].integrations[':integrationId'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdIntegrationsIntegrationIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
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
        ? getGetOrgOrgIdIntegrationsIntegrationIdSettingsKey(args)
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
                (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$get']
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
          client.org[':orgId'].integrations[':integrationId'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrgOrgIdIntegrationsIntegrationIdSettingsKey() {
  return ['org', '/org/:orgId/integrations/:integrationId/settings', 'PUT'] as const
}

export function usePutOrgOrgIdIntegrationsIntegrationIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgOrgIdIntegrationsIntegrationIdSettingsKey()
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
            (typeof client.org)[':orgId']['integrations'][':integrationId']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].integrations[':integrationId'].settings.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdIntegrationsTypeKey(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>,
) {
  return ['org', '/org/:orgId/integrations/:type', args] as const
}

export function useGetOrgOrgIdIntegrationsType<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdIntegrationsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org[':orgId'].integrations[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdIntegrationsType<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdIntegrationsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['integrations'][':type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org[':orgId'].integrations[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgOrgIdInviteKey() {
  return ['org', '/org/:orgId/invite', 'POST'] as const
}

export function usePostOrgOrgIdInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['invite']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org)[':orgId']['invite']['$post']> },
      ) => parseResponse(client.org[':orgId'].invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdLicensesKey() {
  return ['org', '/org/:orgId/licenses', 'POST'] as const
}

export function usePostOrgOrgIdLicenses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['licenses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['licenses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdLicensesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org)[':orgId']['licenses']['$post']> },
      ) => parseResponse(client.org[':orgId'].licenses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdMembersKey(
  args: InferRequestType<(typeof client.org)[':orgId']['members']['$get']>,
) {
  return ['org', '/org/:orgId/members', args] as const
}

export function useGetOrgOrgIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org[':orgId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org[':orgId'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrgOrgIdMembersUpdateUserIdKey() {
  return ['org', '/org/:orgId/members/update/:userId', 'PUT'] as const
}

export function usePutOrgOrgIdMembersUpdateUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['members']['update'][':userId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['members']['update'][':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgOrgIdMembersUpdateUserIdKey()
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
            (typeof client.org)[':orgId']['members']['update'][':userId']['$put']
          >
        },
      ) => parseResponse(client.org[':orgId'].members.update[':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrgOrgIdMembersUserIdKey() {
  return ['org', '/org/:orgId/members/:userId', 'PUT'] as const
}

export function usePutOrgOrgIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['members'][':userId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['members'][':userId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgOrgIdMembersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.org)[':orgId']['members'][':userId']['$put']> },
      ) => parseResponse(client.org[':orgId'].members[':userId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgOrgIdMembersUserIdKey() {
  return ['org', '/org/:orgId/members/:userId', 'DELETE'] as const
}

export function useDeleteOrgOrgIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['members'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['members'][':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgOrgIdMembersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.org)[':orgId']['members'][':userId']['$delete']>
        },
      ) => parseResponse(client.org[':orgId'].members[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdNotificationSettingsKey(
  args: InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$get']>,
) {
  return ['org', '/org/:orgId/notification-settings', args] as const
}

export function useGetOrgOrgIdNotificationSettings<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdNotificationSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org[':orgId']['notification-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdNotificationSettings<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdNotificationSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org[':orgId']['notification-settings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrgOrgIdNotificationSettingsKey() {
  return ['org', '/org/:orgId/notification-settings', 'PUT'] as const
}

export function usePutOrgOrgIdNotificationSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['notification-settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgOrgIdNotificationSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.org)[':orgId']['notification-settings']['$put']>
        },
      ) => parseResponse(client.org[':orgId']['notification-settings'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdProjectProjectIdKey(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>,
) {
  return ['org', '/org/:orgId/project/:projectId', args] as const
}

export function useGetOrgOrgIdProjectProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdProjectProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org[':orgId'].project[':projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdProjectProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdProjectProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org[':orgId'].project[':projectId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrgOrgIdProjectProjectIdKey() {
  return ['org', '/org/:orgId/project/:projectId', 'PUT'] as const
}

export function usePutOrgOrgIdProjectProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgOrgIdProjectProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$put']>
        },
      ) => parseResponse(client.org[':orgId'].project[':projectId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgOrgIdProjectProjectIdKey() {
  return ['org', '/org/:orgId/project/:projectId', 'DELETE'] as const
}

export function useDeleteOrgOrgIdProjectProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgOrgIdProjectProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['$delete']>
        },
      ) => parseResponse(client.org[':orgId'].project[':projectId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdProjectProjectIdActivateKey() {
  return ['org', '/org/:orgId/project/:projectId/activate', 'POST'] as const
}

export function usePostOrgOrgIdProjectProjectIdActivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['activate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['activate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdProjectProjectIdActivateKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['activate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].project[':projectId'].activate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdProjectProjectIdAggregatedIssuesKey() {
  return ['org', '/org/:orgId/project/:projectId/aggregated-issues', 'POST'] as const
}

export function usePostOrgOrgIdProjectProjectIdAggregatedIssues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['aggregated-issues']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['aggregated-issues']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdProjectProjectIdAggregatedIssuesKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['aggregated-issues']['$post']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].project[':projectId']['aggregated-issues'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdProjectProjectIdAttributesKey() {
  return ['org', '/org/:orgId/project/:projectId/attributes', 'POST'] as const
}

export function usePostOrgOrgIdProjectProjectIdAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['attributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['attributes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdProjectProjectIdAttributesKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['attributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].project[':projectId'].attributes.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdProjectProjectIdDeactivateKey() {
  return ['org', '/org/:orgId/project/:projectId/deactivate', 'POST'] as const
}

export function usePostOrgOrgIdProjectProjectIdDeactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['deactivate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdProjectProjectIdDeactivateKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['deactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].project[':projectId'].deactivate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdProjectProjectIdDepGraphKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
  >,
) {
  return ['org', '/org/:orgId/project/:projectId/dep-graph', args] as const
}

export function useGetOrgOrgIdProjectProjectIdDepGraph<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
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
        ? getGetOrgOrgIdProjectProjectIdDepGraphKey(args)
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
                (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
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
          client.org[':orgId'].project[':projectId']['dep-graph'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdProjectProjectIdDepGraph<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
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
        ? getGetOrgOrgIdProjectProjectIdDepGraphKey(args)
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
                (typeof client.org)[':orgId']['project'][':projectId']['dep-graph']['$get']
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
          client.org[':orgId'].project[':projectId']['dep-graph'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrgOrgIdProjectProjectIdHistoryKey() {
  return ['org', '/org/:orgId/project/:projectId/history', 'POST'] as const
}

export function usePostOrgOrgIdProjectProjectIdHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['history']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['history']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdProjectProjectIdHistoryKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['history']['$post']
          >
        },
      ) =>
        parseResponse(client.org[':orgId'].project[':projectId'].history.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesKey() {
  return [
    'org',
    '/org/:orgId/project/:projectId/history/:snapshotId/aggregated-issues',
    'POST',
  ] as const
}

export function usePostOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssues<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['aggregated-issues']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['aggregated-issues']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['aggregated-issues']['$post']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].project[':projectId'].history[':snapshotId'][
            'aggregated-issues'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
  >,
) {
  return [
    'org',
    '/org/:orgId/project/:projectId/history/:snapshotId/issue/:issueId/paths',
    args,
  ] as const
}

export function useGetOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPaths<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
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
        ? getGetOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsKey(args)
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
                (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
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
          client.org[':orgId'].project[':projectId'].history[':snapshotId'].issue[
            ':issueId'
          ].paths.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPaths<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
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
        ? getGetOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsKey(args)
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
                (typeof client.org)[':orgId']['project'][':projectId']['history'][':snapshotId']['issue'][':issueId']['paths']['$get']
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
          client.org[':orgId'].project[':projectId'].history[':snapshotId'].issue[
            ':issueId'
          ].paths.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrgOrgIdProjectProjectIdIgnoreIssueIdKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
  >,
) {
  return ['org', '/org/:orgId/project/:projectId/ignore/:issueId', args] as const
}

export function useGetOrgOrgIdProjectProjectIdIgnoreIssueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
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
        ? getGetOrgOrgIdProjectProjectIdIgnoreIssueIdKey(args)
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
                (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
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
          client.org[':orgId'].project[':projectId'].ignore[':issueId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdProjectProjectIdIgnoreIssueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
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
        ? getGetOrgOrgIdProjectProjectIdIgnoreIssueIdKey(args)
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
                (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$get']
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
          client.org[':orgId'].project[':projectId'].ignore[':issueId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrgOrgIdProjectProjectIdIgnoreIssueIdKey() {
  return ['org', '/org/:orgId/project/:projectId/ignore/:issueId', 'PUT'] as const
}

export function usePutOrgOrgIdProjectProjectIdIgnoreIssueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgOrgIdProjectProjectIdIgnoreIssueIdKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].project[':projectId'].ignore[':issueId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdProjectProjectIdIgnoreIssueIdKey() {
  return ['org', '/org/:orgId/project/:projectId/ignore/:issueId', 'POST'] as const
}

export function usePostOrgOrgIdProjectProjectIdIgnoreIssueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdProjectProjectIdIgnoreIssueIdKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].project[':projectId'].ignore[':issueId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgOrgIdProjectProjectIdIgnoreIssueIdKey() {
  return ['org', '/org/:orgId/project/:projectId/ignore/:issueId', 'DELETE'] as const
}

export function useDeleteOrgOrgIdProjectProjectIdIgnoreIssueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgOrgIdProjectProjectIdIgnoreIssueIdKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['ignore'][':issueId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].project[':projectId'].ignore[':issueId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdProjectProjectIdIgnoresKey(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>,
) {
  return ['org', '/org/:orgId/project/:projectId/ignores', args] as const
}

export function useGetOrgOrgIdProjectProjectIdIgnores<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>
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
        ? getGetOrgOrgIdProjectProjectIdIgnoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org[':orgId'].project[':projectId'].ignores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdProjectProjectIdIgnores<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>
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
        ? getGetOrgOrgIdProjectProjectIdIgnoresKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['ignores']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org[':orgId'].project[':projectId'].ignores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueKey() {
  return ['org', '/org/:orgId/project/:projectId/issue/:issueId/jira-issue', 'POST'] as const
}

export function usePostOrgOrgIdProjectProjectIdIssueIssueIdJiraIssue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['jira-issue']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['jira-issue']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['jira-issue']['$post']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].project[':projectId'].issue[':issueId']['jira-issue'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdProjectProjectIdIssueIssueIdPathsKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
  >,
) {
  return ['org', '/org/:orgId/project/:projectId/issue/:issueId/paths', args] as const
}

export function useGetOrgOrgIdProjectProjectIdIssueIssueIdPaths<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
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
        ? getGetOrgOrgIdProjectProjectIdIssueIssueIdPathsKey(args)
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
                (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
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
          client.org[':orgId'].project[':projectId'].issue[':issueId'].paths.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdProjectProjectIdIssueIssueIdPaths<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
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
        ? getGetOrgOrgIdProjectProjectIdIssueIssueIdPathsKey(args)
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
                (typeof client.org)[':orgId']['project'][':projectId']['issue'][':issueId']['paths']['$get']
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
          client.org[':orgId'].project[':projectId'].issue[':issueId'].paths.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetOrgOrgIdProjectProjectIdJiraIssuesKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
  >,
) {
  return ['org', '/org/:orgId/project/:projectId/jira-issues', args] as const
}

export function useGetOrgOrgIdProjectProjectIdJiraIssues<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
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
        ? getGetOrgOrgIdProjectProjectIdJiraIssuesKey(args)
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
                (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
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
          client.org[':orgId'].project[':projectId']['jira-issues'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdProjectProjectIdJiraIssues<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
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
        ? getGetOrgOrgIdProjectProjectIdJiraIssuesKey(args)
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
                (typeof client.org)[':orgId']['project'][':projectId']['jira-issues']['$get']
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
          client.org[':orgId'].project[':projectId']['jira-issues'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrgOrgIdProjectProjectIdMoveKey() {
  return ['org', '/org/:orgId/project/:projectId/move', 'PUT'] as const
}

export function usePutOrgOrgIdProjectProjectIdMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['move']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['move']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgOrgIdProjectProjectIdMoveKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['move']['$put']
          >
        },
      ) => parseResponse(client.org[':orgId'].project[':projectId'].move.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdProjectProjectIdSettingsKey(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']
  >,
) {
  return ['org', '/org/:orgId/project/:projectId/settings', args] as const
}

export function useGetOrgOrgIdProjectProjectIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']>
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
        ? getGetOrgOrgIdProjectProjectIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.org[':orgId'].project[':projectId'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdProjectProjectIdSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']>
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
        ? getGetOrgOrgIdProjectProjectIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.org[':orgId'].project[':projectId'].settings.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutOrgOrgIdProjectProjectIdSettingsKey() {
  return ['org', '/org/:orgId/project/:projectId/settings', 'PUT'] as const
}

export function usePutOrgOrgIdProjectProjectIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgOrgIdProjectProjectIdSettingsKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['settings']['$put']
          >
        },
      ) =>
        parseResponse(client.org[':orgId'].project[':projectId'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgOrgIdProjectProjectIdSettingsKey() {
  return ['org', '/org/:orgId/project/:projectId/settings', 'DELETE'] as const
}

export function useDeleteOrgOrgIdProjectProjectIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.org)[':orgId']['project'][':projectId']['settings']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['settings']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgOrgIdProjectProjectIdSettingsKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['settings']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].project[':projectId'].settings.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdProjectProjectIdTagsKey() {
  return ['org', '/org/:orgId/project/:projectId/tags', 'POST'] as const
}

export function usePostOrgOrgIdProjectProjectIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['project'][':projectId']['tags']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['project'][':projectId']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdProjectProjectIdTagsKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['tags']['$post']
          >
        },
      ) => parseResponse(client.org[':orgId'].project[':projectId'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdProjectProjectIdTagsRemoveKey() {
  return ['org', '/org/:orgId/project/:projectId/tags/remove', 'POST'] as const
}

export function usePostOrgOrgIdProjectProjectIdTagsRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.org)[':orgId']['project'][':projectId']['tags']['remove']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.org)[':orgId']['project'][':projectId']['tags']['remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdProjectProjectIdTagsRemoveKey()
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
            (typeof client.org)[':orgId']['project'][':projectId']['tags']['remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client.org[':orgId'].project[':projectId'].tags.remove.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdProjectsKey() {
  return ['org', '/org/:orgId/projects', 'POST'] as const
}

export function usePostOrgOrgIdProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['projects']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['projects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org)[':orgId']['projects']['$post']> },
      ) => parseResponse(client.org[':orgId'].projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdProvisionKey(
  args: InferRequestType<(typeof client.org)[':orgId']['provision']['$get']>,
) {
  return ['org', '/org/:orgId/provision', args] as const
}

export function useGetOrgOrgIdProvision<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['provision']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdProvisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org[':orgId'].provision.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdProvision<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['provision']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdProvisionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org[':orgId'].provision.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgOrgIdProvisionKey() {
  return ['org', '/org/:orgId/provision', 'POST'] as const
}

export function usePostOrgOrgIdProvision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['provision']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdProvisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org)[':orgId']['provision']['$post']> },
      ) => parseResponse(client.org[':orgId'].provision.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgOrgIdProvisionKey() {
  return ['org', '/org/:orgId/provision', 'DELETE'] as const
}

export function useDeleteOrgOrgIdProvision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['provision']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['provision']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgOrgIdProvisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org)[':orgId']['provision']['$delete']> },
      ) => parseResponse(client.org[':orgId'].provision.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdSettingsKey(
  args: InferRequestType<(typeof client.org)[':orgId']['settings']['$get']>,
) {
  return ['org', '/org/:orgId/settings', args] as const
}

export function useGetOrgOrgIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org[':orgId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdSettings<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['settings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org[':orgId'].settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrgOrgIdSettingsKey() {
  return ['org', '/org/:orgId/settings', 'PUT'] as const
}

export function usePutOrgOrgIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org)[':orgId']['settings']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgOrgIdSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org)[':orgId']['settings']['$put']> },
      ) => parseResponse(client.org[':orgId'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdWebhooksKey(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks']['$get']>,
) {
  return ['org', '/org/:orgId/webhooks', args] as const
}

export function useGetOrgOrgIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org[':orgId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org[':orgId'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgOrgIdWebhooksKey() {
  return ['org', '/org/:orgId/webhooks', 'POST'] as const
}

export function usePostOrgOrgIdWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org)[':orgId']['webhooks']['$post']> },
      ) => parseResponse(client.org[':orgId'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgOrgIdWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>,
) {
  return ['org', '/org/:orgId/webhooks/:webhookId', args] as const
}

export function useGetOrgOrgIdWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org[':orgId'].webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgOrgIdWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgOrgIdWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.org[':orgId'].webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrgOrgIdWebhooksWebhookIdKey() {
  return ['org', '/org/:orgId/webhooks/:webhookId', 'DELETE'] as const
}

export function useDeleteOrgOrgIdWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgOrgIdWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['$delete']>
        },
      ) => parseResponse(client.org[':orgId'].webhooks[':webhookId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrgOrgIdWebhooksWebhookIdPingKey() {
  return ['org', '/org/:orgId/webhooks/:webhookId/ping', 'POST'] as const
}

export function usePostOrgOrgIdWebhooksWebhookIdPing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['ping']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org)[':orgId']['webhooks'][':webhookId']['ping']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgOrgIdWebhooksWebhookIdPingKey()
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
            (typeof client.org)[':orgId']['webhooks'][':webhookId']['ping']['$post']
          >
        },
      ) =>
        parseResponse(client.org[':orgId'].webhooks[':webhookId'].ping.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsKey() {
  return ['orgs', '/orgs'] as const
}

export function useGetOrgs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetOrgsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetOrgsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReportingCountsIssuesKey() {
  return ['reporting', '/reporting/counts/issues', 'POST'] as const
}

export function usePostReportingCountsIssues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reporting.counts.issues.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.reporting.counts.issues.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportingCountsIssuesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.reporting.counts.issues.$post> },
      ) => parseResponse(client.reporting.counts.issues.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportingCountsIssuesLatestKey() {
  return ['reporting', '/reporting/counts/issues/latest', 'POST'] as const
}

export function usePostReportingCountsIssuesLatest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.reporting.counts.issues.latest.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.reporting.counts.issues.latest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportingCountsIssuesLatestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.reporting.counts.issues.latest.$post> },
      ) => parseResponse(client.reporting.counts.issues.latest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportingCountsProjectsKey() {
  return ['reporting', '/reporting/counts/projects', 'POST'] as const
}

export function usePostReportingCountsProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reporting.counts.projects.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.reporting.counts.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportingCountsProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.reporting.counts.projects.$post> },
      ) => parseResponse(client.reporting.counts.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportingCountsProjectsLatestKey() {
  return ['reporting', '/reporting/counts/projects/latest', 'POST'] as const
}

export function usePostReportingCountsProjectsLatest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.reporting.counts.projects.latest.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.reporting.counts.projects.latest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportingCountsProjectsLatestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.reporting.counts.projects.latest.$post> },
      ) => parseResponse(client.reporting.counts.projects.latest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportingCountsTestsKey() {
  return ['reporting', '/reporting/counts/tests', 'POST'] as const
}

export function usePostReportingCountsTests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reporting.counts.tests.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.reporting.counts.tests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportingCountsTestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.reporting.counts.tests.$post> },
      ) => parseResponse(client.reporting.counts.tests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportingIssuesIndexKey() {
  return ['reporting', '/reporting/issues/', 'POST'] as const
}

export function usePostReportingIssuesIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reporting.issues.index.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.reporting.issues.index.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportingIssuesIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.reporting.issues.index.$post> },
      ) => parseResponse(client.reporting.issues.index.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportingIssuesLatestKey() {
  return ['reporting', '/reporting/issues/latest', 'POST'] as const
}

export function usePostReportingIssuesLatest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.reporting.issues.latest.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.reporting.issues.latest.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportingIssuesLatestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.reporting.issues.latest.$post> },
      ) => parseResponse(client.reporting.issues.latest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTestComposerKey() {
  return ['test', '/test/composer', 'POST'] as const
}

export function usePostTestComposer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.composer.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.test.composer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestComposerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.test.composer.$post> }) =>
        parseResponse(client.test.composer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTestDepGraphKey() {
  return ['test', '/test/dep-graph', 'POST'] as const
}

export function usePostTestDepGraph<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.test)['dep-graph']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.test)['dep-graph']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestDepGraphKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.test)['dep-graph']['$post']> },
      ) => parseResponse(client.test['dep-graph'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTestGolangdepKey() {
  return ['test', '/test/golangdep', 'POST'] as const
}

export function usePostTestGolangdep<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.golangdep.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.test.golangdep.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestGolangdepKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.test.golangdep.$post> }) =>
        parseResponse(client.test.golangdep.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTestGovendorKey() {
  return ['test', '/test/govendor', 'POST'] as const
}

export function usePostTestGovendor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.govendor.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.test.govendor.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestGovendorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.test.govendor.$post> }) =>
        parseResponse(client.test.govendor.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTestGradleKey() {
  return ['test', '/test/gradle', 'POST'] as const
}

export function usePostTestGradle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.gradle.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.test.gradle.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestGradleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.test.gradle.$post> }) =>
        parseResponse(client.test.gradle.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTestGradleGroupNameVersionKey(
  args: InferRequestType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>,
) {
  return ['test', '/test/gradle/:group/:name/:version', args] as const
}

export function useGetTestGradleGroupNameVersion<TError = unknown>(
  args: InferRequestType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTestGradleGroupNameVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.test.gradle[':group'][':name'][':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestGradleGroupNameVersion<TError = unknown>(
  args: InferRequestType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTestGradleGroupNameVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.gradle)[':group'][':name'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.test.gradle[':group'][':name'][':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTestMavenKey() {
  return ['test', '/test/maven', 'POST'] as const
}

export function usePostTestMaven<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.maven.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.test.maven.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestMavenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.test.maven.$post> }) =>
        parseResponse(client.test.maven.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTestMavenGroupIdArtifactIdVersionKey(
  args: InferRequestType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>,
) {
  return ['test', '/test/maven/:groupId/:artifactId/:version', args] as const
}

export function useGetTestMavenGroupIdArtifactIdVersion<TError = unknown>(
  args: InferRequestType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>
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
        ? getGetTestMavenGroupIdArtifactIdVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.test.maven[':groupId'][':artifactId'][':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestMavenGroupIdArtifactIdVersion<TError = unknown>(
  args: InferRequestType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>
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
        ? getGetTestMavenGroupIdArtifactIdVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.test.maven)[':groupId'][':artifactId'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.test.maven[':groupId'][':artifactId'][':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTestNpmKey() {
  return ['test', '/test/npm', 'POST'] as const
}

export function usePostTestNpm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.npm.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.test.npm.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestNpmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.test.npm.$post> }) =>
        parseResponse(client.test.npm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTestNpmPackageNameVersionKey(
  args: InferRequestType<(typeof client.test.npm)[':packageName'][':version']['$get']>,
) {
  return ['test', '/test/npm/:packageName/:version', args] as const
}

export function useGetTestNpmPackageNameVersion<TError = unknown>(
  args: InferRequestType<(typeof client.test.npm)[':packageName'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.npm)[':packageName'][':version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTestNpmPackageNameVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.npm)[':packageName'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.test.npm[':packageName'][':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestNpmPackageNameVersion<TError = unknown>(
  args: InferRequestType<(typeof client.test.npm)[':packageName'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.npm)[':packageName'][':version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTestNpmPackageNameVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.npm)[':packageName'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.test.npm[':packageName'][':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTestPipKey() {
  return ['test', '/test/pip', 'POST'] as const
}

export function usePostTestPip<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.pip.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.test.pip.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestPipKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.test.pip.$post> }) =>
        parseResponse(client.test.pip.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTestPipPackageNameVersionKey(
  args: InferRequestType<(typeof client.test.pip)[':packageName'][':version']['$get']>,
) {
  return ['test', '/test/pip/:packageName/:version', args] as const
}

export function useGetTestPipPackageNameVersion<TError = unknown>(
  args: InferRequestType<(typeof client.test.pip)[':packageName'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.pip)[':packageName'][':version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTestPipPackageNameVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.pip)[':packageName'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.test.pip[':packageName'][':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestPipPackageNameVersion<TError = unknown>(
  args: InferRequestType<(typeof client.test.pip)[':packageName'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.pip)[':packageName'][':version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTestPipPackageNameVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.pip)[':packageName'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.test.pip[':packageName'][':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTestRubygemsKey() {
  return ['test', '/test/rubygems', 'POST'] as const
}

export function usePostTestRubygems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.rubygems.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.test.rubygems.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestRubygemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.test.rubygems.$post> }) =>
        parseResponse(client.test.rubygems.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTestRubygemsGemNameVersionKey(
  args: InferRequestType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>,
) {
  return ['test', '/test/rubygems/:gemName/:version', args] as const
}

export function useGetTestRubygemsGemNameVersion<TError = unknown>(
  args: InferRequestType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTestRubygemsGemNameVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.test.rubygems[':gemName'][':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestRubygemsGemNameVersion<TError = unknown>(
  args: InferRequestType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTestRubygemsGemNameVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.test.rubygems)[':gemName'][':version']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.test.rubygems[':gemName'][':version'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTestSbtKey() {
  return ['test', '/test/sbt', 'POST'] as const
}

export function usePostTestSbt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.sbt.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.test.sbt.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestSbtKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.test.sbt.$post> }) =>
        parseResponse(client.test.sbt.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTestSbtGroupIdArtifactIdVersionKey(
  args: InferRequestType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>,
) {
  return ['test', '/test/sbt/:groupId/:artifactId/:version', args] as const
}

export function useGetTestSbtGroupIdArtifactIdVersion<TError = unknown>(
  args: InferRequestType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>
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
        ? getGetTestSbtGroupIdArtifactIdVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.test.sbt[':groupId'][':artifactId'][':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTestSbtGroupIdArtifactIdVersion<TError = unknown>(
  args: InferRequestType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>
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
        ? getGetTestSbtGroupIdArtifactIdVersionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.test.sbt)[':groupId'][':artifactId'][':version']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.test.sbt[':groupId'][':artifactId'][':version'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostTestYarnKey() {
  return ['test', '/test/yarn', 'POST'] as const
}

export function usePostTestYarn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.test.yarn.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.test.yarn.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTestYarnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.test.yarn.$post> }) =>
        parseResponse(client.test.yarn.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserMeKey() {
  return ['user', '/user/me'] as const
}

export function useGetUserMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserMe<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.me.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserMeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.me.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.me.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserMeNotificationSettingsOrgOrgIdKey(
  args: InferRequestType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>,
) {
  return ['user', '/user/me/notification-settings/org/:orgId', args] as const
}

export function useGetUserMeNotificationSettingsOrgOrgId<TError = unknown>(
  args: InferRequestType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>
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
        ? getGetUserMeNotificationSettingsOrgOrgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user.me['notification-settings'].org[':orgId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserMeNotificationSettingsOrgOrgId<TError = unknown>(
  args: InferRequestType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>
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
        ? getGetUserMeNotificationSettingsOrgOrgIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.user.me['notification-settings'].org[':orgId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserMeNotificationSettingsOrgOrgIdKey() {
  return ['user', '/user/me/notification-settings/org/:orgId', 'PUT'] as const
}

export function usePutUserMeNotificationSettingsOrgOrgId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.me)['notification-settings']['org'][':orgId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserMeNotificationSettingsOrgOrgIdKey()
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
            (typeof client.user.me)['notification-settings']['org'][':orgId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.user.me['notification-settings'].org[':orgId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserMeNotificationSettingsOrgOrgIdProjectProjectIdKey(
  args: InferRequestType<
    (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
  >,
) {
  return ['user', '/user/me/notification-settings/org/:orgId/project/:projectId', args] as const
}

export function useGetUserMeNotificationSettingsOrgOrgIdProjectProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
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
        ? getGetUserMeNotificationSettingsOrgOrgIdProjectProjectIdKey(args)
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
                (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
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
          client.user.me['notification-settings'].org[':orgId'].project[':projectId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserMeNotificationSettingsOrgOrgIdProjectProjectId<TError = unknown>(
  args: InferRequestType<
    (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
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
        ? getGetUserMeNotificationSettingsOrgOrgIdProjectProjectIdKey(args)
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
                (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$get']
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
          client.user.me['notification-settings'].org[':orgId'].project[':projectId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutUserMeNotificationSettingsOrgOrgIdProjectProjectIdKey() {
  return ['user', '/user/me/notification-settings/org/:orgId/project/:projectId', 'PUT'] as const
}

export function usePutUserMeNotificationSettingsOrgOrgIdProjectProjectId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserMeNotificationSettingsOrgOrgIdProjectProjectIdKey()
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
            (typeof client.user.me)['notification-settings']['org'][':orgId']['project'][':projectId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.user.me['notification-settings'].org[':orgId'].project[':projectId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserUserIdKey(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
) {
  return ['user', '/user/:userId', args] as const
}

export function useGetUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserUserId<TError = unknown>(
  args: InferRequestType<(typeof client.user)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
