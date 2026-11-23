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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['access-control']['roles']['$get']>>,
) {
  return ['access-control', '/access-control/roles', toValue(args)] as const
}

export function getAccessControlRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['access-control']['roles']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessControlRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-control'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessControlRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['access-control']['roles']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['access-control']['roles']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['access-control']['roles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['access-control']['roles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccessControlRolesQueryKey>
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
          Awaited<ReturnType<(typeof client)['access-control']['roles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessControlRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-control'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccessControlRoles<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccessControlRolesMutationOptions<TError, TOnMutateResult>(
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

export function getAccessControlRolesRoleUIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$get']>
  >,
) {
  return ['access-control', '/access-control/roles/:roleUID', toValue(args)] as const
}

export function getAccessControlRolesRoleUIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessControlRolesRoleUIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-control'].roles[':roleUID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessControlRolesRoleUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccessControlRolesRoleUIDQueryKey>
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
          Awaited<ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlRolesRoleUIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessControlRolesRoleUIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-control'].roles[':roleUID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccessControlRolesRoleUID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccessControlRolesRoleUIDMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteAccessControlRolesRoleUID<
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
                  ReturnType<(typeof client)['access-control']['roles'][':roleUID']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['$delete']>,
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
  const mutationDefaults = getDeleteAccessControlRolesRoleUIDMutationOptions<
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

export function getAccessControlRolesRoleUIDAssignmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']>
  >,
) {
  return ['access-control', '/access-control/roles/:roleUID/assignments', toValue(args)] as const
}

export function getAccessControlRolesRoleUIDAssignmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessControlRolesRoleUIDAssignmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-control'].roles[':roleUID'].assignments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessControlRolesRoleUIDAssignments<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']>
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
                    (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
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
                    (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccessControlRolesRoleUIDAssignmentsQueryKey>
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
              (typeof client)['access-control']['roles'][':roleUID']['assignments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlRolesRoleUIDAssignmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessControlRolesRoleUIDAssignmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-control'].roles[':roleUID'].assignments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccessControlRolesRoleUIDAssignments<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccessControlRolesRoleUIDAssignmentsMutationOptions<
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

export function getAccessControlStatusQueryKey() {
  return ['access-control', '/access-control/status'] as const
}

export function getAccessControlStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAccessControlStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-control'].status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessControlStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['access-control']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['access-control']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['access-control']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccessControlStatusQueryKey>
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
          Awaited<ReturnType<(typeof client)['access-control']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAccessControlStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['access-control'].status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccessControlTeamsRolesSearch<
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
                  ReturnType<(typeof client)['access-control']['teams']['roles']['search']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-control']['teams']['roles']['search']['$post']>,
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
  const mutationDefaults = getPostAccessControlTeamsRolesSearchMutationOptions<
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

export function getAccessControlTeamsTeamIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>
  >,
) {
  return ['access-control', '/access-control/teams/:teamId/roles', toValue(args)] as const
}

export function getAccessControlTeamsTeamIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessControlTeamsTeamIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-control'].teams[':teamId'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessControlTeamsTeamIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccessControlTeamsTeamIdRolesQueryKey>
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
            ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlTeamsTeamIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessControlTeamsTeamIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-control'].teams[':teamId'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccessControlTeamsTeamIdRoles<
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
                  ReturnType<(typeof client)['access-control']['teams'][':teamId']['roles']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$put']>,
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
  const mutationDefaults = getPutAccessControlTeamsTeamIdRolesMutationOptions<
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

export function usePostAccessControlTeamsTeamIdRoles<
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
                    (typeof client)['access-control']['teams'][':teamId']['roles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-control']['teams'][':teamId']['roles']['$post']>,
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
  const mutationDefaults = getPostAccessControlTeamsTeamIdRolesMutationOptions<
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

export function useDeleteAccessControlTeamsTeamIdRolesRoleUID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccessControlTeamsTeamIdRolesRoleUIDMutationOptions<
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

export function usePostAccessControlUsersRolesSearch<
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
                  ReturnType<(typeof client)['access-control']['users']['roles']['search']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-control']['users']['roles']['search']['$post']>,
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
  const mutationDefaults = getPostAccessControlUsersRolesSearchMutationOptions<
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

export function getAccessControlUsersUserIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>
  >,
) {
  return ['access-control', '/access-control/users/:userId/roles', toValue(args)] as const
}

export function getAccessControlUsersUserIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessControlUsersUserIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-control'].users[':userId'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessControlUsersUserIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccessControlUsersUserIdRolesQueryKey>
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
            ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlUsersUserIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessControlUsersUserIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-control'].users[':userId'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAccessControlUsersUserIdRoles<
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
                  ReturnType<(typeof client)['access-control']['users'][':userId']['roles']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$put']>,
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
  const mutationDefaults = getPutAccessControlUsersUserIdRolesMutationOptions<
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

export function usePostAccessControlUsersUserIdRoles<
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
                    (typeof client)['access-control']['users'][':userId']['roles']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-control']['users'][':userId']['roles']['$post']>,
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
  const mutationDefaults = getPostAccessControlUsersUserIdRolesMutationOptions<
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

export function useDeleteAccessControlUsersUserIdRolesRoleUID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccessControlUsersUserIdRolesRoleUIDMutationOptions<
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

export function getAccessControlResourceDescriptionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control'][':resource']['description']['$get']>
  >,
) {
  return ['access-control', '/access-control/:resource/description', toValue(args)] as const
}

export function getAccessControlResourceDescriptionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control'][':resource']['description']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessControlResourceDescriptionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-control'][':resource'].description.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessControlResourceDescription<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control'][':resource']['description']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control'][':resource']['description']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['access-control'][':resource']['description']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccessControlResourceDescriptionQueryKey>
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
          Awaited<ReturnType<(typeof client)['access-control'][':resource']['description']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlResourceDescriptionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessControlResourceDescriptionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-control'][':resource'].description.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccessControlResourceResourceIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>
  >,
) {
  return ['access-control', '/access-control/:resource/:resourceID', toValue(args)] as const
}

export function getAccessControlResourceResourceIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessControlResourceResourceIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-control'][':resource'][':resourceID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessControlResourceResourceID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccessControlResourceResourceIDQueryKey>
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
          Awaited<ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessControlResourceResourceIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessControlResourceResourceIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-control'][':resource'][':resourceID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAccessControlResourceResourceID<
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
                  ReturnType<(typeof client)['access-control'][':resource'][':resourceID']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-control'][':resource'][':resourceID']['$post']>,
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
  const mutationDefaults = getPostAccessControlResourceResourceIDMutationOptions<
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

export function usePostAccessControlResourceResourceIDBuiltInRolesBuiltInRole<
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
    getPostAccessControlResourceResourceIDBuiltInRolesBuiltInRoleMutationOptions<
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

export function usePostAccessControlResourceResourceIDTeamsTeamID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccessControlResourceResourceIDTeamsTeamIDMutationOptions<
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

export function usePostAccessControlResourceResourceIDUsersUserID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccessControlResourceResourceIDUsersUserIDMutationOptions<
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

export function getAdminLdapSyncStatusQueryKey() {
  return ['admin', '/admin/ldap-sync-status'] as const
}

export function getAdminLdapSyncStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminLdapSyncStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin['ldap-sync-status'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminLdapSyncStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['ldap-sync-status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['ldap-sync-status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin)['ldap-sync-status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminLdapSyncStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['ldap-sync-status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLdapSyncStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminLdapSyncStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin['ldap-sync-status'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdminLdapReload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.reload.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAdminLdapReloadMutationOptions<TError, TOnMutateResult>(
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

export function getAdminLdapStatusQueryKey() {
  return ['admin', '/admin/ldap/status'] as const
}

export function getAdminLdapStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminLdapStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.ldap.status.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminLdapStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.status.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.status.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.status.$get>>>
            >
          >,
          ReturnType<typeof getAdminLdapStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.ldap.status.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLdapStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminLdapStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.ldap.status.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdminLdapSyncUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminLdapSyncUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminLdapUserNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.ldap)[':user_name']['$get']>>,
) {
  return ['admin', '/admin/ldap/:user_name', toValue(args)] as const
}

export function getAdminLdapUserNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.ldap)[':user_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminLdapUserNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.ldap[':user_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminLdapUserName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.admin.ldap)[':user_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.admin.ldap)[':user_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.ldap)[':user_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.ldap)[':user_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminLdapUserNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.ldap)[':user_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminLdapUserNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminLdapUserNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.ldap[':user_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdminProvisioningAccessControlReload<
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
                    (typeof client.admin.provisioning)['access-control']['reload']['$post']
                  >
                >
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAdminProvisioningAccessControlReloadMutationOptions<
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

export function usePostAdminProvisioningDashboardsReload<
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
                Awaited<ReturnType<typeof client.admin.provisioning.dashboards.reload.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAdminProvisioningDashboardsReloadMutationOptions<
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

export function usePostAdminProvisioningDatasourcesReload<
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
                Awaited<ReturnType<typeof client.admin.provisioning.datasources.reload.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAdminProvisioningDatasourcesReloadMutationOptions<
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

export function usePostAdminProvisioningPluginsReload<
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
                Awaited<ReturnType<typeof client.admin.provisioning.plugins.reload.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostAdminProvisioningPluginsReloadMutationOptions<
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

export function getAdminSettingsQueryKey() {
  return ['admin', '/admin/settings'] as const
}

export function getAdminSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.settings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.settings.$get>>>>
          >,
          ReturnType<typeof getAdminSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAdminSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdminStatsQueryKey() {
  return ['admin', '/admin/stats'] as const
}

export function getAdminStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdminStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.stats.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdminStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stats.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stats.$get>>>>
          >,
          ReturnType<typeof getAdminStatsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stats.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdminStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdminStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.stats.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdminUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.admin.users.$post>,
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
  const mutationDefaults = getPostAdminUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAdminUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdminUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getAdminUsersUserIdAuthTokensQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>
  >,
) {
  return ['admin', '/admin/users/:user_id/auth-tokens', toValue(args)] as const
}

export function getAdminUsersUserIdAuthTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersUserIdAuthTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':user_id']['auth-tokens'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersUserIdAuthTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsersUserIdAuthTokensQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['auth-tokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersUserIdAuthTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersUserIdAuthTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':user_id']['auth-tokens'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdminUsersUserIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminUsersUserIdDisableMutationOptions<TError, TOnMutateResult>(
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

export function usePostAdminUsersUserIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminUsersUserIdEnableMutationOptions<TError, TOnMutateResult>(
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

export function usePostAdminUsersUserIdLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdminUsersUserIdLogoutMutationOptions<TError, TOnMutateResult>(
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

export function usePutAdminUsersUserIdPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminUsersUserIdPasswordMutationOptions<TError, TOnMutateResult>(
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

export function usePutAdminUsersUserIdPermissions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminUsersUserIdPermissionsMutationOptions<
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

export function getAdminUsersUserIdQuotasQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':user_id']['quotas']['$get']>
  >,
) {
  return ['admin', '/admin/users/:user_id/quotas', toValue(args)] as const
}

export function getAdminUsersUserIdQuotasQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':user_id']['quotas']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdminUsersUserIdQuotasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.admin.users[':user_id'].quotas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdminUsersUserIdQuotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.admin.users)[':user_id']['quotas']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.admin.users)[':user_id']['quotas']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':user_id']['quotas']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.admin.users)[':user_id']['quotas']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdminUsersUserIdQuotasQueryKey>
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
          Awaited<ReturnType<(typeof client.admin.users)[':user_id']['quotas']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdminUsersUserIdQuotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdminUsersUserIdQuotasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.admin.users[':user_id'].quotas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAdminUsersUserIdQuotasQuotaTarget<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAdminUsersUserIdQuotasQuotaTargetMutationOptions<
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

export function usePostAdminUsersUserIdRevokeAuthToken<
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
                  ReturnType<(typeof client.admin.users)[':user_id']['revoke-auth-token']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.admin.users)[':user_id']['revoke-auth-token']['$post']>,
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
  const mutationDefaults = getPostAdminUsersUserIdRevokeAuthTokenMutationOptions<
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

export function getAnnotationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.annotations.$get>>,
) {
  return ['annotations', '/annotations', toValue(args)] as const
}

export function getAnnotationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.annotations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnnotations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.annotations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$get>>>>
          >,
          ReturnType<typeof getAnnotationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnnotationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAnnotations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.annotations.$post>,
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
  const mutationDefaults = getPostAnnotationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAnnotationsGraphite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.annotations.graphite.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.annotations.graphite.$post>,
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
  const mutationDefaults = getPostAnnotationsGraphiteMutationOptions<TError, TOnMutateResult>(
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

export function usePostAnnotationsMassDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAnnotationsMassDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getAnnotationsTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.annotations.tags.$get>>,
) {
  return ['annotations', '/annotations/tags', toValue(args)] as const
}

export function getAnnotationsTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.annotations.tags.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationsTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotations.tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnnotationsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.annotations.tags.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.annotations.tags.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.annotations.tags.$get>>>
            >
          >,
          ReturnType<typeof getAnnotationsTagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.annotations.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationsTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotations.tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnnotationsAnnotationIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotations)[':annotation_id']['$get']>>,
) {
  return ['annotations', '/annotations/:annotation_id', toValue(args)] as const
}

export function getAnnotationsAnnotationIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotations)[':annotation_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnnotationsAnnotationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.annotations[':annotation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnnotationsAnnotationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.annotations)[':annotation_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnnotationsAnnotationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.annotations)[':annotation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnnotationsAnnotationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnnotationsAnnotationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.annotations[':annotation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutAnnotationsAnnotationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAnnotationsAnnotationIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteAnnotationsAnnotationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAnnotationsAnnotationIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchAnnotationsAnnotationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAnnotationsAnnotationIdMutationOptions<TError, TOnMutateResult>(
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

export function getAnonymousDevicesQueryKey() {
  return ['anonymous', '/anonymous/devices'] as const
}

export function getAnonymousDevicesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnonymousDevicesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anonymous.devices.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnonymousDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.devices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.devices.$get>>>
            >
          >,
          ReturnType<typeof getAnonymousDevicesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.devices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnonymousDevicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnonymousDevicesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.anonymous.devices.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnonymousSearchQueryKey() {
  return ['anonymous', '/anonymous/search'] as const
}

export function getAnonymousSearchQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAnonymousSearchQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.anonymous.search.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnonymousSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.search.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.search.$get>>>
            >
          >,
          ReturnType<typeof getAnonymousSearchQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.anonymous.search.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAnonymousSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAnonymousSearchQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.anonymous.search.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCloudmigrationMigrationQueryKey() {
  return ['cloudmigration', '/cloudmigration/migration'] as const
}

export function getCloudmigrationMigrationQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCloudmigrationMigrationQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cloudmigration.migration.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCloudmigrationMigration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$get>>>
            >
          >,
          ReturnType<typeof getCloudmigrationMigrationQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.migration.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCloudmigrationMigrationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCloudmigrationMigrationQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cloudmigration.migration.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCloudmigrationMigration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.cloudmigration.migration.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.cloudmigration.migration.$post>,
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
  const mutationDefaults = getPostCloudmigrationMigrationMutationOptions<TError, TOnMutateResult>(
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

export function getCloudmigrationMigrationUidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$get']>
  >,
) {
  return ['cloudmigration', '/cloudmigration/migration/:uid', toValue(args)] as const
}

export function getCloudmigrationMigrationUidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCloudmigrationMigrationUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cloudmigration.migration[':uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCloudmigrationMigrationUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCloudmigrationMigrationUidQueryKey>
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
          Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCloudmigrationMigrationUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCloudmigrationMigrationUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cloudmigration.migration[':uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCloudmigrationMigrationUid<
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
                Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cloudmigration.migration)[':uid']['$delete']>,
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
  const mutationDefaults = getDeleteCloudmigrationMigrationUidMutationOptions<
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

export function usePostCloudmigrationMigrationUidSnapshot<
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
                  ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshot']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshot']['$post']>,
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
  const mutationDefaults = getPostCloudmigrationMigrationUidSnapshotMutationOptions<
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

export function getCloudmigrationMigrationUidSnapshotSnapshotUidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
    >
  >,
) {
  return [
    'cloudmigration',
    '/cloudmigration/migration/:uid/snapshot/:snapshotUid',
    toValue(args),
  ] as const
}

export function getCloudmigrationMigrationUidSnapshotSnapshotUidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCloudmigrationMigrationUidSnapshotSnapshotUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cloudmigration.migration[':uid'].snapshot[':snapshotUid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCloudmigrationMigrationUidSnapshotSnapshotUid<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
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
                    (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
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
                    (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCloudmigrationMigrationUidSnapshotSnapshotUidQueryKey>
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
              (typeof client.cloudmigration.migration)[':uid']['snapshot'][':snapshotUid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCloudmigrationMigrationUidSnapshotSnapshotUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCloudmigrationMigrationUidSnapshotSnapshotUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cloudmigration.migration[':uid'].snapshot[':snapshotUid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCloudmigrationMigrationUidSnapshotSnapshotUidCancel<
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
    getPostCloudmigrationMigrationUidSnapshotSnapshotUidCancelMutationOptions<
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

export function usePostCloudmigrationMigrationUidSnapshotSnapshotUidUpload<
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
    getPostCloudmigrationMigrationUidSnapshotSnapshotUidUploadMutationOptions<
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

export function getCloudmigrationMigrationUidSnapshotsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>
  >,
) {
  return ['cloudmigration', '/cloudmigration/migration/:uid/snapshots', toValue(args)] as const
}

export function getCloudmigrationMigrationUidSnapshotsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCloudmigrationMigrationUidSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cloudmigration.migration[':uid'].snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCloudmigrationMigrationUidSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCloudmigrationMigrationUidSnapshotsQueryKey>
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
          Awaited<ReturnType<(typeof client.cloudmigration.migration)[':uid']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCloudmigrationMigrationUidSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCloudmigrationMigrationUidSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cloudmigration.migration[':uid'].snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCloudmigrationResourcesDependenciesQueryKey() {
  return ['cloudmigration', '/cloudmigration/resources/dependencies'] as const
}

export function getCloudmigrationResourcesDependenciesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCloudmigrationResourcesDependenciesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cloudmigration.resources.dependencies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCloudmigrationResourcesDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.cloudmigration.resources.dependencies.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.cloudmigration.resources.dependencies.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.cloudmigration.resources.dependencies.$get>>
              >
            >
          >,
          ReturnType<typeof getCloudmigrationResourcesDependenciesQueryKey>
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
          Awaited<ReturnType<typeof client.cloudmigration.resources.dependencies.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCloudmigrationResourcesDependenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCloudmigrationResourcesDependenciesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cloudmigration.resources.dependencies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCloudmigrationTokenQueryKey() {
  return ['cloudmigration', '/cloudmigration/token'] as const
}

export function getCloudmigrationTokenQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getCloudmigrationTokenQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cloudmigration.token.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCloudmigrationToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$get>>>
            >
          >,
          ReturnType<typeof getCloudmigrationTokenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCloudmigrationTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getCloudmigrationTokenQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.cloudmigration.token.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCloudmigrationToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.cloudmigration.token.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostCloudmigrationTokenMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteCloudmigrationTokenUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCloudmigrationTokenUidMutationOptions<TError, TOnMutateResult>(
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

export function getConvertApiPromRulesQueryKey() {
  return ['convert', '/convert/api/prom/rules'] as const
}

export function getConvertApiPromRulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConvertApiPromRulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.convert.api.prom.rules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConvertApiPromRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$get>>>
            >
          >,
          ReturnType<typeof getConvertApiPromRulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConvertApiPromRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConvertApiPromRulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.convert.api.prom.rules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostConvertApiPromRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.convert.api.prom.rules.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostConvertApiPromRulesMutationOptions<TError, TOnMutateResult>(
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

export function getConvertApiPromRulesNamespaceTitleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>
  >,
) {
  return ['convert', '/convert/api/prom/rules/:NamespaceTitle', toValue(args)] as const
}

export function getConvertApiPromRulesNamespaceTitleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConvertApiPromRulesNamespaceTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.convert.api.prom.rules[':NamespaceTitle'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConvertApiPromRulesNamespaceTitle<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>
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
                  ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getConvertApiPromRulesNamespaceTitleQueryKey>
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
          Awaited<ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConvertApiPromRulesNamespaceTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConvertApiPromRulesNamespaceTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.convert.api.prom.rules[':NamespaceTitle'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostConvertApiPromRulesNamespaceTitle<
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
                  ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$post']>,
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
  const mutationDefaults = getPostConvertApiPromRulesNamespaceTitleMutationOptions<
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

export function useDeleteConvertApiPromRulesNamespaceTitle<
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
                  ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle']['$delete']>,
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
  const mutationDefaults = getDeleteConvertApiPromRulesNamespaceTitleMutationOptions<
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

export function getConvertApiPromRulesNamespaceTitleGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']>
  >,
) {
  return ['convert', '/convert/api/prom/rules/:NamespaceTitle/:Group', toValue(args)] as const
}

export function getConvertApiPromRulesNamespaceTitleGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConvertApiPromRulesNamespaceTitleGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.convert.api.prom.rules[':NamespaceTitle'][':Group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConvertApiPromRulesNamespaceTitleGroup<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']>
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
                    (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
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
                    (typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConvertApiPromRulesNamespaceTitleGroupQueryKey>
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
            ReturnType<(typeof client.convert.api.prom.rules)[':NamespaceTitle'][':Group']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConvertApiPromRulesNamespaceTitleGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConvertApiPromRulesNamespaceTitleGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.convert.api.prom.rules[':NamespaceTitle'][':Group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteConvertApiPromRulesNamespaceTitleGroup<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConvertApiPromRulesNamespaceTitleGroupMutationOptions<
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

export function getConvertPrometheusConfigV1RulesQueryKey() {
  return ['convert', '/convert/prometheus/config/v1/rules'] as const
}

export function getConvertPrometheusConfigV1RulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getConvertPrometheusConfigV1RulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.convert.prometheus.config.v1.rules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConvertPrometheusConfigV1Rules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$get>>
              >
            >
          >,
          ReturnType<typeof getConvertPrometheusConfigV1RulesQueryKey>
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
          Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConvertPrometheusConfigV1RulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getConvertPrometheusConfigV1RulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.convert.prometheus.config.v1.rules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostConvertPrometheusConfigV1Rules<
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
                Awaited<ReturnType<typeof client.convert.prometheus.config.v1.rules.$post>>
              >
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostConvertPrometheusConfigV1RulesMutationOptions<
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

export function getConvertPrometheusConfigV1RulesNamespaceTitleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']>
  >,
) {
  return ['convert', '/convert/prometheus/config/v1/rules/:NamespaceTitle', toValue(args)] as const
}

export function getConvertPrometheusConfigV1RulesNamespaceTitleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConvertPrometheusConfigV1RulesNamespaceTitleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.convert.prometheus.config.v1.rules[':NamespaceTitle'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConvertPrometheusConfigV1RulesNamespaceTitle<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']>
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
                    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
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
                    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConvertPrometheusConfigV1RulesNamespaceTitleQueryKey>
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
              (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConvertPrometheusConfigV1RulesNamespaceTitleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConvertPrometheusConfigV1RulesNamespaceTitleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.convert.prometheus.config.v1.rules[':NamespaceTitle'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostConvertPrometheusConfigV1RulesNamespaceTitle<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostConvertPrometheusConfigV1RulesNamespaceTitleMutationOptions<
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

export function useDeleteConvertPrometheusConfigV1RulesNamespaceTitle<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteConvertPrometheusConfigV1RulesNamespaceTitleMutationOptions<
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

export function getConvertPrometheusConfigV1RulesNamespaceTitleGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
    >
  >,
) {
  return [
    'convert',
    '/convert/prometheus/config/v1/rules/:NamespaceTitle/:Group',
    toValue(args),
  ] as const
}

export function getConvertPrometheusConfigV1RulesNamespaceTitleGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConvertPrometheusConfigV1RulesNamespaceTitleGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.convert.prometheus.config.v1.rules[':NamespaceTitle'][':Group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConvertPrometheusConfigV1RulesNamespaceTitleGroup<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
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
                    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
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
                    (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConvertPrometheusConfigV1RulesNamespaceTitleGroupQueryKey>
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
              (typeof client.convert.prometheus.config.v1.rules)[':NamespaceTitle'][':Group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConvertPrometheusConfigV1RulesNamespaceTitleGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConvertPrometheusConfigV1RulesNamespaceTitleGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.convert.prometheus.config.v1.rules[':NamespaceTitle'][':Group'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteConvertPrometheusConfigV1RulesNamespaceTitleGroup<
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
    getDeleteConvertPrometheusConfigV1RulesNamespaceTitleGroupMutationOptions<
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

export function getDashboardSnapshotsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard.snapshots.$get>>,
) {
  return ['dashboard', '/dashboard/snapshots', toValue(args)] as const
}

export function getDashboardSnapshotsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard.snapshots.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardSnapshotsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboard.snapshots.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardSnapshots<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.snapshots.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.dashboard.snapshots.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.snapshots.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.snapshots.$get>>>
            >
          >,
          ReturnType<typeof getDashboardSnapshotsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.snapshots.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardSnapshotsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardSnapshotsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboard.snapshots.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDashboardsDb<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.db.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.dashboards.db.$post>,
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
  const mutationDefaults = getPostDashboardsDbMutationOptions<TError, TOnMutateResult>(
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

export function getDashboardsHomeQueryKey() {
  return ['dashboards', '/dashboards/home'] as const
}

export function getDashboardsHomeQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDashboardsHomeQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards.home.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDashboardsHome<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.home.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.home.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.home.$get>>>
            >
          >,
          ReturnType<typeof getDashboardsHomeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.home.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsHomeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDashboardsHomeQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards.home.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDashboardsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.import.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.dashboards.import.$post>,
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
  const mutationDefaults = getPostDashboardsImportMutationOptions<TError, TOnMutateResult>(
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

export function usePostDashboardsInterpolate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.interpolate.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostDashboardsInterpolateMutationOptions<TError, TOnMutateResult>(
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

export function getDashboardsPublicDashboardsQueryKey() {
  return ['dashboards', '/dashboards/public-dashboards'] as const
}

export function getDashboardsPublicDashboardsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDashboardsPublicDashboardsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards['public-dashboards'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsPublicDashboards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards)['public-dashboards']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)['public-dashboards']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards)['public-dashboards']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardsPublicDashboardsQueryKey>
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
          Awaited<ReturnType<(typeof client.dashboards)['public-dashboards']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsPublicDashboardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDashboardsPublicDashboardsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards['public-dashboards'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDashboardsTagsQueryKey() {
  return ['dashboards', '/dashboards/tags'] as const
}

export function getDashboardsTagsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDashboardsTagsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards.tags.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDashboardsTags<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.tags.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.tags.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.tags.$get>>>
            >
          >,
          ReturnType<typeof getDashboardsTagsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboards.tags.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDashboardsTagsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards.tags.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDashboardsUidDashboardUidPublicDashboardsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']>
  >,
) {
  return ['dashboards', '/dashboards/uid/:dashboardUid/public-dashboards', toValue(args)] as const
}

export function getDashboardsUidDashboardUidPublicDashboardsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsUidDashboardUidPublicDashboardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards.uid[':dashboardUid']['public-dashboards'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsUidDashboardUidPublicDashboards<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']>
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
                    (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
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
                    (typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDashboardsUidDashboardUidPublicDashboardsQueryKey>
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
            ReturnType<(typeof client.dashboards.uid)[':dashboardUid']['public-dashboards']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsUidDashboardUidPublicDashboardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsUidDashboardUidPublicDashboardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards.uid[':dashboardUid']['public-dashboards'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDashboardsUidDashboardUidPublicDashboards<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDashboardsUidDashboardUidPublicDashboardsMutationOptions<
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

export function useDeleteDashboardsUidDashboardUidPublicDashboardsUid<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDashboardsUidDashboardUidPublicDashboardsUidMutationOptions<
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

export function usePatchDashboardsUidDashboardUidPublicDashboardsUid<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDashboardsUidDashboardUidPublicDashboardsUidMutationOptions<
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

export function getDashboardsUidUidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboards.uid)[':uid']['$get']>>,
) {
  return ['dashboards', '/dashboards/uid/:uid', toValue(args)] as const
}

export function getDashboardsUidUidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboards.uid)[':uid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsUidUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards.uid[':uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsUidUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.dashboards.uid)[':uid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardsUidUidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsUidUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsUidUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards.uid[':uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDashboardsUidUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDashboardsUidUidMutationOptions<TError, TOnMutateResult>(
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

export function getDashboardsUidUidPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>
  >,
) {
  return ['dashboards', '/dashboards/uid/:uid/permissions', toValue(args)] as const
}

export function getDashboardsUidUidPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsUidUidPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards.uid[':uid'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsUidUidPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardsUidUidPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsUidUidPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsUidUidPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards.uid[':uid'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDashboardsUidUidPermissions<
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
                Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['permissions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.dashboards.uid)[':uid']['permissions']['$post']>,
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
  const mutationDefaults = getPostDashboardsUidUidPermissionsMutationOptions<
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

export function usePostDashboardsUidUidRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDashboardsUidUidRestoreMutationOptions<TError, TOnMutateResult>(
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

export function getDashboardsUidUidVersionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>
  >,
) {
  return ['dashboards', '/dashboards/uid/:uid/versions', toValue(args)] as const
}

export function getDashboardsUidUidVersionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsUidUidVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards.uid[':uid'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsUidUidVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardsUidUidVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.dashboards.uid)[':uid']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsUidUidVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsUidUidVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards.uid[':uid'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDashboardsUidUidVersionsDashboardVersionIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
    >
  >,
) {
  return ['dashboards', '/dashboards/uid/:uid/versions/:DashboardVersionID', toValue(args)] as const
}

export function getDashboardsUidUidVersionsDashboardVersionIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsUidUidVersionsDashboardVersionIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards.uid[':uid'].versions[':DashboardVersionID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsUidUidVersionsDashboardVersionID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
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
                    (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
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
                    (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDashboardsUidUidVersionsDashboardVersionIDQueryKey>
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
              (typeof client.dashboards.uid)[':uid']['versions'][':DashboardVersionID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsUidUidVersionsDashboardVersionIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsUidUidVersionsDashboardVersionIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards.uid[':uid'].versions[':DashboardVersionID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDashboardsVariablesPromote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDashboardsVariablesPromoteMutationOptions<
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

export function getDashboardsVariablesSharedClustersQueryKey() {
  return ['dashboards', '/dashboards/variables/shared-clusters'] as const
}

export function getDashboardsVariablesSharedClustersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDashboardsVariablesSharedClustersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards.variables['shared-clusters'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsVariablesSharedClusters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.dashboards.variables)['shared-clusters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards.variables)['shared-clusters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.dashboards.variables)['shared-clusters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDashboardsVariablesSharedClustersQueryKey>
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
          Awaited<ReturnType<(typeof client.dashboards.variables)['shared-clusters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsVariablesSharedClustersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDashboardsVariablesSharedClustersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards.variables['shared-clusters'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDashboardsVariablesSharedClustersOccurrencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']>
  >,
) {
  return ['dashboards', '/dashboards/variables/shared-clusters/occurrences', toValue(args)] as const
}

export function getDashboardsVariablesSharedClustersOccurrencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDashboardsVariablesSharedClustersOccurrencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.dashboards.variables['shared-clusters'].occurrences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDashboardsVariablesSharedClustersOccurrences<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']>
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
                    (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
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
                    (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDashboardsVariablesSharedClustersOccurrencesQueryKey>
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
              (typeof client.dashboards.variables)['shared-clusters']['occurrences']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardsVariablesSharedClustersOccurrencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDashboardsVariablesSharedClustersOccurrencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.dashboards.variables['shared-clusters'].occurrences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDashboardsVariablesSharedClustersRescan<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDashboardsVariablesSharedClustersRescanMutationOptions<
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

export function getDatasourcesQueryKey() {
  return ['datasources', '/datasources'] as const
}

export function getDatasourcesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getDatasourcesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDatasources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>
          >,
          ReturnType<typeof getDatasourcesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDatasourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getDatasourcesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDatasources<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.datasources.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.datasources.$post>,
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
  const mutationDefaults = getPostDatasourcesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDatasourcesCorrelationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasources.correlations.$get>>,
) {
  return ['datasources', '/datasources/correlations', toValue(args)] as const
}

export function getDatasourcesCorrelationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasources.correlations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasourcesCorrelationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources.correlations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasourcesCorrelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.datasources.correlations.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.datasources.correlations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.datasources.correlations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.datasources.correlations.$get>>>
            >
          >,
          ReturnType<typeof getDatasourcesCorrelationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.datasources.correlations.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesCorrelationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasourcesCorrelationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources.correlations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatasourcesIdNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasources.id)[':name']['$get']>>,
) {
  return ['datasources', '/datasources/id/:name', toValue(args)] as const
}

export function getDatasourcesIdNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasources.id)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasourcesIdNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources.id[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasourcesIdName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.id)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasources.id)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasources.id)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasources.id)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasourcesIdNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.id)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesIdNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasourcesIdNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources.id[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatasourcesNameNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasources.name)[':name']['$get']>>,
) {
  return ['datasources', '/datasources/name/:name', toValue(args)] as const
}

export function getDatasourcesNameNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasources.name)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasourcesNameNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources.name[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasourcesNameName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.name)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasources.name)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasources.name)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasources.name)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasourcesNameNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.name)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesNameNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasourcesNameNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources.name[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteDatasourcesNameName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatasourcesNameNameMutationOptions<TError, TOnMutateResult>(
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

export function getDatasourcesProxyUidUidDatasourceProxyRouteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
    >
  >,
) {
  return [
    'datasources',
    '/datasources/proxy/uid/:uid/:datasource_proxy_route',
    toValue(args),
  ] as const
}

export function getDatasourcesProxyUidUidDatasourceProxyRouteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasourcesProxyUidUidDatasourceProxyRouteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources.proxy.uid[':uid'][':datasource_proxy_route'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasourcesProxyUidUidDatasourceProxyRoute<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
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
                    (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
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
                    (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatasourcesProxyUidUidDatasourceProxyRouteQueryKey>
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
              (typeof client.datasources.proxy.uid)[':uid'][':datasource_proxy_route']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesProxyUidUidDatasourceProxyRouteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasourcesProxyUidUidDatasourceProxyRouteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources.proxy.uid[':uid'][':datasource_proxy_route'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDatasourcesProxyUidUidDatasourceProxyRoute<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatasourcesProxyUidUidDatasourceProxyRouteMutationOptions<
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

export function useDeleteDatasourcesProxyUidUidDatasourceProxyRoute<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatasourcesProxyUidUidDatasourceProxyRouteMutationOptions<
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

export function getDatasourcesUidSourceUIDCorrelationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>
  >,
) {
  return ['datasources', '/datasources/uid/:sourceUID/correlations', toValue(args)] as const
}

export function getDatasourcesUidSourceUIDCorrelationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasourcesUidSourceUIDCorrelationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources.uid[':sourceUID'].correlations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasourcesUidSourceUIDCorrelations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDatasourcesUidSourceUIDCorrelationsQueryKey>
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
          Awaited<ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesUidSourceUIDCorrelationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasourcesUidSourceUIDCorrelationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources.uid[':sourceUID'].correlations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDatasourcesUidSourceUIDCorrelations<
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
                  ReturnType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasources.uid)[':sourceUID']['correlations']['$post']>,
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
  const mutationDefaults = getPostDatasourcesUidSourceUIDCorrelationsMutationOptions<
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

export function getDatasourcesUidSourceUIDCorrelationsCorrelationUIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
    >
  >,
) {
  return [
    'datasources',
    '/datasources/uid/:sourceUID/correlations/:correlationUID',
    toValue(args),
  ] as const
}

export function getDatasourcesUidSourceUIDCorrelationsCorrelationUIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasourcesUidSourceUIDCorrelationsCorrelationUIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources.uid[':sourceUID'].correlations[':correlationUID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasourcesUidSourceUIDCorrelationsCorrelationUID<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
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
                    (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
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
                    (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatasourcesUidSourceUIDCorrelationsCorrelationUIDQueryKey>
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
              (typeof client.datasources.uid)[':sourceUID']['correlations'][':correlationUID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesUidSourceUIDCorrelationsCorrelationUIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasourcesUidSourceUIDCorrelationsCorrelationUIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources.uid[':sourceUID'].correlations[':correlationUID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchDatasourcesUidSourceUIDCorrelationsCorrelationUID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchDatasourcesUidSourceUIDCorrelationsCorrelationUIDMutationOptions<
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

export function getDatasourcesUidUidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasources.uid)[':uid']['$get']>>,
) {
  return ['datasources', '/datasources/uid/:uid', toValue(args)] as const
}

export function getDatasourcesUidUidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasources.uid)[':uid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasourcesUidUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources.uid[':uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasourcesUidUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.datasources.uid)[':uid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasourcesUidUidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesUidUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasourcesUidUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources.uid[':uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutDatasourcesUidUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDatasourcesUidUidMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteDatasourcesUidUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatasourcesUidUidMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteDatasourcesUidUidCorrelationsCorrelationUID<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteDatasourcesUidUidCorrelationsCorrelationUIDMutationOptions<
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

export function getDatasourcesUidUidHealthQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasources.uid)[':uid']['health']['$get']>
  >,
) {
  return ['datasources', '/datasources/uid/:uid/health', toValue(args)] as const
}

export function getDatasourcesUidUidHealthQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasources.uid)[':uid']['health']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasourcesUidUidHealthQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources.uid[':uid'].health.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasourcesUidUidHealth<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['health']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasources.uid)[':uid']['health']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['health']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['health']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasourcesUidUidHealthQueryKey>
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
          Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['health']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesUidUidHealthQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasourcesUidUidHealthQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources.uid[':uid'].health.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatasourcesUidUidLbacTeamsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>
  >,
) {
  return ['datasources', '/datasources/uid/:uid/lbac/teams', toValue(args)] as const
}

export function getDatasourcesUidUidLbacTeamsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasourcesUidUidLbacTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources.uid[':uid'].lbac.teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasourcesUidUidLbacTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>
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
                  ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getDatasourcesUidUidLbacTeamsQueryKey>
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
          Awaited<ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesUidUidLbacTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasourcesUidUidLbacTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources.uid[':uid'].lbac.teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutDatasourcesUidUidLbacTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasources.uid)[':uid']['lbac']['teams']['$put']>,
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
  const mutationDefaults = getPutDatasourcesUidUidLbacTeamsMutationOptions<TError, TOnMutateResult>(
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

export function getDatasourcesUidUidResourcesDatasourceProxyRouteQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
    >
  >,
) {
  return [
    'datasources',
    '/datasources/uid/:uid/resources/:datasource_proxy_route',
    toValue(args),
  ] as const
}

export function getDatasourcesUidUidResourcesDatasourceProxyRouteQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasourcesUidUidResourcesDatasourceProxyRouteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources.uid[':uid'].resources[':datasource_proxy_route'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasourcesUidUidResourcesDatasourceProxyRoute<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
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
                    (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
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
                    (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getDatasourcesUidUidResourcesDatasourceProxyRouteQueryKey>
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
              (typeof client.datasources.uid)[':uid']['resources'][':datasource_proxy_route']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesUidUidResourcesDatasourceProxyRouteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasourcesUidUidResourcesDatasourceProxyRouteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources.uid[':uid'].resources[':datasource_proxy_route'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDatasourcesDataSourceUIDCacheQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>
  >,
) {
  return ['datasources', '/datasources/:dataSourceUID/cache', toValue(args)] as const
}

export function getDatasourcesDataSourceUIDCacheQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDatasourcesDataSourceUIDCacheQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.datasources[':dataSourceUID'].cache.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDatasourcesDataSourceUIDCache<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDatasourcesDataSourceUIDCacheQueryKey>
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
          Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDatasourcesDataSourceUIDCacheQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDatasourcesDataSourceUIDCacheQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.datasources[':dataSourceUID'].cache.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostDatasourcesDataSourceUIDCache<
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
                Awaited<ReturnType<(typeof client.datasources)[':dataSourceUID']['cache']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.datasources)[':dataSourceUID']['cache']['$post']>,
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
  const mutationDefaults = getPostDatasourcesDataSourceUIDCacheMutationOptions<
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

export function usePostDatasourcesDataSourceUIDCacheClean<
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
                    (typeof client.datasources)[':dataSourceUID']['cache']['clean']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.datasources)[':dataSourceUID']['cache']['clean']['$post']
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
  const mutationDefaults = getPostDatasourcesDataSourceUIDCacheCleanMutationOptions<
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

export function usePostDatasourcesDataSourceUIDCacheDisable<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDatasourcesDataSourceUIDCacheDisableMutationOptions<
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

export function usePostDatasourcesDataSourceUIDCacheEnable<
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
                    (typeof client.datasources)[':dataSourceUID']['cache']['enable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.datasources)[':dataSourceUID']['cache']['enable']['$post']
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
  const mutationDefaults = getPostDatasourcesDataSourceUIDCacheEnableMutationOptions<
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

export function usePostDsQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ds.query.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ds.query.$post>,
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
  const mutationDefaults = getPostDsQueryMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFoldersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folders.$get>>,
) {
  return ['folders', '/folders', toValue(args)] as const
}

export function getFoldersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useFolders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.folders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>
          >,
          ReturnType<typeof getFoldersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFoldersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFolders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.folders.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.folders.$post>,
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
  const mutationDefaults = getPostFoldersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getFoldersFolderUidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':folder_uid']['$get']>>,
) {
  return ['folders', '/folders/:folder_uid', toValue(args)] as const
}

export function getFoldersFolderUidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':folder_uid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersFolderUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':folder_uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoldersFolderUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.folders)[':folder_uid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoldersFolderUidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.folders)[':folder_uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersFolderUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':folder_uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutFoldersFolderUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutFoldersFolderUidMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteFoldersFolderUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteFoldersFolderUidMutationOptions<TError, TOnMutateResult>(
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

export function getFoldersFolderUidCountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_uid']['counts']['$get']>
  >,
) {
  return ['folders', '/folders/:folder_uid/counts', toValue(args)] as const
}

export function getFoldersFolderUidCountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_uid']['counts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersFolderUidCountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':folder_uid'].counts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoldersFolderUidCounts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_uid']['counts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_uid']['counts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_uid']['counts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_uid']['counts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoldersFolderUidCountsQueryKey>
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
          Awaited<ReturnType<(typeof client.folders)[':folder_uid']['counts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderUidCountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersFolderUidCountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':folder_uid'].counts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFoldersFolderUidMove<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostFoldersFolderUidMoveMutationOptions<TError, TOnMutateResult>(
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

export function getFoldersFolderUidPermissionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$get']>
  >,
) {
  return ['folders', '/folders/:folder_uid/permissions', toValue(args)] as const
}

export function getFoldersFolderUidPermissionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFoldersFolderUidPermissionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.folders[':folder_uid'].permissions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFoldersFolderUidPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFoldersFolderUidPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFoldersFolderUidPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFoldersFolderUidPermissionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.folders[':folder_uid'].permissions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostFoldersFolderUidPermissions<
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
                Awaited<ReturnType<(typeof client.folders)[':folder_uid']['permissions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.folders)[':folder_uid']['permissions']['$post']>,
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
  const mutationDefaults = getPostFoldersFolderUidPermissionsMutationOptions<
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

export function getLibraryElementsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['library-elements']['$get']>>,
) {
  return ['library-elements', '/library-elements', toValue(args)] as const
}

export function getLibraryElementsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['library-elements']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLibraryElementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['library-elements'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLibraryElements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['library-elements']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$get']>>>
            >
          >,
          ReturnType<typeof getLibraryElementsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['library-elements']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryElementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLibraryElementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['library-elements'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLibraryElements<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['library-elements']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['library-elements']['$post']>,
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
  const mutationDefaults = getPostLibraryElementsMutationOptions<TError, TOnMutateResult>(
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

export function getLibraryElementsNameLibraryElementNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['library-elements']['name'][':library_element_name']['$get']>
  >,
) {
  return [
    'library-elements',
    '/library-elements/name/:library_element_name',
    toValue(args),
  ] as const
}

export function getLibraryElementsNameLibraryElementNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['library-elements']['name'][':library_element_name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLibraryElementsNameLibraryElementNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['library-elements'].name[':library_element_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLibraryElementsNameLibraryElementName<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['library-elements']['name'][':library_element_name']['$get']>
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
                    (typeof client)['library-elements']['name'][':library_element_name']['$get']
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
                    (typeof client)['library-elements']['name'][':library_element_name']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLibraryElementsNameLibraryElementNameQueryKey>
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
            ReturnType<(typeof client)['library-elements']['name'][':library_element_name']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryElementsNameLibraryElementNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLibraryElementsNameLibraryElementNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['library-elements'].name[':library_element_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLibraryElementsLibraryElementUidQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$get']>
  >,
) {
  return ['library-elements', '/library-elements/:library_element_uid', toValue(args)] as const
}

export function getLibraryElementsLibraryElementUidQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLibraryElementsLibraryElementUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['library-elements'][':library_element_uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLibraryElementsLibraryElementUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['library-elements'][':library_element_uid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['library-elements'][':library_element_uid']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getLibraryElementsLibraryElementUidQueryKey>
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
          Awaited<ReturnType<(typeof client)['library-elements'][':library_element_uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryElementsLibraryElementUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLibraryElementsLibraryElementUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['library-elements'][':library_element_uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteLibraryElementsLibraryElementUid<
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
                  ReturnType<(typeof client)['library-elements'][':library_element_uid']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$delete']>,
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
  const mutationDefaults = getDeleteLibraryElementsLibraryElementUidMutationOptions<
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

export function usePatchLibraryElementsLibraryElementUid<
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
                  ReturnType<(typeof client)['library-elements'][':library_element_uid']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['library-elements'][':library_element_uid']['$patch']>,
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
  const mutationDefaults = getPatchLibraryElementsLibraryElementUidMutationOptions<
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

export function getLibraryElementsLibraryElementUidConnectionsIndexQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
    >
  >,
) {
  return [
    'library-elements',
    '/library-elements/:library_element_uid/connections/',
    toValue(args),
  ] as const
}

export function getLibraryElementsLibraryElementUidConnectionsIndexQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLibraryElementsLibraryElementUidConnectionsIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['library-elements'][':library_element_uid'].connections.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLibraryElementsLibraryElementUidConnectionsIndex<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
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
                    (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
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
                    (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getLibraryElementsLibraryElementUidConnectionsIndexQueryKey>
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
              (typeof client)['library-elements'][':library_element_uid']['connections']['index']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLibraryElementsLibraryElementUidConnectionsIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLibraryElementsLibraryElementUidConnectionsIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['library-elements'][':library_element_uid'].connections.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLicensingCheckQueryKey() {
  return ['licensing', '/licensing/check'] as const
}

export function getLicensingCheckQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLicensingCheckQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licensing.check.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLicensingCheck<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.check.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.licensing.check.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.licensing.check.$get>>>
            >
          >,
          ReturnType<typeof getLicensingCheckQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.check.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLicensingCheckQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLicensingCheckQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.licensing.check.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLicensingCustomPermissionsQueryKey() {
  return ['licensing', '/licensing/custom-permissions'] as const
}

export function getLicensingCustomPermissionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLicensingCustomPermissionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licensing['custom-permissions'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLicensingCustomPermissions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.licensing)['custom-permissions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.licensing)['custom-permissions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.licensing)['custom-permissions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLicensingCustomPermissionsQueryKey>
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
          Awaited<ReturnType<(typeof client.licensing)['custom-permissions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicensingCustomPermissionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLicensingCustomPermissionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.licensing['custom-permissions'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLicensingCustomPermissionsCsvQueryKey() {
  return ['licensing', '/licensing/custom-permissions-csv'] as const
}

export function getLicensingCustomPermissionsCsvQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLicensingCustomPermissionsCsvQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licensing['custom-permissions-csv'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLicensingCustomPermissionsCsv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.licensing)['custom-permissions-csv']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.licensing)['custom-permissions-csv']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.licensing)['custom-permissions-csv']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLicensingCustomPermissionsCsvQueryKey>
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
          Awaited<ReturnType<(typeof client.licensing)['custom-permissions-csv']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicensingCustomPermissionsCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLicensingCustomPermissionsCsvQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.licensing['custom-permissions-csv'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLicensingRefreshStatsQueryKey() {
  return ['licensing', '/licensing/refresh-stats'] as const
}

export function getLicensingRefreshStatsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLicensingRefreshStatsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licensing['refresh-stats'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLicensingRefreshStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.licensing)['refresh-stats']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.licensing)['refresh-stats']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.licensing)['refresh-stats']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLicensingRefreshStatsQueryKey>
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
          Awaited<ReturnType<(typeof client.licensing)['refresh-stats']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLicensingRefreshStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLicensingRefreshStatsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.licensing['refresh-stats'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLicensingTokenQueryKey() {
  return ['licensing', '/licensing/token'] as const
}

export function getLicensingTokenQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLicensingTokenQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.licensing.token.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLicensingToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$get>>>
            >
          >,
          ReturnType<typeof getLicensingTokenQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLicensingTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLicensingTokenQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.licensing.token.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostLicensingToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.licensing.token.$post>,
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
  const mutationDefaults = getPostLicensingTokenMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteLicensingToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.licensing.token.$delete>,
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
  const mutationDefaults = getDeleteLicensingTokenMutationOptions<TError, TOnMutateResult>(
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

export function usePostLicensingTokenRenew<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.licensing.token.renew.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.licensing.token.renew.$post>,
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
  const mutationDefaults = getPostLicensingTokenRenewMutationOptions<TError, TOnMutateResult>(
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

export function getLogoutSamlQueryKey() {
  return ['logout', '/logout/saml'] as const
}

export function getLogoutSamlQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getLogoutSamlQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.logout.saml.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useLogoutSaml<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.saml.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.saml.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.saml.$get>>>>
          >,
          ReturnType<typeof getLogoutSamlQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logout.saml.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogoutSamlQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getLogoutSamlQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.logout.saml.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgQueryKey() {
  return ['org', '/org'] as const
}

export function getOrgQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrg<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
          ReturnType<typeof getOrgQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrg<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.$put>>>>>,
          TError,
          InferRequestType<typeof client.org.$put>,
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
  const mutationDefaults = getPutOrgMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutOrgAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.address.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.org.address.$put>,
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
  const mutationDefaults = getPutOrgAddressMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrgInvitesQueryKey() {
  return ['org', '/org/invites'] as const
}

export function getOrgInvitesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgInvitesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.invites.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgInvites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$get>>>>
          >,
          ReturnType<typeof getOrgInvitesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgInvitesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.invites.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrgInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.invites.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.org.invites.$post>,
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
  const mutationDefaults = getPostOrgInvitesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOrgInvitesInvitationCodeRevoke<
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
                  ReturnType<(typeof client.org.invites)[':invitation_code']['revoke']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.org.invites)[':invitation_code']['revoke']['$delete']>,
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
  const mutationDefaults = getDeleteOrgInvitesInvitationCodeRevokeMutationOptions<
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

export function getOrgPreferencesQueryKey() {
  return ['org', '/org/preferences'] as const
}

export function getOrgPreferencesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgPreferencesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.preferences.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgPreferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$get>>>
            >
          >,
          ReturnType<typeof getOrgPreferencesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrgPreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgPreferencesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.preferences.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrgPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.org.preferences.$put>,
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
  const mutationDefaults = getPutOrgPreferencesMutationOptions<TError, TOnMutateResult>(
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

export function usePatchOrgPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.org.preferences.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.org.preferences.$patch>,
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
  const mutationDefaults = getPatchOrgPreferencesMutationOptions<TError, TOnMutateResult>(
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

export function getOrgQuotasQueryKey() {
  return ['org', '/org/quotas'] as const
}

export function getOrgQuotasQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOrgQuotasQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.quotas.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgQuotas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.quotas.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.quotas.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.quotas.$get>>>>
          >,
          ReturnType<typeof getOrgQuotasQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.quotas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgQuotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOrgQuotasQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.org.quotas.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.users.$get>>,
) {
  return ['org', '/org/users', toValue(args)] as const
}

export function getOrgUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgUsers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$get>>>>
          >,
          ReturnType<typeof getOrgUsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrgUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.org.users.$post>,
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
  const mutationDefaults = getPostOrgUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrgUsersLookupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.users.lookup.$get>>,
) {
  return ['org', '/org/users/lookup', toValue(args)] as const
}

export function getOrgUsersLookupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.users.lookup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgUsersLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.org.users.lookup.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgUsersLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.org.users.lookup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.org.users.lookup.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.org.users.lookup.$get>>>
            >
          >,
          ReturnType<typeof getOrgUsersLookupQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.org.users.lookup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrgUsersLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgUsersLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.org.users.lookup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOrgUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrgUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchOrgUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOrgUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrgsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.orgs.$get>>) {
  return ['orgs', '/orgs', toValue(args)] as const
}

export function getOrgsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orgs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrgs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.orgs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
          ReturnType<typeof getOrgsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrgs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orgs.$post>>>>>,
          TError,
          InferRequestType<typeof client.orgs.$post>,
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
  const mutationDefaults = getPostOrgsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOrgsNameOrgNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs.name)[':org_name']['$get']>>,
) {
  return ['orgs', '/orgs/name/:org_name', toValue(args)] as const
}

export function getOrgsNameOrgNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs.name)[':org_name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsNameOrgNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs.name[':org_name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgsNameOrgName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs.name)[':org_name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs.name)[':org_name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs.name)[':org_name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs.name)[':org_name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsNameOrgNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs.name)[':org_name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsNameOrgNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsNameOrgNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs.name[':org_name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrgsOrgIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':org_id']['$get']>>,
) {
  return ['orgs', '/orgs/:org_id', toValue(args)] as const
}

export function getOrgsOrgIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':org_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':org_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgsOrgId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':org_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$get']>>>
            >
          >,
          ReturnType<typeof getOrgsOrgIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':org_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrgsOrgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.orgs)[':org_id']['$put']>,
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
  const mutationDefaults = getPutOrgsOrgIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteOrgsOrgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.orgs)[':org_id']['$delete']>,
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
  const mutationDefaults = getDeleteOrgsOrgIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePutOrgsOrgIdAddress<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrgsOrgIdAddressMutationOptions<TError, TOnMutateResult>(
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

export function getOrgsOrgIdQuotasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':org_id']['quotas']['$get']>>,
) {
  return ['orgs', '/orgs/:org_id/quotas', toValue(args)] as const
}

export function getOrgsOrgIdQuotasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':org_id']['quotas']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgIdQuotasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':org_id'].quotas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgsOrgIdQuotas<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':org_id']['quotas']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsOrgIdQuotasQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['quotas']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIdQuotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgIdQuotasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':org_id'].quotas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutOrgsOrgIdQuotasQuotaTarget<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrgsOrgIdQuotasQuotaTargetMutationOptions<TError, TOnMutateResult>(
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

export function getOrgsOrgIdUsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':org_id']['users']['$get']>>,
) {
  return ['orgs', '/orgs/:org_id/users', toValue(args)] as const
}

export function getOrgsOrgIdUsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':org_id']['users']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgIdUsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':org_id'].users.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgsOrgIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.orgs)[':org_id']['users']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsOrgIdUsersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIdUsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgIdUsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':org_id'].users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOrgsOrgIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrgsOrgIdUsersMutationOptions<TError, TOnMutateResult>(
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

export function getOrgsOrgIdUsersSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':org_id']['users']['search']['$get']>
  >,
) {
  return ['orgs', '/orgs/:org_id/users/search', toValue(args)] as const
}

export function getOrgsOrgIdUsersSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':org_id']['users']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrgsOrgIdUsersSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.orgs[':org_id'].users.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrgsOrgIdUsersSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.orgs)[':org_id']['users']['search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOrgsOrgIdUsersSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.orgs)[':org_id']['users']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrgsOrgIdUsersSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrgsOrgIdUsersSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.orgs[':org_id'].users.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOrgsOrgIdUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrgsOrgIdUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchOrgsOrgIdUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOrgsOrgIdUsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPlaylistsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playlists.$get>>,
) {
  return ['playlists', '/playlists', toValue(args)] as const
}

export function getPlaylistsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playlists.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePlaylists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.playlists.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>
          >,
          ReturnType<typeof getPlaylistsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPlaylistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPlaylists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.playlists.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.playlists.$post>,
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
  const mutationDefaults = getPostPlaylistsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPlaylistsUidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':uid']['$get']>>,
) {
  return ['playlists', '/playlists/:uid', toValue(args)] as const
}

export function getPlaylistsUidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':uid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists[':uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsUid<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':uid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$get']>>>
            >
          >,
          ReturnType<typeof getPlaylistsUidQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists[':uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutPlaylistsUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.playlists)[':uid']['$put']>,
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
  const mutationDefaults = getPutPlaylistsUidMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeletePlaylistsUid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':uid']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.playlists)[':uid']['$delete']>,
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
  const mutationDefaults = getDeletePlaylistsUidMutationOptions<TError, TOnMutateResult>(
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

export function getPlaylistsUidItemsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':uid']['items']['$get']>>,
) {
  return ['playlists', '/playlists/:uid/items', toValue(args)] as const
}

export function getPlaylistsUidItemsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':uid']['items']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPlaylistsUidItemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.playlists[':uid'].items.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePlaylistsUidItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.playlists)[':uid']['items']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.playlists)[':uid']['items']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':uid']['items']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.playlists)[':uid']['items']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPlaylistsUidItemsQueryKey>
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
          Awaited<ReturnType<(typeof client.playlists)[':uid']['items']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPlaylistsUidItemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPlaylistsUidItemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.playlists[':uid'].items.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublicDashboardsAccessTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.public.dashboards)[':accessToken']['$get']>
  >,
) {
  return ['public', '/public/dashboards/:accessToken', toValue(args)] as const
}

export function getPublicDashboardsAccessTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.public.dashboards)[':accessToken']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicDashboardsAccessTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public.dashboards[':accessToken'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublicDashboardsAccessToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.public.dashboards)[':accessToken']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.public.dashboards)[':accessToken']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.public.dashboards)[':accessToken']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.public.dashboards)[':accessToken']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPublicDashboardsAccessTokenQueryKey>
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
          Awaited<ReturnType<(typeof client.public.dashboards)[':accessToken']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicDashboardsAccessTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicDashboardsAccessTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.public.dashboards[':accessToken'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPublicDashboardsAccessTokenAnnotationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>
  >,
) {
  return ['public', '/public/dashboards/:accessToken/annotations', toValue(args)] as const
}

export function getPublicDashboardsAccessTokenAnnotationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPublicDashboardsAccessTokenAnnotationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.public.dashboards[':accessToken'].annotations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePublicDashboardsAccessTokenAnnotations<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>
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
                    (typeof client.public.dashboards)[':accessToken']['annotations']['$get']
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
                    (typeof client.public.dashboards)[':accessToken']['annotations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPublicDashboardsAccessTokenAnnotationsQueryKey>
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
            ReturnType<(typeof client.public.dashboards)[':accessToken']['annotations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPublicDashboardsAccessTokenAnnotationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPublicDashboardsAccessTokenAnnotationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.public.dashboards[':accessToken'].annotations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPublicDashboardsAccessTokenPanelsPanelIdQuery<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPublicDashboardsAccessTokenPanelsPanelIdQueryMutationOptions<
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

export function getQueryHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['query-history']['$get']>>,
) {
  return ['query-history', '/query-history', toValue(args)] as const
}

export function getQueryHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['query-history']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getQueryHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['query-history'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useQueryHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['query-history']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$get']>>>
            >
          >,
          ReturnType<typeof getQueryHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQueryHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getQueryHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['query-history'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostQueryHistory<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['query-history']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['query-history']['$post']>,
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
  const mutationDefaults = getPostQueryHistoryMutationOptions<TError, TOnMutateResult>(
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

export function usePostQueryHistoryStarQueryHistoryUid<
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
                    (typeof client)['query-history']['star'][':query_history_uid']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['query-history']['star'][':query_history_uid']['$post']>,
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
  const mutationDefaults = getPostQueryHistoryStarQueryHistoryUidMutationOptions<
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

export function useDeleteQueryHistoryStarQueryHistoryUid<
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
                    (typeof client)['query-history']['star'][':query_history_uid']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['query-history']['star'][':query_history_uid']['$delete']
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
  const mutationDefaults = getDeleteQueryHistoryStarQueryHistoryUidMutationOptions<
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

export function useDeleteQueryHistoryQueryHistoryUid<
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
                  ReturnType<(typeof client)['query-history'][':query_history_uid']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['query-history'][':query_history_uid']['$delete']>,
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
  const mutationDefaults = getDeleteQueryHistoryQueryHistoryUidMutationOptions<
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

export function usePatchQueryHistoryQueryHistoryUid<
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
                  ReturnType<(typeof client)['query-history'][':query_history_uid']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['query-history'][':query_history_uid']['$patch']>,
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
  const mutationDefaults = getPatchQueryHistoryQueryHistoryUidMutationOptions<
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

export function getRecordingRulesQueryKey() {
  return ['recording-rules', '/recording-rules'] as const
}

export function getRecordingRulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRecordingRulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['recording-rules'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecordingRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$get']>>>
            >
          >,
          ReturnType<typeof getRecordingRulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordingRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRecordingRulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['recording-rules'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutRecordingRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['recording-rules']['$put']>,
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
  const mutationDefaults = getPutRecordingRulesMutationOptions<TError, TOnMutateResult>(
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

export function usePostRecordingRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['recording-rules']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['recording-rules']['$post']>,
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
  const mutationDefaults = getPostRecordingRulesMutationOptions<TError, TOnMutateResult>(
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

export function usePostRecordingRulesTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecordingRulesTestMutationOptions<TError, TOnMutateResult>(
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

export function getRecordingRulesWriterQueryKey() {
  return ['recording-rules', '/recording-rules/writer'] as const
}

export function getRecordingRulesWriterQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getRecordingRulesWriterQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['recording-rules'].writer.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRecordingRulesWriter<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$get']>>
              >
            >
          >,
          ReturnType<typeof getRecordingRulesWriterQueryKey>
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
          Awaited<ReturnType<(typeof client)['recording-rules']['writer']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRecordingRulesWriterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getRecordingRulesWriterQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['recording-rules'].writer.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostRecordingRulesWriter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostRecordingRulesWriterMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRecordingRulesWriter<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteRecordingRulesWriterMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteRecordingRulesRecordingRuleID<
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
                  ReturnType<(typeof client)['recording-rules'][':recordingRuleID']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['recording-rules'][':recordingRuleID']['$delete']>,
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
  const mutationDefaults = getDeleteRecordingRulesRecordingRuleIDMutationOptions<
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

export function getReportsQueryKey() {
  return ['reports', '/reports'] as const
}

export function getReportsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReportsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>
          >,
          ReturnType<typeof getReportsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReportsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reports.$post>,
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
  const mutationDefaults = getPostReportsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReportsDashboardsUidQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports.dashboards)[':uid']['$get']>>,
) {
  return ['reports', '/reports/dashboards/:uid', toValue(args)] as const
}

export function getReportsDashboardsUidQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports.dashboards)[':uid']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsDashboardsUidQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.dashboards[':uid'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsDashboardsUid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports.dashboards)[':uid']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports.dashboards)[':uid']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports.dashboards)[':uid']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports.dashboards)[':uid']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportsDashboardsUidQueryKey>
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
          Awaited<ReturnType<(typeof client.reports.dashboards)[':uid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsDashboardsUidQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsDashboardsUidQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.dashboards[':uid'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostReportsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.email.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.reports.email.$post>,
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
  const mutationDefaults = getPostReportsEmailMutationOptions<TError, TOnMutateResult>(
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

export function getReportsImagesImageQueryKey() {
  return ['reports', '/reports/images/:image'] as const
}

export function getReportsImagesImageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReportsImagesImageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.images[':image'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsImagesImage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.reports.images)[':image']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports.images)[':image']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.reports.images)[':image']['$get']>>
              >
            >
          >,
          ReturnType<typeof getReportsImagesImageQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.reports.images)[':image']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getReportsImagesImageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReportsImagesImageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.images[':image'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsRenderCsvsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.render.csvs.$get>>,
) {
  return ['reports', '/reports/render/csvs', toValue(args)] as const
}

export function getReportsRenderCsvsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.render.csvs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsRenderCsvsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.render.csvs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsRenderCsvs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.csvs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.render.csvs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.csvs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.csvs.$get>>>
            >
          >,
          ReturnType<typeof getReportsRenderCsvsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.csvs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsRenderCsvsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsRenderCsvsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.render.csvs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsRenderPdfsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.render.pdfs.$get>>,
) {
  return ['reports', '/reports/render/pdfs', toValue(args)] as const
}

export function getReportsRenderPdfsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.render.pdfs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsRenderPdfsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.render.pdfs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsRenderPdfs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.pdfs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.reports.render.pdfs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.pdfs.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.pdfs.$get>>>
            >
          >,
          ReturnType<typeof getReportsRenderPdfsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.render.pdfs.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsRenderPdfsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsRenderPdfsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.render.pdfs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getReportsSettingsQueryKey() {
  return ['reports', '/reports/settings'] as const
}

export function getReportsSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getReportsSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useReportsSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$get>>>
            >
          >,
          ReturnType<typeof getReportsSettingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getReportsSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.reports.settings.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostReportsSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.reports.settings.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.reports.settings.$post>,
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
  const mutationDefaults = getPostReportsSettingsMutationOptions<TError, TOnMutateResult>(
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

export function usePostReportsTestEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReportsTestEmailMutationOptions<TError, TOnMutateResult>(
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

export function getReportsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports)[':id']['$get']>>,
) {
  return ['reports', '/reports/:id', toValue(args)] as const
}

export function getReportsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getReportsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.reports[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useReportsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.reports)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getReportsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReportsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getReportsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.reports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutReportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.reports)[':id']['$put']>,
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
  const mutationDefaults = getPutReportsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteReportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.reports)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.reports)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteReportsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostSamlAcs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.acs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.saml.acs.$post>,
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
  const mutationDefaults = getPostSamlAcsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSamlMetadataQueryKey() {
  return ['saml', '/saml/metadata'] as const
}

export function getSamlMetadataQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSamlMetadataQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saml.metadata.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSamlMetadata<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
          >,
          ReturnType<typeof getSamlMetadataQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.metadata.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSamlMetadataQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSamlMetadataQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.saml.metadata.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSamlSloQueryKey() {
  return ['saml', '/saml/slo'] as const
}

export function getSamlSloQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSamlSloQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.saml.slo.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSamlSlo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$get>>>>
          >,
          ReturnType<typeof getSamlSloQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSamlSloQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSamlSloQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.saml.slo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSamlSlo<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.saml.slo.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.saml.slo.$post>,
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
  const mutationDefaults = getPostSamlSloMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
) {
  return ['search', '/search', toValue(args)] as const
}

export function getSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearch<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
          ReturnType<typeof getSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchSortingQueryKey() {
  return ['search', '/search/sorting'] as const
}

export function getSearchSortingQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSearchSortingQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.sorting.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearchSorting<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.sorting.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.sorting.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.sorting.$get>>>>
          >,
          ReturnType<typeof getSearchSortingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.sorting.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchSortingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSearchSortingQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.search.sorting.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostServiceaccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.serviceaccounts.$post>,
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
  const mutationDefaults = getPostServiceaccountsMutationOptions<TError, TOnMutateResult>(
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

export function getServiceaccountsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.serviceaccounts.search.$get>>,
) {
  return ['serviceaccounts', '/serviceaccounts/search', toValue(args)] as const
}

export function getServiceaccountsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.serviceaccounts.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceaccountsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.serviceaccounts.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceaccountsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.serviceaccounts.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.search.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.search.$get>>>
            >
          >,
          ReturnType<typeof getServiceaccountsSearchQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.serviceaccounts.search.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceaccountsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceaccountsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.serviceaccounts.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getServiceaccountsServiceAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>
  >,
) {
  return ['serviceaccounts', '/serviceaccounts/:serviceAccountId', toValue(args)] as const
}

export function getServiceaccountsServiceAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceaccountsServiceAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.serviceaccounts[':serviceAccountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceaccountsServiceAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getServiceaccountsServiceAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceaccountsServiceAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceaccountsServiceAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.serviceaccounts[':serviceAccountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteServiceaccountsServiceAccountId<
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
                Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$delete']>,
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
  const mutationDefaults = getDeleteServiceaccountsServiceAccountIdMutationOptions<
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

export function usePatchServiceaccountsServiceAccountId<
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
                Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['$patch']>,
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
  const mutationDefaults = getPatchServiceaccountsServiceAccountIdMutationOptions<
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

export function getServiceaccountsServiceAccountIdTokensQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>
  >,
) {
  return ['serviceaccounts', '/serviceaccounts/:serviceAccountId/tokens', toValue(args)] as const
}

export function getServiceaccountsServiceAccountIdTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getServiceaccountsServiceAccountIdTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.serviceaccounts[':serviceAccountId'].tokens.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useServiceaccountsServiceAccountIdTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getServiceaccountsServiceAccountIdTokensQueryKey>
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
            ReturnType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getServiceaccountsServiceAccountIdTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getServiceaccountsServiceAccountIdTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.serviceaccounts[':serviceAccountId'].tokens.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostServiceaccountsServiceAccountIdTokens<
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
                    (typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.serviceaccounts)[':serviceAccountId']['tokens']['$post']>,
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
  const mutationDefaults = getPostServiceaccountsServiceAccountIdTokensMutationOptions<
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

export function useDeleteServiceaccountsServiceAccountIdTokensTokenId<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteServiceaccountsServiceAccountIdTokensTokenIdMutationOptions<
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

export function getSigningKeysKeysQueryKey() {
  return ['signing-keys', '/signing-keys/keys'] as const
}

export function getSigningKeysKeysQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSigningKeysKeysQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['signing-keys'].keys.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSigningKeysKeys<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-keys']['keys']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['signing-keys']['keys']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['signing-keys']['keys']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSigningKeysKeysQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['signing-keys']['keys']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSigningKeysKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSigningKeysKeysQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client['signing-keys'].keys.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSnapshotSharedOptionsQueryKey() {
  return ['snapshot', '/snapshot/shared-options'] as const
}

export function getSnapshotSharedOptionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSnapshotSharedOptionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snapshot['shared-options'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnapshotSharedOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.snapshot)['shared-options']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshot)['shared-options']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshot)['shared-options']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSnapshotSharedOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client.snapshot)['shared-options']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotSharedOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSnapshotSharedOptionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.snapshot['shared-options'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.snapshots.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.snapshots.$post>,
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
  const mutationDefaults = getPostSnapshotsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSnapshotsDeleteDeleteKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>
  >,
) {
  return ['snapshots-delete', '/snapshots-delete/:deleteKey', toValue(args)] as const
}

export function getSnapshotsDeleteDeleteKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnapshotsDeleteDeleteKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['snapshots-delete'][':deleteKey'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnapshotsDeleteDeleteKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSnapshotsDeleteDeleteKeyQueryKey>
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
          Awaited<ReturnType<(typeof client)['snapshots-delete'][':deleteKey']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsDeleteDeleteKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnapshotsDeleteDeleteKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['snapshots-delete'][':deleteKey'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSnapshotsKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshots)[':key']['$get']>>,
) {
  return ['snapshots', '/snapshots/:key', toValue(args)] as const
}

export function getSnapshotsKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshots)[':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSnapshotsKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.snapshots[':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSnapshotsKey<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.snapshots)[':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$get']>>>
            >
          >,
          ReturnType<typeof getSnapshotsKeyQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.snapshots)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSnapshotsKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSnapshotsKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.snapshots[':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteSnapshotsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.snapshots)[':key']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.snapshots)[':key']['$delete']>,
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
  const mutationDefaults = getDeleteSnapshotsKeyMutationOptions<TError, TOnMutateResult>(
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

export function usePostTeams<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.$post>>>>>,
          TError,
          InferRequestType<typeof client.teams.$post>,
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
  const mutationDefaults = getPostTeamsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamsSearchQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.search.$get>>,
) {
  return ['teams', '/teams/search', toValue(args)] as const
}

export function getTeamsSearchQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.search.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams.search.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTeamsSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.search.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.teams.search.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.search.$get>>>>
          >,
          ReturnType<typeof getTeamsSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.teams.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTeamsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['groups']['$get']>>,
) {
  return ['teams', '/teams/:teamId/groups', toValue(args)] as const
}

export function getTeamsTeamIdGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':teamId']['groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostTeamsTeamIdGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamsTeamIdGroupsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTeamsTeamIdGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTeamsTeamIdGroupsMutationOptions<TError, TOnMutateResult>(
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

export function getTeamsTeamIdGroupsSearchQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['groups']['search']['$get']>
  >,
) {
  return ['teams', '/teams/:teamId/groups/search', toValue(args)] as const
}

export function getTeamsTeamIdGroupsSearchQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['groups']['search']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdGroupsSearchQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':teamId'].groups.search.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdGroupsSearch<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['search']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':teamId']['groups']['search']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['search']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['search']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdGroupsSearchQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':teamId']['groups']['search']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdGroupsSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdGroupsSearchQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':teamId'].groups.search.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTeamsTeamIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['$get']>>,
) {
  return ['teams', '/teams/:team_id', toValue(args)] as const
}

export function getTeamsTeamIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamsTeamIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTeamsTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.teams)[':team_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.teams)[':team_id']['$put']>,
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
  const mutationDefaults = getPutTeamsTeamIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteTeamsTeamId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teams)[':team_id']['$delete']>,
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
  const mutationDefaults = getDeleteTeamsTeamIdMutationOptions<TError, TOnMutateResult>(
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

export function getTeamsTeamIdMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['members']['$get']>>,
) {
  return ['teams', '/teams/:team_id/members', toValue(args)] as const
}

export function getTeamsTeamIdMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.teams)[':team_id']['members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':team_id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTeamsTeamIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTeamsTeamIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function usePostTeamsTeamIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTeamsTeamIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function usePutTeamsTeamIdMembersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.teams)[':team_id']['members'][':user_id']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.teams)[':team_id']['members'][':user_id']['$put']>,
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
  const mutationDefaults = getPutTeamsTeamIdMembersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteTeamsTeamIdMembersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTeamsTeamIdMembersUserIdMutationOptions<
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

export function getTeamsTeamIdPreferencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id']['preferences']['$get']>
  >,
) {
  return ['teams', '/teams/:team_id/preferences', toValue(args)] as const
}

export function getTeamsTeamIdPreferencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id']['preferences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamsTeamIdPreferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.teams[':team_id'].preferences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamsTeamIdPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.teams)[':team_id']['preferences']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamsTeamIdPreferencesQueryKey>
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
          Awaited<ReturnType<(typeof client.teams)[':team_id']['preferences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamsTeamIdPreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamsTeamIdPreferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.teams[':team_id'].preferences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutTeamsTeamIdPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTeamsTeamIdPreferencesMutationOptions<TError, TOnMutateResult>(
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

export function getUserQueryKey() {
  return ['user', '/user'] as const
}

export function getUserQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUser<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
          ReturnType<typeof getUserQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$put>>>>>,
          TError,
          InferRequestType<typeof client.user.$put>,
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
  const mutationDefaults = getPutUserMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserAuthTokensQueryKey() {
  return ['user', '/user/auth-tokens'] as const
}

export function getUserAuthTokensQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserAuthTokensQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user['auth-tokens'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserAuthTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.user)['auth-tokens']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)['auth-tokens']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.user)['auth-tokens']['$get']>>>
            >
          >,
          ReturnType<typeof getUserAuthTokensQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.user)['auth-tokens']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAuthTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserAuthTokensQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user['auth-tokens'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserEmailUpdateQueryKey() {
  return ['user', '/user/email/update'] as const
}

export function getUserEmailUpdateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserEmailUpdateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.email.update.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserEmailUpdate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.update.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.email.update.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.email.update.$get>>>
            >
          >,
          ReturnType<typeof getUserEmailUpdateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.email.update.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserEmailUpdateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserEmailUpdateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.email.update.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserOrgsQueryKey() {
  return ['user', '/user/orgs'] as const
}

export function getUserOrgsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserOrgsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.orgs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserOrgs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.orgs.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.orgs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.orgs.$get>>>>
          >,
          ReturnType<typeof getUserOrgsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.orgs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserOrgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserOrgsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.orgs.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutUserPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.password.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.user.password.$put>,
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
  const mutationDefaults = getPutUserPasswordMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserPreferencesQueryKey() {
  return ['user', '/user/preferences'] as const
}

export function getUserPreferencesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserPreferencesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.preferences.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserPreferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$get>>>
            >
          >,
          ReturnType<typeof getUserPreferencesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUserPreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserPreferencesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.preferences.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutUserPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.preferences.$put>,
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
  const mutationDefaults = getPutUserPreferencesMutationOptions<TError, TOnMutateResult>(
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

export function usePatchUserPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user.preferences.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user.preferences.$patch>,
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
  const mutationDefaults = getPatchUserPreferencesMutationOptions<TError, TOnMutateResult>(
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

export function getUserQuotasQueryKey() {
  return ['user', '/user/quotas'] as const
}

export function getUserQuotasQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserQuotasQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.quotas.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserQuotas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.quotas.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.quotas.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.quotas.$get>>>>
          >,
          ReturnType<typeof getUserQuotasQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.quotas.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserQuotasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserQuotasQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.quotas.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserRevokeAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserRevokeAuthTokenMutationOptions<TError, TOnMutateResult>(
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

export function usePostUserStarsDashboardUidDashboardUid<
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
                  ReturnType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$post']>,
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
  const mutationDefaults = getPostUserStarsDashboardUidDashboardUidMutationOptions<
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

export function useDeleteUserStarsDashboardUidDashboardUid<
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
                  ReturnType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.user.stars.dashboard.uid)[':dashboard_uid']['$delete']>,
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
  const mutationDefaults = getDeleteUserStarsDashboardUidDashboardUidMutationOptions<
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

export function getUserTeamsQueryKey() {
  return ['user', '/user/teams'] as const
}

export function getUserTeamsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserTeamsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user.teams.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserTeams<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.teams.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.teams.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.teams.$get>>>>
          >,
          ReturnType<typeof getUserTeamsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.teams.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserTeamsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user.teams.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserUsingOrgId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserUsingOrgIdMutationOptions<TError, TOnMutateResult>(
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

export function getUsersLookupQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.lookup.$get>>,
) {
  return ['users', '/users/lookup', toValue(args)] as const
}

export function getUsersLookupQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.lookup.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersLookupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.lookup.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersLookup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.lookup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.users.lookup.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.lookup.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.lookup.$get>>>>
          >,
          ReturnType<typeof getUsersLookupQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.lookup.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersLookupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersLookupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users.lookup.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersSearchQueryKey() {
  return ['users', '/users/search'] as const
}

export function getUsersSearchQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUsersSearchQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users.search.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUsersSearch<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$get>>>>
          >,
          ReturnType<typeof getUsersSearchQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.search.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUsersSearchQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUsersSearchQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.users.search.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
) {
  return ['users', '/users/:user_id', toValue(args)] as const
}

export function getUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
            >
          >,
          ReturnType<typeof getUsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutUsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.users)[':user_id']['$put']>,
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
  const mutationDefaults = getPutUsersUserIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersUserIdOrgsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['orgs']['$get']>>,
) {
  return ['users', '/users/:user_id/orgs', toValue(args)] as const
}

export function getUsersUserIdOrgsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['orgs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdOrgsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].orgs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdOrgs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['orgs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['orgs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['orgs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['orgs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdOrgsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['orgs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdOrgsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdOrgsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].orgs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUserIdTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['teams']['$get']>>,
) {
  return ['users', '/users/:user_id/teams', toValue(args)] as const
}

export function getUsersUserIdTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['teams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUserIdTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':user_id'].teams.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUserIdTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':user_id']['teams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.users)[':user_id']['teams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['teams']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.users)[':user_id']['teams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getUsersUserIdTeamsQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':user_id']['teams']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUserIdTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':user_id'].teams.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProvisioningAlertRulesQueryKey() {
  return ['v1', '/v1/provisioning/alert-rules'] as const
}

export function getV1ProvisioningAlertRulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ProvisioningAlertRulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning['alert-rules'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningAlertRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningAlertRulesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningAlertRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ProvisioningAlertRulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning['alert-rules'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1ProvisioningAlertRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProvisioningAlertRulesMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProvisioningAlertRulesExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>
  >,
) {
  return ['v1', '/v1/provisioning/alert-rules/export', toValue(args)] as const
}

export function getV1ProvisioningAlertRulesExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvisioningAlertRulesExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning['alert-rules'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningAlertRulesExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>
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
                  ReturnType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningAlertRulesExportQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningAlertRulesExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvisioningAlertRulesExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning['alert-rules'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProvisioningAlertRulesUIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>
  >,
) {
  return ['v1', '/v1/provisioning/alert-rules/:UID', toValue(args)] as const
}

export function getV1ProvisioningAlertRulesUIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvisioningAlertRulesUIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning['alert-rules'][':UID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningAlertRulesUID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningAlertRulesUIDQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningAlertRulesUIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvisioningAlertRulesUIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning['alert-rules'][':UID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1ProvisioningAlertRulesUID<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProvisioningAlertRulesUIDMutationOptions<
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

export function useDeleteV1ProvisioningAlertRulesUID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProvisioningAlertRulesUIDMutationOptions<
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

export function getV1ProvisioningAlertRulesUIDExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>
  >,
) {
  return ['v1', '/v1/provisioning/alert-rules/:UID/export', toValue(args)] as const
}

export function getV1ProvisioningAlertRulesUIDExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvisioningAlertRulesUIDExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning['alert-rules'][':UID'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningAlertRulesUIDExport<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>
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
                    (typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']
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
                    (typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningAlertRulesUIDExportQueryKey>
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
            ReturnType<(typeof client.v1.provisioning)['alert-rules'][':UID']['export']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningAlertRulesUIDExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvisioningAlertRulesUIDExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning['alert-rules'][':UID'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProvisioningContactPointsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['contact-points']['$get']>
  >,
) {
  return ['v1', '/v1/provisioning/contact-points', toValue(args)] as const
}

export function getV1ProvisioningContactPointsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['contact-points']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvisioningContactPointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning['contact-points'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningContactPoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['contact-points']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningContactPointsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningContactPointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvisioningContactPointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning['contact-points'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1ProvisioningContactPoints<
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
                Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.provisioning)['contact-points']['$post']>,
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
  const mutationDefaults = getPostV1ProvisioningContactPointsMutationOptions<
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

export function getV1ProvisioningContactPointsExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>
  >,
) {
  return ['v1', '/v1/provisioning/contact-points/export', toValue(args)] as const
}

export function getV1ProvisioningContactPointsExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvisioningContactPointsExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning['contact-points'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningContactPointsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningContactPointsExportQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.provisioning)['contact-points']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningContactPointsExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvisioningContactPointsExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning['contact-points'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1ProvisioningContactPointsUID<
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
                  ReturnType<(typeof client.v1.provisioning)['contact-points'][':UID']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$put']>,
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
  const mutationDefaults = getPutV1ProvisioningContactPointsUIDMutationOptions<
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

export function useDeleteV1ProvisioningContactPointsUID<
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
                  ReturnType<(typeof client.v1.provisioning)['contact-points'][':UID']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.provisioning)['contact-points'][':UID']['$delete']>,
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
  const mutationDefaults = getDeleteV1ProvisioningContactPointsUIDMutationOptions<
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

export function getV1ProvisioningFolderFolderUIDRuleGroupsGroupQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
    >
  >,
) {
  return ['v1', '/v1/provisioning/folder/:FolderUID/rule-groups/:Group', toValue(args)] as const
}

export function getV1ProvisioningFolderFolderUIDRuleGroupsGroupQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvisioningFolderFolderUIDRuleGroupsGroupQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningFolderFolderUIDRuleGroupsGroup<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
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
                    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
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
                    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningFolderFolderUIDRuleGroupsGroupQueryKey>
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
              (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningFolderFolderUIDRuleGroupsGroupQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvisioningFolderFolderUIDRuleGroupsGroupQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1ProvisioningFolderFolderUIDRuleGroupsGroup<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProvisioningFolderFolderUIDRuleGroupsGroupMutationOptions<
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

export function useDeleteV1ProvisioningFolderFolderUIDRuleGroupsGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProvisioningFolderFolderUIDRuleGroupsGroupMutationOptions<
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

export function getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/provisioning/folder/:FolderUID/rule-groups/:Group/export',
    toValue(args),
  ] as const
}

export function getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].export.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1ProvisioningFolderFolderUIDRuleGroupsGroupExport<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
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
                    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
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
                    (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportQueryKey>
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
              (typeof client.v1.provisioning.folder)[':FolderUID']['rule-groups'][':Group']['export']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvisioningFolderFolderUIDRuleGroupsGroupExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning.folder[':FolderUID']['rule-groups'][':Group'].export.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProvisioningMuteTimingsQueryKey() {
  return ['v1', '/v1/provisioning/mute-timings'] as const
}

export function getV1ProvisioningMuteTimingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ProvisioningMuteTimingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning['mute-timings'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningMuteTimings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningMuteTimingsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningMuteTimingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ProvisioningMuteTimingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning['mute-timings'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1ProvisioningMuteTimings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ProvisioningMuteTimingsMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProvisioningMuteTimingsExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>
  >,
) {
  return ['v1', '/v1/provisioning/mute-timings/export', toValue(args)] as const
}

export function getV1ProvisioningMuteTimingsExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvisioningMuteTimingsExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning['mute-timings'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningMuteTimingsExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>
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
                  ReturnType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningMuteTimingsExportQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningMuteTimingsExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvisioningMuteTimingsExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning['mute-timings'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProvisioningMuteTimingsNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>
  >,
) {
  return ['v1', '/v1/provisioning/mute-timings/:name', toValue(args)] as const
}

export function getV1ProvisioningMuteTimingsNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvisioningMuteTimingsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning['mute-timings'][':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningMuteTimingsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>
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
                  ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningMuteTimingsNameQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningMuteTimingsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvisioningMuteTimingsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning['mute-timings'][':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1ProvisioningMuteTimingsName<
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
                  ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['$put']>,
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
  const mutationDefaults = getPutV1ProvisioningMuteTimingsNameMutationOptions<
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

export function useDeleteV1ProvisioningMuteTimingsName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProvisioningMuteTimingsNameMutationOptions<
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

export function getV1ProvisioningMuteTimingsNameExportQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']>
  >,
) {
  return ['v1', '/v1/provisioning/mute-timings/:name/export', toValue(args)] as const
}

export function getV1ProvisioningMuteTimingsNameExportQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvisioningMuteTimingsNameExportQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning['mute-timings'][':name'].export.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningMuteTimingsNameExport<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']>
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
                    (typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']
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
                    (typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningMuteTimingsNameExportQueryKey>
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
            ReturnType<(typeof client.v1.provisioning)['mute-timings'][':name']['export']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningMuteTimingsNameExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvisioningMuteTimingsNameExportQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning['mute-timings'][':name'].export.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProvisioningPoliciesQueryKey() {
  return ['v1', '/v1/provisioning/policies'] as const
}

export function getV1ProvisioningPoliciesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ProvisioningPoliciesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning.policies.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$get>>>
            >
          >,
          ReturnType<typeof getV1ProvisioningPoliciesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ProvisioningPoliciesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning.policies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1ProvisioningPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.provisioning.policies.$put>,
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
  const mutationDefaults = getPutV1ProvisioningPoliciesMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteV1ProvisioningPolicies<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProvisioningPoliciesMutationOptions<TError, TOnMutateResult>(
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

export function getV1ProvisioningPoliciesExportQueryKey() {
  return ['v1', '/v1/provisioning/policies/export'] as const
}

export function getV1ProvisioningPoliciesExportQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ProvisioningPoliciesExportQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning.policies.export.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningPoliciesExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.policies.export.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.provisioning.policies.export.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.provisioning.policies.export.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningPoliciesExportQueryKey>
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
          Awaited<ReturnType<typeof client.v1.provisioning.policies.export.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningPoliciesExportQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ProvisioningPoliciesExportQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning.policies.export.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProvisioningTemplatesQueryKey() {
  return ['v1', '/v1/provisioning/templates'] as const
}

export function getV1ProvisioningTemplatesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1ProvisioningTemplatesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning.templates.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.provisioning.templates.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.provisioning.templates.$get>>
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningTemplatesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.provisioning.templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1ProvisioningTemplatesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning.templates.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1ProvisioningTemplatesNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$get']>
  >,
) {
  return ['v1', '/v1/provisioning/templates/:name', toValue(args)] as const
}

export function getV1ProvisioningTemplatesNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ProvisioningTemplatesNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.provisioning.templates[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ProvisioningTemplatesName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.provisioning.templates)[':name']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ProvisioningTemplatesNameQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.provisioning.templates)[':name']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ProvisioningTemplatesNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ProvisioningTemplatesNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.provisioning.templates[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1ProvisioningTemplatesName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1ProvisioningTemplatesNameMutationOptions<
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

export function useDeleteV1ProvisioningTemplatesName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1ProvisioningTemplatesNameMutationOptions<
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

export function getV1SsoSettingsQueryKey() {
  return ['v1', '/v1/sso-settings'] as const
}

export function getV1SsoSettingsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1SsoSettingsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['sso-settings'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SsoSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings']['$get']>>>
            >
          >,
          ReturnType<typeof getV1SsoSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SsoSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1SsoSettingsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['sso-settings'].$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SsoSettingsKeyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sso-settings'][':key']['$get']>>,
) {
  return ['v1', '/v1/sso-settings/:key', toValue(args)] as const
}

export function getV1SsoSettingsKeyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sso-settings'][':key']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SsoSettingsKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['sso-settings'][':key'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SsoSettingsKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sso-settings'][':key']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SsoSettingsKeyQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['sso-settings'][':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SsoSettingsKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SsoSettingsKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['sso-settings'][':key'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1SsoSettingsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutV1SsoSettingsKeyMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteV1SsoSettingsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1SsoSettingsKeyMutationOptions<TError, TOnMutateResult>(
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

export function usePatchV1SsoSettingsKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1SsoSettingsKeyMutationOptions<TError, TOnMutateResult>(
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
