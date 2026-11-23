import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getEdgeKey() {
  return ['edge'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getInviteKey() {
  return ['invite'] as const
}

export function getReadyKey() {
  return ['ready'] as const
}

export function getGetApiAdminProjectsKey(
  args: InferRequestType<typeof client.api.admin.projects.$get>,
) {
  return ['api', '/api/admin/projects', args] as const
}

export function useGetApiAdminProjects<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjects<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.projects.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.projects.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminProjectsKey() {
  return ['api', '/api/admin/projects', 'POST'] as const
}

export function usePostApiAdminProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.projects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.admin.projects.$post> }) =>
        parseResponse(client.api.admin.projects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsValidateKey() {
  return ['api', '/api/admin/projects/validate', 'POST'] as const
}

export function usePostApiAdminProjectsValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.projects.validate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.projects.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.admin.projects.validate.$post> },
      ) => parseResponse(client.api.admin.projects.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdKey() {
  return ['api', '/api/admin/projects/:projectId', 'PUT'] as const
}

export function usePutApiAdminProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin.projects)[':projectId']['$put']> },
      ) => parseResponse(client.api.admin.projects[':projectId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdKey() {
  return ['api', '/api/admin/projects/:projectId', 'DELETE'] as const
}

export function useDeleteApiAdminProjectsProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminProjectsProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin.projects)[':projectId']['$delete']> },
      ) => parseResponse(client.api.admin.projects[':projectId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdSettingsKey() {
  return ['api', '/api/admin/projects/:projectId/settings', 'PUT'] as const
}

export function usePutApiAdminProjectsProjectIdSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['settings']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminProjectsProjectIdSettingsKey()
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
            (typeof client.api.admin.projects)[':projectId']['settings']['$put']
          >
        },
      ) => parseResponse(client.api.admin.projects[':projectId'].settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsArchiveProjectIdKey() {
  return ['api', '/api/admin/projects/archive/:projectId', 'POST'] as const
}

export function usePostApiAdminProjectsArchiveProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects.archive)[':projectId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects.archive)[':projectId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsArchiveProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.projects.archive)[':projectId']['$post']>
        },
      ) => parseResponse(client.api.admin.projects.archive[':projectId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsReviveProjectIdKey() {
  return ['api', '/api/admin/projects/revive/:projectId', 'POST'] as const
}

export function usePostApiAdminProjectsReviveProjectId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects.revive)[':projectId']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects.revive)[':projectId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsReviveProjectIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.projects.revive)[':projectId']['$post']>
        },
      ) => parseResponse(client.api.admin.projects.revive[':projectId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdAccessKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/access', args] as const
}

export function useGetApiAdminProjectsProjectIdAccess<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].access.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdAccess<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].access.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdAccessKey() {
  return ['api', '/api/admin/projects/:projectId/access', 'PUT'] as const
}

export function usePutApiAdminProjectsProjectIdAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminProjectsProjectIdAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$put']>
        },
      ) => parseResponse(client.api.admin.projects[':projectId'].access.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdAccessKey() {
  return ['api', '/api/admin/projects/:projectId/access', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdAccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['access']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdAccessKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.projects)[':projectId']['access']['$post']>
        },
      ) => parseResponse(client.api.admin.projects[':projectId'].access.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsRolesRoleIdAccessKey(
  args: InferRequestType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>,
) {
  return ['api', '/api/admin/projects/roles/:roleId/access', args] as const
}

export function useGetApiAdminProjectsRolesRoleIdAccess<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsRolesRoleIdAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects.roles[':roleId'].access.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsRolesRoleIdAccess<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsRolesRoleIdAccessKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects.roles)[':roleId']['access']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects.roles[':roleId'].access.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdUsersUserIdRolesKey() {
  return ['api', '/api/admin/projects/:projectId/users/:userId/roles', 'PUT'] as const
}

export function usePutApiAdminProjectsProjectIdUsersUserIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminProjectsProjectIdUsersUserIdRolesKey()
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
            (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].users[':userId'].roles.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdUsersUserIdRolesKey() {
  return ['api', '/api/admin/projects/:projectId/users/:userId/roles', 'DELETE'] as const
}

export function useDeleteApiAdminProjectsProjectIdUsersUserIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminProjectsProjectIdUsersUserIdRolesKey()
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
            (typeof client.api.admin.projects)[':projectId']['users'][':userId']['roles']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].users[':userId'].roles.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdGroupsGroupIdRolesKey() {
  return ['api', '/api/admin/projects/:projectId/groups/:groupId/roles', 'PUT'] as const
}

export function usePutApiAdminProjectsProjectIdGroupsGroupIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminProjectsProjectIdGroupsGroupIdRolesKey()
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
            (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].groups[':groupId'].roles.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdGroupsGroupIdRolesKey() {
  return ['api', '/api/admin/projects/:projectId/groups/:groupId/roles', 'DELETE'] as const
}

export function useDeleteApiAdminProjectsProjectIdGroupsGroupIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminProjectsProjectIdGroupsGroupIdRolesKey()
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
            (typeof client.api.admin.projects)[':projectId']['groups'][':groupId']['roles']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].groups[':groupId'].roles.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameChangeProjectKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/changeProject',
    'POST',
  ] as const
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameChangeProject<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['changeProject']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['changeProject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdFeaturesFeatureNameChangeProjectKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['changeProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].changeProject.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminPermissionsKey() {
  return ['api', '/api/admin/permissions'] as const
}

export function useGetApiAdminPermissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.permissions.$get>>>
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
        ? getGetApiAdminPermissionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.permissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.permissions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminPermissions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.permissions.$get>>>
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
        ? getGetApiAdminPermissionsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.permissions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.permissions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminMetricsRpsKey() {
  return ['api', '/api/admin/metrics/rps'] as const
}

export function useGetApiAdminMetricsRps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.rps.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminMetricsRpsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.rps.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.metrics.rps.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminMetricsRps<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.rps.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminMetricsRpsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.rps.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.metrics.rps.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminMetricsTrafficKey(
  args: InferRequestType<typeof client.api.admin.metrics.traffic.$get>,
) {
  return ['api', '/api/admin/metrics/traffic', args] as const
}

export function useGetApiAdminMetricsTraffic<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.metrics.traffic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.traffic.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminMetricsTrafficKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.traffic.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.metrics.traffic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminMetricsTraffic<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.metrics.traffic.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.traffic.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminMetricsTrafficKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.traffic.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.metrics.traffic.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminMetricsConnectionKey(
  args: InferRequestType<typeof client.api.admin.metrics.connection.$get>,
) {
  return ['api', '/api/admin/metrics/connection', args] as const
}

export function useGetApiAdminMetricsConnection<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.metrics.connection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.connection.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminMetricsConnectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.connection.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.metrics.connection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminMetricsConnection<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.metrics.connection.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.connection.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminMetricsConnectionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.connection.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.metrics.connection.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminMetricsRequestKey(
  args: InferRequestType<typeof client.api.admin.metrics.request.$get>,
) {
  return ['api', '/api/admin/metrics/request', args] as const
}

export function useGetApiAdminMetricsRequest<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.metrics.request.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.request.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminMetricsRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.request.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.metrics.request.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminMetricsRequest<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.metrics.request.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.request.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminMetricsRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.metrics.request.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.metrics.request.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminNotificationsKey() {
  return ['api', '/api/admin/notifications'] as const
}

export function useGetApiAdminNotifications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.notifications.$get>>>
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
        ? getGetApiAdminNotificationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.notifications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminNotifications<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.notifications.$get>>>
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
        ? getGetApiAdminNotificationsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.notifications.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminNotificationsReadKey() {
  return ['api', '/api/admin/notifications/read', 'POST'] as const
}

export function usePostApiAdminNotificationsRead<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.notifications.read.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.notifications.read.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminNotificationsReadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.admin.notifications.read.$post> },
      ) => parseResponse(client.api.admin.notifications.read.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminInsightsLifecycleKey(
  args: InferRequestType<typeof client.api.admin.insights.lifecycle.$get>,
) {
  return ['api', '/api/admin/insights/lifecycle', args] as const
}

export function useGetApiAdminInsightsLifecycle<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.insights.lifecycle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.lifecycle.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminInsightsLifecycleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.lifecycle.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.insights.lifecycle.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminInsightsLifecycle<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.insights.lifecycle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.lifecycle.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminInsightsLifecycleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.lifecycle.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.insights.lifecycle.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminInsightsKey(
  args: InferRequestType<typeof client.api.admin.insights.$get>,
) {
  return ['api', '/api/admin/insights', args] as const
}

export function useGetApiAdminInsights<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.insights.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminInsightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.insights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminInsights<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.insights.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminInsightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.insights.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.insights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminEmailSubscriptionSubscriptionKey() {
  return ['api', '/api/admin/email-subscription/:subscription', 'PUT'] as const
}

export function usePutApiAdminEmailSubscriptionSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['email-subscription'][':subscription']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['email-subscription'][':subscription']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminEmailSubscriptionSubscriptionKey()
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
            (typeof client.api.admin)['email-subscription'][':subscription']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.admin['email-subscription'][':subscription'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminEmailSubscriptionSubscriptionKey() {
  return ['api', '/api/admin/email-subscription/:subscription', 'DELETE'] as const
}

export function useDeleteApiAdminEmailSubscriptionSubscription<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['email-subscription'][':subscription']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['email-subscription'][':subscription']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminEmailSubscriptionSubscriptionKey()
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
            (typeof client.api.admin)['email-subscription'][':subscription']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin['email-subscription'][':subscription'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminLicensedUsersKey() {
  return ['api', '/api/admin/licensed-users'] as const
}

export function useGetApiAdminLicensedUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['licensed-users']['$get']>>
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
        ? getGetApiAdminLicensedUsersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['licensed-users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['licensed-users'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminLicensedUsers<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['licensed-users']['$get']>>
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
        ? getGetApiAdminLicensedUsersKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['licensed-users']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['licensed-users'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiClientMetricsEdgeKey() {
  return ['api', '/api/client/metrics/edge', 'POST'] as const
}

export function usePostApiClientMetricsEdge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.client.metrics.edge.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.client.metrics.edge.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiClientMetricsEdgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.client.metrics.edge.$post> },
      ) => parseResponse(client.api.client.metrics.edge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiClientEdgeLicensingHeartbeatKey() {
  return ['api', '/api/client/edge-licensing/heartbeat', 'POST'] as const
}

export function usePostApiClientEdgeLicensingHeartbeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.client)['edge-licensing']['heartbeat']['$post']>>
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
  const swrKey = customKey ?? getPostApiClientEdgeLicensingHeartbeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.api.client['edge-licensing'].heartbeat.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetReadyKey() {
  return ['ready', '/ready'] as const
}

export function useGetReady<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetReadyKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ready.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReady<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetReadyKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ready.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ready.$get(undefined, clientOptions)),
      restSwrOptions,
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

export function getGetInviteTokenValidateKey(
  args: InferRequestType<(typeof client.invite)[':token']['validate']['$get']>,
) {
  return ['invite', '/invite/:token/validate', args] as const
}

export function useGetInviteTokenValidate<TError = unknown>(
  args: InferRequestType<(typeof client.invite)[':token']['validate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invite)[':token']['validate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInviteTokenValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invite)[':token']['validate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invite[':token'].validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInviteTokenValidate<TError = unknown>(
  args: InferRequestType<(typeof client.invite)[':token']['validate']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invite)[':token']['validate']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInviteTokenValidateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.invite)[':token']['validate']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invite[':token'].validate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostInviteTokenSignupKey() {
  return ['invite', '/invite/:token/signup', 'POST'] as const
}

export function usePostInviteTokenSignup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invite)[':token']['signup']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invite)[':token']['signup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInviteTokenSignupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invite)[':token']['signup']['$post']> },
      ) => parseResponse(client.invite[':token'].signup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthSimpleLoginKey() {
  return ['auth', '/auth/simple/login', 'POST'] as const
}

export function usePostAuthSimpleLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.simple.login.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.simple.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthSimpleLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.simple.login.$post> }) =>
        parseResponse(client.auth.simple.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthResetValidateKey() {
  return ['auth', '/auth/reset/validate'] as const
}

export function useGetAuthResetValidate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.validate.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthResetValidateKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.validate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.reset.validate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthResetValidate<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.validate.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthResetValidateKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.validate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.reset.validate.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthResetPasswordKey() {
  return ['auth', '/auth/reset/password', 'POST'] as const
}

export function usePostAuthResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.reset.password.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.reset.password.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthResetPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.reset.password.$post> }) =>
        parseResponse(client.auth.reset.password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthResetValidatePasswordKey() {
  return ['auth', '/auth/reset/validate-password', 'POST'] as const
}

export function usePostAuthResetValidatePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.reset)['validate-password']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.reset)['validate-password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthResetValidatePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.auth.reset)['validate-password']['$post']> },
      ) => parseResponse(client.auth.reset['validate-password'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthResetPasswordEmailKey() {
  return ['auth', '/auth/reset/password-email', 'POST'] as const
}

export function usePostAuthResetPasswordEmail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.reset)['password-email']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.reset)['password-email']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthResetPasswordEmailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth.reset)['password-email']['$post']> },
      ) => parseResponse(client.auth.reset['password-email'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminFeaturesValidateKey() {
  return ['api', '/api/admin/features/validate', 'POST'] as const
}

export function usePostApiAdminFeaturesValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.features.validate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.features.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminFeaturesValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.admin.features.validate.$post> },
      ) => parseResponse(client.api.admin.features.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminFeaturesFeatureNameTagsKey(
  args: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>,
) {
  return ['api', '/api/admin/features/:featureName/tags', args] as const
}

export function useGetApiAdminFeaturesFeatureNameTags<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminFeaturesFeatureNameTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.features[':featureName'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminFeaturesFeatureNameTags<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminFeaturesFeatureNameTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.features[':featureName'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminFeaturesFeatureNameTagsKey() {
  return ['api', '/api/admin/features/:featureName/tags', 'PUT'] as const
}

export function usePutApiAdminFeaturesFeatureNameTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminFeaturesFeatureNameTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$put']>
        },
      ) => parseResponse(client.api.admin.features[':featureName'].tags.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminFeaturesFeatureNameTagsKey() {
  return ['api', '/api/admin/features/:featureName/tags', 'POST'] as const
}

export function usePostApiAdminFeaturesFeatureNameTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.features)[':featureName']['tags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminFeaturesFeatureNameTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.features)[':featureName']['tags']['$post']>
        },
      ) => parseResponse(client.api.admin.features[':featureName'].tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminFeaturesFeatureNameTagsTypeValueKey() {
  return ['api', '/api/admin/features/:featureName/tags/:type/:value', 'DELETE'] as const
}

export function useDeleteApiAdminFeaturesFeatureNameTagsTypeValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.features)[':featureName']['tags'][':type'][':value']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.features)[':featureName']['tags'][':type'][':value']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminFeaturesFeatureNameTagsTypeValueKey()
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
            (typeof client.api.admin.features)[':featureName']['tags'][':type'][':value']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.features[':featureName'].tags[':type'][':value'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminFeatureTypesKey() {
  return ['api', '/api/admin/feature-types'] as const
}

export function useGetApiAdminFeatureTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['feature-types']['$get']>>
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
        ? getGetApiAdminFeatureTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['feature-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['feature-types'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminFeatureTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['feature-types']['$get']>>
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
        ? getGetApiAdminFeatureTypesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['feature-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['feature-types'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminFeatureTypesIdLifetimeKey() {
  return ['api', '/api/admin/feature-types/:id/lifetime', 'PUT'] as const
}

export function usePutApiAdminFeatureTypesIdLifetime<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['feature-types'][':id']['lifetime']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['feature-types'][':id']['lifetime']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminFeatureTypesIdLifetimeKey()
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
            (typeof client.api.admin)['feature-types'][':id']['lifetime']['$put']
          >
        },
      ) =>
        parseResponse(client.api.admin['feature-types'][':id'].lifetime.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminArchiveFeatureNameKey() {
  return ['api', '/api/admin/archive/:featureName', 'DELETE'] as const
}

export function useDeleteApiAdminArchiveFeatureName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.archive)[':featureName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.archive)[':featureName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminArchiveFeatureNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin.archive)[':featureName']['$delete']> },
      ) => parseResponse(client.api.admin.archive[':featureName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminArchiveReviveFeatureNameKey() {
  return ['api', '/api/admin/archive/revive/:featureName', 'POST'] as const
}

export function usePostApiAdminArchiveReviveFeatureName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.archive.revive)[':featureName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.archive.revive)[':featureName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminArchiveReviveFeatureNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.archive.revive)[':featureName']['$post']>
        },
      ) => parseResponse(client.api.admin.archive.revive[':featureName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminStrategiesKey() {
  return ['api', '/api/admin/strategies'] as const
}

export function useGetApiAdminStrategies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminStrategiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.strategies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminStrategies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminStrategiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.strategies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminStrategiesKey() {
  return ['api', '/api/admin/strategies', 'POST'] as const
}

export function usePostApiAdminStrategies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.strategies.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.strategies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminStrategiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.admin.strategies.$post> },
      ) => parseResponse(client.api.admin.strategies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminStrategiesNameKey(
  args: InferRequestType<(typeof client.api.admin.strategies)[':name']['$get']>,
) {
  return ['api', '/api/admin/strategies/:name', args] as const
}

export function useGetApiAdminStrategiesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.strategies)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminStrategiesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.strategies[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminStrategiesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.strategies)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminStrategiesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.strategies[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminStrategiesNameKey() {
  return ['api', '/api/admin/strategies/:name', 'PUT'] as const
}

export function usePutApiAdminStrategiesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.strategies)[':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminStrategiesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin.strategies)[':name']['$put']> },
      ) => parseResponse(client.api.admin.strategies[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminStrategiesNameKey() {
  return ['api', '/api/admin/strategies/:name', 'DELETE'] as const
}

export function useDeleteApiAdminStrategiesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.strategies)[':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.strategies)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminStrategiesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin.strategies)[':name']['$delete']> },
      ) => parseResponse(client.api.admin.strategies[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminStrategiesStrategyNameDeprecateKey() {
  return ['api', '/api/admin/strategies/:strategyName/deprecate', 'POST'] as const
}

export function usePostApiAdminStrategiesStrategyNameDeprecate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.strategies)[':strategyName']['deprecate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.strategies)[':strategyName']['deprecate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminStrategiesStrategyNameDeprecateKey()
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
            (typeof client.api.admin.strategies)[':strategyName']['deprecate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.strategies[':strategyName'].deprecate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminStrategiesStrategyNameReactivateKey() {
  return ['api', '/api/admin/strategies/:strategyName/reactivate', 'POST'] as const
}

export function usePostApiAdminStrategiesStrategyNameReactivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.strategies)[':strategyName']['reactivate']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.strategies)[':strategyName']['reactivate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminStrategiesStrategyNameReactivateKey()
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
            (typeof client.api.admin.strategies)[':strategyName']['reactivate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.strategies[':strategyName'].reactivate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminEventsKey(
  args: InferRequestType<typeof client.api.admin.events.$get>,
) {
  return ['api', '/api/admin/events', args] as const
}

export function useGetApiAdminEvents<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminEvents<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.events.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.events.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminEventsFeatureNameKey(
  args: InferRequestType<(typeof client.api.admin.events)[':featureName']['$get']>,
) {
  return ['api', '/api/admin/events/:featureName', args] as const
}

export function useGetApiAdminEventsFeatureName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.events)[':featureName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.events)[':featureName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminEventsFeatureNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.events)[':featureName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.events[':featureName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminEventsFeatureName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.events)[':featureName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.events)[':featureName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminEventsFeatureNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.events)[':featureName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.events[':featureName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminEventCreatorsKey() {
  return ['api', '/api/admin/event-creators'] as const
}

export function useGetApiAdminEventCreators<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['event-creators']['$get']>>
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
        ? getGetApiAdminEventCreatorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['event-creators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['event-creators'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminEventCreators<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['event-creators']['$get']>>
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
        ? getGetApiAdminEventCreatorsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['event-creators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['event-creators'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminPlaygroundKey() {
  return ['api', '/api/admin/playground', 'POST'] as const
}

export function usePostApiAdminPlayground<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.playground.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.playground.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminPlaygroundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.admin.playground.$post> },
      ) => parseResponse(client.api.admin.playground.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminPlaygroundAdvancedKey() {
  return ['api', '/api/admin/playground/advanced', 'POST'] as const
}

export function usePostApiAdminPlaygroundAdvanced<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.playground.advanced.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.playground.advanced.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminPlaygroundAdvancedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.admin.playground.advanced.$post> },
      ) => parseResponse(client.api.admin.playground.advanced.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminPlaygroundFeaturesFeatureNameKey() {
  return ['api', '/api/admin/playground/features/:featureName', 'POST'] as const
}

export function usePostApiAdminPlaygroundFeaturesFeatureName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.playground.features)[':featureName']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.playground.features)[':featureName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminPlaygroundFeaturesFeatureNameKey()
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
            (typeof client.api.admin.playground.features)[':featureName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.playground.features[':featureName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminMetricsUnknownFlagsKey() {
  return ['api', '/api/admin/metrics/unknown-flags'] as const
}

export function useGetApiAdminMetricsUnknownFlags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.metrics)['unknown-flags']['$get']>>
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
        ? getGetApiAdminMetricsUnknownFlagsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.metrics)['unknown-flags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.metrics['unknown-flags'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminMetricsUnknownFlags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.metrics)['unknown-flags']['$get']>>
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
        ? getGetApiAdminMetricsUnknownFlagsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.metrics)['unknown-flags']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.metrics['unknown-flags'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminMetricsApplicationsAppNameKey(
  args: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>,
) {
  return ['api', '/api/admin/metrics/applications/:appName', args] as const
}

export function useGetApiAdminMetricsApplicationsAppName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminMetricsApplicationsAppNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.metrics.applications[':appName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminMetricsApplicationsAppName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminMetricsApplicationsAppNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.metrics.applications[':appName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminMetricsApplicationsAppNameKey() {
  return ['api', '/api/admin/metrics/applications/:appName', 'POST'] as const
}

export function usePostApiAdminMetricsApplicationsAppName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminMetricsApplicationsAppNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$post']>
        },
      ) =>
        parseResponse(client.api.admin.metrics.applications[':appName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminMetricsApplicationsAppNameKey() {
  return ['api', '/api/admin/metrics/applications/:appName', 'DELETE'] as const
}

export function useDeleteApiAdminMetricsApplicationsAppName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.metrics.applications)[':appName']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.metrics.applications)[':appName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminMetricsApplicationsAppNameKey()
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
            (typeof client.api.admin.metrics.applications)[':appName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.metrics.applications[':appName'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminMetricsApplicationsKey(
  args: InferRequestType<typeof client.api.admin.metrics.applications.$get>,
) {
  return ['api', '/api/admin/metrics/applications', args] as const
}

export function useGetApiAdminMetricsApplications<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.metrics.applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.admin.metrics.applications.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminMetricsApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.admin.metrics.applications.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.metrics.applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminMetricsApplications<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.metrics.applications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.admin.metrics.applications.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminMetricsApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.admin.metrics.applications.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.metrics.applications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminMetricsApplicationsAppNameOverviewKey(
  args: InferRequestType<
    (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
  >,
) {
  return ['api', '/api/admin/metrics/applications/:appName/overview', args] as const
}

export function useGetApiAdminMetricsApplicationsAppNameOverview<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
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
        ? getGetApiAdminMetricsApplicationsAppNameOverviewKey(args)
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
                (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
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
          client.api.admin.metrics.applications[':appName'].overview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminMetricsApplicationsAppNameOverview<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
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
        ? getGetApiAdminMetricsApplicationsAppNameOverviewKey(args)
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
                (typeof client.api.admin.metrics.applications)[':appName']['overview']['$get']
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
          client.api.admin.metrics.applications[':appName'].overview.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminMetricsInstancesAppNameEnvironmentEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
  >,
) {
  return ['api', '/api/admin/metrics/instances/:appName/environment/:environment', args] as const
}

export function useGetApiAdminMetricsInstancesAppNameEnvironmentEnvironment<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
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
        ? getGetApiAdminMetricsInstancesAppNameEnvironmentEnvironmentKey(args)
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
                (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
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
          client.api.admin.metrics.instances[':appName'].environment[':environment'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminMetricsInstancesAppNameEnvironmentEnvironment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
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
        ? getGetApiAdminMetricsInstancesAppNameEnvironmentEnvironmentKey(args)
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
                (typeof client.api.admin.metrics.instances)[':appName']['environment'][':environment']['$get']
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
          client.api.admin.metrics.instances[':appName'].environment[':environment'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminMetricsSdksOutdatedKey() {
  return ['api', '/api/admin/metrics/sdks/outdated'] as const
}

export function useGetApiAdminMetricsSdksOutdated<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.admin.metrics.sdks.outdated.$get>>
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
        ? getGetApiAdminMetricsSdksOutdatedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.admin.metrics.sdks.outdated.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.metrics.sdks.outdated.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminMetricsSdksOutdated<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.admin.metrics.sdks.outdated.$get>>
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
        ? getGetApiAdminMetricsSdksOutdatedKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.admin.metrics.sdks.outdated.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.metrics.sdks.outdated.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminClientMetricsFeaturesNameRawKey(
  args: InferRequestType<
    (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
  >,
) {
  return ['api', '/api/admin/client-metrics/features/:name/raw', args] as const
}

export function useGetApiAdminClientMetricsFeaturesNameRaw<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
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
        ? getGetApiAdminClientMetricsFeaturesNameRawKey(args)
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
                (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
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
          client.api.admin['client-metrics'].features[':name'].raw.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminClientMetricsFeaturesNameRaw<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
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
        ? getGetApiAdminClientMetricsFeaturesNameRawKey(args)
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
                (typeof client.api.admin)['client-metrics']['features'][':name']['raw']['$get']
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
          client.api.admin['client-metrics'].features[':name'].raw.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminClientMetricsFeaturesNameKey(
  args: InferRequestType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>,
) {
  return ['api', '/api/admin/client-metrics/features/:name', args] as const
}

export function useGetApiAdminClientMetricsFeaturesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminClientMetricsFeaturesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin['client-metrics'].features[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminClientMetricsFeaturesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminClientMetricsFeaturesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['client-metrics']['features'][':name']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin['client-metrics'].features[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminUserKey() {
  return ['api', '/api/admin/user'] as const
}

export function useGetApiAdminUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminUserProfileKey() {
  return ['api', '/api/admin/user/profile'] as const
}

export function useGetApiAdminUserProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.profile.$get>>>
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
        ? getGetApiAdminUserProfileKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.user.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminUserProfile<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.profile.$get>>>
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
        ? getGetApiAdminUserProfileKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.profile.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.user.profile.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminUserChangePasswordKey() {
  return ['api', '/api/admin/user/change-password', 'POST'] as const
}

export function usePostApiAdminUserChangePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.user)['change-password']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.user)['change-password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminUserChangePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin.user)['change-password']['$post']> },
      ) => parseResponse(client.api.admin.user['change-password'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminUserRolesKey(
  args: InferRequestType<typeof client.api.admin.user.roles.$get>,
) {
  return ['api', '/api/admin/user/roles', args] as const
}

export function useGetApiAdminUserRoles<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.user.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.roles.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminUserRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.user.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminUserRoles<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.user.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.roles.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminUserRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.roles.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.user.roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminUserTokensKey() {
  return ['api', '/api/admin/user/tokens'] as const
}

export function useGetApiAdminUserTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminUserTokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.user.tokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminUserTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminUserTokensKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.user.tokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminUserTokensKey() {
  return ['api', '/api/admin/user/tokens', 'POST'] as const
}

export function usePostApiAdminUserTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.user.tokens.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.user.tokens.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminUserTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.admin.user.tokens.$post> },
      ) => parseResponse(client.api.admin.user.tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminUserTokensIdKey() {
  return ['api', '/api/admin/user/tokens/:id', 'DELETE'] as const
}

export function useDeleteApiAdminUserTokensId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.user.tokens)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.user.tokens)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminUserTokensIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin.user.tokens)[':id']['$delete']> },
      ) => parseResponse(client.api.admin.user.tokens[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminUiConfigKey() {
  return ['api', '/api/admin/ui-config'] as const
}

export function useGetApiAdminUiConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['ui-config']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminUiConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['ui-config']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['ui-config'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminUiConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['ui-config']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminUiConfigKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['ui-config']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['ui-config'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminUiConfigCorsKey() {
  return ['api', '/api/admin/ui-config/cors', 'POST'] as const
}

export function usePostApiAdminUiConfigCors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['ui-config']['cors']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['ui-config']['cors']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminUiConfigCorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin)['ui-config']['cors']['$post']> },
      ) => parseResponse(client.api.admin['ui-config'].cors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminContextKey(
  args: InferRequestType<typeof client.api.admin.context.$get>,
) {
  return ['api', '/api/admin/context', args] as const
}

export function useGetApiAdminContext<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.context.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.context.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminContext<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.context.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.context.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminContextKey() {
  return ['api', '/api/admin/context', 'POST'] as const
}

export function usePostApiAdminContext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.context.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminContextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.admin.context.$post> }) =>
        parseResponse(client.api.admin.context.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminContextContextFieldKey(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['$get']>,
) {
  return ['api', '/api/admin/context/:contextField', args] as const
}

export function useGetApiAdminContextContextField<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminContextContextFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.context[':contextField'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminContextContextField<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminContextContextFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.context[':contextField'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminContextContextFieldKey() {
  return ['api', '/api/admin/context/:contextField', 'PUT'] as const
}

export function usePutApiAdminContextContextField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.context)[':contextField']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminContextContextFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin.context)[':contextField']['$put']> },
      ) => parseResponse(client.api.admin.context[':contextField'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminContextContextFieldKey() {
  return ['api', '/api/admin/context/:contextField', 'DELETE'] as const
}

export function useDeleteApiAdminContextContextField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.context)[':contextField']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.context)[':contextField']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminContextContextFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin.context)[':contextField']['$delete']> },
      ) => parseResponse(client.api.admin.context[':contextField'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminContextContextFieldStrategiesKey(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>,
) {
  return ['api', '/api/admin/context/:contextField/strategies', args] as const
}

export function useGetApiAdminContextContextFieldStrategies<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminContextContextFieldStrategiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.context[':contextField'].strategies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminContextContextFieldStrategies<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminContextContextFieldStrategiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.context)[':contextField']['strategies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.context[':contextField'].strategies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminContextContextFieldLegalValuesKey() {
  return ['api', '/api/admin/context/:contextField/legal-values', 'POST'] as const
}

export function usePostApiAdminContextContextFieldLegalValues<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.context)[':contextField']['legal-values']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.context)[':contextField']['legal-values']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminContextContextFieldLegalValuesKey()
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
            (typeof client.api.admin.context)[':contextField']['legal-values']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.context[':contextField']['legal-values'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminContextContextFieldLegalValuesLegalValueKey() {
  return ['api', '/api/admin/context/:contextField/legal-values/:legalValue', 'DELETE'] as const
}

export function useDeleteApiAdminContextContextFieldLegalValuesLegalValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.context)[':contextField']['legal-values'][':legalValue']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.context)[':contextField']['legal-values'][':legalValue']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminContextContextFieldLegalValuesLegalValueKey()
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
            (typeof client.api.admin.context)[':contextField']['legal-values'][':legalValue']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.context[':contextField']['legal-values'][':legalValue'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminContextValidateKey() {
  return ['api', '/api/admin/context/validate', 'POST'] as const
}

export function usePostApiAdminContextValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.context.validate.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.context.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminContextValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.admin.context.validate.$post> },
      ) => parseResponse(client.api.admin.context.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminFeaturesBatchExportKey() {
  return ['api', '/api/admin/features-batch/export', 'POST'] as const
}

export function usePostApiAdminFeaturesBatchExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['features-batch']['export']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['features-batch']['export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminFeaturesBatchExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin)['features-batch']['export']['$post']>
        },
      ) => parseResponse(client.api.admin['features-batch'].export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminFeaturesBatchValidateKey() {
  return ['api', '/api/admin/features-batch/validate', 'POST'] as const
}

export function usePostApiAdminFeaturesBatchValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['features-batch']['validate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['features-batch']['validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminFeaturesBatchValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin)['features-batch']['validate']['$post']>
        },
      ) => parseResponse(client.api.admin['features-batch'].validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminFeaturesBatchImportKey() {
  return ['api', '/api/admin/features-batch/import', 'POST'] as const
}

export function usePostApiAdminFeaturesBatchImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['features-batch']['import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['features-batch']['import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminFeaturesBatchImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin)['features-batch']['import']['$post']>
        },
      ) => parseResponse(client.api.admin['features-batch'].import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminTagsKey() {
  return ['api', '/api/admin/tags'] as const
}

export function useGetApiAdminTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminTags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminTagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.tags.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminTagsKey() {
  return ['api', '/api/admin/tags', 'POST'] as const
}

export function usePostApiAdminTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.tags.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.tags.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.admin.tags.$post> }) =>
        parseResponse(client.api.admin.tags.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminTagsTypeKey(
  args: InferRequestType<(typeof client.api.admin.tags)[':type']['$get']>,
) {
  return ['api', '/api/admin/tags/:type', args] as const
}

export function useGetApiAdminTagsType<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.tags)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.tags)[':type']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminTagsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.tags)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.tags[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminTagsType<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.tags)[':type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.tags)[':type']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminTagsTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.tags)[':type']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.tags[':type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminTagsTypeValueKey(
  args: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$get']>,
) {
  return ['api', '/api/admin/tags/:type/:value', args] as const
}

export function useGetApiAdminTagsTypeValue<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminTagsTypeValueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.tags[':type'][':value'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminTagsTypeValue<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminTagsTypeValueKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.tags[':type'][':value'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiAdminTagsTypeValueKey() {
  return ['api', '/api/admin/tags/:type/:value', 'DELETE'] as const
}

export function useDeleteApiAdminTagsTypeValue<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminTagsTypeValueKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['$delete']> },
      ) => parseResponse(client.api.admin.tags[':type'][':value'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminTagsTypeValueRenameKey() {
  return ['api', '/api/admin/tags/:type/:value/rename', 'POST'] as const
}

export function usePostApiAdminTagsTypeValueRename<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.tags)[':type'][':value']['rename']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.tags)[':type'][':value']['rename']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminTagsTypeValueRenameKey()
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
            (typeof client.api.admin.tags)[':type'][':value']['rename']['$post']
          >
        },
      ) => parseResponse(client.api.admin.tags[':type'][':value'].rename.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminTagTypesKey() {
  return ['api', '/api/admin/tag-types'] as const
}

export function useGetApiAdminTagTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminTagTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['tag-types'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminTagTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminTagTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['tag-types'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminTagTypesKey() {
  return ['api', '/api/admin/tag-types', 'POST'] as const
}

export function usePostApiAdminTagTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['tag-types']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['tag-types']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminTagTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin)['tag-types']['$post']> },
      ) => parseResponse(client.api.admin['tag-types'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminTagTypesValidateKey() {
  return ['api', '/api/admin/tag-types/validate', 'POST'] as const
}

export function usePostApiAdminTagTypesValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['tag-types']['validate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['tag-types']['validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminTagTypesValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin)['tag-types']['validate']['$post']> },
      ) => parseResponse(client.api.admin['tag-types'].validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminTagTypesNameKey(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$get']>,
) {
  return ['api', '/api/admin/tag-types/:name', args] as const
}

export function useGetApiAdminTagTypesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminTagTypesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['tag-types'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminTagTypesName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminTagTypesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['tag-types'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminTagTypesNameKey() {
  return ['api', '/api/admin/tag-types/:name', 'PUT'] as const
}

export function usePutApiAdminTagTypesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminTagTypesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$put']> },
      ) => parseResponse(client.api.admin['tag-types'][':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminTagTypesNameKey() {
  return ['api', '/api/admin/tag-types/:name', 'DELETE'] as const
}

export function useDeleteApiAdminTagTypesName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminTagTypesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['$delete']> },
      ) => parseResponse(client.api.admin['tag-types'][':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminTagTypesNameValuesKey(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>,
) {
  return ['api', '/api/admin/tag-types/:name/values', args] as const
}

export function useGetApiAdminTagTypesNameValues<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminTagTypesNameValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['tag-types'][':name'].values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminTagTypesNameValues<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminTagTypesNameValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['tag-types'][':name']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['tag-types'][':name'].values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminAddonsKey(
  args: InferRequestType<typeof client.api.admin.addons.$get>,
) {
  return ['api', '/api/admin/addons', args] as const
}

export function useGetApiAdminAddons<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.addons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminAddonsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminAddons<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.addons.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminAddonsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminAddonsKey() {
  return ['api', '/api/admin/addons', 'POST'] as const
}

export function usePostApiAdminAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.addons.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.addons.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.admin.addons.$post> }) =>
        parseResponse(client.api.admin.addons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminAddonsIdKey(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['$get']>,
) {
  return ['api', '/api/admin/addons/:id', args] as const
}

export function useGetApiAdminAddonsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminAddonsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.addons[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminAddonsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminAddonsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.addons[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminAddonsIdKey() {
  return ['api', '/api/admin/addons/:id', 'PUT'] as const
}

export function usePutApiAdminAddonsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.addons)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminAddonsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin.addons)[':id']['$put']> },
      ) => parseResponse(client.api.admin.addons[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminAddonsIdKey() {
  return ['api', '/api/admin/addons/:id', 'DELETE'] as const
}

export function useDeleteApiAdminAddonsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.addons)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminAddonsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin.addons)[':id']['$delete']> },
      ) => parseResponse(client.api.admin.addons[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminAddonsIdEventsKey(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['events']['$get']>,
) {
  return ['api', '/api/admin/addons/:id/events', args] as const
}

export function useGetApiAdminAddonsIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminAddonsIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.addons[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminAddonsIdEvents<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.addons)[':id']['events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminAddonsIdEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.addons)[':id']['events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.addons[':id'].events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminApiTokensKey(
  args: InferRequestType<(typeof client.api.admin)['api-tokens']['$get']>,
) {
  return ['api', '/api/admin/api-tokens', args] as const
}

export function useGetApiAdminApiTokens<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['api-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminApiTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['api-tokens'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminApiTokens<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['api-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminApiTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['api-tokens'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminApiTokensKey() {
  return ['api', '/api/admin/api-tokens', 'POST'] as const
}

export function usePostApiAdminApiTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['api-tokens']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['api-tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminApiTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin)['api-tokens']['$post']> },
      ) => parseResponse(client.api.admin['api-tokens'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminApiTokensNameKey(
  args: InferRequestType<(typeof client.api.admin)['api-tokens'][':name']['$get']>,
) {
  return ['api', '/api/admin/api-tokens/:name', args] as const
}

export function useGetApiAdminApiTokensName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['api-tokens'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminApiTokensNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['api-tokens'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminApiTokensName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['api-tokens'][':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminApiTokensNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['api-tokens'][':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminApiTokensTokenKey() {
  return ['api', '/api/admin/api-tokens/:token', 'PUT'] as const
}

export function usePutApiAdminApiTokensToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':token']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['api-tokens'][':token']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminApiTokensTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin)['api-tokens'][':token']['$put']> },
      ) => parseResponse(client.api.admin['api-tokens'][':token'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminApiTokensTokenKey() {
  return ['api', '/api/admin/api-tokens/:token', 'DELETE'] as const
}

export function useDeleteApiAdminApiTokensToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['api-tokens'][':token']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['api-tokens'][':token']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminApiTokensTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin)['api-tokens'][':token']['$delete']> },
      ) => parseResponse(client.api.admin['api-tokens'][':token'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminUserAdminInactiveKey() {
  return ['api', '/api/admin/user-admin/inactive'] as const
}

export function useGetApiAdminUserAdminInactive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['inactive']['$get']>>
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
        ? getGetApiAdminUserAdminInactiveKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin']['inactive']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['user-admin'].inactive.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminUserAdminInactive<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['inactive']['$get']>>
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
        ? getGetApiAdminUserAdminInactiveKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin']['inactive']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['user-admin'].inactive.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminUserAdminInactiveDeleteKey() {
  return ['api', '/api/admin/user-admin/inactive/delete', 'POST'] as const
}

export function usePostApiAdminUserAdminInactiveDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['user-admin']['inactive']['delete']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['user-admin']['inactive']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminUserAdminInactiveDeleteKey()
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
            (typeof client.api.admin)['user-admin']['inactive']['delete']['$post']
          >
        },
      ) => parseResponse(client.api.admin['user-admin'].inactive.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminUserAdminInactiveDeleteKey() {
  return ['api', '/api/admin/user-admin/inactive/delete', 'DELETE'] as const
}

export function useDeleteApiAdminUserAdminInactiveDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['user-admin']['inactive']['delete']['$delete']>
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
  const swrKey = customKey ?? getDeleteApiAdminUserAdminInactiveDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin['user-admin'].inactive.delete.$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminUserAdminValidatePasswordKey() {
  return ['api', '/api/admin/user-admin/validate-password', 'POST'] as const
}

export function usePostApiAdminUserAdminValidatePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['validate-password']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['user-admin']['validate-password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminUserAdminValidatePasswordKey()
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
            (typeof client.api.admin)['user-admin']['validate-password']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin['user-admin']['validate-password'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminUserAdminIdChangePasswordKey() {
  return ['api', '/api/admin/user-admin/:id/change-password', 'POST'] as const
}

export function usePostApiAdminUserAdminIdChangePassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['user-admin'][':id']['change-password']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['user-admin'][':id']['change-password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminUserAdminIdChangePasswordKey()
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
            (typeof client.api.admin)['user-admin'][':id']['change-password']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin['user-admin'][':id']['change-password'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminUserAdminResetPasswordKey() {
  return ['api', '/api/admin/user-admin/reset-password', 'POST'] as const
}

export function usePostApiAdminUserAdminResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['reset-password']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['user-admin']['reset-password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminUserAdminResetPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin)['user-admin']['reset-password']['$post']>
        },
      ) =>
        parseResponse(client.api.admin['user-admin']['reset-password'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminUserAdminKey() {
  return ['api', '/api/admin/user-admin'] as const
}

export function useGetApiAdminUserAdmin<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminUserAdminKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['user-admin'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminUserAdmin<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminUserAdminKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['user-admin'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminUserAdminKey() {
  return ['api', '/api/admin/user-admin', 'POST'] as const
}

export function usePostApiAdminUserAdmin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin)['user-admin']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['user-admin']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminUserAdminKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin)['user-admin']['$post']> },
      ) => parseResponse(client.api.admin['user-admin'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminUserAdminSearchKey(
  args: InferRequestType<(typeof client.api.admin)['user-admin']['search']['$get']>,
) {
  return ['api', '/api/admin/user-admin/search', args] as const
}

export function useGetApiAdminUserAdminSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['user-admin']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminUserAdminSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['user-admin'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminUserAdminSearch<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['user-admin']['search']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin']['search']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminUserAdminSearchKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin']['search']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['user-admin'].search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminUserAdminAccessKey() {
  return ['api', '/api/admin/user-admin/access'] as const
}

export function useGetApiAdminUserAdminAccess<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['access']['$get']>>
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
        ? getGetApiAdminUserAdminAccessKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin']['access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['user-admin'].access.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminUserAdminAccess<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['access']['$get']>>
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
        ? getGetApiAdminUserAdminAccessKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin']['access']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['user-admin'].access.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminUserAdminAdminCountKey() {
  return ['api', '/api/admin/user-admin/admin-count'] as const
}

export function useGetApiAdminUserAdminAdminCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['admin-count']['$get']>>
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
        ? getGetApiAdminUserAdminAdminCountKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin']['admin-count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['user-admin']['admin-count'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminUserAdminAdminCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['admin-count']['$get']>>
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
        ? getGetApiAdminUserAdminAdminCountKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin']['admin-count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['user-admin']['admin-count'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminUserAdminIdKey(
  args: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$get']>,
) {
  return ['api', '/api/admin/user-admin/:id', args] as const
}

export function useGetApiAdminUserAdminId<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminUserAdminIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['user-admin'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminUserAdminId<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminUserAdminIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['user-admin'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminUserAdminIdKey() {
  return ['api', '/api/admin/user-admin/:id', 'PUT'] as const
}

export function usePutApiAdminUserAdminId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminUserAdminIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$put']> },
      ) => parseResponse(client.api.admin['user-admin'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminUserAdminIdKey() {
  return ['api', '/api/admin/user-admin/:id', 'DELETE'] as const
}

export function useDeleteApiAdminUserAdminId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminUserAdminIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin)['user-admin'][':id']['$delete']> },
      ) => parseResponse(client.api.admin['user-admin'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminUserAdminScimUsersKey() {
  return ['api', '/api/admin/user-admin/scim-users', 'DELETE'] as const
}

export function useDeleteApiAdminUserAdminScimUsers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['user-admin']['scim-users']['$delete']>>
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
  const swrKey = customKey ?? getDeleteApiAdminUserAdminScimUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin['user-admin']['scim-users'].$delete(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminFeedbackKey() {
  return ['api', '/api/admin/feedback', 'POST'] as const
}

export function usePostApiAdminFeedback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.feedback.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.feedback.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.admin.feedback.$post> }) =>
        parseResponse(client.api.admin.feedback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiAdminFeedbackIdKey() {
  return ['api', '/api/admin/feedback/:id', 'PUT'] as const
}

export function usePutApiAdminFeedbackId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.feedback)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.feedback)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminFeedbackIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin.feedback)[':id']['$put']> },
      ) => parseResponse(client.api.admin.feedback[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdOverviewKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/overview', args] as const
}

export function useGetApiAdminProjectsProjectIdOverview<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdOverviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].overview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdOverview<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdOverviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['overview']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].overview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdDoraKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/dora', args] as const
}

export function useGetApiAdminProjectsProjectIdDora<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdDoraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].dora.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdDora<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdDoraKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['dora']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].dora.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdApplicationsKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/applications', args] as const
}

export function useGetApiAdminProjectsProjectIdApplications<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.projects[':projectId'].applications.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdApplications<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdApplicationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['applications']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.projects[':projectId'].applications.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdFlagCreatorsKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/flag-creators', args] as const
}

export function useGetApiAdminProjectsProjectIdFlagCreators<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdFlagCreatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.projects[':projectId']['flag-creators'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdFlagCreators<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdFlagCreatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['flag-creators']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.projects[':projectId']['flag-creators'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdSdksOutdatedKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/sdks/outdated', args] as const
}

export function useGetApiAdminProjectsProjectIdSdksOutdated<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
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
        ? getGetApiAdminProjectsProjectIdSdksOutdatedKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
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
          client.api.admin.projects[':projectId'].sdks.outdated.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdSdksOutdated<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
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
        ? getGetApiAdminProjectsProjectIdSdksOutdatedKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['sdks']['outdated']['$get']
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
          client.api.admin.projects[':projectId'].sdks.outdated.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
  >,
) {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment',
    args,
  ] as const
}

export function useGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
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
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironment<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['$get']
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
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOffKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/off',
    'POST',
  ] as const
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOff<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['off']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['off']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOffKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['off']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].off.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOnKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/on',
    'POST',
  ] as const
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['on']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['on']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentOnKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['on']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].on.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOnKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/bulk_features/environments/:environment/on',
    'POST',
  ] as const
}

export function usePostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOn<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['on']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['on']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOnKey()
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
            (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['on']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].bulk_features.environments[
            ':environment'
          ].on.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOffKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/bulk_features/environments/:environment/off',
    'POST',
  ] as const
}

export function usePostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOff<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['off']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['off']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiAdminProjectsProjectIdBulkFeaturesEnvironmentsEnvironmentOffKey()
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
            (typeof client.api.admin.projects)[':projectId']['bulk_features']['environments'][':environment']['off']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].bulk_features.environments[
            ':environment'
          ].off.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
  >,
) {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies',
    args,
  ] as const
}

export function useGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesKey(
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
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
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
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].strategies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesKey(
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
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$get']
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
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].strategies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies',
    'POST',
  ] as const
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].strategies.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
  >,
) {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies/:strategyId',
    args,
  ] as const
}

export function useGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdKey(
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
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
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
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].strategies[':strategyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdKey(
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
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$get']
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
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].strategies[':strategyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies/:strategyId',
    'PUT',
  ] as const
}

export function usePutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].strategies[':strategyId'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies/:strategyId',
    'DELETE',
  ] as const
}

export function useDeleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].strategies[':strategyId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies/:strategyId',
    'PATCH',
  ] as const
}

export function usePatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesStrategyIdKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies'][':strategyId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].strategies[':strategyId'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrderKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/strategies/set-sort-order',
    'POST',
  ] as const
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrder<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['set-sort-order']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['set-sort-order']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentStrategiesSetSortOrderKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['strategies']['set-sort-order']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].strategies['set-sort-order'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdFeaturesKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/features', args] as const
}

export function useGetApiAdminProjectsProjectIdFeatures<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdFeatures<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFeaturesKey() {
  return ['api', '/api/admin/projects/:projectId/features', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdFeatures<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['features']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['features']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdFeaturesKey()
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
            (typeof client.api.admin.projects)[':projectId']['features']['$post']
          >
        },
      ) =>
        parseResponse(client.api.admin.projects[':projectId'].features.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameCloneKey() {
  return ['api', '/api/admin/projects/:projectId/features/:featureName/clone', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameClone<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['clone']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['clone']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdFeaturesFeatureNameCloneKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['clone']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].clone.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdFeaturesFeatureNameKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/features/:featureName', args] as const
}

export function useGetApiAdminProjectsProjectIdFeaturesFeatureName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesFeatureNameKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
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
          client.api.admin.projects[':projectId'].features[':featureName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdFeaturesFeatureName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesFeatureNameKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$get']
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
          client.api.admin.projects[':projectId'].features[':featureName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameKey() {
  return ['api', '/api/admin/projects/:projectId/features/:featureName', 'PUT'] as const
}

export function usePutApiAdminProjectsProjectIdFeaturesFeatureName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminProjectsProjectIdFeaturesFeatureNameKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameKey() {
  return ['api', '/api/admin/projects/:projectId/features/:featureName', 'DELETE'] as const
}

export function useDeleteApiAdminProjectsProjectIdFeaturesFeatureName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiAdminProjectsProjectIdFeaturesFeatureNameKey() {
  return ['api', '/api/admin/projects/:projectId/features/:featureName', 'PATCH'] as const
}

export function usePatchApiAdminProjectsProjectIdFeaturesFeatureName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiAdminProjectsProjectIdFeaturesFeatureNameKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdStaleKey() {
  return ['api', '/api/admin/projects/:projectId/stale', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdStale<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['stale']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['stale']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdStaleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.projects)[':projectId']['stale']['$post']>
        },
      ) => parseResponse(client.api.admin.projects[':projectId'].stale.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdTagsKey() {
  return ['api', '/api/admin/projects/:projectId/tags', 'PUT'] as const
}

export function usePutApiAdminProjectsProjectIdTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['tags']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['tags']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminProjectsProjectIdTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.projects)[':projectId']['tags']['$put']>
        },
      ) => parseResponse(client.api.admin.projects[':projectId'].tags.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFeaturesChildDependenciesKey() {
  return ['api', '/api/admin/projects/:projectId/features/:child/dependencies', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdFeaturesChildDependencies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdFeaturesChildDependenciesKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':child'].dependencies.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesKey() {
  return ['api', '/api/admin/projects/:projectId/features/:child/dependencies', 'DELETE'] as const
}

export function useDeleteApiAdminProjectsProjectIdFeaturesChildDependencies<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':child'].dependencies.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesParentKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:child/dependencies/:parent',
    'DELETE',
  ] as const
}

export function useDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesParent<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies'][':parent']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies'][':parent']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminProjectsProjectIdFeaturesChildDependenciesParentKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':child']['dependencies'][':parent']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':child'].dependencies[
            ':parent'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdFeaturesChildParentsKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/features/:child/parents', args] as const
}

export function useGetApiAdminProjectsProjectIdFeaturesChildParents<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesChildParentsKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
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
          client.api.admin.projects[':projectId'].features[':child'].parents.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdFeaturesChildParents<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesChildParentsKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['features'][':child']['parents']['$get']
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
          client.api.admin.projects[':projectId'].features[':child'].parents.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdFeaturesParentParentVariantsKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/features/:parent/parent-variants', args] as const
}

export function useGetApiAdminProjectsProjectIdFeaturesParentParentVariants<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesParentParentVariantsKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
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
          client.api.admin.projects[':projectId'].features[':parent']['parent-variants'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdFeaturesParentParentVariants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesParentParentVariantsKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['features'][':parent']['parent-variants']['$get']
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
          client.api.admin.projects[':projectId'].features[':parent']['parent-variants'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdDependenciesKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/dependencies', args] as const
}

export function useGetApiAdminProjectsProjectIdDependencies<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdDependenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.projects[':projectId'].dependencies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdDependencies<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdDependenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['dependencies']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.projects[':projectId'].dependencies.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdEnvironmentsKey() {
  return ['api', '/api/admin/projects/:projectId/environments', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['environments']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['environments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdEnvironmentsKey()
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
            (typeof client.api.admin.projects)[':projectId']['environments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].environments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdEnvironmentsEnvironmentKey() {
  return ['api', '/api/admin/projects/:projectId/environments/:environment', 'DELETE'] as const
}

export function useDeleteApiAdminProjectsProjectIdEnvironmentsEnvironment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminProjectsProjectIdEnvironmentsEnvironmentKey()
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
            (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].environments[':environment'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategyKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/environments/:environment/default-strategy',
    'POST',
  ] as const
}

export function usePostApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategy<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['default-strategy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['default-strategy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategyKey()
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
            (typeof client.api.admin.projects)[':projectId']['environments'][':environment']['default-strategy']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].environments[':environment'][
            'default-strategy'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdHealthReportKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/health-report', args] as const
}

export function useGetApiAdminProjectsProjectIdHealthReport<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdHealthReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.projects[':projectId']['health-report'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdHealthReport<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdHealthReportKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['health-report']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.projects[':projectId']['health-report'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
  >,
) {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/variants',
    args,
  ] as const
}

export function useGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
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
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].variants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariants<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$get']
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
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].variants.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/variants',
    'PUT',
  ] as const
}

export function usePutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariants<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPutApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].variants.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/environments/:environment/variants',
    'PATCH',
  ] as const
}

export function usePatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariants<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPatchApiAdminProjectsProjectIdFeaturesFeatureNameEnvironmentsEnvironmentVariantsKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['environments'][':environment']['variants']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].environments[
            ':environment'
          ].variants.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatchKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/variants-batch',
    'PUT',
  ] as const
}

export function usePutApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['variants-batch']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['variants-batch']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminProjectsProjectIdFeaturesFeatureNameVariantsBatchKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['variants-batch']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName']['variants-batch'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdApiTokensKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/api-tokens', args] as const
}

export function useGetApiAdminProjectsProjectIdApiTokens<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdApiTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.projects[':projectId']['api-tokens'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdApiTokens<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdApiTokensKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.projects[':projectId']['api-tokens'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdApiTokensKey() {
  return ['api', '/api/admin/projects/:projectId/api-tokens', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdApiTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['api-tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdApiTokensKey()
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
            (typeof client.api.admin.projects)[':projectId']['api-tokens']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId']['api-tokens'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdApiTokensTokenKey() {
  return ['api', '/api/admin/projects/:projectId/api-tokens/:token', 'DELETE'] as const
}

export function useDeleteApiAdminProjectsProjectIdApiTokensToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['api-tokens'][':token']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['api-tokens'][':token']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminProjectsProjectIdApiTokensTokenKey()
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
            (typeof client.api.admin.projects)[':projectId']['api-tokens'][':token']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId']['api-tokens'][':token'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdDeleteKey() {
  return ['api', '/api/admin/projects/:projectId/delete', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['delete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['delete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.projects)[':projectId']['delete']['$post']>
        },
      ) => parseResponse(client.api.admin.projects[':projectId'].delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdReviveKey() {
  return ['api', '/api/admin/projects/:projectId/revive', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdRevive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['revive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['revive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdReviveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.projects)[':projectId']['revive']['$post']>
        },
      ) => parseResponse(client.api.admin.projects[':projectId'].revive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdArchiveValidateKey() {
  return ['api', '/api/admin/projects/:projectId/archive/validate', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdArchiveValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['archive']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['archive']['validate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdArchiveValidateKey()
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
            (typeof client.api.admin.projects)[':projectId']['archive']['validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].archive.validate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdArchiveKey() {
  return ['api', '/api/admin/projects/:projectId/archive', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdArchiveKey()
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
            (typeof client.api.admin.projects)[':projectId']['archive']['$post']
          >
        },
      ) => parseResponse(client.api.admin.projects[':projectId'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdInsightsKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/insights', args] as const
}

export function useGetApiAdminProjectsProjectIdInsights<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdInsightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].insights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdInsights<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdInsightsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.projects)[':projectId']['insights']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].insights.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdStatusKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/status', args] as const
}

export function useGetApiAdminProjectsProjectIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdStatus<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/features/:featureName/lifecycle', args] as const
}

export function useGetApiAdminProjectsProjectIdFeaturesFeatureNameLifecycle<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
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
          client.api.admin.projects[':projectId'].features[':featureName'].lifecycle.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdFeaturesFeatureNameLifecycle<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
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
        ? getGetApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['$get']
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
          client.api.admin.projects[':projectId'].features[':featureName'].lifecycle.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleCompleteKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/lifecycle/complete',
    'POST',
  ] as const
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleComplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleCompleteKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].lifecycle.complete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncompleteKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/lifecycle/uncomplete',
    'POST',
  ] as const
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncomplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['uncomplete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['uncomplete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiAdminProjectsProjectIdFeaturesFeatureNameLifecycleUncompleteKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['lifecycle']['uncomplete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[
            ':featureName'
          ].lifecycle.uncomplete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameLinkKey() {
  return ['api', '/api/admin/projects/:projectId/features/:featureName/link', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameLink<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdFeaturesFeatureNameLinkKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].link.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/link/:linkId',
    'PUT',
  ] as const
}

export function usePutApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].link[':linkId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/link/:linkId',
    'DELETE',
  ] as const
}

export function useDeleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameLinkLinkIdKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['link'][':linkId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].link[':linkId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdContextKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/context', args] as const
}

export function useGetApiAdminProjectsProjectIdContext<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].context.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdContext<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdContextKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].context.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdContextKey() {
  return ['api', '/api/admin/projects/:projectId/context', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdContext<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['context']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['context']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdContextKey()
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
            (typeof client.api.admin.projects)[':projectId']['context']['$post']
          >
        },
      ) => parseResponse(client.api.admin.projects[':projectId'].context.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdContextContextFieldKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/context/:contextField', args] as const
}

export function useGetApiAdminProjectsProjectIdContextContextField<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
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
        ? getGetApiAdminProjectsProjectIdContextContextFieldKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
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
          client.api.admin.projects[':projectId'].context[':contextField'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdContextContextField<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
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
        ? getGetApiAdminProjectsProjectIdContextContextFieldKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$get']
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
          client.api.admin.projects[':projectId'].context[':contextField'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdContextContextFieldKey() {
  return ['api', '/api/admin/projects/:projectId/context/:contextField', 'PUT'] as const
}

export function usePutApiAdminProjectsProjectIdContextContextField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminProjectsProjectIdContextContextFieldKey()
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
            (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].context[':contextField'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdContextContextFieldKey() {
  return ['api', '/api/admin/projects/:projectId/context/:contextField', 'DELETE'] as const
}

export function useDeleteApiAdminProjectsProjectIdContextContextField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminProjectsProjectIdContextContextFieldKey()
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
            (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].context[':contextField'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdContextContextFieldStrategiesKey(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
  >,
) {
  return ['api', '/api/admin/projects/:projectId/context/:contextField/strategies', args] as const
}

export function useGetApiAdminProjectsProjectIdContextContextFieldStrategies<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
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
        ? getGetApiAdminProjectsProjectIdContextContextFieldStrategiesKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
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
          client.api.admin.projects[':projectId'].context[':contextField'].strategies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdContextContextFieldStrategies<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
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
        ? getGetApiAdminProjectsProjectIdContextContextFieldStrategiesKey(args)
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
                (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['strategies']['$get']
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
          client.api.admin.projects[':projectId'].context[':contextField'].strategies.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdContextContextFieldLegalValuesKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/context/:contextField/legal-values',
    'POST',
  ] as const
}

export function usePostApiAdminProjectsProjectIdContextContextFieldLegalValues<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdContextContextFieldLegalValuesKey()
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
            (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].context[':contextField']['legal-values'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValueKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/context/:contextField/legal-values/:legalValue',
    'DELETE',
  ] as const
}

export function useDeleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValue<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values'][':legalValue']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values'][':legalValue']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiAdminProjectsProjectIdContextContextFieldLegalValuesLegalValueKey()
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
            (typeof client.api.admin.projects)[':projectId']['context'][':contextField']['legal-values'][':legalValue']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].context[':contextField']['legal-values'][
            ':legalValue'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdContextValidateKey() {
  return ['api', '/api/admin/projects/:projectId/context/validate', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdContextValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['context']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['context']['validate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdContextValidateKey()
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
            (typeof client.api.admin.projects)[':projectId']['context']['validate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].context.validate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminProjectsProjectIdAddonsKey(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>,
) {
  return ['api', '/api/admin/projects/:projectId/addons', args] as const
}

export function useGetApiAdminProjectsProjectIdAddons<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminProjectsProjectIdAddons<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminProjectsProjectIdAddonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.projects[':projectId'].addons.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdAddonsKey() {
  return ['api', '/api/admin/projects/:projectId/addons', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdAddons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.projects)[':projectId']['addons']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdAddonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons']['$post']>
        },
      ) => parseResponse(client.api.admin.projects[':projectId'].addons.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiAdminProjectsProjectIdAddonsIdKey() {
  return ['api', '/api/admin/projects/:projectId/addons/:id', 'PUT'] as const
}

export function usePutApiAdminProjectsProjectIdAddonsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['addons'][':id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['addons'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminProjectsProjectIdAddonsIdKey()
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
            (typeof client.api.admin.projects)[':projectId']['addons'][':id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].addons[':id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminLifecycleCountKey() {
  return ['api', '/api/admin/lifecycle/count'] as const
}

export function useGetApiAdminLifecycleCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.lifecycle.count.$get>>>
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
        ? getGetApiAdminLifecycleCountKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.lifecycle.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.lifecycle.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminLifecycleCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.lifecycle.count.$get>>>
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
        ? getGetApiAdminLifecycleCountKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.lifecycle.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.lifecycle.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminPersonalDashboardKey() {
  return ['api', '/api/admin/personal-dashboard'] as const
}

export function useGetApiAdminPersonalDashboard<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard']['$get']>>
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
        ? getGetApiAdminPersonalDashboardKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['personal-dashboard'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminPersonalDashboard<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard']['$get']>>
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
        ? getGetApiAdminPersonalDashboardKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['personal-dashboard']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['personal-dashboard'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminPersonalDashboardProjectIdKey(
  args: InferRequestType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>,
) {
  return ['api', '/api/admin/personal-dashboard/:projectId', args] as const
}

export function useGetApiAdminPersonalDashboardProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminPersonalDashboardProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin['personal-dashboard'][':projectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminPersonalDashboardProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminPersonalDashboardProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['personal-dashboard'][':projectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin['personal-dashboard'][':projectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminEnvironmentsKey() {
  return ['api', '/api/admin/environments'] as const
}

export function useGetApiAdminEnvironments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.environments.$get>>>
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
        ? getGetApiAdminEnvironmentsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.environments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.environments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminEnvironments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.environments.$get>>>
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
        ? getGetApiAdminEnvironmentsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.environments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.environments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminEnvironmentsNameKey(
  args: InferRequestType<(typeof client.api.admin.environments)[':name']['$get']>,
) {
  return ['api', '/api/admin/environments/:name', args] as const
}

export function useGetApiAdminEnvironmentsName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.environments)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminEnvironmentsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.environments[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminEnvironmentsName<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.environments)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminEnvironmentsNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.environments[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminEnvironmentsProjectProjectIdKey(
  args: InferRequestType<(typeof client.api.admin.environments.project)[':projectId']['$get']>,
) {
  return ['api', '/api/admin/environments/project/:projectId', args] as const
}

export function useGetApiAdminEnvironmentsProjectProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.environments.project)[':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.environments.project)[':projectId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminEnvironmentsProjectProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.environments.project)[':projectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.environments.project[':projectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminEnvironmentsProjectProjectId<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.environments.project)[':projectId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.environments.project)[':projectId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminEnvironmentsProjectProjectIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.environments.project)[':projectId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.environments.project[':projectId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminEnvironmentsSortOrderKey() {
  return ['api', '/api/admin/environments/sort-order', 'PUT'] as const
}

export function usePutApiAdminEnvironmentsSortOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin.environments)['sort-order']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.environments)['sort-order']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminEnvironmentsSortOrderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin.environments)['sort-order']['$put']> },
      ) => parseResponse(client.api.admin.environments['sort-order'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminEnvironmentsNameOnKey() {
  return ['api', '/api/admin/environments/:name/on', 'POST'] as const
}

export function usePostApiAdminEnvironmentsNameOn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['on']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.environments)[':name']['on']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminEnvironmentsNameOnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.environments)[':name']['on']['$post']>
        },
      ) => parseResponse(client.api.admin.environments[':name'].on.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminEnvironmentsNameOffKey() {
  return ['api', '/api/admin/environments/:name/off', 'POST'] as const
}

export function usePostApiAdminEnvironmentsNameOff<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.environments)[':name']['off']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.environments)[':name']['off']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminEnvironmentsNameOffKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.admin.environments)[':name']['off']['$post']>
        },
      ) => parseResponse(client.api.admin.environments[':name'].off.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminSplashIdKey() {
  return ['api', '/api/admin/splash/:id', 'POST'] as const
}

export function usePostApiAdminSplashId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.admin.splash)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.splash)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminSplashIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin.splash)[':id']['$post']> },
      ) => parseResponse(client.api.admin.splash[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminConstraintsValidateKey() {
  return ['api', '/api/admin/constraints/validate', 'POST'] as const
}

export function usePostApiAdminConstraintsValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.admin.constraints.validate.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.constraints.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminConstraintsValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.admin.constraints.validate.$post> },
      ) => parseResponse(client.api.admin.constraints.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminInviteLinkTokensKey() {
  return ['api', '/api/admin/invite-link/tokens'] as const
}

export function useGetApiAdminInviteLinkTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$get']>>
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
        ? getGetApiAdminInviteLinkTokensKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['invite-link'].tokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminInviteLinkTokens<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$get']>>
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
        ? getGetApiAdminInviteLinkTokensKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['invite-link'].tokens.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminInviteLinkTokensKey() {
  return ['api', '/api/admin/invite-link/tokens', 'POST'] as const
}

export function usePostApiAdminInviteLinkTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['invite-link']['tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminInviteLinkTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.admin)['invite-link']['tokens']['$post']> },
      ) => parseResponse(client.api.admin['invite-link'].tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminInviteLinkTokensTokenKey(
  args: InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>,
) {
  return ['api', '/api/admin/invite-link/tokens/:token', args] as const
}

export function useGetApiAdminInviteLinkTokensToken<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminInviteLinkTokensTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['invite-link'].tokens[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminInviteLinkTokensToken<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminInviteLinkTokensTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['invite-link'].tokens[':token'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminInviteLinkTokensTokenKey() {
  return ['api', '/api/admin/invite-link/tokens/:token', 'PUT'] as const
}

export function usePutApiAdminInviteLinkTokensToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['invite-link']['tokens'][':token']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminInviteLinkTokensTokenKey()
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
            (typeof client.api.admin)['invite-link']['tokens'][':token']['$put']
          >
        },
      ) => parseResponse(client.api.admin['invite-link'].tokens[':token'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminInstanceAdminStatisticsCsvKey() {
  return ['api', '/api/admin/instance-admin/statistics/csv'] as const
}

export function useGetApiAdminInstanceAdminStatisticsCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['csv']['$get']>
          >
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
        ? getGetApiAdminInstanceAdminStatisticsCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['csv']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin['instance-admin'].statistics.csv.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminInstanceAdminStatisticsCsv<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['csv']['$get']>
          >
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
        ? getGetApiAdminInstanceAdminStatisticsCsvKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['csv']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin['instance-admin'].statistics.csv.$get(undefined, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminInstanceAdminStatisticsKey() {
  return ['api', '/api/admin/instance-admin/statistics'] as const
}

export function useGetApiAdminInstanceAdminStatistics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['$get']>>
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
        ? getGetApiAdminInstanceAdminStatisticsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['instance-admin'].statistics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminInstanceAdminStatistics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['$get']>>
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
        ? getGetApiAdminInstanceAdminStatisticsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['instance-admin']['statistics']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin['instance-admin'].statistics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesKey() {
  return ['api', '/api/admin/projects/:projectId/features/:featureName/favorites', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdFeaturesFeatureNameFavorites<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].favorites.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesKey() {
  return [
    'api',
    '/api/admin/projects/:projectId/features/:featureName/favorites',
    'DELETE',
  ] as const
}

export function useDeleteApiAdminProjectsProjectIdFeaturesFeatureNameFavorites<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminProjectsProjectIdFeaturesFeatureNameFavoritesKey()
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
            (typeof client.api.admin.projects)[':projectId']['features'][':featureName']['favorites']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].features[':featureName'].favorites.$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminProjectsProjectIdFavoritesKey() {
  return ['api', '/api/admin/projects/:projectId/favorites', 'POST'] as const
}

export function usePostApiAdminProjectsProjectIdFavorites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['favorites']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['favorites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminProjectsProjectIdFavoritesKey()
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
            (typeof client.api.admin.projects)[':projectId']['favorites']['$post']
          >
        },
      ) =>
        parseResponse(client.api.admin.projects[':projectId'].favorites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminProjectsProjectIdFavoritesKey() {
  return ['api', '/api/admin/projects/:projectId/favorites', 'DELETE'] as const
}

export function useDeleteApiAdminProjectsProjectIdFavorites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.admin.projects)[':projectId']['favorites']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.projects)[':projectId']['favorites']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminProjectsProjectIdFavoritesKey()
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
            (typeof client.api.admin.projects)[':projectId']['favorites']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.admin.projects[':projectId'].favorites.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiAdminSegmentsValidateKey() {
  return ['api', '/api/admin/segments/validate', 'POST'] as const
}

export function usePostApiAdminSegmentsValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.validate.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.segments.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminSegmentsValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.admin.segments.validate.$post> },
      ) => parseResponse(client.api.admin.segments.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminSegmentsStrategiesStrategyIdKey(
  args: InferRequestType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>,
) {
  return ['api', '/api/admin/segments/strategies/:strategyId', args] as const
}

export function useGetApiAdminSegmentsStrategiesStrategyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminSegmentsStrategiesStrategyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.segments.strategies[':strategyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminSegmentsStrategiesStrategyId<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminSegmentsStrategiesStrategyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.admin.segments.strategies)[':strategyId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.admin.segments.strategies[':strategyId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminSegmentsStrategiesKey() {
  return ['api', '/api/admin/segments/strategies', 'POST'] as const
}

export function usePostApiAdminSegmentsStrategies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.strategies.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.segments.strategies.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminSegmentsStrategiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.admin.segments.strategies.$post> },
      ) => parseResponse(client.api.admin.segments.strategies.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminSegmentsIdStrategiesKey(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>,
) {
  return ['api', '/api/admin/segments/:id/strategies', args] as const
}

export function useGetApiAdminSegmentsIdStrategies<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminSegmentsIdStrategiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.segments[':id'].strategies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminSegmentsIdStrategies<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminSegmentsIdStrategiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['strategies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.admin.segments[':id'].strategies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminSegmentsIdKey(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['$get']>,
) {
  return ['api', '/api/admin/segments/:id', args] as const
}

export function useGetApiAdminSegmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminSegmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.segments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminSegmentsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin.segments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminSegmentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.segments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAdminSegmentsIdKey() {
  return ['api', '/api/admin/segments/:id', 'PUT'] as const
}

export function usePutApiAdminSegmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.segments)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAdminSegmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin.segments)[':id']['$put']> },
      ) => parseResponse(client.api.admin.segments[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAdminSegmentsIdKey() {
  return ['api', '/api/admin/segments/:id', 'DELETE'] as const
}

export function useDeleteApiAdminSegmentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin.segments)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin.segments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAdminSegmentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin.segments)[':id']['$delete']> },
      ) => parseResponse(client.api.admin.segments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminSegmentsKey() {
  return ['api', '/api/admin/segments'] as const
}

export function useGetApiAdminSegments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminSegmentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.segments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminSegments<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAdminSegmentsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.segments.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminSegmentsKey() {
  return ['api', '/api/admin/segments', 'POST'] as const
}

export function usePostApiAdminSegments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.segments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.segments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminSegmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.admin.segments.$post> }) =>
        parseResponse(client.api.admin.segments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminMaintenanceKey() {
  return ['api', '/api/admin/maintenance'] as const
}

export function useGetApiAdminMaintenance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$get>>>
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
        ? getGetApiAdminMaintenanceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.maintenance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminMaintenance<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$get>>>
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
        ? getGetApiAdminMaintenanceKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.maintenance.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminMaintenanceKey() {
  return ['api', '/api/admin/maintenance', 'POST'] as const
}

export function usePostApiAdminMaintenance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.maintenance.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.admin.maintenance.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminMaintenanceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.admin.maintenance.$post> },
      ) => parseResponse(client.api.admin.maintenance.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAdminTelemetrySettingsKey() {
  return ['api', '/api/admin/telemetry/settings'] as const
}

export function useGetApiAdminTelemetrySettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.telemetry.settings.$get>>>
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
        ? getGetApiAdminTelemetrySettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.telemetry.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.telemetry.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminTelemetrySettings<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.telemetry.settings.$get>>>
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
        ? getGetApiAdminTelemetrySettingsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.telemetry.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.telemetry.settings.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminSearchFeaturesKey(
  args: InferRequestType<typeof client.api.admin.search.features.$get>,
) {
  return ['api', '/api/admin/search/features', args] as const
}

export function useGetApiAdminSearchFeatures<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.search.features.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.features.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminSearchFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.features.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.search.features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminSearchFeatures<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.search.features.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.features.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminSearchFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.features.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.search.features.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminSearchEventsKey(
  args: InferRequestType<typeof client.api.admin.search.events.$get>,
) {
  return ['api', '/api/admin/search/events', args] as const
}

export function useGetApiAdminSearchEvents<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.search.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.events.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminSearchEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.search.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminSearchEvents<TError = unknown>(
  args: InferRequestType<typeof client.api.admin.search.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.events.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminSearchEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.admin.search.events.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin.search.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiAdminFlagCreatorsKey(
  args: InferRequestType<(typeof client.api.admin)['flag-creators']['$get']>,
) {
  return ['api', '/api/admin/flag-creators', args] as const
}

export function useGetApiAdminFlagCreators<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['flag-creators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['flag-creators']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminFlagCreatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['flag-creators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['flag-creators'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAdminFlagCreators<TError = unknown>(
  args: InferRequestType<(typeof client.api.admin)['flag-creators']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['flag-creators']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiAdminFlagCreatorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['flag-creators']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.admin['flag-creators'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAdminRecordUiErrorKey() {
  return ['api', '/api/admin/record-ui-error', 'POST'] as const
}

export function usePostApiAdminRecordUiError<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.admin)['record-ui-error']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.admin)['record-ui-error']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAdminRecordUiErrorKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.admin)['record-ui-error']['$post']> },
      ) => parseResponse(client.api.admin['record-ui-error'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiClientFeaturesFeatureNameKey(
  args: InferRequestType<(typeof client.api.client.features)[':featureName']['$get']>,
) {
  return ['api', '/api/client/features/:featureName', args] as const
}

export function useGetApiClientFeaturesFeatureName<TError = unknown>(
  args: InferRequestType<(typeof client.api.client.features)[':featureName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.client.features)[':featureName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiClientFeaturesFeatureNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.client.features)[':featureName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.client.features[':featureName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiClientFeaturesFeatureName<TError = unknown>(
  args: InferRequestType<(typeof client.api.client.features)[':featureName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.client.features)[':featureName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiClientFeaturesFeatureNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.client.features)[':featureName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.client.features[':featureName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiClientFeaturesKey() {
  return ['api', '/api/client/features'] as const
}

export function useGetApiClientFeatures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.features.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiClientFeaturesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.client.features.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.client.features.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiClientFeatures<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.features.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiClientFeaturesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.client.features.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.client.features.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiClientMetricsKey() {
  return ['api', '/api/client/metrics', 'POST'] as const
}

export function usePostApiClientMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.client.metrics.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.client.metrics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiClientMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.client.metrics.$post> }) =>
        parseResponse(client.api.client.metrics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiClientMetricsBulkKey() {
  return ['api', '/api/client/metrics/bulk', 'POST'] as const
}

export function usePostApiClientMetricsBulk<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.client.metrics.bulk.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.client.metrics.bulk.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiClientMetricsBulkKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.client.metrics.bulk.$post> },
      ) => parseResponse(client.api.client.metrics.bulk.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiClientRegisterKey() {
  return ['api', '/api/client/register', 'POST'] as const
}

export function usePostApiClientRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.client.register.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.client.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiClientRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.client.register.$post> }) =>
        parseResponse(client.api.client.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiFrontendKey() {
  return ['api', '/api/frontend'] as const
}

export function useGetApiFrontend<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFrontendKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.frontend.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiFrontend<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiFrontendKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.frontend.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiFrontendKey() {
  return ['api', '/api/frontend', 'POST'] as const
}

export function usePostApiFrontend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.frontend.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFrontendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.frontend.$post> }) =>
        parseResponse(client.api.frontend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFrontendClientMetricsKey() {
  return ['api', '/api/frontend/client/metrics', 'POST'] as const
}

export function usePostApiFrontendClientMetrics<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.client.metrics.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.api.frontend.client.metrics.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFrontendClientMetricsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.frontend.client.metrics.$post> },
      ) => parseResponse(client.api.frontend.client.metrics.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiFrontendClientRegisterKey() {
  return ['api', '/api/frontend/client/register', 'POST'] as const
}

export function usePostApiFrontendClientRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.frontend.client.register.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.frontend.client.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiFrontendClientRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.frontend.client.register.$post> },
      ) => parseResponse(client.api.frontend.client.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEdgeValidateKey() {
  return ['edge', '/edge/validate', 'POST'] as const
}

export function usePostEdgeValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.edge.validate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.edge.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEdgeValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.edge.validate.$post> }) =>
        parseResponse(client.edge.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEdgeIssueTokenKey() {
  return ['edge', '/edge/issue-token', 'POST'] as const
}

export function usePostEdgeIssueToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.edge)['issue-token']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.edge)['issue-token']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEdgeIssueTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.edge)['issue-token']['$post']> },
      ) => parseResponse(client.edge['issue-token'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
