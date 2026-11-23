import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccessControlKey() {
  return ['access-control'] as const
}

export function getAdminKey() {
  return ['admin'] as const
}

export function getAnnotationsKey() {
  return ['annotations'] as const
}

export function getAnonymousKey() {
  return ['anonymous'] as const
}

export function getCloudmigrationKey() {
  return ['cloudmigration'] as const
}

export function getConvertKey() {
  return ['convert'] as const
}

export function getDashboardKey() {
  return ['dashboard'] as const
}

export function getDashboardsKey() {
  return ['dashboards'] as const
}

export function getDatasourcesKey() {
  return ['datasources'] as const
}

export function getDsKey() {
  return ['ds'] as const
}

export function getFoldersKey() {
  return ['folders'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getLibraryElementsKey() {
  return ['library-elements'] as const
}

export function getLicensingKey() {
  return ['licensing'] as const
}

export function getLogoutKey() {
  return ['logout'] as const
}

export function getOrgKey() {
  return ['org'] as const
}

export function getOrgsKey() {
  return ['orgs'] as const
}

export function getPlaylistsKey() {
  return ['playlists'] as const
}

export function getPublicKey() {
  return ['public'] as const
}

export function getQueryHistoryKey() {
  return ['query-history'] as const
}

export function getRecordingRulesKey() {
  return ['recording-rules'] as const
}

export function getReportsKey() {
  return ['reports'] as const
}

export function getSamlKey() {
  return ['saml'] as const
}

export function getSearchKey() {
  return ['search'] as const
}

export function getServiceaccountsKey() {
  return ['serviceaccounts'] as const
}

export function getSigningKeysKey() {
  return ['signing-keys'] as const
}

export function getSnapshotKey() {
  return ['snapshot'] as const
}

export function getSnapshotsKey() {
  return ['snapshots'] as const
}

export function getSnapshotsDeleteKey() {
  return ['snapshots-delete'] as const
}

export function getTeamsKey() {
  return ['teams'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getV1Key() {
  return ['v1'] as const
}

export function getGetAccessControlRolesKey(
  args: InferRequestType<(typeof client)['access-control']['roles']['$get']>,
) {
  return ['access-control', '/access-control/roles', args] as const
}

export function useGetAccessControlRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['access-control']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-control']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessControlRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-control']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['access-control'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessControlRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['access-control']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-control']['roles']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessControlRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-control']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['access-control'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccessControlRolesKey() {
  return ['access-control', '/access-control/roles', 'POST'] as const
}

export function usePostAccessControlRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control']['roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-control']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessControlRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['access-control']['roles']['$post']> },
      ) => parseResponse(client['access-control'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccessControlRolesRoleUIDKey(
  args: InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$get']>,
) {
  return ['access-control', '/access-control/roles/:roleUID', args] as const
}

export function useGetAccessControlRolesRoleUID<TError = unknown>(
  args: InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessControlRolesRoleUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['access-control'].roles[':roleUID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessControlRolesRoleUID<TError = unknown>(
  args: InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessControlRolesRoleUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['access-control'].roles[':roleUID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccessControlRolesRoleUIDKey() {
  return ['access-control', '/access-control/roles/:roleUID', 'PUT'] as const
}

export function usePutAccessControlRolesRoleUID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccessControlRolesRoleUIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$put']>
        },
      ) => parseResponse(client['access-control'].roles[':roleUID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccessControlRolesRoleUIDKey() {
  return ['access-control', '/access-control/roles/:roleUID', 'DELETE'] as const
}

export function useDeleteAccessControlRolesRoleUID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccessControlRolesRoleUIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$delete']>
        },
      ) => parseResponse(client['access-control'].roles[':roleUID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccessControlRolesRoleUIDAssignmentsKey(
  args: InferRequestType<
    (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
  >,
) {
  return ['access-control', '/access-control/roles/:roleUID/assignments', args] as const
}

export function useGetAccessControlRolesRoleUIDAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
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
        ? getGetAccessControlRolesRoleUIDAssignmentsKey(args)
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
                (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
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
          client['access-control'].roles[':roleUID'].assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessControlRolesRoleUIDAssignments<TError = unknown>(
  args: InferRequestType<
    (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
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
        ? getGetAccessControlRolesRoleUIDAssignmentsKey(args)
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
                (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
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
          client['access-control'].roles[':roleUID'].assignments.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccessControlRolesRoleUIDAssignmentsKey() {
  return ['access-control', '/access-control/roles/:roleUID/assignments', 'PUT'] as const
}

export function usePutAccessControlRolesRoleUIDAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['access-control']['roles'][':roleUID']['assignments']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['assignments']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccessControlRolesRoleUIDAssignmentsKey()
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
            (typeof client)['access-control']['roles'][':roleUID']['assignments']['$put']
          >
        },
      ) =>
        parseResponse(
          client['access-control'].roles[':roleUID'].assignments.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccessControlStatusKey() {
  return ['access-control', '/access-control/status'] as const
}

export function useGetAccessControlStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control']['status']['$get']>>
        >
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
        ? getGetAccessControlStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-control']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['access-control'].status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessControlStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control']['status']['$get']>>
        >
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
        ? getGetAccessControlStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['access-control']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['access-control'].status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccessControlTeamsRolesSearchKey() {
  return ['access-control', '/access-control/teams/roles/search', 'POST'] as const
}

export function usePostAccessControlTeamsRolesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['access-control']['teams']['roles']['search']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-control']['teams']['roles']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessControlTeamsRolesSearchKey()
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
            (typeof client)['access-control']['teams']['roles']['search']['$post']
          >
        },
      ) => parseResponse(client['access-control'].teams.roles.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccessControlTeamsTeamIdRolesKey(
  args: InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>,
) {
  return ['access-control', '/access-control/teams/:teamId/roles', args] as const
}

export function useGetAccessControlTeamsTeamIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessControlTeamsTeamIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['access-control'].teams[':teamId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessControlTeamsTeamIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessControlTeamsTeamIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['access-control'].teams[':teamId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccessControlTeamsTeamIdRolesKey() {
  return ['access-control', '/access-control/teams/:teamId/roles', 'PUT'] as const
}

export function usePutAccessControlTeamsTeamIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccessControlTeamsTeamIdRolesKey()
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
            (typeof client)['access-control']['teams'][':teamId']['roles']['$put']
          >
        },
      ) => parseResponse(client['access-control'].teams[':teamId'].roles.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccessControlTeamsTeamIdRolesKey() {
  return ['access-control', '/access-control/teams/:teamId/roles', 'POST'] as const
}

export function usePostAccessControlTeamsTeamIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessControlTeamsTeamIdRolesKey()
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
            (typeof client)['access-control']['teams'][':teamId']['roles']['$post']
          >
        },
      ) => parseResponse(client['access-control'].teams[':teamId'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccessControlTeamsTeamIdRolesRoleUIDKey() {
  return ['access-control', '/access-control/teams/:teamId/roles/:roleUID', 'DELETE'] as const
}

export function useDeleteAccessControlTeamsTeamIdRolesRoleUID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['access-control']['teams'][':teamId']['roles'][':roleUID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['access-control']['teams'][':teamId']['roles'][':roleUID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccessControlTeamsTeamIdRolesRoleUIDKey()
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
            (typeof client)['access-control']['teams'][':teamId']['roles'][':roleUID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['access-control'].teams[':teamId'].roles[':roleUID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccessControlUsersRolesSearchKey() {
  return ['access-control', '/access-control/users/roles/search', 'POST'] as const
}

export function usePostAccessControlUsersRolesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['access-control']['users']['roles']['search']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-control']['users']['roles']['search']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessControlUsersRolesSearchKey()
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
            (typeof client)['access-control']['users']['roles']['search']['$post']
          >
        },
      ) => parseResponse(client['access-control'].users.roles.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccessControlUsersUserIdRolesKey(
  args: InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>,
) {
  return ['access-control', '/access-control/users/:userId/roles', args] as const
}

export function useGetAccessControlUsersUserIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessControlUsersUserIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['access-control'].users[':userId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessControlUsersUserIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessControlUsersUserIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['access-control'].users[':userId'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccessControlUsersUserIdRolesKey() {
  return ['access-control', '/access-control/users/:userId/roles', 'PUT'] as const
}

export function usePutAccessControlUsersUserIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccessControlUsersUserIdRolesKey()
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
            (typeof client)['access-control']['users'][':userId']['roles']['$put']
          >
        },
      ) => parseResponse(client['access-control'].users[':userId'].roles.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccessControlUsersUserIdRolesKey() {
  return ['access-control', '/access-control/users/:userId/roles', 'POST'] as const
}

export function usePostAccessControlUsersUserIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessControlUsersUserIdRolesKey()
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
            (typeof client)['access-control']['users'][':userId']['roles']['$post']
          >
        },
      ) => parseResponse(client['access-control'].users[':userId'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccessControlUsersUserIdRolesRoleUIDKey() {
  return ['access-control', '/access-control/users/:userId/roles/:roleUID', 'DELETE'] as const
}

export function useDeleteAccessControlUsersUserIdRolesRoleUID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['access-control']['users'][':userId']['roles'][':roleUID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['access-control']['users'][':userId']['roles'][':roleUID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccessControlUsersUserIdRolesRoleUIDKey()
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
            (typeof client)['access-control']['users'][':userId']['roles'][':roleUID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['access-control'].users[':userId'].roles[':roleUID'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccessControlResourceDescriptionKey(
  args: InferRequestType<(typeof client)['access-control'][':resource']['description']['$get']>,
) {
  return ['access-control', '/access-control/:resource/description', args] as const
}

export function useGetAccessControlResourceDescription<TError = unknown>(
  args: InferRequestType<(typeof client)['access-control'][':resource']['description']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control'][':resource']['description']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessControlResourceDescriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control'][':resource']['description']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['access-control'][':resource'].description.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessControlResourceDescription<TError = unknown>(
  args: InferRequestType<(typeof client)['access-control'][':resource']['description']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control'][':resource']['description']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessControlResourceDescriptionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control'][':resource']['description']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['access-control'][':resource'].description.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccessControlResourceResourceIDKey(
  args: InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>,
) {
  return ['access-control', '/access-control/:resource/:resourceID', args] as const
}

export function useGetAccessControlResourceResourceID<TError = unknown>(
  args: InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessControlResourceResourceIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['access-control'][':resource'][':resourceID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccessControlResourceResourceID<TError = unknown>(
  args: InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccessControlResourceResourceIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['access-control'][':resource'][':resourceID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccessControlResourceResourceIDKey() {
  return ['access-control', '/access-control/:resource/:resourceID', 'POST'] as const
}

export function usePostAccessControlResourceResourceID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessControlResourceResourceIDKey()
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
            (typeof client)['access-control'][':resource'][':resourceID']['$post']
          >
        },
      ) =>
        parseResponse(
          client['access-control'][':resource'][':resourceID'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccessControlResourceResourceIDBuiltInRolesBuiltInRoleKey() {
  return [
    'access-control',
    '/access-control/:resource/:resourceID/builtInRoles/:builtInRole',
    'POST',
  ] as const
}

export function usePostAccessControlResourceResourceIDBuiltInRolesBuiltInRole<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['access-control'][':resource'][':resourceID']['builtInRoles'][':builtInRole']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['access-control'][':resource'][':resourceID']['builtInRoles'][':builtInRole']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessControlResourceResourceIDBuiltInRolesBuiltInRoleKey()
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
            (typeof client)['access-control'][':resource'][':resourceID']['builtInRoles'][':builtInRole']['$post']
          >
        },
      ) =>
        parseResponse(
          client['access-control'][':resource'][':resourceID'].builtInRoles[':builtInRole'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccessControlResourceResourceIDTeamsTeamIDKey() {
  return ['access-control', '/access-control/:resource/:resourceID/teams/:teamID', 'POST'] as const
}

export function usePostAccessControlResourceResourceIDTeamsTeamID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['access-control'][':resource'][':resourceID']['teams'][':teamID']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['access-control'][':resource'][':resourceID']['teams'][':teamID']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessControlResourceResourceIDTeamsTeamIDKey()
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
            (typeof client)['access-control'][':resource'][':resourceID']['teams'][':teamID']['$post']
          >
        },
      ) =>
        parseResponse(
          client['access-control'][':resource'][':resourceID'].teams[':teamID'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccessControlResourceResourceIDUsersUserIDKey() {
  return ['access-control', '/access-control/:resource/:resourceID/users/:userID', 'POST'] as const
}

export function usePostAccessControlResourceResourceIDUsersUserID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['access-control'][':resource'][':resourceID']['users'][':userID']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['access-control'][':resource'][':resourceID']['users'][':userID']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccessControlResourceResourceIDUsersUserIDKey()
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
            (typeof client)['access-control'][':resource'][':resourceID']['users'][':userID']['$post']
          >
        },
      ) =>
        parseResponse(
          client['access-control'][':resource'][':resourceID'].users[':userID'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminLdapSyncStatusKey() {
  return ['admin', '/admin/ldap-sync-status'] as const
}

export function useGetAdminLdapSyncStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['ldap-sync-status']['$get']>>>
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
        ? getGetAdminLdapSyncStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['ldap-sync-status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['ldap-sync-status'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminLdapSyncStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['ldap-sync-status']['$get']>>>
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
        ? getGetAdminLdapSyncStatusKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['ldap-sync-status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['ldap-sync-status'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminLdapReloadKey() {
  return ['admin', '/admin/ldap/reload', 'POST'] as const
}

export function usePostAdminLdapReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.reload.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminLdapReloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.admin.ldap.reload.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminLdapStatusKey() {
  return ['admin', '/admin/ldap/status'] as const
}

export function useGetAdminLdapStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminLdapStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.ldap.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminLdapStatus<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.status.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminLdapStatusKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.status.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.ldap.status.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminLdapSyncUserIdKey() {
  return ['admin', '/admin/ldap/sync/:user_id', 'POST'] as const
}

export function usePostAdminLdapSyncUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.ldap.sync)[':user_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.ldap.sync)[':user_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminLdapSyncUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.ldap.sync)[':user_id']['$post']> },
      ) => parseResponse(client.admin.ldap.sync[':user_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminLdapUserNameKey(
  args: InferRequestType<(typeof client.admin.ldap)[':user_name']['$get']>,
) {
  return ['admin', '/admin/ldap/:user_name', args] as const
}

export function useGetAdminLdapUserName<TError = unknown>(
  args: InferRequestType<(typeof client.admin.ldap)[':user_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.ldap)[':user_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminLdapUserNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.ldap)[':user_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.ldap[':user_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminLdapUserName<TError = unknown>(
  args: InferRequestType<(typeof client.admin.ldap)[':user_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.ldap)[':user_name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminLdapUserNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.ldap)[':user_name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.ldap[':user_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProvisioningAccessControlReloadKey() {
  return ['admin', '/admin/provisioning/access-control/reload', 'POST'] as const
}

export function usePostAdminProvisioningAccessControlReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.provisioning)['access-control']['reload']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProvisioningAccessControlReloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.admin.provisioning['access-control'].reload.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProvisioningDashboardsReloadKey() {
  return ['admin', '/admin/provisioning/dashboards/reload', 'POST'] as const
}

export function usePostAdminProvisioningDashboardsReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.provisioning.dashboards.reload.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProvisioningDashboardsReloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.provisioning.dashboards.reload.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProvisioningDatasourcesReloadKey() {
  return ['admin', '/admin/provisioning/datasources/reload', 'POST'] as const
}

export function usePostAdminProvisioningDatasourcesReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.provisioning.datasources.reload.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProvisioningDatasourcesReloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.provisioning.datasources.reload.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProvisioningPluginsReloadKey() {
  return ['admin', '/admin/provisioning/plugins/reload', 'POST'] as const
}

export function usePostAdminProvisioningPluginsReload<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.provisioning.plugins.reload.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProvisioningPluginsReloadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.admin.provisioning.plugins.reload.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminSettingsKey() {
  return ['admin', '/admin/settings'] as const
}

export function useGetAdminSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminStatsKey() {
  return ['admin', '/admin/stats'] as const
}

export function useGetAdminStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stats.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminStatsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stats.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.stats.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminUsersKey() {
  return ['admin', '/admin/users', 'POST'] as const
}

export function usePostAdminUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.admin.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.users.$post> }) =>
        parseResponse(client.admin.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminUsersUserIdKey() {
  return ['admin', '/admin/users/:user_id', 'DELETE'] as const
}

export function useDeleteAdminUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.users)[':user_id']['$delete']> },
      ) => parseResponse(client.admin.users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersUserIdAuthTokensKey(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>,
) {
  return ['admin', '/admin/users/:user_id/auth-tokens', args] as const
}

export function useGetAdminUsersUserIdAuthTokens<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminUsersUserIdAuthTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.users[':user_id']['auth-tokens'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersUserIdAuthTokens<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminUsersUserIdAuthTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.users[':user_id']['auth-tokens'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminUsersUserIdDisableKey() {
  return ['admin', '/admin/users/:user_id/disable', 'POST'] as const
}

export function usePostAdminUsersUserIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['disable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':user_id']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersUserIdDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.users)[':user_id']['disable']['$post']> },
      ) => parseResponse(client.admin.users[':user_id'].disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersUserIdEnableKey() {
  return ['admin', '/admin/users/:user_id/enable', 'POST'] as const
}

export function usePostAdminUsersUserIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':user_id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersUserIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.users)[':user_id']['enable']['$post']> },
      ) => parseResponse(client.admin.users[':user_id'].enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersUserIdLogoutKey() {
  return ['admin', '/admin/users/:user_id/logout', 'POST'] as const
}

export function usePostAdminUsersUserIdLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['logout']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':user_id']['logout']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersUserIdLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.users)[':user_id']['logout']['$post']> },
      ) => parseResponse(client.admin.users[':user_id'].logout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminUsersUserIdPasswordKey() {
  return ['admin', '/admin/users/:user_id/password', 'PUT'] as const
}

export function usePutAdminUsersUserIdPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['password']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':user_id']['password']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminUsersUserIdPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.users)[':user_id']['password']['$put']> },
      ) => parseResponse(client.admin.users[':user_id'].password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutAdminUsersUserIdPermissionsKey() {
  return ['admin', '/admin/users/:user_id/permissions', 'PUT'] as const
}

export function usePutAdminUsersUserIdPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['permissions']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':user_id']['permissions']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminUsersUserIdPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.users)[':user_id']['permissions']['$put']>
        },
      ) => parseResponse(client.admin.users[':user_id'].permissions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersUserIdQuotasKey(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['quotas']['$get']>,
) {
  return ['admin', '/admin/users/:user_id/quotas', args] as const
}

export function useGetAdminUsersUserIdQuotas<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['quotas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':user_id']['quotas']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminUsersUserIdQuotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':user_id']['quotas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':user_id'].quotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersUserIdQuotas<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['quotas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':user_id']['quotas']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAdminUsersUserIdQuotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':user_id']['quotas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':user_id'].quotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAdminUsersUserIdQuotasQuotaTargetKey() {
  return ['admin', '/admin/users/:user_id/quotas/:quota_target', 'PUT'] as const
}

export function usePutAdminUsersUserIdQuotasQuotaTarget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.users)[':user_id']['quotas'][':quota_target']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':user_id']['quotas'][':quota_target']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAdminUsersUserIdQuotasQuotaTargetKey()
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
            (typeof client.admin.users)[':user_id']['quotas'][':quota_target']['$put']
          >
        },
      ) =>
        parseResponse(
          client.admin.users[':user_id'].quotas[':quota_target'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUsersUserIdRevokeAuthTokenKey() {
  return ['admin', '/admin/users/:user_id/revoke-auth-token', 'POST'] as const
}

export function usePostAdminUsersUserIdRevokeAuthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['revoke-auth-token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':user_id']['revoke-auth-token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersUserIdRevokeAuthTokenKey()
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
            (typeof client.admin.users)[':user_id']['revoke-auth-token']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.users[':user_id']['revoke-auth-token'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAnnotationsKey(args: InferRequestType<typeof client.annotations.$get>) {
  return ['annotations', '/annotations', args] as const
}

export function useGetAnnotations<TError = unknown>(
  args: InferRequestType<typeof client.annotations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnnotationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotations<TError = unknown>(
  args: InferRequestType<typeof client.annotations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnnotationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAnnotationsKey() {
  return ['annotations', '/annotations', 'POST'] as const
}

export function usePostAnnotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.annotations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnnotationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.annotations.$post> }) =>
        parseResponse(client.annotations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnnotationsGraphiteKey() {
  return ['annotations', '/annotations/graphite', 'POST'] as const
}

export function usePostAnnotationsGraphite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.annotations.graphite.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.annotations.graphite.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnnotationsGraphiteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.annotations.graphite.$post> },
      ) => parseResponse(client.annotations.graphite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAnnotationsMassDeleteKey() {
  return ['annotations', '/annotations/mass-delete', 'POST'] as const
}

export function usePostAnnotationsMassDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations)['mass-delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.annotations)['mass-delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAnnotationsMassDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.annotations)['mass-delete']['$post']> },
      ) => parseResponse(client.annotations['mass-delete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnnotationsTagsKey(
  args: InferRequestType<typeof client.annotations.tags.$get>,
) {
  return ['annotations', '/annotations/tags', args] as const
}

export function useGetAnnotationsTags<TError = unknown>(
  args: InferRequestType<typeof client.annotations.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnnotationsTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotations.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationsTags<TError = unknown>(
  args: InferRequestType<typeof client.annotations.tags.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.tags.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnnotationsTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotations.tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnnotationsAnnotationIdKey(
  args: InferRequestType<(typeof client.annotations)[':annotation_id']['$get']>,
) {
  return ['annotations', '/annotations/:annotation_id', args] as const
}

export function useGetAnnotationsAnnotationId<TError = unknown>(
  args: InferRequestType<(typeof client.annotations)[':annotation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnnotationsAnnotationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotations[':annotation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnnotationsAnnotationId<TError = unknown>(
  args: InferRequestType<(typeof client.annotations)[':annotation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAnnotationsAnnotationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.annotations[':annotation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAnnotationsAnnotationIdKey() {
  return ['annotations', '/annotations/:annotation_id', 'PUT'] as const
}

export function usePutAnnotationsAnnotationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.annotations)[':annotation_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAnnotationsAnnotationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.annotations)[':annotation_id']['$put']> },
      ) => parseResponse(client.annotations[':annotation_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAnnotationsAnnotationIdKey() {
  return ['annotations', '/annotations/:annotation_id', 'DELETE'] as const
}

export function useDeleteAnnotationsAnnotationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.annotations)[':annotation_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAnnotationsAnnotationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.annotations)[':annotation_id']['$delete']> },
      ) => parseResponse(client.annotations[':annotation_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAnnotationsAnnotationIdKey() {
  return ['annotations', '/annotations/:annotation_id', 'PATCH'] as const
}

export function usePatchAnnotationsAnnotationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.annotations)[':annotation_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAnnotationsAnnotationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.annotations)[':annotation_id']['$patch']> },
      ) => parseResponse(client.annotations[':annotation_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAnonymousDevicesKey() {
  return ['anonymous', '/anonymous/devices'] as const
}

export function useGetAnonymousDevices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.devices.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnonymousDevicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anonymous.devices.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnonymousDevices<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.devices.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnonymousDevicesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.devices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anonymous.devices.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAnonymousSearchKey() {
  return ['anonymous', '/anonymous/search'] as const
}

export function useGetAnonymousSearch<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.search.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnonymousSearchKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anonymous.search.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAnonymousSearch<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.search.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAnonymousSearchKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.anonymous.search.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCloudmigrationMigrationKey() {
  return ['cloudmigration', '/cloudmigration/migration'] as const
}

export function useGetCloudmigrationMigration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$get>>>
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
        ? getGetCloudmigrationMigrationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cloudmigration.migration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCloudmigrationMigration<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$get>>>
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
        ? getGetCloudmigrationMigrationKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cloudmigration.migration.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCloudmigrationMigrationKey() {
  return ['cloudmigration', '/cloudmigration/migration', 'POST'] as const
}

export function usePostCloudmigrationMigration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cloudmigration.migration.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCloudmigrationMigrationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cloudmigration.migration.$post> },
      ) => parseResponse(client.cloudmigration.migration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCloudmigrationMigrationUidKey(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$get']>,
) {
  return ['cloudmigration', '/cloudmigration/migration/:uid', args] as const
}

export function useGetCloudmigrationMigrationUid<TError = unknown>(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCloudmigrationMigrationUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cloudmigration.migration[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCloudmigrationMigrationUid<TError = unknown>(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCloudmigrationMigrationUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cloudmigration.migration[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCloudmigrationMigrationUidKey() {
  return ['cloudmigration', '/cloudmigration/migration/:uid', 'DELETE'] as const
}

export function useDeleteCloudmigrationMigrationUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCloudmigrationMigrationUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$delete']> },
      ) => parseResponse(client.cloudmigration.migration[':uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCloudmigrationMigrationUidSnapshotKey() {
  return ['cloudmigration', '/cloudmigration/migration/:uid/snapshot', 'POST'] as const
}

export function usePostCloudmigrationMigrationUidSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCloudmigrationMigrationUidSnapshotKey()
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
            (typeof client.cloudmigration.migration)[':uid']['snapshot']['$post']
          >
        },
      ) =>
        parseResponse(client.cloudmigration.migration[':uid'].snapshot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCloudmigrationMigrationUidSnapshotSnapshotUidKey(
  args: InferRequestType<
    (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
  >,
) {
  return ['cloudmigration', '/cloudmigration/migration/:uid/snapshot/:snapshotUid', args] as const
}

export function useGetCloudmigrationMigrationUidSnapshotSnapshotUid<TError = unknown>(
  args: InferRequestType<
    (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
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
        ? getGetCloudmigrationMigrationUidSnapshotSnapshotUidKey(args)
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
                (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
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
          client.cloudmigration.migration[':uid'].snapshot[':snapshotUid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCloudmigrationMigrationUidSnapshotSnapshotUid<TError = unknown>(
  args: InferRequestType<
    (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
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
        ? getGetCloudmigrationMigrationUidSnapshotSnapshotUidKey(args)
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
                (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
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
          client.cloudmigration.migration[':uid'].snapshot[':snapshotUid'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCloudmigrationMigrationUidSnapshotSnapshotUidCancelKey() {
  return [
    'cloudmigration',
    '/cloudmigration/migration/:uid/snapshot/:snapshotUid/cancel',
    'POST',
  ] as const
}

export function usePostCloudmigrationMigrationUidSnapshotSnapshotUidCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCloudmigrationMigrationUidSnapshotSnapshotUidCancelKey()
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
            (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cloudmigration.migration[':uid'].snapshot[':snapshotUid'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostCloudmigrationMigrationUidSnapshotSnapshotUidUploadKey() {
  return [
    'cloudmigration',
    '/cloudmigration/migration/:uid/snapshot/:snapshotUid/upload',
    'POST',
  ] as const
}

export function usePostCloudmigrationMigrationUidSnapshotSnapshotUidUpload<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['upload']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['upload']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCloudmigrationMigrationUidSnapshotSnapshotUidUploadKey()
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
            (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['upload']['$post']
          >
        },
      ) =>
        parseResponse(
          client.cloudmigration.migration[':uid'].snapshot[':snapshotUid'].upload.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCloudmigrationMigrationUidSnapshotsKey(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>,
) {
  return ['cloudmigration', '/cloudmigration/migration/:uid/snapshots', args] as const
}

export function useGetCloudmigrationMigrationUidSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCloudmigrationMigrationUidSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cloudmigration.migration[':uid'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCloudmigrationMigrationUidSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCloudmigrationMigrationUidSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cloudmigration.migration[':uid'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCloudmigrationResourcesDependenciesKey() {
  return ['cloudmigration', '/cloudmigration/resources/dependencies'] as const
}

export function useGetCloudmigrationResourcesDependencies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cloudmigration.resources.dependencies.$get>>
        >
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
        ? getGetCloudmigrationResourcesDependenciesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.cloudmigration.resources.dependencies.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cloudmigration.resources.dependencies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCloudmigrationResourcesDependencies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cloudmigration.resources.dependencies.$get>>
        >
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
        ? getGetCloudmigrationResourcesDependenciesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.cloudmigration.resources.dependencies.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cloudmigration.resources.dependencies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCloudmigrationTokenKey() {
  return ['cloudmigration', '/cloudmigration/token'] as const
}

export function useGetCloudmigrationToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$get>>>>
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
        ? getGetCloudmigrationTokenKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cloudmigration.token.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCloudmigrationToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$get>>>>
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
        ? getGetCloudmigrationTokenKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cloudmigration.token.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCloudmigrationTokenKey() {
  return ['cloudmigration', '/cloudmigration/token', 'POST'] as const
}

export function usePostCloudmigrationToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCloudmigrationTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.cloudmigration.token.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteCloudmigrationTokenUidKey() {
  return ['cloudmigration', '/cloudmigration/token/:uid', 'DELETE'] as const
}

export function useDeleteCloudmigrationTokenUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cloudmigration.token)[':uid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cloudmigration.token)[':uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCloudmigrationTokenUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cloudmigration.token)[':uid']['$delete']> },
      ) => parseResponse(client.cloudmigration.token[':uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConvertApiPromRulesKey() {
  return ['convert', '/convert/api/prom/rules'] as const
}

export function useGetConvertApiPromRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$get>>>
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
        ? getGetConvertApiPromRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.convert.api.prom.rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConvertApiPromRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$get>>>
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
        ? getGetConvertApiPromRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.convert.api.prom.rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConvertApiPromRulesKey() {
  return ['convert', '/convert/api/prom/rules', 'POST'] as const
}

export function usePostConvertApiPromRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertApiPromRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.convert.api.prom.rules.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConvertApiPromRulesNamespaceTitleKey(
  args: InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>,
) {
  return ['convert', '/convert/api/prom/rules/:NamespaceTitle', args] as const
}

export function useGetConvertApiPromRulesNamespaceTitle<TError = unknown>(
  args: InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConvertApiPromRulesNamespaceTitleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.convert.api.prom.rules[':NamespaceTitle'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConvertApiPromRulesNamespaceTitle<TError = unknown>(
  args: InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConvertApiPromRulesNamespaceTitleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.convert.api.prom.rules[':NamespaceTitle'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConvertApiPromRulesNamespaceTitleKey() {
  return ['convert', '/convert/api/prom/rules/:NamespaceTitle', 'POST'] as const
}

export function usePostConvertApiPromRulesNamespaceTitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertApiPromRulesNamespaceTitleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$post']>
        },
      ) =>
        parseResponse(client.convert.api.prom.rules[':NamespaceTitle'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteConvertApiPromRulesNamespaceTitleKey() {
  return ['convert', '/convert/api/prom/rules/:NamespaceTitle', 'DELETE'] as const
}

export function useDeleteConvertApiPromRulesNamespaceTitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConvertApiPromRulesNamespaceTitleKey()
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
            (typeof client.convert.api.prom.rules)[':NamespaceTitle']['$delete']
          >
        },
      ) =>
        parseResponse(client.convert.api.prom.rules[':NamespaceTitle'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConvertApiPromRulesNamespaceTitleGroupKey(
  args: InferRequestType<
    (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
  >,
) {
  return ['convert', '/convert/api/prom/rules/:NamespaceTitle/:Group', args] as const
}

export function useGetConvertApiPromRulesNamespaceTitleGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
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
        ? getGetConvertApiPromRulesNamespaceTitleGroupKey(args)
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
                (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
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
          client.convert.api.prom.rules[':NamespaceTitle'][':Group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConvertApiPromRulesNamespaceTitleGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
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
        ? getGetConvertApiPromRulesNamespaceTitleGroupKey(args)
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
                (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
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
          client.convert.api.prom.rules[':NamespaceTitle'][':Group'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteConvertApiPromRulesNamespaceTitleGroupKey() {
  return ['convert', '/convert/api/prom/rules/:NamespaceTitle/:Group', 'DELETE'] as const
}

export function useDeleteConvertApiPromRulesNamespaceTitleGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConvertApiPromRulesNamespaceTitleGroupKey()
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
            (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.convert.api.prom.rules[':NamespaceTitle'][':Group'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConvertPrometheusConfigV1RulesKey() {
  return ['convert', '/convert/prometheus/config/v1/rules'] as const
}

export function useGetConvertPrometheusConfigV1Rules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$get>>
        >
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
        ? getGetConvertPrometheusConfigV1RulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.convert.prometheus.config.v1.rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConvertPrometheusConfigV1Rules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$get>>
        >
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
        ? getGetConvertPrometheusConfigV1RulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.convert.prometheus.config.v1.rules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostConvertPrometheusConfigV1RulesKey() {
  return ['convert', '/convert/prometheus/config/v1/rules', 'POST'] as const
}

export function usePostConvertPrometheusConfigV1Rules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertPrometheusConfigV1RulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.convert.prometheus.config.v1.rules.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConvertPrometheusConfigV1RulesNamespaceTitleKey(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
  >,
) {
  return ['convert', '/convert/prometheus/config/v1/rules/:NamespaceTitle', args] as const
}

export function useGetConvertPrometheusConfigV1RulesNamespaceTitle<TError = unknown>(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
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
        ? getGetConvertPrometheusConfigV1RulesNamespaceTitleKey(args)
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
                (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
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
          client.convert.prometheus.config.v1.rules[':NamespaceTitle'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConvertPrometheusConfigV1RulesNamespaceTitle<TError = unknown>(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
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
        ? getGetConvertPrometheusConfigV1RulesNamespaceTitleKey(args)
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
                (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
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
          client.convert.prometheus.config.v1.rules[':NamespaceTitle'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostConvertPrometheusConfigV1RulesNamespaceTitleKey() {
  return ['convert', '/convert/prometheus/config/v1/rules/:NamespaceTitle', 'POST'] as const
}

export function usePostConvertPrometheusConfigV1RulesNamespaceTitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConvertPrometheusConfigV1RulesNamespaceTitleKey()
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
            (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$post']
          >
        },
      ) =>
        parseResponse(
          client.convert.prometheus.config.v1.rules[':NamespaceTitle'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteConvertPrometheusConfigV1RulesNamespaceTitleKey() {
  return ['convert', '/convert/prometheus/config/v1/rules/:NamespaceTitle', 'DELETE'] as const
}

export function useDeleteConvertPrometheusConfigV1RulesNamespaceTitle<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConvertPrometheusConfigV1RulesNamespaceTitleKey()
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
            (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.convert.prometheus.config.v1.rules[':NamespaceTitle'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConvertPrometheusConfigV1RulesNamespaceTitleGroupKey(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
  >,
) {
  return ['convert', '/convert/prometheus/config/v1/rules/:NamespaceTitle/:Group', args] as const
}

export function useGetConvertPrometheusConfigV1RulesNamespaceTitleGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
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
        ? getGetConvertPrometheusConfigV1RulesNamespaceTitleGroupKey(args)
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
                (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
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
          client.convert.prometheus.config.v1.rules[':NamespaceTitle'][':Group'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConvertPrometheusConfigV1RulesNamespaceTitleGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
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
        ? getGetConvertPrometheusConfigV1RulesNamespaceTitleGroupKey(args)
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
                (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
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
          client.convert.prometheus.config.v1.rules[':NamespaceTitle'][':Group'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteConvertPrometheusConfigV1RulesNamespaceTitleGroupKey() {
  return [
    'convert',
    '/convert/prometheus/config/v1/rules/:NamespaceTitle/:Group',
    'DELETE',
  ] as const
}

export function useDeleteConvertPrometheusConfigV1RulesNamespaceTitleGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteConvertPrometheusConfigV1RulesNamespaceTitleGroupKey()
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
            (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.convert.prometheus.config.v1.rules[':NamespaceTitle'][':Group'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardSnapshotsKey(
  args: InferRequestType<typeof client.dashboard.snapshots.$get>,
) {
  return ['dashboard', '/dashboard/snapshots', args] as const
}

export function useGetDashboardSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.dashboard.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.snapshots.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDashboardSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardSnapshots<TError = unknown>(
  args: InferRequestType<typeof client.dashboard.snapshots.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.snapshots.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDashboardSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.snapshots.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboard.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDashboardsDbKey() {
  return ['dashboards', '/dashboards/db', 'POST'] as const
}

export function usePostDashboardsDb<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.db.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dashboards.db.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsDbKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dashboards.db.$post> }) =>
        parseResponse(client.dashboards.db.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsHomeKey() {
  return ['dashboards', '/dashboards/home'] as const
}

export function useGetDashboardsHome<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.home.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDashboardsHomeKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.home.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards.home.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsHome<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.home.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDashboardsHomeKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.home.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards.home.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDashboardsImportKey() {
  return ['dashboards', '/dashboards/import', 'POST'] as const
}

export function usePostDashboardsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.import.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.dashboards.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dashboards.import.$post> }) =>
        parseResponse(client.dashboards.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDashboardsInterpolateKey() {
  return ['dashboards', '/dashboards/interpolate', 'POST'] as const
}

export function usePostDashboardsInterpolate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.interpolate.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsInterpolateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.dashboards.interpolate.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsPublicDashboardsKey() {
  return ['dashboards', '/dashboards/public-dashboards'] as const
}

export function useGetDashboardsPublicDashboards<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)['public-dashboards']['$get']>>
        >
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
        ? getGetDashboardsPublicDashboardsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)['public-dashboards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dashboards['public-dashboards'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsPublicDashboards<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)['public-dashboards']['$get']>>
        >
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
        ? getGetDashboardsPublicDashboardsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards)['public-dashboards']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dashboards['public-dashboards'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDashboardsTagsKey() {
  return ['dashboards', '/dashboards/tags'] as const
}

export function useGetDashboardsTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.tags.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDashboardsTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.tags.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDashboardsTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDashboardsUidDashboardUidPublicDashboardsKey(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
  >,
) {
  return ['dashboards', '/dashboards/uid/:dashboardUid/public-dashboards', args] as const
}

export function useGetDashboardsUidDashboardUidPublicDashboards<TError = unknown>(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
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
        ? getGetDashboardsUidDashboardUidPublicDashboardsKey(args)
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
                (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
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
          client.dashboards.uid[':dashboardUid']['public-dashboards'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsUidDashboardUidPublicDashboards<TError = unknown>(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
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
        ? getGetDashboardsUidDashboardUidPublicDashboardsKey(args)
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
                (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
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
          client.dashboards.uid[':dashboardUid']['public-dashboards'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDashboardsUidDashboardUidPublicDashboardsKey() {
  return ['dashboards', '/dashboards/uid/:dashboardUid/public-dashboards', 'POST'] as const
}

export function usePostDashboardsUidDashboardUidPublicDashboards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsUidDashboardUidPublicDashboardsKey()
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
            (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$post']
          >
        },
      ) =>
        parseResponse(
          client.dashboards.uid[':dashboardUid']['public-dashboards'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDashboardsUidDashboardUidPublicDashboardsUidKey() {
  return ['dashboards', '/dashboards/uid/:dashboardUid/public-dashboards/:uid', 'DELETE'] as const
}

export function useDeleteDashboardsUidDashboardUidPublicDashboardsUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDashboardsUidDashboardUidPublicDashboardsUidKey()
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
            (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dashboards.uid[':dashboardUid']['public-dashboards'][':uid'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchDashboardsUidDashboardUidPublicDashboardsUidKey() {
  return ['dashboards', '/dashboards/uid/:dashboardUid/public-dashboards/:uid', 'PATCH'] as const
}

export function usePatchDashboardsUidDashboardUidPublicDashboardsUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDashboardsUidDashboardUidPublicDashboardsUidKey()
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
            (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.dashboards.uid[':dashboardUid']['public-dashboards'][':uid'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsUidUidKey(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['$get']>,
) {
  return ['dashboards', '/dashboards/uid/:uid', args] as const
}

export function useGetDashboardsUidUid<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDashboardsUidUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards.uid[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsUidUid<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDashboardsUidUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards.uid[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDashboardsUidUidKey() {
  return ['dashboards', '/dashboards/uid/:uid', 'DELETE'] as const
}

export function useDeleteDashboardsUidUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards.uid)[':uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDashboardsUidUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dashboards.uid)[':uid']['$delete']> },
      ) => parseResponse(client.dashboards.uid[':uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsUidUidPermissionsKey(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>,
) {
  return ['dashboards', '/dashboards/uid/:uid/permissions', args] as const
}

export function useGetDashboardsUidUidPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDashboardsUidUidPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dashboards.uid[':uid'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsUidUidPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDashboardsUidUidPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.dashboards.uid[':uid'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDashboardsUidUidPermissionsKey() {
  return ['dashboards', '/dashboards/uid/:uid/permissions', 'POST'] as const
}

export function usePostDashboardsUidUidPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsUidUidPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$post']>
        },
      ) => parseResponse(client.dashboards.uid[':uid'].permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDashboardsUidUidRestoreKey() {
  return ['dashboards', '/dashboards/uid/:uid/restore', 'POST'] as const
}

export function usePostDashboardsUidUidRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['restore']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dashboards.uid)[':uid']['restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsUidUidRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dashboards.uid)[':uid']['restore']['$post']> },
      ) => parseResponse(client.dashboards.uid[':uid'].restore.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsUidUidVersionsKey(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>,
) {
  return ['dashboards', '/dashboards/uid/:uid/versions', args] as const
}

export function useGetDashboardsUidUidVersions<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDashboardsUidUidVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards.uid[':uid'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsUidUidVersions<TError = unknown>(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDashboardsUidUidVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dashboards.uid[':uid'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDashboardsUidUidVersionsDashboardVersionIDKey(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
  >,
) {
  return ['dashboards', '/dashboards/uid/:uid/versions/:DashboardVersionID', args] as const
}

export function useGetDashboardsUidUidVersionsDashboardVersionID<TError = unknown>(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
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
        ? getGetDashboardsUidUidVersionsDashboardVersionIDKey(args)
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
                (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
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
          client.dashboards.uid[':uid'].versions[':DashboardVersionID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsUidUidVersionsDashboardVersionID<TError = unknown>(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
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
        ? getGetDashboardsUidUidVersionsDashboardVersionIDKey(args)
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
                (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
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
          client.dashboards.uid[':uid'].versions[':DashboardVersionID'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDashboardsVariablesPromoteKey() {
  return ['dashboards', '/dashboards/variables/promote', 'POST'] as const
}

export function usePostDashboardsVariablesPromote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.variables.promote.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.dashboards.variables.promote.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsVariablesPromoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.dashboards.variables.promote.$post> },
      ) => parseResponse(client.dashboards.variables.promote.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDashboardsVariablesSharedClustersKey() {
  return ['dashboards', '/dashboards/variables/shared-clusters'] as const
}

export function useGetDashboardsVariablesSharedClusters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards.variables)['shared-clusters']['$get']>>
        >
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
        ? getGetDashboardsVariablesSharedClustersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards.variables)['shared-clusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.dashboards.variables['shared-clusters'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsVariablesSharedClusters<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards.variables)['shared-clusters']['$get']>>
        >
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
        ? getGetDashboardsVariablesSharedClustersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dashboards.variables)['shared-clusters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.dashboards.variables['shared-clusters'].$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDashboardsVariablesSharedClustersOccurrencesKey(
  args: InferRequestType<
    (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
  >,
) {
  return ['dashboards', '/dashboards/variables/shared-clusters/occurrences', args] as const
}

export function useGetDashboardsVariablesSharedClustersOccurrences<TError = unknown>(
  args: InferRequestType<
    (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
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
        ? getGetDashboardsVariablesSharedClustersOccurrencesKey(args)
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
                (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
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
          client.dashboards.variables['shared-clusters'].occurrences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDashboardsVariablesSharedClustersOccurrences<TError = unknown>(
  args: InferRequestType<
    (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
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
        ? getGetDashboardsVariablesSharedClustersOccurrencesKey(args)
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
                (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
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
          client.dashboards.variables['shared-clusters'].occurrences.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDashboardsVariablesSharedClustersRescanKey() {
  return ['dashboards', '/dashboards/variables/shared-clusters/rescan', 'POST'] as const
}

export function usePostDashboardsVariablesSharedClustersRescan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dashboards.variables)['shared-clusters']['rescan']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDashboardsVariablesSharedClustersRescanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.dashboards.variables['shared-clusters'].rescan.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatasourcesKey() {
  return ['datasources', '/datasources'] as const
}

export function useGetDatasources<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasourcesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasources<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDatasourcesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatasourcesKey() {
  return ['datasources', '/datasources', 'POST'] as const
}

export function usePostDatasources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.datasources.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.datasources.$post> }) =>
        parseResponse(client.datasources.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasourcesCorrelationsKey(
  args: InferRequestType<typeof client.datasources.correlations.$get>,
) {
  return ['datasources', '/datasources/correlations', args] as const
}

export function useGetDatasourcesCorrelations<TError = unknown>(
  args: InferRequestType<typeof client.datasources.correlations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.datasources.correlations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesCorrelationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.datasources.correlations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.correlations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasourcesCorrelations<TError = unknown>(
  args: InferRequestType<typeof client.datasources.correlations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.datasources.correlations.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesCorrelationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.datasources.correlations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.correlations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatasourcesIdNameKey(
  args: InferRequestType<(typeof client.datasources.id)[':name']['$get']>,
) {
  return ['datasources', '/datasources/id/:name', args] as const
}

export function useGetDatasourcesIdName<TError = unknown>(
  args: InferRequestType<(typeof client.datasources.id)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.id)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesIdNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.id)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.id[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasourcesIdName<TError = unknown>(
  args: InferRequestType<(typeof client.datasources.id)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.id)[':name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesIdNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.id)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.id[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatasourcesNameNameKey(
  args: InferRequestType<(typeof client.datasources.name)[':name']['$get']>,
) {
  return ['datasources', '/datasources/name/:name', args] as const
}

export function useGetDatasourcesNameName<TError = unknown>(
  args: InferRequestType<(typeof client.datasources.name)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources.name)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources.name)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.name[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasourcesNameName<TError = unknown>(
  args: InferRequestType<(typeof client.datasources.name)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources.name)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesNameNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources.name)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.name[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDatasourcesNameNameKey() {
  return ['datasources', '/datasources/name/:name', 'DELETE'] as const
}

export function useDeleteDatasourcesNameName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources.name)[':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources.name)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasourcesNameNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datasources.name)[':name']['$delete']> },
      ) => parseResponse(client.datasources.name[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasourcesProxyUidUidDatasourceProxyRouteKey(
  args: InferRequestType<
    (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
  >,
) {
  return ['datasources', '/datasources/proxy/uid/:uid/:datasource_proxy_route', args] as const
}

export function useGetDatasourcesProxyUidUidDatasourceProxyRoute<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
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
        ? getGetDatasourcesProxyUidUidDatasourceProxyRouteKey(args)
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
                (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
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
          client.datasources.proxy.uid[':uid'][':datasource_proxy_route'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasourcesProxyUidUidDatasourceProxyRoute<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
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
        ? getGetDatasourcesProxyUidUidDatasourceProxyRouteKey(args)
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
                (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
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
          client.datasources.proxy.uid[':uid'][':datasource_proxy_route'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostDatasourcesProxyUidUidDatasourceProxyRouteKey() {
  return ['datasources', '/datasources/proxy/uid/:uid/:datasource_proxy_route', 'POST'] as const
}

export function usePostDatasourcesProxyUidUidDatasourceProxyRoute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesProxyUidUidDatasourceProxyRouteKey()
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
            (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$post']
          >
        },
      ) =>
        parseResponse(
          client.datasources.proxy.uid[':uid'][':datasource_proxy_route'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatasourcesProxyUidUidDatasourceProxyRouteKey() {
  return ['datasources', '/datasources/proxy/uid/:uid/:datasource_proxy_route', 'DELETE'] as const
}

export function useDeleteDatasourcesProxyUidUidDatasourceProxyRoute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasourcesProxyUidUidDatasourceProxyRouteKey()
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
            (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.datasources.proxy.uid[':uid'][':datasource_proxy_route'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatasourcesUidSourceUIDCorrelationsKey(
  args: InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>,
) {
  return ['datasources', '/datasources/uid/:sourceUID/correlations', args] as const
}

export function useGetDatasourcesUidSourceUIDCorrelations<TError = unknown>(
  args: InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesUidSourceUIDCorrelationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.datasources.uid[':sourceUID'].correlations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasourcesUidSourceUIDCorrelations<TError = unknown>(
  args: InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesUidSourceUIDCorrelationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.datasources.uid[':sourceUID'].correlations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatasourcesUidSourceUIDCorrelationsKey() {
  return ['datasources', '/datasources/uid/:sourceUID/correlations', 'POST'] as const
}

export function usePostDatasourcesUidSourceUIDCorrelations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesUidSourceUIDCorrelationsKey()
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
            (typeof client.datasources.uid)[':sourceUID']['correlations']['$post']
          >
        },
      ) =>
        parseResponse(client.datasources.uid[':sourceUID'].correlations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasourcesUidSourceUIDCorrelationsCorrelationUIDKey(
  args: InferRequestType<
    (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
  >,
) {
  return ['datasources', '/datasources/uid/:sourceUID/correlations/:correlationUID', args] as const
}

export function useGetDatasourcesUidSourceUIDCorrelationsCorrelationUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
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
        ? getGetDatasourcesUidSourceUIDCorrelationsCorrelationUIDKey(args)
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
                (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
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
          client.datasources.uid[':sourceUID'].correlations[':correlationUID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasourcesUidSourceUIDCorrelationsCorrelationUID<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
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
        ? getGetDatasourcesUidSourceUIDCorrelationsCorrelationUIDKey(args)
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
                (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
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
          client.datasources.uid[':sourceUID'].correlations[':correlationUID'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchDatasourcesUidSourceUIDCorrelationsCorrelationUIDKey() {
  return [
    'datasources',
    '/datasources/uid/:sourceUID/correlations/:correlationUID',
    'PATCH',
  ] as const
}

export function usePatchDatasourcesUidSourceUIDCorrelationsCorrelationUID<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDatasourcesUidSourceUIDCorrelationsCorrelationUIDKey()
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
            (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.datasources.uid[':sourceUID'].correlations[':correlationUID'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatasourcesUidUidKey(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['$get']>,
) {
  return ['datasources', '/datasources/uid/:uid', args] as const
}

export function useGetDatasourcesUidUid<TError = unknown>(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesUidUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.uid[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasourcesUidUid<TError = unknown>(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesUidUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.uid[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatasourcesUidUidKey() {
  return ['datasources', '/datasources/uid/:uid', 'PUT'] as const
}

export function usePutDatasourcesUidUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources.uid)[':uid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatasourcesUidUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datasources.uid)[':uid']['$put']> },
      ) => parseResponse(client.datasources.uid[':uid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatasourcesUidUidKey() {
  return ['datasources', '/datasources/uid/:uid', 'DELETE'] as const
}

export function useDeleteDatasourcesUidUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources.uid)[':uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasourcesUidUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.datasources.uid)[':uid']['$delete']> },
      ) => parseResponse(client.datasources.uid[':uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteDatasourcesUidUidCorrelationsCorrelationUIDKey() {
  return ['datasources', '/datasources/uid/:uid/correlations/:correlationUID', 'DELETE'] as const
}

export function useDeleteDatasourcesUidUidCorrelationsCorrelationUID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.datasources.uid)[':uid']['correlations'][':correlationUID']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.datasources.uid)[':uid']['correlations'][':correlationUID']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDatasourcesUidUidCorrelationsCorrelationUIDKey()
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
            (typeof client.datasources.uid)[':uid']['correlations'][':correlationUID']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.datasources.uid[':uid'].correlations[':correlationUID'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDatasourcesUidUidHealthKey(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['health']['$get']>,
) {
  return ['datasources', '/datasources/uid/:uid/health', args] as const
}

export function useGetDatasourcesUidUidHealth<TError = unknown>(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['health']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['health']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesUidUidHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['health']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.uid[':uid'].health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasourcesUidUidHealth<TError = unknown>(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['health']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['health']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesUidUidHealthKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['health']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.datasources.uid[':uid'].health.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDatasourcesUidUidLbacTeamsKey(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>,
) {
  return ['datasources', '/datasources/uid/:uid/lbac/teams', args] as const
}

export function useGetDatasourcesUidUidLbacTeams<TError = unknown>(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesUidUidLbacTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.datasources.uid[':uid'].lbac.teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasourcesUidUidLbacTeams<TError = unknown>(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesUidUidLbacTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.datasources.uid[':uid'].lbac.teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDatasourcesUidUidLbacTeamsKey() {
  return ['datasources', '/datasources/uid/:uid/lbac/teams', 'PUT'] as const
}

export function usePutDatasourcesUidUidLbacTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDatasourcesUidUidLbacTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$put']>
        },
      ) => parseResponse(client.datasources.uid[':uid'].lbac.teams.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDatasourcesUidUidResourcesDatasourceProxyRouteKey(
  args: InferRequestType<
    (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
  >,
) {
  return ['datasources', '/datasources/uid/:uid/resources/:datasource_proxy_route', args] as const
}

export function useGetDatasourcesUidUidResourcesDatasourceProxyRoute<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
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
        ? getGetDatasourcesUidUidResourcesDatasourceProxyRouteKey(args)
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
                (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
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
          client.datasources.uid[':uid'].resources[':datasource_proxy_route'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasourcesUidUidResourcesDatasourceProxyRoute<TError = unknown>(
  args: InferRequestType<
    (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
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
        ? getGetDatasourcesUidUidResourcesDatasourceProxyRouteKey(args)
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
                (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
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
          client.datasources.uid[':uid'].resources[':datasource_proxy_route'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetDatasourcesDataSourceUIDCacheKey(
  args: InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>,
) {
  return ['datasources', '/datasources/:dataSourceUID/cache', args] as const
}

export function useGetDatasourcesDataSourceUIDCache<TError = unknown>(
  args: InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesDataSourceUIDCacheKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.datasources[':dataSourceUID'].cache.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDatasourcesDataSourceUIDCache<TError = unknown>(
  args: InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDatasourcesDataSourceUIDCacheKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.datasources[':dataSourceUID'].cache.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDatasourcesDataSourceUIDCacheKey() {
  return ['datasources', '/datasources/:dataSourceUID/cache', 'POST'] as const
}

export function usePostDatasourcesDataSourceUIDCache<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesDataSourceUIDCacheKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$post']>
        },
      ) => parseResponse(client.datasources[':dataSourceUID'].cache.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatasourcesDataSourceUIDCacheCleanKey() {
  return ['datasources', '/datasources/:dataSourceUID/cache/clean', 'POST'] as const
}

export function usePostDatasourcesDataSourceUIDCacheClean<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['clean']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['clean']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesDataSourceUIDCacheCleanKey()
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
            (typeof client.datasources)[':dataSourceUID']['cache']['clean']['$post']
          >
        },
      ) =>
        parseResponse(client.datasources[':dataSourceUID'].cache.clean.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatasourcesDataSourceUIDCacheDisableKey() {
  return ['datasources', '/datasources/:dataSourceUID/cache/disable', 'POST'] as const
}

export function usePostDatasourcesDataSourceUIDCacheDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['disable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesDataSourceUIDCacheDisableKey()
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
            (typeof client.datasources)[':dataSourceUID']['cache']['disable']['$post']
          >
        },
      ) =>
        parseResponse(client.datasources[':dataSourceUID'].cache.disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDatasourcesDataSourceUIDCacheEnableKey() {
  return ['datasources', '/datasources/:dataSourceUID/cache/enable', 'POST'] as const
}

export function usePostDatasourcesDataSourceUIDCacheEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['enable']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDatasourcesDataSourceUIDCacheEnableKey()
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
            (typeof client.datasources)[':dataSourceUID']['cache']['enable']['$post']
          >
        },
      ) =>
        parseResponse(client.datasources[':dataSourceUID'].cache.enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDsQueryKey() {
  return ['ds', '/ds/query', 'POST'] as const
}

export function usePostDsQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ds.query.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ds.query.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDsQueryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ds.query.$post> }) =>
        parseResponse(client.ds.query.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoldersKey(args: InferRequestType<typeof client.folders.$get>) {
  return ['folders', '/folders', args] as const
}

export function useGetFolders<TError = unknown>(
  args: InferRequestType<typeof client.folders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoldersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.folders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFolders<TError = unknown>(
  args: InferRequestType<typeof client.folders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFoldersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.folders.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFoldersKey() {
  return ['folders', '/folders', 'POST'] as const
}

export function usePostFolders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.folders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoldersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.folders.$post> }) =>
        parseResponse(client.folders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoldersFolderUidKey(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['$get']>,
) {
  return ['folders', '/folders/:folder_uid', args] as const
}

export function useGetFoldersFolderUid<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderUid<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFoldersFolderUidKey() {
  return ['folders', '/folders/:folder_uid', 'PUT'] as const
}

export function usePutFoldersFolderUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_uid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFoldersFolderUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.folders)[':folder_uid']['$put']> },
      ) => parseResponse(client.folders[':folder_uid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteFoldersFolderUidKey() {
  return ['folders', '/folders/:folder_uid', 'DELETE'] as const
}

export function useDeleteFoldersFolderUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFoldersFolderUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.folders)[':folder_uid']['$delete']> },
      ) => parseResponse(client.folders[':folder_uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoldersFolderUidCountsKey(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['counts']['$get']>,
) {
  return ['folders', '/folders/:folder_uid/counts', args] as const
}

export function useGetFoldersFolderUidCounts<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['counts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_uid']['counts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderUidCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_uid']['counts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_uid'].counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderUidCounts<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['counts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_uid']['counts']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderUidCountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_uid']['counts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.folders[':folder_uid'].counts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFoldersFolderUidMoveKey() {
  return ['folders', '/folders/:folder_uid/move', 'POST'] as const
}

export function usePostFoldersFolderUidMove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_uid']['move']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_uid']['move']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoldersFolderUidMoveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.folders)[':folder_uid']['move']['$post']> },
      ) => parseResponse(client.folders[':folder_uid'].move.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFoldersFolderUidPermissionsKey(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$get']>,
) {
  return ['folders', '/folders/:folder_uid/permissions', args] as const
}

export function useGetFoldersFolderUidPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderUidPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.folders[':folder_uid'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFoldersFolderUidPermissions<TError = unknown>(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetFoldersFolderUidPermissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.folders[':folder_uid'].permissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFoldersFolderUidPermissionsKey() {
  return ['folders', '/folders/:folder_uid/permissions', 'POST'] as const
}

export function usePostFoldersFolderUidPermissions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFoldersFolderUidPermissionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$post']>
        },
      ) => parseResponse(client.folders[':folder_uid'].permissions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHealthKey() {
  return ['health', '/health'] as const
}

export function useGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.health.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLibraryElementsKey(
  args: InferRequestType<(typeof client)['library-elements']['$get']>,
) {
  return ['library-elements', '/library-elements', args] as const
}

export function useGetLibraryElements<TError = unknown>(
  args: InferRequestType<(typeof client)['library-elements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLibraryElementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['library-elements'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLibraryElements<TError = unknown>(
  args: InferRequestType<(typeof client)['library-elements']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLibraryElementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['library-elements'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLibraryElementsKey() {
  return ['library-elements', '/library-elements', 'POST'] as const
}

export function usePostLibraryElements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['library-elements']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLibraryElementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['library-elements']['$post']> },
      ) => parseResponse(client['library-elements'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLibraryElementsNameLibraryElementNameKey(
  args: InferRequestType<
    (typeof client)['library-elements']['name'][':library_element_name']['$get']
  >,
) {
  return ['library-elements', '/library-elements/name/:library_element_name', args] as const
}

export function useGetLibraryElementsNameLibraryElementName<TError = unknown>(
  args: InferRequestType<
    (typeof client)['library-elements']['name'][':library_element_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['library-elements']['name'][':library_element_name']['$get']
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
        ? getGetLibraryElementsNameLibraryElementNameKey(args)
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
                (typeof client)['library-elements']['name'][':library_element_name']['$get']
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
          client['library-elements'].name[':library_element_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLibraryElementsNameLibraryElementName<TError = unknown>(
  args: InferRequestType<
    (typeof client)['library-elements']['name'][':library_element_name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['library-elements']['name'][':library_element_name']['$get']
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
        ? getGetLibraryElementsNameLibraryElementNameKey(args)
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
                (typeof client)['library-elements']['name'][':library_element_name']['$get']
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
          client['library-elements'].name[':library_element_name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLibraryElementsLibraryElementUidKey(
  args: InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$get']>,
) {
  return ['library-elements', '/library-elements/:library_element_uid', args] as const
}

export function useGetLibraryElementsLibraryElementUid<TError = unknown>(
  args: InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['library-elements'][':library_element_uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLibraryElementsLibraryElementUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['library-elements'][':library_element_uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['library-elements'][':library_element_uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLibraryElementsLibraryElementUid<TError = unknown>(
  args: InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['library-elements'][':library_element_uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLibraryElementsLibraryElementUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['library-elements'][':library_element_uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['library-elements'][':library_element_uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLibraryElementsLibraryElementUidKey() {
  return ['library-elements', '/library-elements/:library_element_uid', 'DELETE'] as const
}

export function useDeleteLibraryElementsLibraryElementUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['library-elements'][':library_element_uid']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLibraryElementsLibraryElementUidKey()
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
            (typeof client)['library-elements'][':library_element_uid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['library-elements'][':library_element_uid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchLibraryElementsLibraryElementUidKey() {
  return ['library-elements', '/library-elements/:library_element_uid', 'PATCH'] as const
}

export function usePatchLibraryElementsLibraryElementUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['library-elements'][':library_element_uid']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLibraryElementsLibraryElementUidKey()
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
            (typeof client)['library-elements'][':library_element_uid']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['library-elements'][':library_element_uid'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetLibraryElementsLibraryElementUidConnectionsIndexKey(
  args: InferRequestType<
    (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
  >,
) {
  return ['library-elements', '/library-elements/:library_element_uid/connections/', args] as const
}

export function useGetLibraryElementsLibraryElementUidConnectionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
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
        ? getGetLibraryElementsLibraryElementUidConnectionsIndexKey(args)
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
                (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
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
          client['library-elements'][':library_element_uid'].connections.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLibraryElementsLibraryElementUidConnectionsIndex<TError = unknown>(
  args: InferRequestType<
    (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
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
        ? getGetLibraryElementsLibraryElementUidConnectionsIndexKey(args)
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
                (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
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
          client['library-elements'][':library_element_uid'].connections.index.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLicensingCheckKey() {
  return ['licensing', '/licensing/check'] as const
}

export function useGetLicensingCheck<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.check.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensingCheckKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.check.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licensing.check.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicensingCheck<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.check.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensingCheckKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.check.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licensing.check.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLicensingCustomPermissionsKey() {
  return ['licensing', '/licensing/custom-permissions'] as const
}

export function useGetLicensingCustomPermissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensing)['custom-permissions']['$get']>>
        >
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
        ? getGetLicensingCustomPermissionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensing)['custom-permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.licensing['custom-permissions'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicensingCustomPermissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensing)['custom-permissions']['$get']>>
        >
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
        ? getGetLicensingCustomPermissionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensing)['custom-permissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.licensing['custom-permissions'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLicensingCustomPermissionsCsvKey() {
  return ['licensing', '/licensing/custom-permissions-csv'] as const
}

export function useGetLicensingCustomPermissionsCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensing)['custom-permissions-csv']['$get']>>
        >
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
        ? getGetLicensingCustomPermissionsCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensing)['custom-permissions-csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.licensing['custom-permissions-csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicensingCustomPermissionsCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensing)['custom-permissions-csv']['$get']>>
        >
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
        ? getGetLicensingCustomPermissionsCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensing)['custom-permissions-csv']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.licensing['custom-permissions-csv'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLicensingRefreshStatsKey() {
  return ['licensing', '/licensing/refresh-stats'] as const
}

export function useGetLicensingRefreshStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensing)['refresh-stats']['$get']>>
        >
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
        ? getGetLicensingRefreshStatsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensing)['refresh-stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licensing['refresh-stats'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicensingRefreshStats<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensing)['refresh-stats']['$get']>>
        >
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
        ? getGetLicensingRefreshStatsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.licensing)['refresh-stats']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licensing['refresh-stats'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetLicensingTokenKey() {
  return ['licensing', '/licensing/token'] as const
}

export function useGetLicensingToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensingTokenKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licensing.token.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLicensingToken<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLicensingTokenKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.licensing.token.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLicensingTokenKey() {
  return ['licensing', '/licensing/token', 'POST'] as const
}

export function usePostLicensingToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.licensing.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLicensingTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.licensing.token.$post> }) =>
        parseResponse(client.licensing.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLicensingTokenKey() {
  return ['licensing', '/licensing/token', 'DELETE'] as const
}

export function useDeleteLicensingToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.licensing.token.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLicensingTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.licensing.token.$delete> }) =>
        parseResponse(client.licensing.token.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostLicensingTokenRenewKey() {
  return ['licensing', '/licensing/token/renew', 'POST'] as const
}

export function usePostLicensingTokenRenew<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.renew.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.licensing.token.renew.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLicensingTokenRenewKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.licensing.token.renew.$post> },
      ) => parseResponse(client.licensing.token.renew.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLogoutSamlKey() {
  return ['logout', '/logout/saml'] as const
}

export function useGetLogoutSaml<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.saml.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogoutSamlKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.saml.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logout.saml.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLogoutSaml<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.saml.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLogoutSamlKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.saml.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.logout.saml.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgKey() {
  return ['org', '/org'] as const
}

export function useGetOrg<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetOrgKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.org.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOrg<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetOrgKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.org.$get(undefined, clientOptions)), restSwrOptions),
  }
}

export function getPutOrgKey() {
  return ['org', '/org', 'PUT'] as const
}

export function usePutOrg<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.org.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.org.$put> }) =>
        parseResponse(client.org.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrgAddressKey() {
  return ['org', '/org/address', 'PUT'] as const
}

export function usePutOrgAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.address.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.org.address.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.org.address.$put> }) =>
        parseResponse(client.org.address.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgInvitesKey() {
  return ['org', '/org/invites'] as const
}

export function useGetOrgInvites<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgInvitesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.invites.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgInvites<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgInvitesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.invites.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgInvitesKey() {
  return ['org', '/org/invites', 'POST'] as const
}

export function usePostOrgInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.org.invites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.org.invites.$post> }) =>
        parseResponse(client.org.invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgInvitesInvitationCodeRevokeKey() {
  return ['org', '/org/invites/:invitation_code/revoke', 'DELETE'] as const
}

export function useDeleteOrgInvitesInvitationCodeRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.invites)[':invitation_code']['revoke']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.invites)[':invitation_code']['revoke']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgInvitesInvitationCodeRevokeKey()
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
            (typeof client.org.invites)[':invitation_code']['revoke']['$delete']
          >
        },
      ) => parseResponse(client.org.invites[':invitation_code'].revoke.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgPreferencesKey() {
  return ['org', '/org/preferences'] as const
}

export function useGetOrgPreferences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgPreferencesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.preferences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgPreferences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgPreferencesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.preferences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrgPreferencesKey() {
  return ['org', '/org/preferences', 'PUT'] as const
}

export function usePutOrgPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.org.preferences.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgPreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.org.preferences.$put> }) =>
        parseResponse(client.org.preferences.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrgPreferencesKey() {
  return ['org', '/org/preferences', 'PATCH'] as const
}

export function usePatchOrgPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.org.preferences.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgPreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.org.preferences.$patch> }) =>
        parseResponse(client.org.preferences.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgQuotasKey() {
  return ['org', '/org/quotas'] as const
}

export function useGetOrgQuotas<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.quotas.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgQuotasKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.quotas.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.quotas.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgQuotas<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.quotas.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgQuotasKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.quotas.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.quotas.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgUsersKey(args: InferRequestType<typeof client.org.users.$get>) {
  return ['org', '/org/users', args] as const
}

export function useGetOrgUsers<TError = unknown>(
  args: InferRequestType<typeof client.org.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgUsers<TError = unknown>(
  args: InferRequestType<typeof client.org.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgUsersKey() {
  return ['org', '/org/users', 'POST'] as const
}

export function usePostOrgUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.org.users.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.org.users.$post> }) =>
        parseResponse(client.org.users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgUsersLookupKey(
  args: InferRequestType<typeof client.org.users.lookup.$get>,
) {
  return ['org', '/org/users/lookup', args] as const
}

export function useGetOrgUsersLookup<TError = unknown>(
  args: InferRequestType<typeof client.org.users.lookup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.lookup.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgUsersLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.lookup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.users.lookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgUsersLookup<TError = unknown>(
  args: InferRequestType<typeof client.org.users.lookup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.lookup.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgUsersLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.lookup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.org.users.lookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrgUsersUserIdKey() {
  return ['org', '/org/users/:user_id', 'DELETE'] as const
}

export function useDeleteOrgUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.users)[':user_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.users)[':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.users)[':user_id']['$delete']> },
      ) => parseResponse(client.org.users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrgUsersUserIdKey() {
  return ['org', '/org/users/:user_id', 'PATCH'] as const
}

export function usePatchOrgUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.users)[':user_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.org.users)[':user_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.org.users)[':user_id']['$patch']> },
      ) => parseResponse(client.org.users[':user_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsKey(args: InferRequestType<typeof client.orgs.$get>) {
  return ['orgs', '/orgs', args] as const
}

export function useGetOrgs<TError = unknown>(
  args: InferRequestType<typeof client.orgs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.orgs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOrgs<TError = unknown>(
  args: InferRequestType<typeof client.orgs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.orgs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostOrgsKey() {
  return ['orgs', '/orgs', 'POST'] as const
}

export function usePostOrgs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.orgs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.orgs.$post> }) =>
        parseResponse(client.orgs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsNameOrgNameKey(
  args: InferRequestType<(typeof client.orgs.name)[':org_name']['$get']>,
) {
  return ['orgs', '/orgs/name/:org_name', args] as const
}

export function useGetOrgsNameOrgName<TError = unknown>(
  args: InferRequestType<(typeof client.orgs.name)[':org_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs.name)[':org_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsNameOrgNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs.name)[':org_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs.name[':org_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsNameOrgName<TError = unknown>(
  args: InferRequestType<(typeof client.orgs.name)[':org_name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs.name)[':org_name']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsNameOrgNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs.name)[':org_name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs.name[':org_name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrgsOrgIdKey(
  args: InferRequestType<(typeof client.orgs)[':org_id']['$get']>,
) {
  return ['orgs', '/orgs/:org_id', args] as const
}

export function useGetOrgsOrgId<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':org_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgsOrgIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':org_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsOrgId<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':org_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgsOrgIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':org_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrgsOrgIdKey() {
  return ['orgs', '/orgs/:org_id', 'PUT'] as const
}

export function usePutOrgsOrgId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':org_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgsOrgIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.orgs)[':org_id']['$put']> }) =>
        parseResponse(client.orgs[':org_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteOrgsOrgIdKey() {
  return ['orgs', '/orgs/:org_id', 'DELETE'] as const
}

export function useDeleteOrgsOrgId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':org_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgsOrgIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orgs)[':org_id']['$delete']> },
      ) => parseResponse(client.orgs[':org_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutOrgsOrgIdAddressKey() {
  return ['orgs', '/orgs/:org_id/address', 'PUT'] as const
}

export function usePutOrgsOrgIdAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':org_id']['address']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':org_id']['address']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgsOrgIdAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orgs)[':org_id']['address']['$put']> },
      ) => parseResponse(client.orgs[':org_id'].address.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsOrgIdQuotasKey(
  args: InferRequestType<(typeof client.orgs)[':org_id']['quotas']['$get']>,
) {
  return ['orgs', '/orgs/:org_id/quotas', args] as const
}

export function useGetOrgsOrgIdQuotas<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':org_id']['quotas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsOrgIdQuotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':org_id'].quotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsOrgIdQuotas<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':org_id']['quotas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsOrgIdQuotasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':org_id'].quotas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutOrgsOrgIdQuotasQuotaTargetKey() {
  return ['orgs', '/orgs/:org_id/quotas/:quota_target', 'PUT'] as const
}

export function usePutOrgsOrgIdQuotasQuotaTarget<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas'][':quota_target']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':org_id']['quotas'][':quota_target']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutOrgsOrgIdQuotasQuotaTargetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.orgs)[':org_id']['quotas'][':quota_target']['$put']>
        },
      ) => parseResponse(client.orgs[':org_id'].quotas[':quota_target'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsOrgIdUsersKey(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['$get']>,
) {
  return ['orgs', '/orgs/:org_id/users', args] as const
}

export function useGetOrgsOrgIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgsOrgIdUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':org_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsOrgIdUsers<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrgsOrgIdUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':org_id'].users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrgsOrgIdUsersKey() {
  return ['orgs', '/orgs/:org_id/users', 'POST'] as const
}

export function usePostOrgsOrgIdUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':org_id']['users']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrgsOrgIdUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orgs)[':org_id']['users']['$post']> },
      ) => parseResponse(client.orgs[':org_id'].users.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrgsOrgIdUsersSearchKey(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['search']['$get']>,
) {
  return ['orgs', '/orgs/:org_id/users/search', args] as const
}

export function useGetOrgsOrgIdUsersSearch<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsOrgIdUsersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':org_id'].users.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrgsOrgIdUsersSearch<TError = unknown>(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOrgsOrgIdUsersSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orgs[':org_id'].users.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOrgsOrgIdUsersUserIdKey() {
  return ['orgs', '/orgs/:org_id/users/:user_id', 'DELETE'] as const
}

export function useDeleteOrgsOrgIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':org_id']['users'][':user_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':org_id']['users'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOrgsOrgIdUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.orgs)[':org_id']['users'][':user_id']['$delete']>
        },
      ) => parseResponse(client.orgs[':org_id'].users[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOrgsOrgIdUsersUserIdKey() {
  return ['orgs', '/orgs/:org_id/users/:user_id', 'PATCH'] as const
}

export function usePatchOrgsOrgIdUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':org_id']['users'][':user_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orgs)[':org_id']['users'][':user_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOrgsOrgIdUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.orgs)[':org_id']['users'][':user_id']['$patch']>
        },
      ) => parseResponse(client.orgs[':org_id'].users[':user_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlaylistsKey(args: InferRequestType<typeof client.playlists.$get>) {
  return ['playlists', '/playlists', args] as const
}

export function useGetPlaylists<TError = unknown>(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaylistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylists<TError = unknown>(
  args: InferRequestType<typeof client.playlists.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaylistsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPlaylistsKey() {
  return ['playlists', '/playlists', 'POST'] as const
}

export function usePostPlaylists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.playlists.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPlaylistsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.playlists.$post> }) =>
        parseResponse(client.playlists.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlaylistsUidKey(
  args: InferRequestType<(typeof client.playlists)[':uid']['$get']>,
) {
  return ['playlists', '/playlists/:uid', args] as const
}

export function useGetPlaylistsUid<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaylistsUidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsUid<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPlaylistsUidKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPlaylistsUidKey() {
  return ['playlists', '/playlists/:uid', 'PUT'] as const
}

export function usePutPlaylistsUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':uid']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPlaylistsUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.playlists)[':uid']['$put']> },
      ) => parseResponse(client.playlists[':uid'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePlaylistsUidKey() {
  return ['playlists', '/playlists/:uid', 'DELETE'] as const
}

export function useDeletePlaylistsUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.playlists)[':uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePlaylistsUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.playlists)[':uid']['$delete']> },
      ) => parseResponse(client.playlists[':uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPlaylistsUidItemsKey(
  args: InferRequestType<(typeof client.playlists)[':uid']['items']['$get']>,
) {
  return ['playlists', '/playlists/:uid/items', args] as const
}

export function useGetPlaylistsUidItems<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':uid']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':uid']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlaylistsUidItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':uid']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':uid'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPlaylistsUidItems<TError = unknown>(
  args: InferRequestType<(typeof client.playlists)[':uid']['items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':uid']['items']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPlaylistsUidItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.playlists)[':uid']['items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.playlists[':uid'].items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPublicDashboardsAccessTokenKey(
  args: InferRequestType<(typeof client.public.dashboards)[':accessToken']['$get']>,
) {
  return ['public', '/public/dashboards/:accessToken', args] as const
}

export function useGetPublicDashboardsAccessToken<TError = unknown>(
  args: InferRequestType<(typeof client.public.dashboards)[':accessToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.dashboards)[':accessToken']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicDashboardsAccessTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.dashboards)[':accessToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.dashboards[':accessToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicDashboardsAccessToken<TError = unknown>(
  args: InferRequestType<(typeof client.public.dashboards)[':accessToken']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.dashboards)[':accessToken']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicDashboardsAccessTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.public.dashboards)[':accessToken']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.public.dashboards[':accessToken'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPublicDashboardsAccessTokenAnnotationsKey(
  args: InferRequestType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>,
) {
  return ['public', '/public/dashboards/:accessToken/annotations', args] as const
}

export function useGetPublicDashboardsAccessTokenAnnotations<TError = unknown>(
  args: InferRequestType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicDashboardsAccessTokenAnnotationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public.dashboards[':accessToken'].annotations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPublicDashboardsAccessTokenAnnotations<TError = unknown>(
  args: InferRequestType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPublicDashboardsAccessTokenAnnotationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.public.dashboards[':accessToken'].annotations.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPublicDashboardsAccessTokenPanelsPanelIdQueryKey() {
  return ['public', '/public/dashboards/:accessToken/panels/:panelId/query', 'POST'] as const
}

export function usePostPublicDashboardsAccessTokenPanelsPanelIdQuery<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.public.dashboards)[':accessToken']['panels'][':panelId']['query']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.public.dashboards)[':accessToken']['panels'][':panelId']['query']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPublicDashboardsAccessTokenPanelsPanelIdQueryKey()
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
            (typeof client.public.dashboards)[':accessToken']['panels'][':panelId']['query']['$post']
          >
        },
      ) =>
        parseResponse(
          client.public.dashboards[':accessToken'].panels[':panelId'].query.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetQueryHistoryKey(
  args: InferRequestType<(typeof client)['query-history']['$get']>,
) {
  return ['query-history', '/query-history', args] as const
}

export function useGetQueryHistory<TError = unknown>(
  args: InferRequestType<(typeof client)['query-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['query-history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQueryHistory<TError = unknown>(
  args: InferRequestType<(typeof client)['query-history']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQueryHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['query-history'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQueryHistoryKey() {
  return ['query-history', '/query-history', 'POST'] as const
}

export function usePostQueryHistory<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['query-history']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryHistoryKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['query-history']['$post']> },
      ) => parseResponse(client['query-history'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostQueryHistoryStarQueryHistoryUidKey() {
  return ['query-history', '/query-history/star/:query_history_uid', 'POST'] as const
}

export function usePostQueryHistoryStarQueryHistoryUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['query-history']['star'][':query_history_uid']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['query-history']['star'][':query_history_uid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQueryHistoryStarQueryHistoryUidKey()
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
            (typeof client)['query-history']['star'][':query_history_uid']['$post']
          >
        },
      ) =>
        parseResponse(client['query-history'].star[':query_history_uid'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteQueryHistoryStarQueryHistoryUidKey() {
  return ['query-history', '/query-history/star/:query_history_uid', 'DELETE'] as const
}

export function useDeleteQueryHistoryStarQueryHistoryUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['query-history']['star'][':query_history_uid']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['query-history']['star'][':query_history_uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQueryHistoryStarQueryHistoryUidKey()
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
            (typeof client)['query-history']['star'][':query_history_uid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['query-history'].star[':query_history_uid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteQueryHistoryQueryHistoryUidKey() {
  return ['query-history', '/query-history/:query_history_uid', 'DELETE'] as const
}

export function useDeleteQueryHistoryQueryHistoryUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['query-history'][':query_history_uid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['query-history'][':query_history_uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteQueryHistoryQueryHistoryUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['query-history'][':query_history_uid']['$delete']>
        },
      ) => parseResponse(client['query-history'][':query_history_uid'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchQueryHistoryQueryHistoryUidKey() {
  return ['query-history', '/query-history/:query_history_uid', 'PATCH'] as const
}

export function usePatchQueryHistoryQueryHistoryUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['query-history'][':query_history_uid']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['query-history'][':query_history_uid']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchQueryHistoryQueryHistoryUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['query-history'][':query_history_uid']['$patch']>
        },
      ) => parseResponse(client['query-history'][':query_history_uid'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecordingRulesKey() {
  return ['recording-rules', '/recording-rules'] as const
}

export function useGetRecordingRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecordingRulesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['recording-rules'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecordingRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRecordingRulesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['recording-rules'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRecordingRulesKey() {
  return ['recording-rules', '/recording-rules', 'PUT'] as const
}

export function usePutRecordingRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['recording-rules']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRecordingRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['recording-rules']['$put']> },
      ) => parseResponse(client['recording-rules'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecordingRulesKey() {
  return ['recording-rules', '/recording-rules', 'POST'] as const
}

export function usePostRecordingRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['recording-rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecordingRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['recording-rules']['$post']> },
      ) => parseResponse(client['recording-rules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRecordingRulesTestKey() {
  return ['recording-rules', '/recording-rules/test', 'POST'] as const
}

export function usePostRecordingRulesTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['recording-rules']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['recording-rules']['test']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecordingRulesTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['recording-rules']['test']['$post']> },
      ) => parseResponse(client['recording-rules'].test.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRecordingRulesWriterKey() {
  return ['recording-rules', '/recording-rules/writer'] as const
}

export function useGetRecordingRulesWriter<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$get']>>
        >
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
        ? getGetRecordingRulesWriterKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['recording-rules'].writer.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRecordingRulesWriter<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$get']>>
        >
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
        ? getGetRecordingRulesWriterKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['recording-rules'].writer.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRecordingRulesWriterKey() {
  return ['recording-rules', '/recording-rules/writer', 'POST'] as const
}

export function usePostRecordingRulesWriter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['recording-rules']['writer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRecordingRulesWriterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['recording-rules']['writer']['$post']> },
      ) => parseResponse(client['recording-rules'].writer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRecordingRulesWriterKey() {
  return ['recording-rules', '/recording-rules/writer', 'DELETE'] as const
}

export function useDeleteRecordingRulesWriter<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRecordingRulesWriterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client['recording-rules'].writer.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteRecordingRulesRecordingRuleIDKey() {
  return ['recording-rules', '/recording-rules/:recordingRuleID', 'DELETE'] as const
}

export function useDeleteRecordingRulesRecordingRuleID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['recording-rules'][':recordingRuleID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['recording-rules'][':recordingRuleID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRecordingRulesRecordingRuleIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['recording-rules'][':recordingRuleID']['$delete']>
        },
      ) => parseResponse(client['recording-rules'][':recordingRuleID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportsKey() {
  return ['reports', '/reports'] as const
}

export function useGetReports<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReports<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReportsKey() {
  return ['reports', '/reports', 'POST'] as const
}

export function usePostReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.reports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reports.$post> }) =>
        parseResponse(client.reports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportsDashboardsUidKey(
  args: InferRequestType<(typeof client.reports.dashboards)[':uid']['$get']>,
) {
  return ['reports', '/reports/dashboards/:uid', args] as const
}

export function useGetReportsDashboardsUid<TError = unknown>(
  args: InferRequestType<(typeof client.reports.dashboards)[':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.dashboards)[':uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsDashboardsUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.dashboards)[':uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.dashboards[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsDashboardsUid<TError = unknown>(
  args: InferRequestType<(typeof client.reports.dashboards)[':uid']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.dashboards)[':uid']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsDashboardsUidKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.dashboards)[':uid']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.dashboards[':uid'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReportsEmailKey() {
  return ['reports', '/reports/email', 'POST'] as const
}

export function usePostReportsEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.email.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reports.email.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reports.email.$post> }) =>
        parseResponse(client.reports.email.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportsImagesImageKey() {
  return ['reports', '/reports/images/:image'] as const
}

export function useGetReportsImagesImage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports.images)[':image']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsImagesImageKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.images)[':image']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.images[':image'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsImagesImage<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports.images)[':image']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsImagesImageKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.reports.images)[':image']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.images[':image'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsRenderCsvsKey(
  args: InferRequestType<typeof client.reports.render.csvs.$get>,
) {
  return ['reports', '/reports/render/csvs', args] as const
}

export function useGetReportsRenderCsvs<TError = unknown>(
  args: InferRequestType<typeof client.reports.render.csvs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.csvs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsRenderCsvsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.csvs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.render.csvs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsRenderCsvs<TError = unknown>(
  args: InferRequestType<typeof client.reports.render.csvs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.csvs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsRenderCsvsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.csvs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.render.csvs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsRenderPdfsKey(
  args: InferRequestType<typeof client.reports.render.pdfs.$get>,
) {
  return ['reports', '/reports/render/pdfs', args] as const
}

export function useGetReportsRenderPdfs<TError = unknown>(
  args: InferRequestType<typeof client.reports.render.pdfs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.pdfs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsRenderPdfsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.pdfs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.render.pdfs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsRenderPdfs<TError = unknown>(
  args: InferRequestType<typeof client.reports.render.pdfs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.pdfs.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReportsRenderPdfsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.pdfs.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.render.pdfs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReportsSettingsKey() {
  return ['reports', '/reports/settings'] as const
}

export function useGetReportsSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostReportsSettingsKey() {
  return ['reports', '/reports/settings', 'POST'] as const
}

export function usePostReportsSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.reports.settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.reports.settings.$post> }) =>
        parseResponse(client.reports.settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportsTestEmailKey() {
  return ['reports', '/reports/test-email', 'POST'] as const
}

export function usePostReportsTestEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports)['test-email']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reports)['test-email']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportsTestEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reports)['test-email']['$post']> },
      ) => parseResponse(client.reports['test-email'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReportsIdKey(args: InferRequestType<(typeof client.reports)[':id']['$get']>) {
  return ['reports', '/reports/:id', args] as const
}

export function useGetReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReportsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutReportsIdKey() {
  return ['reports', '/reports/:id', 'PUT'] as const
}

export function usePutReportsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reports)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReportsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.reports)[':id']['$put']> }) =>
        parseResponse(client.reports[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteReportsIdKey() {
  return ['reports', '/reports/:id', 'DELETE'] as const
}

export function useDeleteReportsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.reports)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteReportsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.reports)[':id']['$delete']> },
      ) => parseResponse(client.reports[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSamlAcsKey() {
  return ['saml', '/saml/acs', 'POST'] as const
}

export function usePostSamlAcs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.acs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.saml.acs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSamlAcsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.saml.acs.$post> }) =>
        parseResponse(client.saml.acs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSamlMetadataKey() {
  return ['saml', '/saml/metadata'] as const
}

export function useGetSamlMetadata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSamlMetadataKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saml.metadata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSamlMetadata<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSamlMetadataKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saml.metadata.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSamlSloKey() {
  return ['saml', '/saml/slo'] as const
}

export function useGetSamlSlo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSamlSloKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saml.slo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSamlSlo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSamlSloKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.saml.slo.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSamlSloKey() {
  return ['saml', '/saml/slo', 'POST'] as const
}

export function usePostSamlSlo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.saml.slo.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSamlSloKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.saml.slo.$post> }) =>
        parseResponse(client.saml.slo.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSearchKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function useGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSearch<TError = unknown>(
  args: InferRequestType<typeof client.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.search.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetSearchSortingKey() {
  return ['search', '/search/sorting'] as const
}

export function useGetSearchSorting<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.sorting.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchSortingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.sorting.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.sorting.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSearchSorting<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.sorting.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSearchSortingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.sorting.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.search.sorting.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServiceaccountsKey() {
  return ['serviceaccounts', '/serviceaccounts', 'POST'] as const
}

export function usePostServiceaccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.serviceaccounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServiceaccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.serviceaccounts.$post> }) =>
        parseResponse(client.serviceaccounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServiceaccountsSearchKey(
  args: InferRequestType<typeof client.serviceaccounts.search.$get>,
) {
  return ['serviceaccounts', '/serviceaccounts/search', args] as const
}

export function useGetServiceaccountsSearch<TError = unknown>(
  args: InferRequestType<typeof client.serviceaccounts.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServiceaccountsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.serviceaccounts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceaccountsSearch<TError = unknown>(
  args: InferRequestType<typeof client.serviceaccounts.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.search.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServiceaccountsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.search.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.serviceaccounts.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServiceaccountsServiceAccountIdKey(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>,
) {
  return ['serviceaccounts', '/serviceaccounts/:serviceAccountId', args] as const
}

export function useGetServiceaccountsServiceAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServiceaccountsServiceAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.serviceaccounts[':serviceAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceaccountsServiceAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServiceaccountsServiceAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.serviceaccounts[':serviceAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteServiceaccountsServiceAccountIdKey() {
  return ['serviceaccounts', '/serviceaccounts/:serviceAccountId', 'DELETE'] as const
}

export function useDeleteServiceaccountsServiceAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServiceaccountsServiceAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$delete']>
        },
      ) => parseResponse(client.serviceaccounts[':serviceAccountId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchServiceaccountsServiceAccountIdKey() {
  return ['serviceaccounts', '/serviceaccounts/:serviceAccountId', 'PATCH'] as const
}

export function usePatchServiceaccountsServiceAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchServiceaccountsServiceAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$patch']>
        },
      ) => parseResponse(client.serviceaccounts[':serviceAccountId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetServiceaccountsServiceAccountIdTokensKey(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>,
) {
  return ['serviceaccounts', '/serviceaccounts/:serviceAccountId/tokens', args] as const
}

export function useGetServiceaccountsServiceAccountIdTokens<TError = unknown>(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServiceaccountsServiceAccountIdTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.serviceaccounts[':serviceAccountId'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServiceaccountsServiceAccountIdTokens<TError = unknown>(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetServiceaccountsServiceAccountIdTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.serviceaccounts[':serviceAccountId'].tokens.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostServiceaccountsServiceAccountIdTokensKey() {
  return ['serviceaccounts', '/serviceaccounts/:serviceAccountId/tokens', 'POST'] as const
}

export function usePostServiceaccountsServiceAccountIdTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostServiceaccountsServiceAccountIdTokensKey()
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
            (typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$post']
          >
        },
      ) =>
        parseResponse(client.serviceaccounts[':serviceAccountId'].tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteServiceaccountsServiceAccountIdTokensTokenIdKey() {
  return [
    'serviceaccounts',
    '/serviceaccounts/:serviceAccountId/tokens/:tokenId',
    'DELETE',
  ] as const
}

export function useDeleteServiceaccountsServiceAccountIdTokensTokenId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.serviceaccounts)[':serviceAccountId']['tokens'][':tokenId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.serviceaccounts)[':serviceAccountId']['tokens'][':tokenId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteServiceaccountsServiceAccountIdTokensTokenIdKey()
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
            (typeof client.serviceaccounts)[':serviceAccountId']['tokens'][':tokenId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.serviceaccounts[':serviceAccountId'].tokens[':tokenId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSigningKeysKeysKey() {
  return ['signing-keys', '/signing-keys/keys'] as const
}

export function useGetSigningKeysKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-keys']['keys']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSigningKeysKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-keys']['keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['signing-keys'].keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSigningKeysKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-keys']['keys']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSigningKeysKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-keys']['keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['signing-keys'].keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSnapshotSharedOptionsKey() {
  return ['snapshot', '/snapshot/shared-options'] as const
}

export function useGetSnapshotSharedOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshot)['shared-options']['$get']>>
        >
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
        ? getGetSnapshotSharedOptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshot)['shared-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshot['shared-options'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshotSharedOptions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshot)['shared-options']['$get']>>
        >
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
        ? getGetSnapshotSharedOptionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.snapshot)['shared-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshot['shared-options'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSnapshotsKey() {
  return ['snapshots', '/snapshots', 'POST'] as const
}

export function usePostSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.snapshots.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.snapshots.$post> }) =>
        parseResponse(client.snapshots.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSnapshotsDeleteDeleteKeyKey(
  args: InferRequestType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>,
) {
  return ['snapshots-delete', '/snapshots-delete/:deleteKey', args] as const
}

export function useGetSnapshotsDeleteDeleteKey<TError = unknown>(
  args: InferRequestType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSnapshotsDeleteDeleteKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['snapshots-delete'][':deleteKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshotsDeleteDeleteKey<TError = unknown>(
  args: InferRequestType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSnapshotsDeleteDeleteKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['snapshots-delete'][':deleteKey'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSnapshotsKeyKey(
  args: InferRequestType<(typeof client.snapshots)[':key']['$get']>,
) {
  return ['snapshots', '/snapshots/:key', args] as const
}

export function useGetSnapshotsKey<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapshotsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSnapshotsKey<TError = unknown>(
  args: InferRequestType<(typeof client.snapshots)[':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSnapshotsKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.snapshots[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSnapshotsKeyKey() {
  return ['snapshots', '/snapshots/:key', 'DELETE'] as const
}

export function useDeleteSnapshotsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.snapshots)[':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSnapshotsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.snapshots)[':key']['$delete']> },
      ) => parseResponse(client.snapshots[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTeamsKey() {
  return ['teams', '/teams', 'POST'] as const
}

export function usePostTeams<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.teams.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.teams.$post> }) =>
        parseResponse(client.teams.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsSearchKey(args: InferRequestType<typeof client.teams.search.$get>) {
  return ['teams', '/teams/search', args] as const
}

export function useGetTeamsSearch<TError = unknown>(
  args: InferRequestType<typeof client.teams.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsSearch<TError = unknown>(
  args: InferRequestType<typeof client.teams.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamIdGroupsKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['$get']>,
) {
  return ['teams', '/teams/:teamId/groups', args] as const
}

export function useGetTeamsTeamIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdGroups<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamId'].groups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamsTeamIdGroupsKey() {
  return ['teams', '/teams/:teamId/groups', 'POST'] as const
}

export function usePostTeamsTeamIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':teamId']['groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsTeamIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teams)[':teamId']['groups']['$post']> },
      ) => parseResponse(client.teams[':teamId'].groups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamsTeamIdGroupsKey() {
  return ['teams', '/teams/:teamId/groups', 'DELETE'] as const
}

export function useDeleteTeamsTeamIdGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':teamId']['groups']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamsTeamIdGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teams)[':teamId']['groups']['$delete']> },
      ) => parseResponse(client.teams[':teamId'].groups.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsTeamIdGroupsSearchKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['search']['$get']>,
) {
  return ['teams', '/teams/:teamId/groups/search', args] as const
}

export function useGetTeamsTeamIdGroupsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdGroupsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamId'].groups.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdGroupsSearch<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdGroupsSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':teamId'].groups.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamsTeamIdKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
) {
  return ['teams', '/teams/:team_id', args] as const
}

export function useGetTeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamsTeamIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTeamsTeamIdKey() {
  return ['teams', '/teams/:team_id', 'PUT'] as const
}

export function usePutTeamsTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':team_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teams)[':team_id']['$put']> },
      ) => parseResponse(client.teams[':team_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamsTeamIdKey() {
  return ['teams', '/teams/:team_id', 'DELETE'] as const
}

export function useDeleteTeamsTeamId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':team_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamsTeamIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teams)[':team_id']['$delete']> },
      ) => parseResponse(client.teams[':team_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsTeamIdMembersKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['members']['$get']>,
) {
  return ['teams', '/teams/:team_id/members', args] as const
}

export function useGetTeamsTeamIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdMembers<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTeamsTeamIdMembersKey() {
  return ['teams', '/teams/:team_id/members', 'PUT'] as const
}

export function usePutTeamsTeamIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':team_id']['members']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsTeamIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teams)[':team_id']['members']['$put']> },
      ) => parseResponse(client.teams[':team_id'].members.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTeamsTeamIdMembersKey() {
  return ['teams', '/teams/:team_id/members', 'POST'] as const
}

export function usePostTeamsTeamIdMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':team_id']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamsTeamIdMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.teams)[':team_id']['members']['$post']> },
      ) => parseResponse(client.teams[':team_id'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTeamsTeamIdMembersUserIdKey() {
  return ['teams', '/teams/:team_id/members/:user_id', 'PUT'] as const
}

export function usePutTeamsTeamIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['members'][':user_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsTeamIdMembersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$put']>
        },
      ) => parseResponse(client.teams[':team_id'].members[':user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamsTeamIdMembersUserIdKey() {
  return ['teams', '/teams/:team_id/members/:user_id', 'DELETE'] as const
}

export function useDeleteTeamsTeamIdMembersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['members'][':user_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamsTeamIdMembersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$delete']>
        },
      ) => parseResponse(client.teams[':team_id'].members[':user_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamsTeamIdPreferencesKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['preferences']['$get']>,
) {
  return ['teams', '/teams/:team_id/preferences', args] as const
}

export function useGetTeamsTeamIdPreferences<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].preferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamsTeamIdPreferences<TError = unknown>(
  args: InferRequestType<(typeof client.teams)[':team_id']['preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamsTeamIdPreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.teams[':team_id'].preferences.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTeamsTeamIdPreferencesKey() {
  return ['teams', '/teams/:team_id/preferences', 'PUT'] as const
}

export function usePutTeamsTeamIdPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.teams)[':team_id']['preferences']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamsTeamIdPreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.teams)[':team_id']['preferences']['$put']> },
      ) => parseResponse(client.teams[':team_id'].preferences.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserKey() {
  return ['user', '/user'] as const
}

export function useGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserKey() {
  return ['user', '/user', 'PUT'] as const
}

export function usePutUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.user.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.$put> }) =>
        parseResponse(client.user.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserAuthTokensKey() {
  return ['user', '/user/auth-tokens'] as const
}

export function useGetUserAuthTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)['auth-tokens']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserAuthTokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)['auth-tokens']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user['auth-tokens'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserAuthTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)['auth-tokens']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserAuthTokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.user)['auth-tokens']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user['auth-tokens'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserEmailUpdateKey() {
  return ['user', '/user/email/update'] as const
}

export function useGetUserEmailUpdate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.update.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserEmailUpdateKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.update.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.email.update.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserEmailUpdate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.update.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserEmailUpdateKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.update.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.email.update.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserOrgsKey() {
  return ['user', '/user/orgs'] as const
}

export function useGetUserOrgs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.orgs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserOrgsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.orgs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.orgs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserOrgs<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.orgs.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserOrgsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.orgs.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.orgs.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserPasswordKey() {
  return ['user', '/user/password', 'PUT'] as const
}

export function usePutUserPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.password.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.password.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.password.$put> }) =>
        parseResponse(client.user.password.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserPreferencesKey() {
  return ['user', '/user/preferences'] as const
}

export function useGetUserPreferences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserPreferencesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.preferences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserPreferences<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserPreferencesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.preferences.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUserPreferencesKey() {
  return ['user', '/user/preferences', 'PUT'] as const
}

export function usePutUserPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.preferences.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUserPreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.preferences.$put> }) =>
        parseResponse(client.user.preferences.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchUserPreferencesKey() {
  return ['user', '/user/preferences', 'PATCH'] as const
}

export function usePatchUserPreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$patch>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.user.preferences.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchUserPreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.user.preferences.$patch> }) =>
        parseResponse(client.user.preferences.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUserQuotasKey() {
  return ['user', '/user/quotas'] as const
}

export function useGetUserQuotas<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.quotas.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserQuotasKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.quotas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.quotas.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserQuotas<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.quotas.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserQuotasKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.quotas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.quotas.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserRevokeAuthTokenKey() {
  return ['user', '/user/revoke-auth-token', 'POST'] as const
}

export function usePostUserRevokeAuthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)['revoke-auth-token']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user)['revoke-auth-token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserRevokeAuthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user)['revoke-auth-token']['$post']> },
      ) => parseResponse(client.user['revoke-auth-token'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUserStarsDashboardUidDashboardUidKey() {
  return ['user', '/user/stars/dashboard/uid/:dashboard_uid', 'POST'] as const
}

export function usePostUserStarsDashboardUidDashboardUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserStarsDashboardUidDashboardUidKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$post']>
        },
      ) =>
        parseResponse(client.user.stars.dashboard.uid[':dashboard_uid'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteUserStarsDashboardUidDashboardUidKey() {
  return ['user', '/user/stars/dashboard/uid/:dashboard_uid', 'DELETE'] as const
}

export function useDeleteUserStarsDashboardUidDashboardUid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteUserStarsDashboardUidDashboardUidKey()
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
            (typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.user.stars.dashboard.uid[':dashboard_uid'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetUserTeamsKey() {
  return ['user', '/user/teams'] as const
}

export function useGetUserTeams<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.teams.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserTeamsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.teams.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.teams.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUserTeams<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.teams.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUserTeamsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.teams.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.teams.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostUserUsingOrgIdKey() {
  return ['user', '/user/using/:org_id', 'POST'] as const
}

export function usePostUserUsingOrgId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user.using)[':org_id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.user.using)[':org_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUserUsingOrgIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.user.using)[':org_id']['$post']> },
      ) => parseResponse(client.user.using[':org_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersKey(args: InferRequestType<typeof client.users.$get>) {
  return ['users', '/users', args] as const
}

export function useGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetUsers<TError = unknown>(
  args: InferRequestType<typeof client.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetUsersLookupKey(args: InferRequestType<typeof client.users.lookup.$get>) {
  return ['users', '/users/lookup', args] as const
}

export function useGetUsersLookup<TError = unknown>(
  args: InferRequestType<typeof client.users.lookup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.lookup.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.lookup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.lookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersLookup<TError = unknown>(
  args: InferRequestType<typeof client.users.lookup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.lookup.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersLookupKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.lookup.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.lookup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersSearchKey() {
  return ['users', '/users/search'] as const
}

export function useGetUsersSearch<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersSearchKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.search.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersSearch<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersSearchKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users.search.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function useGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetUsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutUsersUserIdKey() {
  return ['users', '/users/:user_id', 'PUT'] as const
}

export function usePutUsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.users)[':user_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutUsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.users)[':user_id']['$put']> },
      ) => parseResponse(client.users[':user_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetUsersUserIdOrgsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['orgs']['$get']>,
) {
  return ['users', '/users/:user_id/orgs', args] as const
}

export function useGetUsersUserIdOrgs<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['orgs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['orgs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdOrgsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['orgs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].orgs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdOrgs<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['orgs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['orgs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdOrgsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['orgs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].orgs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUsersUserIdTeamsKey(
  args: InferRequestType<(typeof client.users)[':user_id']['teams']['$get']>,
) {
  return ['users', '/users/:user_id/teams', args] as const
}

export function useGetUsersUserIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['teams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUsersUserIdTeams<TError = unknown>(
  args: InferRequestType<(typeof client.users)[':user_id']['teams']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['teams']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetUsersUserIdTeamsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.users)[':user_id']['teams']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.users[':user_id'].teams.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProvisioningAlertRulesKey() {
  return ['v1', '/v1/provisioning/alert-rules'] as const
}

export function useGetV1ProvisioningAlertRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$get']>>
        >
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
        ? getGetV1ProvisioningAlertRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['alert-rules'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningAlertRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$get']>>
        >
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
        ? getGetV1ProvisioningAlertRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['alert-rules'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProvisioningAlertRulesKey() {
  return ['v1', '/v1/provisioning/alert-rules', 'POST'] as const
}

export function usePostV1ProvisioningAlertRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.provisioning)['alert-rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProvisioningAlertRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.provisioning)['alert-rules']['$post']> },
      ) => parseResponse(client.v1.provisioning['alert-rules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProvisioningAlertRulesExportKey(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>,
) {
  return ['v1', '/v1/provisioning/alert-rules/export', args] as const
}

export function useGetV1ProvisioningAlertRulesExport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningAlertRulesExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['alert-rules'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningAlertRulesExport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningAlertRulesExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['alert-rules'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProvisioningAlertRulesUIDKey(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>,
) {
  return ['v1', '/v1/provisioning/alert-rules/:UID', args] as const
}

export function useGetV1ProvisioningAlertRulesUID<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningAlertRulesUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['alert-rules'][':UID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningAlertRulesUID<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningAlertRulesUIDKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['alert-rules'][':UID'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProvisioningAlertRulesUIDKey() {
  return ['v1', '/v1/provisioning/alert-rules/:UID', 'PUT'] as const
}

export function usePutV1ProvisioningAlertRulesUID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProvisioningAlertRulesUIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$put']>
        },
      ) => parseResponse(client.v1.provisioning['alert-rules'][':UID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProvisioningAlertRulesUIDKey() {
  return ['v1', '/v1/provisioning/alert-rules/:UID', 'DELETE'] as const
}

export function useDeleteV1ProvisioningAlertRulesUID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProvisioningAlertRulesUIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$delete']>
        },
      ) => parseResponse(client.v1.provisioning['alert-rules'][':UID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProvisioningAlertRulesUIDExportKey(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>,
) {
  return ['v1', '/v1/provisioning/alert-rules/:UID/export', args] as const
}

export function useGetV1ProvisioningAlertRulesUIDExport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningAlertRulesUIDExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.provisioning['alert-rules'][':UID'].export.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningAlertRulesUIDExport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningAlertRulesUIDExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.provisioning['alert-rules'][':UID'].export.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProvisioningContactPointsKey(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['$get']>,
) {
  return ['v1', '/v1/provisioning/contact-points', args] as const
}

export function useGetV1ProvisioningContactPoints<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningContactPointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.provisioning['contact-points'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningContactPoints<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningContactPointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.provisioning['contact-points'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProvisioningContactPointsKey() {
  return ['v1', '/v1/provisioning/contact-points', 'POST'] as const
}

export function usePostV1ProvisioningContactPoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.provisioning)['contact-points']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProvisioningContactPointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.provisioning)['contact-points']['$post']> },
      ) => parseResponse(client.v1.provisioning['contact-points'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProvisioningContactPointsExportKey(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>,
) {
  return ['v1', '/v1/provisioning/contact-points/export', args] as const
}

export function useGetV1ProvisioningContactPointsExport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningContactPointsExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['contact-points'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningContactPointsExport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningContactPointsExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['contact-points'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProvisioningContactPointsUIDKey() {
  return ['v1', '/v1/provisioning/contact-points/:UID', 'PUT'] as const
}

export function usePutV1ProvisioningContactPointsUID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points'][':UID']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProvisioningContactPointsUIDKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$put']>
        },
      ) => parseResponse(client.v1.provisioning['contact-points'][':UID'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProvisioningContactPointsUIDKey() {
  return ['v1', '/v1/provisioning/contact-points/:UID', 'DELETE'] as const
}

export function useDeleteV1ProvisioningContactPointsUID<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points'][':UID']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProvisioningContactPointsUIDKey()
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
            (typeof client.v1.provisioning)['contact-points'][':UID']['$delete']
          >
        },
      ) =>
        parseResponse(client.v1.provisioning['contact-points'][':UID'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProvisioningFolderFolderUIDRuleGroupsGroupKey(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
  >,
) {
  return ['v1', '/v1/provisioning/folder/:FolderUID/rule-groups/:Group', args] as const
}

export function useGetV1ProvisioningFolderFolderUIDRuleGroupsGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
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
        ? getGetV1ProvisioningFolderFolderUIDRuleGroupsGroupKey(args)
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
                (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
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
          client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningFolderFolderUIDRuleGroupsGroup<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
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
        ? getGetV1ProvisioningFolderFolderUIDRuleGroupsGroupKey(args)
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
                (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
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
          client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProvisioningFolderFolderUIDRuleGroupsGroupKey() {
  return ['v1', '/v1/provisioning/folder/:FolderUID/rule-groups/:Group', 'PUT'] as const
}

export function usePutV1ProvisioningFolderFolderUIDRuleGroupsGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProvisioningFolderFolderUIDRuleGroupsGroupKey()
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
            (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProvisioningFolderFolderUIDRuleGroupsGroupKey() {
  return ['v1', '/v1/provisioning/folder/:FolderUID/rule-groups/:Group', 'DELETE'] as const
}

export function useDeleteV1ProvisioningFolderFolderUIDRuleGroupsGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProvisioningFolderFolderUIDRuleGroupsGroupKey()
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
            (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProvisioningFolderFolderUIDRuleGroupsGroupExportKey(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
  >,
) {
  return ['v1', '/v1/provisioning/folder/:FolderUID/rule-groups/:Group/export', args] as const
}

export function useGetV1ProvisioningFolderFolderUIDRuleGroupsGroupExport<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
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
        ? getGetV1ProvisioningFolderFolderUIDRuleGroupsGroupExportKey(args)
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
                (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
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
          client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].export.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningFolderFolderUIDRuleGroupsGroupExport<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
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
        ? getGetV1ProvisioningFolderFolderUIDRuleGroupsGroupExportKey(args)
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
                (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
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
          client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].export.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProvisioningMuteTimingsKey() {
  return ['v1', '/v1/provisioning/mute-timings'] as const
}

export function useGetV1ProvisioningMuteTimings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$get']>>
        >
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
        ? getGetV1ProvisioningMuteTimingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['mute-timings'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningMuteTimings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$get']>>
        >
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
        ? getGetV1ProvisioningMuteTimingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['mute-timings'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ProvisioningMuteTimingsKey() {
  return ['v1', '/v1/provisioning/mute-timings', 'POST'] as const
}

export function usePostV1ProvisioningMuteTimings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.provisioning)['mute-timings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ProvisioningMuteTimingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.provisioning)['mute-timings']['$post']> },
      ) => parseResponse(client.v1.provisioning['mute-timings'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProvisioningMuteTimingsExportKey(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>,
) {
  return ['v1', '/v1/provisioning/mute-timings/export', args] as const
}

export function useGetV1ProvisioningMuteTimingsExport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningMuteTimingsExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['mute-timings'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningMuteTimingsExport<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningMuteTimingsExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['mute-timings'].export.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProvisioningMuteTimingsNameKey(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>,
) {
  return ['v1', '/v1/provisioning/mute-timings/:name', args] as const
}

export function useGetV1ProvisioningMuteTimingsName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningMuteTimingsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['mute-timings'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningMuteTimingsName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningMuteTimingsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning['mute-timings'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProvisioningMuteTimingsNameKey() {
  return ['v1', '/v1/provisioning/mute-timings/:name', 'PUT'] as const
}

export function usePutV1ProvisioningMuteTimingsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProvisioningMuteTimingsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$put']>
        },
      ) => parseResponse(client.v1.provisioning['mute-timings'][':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProvisioningMuteTimingsNameKey() {
  return ['v1', '/v1/provisioning/mute-timings/:name', 'DELETE'] as const
}

export function useDeleteV1ProvisioningMuteTimingsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProvisioningMuteTimingsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$delete']>
        },
      ) =>
        parseResponse(client.v1.provisioning['mute-timings'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProvisioningMuteTimingsNameExportKey(
  args: InferRequestType<
    (typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']
  >,
) {
  return ['v1', '/v1/provisioning/mute-timings/:name/export', args] as const
}

export function useGetV1ProvisioningMuteTimingsNameExport<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningMuteTimingsNameExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.provisioning['mute-timings'][':name'].export.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningMuteTimingsNameExport<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningMuteTimingsNameExportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1.provisioning['mute-timings'][':name'].export.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProvisioningPoliciesKey() {
  return ['v1', '/v1/provisioning/policies'] as const
}

export function useGetV1ProvisioningPolicies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$get>>>
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
        ? getGetV1ProvisioningPoliciesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.provisioning.policies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningPolicies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$get>>>
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
        ? getGetV1ProvisioningPoliciesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.provisioning.policies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProvisioningPoliciesKey() {
  return ['v1', '/v1/provisioning/policies', 'PUT'] as const
}

export function usePutV1ProvisioningPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$put>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.provisioning.policies.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProvisioningPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v1.provisioning.policies.$put> },
      ) => parseResponse(client.v1.provisioning.policies.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProvisioningPoliciesKey() {
  return ['v1', '/v1/provisioning/policies', 'DELETE'] as const
}

export function useDeleteV1ProvisioningPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$delete>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProvisioningPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.provisioning.policies.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1ProvisioningPoliciesExportKey() {
  return ['v1', '/v1/provisioning/policies/export'] as const
}

export function useGetV1ProvisioningPoliciesExport<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.provisioning.policies.export.$get>>
        >
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
        ? getGetV1ProvisioningPoliciesExportKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.provisioning.policies.export.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning.policies.export.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningPoliciesExport<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.provisioning.policies.export.$get>>
        >
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
        ? getGetV1ProvisioningPoliciesExportKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.provisioning.policies.export.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning.policies.export.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProvisioningTemplatesKey() {
  return ['v1', '/v1/provisioning/templates'] as const
}

export function useGetV1ProvisioningTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.templates.$get>>>
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
        ? getGetV1ProvisioningTemplatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.provisioning.templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningTemplates<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.templates.$get>>>
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
        ? getGetV1ProvisioningTemplatesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.provisioning.templates.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1ProvisioningTemplatesNameKey(
  args: InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$get']>,
) {
  return ['v1', '/v1/provisioning/templates/:name', args] as const
}

export function useGetV1ProvisioningTemplatesName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningTemplatesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning.templates[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1ProvisioningTemplatesName<TError = unknown>(
  args: InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1ProvisioningTemplatesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1.provisioning.templates[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1ProvisioningTemplatesNameKey() {
  return ['v1', '/v1/provisioning/templates/:name', 'PUT'] as const
}

export function usePutV1ProvisioningTemplatesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1ProvisioningTemplatesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$put']> },
      ) => parseResponse(client.v1.provisioning.templates[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1ProvisioningTemplatesNameKey() {
  return ['v1', '/v1/provisioning/templates/:name', 'DELETE'] as const
}

export function useDeleteV1ProvisioningTemplatesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1ProvisioningTemplatesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$delete']> },
      ) => parseResponse(client.v1.provisioning.templates[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1SsoSettingsKey() {
  return ['v1', '/v1/sso-settings'] as const
}

export function useGetV1SsoSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SsoSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sso-settings'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SsoSettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1SsoSettingsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sso-settings'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1SsoSettingsKeyKey(
  args: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$get']>,
) {
  return ['v1', '/v1/sso-settings/:key', args] as const
}

export function useGetV1SsoSettingsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SsoSettingsKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sso-settings'][':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SsoSettingsKey<TError = unknown>(
  args: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SsoSettingsKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1['sso-settings'][':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1SsoSettingsKeyKey() {
  return ['v1', '/v1/sso-settings/:key', 'PUT'] as const
}

export function usePutV1SsoSettingsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sso-settings'][':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1SsoSettingsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$put']> },
      ) => parseResponse(client.v1['sso-settings'][':key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV1SsoSettingsKeyKey() {
  return ['v1', '/v1/sso-settings/:key', 'DELETE'] as const
}

export function useDeleteV1SsoSettingsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sso-settings'][':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1SsoSettingsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$delete']> },
      ) => parseResponse(client.v1['sso-settings'][':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV1SsoSettingsKeyKey() {
  return ['v1', '/v1/sso-settings/:key', 'PATCH'] as const
}

export function usePatchV1SsoSettingsKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1)['sso-settings'][':key']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV1SsoSettingsKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$patch']> },
      ) => parseResponse(client.v1['sso-settings'][':key'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
