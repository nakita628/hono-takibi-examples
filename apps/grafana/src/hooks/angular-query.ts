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

export function getAccessControlRolesQueryKey(
  args: InferRequestType<(typeof client)['access-control']['roles']['$get']>,
) {
  return ['access-control', '/access-control/roles', args] as const
}

export function getAccessControlRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['access-control']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['access-control']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlRolesQueryKey>
  >({
    queryKey: getAccessControlRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['access-control'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccessControlRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['access-control']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['access-control']['roles']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['access-control']['roles']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccessControlRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccessControlRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAccessControlRolesMutationKey() {
  return ['access-control', '/access-control/roles', 'POST'] as const
}

export function getPostAccessControlRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control']['roles']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['access-control']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessControlRolesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['access-control']['roles']['$post']>) {
      return parseResponse(client['access-control'].roles.$post(args, options))
    },
  })
}

export function injectPostAccessControlRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['access-control']['roles']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['access-control']['roles']['$post']>,
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
    const mutationDefaults = getPostAccessControlRolesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccessControlRolesRoleUIDQueryKey(
  args: InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$get']>,
) {
  return ['access-control', '/access-control/roles/:roleUID', args] as const
}

export function getAccessControlRolesRoleUIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlRolesRoleUIDQueryKey>
  >({
    queryKey: getAccessControlRolesRoleUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['access-control'].roles[':roleUID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccessControlRolesRoleUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccessControlRolesRoleUIDQueryKey>
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
      ...getAccessControlRolesRoleUIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAccessControlRolesRoleUIDMutationKey() {
  return ['access-control', '/access-control/roles/:roleUID', 'PUT'] as const
}

export function getPutAccessControlRolesRoleUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccessControlRolesRoleUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$put']>,
    ) {
      return parseResponse(client['access-control'].roles[':roleUID'].$put(args, options))
    },
  })
}

export function injectPutAccessControlRolesRoleUID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$put']>,
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
    const mutationDefaults = getPutAccessControlRolesRoleUIDMutationOptions<
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

export function getDeleteAccessControlRolesRoleUIDMutationKey() {
  return ['access-control', '/access-control/roles/:roleUID', 'DELETE'] as const
}

export function getDeleteAccessControlRolesRoleUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccessControlRolesRoleUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$delete']>,
    ) {
      return parseResponse(client['access-control'].roles[':roleUID'].$delete(args, options))
    },
  })
}

export function injectDeleteAccessControlRolesRoleUID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$delete']>,
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
    const mutationDefaults = getDeleteAccessControlRolesRoleUIDMutationOptions<
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

export function getAccessControlRolesRoleUIDAssignmentsQueryKey(
  args: InferRequestType<
    (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
  >,
) {
  return ['access-control', '/access-control/roles/:roleUID/assignments', args] as const
}

export function getAccessControlRolesRoleUIDAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccessControlRolesRoleUIDAssignmentsQueryKey>
  >({
    queryKey: getAccessControlRolesRoleUIDAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['access-control'].roles[':roleUID'].assignments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccessControlRolesRoleUIDAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccessControlRolesRoleUIDAssignmentsQueryKey>
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
      ...getAccessControlRolesRoleUIDAssignmentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAccessControlRolesRoleUIDAssignmentsMutationKey() {
  return ['access-control', '/access-control/roles/:roleUID/assignments', 'PUT'] as const
}

export function getPutAccessControlRolesRoleUIDAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['assignments']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccessControlRolesRoleUIDAssignmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control']['roles'][':roleUID']['assignments']['$put']
      >,
    ) {
      return parseResponse(
        client['access-control'].roles[':roleUID'].assignments.$put(args, options),
      )
    },
  })
}

export function injectPutAccessControlRolesRoleUIDAssignments<
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
                  (typeof client)['access-control']['roles'][':roleUID']['assignments']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['access-control']['roles'][':roleUID']['assignments']['$put']
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
    const mutationDefaults = getPutAccessControlRolesRoleUIDAssignmentsMutationOptions<
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

export function getAccessControlStatusQueryKey() {
  return ['access-control', '/access-control/status'] as const
}

export function getAccessControlStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['access-control']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlStatusQueryKey>
  >({
    queryKey: getAccessControlStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['access-control'].status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccessControlStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['access-control']['status']['$get']>>>
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
              Awaited<ReturnType<(typeof client)['access-control']['status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccessControlStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccessControlStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostAccessControlTeamsRolesSearchMutationKey() {
  return ['access-control', '/access-control/teams/roles/search', 'POST'] as const
}

export function getPostAccessControlTeamsRolesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['access-control']['teams']['roles']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessControlTeamsRolesSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control']['teams']['roles']['search']['$post']
      >,
    ) {
      return parseResponse(client['access-control'].teams.roles.search.$post(args, options))
    },
  })
}

export function injectPostAccessControlTeamsRolesSearch<
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
                ReturnType<(typeof client)['access-control']['teams']['roles']['search']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['access-control']['teams']['roles']['search']['$post']>,
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
    const mutationDefaults = getPostAccessControlTeamsRolesSearchMutationOptions<
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

export function getAccessControlTeamsTeamIdRolesQueryKey(
  args: InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>,
) {
  return ['access-control', '/access-control/teams/:teamId/roles', args] as const
}

export function getAccessControlTeamsTeamIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlTeamsTeamIdRolesQueryKey>
  >({
    queryKey: getAccessControlTeamsTeamIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['access-control'].teams[':teamId'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccessControlTeamsTeamIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['access-control']['teams'][':teamId']['roles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccessControlTeamsTeamIdRolesQueryKey>
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
      ...getAccessControlTeamsTeamIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAccessControlTeamsTeamIdRolesMutationKey() {
  return ['access-control', '/access-control/teams/:teamId/roles', 'PUT'] as const
}

export function getPutAccessControlTeamsTeamIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccessControlTeamsTeamIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control']['teams'][':teamId']['roles']['$put']
      >,
    ) {
      return parseResponse(client['access-control'].teams[':teamId'].roles.$put(args, options))
    },
  })
}

export function injectPutAccessControlTeamsTeamIdRoles<
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
                ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$put']>,
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
    const mutationDefaults = getPutAccessControlTeamsTeamIdRolesMutationOptions<
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

export function getPostAccessControlTeamsTeamIdRolesMutationKey() {
  return ['access-control', '/access-control/teams/:teamId/roles', 'POST'] as const
}

export function getPostAccessControlTeamsTeamIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessControlTeamsTeamIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control']['teams'][':teamId']['roles']['$post']
      >,
    ) {
      return parseResponse(client['access-control'].teams[':teamId'].roles.$post(args, options))
    },
  })
}

export function injectPostAccessControlTeamsTeamIdRoles<
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
                ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$post']>,
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
    const mutationDefaults = getPostAccessControlTeamsTeamIdRolesMutationOptions<
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

export function getDeleteAccessControlTeamsTeamIdRolesRoleUIDMutationKey() {
  return ['access-control', '/access-control/teams/:teamId/roles/:roleUID', 'DELETE'] as const
}

export function getDeleteAccessControlTeamsTeamIdRolesRoleUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['access-control']['teams'][':teamId']['roles'][':roleUID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccessControlTeamsTeamIdRolesRoleUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control']['teams'][':teamId']['roles'][':roleUID']['$delete']
      >,
    ) {
      return parseResponse(
        client['access-control'].teams[':teamId'].roles[':roleUID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteAccessControlTeamsTeamIdRolesRoleUID<
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
                  (typeof client)['access-control']['teams'][':teamId']['roles'][':roleUID']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['access-control']['teams'][':teamId']['roles'][':roleUID']['$delete']
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
    const mutationDefaults = getDeleteAccessControlTeamsTeamIdRolesRoleUIDMutationOptions<
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

export function getPostAccessControlUsersRolesSearchMutationKey() {
  return ['access-control', '/access-control/users/roles/search', 'POST'] as const
}

export function getPostAccessControlUsersRolesSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['access-control']['users']['roles']['search']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessControlUsersRolesSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control']['users']['roles']['search']['$post']
      >,
    ) {
      return parseResponse(client['access-control'].users.roles.search.$post(args, options))
    },
  })
}

export function injectPostAccessControlUsersRolesSearch<
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
                ReturnType<(typeof client)['access-control']['users']['roles']['search']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['access-control']['users']['roles']['search']['$post']>,
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
    const mutationDefaults = getPostAccessControlUsersRolesSearchMutationOptions<
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

export function getAccessControlUsersUserIdRolesQueryKey(
  args: InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>,
) {
  return ['access-control', '/access-control/users/:userId/roles', args] as const
}

export function getAccessControlUsersUserIdRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlUsersUserIdRolesQueryKey>
  >({
    queryKey: getAccessControlUsersUserIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['access-control'].users[':userId'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccessControlUsersUserIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['access-control']['users'][':userId']['roles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccessControlUsersUserIdRolesQueryKey>
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
      ...getAccessControlUsersUserIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAccessControlUsersUserIdRolesMutationKey() {
  return ['access-control', '/access-control/users/:userId/roles', 'PUT'] as const
}

export function getPutAccessControlUsersUserIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccessControlUsersUserIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control']['users'][':userId']['roles']['$put']
      >,
    ) {
      return parseResponse(client['access-control'].users[':userId'].roles.$put(args, options))
    },
  })
}

export function injectPutAccessControlUsersUserIdRoles<
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
                ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$put']>,
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
    const mutationDefaults = getPutAccessControlUsersUserIdRolesMutationOptions<
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

export function getPostAccessControlUsersUserIdRolesMutationKey() {
  return ['access-control', '/access-control/users/:userId/roles', 'POST'] as const
}

export function getPostAccessControlUsersUserIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessControlUsersUserIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control']['users'][':userId']['roles']['$post']
      >,
    ) {
      return parseResponse(client['access-control'].users[':userId'].roles.$post(args, options))
    },
  })
}

export function injectPostAccessControlUsersUserIdRoles<
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
                ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$post']>,
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
    const mutationDefaults = getPostAccessControlUsersUserIdRolesMutationOptions<
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

export function getDeleteAccessControlUsersUserIdRolesRoleUIDMutationKey() {
  return ['access-control', '/access-control/users/:userId/roles/:roleUID', 'DELETE'] as const
}

export function getDeleteAccessControlUsersUserIdRolesRoleUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['access-control']['users'][':userId']['roles'][':roleUID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccessControlUsersUserIdRolesRoleUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control']['users'][':userId']['roles'][':roleUID']['$delete']
      >,
    ) {
      return parseResponse(
        client['access-control'].users[':userId'].roles[':roleUID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteAccessControlUsersUserIdRolesRoleUID<
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
                  (typeof client)['access-control']['users'][':userId']['roles'][':roleUID']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['access-control']['users'][':userId']['roles'][':roleUID']['$delete']
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
    const mutationDefaults = getDeleteAccessControlUsersUserIdRolesRoleUIDMutationOptions<
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

export function getAccessControlResourceDescriptionQueryKey(
  args: InferRequestType<(typeof client)['access-control'][':resource']['description']['$get']>,
) {
  return ['access-control', '/access-control/:resource/description', args] as const
}

export function getAccessControlResourceDescriptionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control'][':resource']['description']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['access-control'][':resource']['description']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control'][':resource']['description']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlResourceDescriptionQueryKey>
  >({
    queryKey: getAccessControlResourceDescriptionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['access-control'][':resource'].description.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccessControlResourceDescription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control'][':resource']['description']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['access-control'][':resource']['description']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['access-control'][':resource']['description']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccessControlResourceDescriptionQueryKey>
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
      ...getAccessControlResourceDescriptionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccessControlResourceResourceIDQueryKey(
  args: InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>,
) {
  return ['access-control', '/access-control/:resource/:resourceID', args] as const
}

export function getAccessControlResourceResourceIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlResourceResourceIDQueryKey>
  >({
    queryKey: getAccessControlResourceResourceIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['access-control'][':resource'][':resourceID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccessControlResourceResourceID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['access-control'][':resource'][':resourceID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccessControlResourceResourceIDQueryKey>
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
      ...getAccessControlResourceResourceIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAccessControlResourceResourceIDMutationKey() {
  return ['access-control', '/access-control/:resource/:resourceID', 'POST'] as const
}

export function getPostAccessControlResourceResourceIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessControlResourceResourceIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control'][':resource'][':resourceID']['$post']
      >,
    ) {
      return parseResponse(
        client['access-control'][':resource'][':resourceID'].$post(args, options),
      )
    },
  })
}

export function injectPostAccessControlResourceResourceID<
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
                ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$post']>,
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
    const mutationDefaults = getPostAccessControlResourceResourceIDMutationOptions<
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

export function getPostAccessControlResourceResourceIDBuiltInRolesBuiltInRoleMutationKey() {
  return [
    'access-control',
    '/access-control/:resource/:resourceID/builtInRoles/:builtInRole',
    'POST',
  ] as const
}

export function getPostAccessControlResourceResourceIDBuiltInRolesBuiltInRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['access-control'][':resource'][':resourceID']['builtInRoles'][':builtInRole']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccessControlResourceResourceIDBuiltInRolesBuiltInRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control'][':resource'][':resourceID']['builtInRoles'][':builtInRole']['$post']
      >,
    ) {
      return parseResponse(
        client['access-control'][':resource'][':resourceID'].builtInRoles[':builtInRole'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostAccessControlResourceResourceIDBuiltInRolesBuiltInRole<
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
                  (typeof client)['access-control'][':resource'][':resourceID']['builtInRoles'][':builtInRole']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['access-control'][':resource'][':resourceID']['builtInRoles'][':builtInRole']['$post']
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
      getPostAccessControlResourceResourceIDBuiltInRolesBuiltInRoleMutationOptions<
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

export function getPostAccessControlResourceResourceIDTeamsTeamIDMutationKey() {
  return ['access-control', '/access-control/:resource/:resourceID/teams/:teamID', 'POST'] as const
}

export function getPostAccessControlResourceResourceIDTeamsTeamIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['access-control'][':resource'][':resourceID']['teams'][':teamID']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccessControlResourceResourceIDTeamsTeamIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control'][':resource'][':resourceID']['teams'][':teamID']['$post']
      >,
    ) {
      return parseResponse(
        client['access-control'][':resource'][':resourceID'].teams[':teamID'].$post(args, options),
      )
    },
  })
}

export function injectPostAccessControlResourceResourceIDTeamsTeamID<
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
                  (typeof client)['access-control'][':resource'][':resourceID']['teams'][':teamID']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['access-control'][':resource'][':resourceID']['teams'][':teamID']['$post']
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
    const mutationDefaults = getPostAccessControlResourceResourceIDTeamsTeamIDMutationOptions<
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

export function getPostAccessControlResourceResourceIDUsersUserIDMutationKey() {
  return ['access-control', '/access-control/:resource/:resourceID/users/:userID', 'POST'] as const
}

export function getPostAccessControlResourceResourceIDUsersUserIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['access-control'][':resource'][':resourceID']['users'][':userID']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccessControlResourceResourceIDUsersUserIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['access-control'][':resource'][':resourceID']['users'][':userID']['$post']
      >,
    ) {
      return parseResponse(
        client['access-control'][':resource'][':resourceID'].users[':userID'].$post(args, options),
      )
    },
  })
}

export function injectPostAccessControlResourceResourceIDUsersUserID<
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
                  (typeof client)['access-control'][':resource'][':resourceID']['users'][':userID']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['access-control'][':resource'][':resourceID']['users'][':userID']['$post']
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
    const mutationDefaults = getPostAccessControlResourceResourceIDUsersUserIDMutationOptions<
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

export function getAdminLdapSyncStatusQueryKey() {
  return ['admin', '/admin/ldap-sync-status'] as const
}

export function getAdminLdapSyncStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['ldap-sync-status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['ldap-sync-status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLdapSyncStatusQueryKey>
  >({
    queryKey: getAdminLdapSyncStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin['ldap-sync-status'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminLdapSyncStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['ldap-sync-status']['$get']>>>
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
              Awaited<ReturnType<(typeof client.admin)['ldap-sync-status']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminLdapSyncStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminLdapSyncStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostAdminLdapReloadMutationKey() {
  return ['admin', '/admin/ldap/reload', 'POST'] as const
}

export function getPostAdminLdapReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.reload.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminLdapReloadMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.ldap.reload.$post(undefined, options))
    },
  })
}

export function injectPostAdminLdapReload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.reload.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostAdminLdapReloadMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminLdapStatusQueryKey() {
  return ['admin', '/admin/ldap/status'] as const
}

export function getAdminLdapStatusQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.status.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLdapStatusQueryKey>
  >({
    queryKey: getAdminLdapStatusQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.ldap.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminLdapStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.status.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminLdapStatusQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminLdapStatusQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostAdminLdapSyncUserIdMutationKey() {
  return ['admin', '/admin/ldap/sync/:user_id', 'POST'] as const
}

export function getPostAdminLdapSyncUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.ldap.sync)[':user_id']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.ldap.sync)[':user_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminLdapSyncUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.ldap.sync)[':user_id']['$post']>) {
      return parseResponse(client.admin.ldap.sync[':user_id'].$post(args, options))
    },
  })
}

export function injectPostAdminLdapSyncUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.ldap.sync)[':user_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.ldap.sync)[':user_id']['$post']>,
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
    const mutationDefaults = getPostAdminLdapSyncUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminLdapUserNameQueryKey(
  args: InferRequestType<(typeof client.admin.ldap)[':user_name']['$get']>,
) {
  return ['admin', '/admin/ldap/:user_name', args] as const
}

export function getAdminLdapUserNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.ldap)[':user_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.ldap)[':user_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.ldap)[':user_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLdapUserNameQueryKey>
  >({
    queryKey: getAdminLdapUserNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.ldap[':user_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminLdapUserName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.ldap)[':user_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.ldap)[':user_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.ldap)[':user_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminLdapUserNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminLdapUserNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAdminProvisioningAccessControlReloadMutationKey() {
  return ['admin', '/admin/provisioning/access-control/reload', 'POST'] as const
}

export function getPostAdminProvisioningAccessControlReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProvisioningAccessControlReloadMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.admin.provisioning['access-control'].reload.$post(undefined, options),
      )
    },
  })
}

export function injectPostAdminProvisioningAccessControlReload<
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
                ReturnType<(typeof client.admin.provisioning)['access-control']['reload']['$post']>
              >
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostAdminProvisioningAccessControlReloadMutationOptions<
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

export function getPostAdminProvisioningDashboardsReloadMutationKey() {
  return ['admin', '/admin/provisioning/dashboards/reload', 'POST'] as const
}

export function getPostAdminProvisioningDashboardsReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.provisioning.dashboards.reload.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProvisioningDashboardsReloadMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.provisioning.dashboards.reload.$post(undefined, options))
    },
  })
}

export function injectPostAdminProvisioningDashboardsReload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.provisioning.dashboards.reload.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostAdminProvisioningDashboardsReloadMutationOptions<
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

export function getPostAdminProvisioningDatasourcesReloadMutationKey() {
  return ['admin', '/admin/provisioning/datasources/reload', 'POST'] as const
}

export function getPostAdminProvisioningDatasourcesReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.provisioning.datasources.reload.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProvisioningDatasourcesReloadMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.provisioning.datasources.reload.$post(undefined, options))
    },
  })
}

export function injectPostAdminProvisioningDatasourcesReload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.provisioning.datasources.reload.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostAdminProvisioningDatasourcesReloadMutationOptions<
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

export function getPostAdminProvisioningPluginsReloadMutationKey() {
  return ['admin', '/admin/provisioning/plugins/reload', 'POST'] as const
}

export function getPostAdminProvisioningPluginsReloadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.provisioning.plugins.reload.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminProvisioningPluginsReloadMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.provisioning.plugins.reload.$post(undefined, options))
    },
  })
}

export function injectPostAdminProvisioningPluginsReload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.admin.provisioning.plugins.reload.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostAdminProvisioningPluginsReloadMutationOptions<
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

export function getAdminSettingsQueryKey() {
  return ['admin', '/admin/settings'] as const
}

export function getAdminSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSettingsQueryKey>
  >({
    queryKey: getAdminSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAdminStatsQueryKey() {
  return ['admin', '/admin/stats'] as const
}

export function getAdminStatsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stats.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminStatsQueryKey>
  >({
    queryKey: getAdminStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAdminStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stats.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAdminStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAdminStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostAdminUsersMutationKey() {
  return ['admin', '/admin/users', 'POST'] as const
}

export function getPostAdminUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.admin.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.admin.users.$post>) {
      return parseResponse(client.admin.users.$post(args, options))
    },
  })
}

export function injectPostAdminUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.admin.users.$post>,
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
    const mutationDefaults = getPostAdminUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAdminUsersUserIdMutationKey() {
  return ['admin', '/admin/users/:user_id', 'DELETE'] as const
}

export function getDeleteAdminUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdminUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.admin.users)[':user_id']['$delete']>) {
      return parseResponse(client.admin.users[':user_id'].$delete(args, options))
    },
  })
}

export function injectDeleteAdminUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':user_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':user_id']['$delete']>,
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
    const mutationDefaults = getDeleteAdminUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAdminUsersUserIdAuthTokensQueryKey(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>,
) {
  return ['admin', '/admin/users/:user_id/auth-tokens', args] as const
}

export function getAdminUsersUserIdAuthTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersUserIdAuthTokensQueryKey>
  >({
    queryKey: getAdminUsersUserIdAuthTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.users[':user_id']['auth-tokens'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminUsersUserIdAuthTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminUsersUserIdAuthTokensQueryKey>
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
      ...getAdminUsersUserIdAuthTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostAdminUsersUserIdDisableMutationKey() {
  return ['admin', '/admin/users/:user_id/disable', 'POST'] as const
}

export function getPostAdminUsersUserIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['disable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':user_id']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersUserIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':user_id']['disable']['$post']>,
    ) {
      return parseResponse(client.admin.users[':user_id'].disable.$post(args, options))
    },
  })
}

export function injectPostAdminUsersUserIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':user_id']['disable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':user_id']['disable']['$post']>,
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
    const mutationDefaults = getPostAdminUsersUserIdDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminUsersUserIdEnableMutationKey() {
  return ['admin', '/admin/users/:user_id/enable', 'POST'] as const
}

export function getPostAdminUsersUserIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['enable']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':user_id']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersUserIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':user_id']['enable']['$post']>,
    ) {
      return parseResponse(client.admin.users[':user_id'].enable.$post(args, options))
    },
  })
}

export function injectPostAdminUsersUserIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':user_id']['enable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':user_id']['enable']['$post']>,
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
    const mutationDefaults = getPostAdminUsersUserIdEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAdminUsersUserIdLogoutMutationKey() {
  return ['admin', '/admin/users/:user_id/logout', 'POST'] as const
}

export function getPostAdminUsersUserIdLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['logout']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':user_id']['logout']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersUserIdLogoutMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':user_id']['logout']['$post']>,
    ) {
      return parseResponse(client.admin.users[':user_id'].logout.$post(args, options))
    },
  })
}

export function injectPostAdminUsersUserIdLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':user_id']['logout']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':user_id']['logout']['$post']>,
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
    const mutationDefaults = getPostAdminUsersUserIdLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutAdminUsersUserIdPasswordMutationKey() {
  return ['admin', '/admin/users/:user_id/password', 'PUT'] as const
}

export function getPutAdminUsersUserIdPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['password']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':user_id']['password']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminUsersUserIdPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':user_id']['password']['$put']>,
    ) {
      return parseResponse(client.admin.users[':user_id'].password.$put(args, options))
    },
  })
}

export function injectPutAdminUsersUserIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':user_id']['password']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':user_id']['password']['$put']>,
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
    const mutationDefaults = getPutAdminUsersUserIdPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutAdminUsersUserIdPermissionsMutationKey() {
  return ['admin', '/admin/users/:user_id/permissions', 'PUT'] as const
}

export function getPutAdminUsersUserIdPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['permissions']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':user_id']['permissions']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminUsersUserIdPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':user_id']['permissions']['$put']>,
    ) {
      return parseResponse(client.admin.users[':user_id'].permissions.$put(args, options))
    },
  })
}

export function injectPutAdminUsersUserIdPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':user_id']['permissions']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':user_id']['permissions']['$put']>,
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
    const mutationDefaults = getPutAdminUsersUserIdPermissionsMutationOptions<
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

export function getAdminUsersUserIdQuotasQueryKey(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['quotas']['$get']>,
) {
  return ['admin', '/admin/users/:user_id/quotas', args] as const
}

export function getAdminUsersUserIdQuotasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':user_id']['quotas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.admin.users)[':user_id']['quotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['quotas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersUserIdQuotasQueryKey>
  >({
    queryKey: getAdminUsersUserIdQuotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.admin.users[':user_id'].quotas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAdminUsersUserIdQuotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':user_id']['quotas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.admin.users)[':user_id']['quotas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.admin.users)[':user_id']['quotas']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAdminUsersUserIdQuotasQueryKey>
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
      ...getAdminUsersUserIdQuotasQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAdminUsersUserIdQuotasQuotaTargetMutationKey() {
  return ['admin', '/admin/users/:user_id/quotas/:quota_target', 'PUT'] as const
}

export function getPutAdminUsersUserIdQuotasQuotaTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.admin.users)[':user_id']['quotas'][':quota_target']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdminUsersUserIdQuotasQuotaTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.admin.users)[':user_id']['quotas'][':quota_target']['$put']
      >,
    ) {
      return parseResponse(
        client.admin.users[':user_id'].quotas[':quota_target'].$put(args, options),
      )
    },
  })
}

export function injectPutAdminUsersUserIdQuotasQuotaTarget<
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
                  (typeof client.admin.users)[':user_id']['quotas'][':quota_target']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.admin.users)[':user_id']['quotas'][':quota_target']['$put']
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
    const mutationDefaults = getPutAdminUsersUserIdQuotasQuotaTargetMutationOptions<
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

export function getPostAdminUsersUserIdRevokeAuthTokenMutationKey() {
  return ['admin', '/admin/users/:user_id/revoke-auth-token', 'POST'] as const
}

export function getPostAdminUsersUserIdRevokeAuthTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['revoke-auth-token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.admin.users)[':user_id']['revoke-auth-token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdminUsersUserIdRevokeAuthTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.admin.users)[':user_id']['revoke-auth-token']['$post']>,
    ) {
      return parseResponse(client.admin.users[':user_id']['revoke-auth-token'].$post(args, options))
    },
  })
}

export function injectPostAdminUsersUserIdRevokeAuthToken<
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
                ReturnType<(typeof client.admin.users)[':user_id']['revoke-auth-token']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.admin.users)[':user_id']['revoke-auth-token']['$post']>,
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
    const mutationDefaults = getPostAdminUsersUserIdRevokeAuthTokenMutationOptions<
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

export function getAnnotationsQueryKey(args: InferRequestType<typeof client.annotations.$get>) {
  return ['annotations', '/annotations', args] as const
}

export function getAnnotationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.annotations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnnotationsQueryKey>
  >({
    queryKey: getAnnotationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnnotations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.annotations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnnotationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAnnotationsMutationKey() {
  return ['annotations', '/annotations', 'POST'] as const
}

export function getPostAnnotationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$post>>>>>,
    TError,
    InferRequestType<typeof client.annotations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnnotationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.annotations.$post>) {
      return parseResponse(client.annotations.$post(args, options))
    },
  })
}

export function injectPostAnnotations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.annotations.$post>,
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
    const mutationDefaults = getPostAnnotationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnnotationsGraphiteMutationKey() {
  return ['annotations', '/annotations/graphite', 'POST'] as const
}

export function getPostAnnotationsGraphiteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.annotations.graphite.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.annotations.graphite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAnnotationsGraphiteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.annotations.graphite.$post>) {
      return parseResponse(client.annotations.graphite.$post(args, options))
    },
  })
}

export function injectPostAnnotationsGraphite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.annotations.graphite.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.annotations.graphite.$post>,
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
    const mutationDefaults = getPostAnnotationsGraphiteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAnnotationsMassDeleteMutationKey() {
  return ['annotations', '/annotations/mass-delete', 'POST'] as const
}

export function getPostAnnotationsMassDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations)['mass-delete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.annotations)['mass-delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnnotationsMassDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.annotations)['mass-delete']['$post']>) {
      return parseResponse(client.annotations['mass-delete'].$post(args, options))
    },
  })
}

export function injectPostAnnotationsMassDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations)['mass-delete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.annotations)['mass-delete']['$post']>,
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
    const mutationDefaults = getPostAnnotationsMassDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAnnotationsTagsQueryKey(
  args: InferRequestType<typeof client.annotations.tags.$get>,
) {
  return ['annotations', '/annotations/tags', args] as const
}

export function getAnnotationsTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.tags.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.annotations.tags.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsTagsQueryKey>
  >({
    queryKey: getAnnotationsTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotations.tags.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnnotationsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.annotations.tags.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnnotationsTagsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAnnotationsAnnotationIdQueryKey(
  args: InferRequestType<(typeof client.annotations)[':annotation_id']['$get']>,
) {
  return ['annotations', '/annotations/:annotation_id', args] as const
}

export function getAnnotationsAnnotationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.annotations)[':annotation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsAnnotationIdQueryKey>
  >({
    queryKey: getAnnotationsAnnotationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.annotations[':annotation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnnotationsAnnotationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.annotations)[':annotation_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnnotationsAnnotationIdQueryKey>
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
      ...getAnnotationsAnnotationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutAnnotationsAnnotationIdMutationKey() {
  return ['annotations', '/annotations/:annotation_id', 'PUT'] as const
}

export function getPutAnnotationsAnnotationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.annotations)[':annotation_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAnnotationsAnnotationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.annotations)[':annotation_id']['$put']>,
    ) {
      return parseResponse(client.annotations[':annotation_id'].$put(args, options))
    },
  })
}

export function injectPutAnnotationsAnnotationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.annotations)[':annotation_id']['$put']>,
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
    const mutationDefaults = getPutAnnotationsAnnotationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAnnotationsAnnotationIdMutationKey() {
  return ['annotations', '/annotations/:annotation_id', 'DELETE'] as const
}

export function getDeleteAnnotationsAnnotationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.annotations)[':annotation_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnnotationsAnnotationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.annotations)[':annotation_id']['$delete']>,
    ) {
      return parseResponse(client.annotations[':annotation_id'].$delete(args, options))
    },
  })
}

export function injectDeleteAnnotationsAnnotationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.annotations)[':annotation_id']['$delete']>,
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
    const mutationDefaults = getDeleteAnnotationsAnnotationIdMutationOptions<
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

export function getPatchAnnotationsAnnotationIdMutationKey() {
  return ['annotations', '/annotations/:annotation_id', 'PATCH'] as const
}

export function getPatchAnnotationsAnnotationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.annotations)[':annotation_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAnnotationsAnnotationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.annotations)[':annotation_id']['$patch']>,
    ) {
      return parseResponse(client.annotations[':annotation_id'].$patch(args, options))
    },
  })
}

export function injectPatchAnnotationsAnnotationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.annotations)[':annotation_id']['$patch']>,
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
    const mutationDefaults = getPatchAnnotationsAnnotationIdMutationOptions<
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

export function getAnonymousDevicesQueryKey() {
  return ['anonymous', '/anonymous/devices'] as const
}

export function getAnonymousDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.devices.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnonymousDevicesQueryKey>
  >({
    queryKey: getAnonymousDevicesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anonymous.devices.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAnonymousDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.devices.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAnonymousDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnonymousDevicesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getAnonymousSearchQueryKey() {
  return ['anonymous', '/anonymous/search'] as const
}

export function getAnonymousSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.search.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnonymousSearchQueryKey>
  >({
    queryKey: getAnonymousSearchQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.anonymous.search.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAnonymousSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.search.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getAnonymousSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAnonymousSearchQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getCloudmigrationMigrationQueryKey() {
  return ['cloudmigration', '/cloudmigration/migration'] as const
}

export function getCloudmigrationMigrationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCloudmigrationMigrationQueryKey>
  >({
    queryKey: getCloudmigrationMigrationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cloudmigration.migration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCloudmigrationMigration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCloudmigrationMigrationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCloudmigrationMigrationQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostCloudmigrationMigrationMutationKey() {
  return ['cloudmigration', '/cloudmigration/migration', 'POST'] as const
}

export function getPostCloudmigrationMigrationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.cloudmigration.migration.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCloudmigrationMigrationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cloudmigration.migration.$post>) {
      return parseResponse(client.cloudmigration.migration.$post(args, options))
    },
  })
}

export function injectPostCloudmigrationMigration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.cloudmigration.migration.$post>,
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
    const mutationDefaults = getPostCloudmigrationMigrationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCloudmigrationMigrationUidQueryKey(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$get']>,
) {
  return ['cloudmigration', '/cloudmigration/migration/:uid', args] as const
}

export function getCloudmigrationMigrationUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCloudmigrationMigrationUidQueryKey>
  >({
    queryKey: getCloudmigrationMigrationUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cloudmigration.migration[':uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCloudmigrationMigrationUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCloudmigrationMigrationUidQueryKey>
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
      ...getCloudmigrationMigrationUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteCloudmigrationMigrationUidMutationKey() {
  return ['cloudmigration', '/cloudmigration/migration/:uid', 'DELETE'] as const
}

export function getDeleteCloudmigrationMigrationUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCloudmigrationMigrationUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$delete']>,
    ) {
      return parseResponse(client.cloudmigration.migration[':uid'].$delete(args, options))
    },
  })
}

export function injectDeleteCloudmigrationMigrationUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$delete']>,
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
    const mutationDefaults = getDeleteCloudmigrationMigrationUidMutationOptions<
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

export function getPostCloudmigrationMigrationUidSnapshotMutationKey() {
  return ['cloudmigration', '/cloudmigration/migration/:uid/snapshot', 'POST'] as const
}

export function getPostCloudmigrationMigrationUidSnapshotMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshot']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshot']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCloudmigrationMigrationUidSnapshotMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshot']['$post']>,
    ) {
      return parseResponse(client.cloudmigration.migration[':uid'].snapshot.$post(args, options))
    },
  })
}

export function injectPostCloudmigrationMigrationUidSnapshot<
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
                ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshot']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshot']['$post']>,
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
    const mutationDefaults = getPostCloudmigrationMigrationUidSnapshotMutationOptions<
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

export function getCloudmigrationMigrationUidSnapshotSnapshotUidQueryKey(
  args: InferRequestType<
    (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
  >,
) {
  return ['cloudmigration', '/cloudmigration/migration/:uid/snapshot/:snapshotUid', args] as const
}

export function getCloudmigrationMigrationUidSnapshotSnapshotUidQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getCloudmigrationMigrationUidSnapshotSnapshotUidQueryKey>
  >({
    queryKey: getCloudmigrationMigrationUidSnapshotSnapshotUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cloudmigration.migration[':uid'].snapshot[':snapshotUid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCloudmigrationMigrationUidSnapshotSnapshotUid<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getCloudmigrationMigrationUidSnapshotSnapshotUidQueryKey>
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
      ...getCloudmigrationMigrationUidSnapshotSnapshotUidQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostCloudmigrationMigrationUidSnapshotSnapshotUidCancelMutationKey() {
  return [
    'cloudmigration',
    '/cloudmigration/migration/:uid/snapshot/:snapshotUid/cancel',
    'POST',
  ] as const
}

export function getPostCloudmigrationMigrationUidSnapshotSnapshotUidCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCloudmigrationMigrationUidSnapshotSnapshotUidCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.cloudmigration.migration[':uid'].snapshot[':snapshotUid'].cancel.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostCloudmigrationMigrationUidSnapshotSnapshotUidCancel<
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
                  (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['cancel']['$post']
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
      getPostCloudmigrationMigrationUidSnapshotSnapshotUidCancelMutationOptions<
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

export function getPostCloudmigrationMigrationUidSnapshotSnapshotUidUploadMutationKey() {
  return [
    'cloudmigration',
    '/cloudmigration/migration/:uid/snapshot/:snapshotUid/upload',
    'POST',
  ] as const
}

export function getPostCloudmigrationMigrationUidSnapshotSnapshotUidUploadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['upload']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCloudmigrationMigrationUidSnapshotSnapshotUidUploadMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['upload']['$post']
      >,
    ) {
      return parseResponse(
        client.cloudmigration.migration[':uid'].snapshot[':snapshotUid'].upload.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostCloudmigrationMigrationUidSnapshotSnapshotUidUpload<
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
                  (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['upload']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['upload']['$post']
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
      getPostCloudmigrationMigrationUidSnapshotSnapshotUidUploadMutationOptions<
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

export function getCloudmigrationMigrationUidSnapshotsQueryKey(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>,
) {
  return ['cloudmigration', '/cloudmigration/migration/:uid/snapshots', args] as const
}

export function getCloudmigrationMigrationUidSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCloudmigrationMigrationUidSnapshotsQueryKey>
  >({
    queryKey: getCloudmigrationMigrationUidSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cloudmigration.migration[':uid'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCloudmigrationMigrationUidSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCloudmigrationMigrationUidSnapshotsQueryKey>
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
      ...getCloudmigrationMigrationUidSnapshotsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCloudmigrationResourcesDependenciesQueryKey() {
  return ['cloudmigration', '/cloudmigration/resources/dependencies'] as const
}

export function getCloudmigrationResourcesDependenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.cloudmigration.resources.dependencies.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.cloudmigration.resources.dependencies.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCloudmigrationResourcesDependenciesQueryKey>
  >({
    queryKey: getCloudmigrationResourcesDependenciesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cloudmigration.resources.dependencies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCloudmigrationResourcesDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.cloudmigration.resources.dependencies.$get>>
      >
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
              Awaited<ReturnType<typeof client.cloudmigration.resources.dependencies.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCloudmigrationResourcesDependenciesQueryKey>
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
      ...getCloudmigrationResourcesDependenciesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCloudmigrationTokenQueryKey() {
  return ['cloudmigration', '/cloudmigration/token'] as const
}

export function getCloudmigrationTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCloudmigrationTokenQueryKey>
  >({
    queryKey: getCloudmigrationTokenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.cloudmigration.token.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCloudmigrationToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCloudmigrationTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCloudmigrationTokenQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostCloudmigrationTokenMutationKey() {
  return ['cloudmigration', '/cloudmigration/token', 'POST'] as const
}

export function getPostCloudmigrationTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostCloudmigrationTokenMutationKey(),
    async mutationFn() {
      return parseResponse(client.cloudmigration.token.$post(undefined, options))
    },
  })
}

export function injectPostCloudmigrationToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostCloudmigrationTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteCloudmigrationTokenUidMutationKey() {
  return ['cloudmigration', '/cloudmigration/token/:uid', 'DELETE'] as const
}

export function getDeleteCloudmigrationTokenUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cloudmigration.token)[':uid']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cloudmigration.token)[':uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCloudmigrationTokenUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cloudmigration.token)[':uid']['$delete']>,
    ) {
      return parseResponse(client.cloudmigration.token[':uid'].$delete(args, options))
    },
  })
}

export function injectDeleteCloudmigrationTokenUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cloudmigration.token)[':uid']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.cloudmigration.token)[':uid']['$delete']>,
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
    const mutationDefaults = getDeleteCloudmigrationTokenUidMutationOptions<
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

export function getConvertApiPromRulesQueryKey() {
  return ['convert', '/convert/api/prom/rules'] as const
}

export function getConvertApiPromRulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConvertApiPromRulesQueryKey>
  >({
    queryKey: getConvertApiPromRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.convert.api.prom.rules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConvertApiPromRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConvertApiPromRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConvertApiPromRulesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostConvertApiPromRulesMutationKey() {
  return ['convert', '/convert/api/prom/rules', 'POST'] as const
}

export function getPostConvertApiPromRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostConvertApiPromRulesMutationKey(),
    async mutationFn() {
      return parseResponse(client.convert.api.prom.rules.$post(undefined, options))
    },
  })
}

export function injectPostConvertApiPromRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostConvertApiPromRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConvertApiPromRulesNamespaceTitleQueryKey(
  args: InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>,
) {
  return ['convert', '/convert/api/prom/rules/:NamespaceTitle', args] as const
}

export function getConvertApiPromRulesNamespaceTitleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConvertApiPromRulesNamespaceTitleQueryKey>
  >({
    queryKey: getConvertApiPromRulesNamespaceTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.convert.api.prom.rules[':NamespaceTitle'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConvertApiPromRulesNamespaceTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConvertApiPromRulesNamespaceTitleQueryKey>
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
      ...getConvertApiPromRulesNamespaceTitleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostConvertApiPromRulesNamespaceTitleMutationKey() {
  return ['convert', '/convert/api/prom/rules/:NamespaceTitle', 'POST'] as const
}

export function getPostConvertApiPromRulesNamespaceTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConvertApiPromRulesNamespaceTitleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$post']>,
    ) {
      return parseResponse(client.convert.api.prom.rules[':NamespaceTitle'].$post(args, options))
    },
  })
}

export function injectPostConvertApiPromRulesNamespaceTitle<
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
                ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$post']>,
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
    const mutationDefaults = getPostConvertApiPromRulesNamespaceTitleMutationOptions<
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

export function getDeleteConvertApiPromRulesNamespaceTitleMutationKey() {
  return ['convert', '/convert/api/prom/rules/:NamespaceTitle', 'DELETE'] as const
}

export function getDeleteConvertApiPromRulesNamespaceTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteConvertApiPromRulesNamespaceTitleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$delete']>,
    ) {
      return parseResponse(client.convert.api.prom.rules[':NamespaceTitle'].$delete(args, options))
    },
  })
}

export function injectDeleteConvertApiPromRulesNamespaceTitle<
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
                ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$delete']>,
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
    const mutationDefaults = getDeleteConvertApiPromRulesNamespaceTitleMutationOptions<
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

export function getConvertApiPromRulesNamespaceTitleGroupQueryKey(
  args: InferRequestType<
    (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
  >,
) {
  return ['convert', '/convert/api/prom/rules/:NamespaceTitle/:Group', args] as const
}

export function getConvertApiPromRulesNamespaceTitleGroupQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConvertApiPromRulesNamespaceTitleGroupQueryKey>
  >({
    queryKey: getConvertApiPromRulesNamespaceTitleGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.convert.api.prom.rules[':NamespaceTitle'][':Group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConvertApiPromRulesNamespaceTitleGroup<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getConvertApiPromRulesNamespaceTitleGroupQueryKey>
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
      ...getConvertApiPromRulesNamespaceTitleGroupQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteConvertApiPromRulesNamespaceTitleGroupMutationKey() {
  return ['convert', '/convert/api/prom/rules/:NamespaceTitle/:Group', 'DELETE'] as const
}

export function getDeleteConvertApiPromRulesNamespaceTitleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConvertApiPromRulesNamespaceTitleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$delete']
      >,
    ) {
      return parseResponse(
        client.convert.api.prom.rules[':NamespaceTitle'][':Group'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteConvertApiPromRulesNamespaceTitleGroup<
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
                  (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$delete']
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
    const mutationDefaults = getDeleteConvertApiPromRulesNamespaceTitleGroupMutationOptions<
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

export function getConvertPrometheusConfigV1RulesQueryKey() {
  return ['convert', '/convert/prometheus/config/v1/rules'] as const
}

export function getConvertPrometheusConfigV1RulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConvertPrometheusConfigV1RulesQueryKey>
  >({
    queryKey: getConvertPrometheusConfigV1RulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.convert.prometheus.config.v1.rules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConvertPrometheusConfigV1Rules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$get>>
      >
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
              Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConvertPrometheusConfigV1RulesQueryKey>
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
      ...getConvertPrometheusConfigV1RulesQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostConvertPrometheusConfigV1RulesMutationKey() {
  return ['convert', '/convert/prometheus/config/v1/rules', 'POST'] as const
}

export function getPostConvertPrometheusConfigV1RulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$post>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostConvertPrometheusConfigV1RulesMutationKey(),
    async mutationFn() {
      return parseResponse(client.convert.prometheus.config.v1.rules.$post(undefined, options))
    },
  })
}

export function injectPostConvertPrometheusConfigV1Rules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$post>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostConvertPrometheusConfigV1RulesMutationOptions<
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

export function getConvertPrometheusConfigV1RulesNamespaceTitleQueryKey(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
  >,
) {
  return ['convert', '/convert/prometheus/config/v1/rules/:NamespaceTitle', args] as const
}

export function getConvertPrometheusConfigV1RulesNamespaceTitleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getConvertPrometheusConfigV1RulesNamespaceTitleQueryKey>
  >({
    queryKey: getConvertPrometheusConfigV1RulesNamespaceTitleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.convert.prometheus.config.v1.rules[':NamespaceTitle'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConvertPrometheusConfigV1RulesNamespaceTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getConvertPrometheusConfigV1RulesNamespaceTitleQueryKey>
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
      ...getConvertPrometheusConfigV1RulesNamespaceTitleQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostConvertPrometheusConfigV1RulesNamespaceTitleMutationKey() {
  return ['convert', '/convert/prometheus/config/v1/rules/:NamespaceTitle', 'POST'] as const
}

export function getPostConvertPrometheusConfigV1RulesNamespaceTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostConvertPrometheusConfigV1RulesNamespaceTitleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$post']
      >,
    ) {
      return parseResponse(
        client.convert.prometheus.config.v1.rules[':NamespaceTitle'].$post(args, options),
      )
    },
  })
}

export function injectPostConvertPrometheusConfigV1RulesNamespaceTitle<
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
                  (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$post']
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
    const mutationDefaults = getPostConvertPrometheusConfigV1RulesNamespaceTitleMutationOptions<
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

export function getDeleteConvertPrometheusConfigV1RulesNamespaceTitleMutationKey() {
  return ['convert', '/convert/prometheus/config/v1/rules/:NamespaceTitle', 'DELETE'] as const
}

export function getDeleteConvertPrometheusConfigV1RulesNamespaceTitleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConvertPrometheusConfigV1RulesNamespaceTitleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$delete']
      >,
    ) {
      return parseResponse(
        client.convert.prometheus.config.v1.rules[':NamespaceTitle'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteConvertPrometheusConfigV1RulesNamespaceTitle<
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
                  (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$delete']
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
    const mutationDefaults = getDeleteConvertPrometheusConfigV1RulesNamespaceTitleMutationOptions<
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

export function getConvertPrometheusConfigV1RulesNamespaceTitleGroupQueryKey(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
  >,
) {
  return ['convert', '/convert/prometheus/config/v1/rules/:NamespaceTitle/:Group', args] as const
}

export function getConvertPrometheusConfigV1RulesNamespaceTitleGroupQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getConvertPrometheusConfigV1RulesNamespaceTitleGroupQueryKey>
  >({
    queryKey: getConvertPrometheusConfigV1RulesNamespaceTitleGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.convert.prometheus.config.v1.rules[':NamespaceTitle'][':Group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectConvertPrometheusConfigV1RulesNamespaceTitleGroup<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getConvertPrometheusConfigV1RulesNamespaceTitleGroupQueryKey>
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
      ...getConvertPrometheusConfigV1RulesNamespaceTitleGroupQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteConvertPrometheusConfigV1RulesNamespaceTitleGroupMutationKey() {
  return [
    'convert',
    '/convert/prometheus/config/v1/rules/:NamespaceTitle/:Group',
    'DELETE',
  ] as const
}

export function getDeleteConvertPrometheusConfigV1RulesNamespaceTitleGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteConvertPrometheusConfigV1RulesNamespaceTitleGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$delete']
      >,
    ) {
      return parseResponse(
        client.convert.prometheus.config.v1.rules[':NamespaceTitle'][':Group'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteConvertPrometheusConfigV1RulesNamespaceTitleGroup<
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
                  (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$delete']
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
      getDeleteConvertPrometheusConfigV1RulesNamespaceTitleGroupMutationOptions<
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

export function getDashboardSnapshotsQueryKey(
  args: InferRequestType<typeof client.dashboard.snapshots.$get>,
) {
  return ['dashboard', '/dashboard/snapshots', args] as const
}

export function getDashboardSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.dashboard.snapshots.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.snapshots.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardSnapshotsQueryKey>
  >({
    queryKey: getDashboardSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboard.snapshots.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDashboardSnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.dashboard.snapshots.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.snapshots.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardSnapshotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDashboardSnapshotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostDashboardsDbMutationKey() {
  return ['dashboards', '/dashboards/db', 'POST'] as const
}

export function getPostDashboardsDbMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.db.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dashboards.db.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsDbMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dashboards.db.$post>) {
      return parseResponse(client.dashboards.db.$post(args, options))
    },
  })
}

export function injectPostDashboardsDb<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.db.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.dashboards.db.$post>,
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
    const mutationDefaults = getPostDashboardsDbMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDashboardsHomeQueryKey() {
  return ['dashboards', '/dashboards/home'] as const
}

export function getDashboardsHomeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.home.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.home.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsHomeQueryKey>
  >({
    queryKey: getDashboardsHomeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards.home.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDashboardsHome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.home.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.home.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsHomeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDashboardsHomeQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostDashboardsImportMutationKey() {
  return ['dashboards', '/dashboards/import', 'POST'] as const
}

export function getPostDashboardsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.import.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.dashboards.import.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsImportMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dashboards.import.$post>) {
      return parseResponse(client.dashboards.import.$post(args, options))
    },
  })
}

export function injectPostDashboardsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.import.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.dashboards.import.$post>,
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
    const mutationDefaults = getPostDashboardsImportMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostDashboardsInterpolateMutationKey() {
  return ['dashboards', '/dashboards/interpolate', 'POST'] as const
}

export function getPostDashboardsInterpolateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.interpolate.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsInterpolateMutationKey(),
    async mutationFn() {
      return parseResponse(client.dashboards.interpolate.$post(undefined, options))
    },
  })
}

export function injectPostDashboardsInterpolate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.interpolate.$post>>>
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostDashboardsInterpolateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDashboardsPublicDashboardsQueryKey() {
  return ['dashboards', '/dashboards/public-dashboards'] as const
}

export function getDashboardsPublicDashboardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards)['public-dashboards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards)['public-dashboards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsPublicDashboardsQueryKey>
  >({
    queryKey: getDashboardsPublicDashboardsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards['public-dashboards'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsPublicDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards)['public-dashboards']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client.dashboards)['public-dashboards']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsPublicDashboardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDashboardsPublicDashboardsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDashboardsTagsQueryKey() {
  return ['dashboards', '/dashboards/tags'] as const
}

export function getDashboardsTagsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.tags.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsTagsQueryKey>
  >({
    queryKey: getDashboardsTagsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDashboardsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.tags.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsTagsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDashboardsTagsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getDashboardsUidDashboardUidPublicDashboardsQueryKey(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
  >,
) {
  return ['dashboards', '/dashboards/uid/:dashboardUid/public-dashboards', args] as const
}

export function getDashboardsUidDashboardUidPublicDashboardsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsUidDashboardUidPublicDashboardsQueryKey>
  >({
    queryKey: getDashboardsUidDashboardUidPublicDashboardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards.uid[':dashboardUid']['public-dashboards'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsUidDashboardUidPublicDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getDashboardsUidDashboardUidPublicDashboardsQueryKey>
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
      ...getDashboardsUidDashboardUidPublicDashboardsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostDashboardsUidDashboardUidPublicDashboardsMutationKey() {
  return ['dashboards', '/dashboards/uid/:dashboardUid/public-dashboards', 'POST'] as const
}

export function getPostDashboardsUidDashboardUidPublicDashboardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsUidDashboardUidPublicDashboardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$post']
      >,
    ) {
      return parseResponse(
        client.dashboards.uid[':dashboardUid']['public-dashboards'].$post(args, options),
      )
    },
  })
}

export function injectPostDashboardsUidDashboardUidPublicDashboards<
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
                  (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$post']
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
    const mutationDefaults = getPostDashboardsUidDashboardUidPublicDashboardsMutationOptions<
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

export function getDeleteDashboardsUidDashboardUidPublicDashboardsUidMutationKey() {
  return ['dashboards', '/dashboards/uid/:dashboardUid/public-dashboards/:uid', 'DELETE'] as const
}

export function getDeleteDashboardsUidDashboardUidPublicDashboardsUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDashboardsUidDashboardUidPublicDashboardsUidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$delete']
      >,
    ) {
      return parseResponse(
        client.dashboards.uid[':dashboardUid']['public-dashboards'][':uid'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteDashboardsUidDashboardUidPublicDashboardsUid<
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
                  (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$delete']
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
    const mutationDefaults = getDeleteDashboardsUidDashboardUidPublicDashboardsUidMutationOptions<
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

export function getPatchDashboardsUidDashboardUidPublicDashboardsUidMutationKey() {
  return ['dashboards', '/dashboards/uid/:dashboardUid/public-dashboards/:uid', 'PATCH'] as const
}

export function getPatchDashboardsUidDashboardUidPublicDashboardsUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDashboardsUidDashboardUidPublicDashboardsUidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$patch']
      >,
    ) {
      return parseResponse(
        client.dashboards.uid[':dashboardUid']['public-dashboards'][':uid'].$patch(args, options),
      )
    },
  })
}

export function injectPatchDashboardsUidDashboardUidPublicDashboardsUid<
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
                  (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards'][':uid']['$patch']
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
    const mutationDefaults = getPatchDashboardsUidDashboardUidPublicDashboardsUidMutationOptions<
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

export function getDashboardsUidUidQueryKey(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['$get']>,
) {
  return ['dashboards', '/dashboards/uid/:uid', args] as const
}

export function getDashboardsUidUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsUidUidQueryKey>
  >({
    queryKey: getDashboardsUidUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards.uid[':uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsUidUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dashboards.uid)[':uid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsUidUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDashboardsUidUidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteDashboardsUidUidMutationKey() {
  return ['dashboards', '/dashboards/uid/:uid', 'DELETE'] as const
}

export function getDeleteDashboardsUidUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboards.uid)[':uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDashboardsUidUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.dashboards.uid)[':uid']['$delete']>) {
      return parseResponse(client.dashboards.uid[':uid'].$delete(args, options))
    },
  })
}

export function injectDeleteDashboardsUidUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dashboards.uid)[':uid']['$delete']>,
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
    const mutationDefaults = getDeleteDashboardsUidUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDashboardsUidUidPermissionsQueryKey(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>,
) {
  return ['dashboards', '/dashboards/uid/:uid/permissions', args] as const
}

export function getDashboardsUidUidPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsUidUidPermissionsQueryKey>
  >({
    queryKey: getDashboardsUidUidPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards.uid[':uid'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsUidUidPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsUidUidPermissionsQueryKey>
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
      ...getDashboardsUidUidPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDashboardsUidUidPermissionsMutationKey() {
  return ['dashboards', '/dashboards/uid/:uid/permissions', 'POST'] as const
}

export function getPostDashboardsUidUidPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsUidUidPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$post']>,
    ) {
      return parseResponse(client.dashboards.uid[':uid'].permissions.$post(args, options))
    },
  })
}

export function injectPostDashboardsUidUidPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$post']>,
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
    const mutationDefaults = getPostDashboardsUidUidPermissionsMutationOptions<
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

export function getPostDashboardsUidUidRestoreMutationKey() {
  return ['dashboards', '/dashboards/uid/:uid/restore', 'POST'] as const
}

export function getPostDashboardsUidUidRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['restore']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.dashboards.uid)[':uid']['restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsUidUidRestoreMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.dashboards.uid)[':uid']['restore']['$post']>,
    ) {
      return parseResponse(client.dashboards.uid[':uid'].restore.$post(args, options))
    },
  })
}

export function injectPostDashboardsUidUidRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['restore']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.dashboards.uid)[':uid']['restore']['$post']>,
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
    const mutationDefaults = getPostDashboardsUidUidRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDashboardsUidUidVersionsQueryKey(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>,
) {
  return ['dashboards', '/dashboards/uid/:uid/versions', args] as const
}

export function getDashboardsUidUidVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsUidUidVersionsQueryKey>
  >({
    queryKey: getDashboardsUidUidVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards.uid[':uid'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsUidUidVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsUidUidVersionsQueryKey>
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
      ...getDashboardsUidUidVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDashboardsUidUidVersionsDashboardVersionIDQueryKey(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
  >,
) {
  return ['dashboards', '/dashboards/uid/:uid/versions/:DashboardVersionID', args] as const
}

export function getDashboardsUidUidVersionsDashboardVersionIDQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getDashboardsUidUidVersionsDashboardVersionIDQueryKey>
  >({
    queryKey: getDashboardsUidUidVersionsDashboardVersionIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards.uid[':uid'].versions[':DashboardVersionID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsUidUidVersionsDashboardVersionID<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getDashboardsUidUidVersionsDashboardVersionIDQueryKey>
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
      ...getDashboardsUidUidVersionsDashboardVersionIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostDashboardsVariablesPromoteMutationKey() {
  return ['dashboards', '/dashboards/variables/promote', 'POST'] as const
}

export function getPostDashboardsVariablesPromoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.variables.promote.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.dashboards.variables.promote.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsVariablesPromoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.dashboards.variables.promote.$post>) {
      return parseResponse(client.dashboards.variables.promote.$post(args, options))
    },
  })
}

export function injectPostDashboardsVariablesPromote<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.dashboards.variables.promote.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.dashboards.variables.promote.$post>,
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
    const mutationDefaults = getPostDashboardsVariablesPromoteMutationOptions<
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

export function getDashboardsVariablesSharedClustersQueryKey() {
  return ['dashboards', '/dashboards/variables/shared-clusters'] as const
}

export function getDashboardsVariablesSharedClustersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards.variables)['shared-clusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dashboards.variables)['shared-clusters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsVariablesSharedClustersQueryKey>
  >({
    queryKey: getDashboardsVariablesSharedClustersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards.variables['shared-clusters'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsVariablesSharedClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards.variables)['shared-clusters']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client.dashboards.variables)['shared-clusters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardsVariablesSharedClustersQueryKey>
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
      ...getDashboardsVariablesSharedClustersQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDashboardsVariablesSharedClustersOccurrencesQueryKey(
  args: InferRequestType<
    (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
  >,
) {
  return ['dashboards', '/dashboards/variables/shared-clusters/occurrences', args] as const
}

export function getDashboardsVariablesSharedClustersOccurrencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getDashboardsVariablesSharedClustersOccurrencesQueryKey>
  >({
    queryKey: getDashboardsVariablesSharedClustersOccurrencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboards.variables['shared-clusters'].occurrences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDashboardsVariablesSharedClustersOccurrences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getDashboardsVariablesSharedClustersOccurrencesQueryKey>
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
      ...getDashboardsVariablesSharedClustersOccurrencesQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostDashboardsVariablesSharedClustersRescanMutationKey() {
  return ['dashboards', '/dashboards/variables/shared-clusters/rescan', 'POST'] as const
}

export function getPostDashboardsVariablesSharedClustersRescanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    void,
    TOnMutateResult
  >({
    mutationKey: getPostDashboardsVariablesSharedClustersRescanMutationKey(),
    async mutationFn() {
      return parseResponse(
        client.dashboards.variables['shared-clusters'].rescan.$post(undefined, options),
      )
    },
  })
}

export function injectPostDashboardsVariablesSharedClustersRescan<
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
                  (typeof client.dashboards.variables)['shared-clusters']['rescan']['$post']
                >
              >
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getPostDashboardsVariablesSharedClustersRescanMutationOptions<
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

export function getDatasourcesQueryKey() {
  return ['datasources', '/datasources'] as const
}

export function getDatasourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatasourcesQueryKey>
  >({
    queryKey: getDatasourcesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDatasources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasourcesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostDatasourcesMutationKey() {
  return ['datasources', '/datasources', 'POST'] as const
}

export function getPostDatasourcesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$post>>>>>,
    TError,
    InferRequestType<typeof client.datasources.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.datasources.$post>) {
      return parseResponse(client.datasources.$post(args, options))
    },
  })
}

export function injectPostDatasources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.datasources.$post>,
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
    const mutationDefaults = getPostDatasourcesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDatasourcesCorrelationsQueryKey(
  args: InferRequestType<typeof client.datasources.correlations.$get>,
) {
  return ['datasources', '/datasources/correlations', args] as const
}

export function getDatasourcesCorrelationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.datasources.correlations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.datasources.correlations.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.datasources.correlations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesCorrelationsQueryKey>
  >({
    queryKey: getDatasourcesCorrelationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources.correlations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasourcesCorrelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.datasources.correlations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.datasources.correlations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.datasources.correlations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesCorrelationsQueryKey>
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
      ...getDatasourcesCorrelationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDatasourcesIdNameQueryKey(
  args: InferRequestType<(typeof client.datasources.id)[':name']['$get']>,
) {
  return ['datasources', '/datasources/id/:name', args] as const
}

export function getDatasourcesIdNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.id)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasources.id)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.id)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesIdNameQueryKey>
  >({
    queryKey: getDatasourcesIdNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources.id[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasourcesIdName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.id)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasources.id)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources.id)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesIdNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasourcesIdNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDatasourcesNameNameQueryKey(
  args: InferRequestType<(typeof client.datasources.name)[':name']['$get']>,
) {
  return ['datasources', '/datasources/name/:name', args] as const
}

export function getDatasourcesNameNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.name)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasources.name)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.name)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesNameNameQueryKey>
  >({
    queryKey: getDatasourcesNameNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources.name[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasourcesNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.name)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasources.name)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources.name)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesNameNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasourcesNameNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteDatasourcesNameNameMutationKey() {
  return ['datasources', '/datasources/name/:name', 'DELETE'] as const
}

export function getDeleteDatasourcesNameNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources.name)[':name']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasources.name)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasourcesNameNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datasources.name)[':name']['$delete']>) {
      return parseResponse(client.datasources.name[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteDatasourcesNameName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources.name)[':name']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasources.name)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteDatasourcesNameNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDatasourcesProxyUidUidDatasourceProxyRouteQueryKey(
  args: InferRequestType<
    (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
  >,
) {
  return ['datasources', '/datasources/proxy/uid/:uid/:datasource_proxy_route', args] as const
}

export function getDatasourcesProxyUidUidDatasourceProxyRouteQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getDatasourcesProxyUidUidDatasourceProxyRouteQueryKey>
  >({
    queryKey: getDatasourcesProxyUidUidDatasourceProxyRouteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources.proxy.uid[':uid'][':datasource_proxy_route'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasourcesProxyUidUidDatasourceProxyRoute<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getDatasourcesProxyUidUidDatasourceProxyRouteQueryKey>
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
      ...getDatasourcesProxyUidUidDatasourceProxyRouteQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostDatasourcesProxyUidUidDatasourceProxyRouteMutationKey() {
  return ['datasources', '/datasources/proxy/uid/:uid/:datasource_proxy_route', 'POST'] as const
}

export function getPostDatasourcesProxyUidUidDatasourceProxyRouteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesProxyUidUidDatasourceProxyRouteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$post']
      >,
    ) {
      return parseResponse(
        client.datasources.proxy.uid[':uid'][':datasource_proxy_route'].$post(args, options),
      )
    },
  })
}

export function injectPostDatasourcesProxyUidUidDatasourceProxyRoute<
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
                  (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$post']
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
    const mutationDefaults = getPostDatasourcesProxyUidUidDatasourceProxyRouteMutationOptions<
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

export function getDeleteDatasourcesProxyUidUidDatasourceProxyRouteMutationKey() {
  return ['datasources', '/datasources/proxy/uid/:uid/:datasource_proxy_route', 'DELETE'] as const
}

export function getDeleteDatasourcesProxyUidUidDatasourceProxyRouteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasourcesProxyUidUidDatasourceProxyRouteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$delete']
      >,
    ) {
      return parseResponse(
        client.datasources.proxy.uid[':uid'][':datasource_proxy_route'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteDatasourcesProxyUidUidDatasourceProxyRoute<
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
                  (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$delete']
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
    const mutationDefaults = getDeleteDatasourcesProxyUidUidDatasourceProxyRouteMutationOptions<
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

export function getDatasourcesUidSourceUIDCorrelationsQueryKey(
  args: InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>,
) {
  return ['datasources', '/datasources/uid/:sourceUID/correlations', args] as const
}

export function getDatasourcesUidSourceUIDCorrelationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesUidSourceUIDCorrelationsQueryKey>
  >({
    queryKey: getDatasourcesUidSourceUIDCorrelationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources.uid[':sourceUID'].correlations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasourcesUidSourceUIDCorrelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.datasources.uid)[':sourceUID']['correlations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesUidSourceUIDCorrelationsQueryKey>
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
      ...getDatasourcesUidSourceUIDCorrelationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDatasourcesUidSourceUIDCorrelationsMutationKey() {
  return ['datasources', '/datasources/uid/:sourceUID/correlations', 'POST'] as const
}

export function getPostDatasourcesUidSourceUIDCorrelationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesUidSourceUIDCorrelationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.datasources.uid)[':sourceUID']['correlations']['$post']
      >,
    ) {
      return parseResponse(client.datasources.uid[':sourceUID'].correlations.$post(args, options))
    },
  })
}

export function injectPostDatasourcesUidSourceUIDCorrelations<
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
                ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$post']>,
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
    const mutationDefaults = getPostDatasourcesUidSourceUIDCorrelationsMutationOptions<
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

export function getDatasourcesUidSourceUIDCorrelationsCorrelationUIDQueryKey(
  args: InferRequestType<
    (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
  >,
) {
  return ['datasources', '/datasources/uid/:sourceUID/correlations/:correlationUID', args] as const
}

export function getDatasourcesUidSourceUIDCorrelationsCorrelationUIDQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getDatasourcesUidSourceUIDCorrelationsCorrelationUIDQueryKey>
  >({
    queryKey: getDatasourcesUidSourceUIDCorrelationsCorrelationUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources.uid[':sourceUID'].correlations[':correlationUID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasourcesUidSourceUIDCorrelationsCorrelationUID<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getDatasourcesUidSourceUIDCorrelationsCorrelationUIDQueryKey>
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
      ...getDatasourcesUidSourceUIDCorrelationsCorrelationUIDQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPatchDatasourcesUidSourceUIDCorrelationsCorrelationUIDMutationKey() {
  return [
    'datasources',
    '/datasources/uid/:sourceUID/correlations/:correlationUID',
    'PATCH',
  ] as const
}

export function getPatchDatasourcesUidSourceUIDCorrelationsCorrelationUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchDatasourcesUidSourceUIDCorrelationsCorrelationUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$patch']
      >,
    ) {
      return parseResponse(
        client.datasources.uid[':sourceUID'].correlations[':correlationUID'].$patch(args, options),
      )
    },
  })
}

export function injectPatchDatasourcesUidSourceUIDCorrelationsCorrelationUID<
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
                  (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$patch']
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
      getPatchDatasourcesUidSourceUIDCorrelationsCorrelationUIDMutationOptions<
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

export function getDatasourcesUidUidQueryKey(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['$get']>,
) {
  return ['datasources', '/datasources/uid/:uid', args] as const
}

export function getDatasourcesUidUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesUidUidQueryKey>
  >({
    queryKey: getDatasourcesUidUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources.uid[':uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasourcesUidUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasources.uid)[':uid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesUidUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDatasourcesUidUidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutDatasourcesUidUidMutationKey() {
  return ['datasources', '/datasources/uid/:uid', 'PUT'] as const
}

export function getPutDatasourcesUidUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.datasources.uid)[':uid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatasourcesUidUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datasources.uid)[':uid']['$put']>) {
      return parseResponse(client.datasources.uid[':uid'].$put(args, options))
    },
  })
}

export function injectPutDatasourcesUidUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasources.uid)[':uid']['$put']>,
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
    const mutationDefaults = getPutDatasourcesUidUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteDatasourcesUidUidMutationKey() {
  return ['datasources', '/datasources/uid/:uid', 'DELETE'] as const
}

export function getDeleteDatasourcesUidUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasources.uid)[':uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasourcesUidUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.datasources.uid)[':uid']['$delete']>) {
      return parseResponse(client.datasources.uid[':uid'].$delete(args, options))
    },
  })
}

export function injectDeleteDatasourcesUidUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasources.uid)[':uid']['$delete']>,
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
    const mutationDefaults = getDeleteDatasourcesUidUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteDatasourcesUidUidCorrelationsCorrelationUIDMutationKey() {
  return ['datasources', '/datasources/uid/:uid/correlations/:correlationUID', 'DELETE'] as const
}

export function getDeleteDatasourcesUidUidCorrelationsCorrelationUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.datasources.uid)[':uid']['correlations'][':correlationUID']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteDatasourcesUidUidCorrelationsCorrelationUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.datasources.uid)[':uid']['correlations'][':correlationUID']['$delete']
      >,
    ) {
      return parseResponse(
        client.datasources.uid[':uid'].correlations[':correlationUID'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteDatasourcesUidUidCorrelationsCorrelationUID<
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
                  (typeof client.datasources.uid)[':uid']['correlations'][':correlationUID']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.datasources.uid)[':uid']['correlations'][':correlationUID']['$delete']
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
    const mutationDefaults = getDeleteDatasourcesUidUidCorrelationsCorrelationUIDMutationOptions<
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

export function getDatasourcesUidUidHealthQueryKey(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['health']['$get']>,
) {
  return ['datasources', '/datasources/uid/:uid/health', args] as const
}

export function getDatasourcesUidUidHealthQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['health']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['health']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['health']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesUidUidHealthQueryKey>
  >({
    queryKey: getDatasourcesUidUidHealthQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources.uid[':uid'].health.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasourcesUidUidHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['health']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasources.uid)[':uid']['health']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['health']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesUidUidHealthQueryKey>
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
      ...getDatasourcesUidUidHealthQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDatasourcesUidUidLbacTeamsQueryKey(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>,
) {
  return ['datasources', '/datasources/uid/:uid/lbac/teams', args] as const
}

export function getDatasourcesUidUidLbacTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesUidUidLbacTeamsQueryKey>
  >({
    queryKey: getDatasourcesUidUidLbacTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources.uid[':uid'].lbac.teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasourcesUidUidLbacTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesUidUidLbacTeamsQueryKey>
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
      ...getDatasourcesUidUidLbacTeamsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutDatasourcesUidUidLbacTeamsMutationKey() {
  return ['datasources', '/datasources/uid/:uid/lbac/teams', 'PUT'] as const
}

export function getPutDatasourcesUidUidLbacTeamsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDatasourcesUidUidLbacTeamsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$put']>,
    ) {
      return parseResponse(client.datasources.uid[':uid'].lbac.teams.$put(args, options))
    },
  })
}

export function injectPutDatasourcesUidUidLbacTeams<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$put']>,
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
    const mutationDefaults = getPutDatasourcesUidUidLbacTeamsMutationOptions<
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

export function getDatasourcesUidUidResourcesDatasourceProxyRouteQueryKey(
  args: InferRequestType<
    (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
  >,
) {
  return ['datasources', '/datasources/uid/:uid/resources/:datasource_proxy_route', args] as const
}

export function getDatasourcesUidUidResourcesDatasourceProxyRouteQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getDatasourcesUidUidResourcesDatasourceProxyRouteQueryKey>
  >({
    queryKey: getDatasourcesUidUidResourcesDatasourceProxyRouteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources.uid[':uid'].resources[':datasource_proxy_route'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasourcesUidUidResourcesDatasourceProxyRoute<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getDatasourcesUidUidResourcesDatasourceProxyRouteQueryKey>
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
      ...getDatasourcesUidUidResourcesDatasourceProxyRouteQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDatasourcesDataSourceUIDCacheQueryKey(
  args: InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>,
) {
  return ['datasources', '/datasources/:dataSourceUID/cache', args] as const
}

export function getDatasourcesDataSourceUIDCacheQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesDataSourceUIDCacheQueryKey>
  >({
    queryKey: getDatasourcesDataSourceUIDCacheQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.datasources[':dataSourceUID'].cache.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDatasourcesDataSourceUIDCache<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDatasourcesDataSourceUIDCacheQueryKey>
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
      ...getDatasourcesDataSourceUIDCacheQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostDatasourcesDataSourceUIDCacheMutationKey() {
  return ['datasources', '/datasources/:dataSourceUID/cache', 'POST'] as const
}

export function getPostDatasourcesDataSourceUIDCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesDataSourceUIDCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$post']>,
    ) {
      return parseResponse(client.datasources[':dataSourceUID'].cache.$post(args, options))
    },
  })
}

export function injectPostDatasourcesDataSourceUIDCache<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$post']>,
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
    const mutationDefaults = getPostDatasourcesDataSourceUIDCacheMutationOptions<
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

export function getPostDatasourcesDataSourceUIDCacheCleanMutationKey() {
  return ['datasources', '/datasources/:dataSourceUID/cache/clean', 'POST'] as const
}

export function getPostDatasourcesDataSourceUIDCacheCleanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['clean']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesDataSourceUIDCacheCleanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.datasources)[':dataSourceUID']['cache']['clean']['$post']
      >,
    ) {
      return parseResponse(client.datasources[':dataSourceUID'].cache.clean.$post(args, options))
    },
  })
}

export function injectPostDatasourcesDataSourceUIDCacheClean<
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
                ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['clean']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['clean']['$post']>,
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
    const mutationDefaults = getPostDatasourcesDataSourceUIDCacheCleanMutationOptions<
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

export function getPostDatasourcesDataSourceUIDCacheDisableMutationKey() {
  return ['datasources', '/datasources/:dataSourceUID/cache/disable', 'POST'] as const
}

export function getPostDatasourcesDataSourceUIDCacheDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesDataSourceUIDCacheDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.datasources)[':dataSourceUID']['cache']['disable']['$post']
      >,
    ) {
      return parseResponse(client.datasources[':dataSourceUID'].cache.disable.$post(args, options))
    },
  })
}

export function injectPostDatasourcesDataSourceUIDCacheDisable<
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
                  (typeof client.datasources)[':dataSourceUID']['cache']['disable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.datasources)[':dataSourceUID']['cache']['disable']['$post']
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
    const mutationDefaults = getPostDatasourcesDataSourceUIDCacheDisableMutationOptions<
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

export function getPostDatasourcesDataSourceUIDCacheEnableMutationKey() {
  return ['datasources', '/datasources/:dataSourceUID/cache/enable', 'POST'] as const
}

export function getPostDatasourcesDataSourceUIDCacheEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostDatasourcesDataSourceUIDCacheEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.datasources)[':dataSourceUID']['cache']['enable']['$post']
      >,
    ) {
      return parseResponse(client.datasources[':dataSourceUID'].cache.enable.$post(args, options))
    },
  })
}

export function injectPostDatasourcesDataSourceUIDCacheEnable<
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
                  (typeof client.datasources)[':dataSourceUID']['cache']['enable']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['enable']['$post']>,
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
    const mutationDefaults = getPostDatasourcesDataSourceUIDCacheEnableMutationOptions<
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

export function getPostDsQueryMutationKey() {
  return ['ds', '/ds/query', 'POST'] as const
}

export function getPostDsQueryMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ds.query.$post>>>>>,
    TError,
    InferRequestType<typeof client.ds.query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDsQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ds.query.$post>) {
      return parseResponse(client.ds.query.$post(args, options))
    },
  })
}

export function injectPostDsQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ds.query.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.ds.query.$post>,
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
    const mutationDefaults = getPostDsQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFoldersQueryKey(args: InferRequestType<typeof client.folders.$get>) {
  return ['folders', '/folders', args] as const
}

export function getFoldersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.folders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoldersQueryKey>
  >({
    queryKey: getFoldersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.folders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getFoldersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFoldersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostFoldersMutationKey() {
  return ['folders', '/folders', 'POST'] as const
}

export function getPostFoldersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$post>>>>>,
    TError,
    InferRequestType<typeof client.folders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.folders.$post>) {
      return parseResponse(client.folders.$post(args, options))
    },
  })
}

export function injectPostFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$post>>>>>,
        TError,
        InferRequestType<typeof client.folders.$post>,
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
    const mutationDefaults = getPostFoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFoldersFolderUidQueryKey(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['$get']>,
) {
  return ['folders', '/folders/:folder_uid', args] as const
}

export function getFoldersFolderUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderUidQueryKey>
  >({
    queryKey: getFoldersFolderUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFoldersFolderUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.folders)[':folder_uid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFoldersFolderUidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutFoldersFolderUidMutationKey() {
  return ['folders', '/folders/:folder_uid', 'PUT'] as const
}

export function getPutFoldersFolderUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_uid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutFoldersFolderUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.folders)[':folder_uid']['$put']>) {
      return parseResponse(client.folders[':folder_uid'].$put(args, options))
    },
  })
}

export function injectPutFoldersFolderUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':folder_uid']['$put']>,
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
    const mutationDefaults = getPutFoldersFolderUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteFoldersFolderUidMutationKey() {
  return ['folders', '/folders/:folder_uid', 'DELETE'] as const
}

export function getDeleteFoldersFolderUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteFoldersFolderUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.folders)[':folder_uid']['$delete']>) {
      return parseResponse(client.folders[':folder_uid'].$delete(args, options))
    },
  })
}

export function injectDeleteFoldersFolderUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':folder_uid']['$delete']>,
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
    const mutationDefaults = getDeleteFoldersFolderUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFoldersFolderUidCountsQueryKey(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['counts']['$get']>,
) {
  return ['folders', '/folders/:folder_uid/counts', args] as const
}

export function getFoldersFolderUidCountsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_uid']['counts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['counts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_uid']['counts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderUidCountsQueryKey>
  >({
    queryKey: getFoldersFolderUidCountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_uid'].counts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFoldersFolderUidCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_uid']['counts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.folders)[':folder_uid']['counts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_uid']['counts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderUidCountsQueryKey>
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
      ...getFoldersFolderUidCountsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostFoldersFolderUidMoveMutationKey() {
  return ['folders', '/folders/:folder_uid/move', 'POST'] as const
}

export function getPostFoldersFolderUidMoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_uid']['move']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_uid']['move']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersFolderUidMoveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.folders)[':folder_uid']['move']['$post']>,
    ) {
      return parseResponse(client.folders[':folder_uid'].move.$post(args, options))
    },
  })
}

export function injectPostFoldersFolderUidMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_uid']['move']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':folder_uid']['move']['$post']>,
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
    const mutationDefaults = getPostFoldersFolderUidMoveMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getFoldersFolderUidPermissionsQueryKey(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$get']>,
) {
  return ['folders', '/folders/:folder_uid/permissions', args] as const
}

export function getFoldersFolderUidPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderUidPermissionsQueryKey>
  >({
    queryKey: getFoldersFolderUidPermissionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.folders[':folder_uid'].permissions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectFoldersFolderUidPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFoldersFolderUidPermissionsQueryKey>
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
      ...getFoldersFolderUidPermissionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostFoldersFolderUidPermissionsMutationKey() {
  return ['folders', '/folders/:folder_uid/permissions', 'POST'] as const
}

export function getPostFoldersFolderUidPermissionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFoldersFolderUidPermissionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$post']>,
    ) {
      return parseResponse(client.folders[':folder_uid'].permissions.$post(args, options))
    },
  })
}

export function injectPostFoldersFolderUidPermissions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$post']>,
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
    const mutationDefaults = getPostFoldersFolderUidPermissionsMutationOptions<
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

export function getLibraryElementsQueryKey(
  args: InferRequestType<(typeof client)['library-elements']['$get']>,
) {
  return ['library-elements', '/library-elements', args] as const
}

export function getLibraryElementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['library-elements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryElementsQueryKey>
  >({
    queryKey: getLibraryElementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['library-elements'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLibraryElements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['library-elements']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLibraryElementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLibraryElementsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostLibraryElementsMutationKey() {
  return ['library-elements', '/library-elements', 'POST'] as const
}

export function getPostLibraryElementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['library-elements']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLibraryElementsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['library-elements']['$post']>) {
      return parseResponse(client['library-elements'].$post(args, options))
    },
  })
}

export function injectPostLibraryElements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['library-elements']['$post']>,
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
    const mutationDefaults = getPostLibraryElementsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLibraryElementsNameLibraryElementNameQueryKey(
  args: InferRequestType<
    (typeof client)['library-elements']['name'][':library_element_name']['$get']
  >,
) {
  return ['library-elements', '/library-elements/name/:library_element_name', args] as const
}

export function getLibraryElementsNameLibraryElementNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['library-elements']['name'][':library_element_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['library-elements']['name'][':library_element_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['library-elements']['name'][':library_element_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryElementsNameLibraryElementNameQueryKey>
  >({
    queryKey: getLibraryElementsNameLibraryElementNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['library-elements'].name[':library_element_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLibraryElementsNameLibraryElementName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['library-elements']['name'][':library_element_name']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['library-elements']['name'][':library_element_name']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getLibraryElementsNameLibraryElementNameQueryKey>
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
      ...getLibraryElementsNameLibraryElementNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getLibraryElementsLibraryElementUidQueryKey(
  args: InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$get']>,
) {
  return ['library-elements', '/library-elements/:library_element_uid', args] as const
}

export function getLibraryElementsLibraryElementUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['library-elements'][':library_element_uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['library-elements'][':library_element_uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryElementsLibraryElementUidQueryKey>
  >({
    queryKey: getLibraryElementsLibraryElementUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['library-elements'][':library_element_uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLibraryElementsLibraryElementUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['library-elements'][':library_element_uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['library-elements'][':library_element_uid']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLibraryElementsLibraryElementUidQueryKey>
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
      ...getLibraryElementsLibraryElementUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteLibraryElementsLibraryElementUidMutationKey() {
  return ['library-elements', '/library-elements/:library_element_uid', 'DELETE'] as const
}

export function getDeleteLibraryElementsLibraryElementUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLibraryElementsLibraryElementUidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['library-elements'][':library_element_uid']['$delete']
      >,
    ) {
      return parseResponse(
        client['library-elements'][':library_element_uid'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteLibraryElementsLibraryElementUid<
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
                ReturnType<(typeof client)['library-elements'][':library_element_uid']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$delete']>,
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
    const mutationDefaults = getDeleteLibraryElementsLibraryElementUidMutationOptions<
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

export function getPatchLibraryElementsLibraryElementUidMutationKey() {
  return ['library-elements', '/library-elements/:library_element_uid', 'PATCH'] as const
}

export function getPatchLibraryElementsLibraryElementUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['library-elements'][':library_element_uid']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLibraryElementsLibraryElementUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$patch']>,
    ) {
      return parseResponse(client['library-elements'][':library_element_uid'].$patch(args, options))
    },
  })
}

export function injectPatchLibraryElementsLibraryElementUid<
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
                ReturnType<(typeof client)['library-elements'][':library_element_uid']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$patch']>,
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
    const mutationDefaults = getPatchLibraryElementsLibraryElementUidMutationOptions<
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

export function getLibraryElementsLibraryElementUidConnectionsIndexQueryKey(
  args: InferRequestType<
    (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
  >,
) {
  return ['library-elements', '/library-elements/:library_element_uid/connections/', args] as const
}

export function getLibraryElementsLibraryElementUidConnectionsIndexQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getLibraryElementsLibraryElementUidConnectionsIndexQueryKey>
  >({
    queryKey: getLibraryElementsLibraryElementUidConnectionsIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['library-elements'][':library_element_uid'].connections.index.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLibraryElementsLibraryElementUidConnectionsIndex<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getLibraryElementsLibraryElementUidConnectionsIndexQueryKey>
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
      ...getLibraryElementsLibraryElementUidConnectionsIndexQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getLicensingCheckQueryKey() {
  return ['licensing', '/licensing/check'] as const
}

export function getLicensingCheckQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.check.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.check.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLicensingCheckQueryKey>
  >({
    queryKey: getLicensingCheckQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.licensing.check.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLicensingCheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.check.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.check.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLicensingCheckQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLicensingCheckQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getLicensingCustomPermissionsQueryKey() {
  return ['licensing', '/licensing/custom-permissions'] as const
}

export function getLicensingCustomPermissionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.licensing)['custom-permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensing)['custom-permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicensingCustomPermissionsQueryKey>
  >({
    queryKey: getLicensingCustomPermissionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.licensing['custom-permissions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLicensingCustomPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.licensing)['custom-permissions']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client.licensing)['custom-permissions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLicensingCustomPermissionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLicensingCustomPermissionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getLicensingCustomPermissionsCsvQueryKey() {
  return ['licensing', '/licensing/custom-permissions-csv'] as const
}

export function getLicensingCustomPermissionsCsvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.licensing)['custom-permissions-csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensing)['custom-permissions-csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicensingCustomPermissionsCsvQueryKey>
  >({
    queryKey: getLicensingCustomPermissionsCsvQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.licensing['custom-permissions-csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLicensingCustomPermissionsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.licensing)['custom-permissions-csv']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client.licensing)['custom-permissions-csv']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLicensingCustomPermissionsCsvQueryKey>
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
      ...getLicensingCustomPermissionsCsvQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getLicensingRefreshStatsQueryKey() {
  return ['licensing', '/licensing/refresh-stats'] as const
}

export function getLicensingRefreshStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.licensing)['refresh-stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.licensing)['refresh-stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicensingRefreshStatsQueryKey>
  >({
    queryKey: getLicensingRefreshStatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.licensing['refresh-stats'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLicensingRefreshStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.licensing)['refresh-stats']['$get']>>>
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
              Awaited<ReturnType<(typeof client.licensing)['refresh-stats']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLicensingRefreshStatsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLicensingRefreshStatsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getLicensingTokenQueryKey() {
  return ['licensing', '/licensing/token'] as const
}

export function getLicensingTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLicensingTokenQueryKey>
  >({
    queryKey: getLicensingTokenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.licensing.token.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLicensingToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLicensingTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLicensingTokenQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostLicensingTokenMutationKey() {
  return ['licensing', '/licensing/token', 'POST'] as const
}

export function getPostLicensingTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.licensing.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLicensingTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.licensing.token.$post>) {
      return parseResponse(client.licensing.token.$post(args, options))
    },
  })
}

export function injectPostLicensingToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.licensing.token.$post>,
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
    const mutationDefaults = getPostLicensingTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteLicensingTokenMutationKey() {
  return ['licensing', '/licensing/token', 'DELETE'] as const
}

export function getDeleteLicensingTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.licensing.token.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLicensingTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.licensing.token.$delete>) {
      return parseResponse(client.licensing.token.$delete(args, options))
    },
  })
}

export function injectDeleteLicensingToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$delete>>>
          >
        >,
        TError,
        InferRequestType<typeof client.licensing.token.$delete>,
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
    const mutationDefaults = getDeleteLicensingTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostLicensingTokenRenewMutationKey() {
  return ['licensing', '/licensing/token/renew', 'POST'] as const
}

export function getPostLicensingTokenRenewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.renew.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.licensing.token.renew.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostLicensingTokenRenewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.licensing.token.renew.$post>) {
      return parseResponse(client.licensing.token.renew.$post(args, options))
    },
  })
}

export function injectPostLicensingTokenRenew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.renew.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.licensing.token.renew.$post>,
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
    const mutationDefaults = getPostLicensingTokenRenewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLogoutSamlQueryKey() {
  return ['logout', '/logout/saml'] as const
}

export function getLogoutSamlQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.saml.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.saml.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogoutSamlQueryKey>
  >({
    queryKey: getLogoutSamlQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.logout.saml.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLogoutSaml<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.saml.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.saml.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogoutSamlQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLogoutSamlQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getOrgQueryKey() {
  return ['org', '/org'] as const
}

export function getOrgQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgQueryKey>
  >({
    queryKey: getOrgQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrg<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrgQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutOrgMutationKey() {
  return ['org', '/org', 'PUT'] as const
}

export function getPutOrgMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$put>>>>>,
    TError,
    InferRequestType<typeof client.org.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.org.$put>) {
      return parseResponse(client.org.$put(args, options))
    },
  })
}

export function injectPutOrg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$put>>>>>,
        TError,
        InferRequestType<typeof client.org.$put>,
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
    const mutationDefaults = getPutOrgMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutOrgAddressMutationKey() {
  return ['org', '/org/address', 'PUT'] as const
}

export function getPutOrgAddressMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.address.$put>>>>>,
    TError,
    InferRequestType<typeof client.org.address.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgAddressMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.org.address.$put>) {
      return parseResponse(client.org.address.$put(args, options))
    },
  })
}

export function injectPutOrgAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.address.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.org.address.$put>,
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
    const mutationDefaults = getPutOrgAddressMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrgInvitesQueryKey() {
  return ['org', '/org/invites'] as const
}

export function getOrgInvitesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgInvitesQueryKey>
  >({
    queryKey: getOrgInvitesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.invites.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgInvites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrgInvitesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgInvitesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostOrgInvitesMutationKey() {
  return ['org', '/org/invites', 'POST'] as const
}

export function getPostOrgInvitesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$post>>>>>,
    TError,
    InferRequestType<typeof client.org.invites.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgInvitesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.org.invites.$post>) {
      return parseResponse(client.org.invites.$post(args, options))
    },
  })
}

export function injectPostOrgInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.org.invites.$post>,
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
    const mutationDefaults = getPostOrgInvitesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteOrgInvitesInvitationCodeRevokeMutationKey() {
  return ['org', '/org/invites/:invitation_code/revoke', 'DELETE'] as const
}

export function getDeleteOrgInvitesInvitationCodeRevokeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.org.invites)[':invitation_code']['revoke']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.org.invites)[':invitation_code']['revoke']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgInvitesInvitationCodeRevokeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.org.invites)[':invitation_code']['revoke']['$delete']>,
    ) {
      return parseResponse(client.org.invites[':invitation_code'].revoke.$delete(args, options))
    },
  })
}

export function injectDeleteOrgInvitesInvitationCodeRevoke<
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
                ReturnType<(typeof client.org.invites)[':invitation_code']['revoke']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org.invites)[':invitation_code']['revoke']['$delete']>,
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
    const mutationDefaults = getDeleteOrgInvitesInvitationCodeRevokeMutationOptions<
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

export function getOrgPreferencesQueryKey() {
  return ['org', '/org/preferences'] as const
}

export function getOrgPreferencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrgPreferencesQueryKey>
  >({
    queryKey: getOrgPreferencesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.preferences.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgPreferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrgPreferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgPreferencesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutOrgPreferencesMutationKey() {
  return ['org', '/org/preferences', 'PUT'] as const
}

export function getPutOrgPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.org.preferences.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgPreferencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.org.preferences.$put>) {
      return parseResponse(client.org.preferences.$put(args, options))
    },
  })
}

export function injectPutOrgPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.org.preferences.$put>,
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
    const mutationDefaults = getPutOrgPreferencesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchOrgPreferencesMutationKey() {
  return ['org', '/org/preferences', 'PATCH'] as const
}

export function getPatchOrgPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.org.preferences.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgPreferencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.org.preferences.$patch>) {
      return parseResponse(client.org.preferences.$patch(args, options))
    },
  })
}

export function injectPatchOrgPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.org.preferences.$patch>,
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
    const mutationDefaults = getPatchOrgPreferencesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrgQuotasQueryKey() {
  return ['org', '/org/quotas'] as const
}

export function getOrgQuotasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.quotas.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.quotas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgQuotasQueryKey>
  >({
    queryKey: getOrgQuotasQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.org.quotas.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgQuotas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.quotas.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.quotas.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrgQuotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgQuotasQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getOrgUsersQueryKey(args: InferRequestType<typeof client.org.users.$get>) {
  return ['org', '/org/users', args] as const
}

export function getOrgUsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.org.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgUsersQueryKey>
  >({
    queryKey: getOrgUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.org.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrgUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostOrgUsersMutationKey() {
  return ['org', '/org/users', 'POST'] as const
}

export function getPostOrgUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.org.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.org.users.$post>) {
      return parseResponse(client.org.users.$post(args, options))
    },
  })
}

export function injectPostOrgUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.org.users.$post>,
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
    const mutationDefaults = getPostOrgUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrgUsersLookupQueryKey(
  args: InferRequestType<typeof client.org.users.lookup.$get>,
) {
  return ['org', '/org/users/lookup', args] as const
}

export function getOrgUsersLookupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.lookup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.org.users.lookup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.lookup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrgUsersLookupQueryKey>
  >({
    queryKey: getOrgUsersLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.org.users.lookup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgUsersLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.org.users.lookup.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.lookup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrgUsersLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgUsersLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteOrgUsersUserIdMutationKey() {
  return ['org', '/org/users/:user_id', 'DELETE'] as const
}

export function getDeleteOrgUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.users)[':user_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.org.users)[':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org.users)[':user_id']['$delete']>) {
      return parseResponse(client.org.users[':user_id'].$delete(args, options))
    },
  })
}

export function injectDeleteOrgUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org.users)[':user_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org.users)[':user_id']['$delete']>,
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
    const mutationDefaults = getDeleteOrgUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchOrgUsersUserIdMutationKey() {
  return ['org', '/org/users/:user_id', 'PATCH'] as const
}

export function getPatchOrgUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.org.users)[':user_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.org.users)[':user_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.org.users)[':user_id']['$patch']>) {
      return parseResponse(client.org.users[':user_id'].$patch(args, options))
    },
  })
}

export function injectPatchOrgUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.org.users)[':user_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.org.users)[':user_id']['$patch']>,
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
    const mutationDefaults = getPatchOrgUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrgsQueryKey(args: InferRequestType<typeof client.orgs.$get>) {
  return ['orgs', '/orgs', args] as const
}

export function getOrgsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.orgs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgsQueryKey>
  >({
    queryKey: getOrgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.orgs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrgsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostOrgsMutationKey() {
  return ['orgs', '/orgs', 'POST'] as const
}

export function getPostOrgsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$post>>>>>,
    TError,
    InferRequestType<typeof client.orgs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.orgs.$post>) {
      return parseResponse(client.orgs.$post(args, options))
    },
  })
}

export function injectPostOrgs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$post>>>>>,
        TError,
        InferRequestType<typeof client.orgs.$post>,
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
    const mutationDefaults = getPostOrgsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrgsNameOrgNameQueryKey(
  args: InferRequestType<(typeof client.orgs.name)[':org_name']['$get']>,
) {
  return ['orgs', '/orgs/name/:org_name', args] as const
}

export function getOrgsNameOrgNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs.name)[':org_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs.name)[':org_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs.name)[':org_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsNameOrgNameQueryKey>
  >({
    queryKey: getOrgsNameOrgNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs.name[':org_name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrgsNameOrgName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs.name)[':org_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orgs.name)[':org_name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs.name)[':org_name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsNameOrgNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsNameOrgNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOrgsOrgIdQueryKey(
  args: InferRequestType<(typeof client.orgs)[':org_id']['$get']>,
) {
  return ['orgs', '/orgs/:org_id', args] as const
}

export function getOrgsOrgIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.orgs)[':org_id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIdQueryKey>
  >({
    queryKey: getOrgsOrgIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':org_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgsOrgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orgs)[':org_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutOrgsOrgIdMutationKey() {
  return ['orgs', '/orgs/:org_id', 'PUT'] as const
}

export function getPutOrgsOrgIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':org_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgsOrgIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orgs)[':org_id']['$put']>) {
      return parseResponse(client.orgs[':org_id'].$put(args, options))
    },
  })
}

export function injectPutOrgsOrgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':org_id']['$put']>,
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
    const mutationDefaults = getPutOrgsOrgIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteOrgsOrgIdMutationKey() {
  return ['orgs', '/orgs/:org_id', 'DELETE'] as const
}

export function getDeleteOrgsOrgIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':org_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgsOrgIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orgs)[':org_id']['$delete']>) {
      return parseResponse(client.orgs[':org_id'].$delete(args, options))
    },
  })
}

export function injectDeleteOrgsOrgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':org_id']['$delete']>,
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
    const mutationDefaults = getDeleteOrgsOrgIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutOrgsOrgIdAddressMutationKey() {
  return ['orgs', '/orgs/:org_id/address', 'PUT'] as const
}

export function getPutOrgsOrgIdAddressMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':org_id']['address']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':org_id']['address']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgsOrgIdAddressMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orgs)[':org_id']['address']['$put']>) {
      return parseResponse(client.orgs[':org_id'].address.$put(args, options))
    },
  })
}

export function injectPutOrgsOrgIdAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':org_id']['address']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':org_id']['address']['$put']>,
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
    const mutationDefaults = getPutOrgsOrgIdAddressMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrgsOrgIdQuotasQueryKey(
  args: InferRequestType<(typeof client.orgs)[':org_id']['quotas']['$get']>,
) {
  return ['orgs', '/orgs/:org_id/quotas', args] as const
}

export function getOrgsOrgIdQuotasQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':org_id']['quotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIdQuotasQueryKey>
  >({
    queryKey: getOrgsOrgIdQuotasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':org_id'].quotas.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrgsOrgIdQuotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orgs)[':org_id']['quotas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgIdQuotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIdQuotasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutOrgsOrgIdQuotasQuotaTargetMutationKey() {
  return ['orgs', '/orgs/:org_id/quotas/:quota_target', 'PUT'] as const
}

export function getPutOrgsOrgIdQuotasQuotaTargetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas'][':quota_target']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':org_id']['quotas'][':quota_target']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrgsOrgIdQuotasQuotaTargetMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orgs)[':org_id']['quotas'][':quota_target']['$put']>,
    ) {
      return parseResponse(client.orgs[':org_id'].quotas[':quota_target'].$put(args, options))
    },
  })
}

export function injectPutOrgsOrgIdQuotasQuotaTarget<
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
                ReturnType<(typeof client.orgs)[':org_id']['quotas'][':quota_target']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':org_id']['quotas'][':quota_target']['$put']>,
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
    const mutationDefaults = getPutOrgsOrgIdQuotasQuotaTargetMutationOptions<
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

export function getOrgsOrgIdUsersQueryKey(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['$get']>,
) {
  return ['orgs', '/orgs/:org_id/users', args] as const
}

export function getOrgsOrgIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIdUsersQueryKey>
  >({
    queryKey: getOrgsOrgIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':org_id'].users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOrgsOrgIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orgs)[':org_id']['users']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOrgsOrgIdUsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostOrgsOrgIdUsersMutationKey() {
  return ['orgs', '/orgs/:org_id/users', 'POST'] as const
}

export function getPostOrgsOrgIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':org_id']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrgsOrgIdUsersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.orgs)[':org_id']['users']['$post']>) {
      return parseResponse(client.orgs[':org_id'].users.$post(args, options))
    },
  })
}

export function injectPostOrgsOrgIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':org_id']['users']['$post']>,
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
    const mutationDefaults = getPostOrgsOrgIdUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getOrgsOrgIdUsersSearchQueryKey(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['search']['$get']>,
) {
  return ['orgs', '/orgs/:org_id/users/search', args] as const
}

export function getOrgsOrgIdUsersSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.orgs)[':org_id']['users']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIdUsersSearchQueryKey>
  >({
    queryKey: getOrgsOrgIdUsersSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.orgs[':org_id'].users.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectOrgsOrgIdUsersSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.orgs)[':org_id']['users']['search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrgsOrgIdUsersSearchQueryKey>
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
      ...getOrgsOrgIdUsersSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteOrgsOrgIdUsersUserIdMutationKey() {
  return ['orgs', '/orgs/:org_id/users/:user_id', 'DELETE'] as const
}

export function getDeleteOrgsOrgIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':org_id']['users'][':user_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':org_id']['users'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrgsOrgIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orgs)[':org_id']['users'][':user_id']['$delete']>,
    ) {
      return parseResponse(client.orgs[':org_id'].users[':user_id'].$delete(args, options))
    },
  })
}

export function injectDeleteOrgsOrgIdUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':org_id']['users'][':user_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':org_id']['users'][':user_id']['$delete']>,
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
    const mutationDefaults = getDeleteOrgsOrgIdUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchOrgsOrgIdUsersUserIdMutationKey() {
  return ['orgs', '/orgs/:org_id/users/:user_id', 'PATCH'] as const
}

export function getPatchOrgsOrgIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orgs)[':org_id']['users'][':user_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.orgs)[':org_id']['users'][':user_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchOrgsOrgIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.orgs)[':org_id']['users'][':user_id']['$patch']>,
    ) {
      return parseResponse(client.orgs[':org_id'].users[':user_id'].$patch(args, options))
    },
  })
}

export function injectPatchOrgsOrgIdUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.orgs)[':org_id']['users'][':user_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.orgs)[':org_id']['users'][':user_id']['$patch']>,
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
    const mutationDefaults = getPatchOrgsOrgIdUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPlaylistsQueryKey(args: InferRequestType<typeof client.playlists.$get>) {
  return ['playlists', '/playlists', args] as const
}

export function getPlaylistsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.playlists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaylistsQueryKey>
  >({
    queryKey: getPlaylistsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.playlists.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaylistsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPlaylistsMutationKey() {
  return ['playlists', '/playlists', 'POST'] as const
}

export function getPostPlaylistsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$post>>>>>,
    TError,
    InferRequestType<typeof client.playlists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPlaylistsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.playlists.$post>) {
      return parseResponse(client.playlists.$post(args, options))
    },
  })
}

export function injectPostPlaylists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.playlists.$post>,
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
    const mutationDefaults = getPostPlaylistsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPlaylistsUidQueryKey(
  args: InferRequestType<(typeof client.playlists)[':uid']['$get']>,
) {
  return ['playlists', '/playlists/:uid', args] as const
}

export function getPlaylistsUidQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsUidQueryKey>
  >({
    queryKey: getPlaylistsUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists[':uid'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPlaylistsUid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.playlists)[':uid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsUidQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaylistsUidQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutPlaylistsUidMutationKey() {
  return ['playlists', '/playlists/:uid', 'PUT'] as const
}

export function getPutPlaylistsUidMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':uid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPlaylistsUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.playlists)[':uid']['$put']>) {
      return parseResponse(client.playlists[':uid'].$put(args, options))
    },
  })
}

export function injectPutPlaylistsUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.playlists)[':uid']['$put']>,
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
    const mutationDefaults = getPutPlaylistsUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeletePlaylistsUidMutationKey() {
  return ['playlists', '/playlists/:uid', 'DELETE'] as const
}

export function getDeletePlaylistsUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.playlists)[':uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePlaylistsUidMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.playlists)[':uid']['$delete']>) {
      return parseResponse(client.playlists[':uid'].$delete(args, options))
    },
  })
}

export function injectDeletePlaylistsUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.playlists)[':uid']['$delete']>,
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
    const mutationDefaults = getDeletePlaylistsUidMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPlaylistsUidItemsQueryKey(
  args: InferRequestType<(typeof client.playlists)[':uid']['items']['$get']>,
) {
  return ['playlists', '/playlists/:uid/items', args] as const
}

export function getPlaylistsUidItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.playlists)[':uid']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.playlists)[':uid']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsUidItemsQueryKey>
  >({
    queryKey: getPlaylistsUidItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.playlists[':uid'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPlaylistsUidItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.playlists)[':uid']['items']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.playlists)[':uid']['items']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPlaylistsUidItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPlaylistsUidItemsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPublicDashboardsAccessTokenQueryKey(
  args: InferRequestType<(typeof client.public.dashboards)[':accessToken']['$get']>,
) {
  return ['public', '/public/dashboards/:accessToken', args] as const
}

export function getPublicDashboardsAccessTokenQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.dashboards)[':accessToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.dashboards)[':accessToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.public.dashboards)[':accessToken']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicDashboardsAccessTokenQueryKey>
  >({
    queryKey: getPublicDashboardsAccessTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.dashboards[':accessToken'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPublicDashboardsAccessToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.dashboards)[':accessToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.public.dashboards)[':accessToken']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.public.dashboards)[':accessToken']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicDashboardsAccessTokenQueryKey>
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
      ...getPublicDashboardsAccessTokenQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPublicDashboardsAccessTokenAnnotationsQueryKey(
  args: InferRequestType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>,
) {
  return ['public', '/public/dashboards/:accessToken/annotations', args] as const
}

export function getPublicDashboardsAccessTokenAnnotationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicDashboardsAccessTokenAnnotationsQueryKey>
  >({
    queryKey: getPublicDashboardsAccessTokenAnnotationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.public.dashboards[':accessToken'].annotations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPublicDashboardsAccessTokenAnnotations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.public.dashboards)[':accessToken']['annotations']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPublicDashboardsAccessTokenAnnotationsQueryKey>
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
      ...getPublicDashboardsAccessTokenAnnotationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostPublicDashboardsAccessTokenPanelsPanelIdQueryMutationKey() {
  return ['public', '/public/dashboards/:accessToken/panels/:panelId/query', 'POST'] as const
}

export function getPostPublicDashboardsAccessTokenPanelsPanelIdQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.public.dashboards)[':accessToken']['panels'][':panelId']['query']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPublicDashboardsAccessTokenPanelsPanelIdQueryMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.public.dashboards)[':accessToken']['panels'][':panelId']['query']['$post']
      >,
    ) {
      return parseResponse(
        client.public.dashboards[':accessToken'].panels[':panelId'].query.$post(args, options),
      )
    },
  })
}

export function injectPostPublicDashboardsAccessTokenPanelsPanelIdQuery<
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
                  (typeof client.public.dashboards)[':accessToken']['panels'][':panelId']['query']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.public.dashboards)[':accessToken']['panels'][':panelId']['query']['$post']
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
    const mutationDefaults = getPostPublicDashboardsAccessTokenPanelsPanelIdQueryMutationOptions<
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

export function getQueryHistoryQueryKey(
  args: InferRequestType<(typeof client)['query-history']['$get']>,
) {
  return ['query-history', '/query-history', args] as const
}

export function getQueryHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['query-history']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryHistoryQueryKey>
  >({
    queryKey: getQueryHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['query-history'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectQueryHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['query-history']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQueryHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQueryHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostQueryHistoryMutationKey() {
  return ['query-history', '/query-history', 'POST'] as const
}

export function getPostQueryHistoryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['query-history']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryHistoryMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['query-history']['$post']>) {
      return parseResponse(client['query-history'].$post(args, options))
    },
  })
}

export function injectPostQueryHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['query-history']['$post']>,
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
    const mutationDefaults = getPostQueryHistoryMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostQueryHistoryStarQueryHistoryUidMutationKey() {
  return ['query-history', '/query-history/star/:query_history_uid', 'POST'] as const
}

export function getPostQueryHistoryStarQueryHistoryUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['query-history']['star'][':query_history_uid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostQueryHistoryStarQueryHistoryUidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['query-history']['star'][':query_history_uid']['$post']
      >,
    ) {
      return parseResponse(client['query-history'].star[':query_history_uid'].$post(args, options))
    },
  })
}

export function injectPostQueryHistoryStarQueryHistoryUid<
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
                ReturnType<(typeof client)['query-history']['star'][':query_history_uid']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['query-history']['star'][':query_history_uid']['$post']>,
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
    const mutationDefaults = getPostQueryHistoryStarQueryHistoryUidMutationOptions<
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

export function getDeleteQueryHistoryStarQueryHistoryUidMutationKey() {
  return ['query-history', '/query-history/star/:query_history_uid', 'DELETE'] as const
}

export function getDeleteQueryHistoryStarQueryHistoryUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['query-history']['star'][':query_history_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQueryHistoryStarQueryHistoryUidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['query-history']['star'][':query_history_uid']['$delete']
      >,
    ) {
      return parseResponse(
        client['query-history'].star[':query_history_uid'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteQueryHistoryStarQueryHistoryUid<
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
                  (typeof client)['query-history']['star'][':query_history_uid']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['query-history']['star'][':query_history_uid']['$delete']>,
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
    const mutationDefaults = getDeleteQueryHistoryStarQueryHistoryUidMutationOptions<
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

export function getDeleteQueryHistoryQueryHistoryUidMutationKey() {
  return ['query-history', '/query-history/:query_history_uid', 'DELETE'] as const
}

export function getDeleteQueryHistoryQueryHistoryUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['query-history'][':query_history_uid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['query-history'][':query_history_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteQueryHistoryQueryHistoryUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['query-history'][':query_history_uid']['$delete']>,
    ) {
      return parseResponse(client['query-history'][':query_history_uid'].$delete(args, options))
    },
  })
}

export function injectDeleteQueryHistoryQueryHistoryUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['query-history'][':query_history_uid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['query-history'][':query_history_uid']['$delete']>,
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
    const mutationDefaults = getDeleteQueryHistoryQueryHistoryUidMutationOptions<
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

export function getPatchQueryHistoryQueryHistoryUidMutationKey() {
  return ['query-history', '/query-history/:query_history_uid', 'PATCH'] as const
}

export function getPatchQueryHistoryQueryHistoryUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['query-history'][':query_history_uid']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['query-history'][':query_history_uid']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchQueryHistoryQueryHistoryUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['query-history'][':query_history_uid']['$patch']>,
    ) {
      return parseResponse(client['query-history'][':query_history_uid'].$patch(args, options))
    },
  })
}

export function injectPatchQueryHistoryQueryHistoryUid<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['query-history'][':query_history_uid']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['query-history'][':query_history_uid']['$patch']>,
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
    const mutationDefaults = getPatchQueryHistoryQueryHistoryUidMutationOptions<
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

export function getRecordingRulesQueryKey() {
  return ['recording-rules', '/recording-rules'] as const
}

export function getRecordingRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordingRulesQueryKey>
  >({
    queryKey: getRecordingRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['recording-rules'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRecordingRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordingRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecordingRulesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutRecordingRulesMutationKey() {
  return ['recording-rules', '/recording-rules', 'PUT'] as const
}

export function getPutRecordingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['recording-rules']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutRecordingRulesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['recording-rules']['$put']>) {
      return parseResponse(client['recording-rules'].$put(args, options))
    },
  })
}

export function injectPutRecordingRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['recording-rules']['$put']>,
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
    const mutationDefaults = getPutRecordingRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRecordingRulesMutationKey() {
  return ['recording-rules', '/recording-rules', 'POST'] as const
}

export function getPostRecordingRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['recording-rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRecordingRulesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['recording-rules']['$post']>) {
      return parseResponse(client['recording-rules'].$post(args, options))
    },
  })
}

export function injectPostRecordingRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['recording-rules']['$post']>,
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
    const mutationDefaults = getPostRecordingRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostRecordingRulesTestMutationKey() {
  return ['recording-rules', '/recording-rules/test', 'POST'] as const
}

export function getPostRecordingRulesTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['recording-rules']['test']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['recording-rules']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRecordingRulesTestMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['recording-rules']['test']['$post']>) {
      return parseResponse(client['recording-rules'].test.$post(args, options))
    },
  })
}

export function injectPostRecordingRulesTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['recording-rules']['test']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['recording-rules']['test']['$post']>,
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
    const mutationDefaults = getPostRecordingRulesTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRecordingRulesWriterQueryKey() {
  return ['recording-rules', '/recording-rules/writer'] as const
}

export function getRecordingRulesWriterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordingRulesWriterQueryKey>
  >({
    queryKey: getRecordingRulesWriterQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['recording-rules'].writer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRecordingRulesWriter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRecordingRulesWriterQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRecordingRulesWriterQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostRecordingRulesWriterMutationKey() {
  return ['recording-rules', '/recording-rules/writer', 'POST'] as const
}

export function getPostRecordingRulesWriterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['recording-rules']['writer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRecordingRulesWriterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['recording-rules']['writer']['$post']>,
    ) {
      return parseResponse(client['recording-rules'].writer.$post(args, options))
    },
  })
}

export function injectPostRecordingRulesWriter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['recording-rules']['writer']['$post']>,
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
    const mutationDefaults = getPostRecordingRulesWriterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRecordingRulesWriterMutationKey() {
  return ['recording-rules', '/recording-rules/writer', 'DELETE'] as const
}

export function getDeleteRecordingRulesWriterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$delete']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteRecordingRulesWriterMutationKey(),
    async mutationFn() {
      return parseResponse(client['recording-rules'].writer.$delete(undefined, options))
    },
  })
}

export function injectDeleteRecordingRulesWriter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$delete']>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteRecordingRulesWriterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteRecordingRulesRecordingRuleIDMutationKey() {
  return ['recording-rules', '/recording-rules/:recordingRuleID', 'DELETE'] as const
}

export function getDeleteRecordingRulesRecordingRuleIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['recording-rules'][':recordingRuleID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['recording-rules'][':recordingRuleID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRecordingRulesRecordingRuleIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['recording-rules'][':recordingRuleID']['$delete']>,
    ) {
      return parseResponse(client['recording-rules'][':recordingRuleID'].$delete(args, options))
    },
  })
}

export function injectDeleteRecordingRulesRecordingRuleID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['recording-rules'][':recordingRuleID']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['recording-rules'][':recordingRuleID']['$delete']>,
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
    const mutationDefaults = getDeleteRecordingRulesRecordingRuleIDMutationOptions<
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

export function getReportsQueryKey() {
  return ['reports', '/reports'] as const
}

export function getReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >({
    queryKey: getReportsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostReportsMutationKey() {
  return ['reports', '/reports', 'POST'] as const
}

export function getPostReportsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>>,
    TError,
    InferRequestType<typeof client.reports.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.$post>) {
      return parseResponse(client.reports.$post(args, options))
    },
  })
}

export function injectPostReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>>,
        TError,
        InferRequestType<typeof client.reports.$post>,
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
    const mutationDefaults = getPostReportsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getReportsDashboardsUidQueryKey(
  args: InferRequestType<(typeof client.reports.dashboards)[':uid']['$get']>,
) {
  return ['reports', '/reports/dashboards/:uid', args] as const
}

export function getReportsDashboardsUidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports.dashboards)[':uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.reports.dashboards)[':uid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.reports.dashboards)[':uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsDashboardsUidQueryKey>
  >({
    queryKey: getReportsDashboardsUidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.dashboards[':uid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReportsDashboardsUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports.dashboards)[':uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reports.dashboards)[':uid']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports.dashboards)[':uid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsDashboardsUidQueryKey>
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
      ...getReportsDashboardsUidQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostReportsEmailMutationKey() {
  return ['reports', '/reports/email', 'POST'] as const
}

export function getPostReportsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.email.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reports.email.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.email.$post>) {
      return parseResponse(client.reports.email.$post(args, options))
    },
  })
}

export function injectPostReportsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.email.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.reports.email.$post>,
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
    const mutationDefaults = getPostReportsEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getReportsImagesImageQueryKey() {
  return ['reports', '/reports/images/:image'] as const
}

export function getReportsImagesImageQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports.images)[':image']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports.images)[':image']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsImagesImageQueryKey>
  >({
    queryKey: getReportsImagesImageQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.images[':image'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectReportsImagesImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports.images)[':image']['$get']>>>
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
              Awaited<ReturnType<(typeof client.reports.images)[':image']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsImagesImageQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsImagesImageQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getReportsRenderCsvsQueryKey(
  args: InferRequestType<typeof client.reports.render.csvs.$get>,
) {
  return ['reports', '/reports/render/csvs', args] as const
}

export function getReportsRenderCsvsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.csvs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reports.render.csvs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.csvs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsRenderCsvsQueryKey>
  >({
    queryKey: getReportsRenderCsvsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.render.csvs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportsRenderCsvs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.csvs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reports.render.csvs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.csvs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsRenderCsvsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsRenderCsvsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportsRenderPdfsQueryKey(
  args: InferRequestType<typeof client.reports.render.pdfs.$get>,
) {
  return ['reports', '/reports/render/pdfs', args] as const
}

export function getReportsRenderPdfsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.pdfs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.reports.render.pdfs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.pdfs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsRenderPdfsQueryKey>
  >({
    queryKey: getReportsRenderPdfsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.render.pdfs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportsRenderPdfs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.pdfs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.reports.render.pdfs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.pdfs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsRenderPdfsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsRenderPdfsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getReportsSettingsQueryKey() {
  return ['reports', '/reports/settings'] as const
}

export function getReportsSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsSettingsQueryKey>
  >({
    queryKey: getReportsSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.reports.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportsSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getReportsSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostReportsSettingsMutationKey() {
  return ['reports', '/reports/settings', 'POST'] as const
}

export function getPostReportsSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.reports.settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.reports.settings.$post>) {
      return parseResponse(client.reports.settings.$post(args, options))
    },
  })
}

export function injectPostReportsSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.reports.settings.$post>,
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
    const mutationDefaults = getPostReportsSettingsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostReportsTestEmailMutationKey() {
  return ['reports', '/reports/test-email', 'POST'] as const
}

export function getPostReportsTestEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports)['test-email']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.reports)['test-email']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostReportsTestEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reports)['test-email']['$post']>) {
      return parseResponse(client.reports['test-email'].$post(args, options))
    },
  })
}

export function injectPostReportsTestEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.reports)['test-email']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.reports)['test-email']['$post']>,
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
    const mutationDefaults = getPostReportsTestEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getReportsIdQueryKey(
  args: InferRequestType<(typeof client.reports)[':id']['$get']>,
) {
  return ['reports', '/reports/:id', args] as const
}

export function getReportsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.reports)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsIdQueryKey>
  >({
    queryKey: getReportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.reports[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectReportsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.reports)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReportsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutReportsIdMutationKey() {
  return ['reports', '/reports/:id', 'PUT'] as const
}

export function getPutReportsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.reports)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReportsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reports)[':id']['$put']>) {
      return parseResponse(client.reports[':id'].$put(args, options))
    },
  })
}

export function injectPutReportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.reports)[':id']['$put']>,
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
    const mutationDefaults = getPutReportsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteReportsIdMutationKey() {
  return ['reports', '/reports/:id', 'DELETE'] as const
}

export function getDeleteReportsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.reports)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteReportsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.reports)[':id']['$delete']>) {
      return parseResponse(client.reports[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteReportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.reports)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteReportsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSamlAcsMutationKey() {
  return ['saml', '/saml/acs', 'POST'] as const
}

export function getPostSamlAcsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.acs.$post>>>>>,
    TError,
    InferRequestType<typeof client.saml.acs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSamlAcsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.saml.acs.$post>) {
      return parseResponse(client.saml.acs.$post(args, options))
    },
  })
}

export function injectPostSamlAcs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.acs.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.saml.acs.$post>,
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
    const mutationDefaults = getPostSamlAcsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSamlMetadataQueryKey() {
  return ['saml', '/saml/metadata'] as const
}

export function getSamlMetadataQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSamlMetadataQueryKey>
  >({
    queryKey: getSamlMetadataQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.saml.metadata.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSamlMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSamlMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSamlMetadataQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSamlSloQueryKey() {
  return ['saml', '/saml/slo'] as const
}

export function getSamlSloQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSamlSloQueryKey>
  >({
    queryKey: getSamlSloQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.saml.slo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSamlSlo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSamlSloQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSamlSloQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSamlSloMutationKey() {
  return ['saml', '/saml/slo', 'POST'] as const
}

export function getPostSamlSloMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$post>>>>>,
    TError,
    InferRequestType<typeof client.saml.slo.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSamlSloMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.saml.slo.$post>) {
      return parseResponse(client.saml.slo.$post(args, options))
    },
  })
}

export function injectPostSamlSlo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.saml.slo.$post>,
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
    const mutationDefaults = getPostSamlSloMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSearchQueryKey(args: InferRequestType<typeof client.search.$get>) {
  return ['search', '/search', args] as const
}

export function getSearchQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >({
    queryKey: getSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getSearchSortingQueryKey() {
  return ['search', '/search/sorting'] as const
}

export function getSearchSortingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.sorting.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.sorting.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchSortingQueryKey>
  >({
    queryKey: getSearchSortingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.search.sorting.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSearchSorting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.sorting.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.sorting.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSearchSortingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSearchSortingQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostServiceaccountsMutationKey() {
  return ['serviceaccounts', '/serviceaccounts', 'POST'] as const
}

export function getPostServiceaccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.serviceaccounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostServiceaccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.serviceaccounts.$post>) {
      return parseResponse(client.serviceaccounts.$post(args, options))
    },
  })
}

export function injectPostServiceaccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.serviceaccounts.$post>,
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
    const mutationDefaults = getPostServiceaccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getServiceaccountsSearchQueryKey(
  args: InferRequestType<typeof client.serviceaccounts.search.$get>,
) {
  return ['serviceaccounts', '/serviceaccounts/search', args] as const
}

export function getServiceaccountsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.serviceaccounts.search.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceaccountsSearchQueryKey>
  >({
    queryKey: getServiceaccountsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.serviceaccounts.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServiceaccountsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.serviceaccounts.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.search.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceaccountsSearchQueryKey>
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
      ...getServiceaccountsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getServiceaccountsServiceAccountIdQueryKey(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>,
) {
  return ['serviceaccounts', '/serviceaccounts/:serviceAccountId', args] as const
}

export function getServiceaccountsServiceAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceaccountsServiceAccountIdQueryKey>
  >({
    queryKey: getServiceaccountsServiceAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.serviceaccounts[':serviceAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServiceaccountsServiceAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceaccountsServiceAccountIdQueryKey>
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
      ...getServiceaccountsServiceAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteServiceaccountsServiceAccountIdMutationKey() {
  return ['serviceaccounts', '/serviceaccounts/:serviceAccountId', 'DELETE'] as const
}

export function getDeleteServiceaccountsServiceAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteServiceaccountsServiceAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$delete']>,
    ) {
      return parseResponse(client.serviceaccounts[':serviceAccountId'].$delete(args, options))
    },
  })
}

export function injectDeleteServiceaccountsServiceAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$delete']>,
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
    const mutationDefaults = getDeleteServiceaccountsServiceAccountIdMutationOptions<
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

export function getPatchServiceaccountsServiceAccountIdMutationKey() {
  return ['serviceaccounts', '/serviceaccounts/:serviceAccountId', 'PATCH'] as const
}

export function getPatchServiceaccountsServiceAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchServiceaccountsServiceAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$patch']>,
    ) {
      return parseResponse(client.serviceaccounts[':serviceAccountId'].$patch(args, options))
    },
  })
}

export function injectPatchServiceaccountsServiceAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$patch']>,
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
    const mutationDefaults = getPatchServiceaccountsServiceAccountIdMutationOptions<
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

export function getServiceaccountsServiceAccountIdTokensQueryKey(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>,
) {
  return ['serviceaccounts', '/serviceaccounts/:serviceAccountId/tokens', args] as const
}

export function getServiceaccountsServiceAccountIdTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceaccountsServiceAccountIdTokensQueryKey>
  >({
    queryKey: getServiceaccountsServiceAccountIdTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.serviceaccounts[':serviceAccountId'].tokens.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectServiceaccountsServiceAccountIdTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getServiceaccountsServiceAccountIdTokensQueryKey>
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
      ...getServiceaccountsServiceAccountIdTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostServiceaccountsServiceAccountIdTokensMutationKey() {
  return ['serviceaccounts', '/serviceaccounts/:serviceAccountId/tokens', 'POST'] as const
}

export function getPostServiceaccountsServiceAccountIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostServiceaccountsServiceAccountIdTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$post']
      >,
    ) {
      return parseResponse(client.serviceaccounts[':serviceAccountId'].tokens.$post(args, options))
    },
  })
}

export function injectPostServiceaccountsServiceAccountIdTokens<
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
                ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$post']>,
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
    const mutationDefaults = getPostServiceaccountsServiceAccountIdTokensMutationOptions<
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

export function getDeleteServiceaccountsServiceAccountIdTokensTokenIdMutationKey() {
  return [
    'serviceaccounts',
    '/serviceaccounts/:serviceAccountId/tokens/:tokenId',
    'DELETE',
  ] as const
}

export function getDeleteServiceaccountsServiceAccountIdTokensTokenIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.serviceaccounts)[':serviceAccountId']['tokens'][':tokenId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteServiceaccountsServiceAccountIdTokensTokenIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.serviceaccounts)[':serviceAccountId']['tokens'][':tokenId']['$delete']
      >,
    ) {
      return parseResponse(
        client.serviceaccounts[':serviceAccountId'].tokens[':tokenId'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteServiceaccountsServiceAccountIdTokensTokenId<
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
                  (typeof client.serviceaccounts)[':serviceAccountId']['tokens'][':tokenId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.serviceaccounts)[':serviceAccountId']['tokens'][':tokenId']['$delete']
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
    const mutationDefaults = getDeleteServiceaccountsServiceAccountIdTokensTokenIdMutationOptions<
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

export function getSigningKeysKeysQueryKey() {
  return ['signing-keys', '/signing-keys/keys'] as const
}

export function getSigningKeysKeysQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-keys']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-keys']['keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigningKeysKeysQueryKey>
  >({
    queryKey: getSigningKeysKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client['signing-keys'].keys.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSigningKeysKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-keys']['keys']['$get']>>>
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
              Awaited<ReturnType<(typeof client)['signing-keys']['keys']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSigningKeysKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSigningKeysKeysQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getSnapshotSharedOptionsQueryKey() {
  return ['snapshot', '/snapshot/shared-options'] as const
}

export function getSnapshotSharedOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)['shared-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.snapshot)['shared-options']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotSharedOptionsQueryKey>
  >({
    queryKey: getSnapshotSharedOptionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshot['shared-options'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSnapshotSharedOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)['shared-options']['$get']>>>
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
              Awaited<ReturnType<(typeof client.snapshot)['shared-options']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSnapshotSharedOptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSnapshotSharedOptionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostSnapshotsMutationKey() {
  return ['snapshots', '/snapshots', 'POST'] as const
}

export function getPostSnapshotsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>>,
    TError,
    InferRequestType<typeof client.snapshots.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSnapshotsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.snapshots.$post>) {
      return parseResponse(client.snapshots.$post(args, options))
    },
  })
}

export function injectPostSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.snapshots.$post>,
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
    const mutationDefaults = getPostSnapshotsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSnapshotsDeleteDeleteKeyQueryKey(
  args: InferRequestType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>,
) {
  return ['snapshots-delete', '/snapshots-delete/:deleteKey', args] as const
}

export function getSnapshotsDeleteDeleteKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsDeleteDeleteKeyQueryKey>
  >({
    queryKey: getSnapshotsDeleteDeleteKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['snapshots-delete'][':deleteKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectSnapshotsDeleteDeleteKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSnapshotsDeleteDeleteKeyQueryKey>
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
      ...getSnapshotsDeleteDeleteKeyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getSnapshotsKeyQueryKey(
  args: InferRequestType<(typeof client.snapshots)[':key']['$get']>,
) {
  return ['snapshots', '/snapshots/:key', args] as const
}

export function getSnapshotsKeyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.snapshots)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsKeyQueryKey>
  >({
    queryKey: getSnapshotsKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.snapshots[':key'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSnapshotsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.snapshots)[':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSnapshotsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSnapshotsKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteSnapshotsKeyMutationKey() {
  return ['snapshots', '/snapshots/:key', 'DELETE'] as const
}

export function getDeleteSnapshotsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.snapshots)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSnapshotsKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.snapshots)[':key']['$delete']>) {
      return parseResponse(client.snapshots[':key'].$delete(args, options))
    },
  })
}

export function injectDeleteSnapshotsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.snapshots)[':key']['$delete']>,
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
    const mutationDefaults = getDeleteSnapshotsKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTeamsMutationKey() {
  return ['teams', '/teams', 'POST'] as const
}

export function getPostTeamsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
    TError,
    InferRequestType<typeof client.teams.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.teams.$post>) {
      return parseResponse(client.teams.$post(args, options))
    },
  })
}

export function injectPostTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
        TError,
        InferRequestType<typeof client.teams.$post>,
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
    const mutationDefaults = getPostTeamsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTeamsSearchQueryKey(args: InferRequestType<typeof client.teams.search.$get>) {
  return ['teams', '/teams/search', args] as const
}

export function getTeamsSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.search.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.teams.search.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsSearchQueryKey>
  >({
    queryKey: getTeamsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams.search.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTeamsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.teams.search.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsSearchQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTeamsTeamIdGroupsQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['$get']>,
) {
  return ['teams', '/teams/:teamId/groups', args] as const
}

export function getTeamsTeamIdGroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdGroupsQueryKey>
  >({
    queryKey: getTeamsTeamIdGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].groups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTeamsTeamIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsTeamIdGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostTeamsTeamIdGroupsMutationKey() {
  return ['teams', '/teams/:teamId/groups', 'POST'] as const
}

export function getPostTeamsTeamIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsTeamIdGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teams)[':teamId']['groups']['$post']>) {
      return parseResponse(client.teams[':teamId'].groups.$post(args, options))
    },
  })
}

export function injectPostTeamsTeamIdGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':teamId']['groups']['$post']>,
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
    const mutationDefaults = getPostTeamsTeamIdGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTeamsTeamIdGroupsMutationKey() {
  return ['teams', '/teams/:teamId/groups', 'DELETE'] as const
}

export function getDeleteTeamsTeamIdGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':teamId']['groups']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamsTeamIdGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':teamId']['groups']['$delete']>,
    ) {
      return parseResponse(client.teams[':teamId'].groups.$delete(args, options))
    },
  })
}

export function injectDeleteTeamsTeamIdGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':teamId']['groups']['$delete']>,
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
    const mutationDefaults = getDeleteTeamsTeamIdGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTeamsTeamIdGroupsSearchQueryKey(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['search']['$get']>,
) {
  return ['teams', '/teams/:teamId/groups/search', args] as const
}

export function getTeamsTeamIdGroupsSearchQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':teamId']['groups']['search']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdGroupsSearchQueryKey>
  >({
    queryKey: getTeamsTeamIdGroupsSearchQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':teamId'].groups.search.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTeamsTeamIdGroupsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':teamId']['groups']['search']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['search']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdGroupsSearchQueryKey>
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
      ...getTeamsTeamIdGroupsSearchQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getTeamsTeamIdQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
) {
  return ['teams', '/teams/:team_id', args] as const
}

export function getTeamsTeamIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdQueryKey>
  >({
    queryKey: getTeamsTeamIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsTeamIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutTeamsTeamIdMutationKey() {
  return ['teams', '/teams/:team_id', 'PUT'] as const
}

export function getPutTeamsTeamIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':team_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsTeamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teams)[':team_id']['$put']>) {
      return parseResponse(client.teams[':team_id'].$put(args, options))
    },
  })
}

export function injectPutTeamsTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':team_id']['$put']>,
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
    const mutationDefaults = getPutTeamsTeamIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTeamsTeamIdMutationKey() {
  return ['teams', '/teams/:team_id', 'DELETE'] as const
}

export function getDeleteTeamsTeamIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':team_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamsTeamIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teams)[':team_id']['$delete']>) {
      return parseResponse(client.teams[':team_id'].$delete(args, options))
    },
  })
}

export function injectDeleteTeamsTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':team_id']['$delete']>,
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
    const mutationDefaults = getDeleteTeamsTeamIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTeamsTeamIdMembersQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['members']['$get']>,
) {
  return ['teams', '/teams/:team_id/members', args] as const
}

export function getTeamsTeamIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdMembersQueryKey>
  >({
    queryKey: getTeamsTeamIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTeamsTeamIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_id']['members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamsTeamIdMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutTeamsTeamIdMembersMutationKey() {
  return ['teams', '/teams/:team_id/members', 'PUT'] as const
}

export function getPutTeamsTeamIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':team_id']['members']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsTeamIdMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.teams)[':team_id']['members']['$put']>) {
      return parseResponse(client.teams[':team_id'].members.$put(args, options))
    },
  })
}

export function injectPutTeamsTeamIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':team_id']['members']['$put']>,
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
    const mutationDefaults = getPutTeamsTeamIdMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostTeamsTeamIdMembersMutationKey() {
  return ['teams', '/teams/:team_id/members', 'POST'] as const
}

export function getPostTeamsTeamIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':team_id']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamsTeamIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':team_id']['members']['$post']>,
    ) {
      return parseResponse(client.teams[':team_id'].members.$post(args, options))
    },
  })
}

export function injectPostTeamsTeamIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':team_id']['members']['$post']>,
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
    const mutationDefaults = getPostTeamsTeamIdMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutTeamsTeamIdMembersUserIdMutationKey() {
  return ['teams', '/teams/:team_id/members/:user_id', 'PUT'] as const
}

export function getPutTeamsTeamIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['members'][':user_id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsTeamIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$put']>,
    ) {
      return parseResponse(client.teams[':team_id'].members[':user_id'].$put(args, options))
    },
  })
}

export function injectPutTeamsTeamIdMembersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id']['members'][':user_id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$put']>,
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
    const mutationDefaults = getPutTeamsTeamIdMembersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteTeamsTeamIdMembersUserIdMutationKey() {
  return ['teams', '/teams/:team_id/members/:user_id', 'DELETE'] as const
}

export function getDeleteTeamsTeamIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['members'][':user_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamsTeamIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$delete']>,
    ) {
      return parseResponse(client.teams[':team_id'].members[':user_id'].$delete(args, options))
    },
  })
}

export function injectDeleteTeamsTeamIdMembersUserId<
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
                ReturnType<(typeof client.teams)[':team_id']['members'][':user_id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$delete']>,
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
    const mutationDefaults = getDeleteTeamsTeamIdMembersUserIdMutationOptions<
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

export function getTeamsTeamIdPreferencesQueryKey(
  args: InferRequestType<(typeof client.teams)[':team_id']['preferences']['$get']>,
) {
  return ['teams', '/teams/:team_id/preferences', args] as const
}

export function getTeamsTeamIdPreferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.teams)[':team_id']['preferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdPreferencesQueryKey>
  >({
    queryKey: getTeamsTeamIdPreferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.teams[':team_id'].preferences.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTeamsTeamIdPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.teams)[':team_id']['preferences']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamsTeamIdPreferencesQueryKey>
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
      ...getTeamsTeamIdPreferencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutTeamsTeamIdPreferencesMutationKey() {
  return ['teams', '/teams/:team_id/preferences', 'PUT'] as const
}

export function getPutTeamsTeamIdPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.teams)[':team_id']['preferences']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamsTeamIdPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.teams)[':team_id']['preferences']['$put']>,
    ) {
      return parseResponse(client.teams[':team_id'].preferences.$put(args, options))
    },
  })
}

export function injectPutTeamsTeamIdPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.teams)[':team_id']['preferences']['$put']>,
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
    const mutationDefaults = getPutTeamsTeamIdPreferencesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >({
    queryKey: getUserQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getUserQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutUserMutationKey() {
  return ['user', '/user', 'PUT'] as const
}

export function getPutUserMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
    TError,
    InferRequestType<typeof client.user.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUserMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.$put>) {
      return parseResponse(client.user.$put(args, options))
    },
  })
}

export function injectPutUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
        TError,
        InferRequestType<typeof client.user.$put>,
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
    const mutationDefaults = getPutUserMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserAuthTokensQueryKey() {
  return ['user', '/user/auth-tokens'] as const
}

export function getUserAuthTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user)['auth-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)['auth-tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAuthTokensQueryKey>
  >({
    queryKey: getUserAuthTokensQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user['auth-tokens'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserAuthTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user)['auth-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.user)['auth-tokens']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserAuthTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserAuthTokensQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getUserEmailUpdateQueryKey() {
  return ['user', '/user/email/update'] as const
}

export function getUserEmailUpdateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.update.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.update.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserEmailUpdateQueryKey>
  >({
    queryKey: getUserEmailUpdateQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.email.update.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUserEmailUpdate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.email.update.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUserEmailUpdateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserEmailUpdateQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getUserOrgsQueryKey() {
  return ['user', '/user/orgs'] as const
}

export function getUserOrgsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.orgs.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.orgs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserOrgsQueryKey>
  >({
    queryKey: getUserOrgsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.orgs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserOrgs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.orgs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.orgs.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserOrgsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserOrgsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutUserPasswordMutationKey() {
  return ['user', '/user/password', 'PUT'] as const
}

export function getPutUserPasswordMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.password.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.user.password.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUserPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.password.$put>) {
      return parseResponse(client.user.password.$put(args, options))
    },
  })
}

export function injectPutUserPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.password.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.user.password.$put>,
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
    const mutationDefaults = getPutUserPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserPreferencesQueryKey() {
  return ['user', '/user/preferences'] as const
}

export function getUserPreferencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserPreferencesQueryKey>
  >({
    queryKey: getUserPreferencesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.preferences.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserPreferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserPreferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserPreferencesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutUserPreferencesMutationKey() {
  return ['user', '/user/preferences', 'PUT'] as const
}

export function getPutUserPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.user.preferences.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutUserPreferencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.preferences.$put>) {
      return parseResponse(client.user.preferences.$put(args, options))
    },
  })
}

export function injectPutUserPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.user.preferences.$put>,
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
    const mutationDefaults = getPutUserPreferencesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchUserPreferencesMutationKey() {
  return ['user', '/user/preferences', 'PATCH'] as const
}

export function getPatchUserPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$patch>>>>
    >,
    TError,
    InferRequestType<typeof client.user.preferences.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchUserPreferencesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.user.preferences.$patch>) {
      return parseResponse(client.user.preferences.$patch(args, options))
    },
  })
}

export function injectPatchUserPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$patch>>>
          >
        >,
        TError,
        InferRequestType<typeof client.user.preferences.$patch>,
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
    const mutationDefaults = getPatchUserPreferencesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUserQuotasQueryKey() {
  return ['user', '/user/quotas'] as const
}

export function getUserQuotasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.quotas.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.quotas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQuotasQueryKey>
  >({
    queryKey: getUserQuotasQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.quotas.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserQuotas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.quotas.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.quotas.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserQuotasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserQuotasQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostUserRevokeAuthTokenMutationKey() {
  return ['user', '/user/revoke-auth-token', 'POST'] as const
}

export function getPostUserRevokeAuthTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user)['revoke-auth-token']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user)['revoke-auth-token']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserRevokeAuthTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user)['revoke-auth-token']['$post']>) {
      return parseResponse(client.user['revoke-auth-token'].$post(args, options))
    },
  })
}

export function injectPostUserRevokeAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user)['revoke-auth-token']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user)['revoke-auth-token']['$post']>,
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
    const mutationDefaults = getPostUserRevokeAuthTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostUserStarsDashboardUidDashboardUidMutationKey() {
  return ['user', '/user/stars/dashboard/uid/:dashboard_uid', 'POST'] as const
}

export function getPostUserStarsDashboardUidDashboardUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserStarsDashboardUidDashboardUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$post']>,
    ) {
      return parseResponse(client.user.stars.dashboard.uid[':dashboard_uid'].$post(args, options))
    },
  })
}

export function injectPostUserStarsDashboardUidDashboardUid<
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
                ReturnType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$post']>,
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
    const mutationDefaults = getPostUserStarsDashboardUidDashboardUidMutationOptions<
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

export function getDeleteUserStarsDashboardUidDashboardUidMutationKey() {
  return ['user', '/user/stars/dashboard/uid/:dashboard_uid', 'DELETE'] as const
}

export function getDeleteUserStarsDashboardUidDashboardUidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteUserStarsDashboardUidDashboardUidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$delete']>,
    ) {
      return parseResponse(client.user.stars.dashboard.uid[':dashboard_uid'].$delete(args, options))
    },
  })
}

export function injectDeleteUserStarsDashboardUidDashboardUid<
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
                ReturnType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$delete']>,
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
    const mutationDefaults = getDeleteUserStarsDashboardUidDashboardUidMutationOptions<
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

export function getUserTeamsQueryKey() {
  return ['user', '/user/teams'] as const
}

export function getUserTeamsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.teams.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserTeamsQueryKey>
  >({
    queryKey: getUserTeamsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.user.teams.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUserTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.teams.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUserTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUserTeamsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostUserUsingOrgIdMutationKey() {
  return ['user', '/user/using/:org_id', 'POST'] as const
}

export function getPostUserUsingOrgIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.user.using)[':org_id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.user.using)[':org_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostUserUsingOrgIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.user.using)[':org_id']['$post']>) {
      return parseResponse(client.user.using[':org_id'].$post(args, options))
    },
  })
}

export function injectPostUserUsingOrgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.user.using)[':org_id']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.user.using)[':org_id']['$post']>,
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
    const mutationDefaults = getPostUserUsingOrgIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersLookupQueryKey(args: InferRequestType<typeof client.users.lookup.$get>) {
  return ['users', '/users/lookup', args] as const
}

export function getUsersLookupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.lookup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.users.lookup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.lookup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersLookupQueryKey>
  >({
    queryKey: getUsersLookupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users.lookup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.users.lookup.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.lookup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersLookupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersLookupQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersSearchQueryKey() {
  return ['users', '/users/search'] as const
}

export function getUsersSearchQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersSearchQueryKey>
  >({
    queryKey: getUsersSearchQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.users.search.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getUsersSearchQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersSearchQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
) {
  return ['users', '/users/:user_id', args] as const
}

export function getUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >({
    queryKey: getUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutUsersUserIdMutationKey() {
  return ['users', '/users/:user_id', 'PUT'] as const
}

export function getPutUsersUserIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.users)[':user_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutUsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.users)[':user_id']['$put']>) {
      return parseResponse(client.users[':user_id'].$put(args, options))
    },
  })
}

export function injectPutUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.users)[':user_id']['$put']>,
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
    const mutationDefaults = getPutUsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getUsersUserIdOrgsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['orgs']['$get']>,
) {
  return ['users', '/users/:user_id/orgs', args] as const
}

export function getUsersUserIdOrgsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['orgs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['orgs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['orgs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdOrgsQueryKey>
  >({
    queryKey: getUsersUserIdOrgsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].orgs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdOrgs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['orgs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['orgs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['orgs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdOrgsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdOrgsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getUsersUserIdTeamsQueryKey(
  args: InferRequestType<(typeof client.users)[':user_id']['teams']['$get']>,
) {
  return ['users', '/users/:user_id/teams', args] as const
}

export function getUsersUserIdTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':user_id']['teams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':user_id']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdTeamsQueryKey>
  >({
    queryKey: getUsersUserIdTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':user_id'].teams.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectUsersUserIdTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.users)[':user_id']['teams']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':user_id']['teams']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdTeamsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getUsersUserIdTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1ProvisioningAlertRulesQueryKey() {
  return ['v1', '/v1/provisioning/alert-rules'] as const
}

export function getV1ProvisioningAlertRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningAlertRulesQueryKey>
  >({
    queryKey: getV1ProvisioningAlertRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning['alert-rules'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningAlertRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningAlertRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProvisioningAlertRulesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1ProvisioningAlertRulesMutationKey() {
  return ['v1', '/v1/provisioning/alert-rules', 'POST'] as const
}

export function getPostV1ProvisioningAlertRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.provisioning)['alert-rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProvisioningAlertRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.provisioning)['alert-rules']['$post']>,
    ) {
      return parseResponse(client.v1.provisioning['alert-rules'].$post(args, options))
    },
  })
}

export function injectPostV1ProvisioningAlertRules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.provisioning)['alert-rules']['$post']>,
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
    const mutationDefaults = getPostV1ProvisioningAlertRulesMutationOptions<
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

export function getV1ProvisioningAlertRulesExportQueryKey(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>,
) {
  return ['v1', '/v1/provisioning/alert-rules/export', args] as const
}

export function getV1ProvisioningAlertRulesExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningAlertRulesExportQueryKey>
  >({
    queryKey: getV1ProvisioningAlertRulesExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning['alert-rules'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningAlertRulesExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningAlertRulesExportQueryKey>
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
      ...getV1ProvisioningAlertRulesExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProvisioningAlertRulesUIDQueryKey(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>,
) {
  return ['v1', '/v1/provisioning/alert-rules/:UID', args] as const
}

export function getV1ProvisioningAlertRulesUIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningAlertRulesUIDQueryKey>
  >({
    queryKey: getV1ProvisioningAlertRulesUIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning['alert-rules'][':UID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningAlertRulesUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningAlertRulesUIDQueryKey>
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
      ...getV1ProvisioningAlertRulesUIDQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1ProvisioningAlertRulesUIDMutationKey() {
  return ['v1', '/v1/provisioning/alert-rules/:UID', 'PUT'] as const
}

export function getPutV1ProvisioningAlertRulesUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProvisioningAlertRulesUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$put']>,
    ) {
      return parseResponse(client.v1.provisioning['alert-rules'][':UID'].$put(args, options))
    },
  })
}

export function injectPutV1ProvisioningAlertRulesUID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$put']>,
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
    const mutationDefaults = getPutV1ProvisioningAlertRulesUIDMutationOptions<
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

export function getDeleteV1ProvisioningAlertRulesUIDMutationKey() {
  return ['v1', '/v1/provisioning/alert-rules/:UID', 'DELETE'] as const
}

export function getDeleteV1ProvisioningAlertRulesUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProvisioningAlertRulesUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$delete']>,
    ) {
      return parseResponse(client.v1.provisioning['alert-rules'][':UID'].$delete(args, options))
    },
  })
}

export function injectDeleteV1ProvisioningAlertRulesUID<
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
                  ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$delete']>,
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
    const mutationDefaults = getDeleteV1ProvisioningAlertRulesUIDMutationOptions<
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

export function getV1ProvisioningAlertRulesUIDExportQueryKey(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>,
) {
  return ['v1', '/v1/provisioning/alert-rules/:UID/export', args] as const
}

export function getV1ProvisioningAlertRulesUIDExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningAlertRulesUIDExportQueryKey>
  >({
    queryKey: getV1ProvisioningAlertRulesUIDExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning['alert-rules'][':UID'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningAlertRulesUIDExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningAlertRulesUIDExportQueryKey>
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
      ...getV1ProvisioningAlertRulesUIDExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProvisioningContactPointsQueryKey(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['$get']>,
) {
  return ['v1', '/v1/provisioning/contact-points', args] as const
}

export function getV1ProvisioningContactPointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningContactPointsQueryKey>
  >({
    queryKey: getV1ProvisioningContactPointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning['contact-points'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningContactPoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.provisioning)['contact-points']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningContactPointsQueryKey>
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
      ...getV1ProvisioningContactPointsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1ProvisioningContactPointsMutationKey() {
  return ['v1', '/v1/provisioning/contact-points', 'POST'] as const
}

export function getPostV1ProvisioningContactPointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.provisioning)['contact-points']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProvisioningContactPointsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['$post']>,
    ) {
      return parseResponse(client.v1.provisioning['contact-points'].$post(args, options))
    },
  })
}

export function injectPostV1ProvisioningContactPoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.provisioning)['contact-points']['$post']>,
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
    const mutationDefaults = getPostV1ProvisioningContactPointsMutationOptions<
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

export function getV1ProvisioningContactPointsExportQueryKey(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>,
) {
  return ['v1', '/v1/provisioning/contact-points/export', args] as const
}

export function getV1ProvisioningContactPointsExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningContactPointsExportQueryKey>
  >({
    queryKey: getV1ProvisioningContactPointsExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning['contact-points'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningContactPointsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningContactPointsExportQueryKey>
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
      ...getV1ProvisioningContactPointsExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1ProvisioningContactPointsUIDMutationKey() {
  return ['v1', '/v1/provisioning/contact-points/:UID', 'PUT'] as const
}

export function getPutV1ProvisioningContactPointsUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points'][':UID']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProvisioningContactPointsUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$put']>,
    ) {
      return parseResponse(client.v1.provisioning['contact-points'][':UID'].$put(args, options))
    },
  })
}

export function injectPutV1ProvisioningContactPointsUID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points'][':UID']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$put']>,
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
    const mutationDefaults = getPutV1ProvisioningContactPointsUIDMutationOptions<
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

export function getDeleteV1ProvisioningContactPointsUIDMutationKey() {
  return ['v1', '/v1/provisioning/contact-points/:UID', 'DELETE'] as const
}

export function getDeleteV1ProvisioningContactPointsUIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points'][':UID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProvisioningContactPointsUIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$delete']>,
    ) {
      return parseResponse(client.v1.provisioning['contact-points'][':UID'].$delete(args, options))
    },
  })
}

export function injectDeleteV1ProvisioningContactPointsUID<
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
                ReturnType<(typeof client.v1.provisioning)['contact-points'][':UID']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$delete']>,
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
    const mutationDefaults = getDeleteV1ProvisioningContactPointsUIDMutationOptions<
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

export function getV1ProvisioningFolderFolderUIDRuleGroupsGroupQueryKey(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
  >,
) {
  return ['v1', '/v1/provisioning/folder/:FolderUID/rule-groups/:Group', args] as const
}

export function getV1ProvisioningFolderFolderUIDRuleGroupsGroupQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningFolderFolderUIDRuleGroupsGroupQueryKey>
  >({
    queryKey: getV1ProvisioningFolderFolderUIDRuleGroupsGroupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningFolderFolderUIDRuleGroupsGroup<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningFolderFolderUIDRuleGroupsGroupQueryKey>
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
      ...getV1ProvisioningFolderFolderUIDRuleGroupsGroupQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1ProvisioningFolderFolderUIDRuleGroupsGroupMutationKey() {
  return ['v1', '/v1/provisioning/folder/:FolderUID/rule-groups/:Group', 'PUT'] as const
}

export function getPutV1ProvisioningFolderFolderUIDRuleGroupsGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProvisioningFolderFolderUIDRuleGroupsGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].$put(args, options),
      )
    },
  })
}

export function injectPutV1ProvisioningFolderFolderUIDRuleGroupsGroup<
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
                  (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$put']
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
    const mutationDefaults = getPutV1ProvisioningFolderFolderUIDRuleGroupsGroupMutationOptions<
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

export function getDeleteV1ProvisioningFolderFolderUIDRuleGroupsGroupMutationKey() {
  return ['v1', '/v1/provisioning/folder/:FolderUID/rule-groups/:Group', 'DELETE'] as const
}

export function getDeleteV1ProvisioningFolderFolderUIDRuleGroupsGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProvisioningFolderFolderUIDRuleGroupsGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteV1ProvisioningFolderFolderUIDRuleGroupsGroup<
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
                  ReturnType<
                    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$delete']
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
    const mutationDefaults = getDeleteV1ProvisioningFolderFolderUIDRuleGroupsGroupMutationOptions<
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

export function getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportQueryKey(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
  >,
) {
  return ['v1', '/v1/provisioning/folder/:FolderUID/rule-groups/:Group/export', args] as const
}

export function getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportQueryKey>
  >({
    queryKey: getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningFolderFolderUIDRuleGroupsGroupExport<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportQueryKey>
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
      ...getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProvisioningMuteTimingsQueryKey() {
  return ['v1', '/v1/provisioning/mute-timings'] as const
}

export function getV1ProvisioningMuteTimingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningMuteTimingsQueryKey>
  >({
    queryKey: getV1ProvisioningMuteTimingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning['mute-timings'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningMuteTimings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$get']>>
      >
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
              Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningMuteTimingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProvisioningMuteTimingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1ProvisioningMuteTimingsMutationKey() {
  return ['v1', '/v1/provisioning/mute-timings', 'POST'] as const
}

export function getPostV1ProvisioningMuteTimingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.provisioning)['mute-timings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ProvisioningMuteTimingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.provisioning)['mute-timings']['$post']>,
    ) {
      return parseResponse(client.v1.provisioning['mute-timings'].$post(args, options))
    },
  })
}

export function injectPostV1ProvisioningMuteTimings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.provisioning)['mute-timings']['$post']>,
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
    const mutationDefaults = getPostV1ProvisioningMuteTimingsMutationOptions<
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

export function getV1ProvisioningMuteTimingsExportQueryKey(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>,
) {
  return ['v1', '/v1/provisioning/mute-timings/export', args] as const
}

export function getV1ProvisioningMuteTimingsExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningMuteTimingsExportQueryKey>
  >({
    queryKey: getV1ProvisioningMuteTimingsExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning['mute-timings'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningMuteTimingsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningMuteTimingsExportQueryKey>
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
      ...getV1ProvisioningMuteTimingsExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProvisioningMuteTimingsNameQueryKey(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>,
) {
  return ['v1', '/v1/provisioning/mute-timings/:name', args] as const
}

export function getV1ProvisioningMuteTimingsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningMuteTimingsNameQueryKey>
  >({
    queryKey: getV1ProvisioningMuteTimingsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning['mute-timings'][':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningMuteTimingsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningMuteTimingsNameQueryKey>
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
      ...getV1ProvisioningMuteTimingsNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1ProvisioningMuteTimingsNameMutationKey() {
  return ['v1', '/v1/provisioning/mute-timings/:name', 'PUT'] as const
}

export function getPutV1ProvisioningMuteTimingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProvisioningMuteTimingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$put']>,
    ) {
      return parseResponse(client.v1.provisioning['mute-timings'][':name'].$put(args, options))
    },
  })
}

export function injectPutV1ProvisioningMuteTimingsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$put']>,
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
    const mutationDefaults = getPutV1ProvisioningMuteTimingsNameMutationOptions<
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

export function getDeleteV1ProvisioningMuteTimingsNameMutationKey() {
  return ['v1', '/v1/provisioning/mute-timings/:name', 'DELETE'] as const
}

export function getDeleteV1ProvisioningMuteTimingsNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProvisioningMuteTimingsNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$delete']>,
    ) {
      return parseResponse(client.v1.provisioning['mute-timings'][':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV1ProvisioningMuteTimingsName<
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
                  ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1ProvisioningMuteTimingsNameMutationOptions<
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

export function getV1ProvisioningMuteTimingsNameExportQueryKey(
  args: InferRequestType<
    (typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']
  >,
) {
  return ['v1', '/v1/provisioning/mute-timings/:name/export', args] as const
}

export function getV1ProvisioningMuteTimingsNameExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningMuteTimingsNameExportQueryKey>
  >({
    queryKey: getV1ProvisioningMuteTimingsNameExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning['mute-timings'][':name'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningMuteTimingsNameExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningMuteTimingsNameExportQueryKey>
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
      ...getV1ProvisioningMuteTimingsNameExportQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProvisioningPoliciesQueryKey() {
  return ['v1', '/v1/provisioning/policies'] as const
}

export function getV1ProvisioningPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningPoliciesQueryKey>
  >({
    queryKey: getV1ProvisioningPoliciesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning.policies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningPoliciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProvisioningPoliciesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getPutV1ProvisioningPoliciesMutationKey() {
  return ['v1', '/v1/provisioning/policies', 'PUT'] as const
}

export function getPutV1ProvisioningPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.v1.provisioning.policies.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProvisioningPoliciesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.provisioning.policies.$put>) {
      return parseResponse(client.v1.provisioning.policies.$put(args, options))
    },
  })
}

export function injectPutV1ProvisioningPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.provisioning.policies.$put>,
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
    const mutationDefaults = getPutV1ProvisioningPoliciesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1ProvisioningPoliciesMutationKey() {
  return ['v1', '/v1/provisioning/policies', 'DELETE'] as const
}

export function getDeleteV1ProvisioningPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProvisioningPoliciesMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.provisioning.policies.$delete(undefined, options))
    },
  })
}

export function injectDeleteV1ProvisioningPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v1.provisioning.policies.$delete>>
            >
          >
        >,
        TError,
        void,
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
    const mutationDefaults = getDeleteV1ProvisioningPoliciesMutationOptions<
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

export function getV1ProvisioningPoliciesExportQueryKey() {
  return ['v1', '/v1/provisioning/policies/export'] as const
}

export function getV1ProvisioningPoliciesExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.export.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v1.provisioning.policies.export.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningPoliciesExportQueryKey>
  >({
    queryKey: getV1ProvisioningPoliciesExportQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning.policies.export.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningPoliciesExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.export.$get>>>
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
              Awaited<ReturnType<typeof client.v1.provisioning.policies.export.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningPoliciesExportQueryKey>
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
      ...getV1ProvisioningPoliciesExportQueryOptions<TData, TError>(clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1ProvisioningTemplatesQueryKey() {
  return ['v1', '/v1/provisioning/templates'] as const
}

export function getV1ProvisioningTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningTemplatesQueryKey>
  >({
    queryKey: getV1ProvisioningTemplatesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning.templates.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ProvisioningTemplatesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1ProvisioningTemplatesNameQueryKey(
  args: InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$get']>,
) {
  return ['v1', '/v1/provisioning/templates/:name', args] as const
}

export function getV1ProvisioningTemplatesNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningTemplatesNameQueryKey>
  >({
    queryKey: getV1ProvisioningTemplatesNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.provisioning.templates[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ProvisioningTemplatesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ProvisioningTemplatesNameQueryKey>
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
      ...getV1ProvisioningTemplatesNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutV1ProvisioningTemplatesNameMutationKey() {
  return ['v1', '/v1/provisioning/templates/:name', 'PUT'] as const
}

export function getPutV1ProvisioningTemplatesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1ProvisioningTemplatesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$put']>,
    ) {
      return parseResponse(client.v1.provisioning.templates[':name'].$put(args, options))
    },
  })
}

export function injectPutV1ProvisioningTemplatesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$put']>,
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
    const mutationDefaults = getPutV1ProvisioningTemplatesNameMutationOptions<
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

export function getDeleteV1ProvisioningTemplatesNameMutationKey() {
  return ['v1', '/v1/provisioning/templates/:name', 'DELETE'] as const
}

export function getDeleteV1ProvisioningTemplatesNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ProvisioningTemplatesNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$delete']>,
    ) {
      return parseResponse(client.v1.provisioning.templates[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV1ProvisioningTemplatesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1ProvisioningTemplatesNameMutationOptions<
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

export function getV1SsoSettingsQueryKey() {
  return ['v1', '/v1/sso-settings'] as const
}

export function getV1SsoSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SsoSettingsQueryKey>
  >({
    queryKey: getV1SsoSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['sso-settings'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1SsoSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SsoSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SsoSettingsQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1SsoSettingsKeyQueryKey(
  args: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$get']>,
) {
  return ['v1', '/v1/sso-settings/:key', args] as const
}

export function getV1SsoSettingsKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SsoSettingsKeyQueryKey>
  >({
    queryKey: getV1SsoSettingsKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['sso-settings'][':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1SsoSettingsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['sso-settings'][':key']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SsoSettingsKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SsoSettingsKeyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutV1SsoSettingsKeyMutationKey() {
  return ['v1', '/v1/sso-settings/:key', 'PUT'] as const
}

export function getPutV1SsoSettingsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['sso-settings'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV1SsoSettingsKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$put']>) {
      return parseResponse(client.v1['sso-settings'][':key'].$put(args, options))
    },
  })
}

export function injectPutV1SsoSettingsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$put']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['sso-settings'][':key']['$put']>,
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
    const mutationDefaults = getPutV1SsoSettingsKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteV1SsoSettingsKeyMutationKey() {
  return ['v1', '/v1/sso-settings/:key', 'DELETE'] as const
}

export function getDeleteV1SsoSettingsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['sso-settings'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SsoSettingsKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$delete']>,
    ) {
      return parseResponse(client.v1['sso-settings'][':key'].$delete(args, options))
    },
  })
}

export function injectDeleteV1SsoSettingsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['sso-settings'][':key']['$delete']>,
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
    const mutationDefaults = getDeleteV1SsoSettingsKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1SsoSettingsKeyMutationKey() {
  return ['v1', '/v1/sso-settings/:key', 'PATCH'] as const
}

export function getPatchV1SsoSettingsKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['sso-settings'][':key']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1SsoSettingsKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['sso-settings'][':key']['$patch']>) {
      return parseResponse(client.v1['sso-settings'][':key'].$patch(args, options))
    },
  })
}

export function injectPatchV1SsoSettingsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$patch']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.v1)['sso-settings'][':key']['$patch']>,
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
    const mutationDefaults = getPatchV1SsoSettingsKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
