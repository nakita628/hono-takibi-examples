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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1PermissionsListAllQueryKey(
  args: InferRequestType<(typeof client.api.v1)['permissions.listAll']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/permissions.listAll', keyArgs] as const
}

export function getApiV1PermissionsListAllQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['permissions.listAll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['permissions.listAll']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['permissions.listAll']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PermissionsListAllQueryKey>
  >({
    queryKey: getApiV1PermissionsListAllQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['permissions.listAll'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1PermissionsListAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['permissions.listAll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['permissions.listAll']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['permissions.listAll']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1PermissionsListAllQueryKey>
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
      ...getApiV1PermissionsListAllQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1PermissionsUpdateMutationKey() {
  return ['api', '/api/v1/permissions.update', 'POST'] as const
}

export function getPostApiV1PermissionsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['permissions.update']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['permissions.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PermissionsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['permissions.update']['$post']>,
    ) {
      return parseResponse(client.api.v1['permissions.update'].$post(args, options))
    },
  })
}

export function createPostApiV1PermissionsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['permissions.update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['permissions.update']['$post']>,
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
    const mutationDefaults = getPostApiV1PermissionsUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1PermissionsAddRoleMutationKey() {
  return ['api', '/api/v1/permissions.addRole', 'POST'] as const
}

export function getPostApiV1PermissionsAddRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['permissions.addRole']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['permissions.addRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PermissionsAddRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['permissions.addRole']['$post']>,
    ) {
      return parseResponse(client.api.v1['permissions.addRole'].$post(args, options))
    },
  })
}

export function createPostApiV1PermissionsAddRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['permissions.addRole']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['permissions.addRole']['$post']>,
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
    const mutationDefaults = getPostApiV1PermissionsAddRoleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1PermissionsRemoveRoleMutationKey() {
  return ['api', '/api/v1/permissions.removeRole', 'POST'] as const
}

export function getPostApiV1PermissionsRemoveRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['permissions.removeRole']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['permissions.removeRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1PermissionsRemoveRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['permissions.removeRole']['$post']>,
    ) {
      return parseResponse(client.api.v1['permissions.removeRole'].$post(args, options))
    },
  })
}

export function createPostApiV1PermissionsRemoveRole<
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
                Awaited<ReturnType<(typeof client.api.v1)['permissions.removeRole']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['permissions.removeRole']['$post']>,
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
    const mutationDefaults = getPostApiV1PermissionsRemoveRoleMutationOptions<
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

export function getPostApiV1RolesCreateMutationKey() {
  return ['api', '/api/v1/roles.create', 'POST'] as const
}

export function getPostApiV1RolesCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['roles.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RolesCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['roles.create']['$post']>) {
      return parseResponse(client.api.v1['roles.create'].$post(args, options))
    },
  })
}

export function createPostApiV1RolesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['roles.create']['$post']>,
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
    const mutationDefaults = getPostApiV1RolesCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RolesUpdateMutationKey() {
  return ['api', '/api/v1/roles.update', 'POST'] as const
}

export function getPostApiV1RolesUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['roles.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RolesUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['roles.update']['$post']>) {
      return parseResponse(client.api.v1['roles.update'].$post(args, options))
    },
  })
}

export function createPostApiV1RolesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['roles.update']['$post']>,
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
    const mutationDefaults = getPostApiV1RolesUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RolesAddUserToRoleMutationKey() {
  return ['api', '/api/v1/roles.addUserToRole', 'POST'] as const
}

export function getPostApiV1RolesAddUserToRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['roles.addUserToRole']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['roles.addUserToRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RolesAddUserToRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['roles.addUserToRole']['$post']>,
    ) {
      return parseResponse(client.api.v1['roles.addUserToRole'].$post(args, options))
    },
  })
}

export function createPostApiV1RolesAddUserToRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.addUserToRole']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['roles.addUserToRole']['$post']>,
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
    const mutationDefaults = getPostApiV1RolesAddUserToRoleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1RolesGetUsersInRoleQueryKey(
  args: InferRequestType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/roles.getUsersInRole', keyArgs] as const
}

export function getApiV1RolesGetUsersInRoleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RolesGetUsersInRoleQueryKey>
  >({
    queryKey: getApiV1RolesGetUsersInRoleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['roles.getUsersInRole'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1RolesGetUsersInRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RolesGetUsersInRoleQueryKey>
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
      ...getApiV1RolesGetUsersInRoleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1RolesListQueryKey(
  args: InferRequestType<(typeof client.api.v1)['roles.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/roles.list', keyArgs] as const
}

export function getApiV1RolesListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['roles.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RolesListQueryKey>
  >({
    queryKey: getApiV1RolesListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['roles.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1RolesList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['roles.list']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RolesListQueryKey>
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
    return { ...getApiV1RolesListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1RolesSyncQueryKey(
  args: InferRequestType<(typeof client.api.v1)['roles.sync']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/roles.sync', keyArgs] as const
}

export function getApiV1RolesSyncQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.sync']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['roles.sync']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.sync']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RolesSyncQueryKey>
  >({
    queryKey: getApiV1RolesSyncQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['roles.sync'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1RolesSync<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.sync']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['roles.sync']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.sync']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RolesSyncQueryKey>
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
    return { ...getApiV1RolesSyncQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1RolesDeleteMutationKey() {
  return ['api', '/api/v1/roles.delete', 'POST'] as const
}

export function getPostApiV1RolesDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['roles.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RolesDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['roles.delete']['$post']>) {
      return parseResponse(client.api.v1['roles.delete'].$post(args, options))
    },
  })
}

export function createPostApiV1RolesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['roles.delete']['$post']>,
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
    const mutationDefaults = getPostApiV1RolesDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1RolesRemoveUserFromRoleMutationKey() {
  return ['api', '/api/v1/roles.removeUserFromRole', 'POST'] as const
}

export function getPostApiV1RolesRemoveUserFromRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['roles.removeUserFromRole']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['roles.removeUserFromRole']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1RolesRemoveUserFromRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['roles.removeUserFromRole']['$post']>,
    ) {
      return parseResponse(client.api.v1['roles.removeUserFromRole'].$post(args, options))
    },
  })
}

export function createPostApiV1RolesRemoveUserFromRole<
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
                Awaited<ReturnType<(typeof client.api.v1)['roles.removeUserFromRole']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['roles.removeUserFromRole']['$post']>,
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
    const mutationDefaults = getPostApiV1RolesRemoveUserFromRoleMutationOptions<
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

export function getApiV1RolesGetUsersInPublicRolesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/roles.getUsersInPublicRoles', keyArgs] as const
}

export function getApiV1RolesGetUsersInPublicRolesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RolesGetUsersInPublicRolesQueryKey>
  >({
    queryKey: getApiV1RolesGetUsersInPublicRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['roles.getUsersInPublicRoles'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1RolesGetUsersInPublicRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1RolesGetUsersInPublicRolesQueryKey>
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
      ...getApiV1RolesGetUsersInPublicRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UsersCreateMutationKey() {
  return ['api', '/api/v1/users.create', 'POST'] as const
}

export function getPostApiV1UsersCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.create']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.create']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersCreateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.create']['$post']>) {
      return parseResponse(client.api.v1['users.create'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.create']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.create']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersCreateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersRegisterMutationKey() {
  return ['api', '/api/v1/users.register', 'POST'] as const
}

export function getPostApiV1UsersRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.register']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.register']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegisterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.register']['$post']>) {
      return parseResponse(client.api.v1['users.register'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.register']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.register']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersUpdateMutationKey() {
  return ['api', '/api/v1/users.update', 'POST'] as const
}

export function getPostApiV1UsersUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.update']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.update']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUpdateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.update']['$post']>) {
      return parseResponse(client.api.v1['users.update'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.update']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.update']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersUpdateOwnBasicInfoMutationKey() {
  return ['api', '/api/v1/users.updateOwnBasicInfo', 'POST'] as const
}

export function getPostApiV1UsersUpdateOwnBasicInfoMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.updateOwnBasicInfo']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.updateOwnBasicInfo']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersUpdateOwnBasicInfoMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.updateOwnBasicInfo']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.updateOwnBasicInfo'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersUpdateOwnBasicInfo<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.updateOwnBasicInfo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.updateOwnBasicInfo']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersUpdateOwnBasicInfoMutationOptions<
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

export function getApiV1UsersInfoQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.info']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.info', keyArgs] as const
}

export function getApiV1UsersInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersInfoQueryKey>
  >({
    queryKey: getApiV1UsersInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.info'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1UsersInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.info']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersInfoQueryKey>
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
    return { ...getApiV1UsersInfoQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiV1UsersListQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.list']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.list', keyArgs] as const
}

export function getApiV1UsersListQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.list']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersListQueryKey>
  >({
    queryKey: getApiV1UsersListQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.list'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiV1UsersList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.list']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersListQueryKey>
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
    return { ...getApiV1UsersListQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1UsersSetAvatarMutationKey() {
  return ['api', '/api/v1/users.setAvatar', 'POST'] as const
}

export function getPostApiV1UsersSetAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.setAvatar']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.setAvatar']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersSetAvatarMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.setAvatar']['$post']>) {
      return parseResponse(client.api.v1['users.setAvatar'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersSetAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.setAvatar']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.setAvatar']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersSetAvatarMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersGetAvatarQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.getAvatar']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.getAvatar', keyArgs] as const
}

export function getApiV1UsersGetAvatarQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getAvatar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.getAvatar']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getAvatar']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetAvatarQueryKey>
  >({
    queryKey: getApiV1UsersGetAvatarQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.getAvatar'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersGetAvatar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getAvatar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.getAvatar']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getAvatar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersGetAvatarQueryKey>
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
    return { ...getApiV1UsersGetAvatarQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1UsersResetAvatarMutationKey() {
  return ['api', '/api/v1/users.resetAvatar', 'POST'] as const
}

export function getPostApiV1UsersResetAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.resetAvatar']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.resetAvatar']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersResetAvatarMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.resetAvatar']['$post']>) {
      return parseResponse(client.api.v1['users.resetAvatar'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersResetAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.resetAvatar']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.resetAvatar']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersResetAvatarMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersSetStatusMutationKey() {
  return ['api', '/api/v1/users.setStatus', 'POST'] as const
}

export function getPostApiV1UsersSetStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.setStatus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.setStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersSetStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.setStatus']['$post']>) {
      return parseResponse(client.api.v1['users.setStatus'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersSetStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.setStatus']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.setStatus']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersSetStatusMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersGetStatusQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.getStatus']['$get']>,
) {
  return ['api', '/api/v1/users.getStatus', args] as const
}

export function getApiV1UsersGetStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getStatus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.getStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getStatus']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetStatusQueryKey>
  >({
    queryKey: getApiV1UsersGetStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.getStatus'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersGetStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getStatus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.getStatus']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getStatus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersGetStatusQueryKey>
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
    return { ...getApiV1UsersGetStatusQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1UsersSetActiveStatusMutationKey() {
  return ['api', '/api/v1/users.setActiveStatus', 'POST'] as const
}

export function getPostApiV1UsersSetActiveStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.setActiveStatus']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.setActiveStatus']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersSetActiveStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.setActiveStatus']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.setActiveStatus'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersSetActiveStatus<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.setActiveStatus']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.setActiveStatus']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersSetActiveStatusMutationOptions<
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

export function getPostApiV1UsersDeactivateIdleMutationKey() {
  return ['api', '/api/v1/users.deactivateIdle', 'POST'] as const
}

export function getPostApiV1UsersDeactivateIdleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.deactivateIdle']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.deactivateIdle']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersDeactivateIdleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.deactivateIdle']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.deactivateIdle'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersDeactivateIdle<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.deactivateIdle']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.deactivateIdle']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersDeactivateIdleMutationOptions<
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

export function getApiV1UsersGetPresenceQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.getPresence']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.getPresence', keyArgs] as const
}

export function getApiV1UsersGetPresenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getPresence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.getPresence']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.getPresence']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetPresenceQueryKey>
  >({
    queryKey: getApiV1UsersGetPresenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.getPresence'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersGetPresence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getPresence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.getPresence']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getPresence']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersGetPresenceQueryKey>
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
      ...getApiV1UsersGetPresenceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1UsersPresenceQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.presence']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.presence', keyArgs] as const
}

export function getApiV1UsersPresenceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.presence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.presence']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.presence']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersPresenceQueryKey>
  >({
    queryKey: getApiV1UsersPresenceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.presence'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersPresence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.presence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.presence']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.presence']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersPresenceQueryKey>
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
    return { ...getApiV1UsersPresenceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1UsersDeleteMutationKey() {
  return ['api', '/api/v1/users.delete', 'POST'] as const
}

export function getPostApiV1UsersDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.delete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.delete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersDeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.delete']['$post']>) {
      return parseResponse(client.api.v1['users.delete'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.delete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.delete']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersDeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersDeleteOwnAccountMutationKey() {
  return ['api', '/api/v1/users.deleteOwnAccount', 'POST'] as const
}

export function getPostApiV1UsersDeleteOwnAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.deleteOwnAccount']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.deleteOwnAccount']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersDeleteOwnAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.deleteOwnAccount']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.deleteOwnAccount'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersDeleteOwnAccount<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.deleteOwnAccount']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.deleteOwnAccount']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersDeleteOwnAccountMutationOptions<
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

export function getPostApiV1UsersCreateTokenMutationKey() {
  return ['api', '/api/v1/users.createToken', 'POST'] as const
}

export function getPostApiV1UsersCreateTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.createToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.createToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersCreateTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.createToken']['$post']>) {
      return parseResponse(client.api.v1['users.createToken'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersCreateToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.createToken']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.createToken']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersCreateTokenMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersGetPreferencesQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.getPreferences']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.getPreferences', keyArgs] as const
}

export function getApiV1UsersGetPreferencesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.getPreferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.getPreferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.getPreferences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetPreferencesQueryKey>
  >({
    queryKey: getApiV1UsersGetPreferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.getPreferences'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersGetPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.getPreferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.getPreferences']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getPreferences']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersGetPreferencesQueryKey>
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
      ...getApiV1UsersGetPreferencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UsersSetPreferencesMutationKey() {
  return ['api', '/api/v1/users.setPreferences', 'POST'] as const
}

export function getPostApiV1UsersSetPreferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.setPreferences']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.setPreferences']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersSetPreferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.setPreferences']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.setPreferences'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersSetPreferences<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.setPreferences']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.setPreferences']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersSetPreferencesMutationOptions<
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

export function getPostApiV1UsersForgotPasswordMutationKey() {
  return ['api', '/api/v1/users.forgotPassword', 'POST'] as const
}

export function getPostApiV1UsersForgotPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.forgotPassword']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.forgotPassword']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersForgotPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.forgotPassword']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.forgotPassword'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersForgotPassword<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.forgotPassword']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.forgotPassword']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersForgotPasswordMutationOptions<
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

export function getApiV1UsersGetUsernameSuggestionQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.getUsernameSuggestion', keyArgs] as const
}

export function getApiV1UsersGetUsernameSuggestionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetUsernameSuggestionQueryKey>
  >({
    queryKey: getApiV1UsersGetUsernameSuggestionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.getUsernameSuggestion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersGetUsernameSuggestion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersGetUsernameSuggestionQueryKey>
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
      ...getApiV1UsersGetUsernameSuggestionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1UsersGetAvatarSuggestionQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.getAvatarSuggestion', keyArgs] as const
}

export function getApiV1UsersGetAvatarSuggestionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetAvatarSuggestionQueryKey>
  >({
    queryKey: getApiV1UsersGetAvatarSuggestionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.getAvatarSuggestion'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersGetAvatarSuggestion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersGetAvatarSuggestionQueryKey>
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
      ...getApiV1UsersGetAvatarSuggestionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiV1UsersCheckUsernameAvailabilityQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.checkUsernameAvailability', keyArgs] as const
}

export function getApiV1UsersCheckUsernameAvailabilityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersCheckUsernameAvailabilityQueryKey>
  >({
    queryKey: getApiV1UsersCheckUsernameAvailabilityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.checkUsernameAvailability'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersCheckUsernameAvailability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersCheckUsernameAvailabilityQueryKey>
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
      ...getApiV1UsersCheckUsernameAvailabilityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UsersGeneratePersonalAccessTokenMutationKey() {
  return ['api', '/api/v1/users.generatePersonalAccessToken', 'POST'] as const
}

export function getPostApiV1UsersGeneratePersonalAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.generatePersonalAccessToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.generatePersonalAccessToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersGeneratePersonalAccessTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.generatePersonalAccessToken']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.generatePersonalAccessToken'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersGeneratePersonalAccessToken<
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
                  ReturnType<(typeof client.api.v1)['users.generatePersonalAccessToken']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.generatePersonalAccessToken']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersGeneratePersonalAccessTokenMutationOptions<
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

export function getPostApiV1UsersRegeneratePersonalAccessTokenMutationKey() {
  return ['api', '/api/v1/users.regeneratePersonalAccessToken', 'POST'] as const
}

export function getPostApiV1UsersRegeneratePersonalAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1)['users.regeneratePersonalAccessToken']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.regeneratePersonalAccessToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRegeneratePersonalAccessTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.v1)['users.regeneratePersonalAccessToken']['$post']
      >,
    ) {
      return parseResponse(
        client.api.v1['users.regeneratePersonalAccessToken'].$post(args, options),
      )
    },
  })
}

export function createPostApiV1UsersRegeneratePersonalAccessToken<
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
                  ReturnType<(typeof client.api.v1)['users.regeneratePersonalAccessToken']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.regeneratePersonalAccessToken']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersRegeneratePersonalAccessTokenMutationOptions<
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

export function getApiV1UsersGetPersonalAccessTokensQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.getPersonalAccessTokens', keyArgs] as const
}

export function getApiV1UsersGetPersonalAccessTokensQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetPersonalAccessTokensQueryKey>
  >({
    queryKey: getApiV1UsersGetPersonalAccessTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.getPersonalAccessTokens'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersGetPersonalAccessTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersGetPersonalAccessTokensQueryKey>
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
      ...getApiV1UsersGetPersonalAccessTokensQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UsersRemovePersonalAccessTokenMutationKey() {
  return ['api', '/api/v1/users.removePersonalAccessToken', 'POST'] as const
}

export function getPostApiV1UsersRemovePersonalAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.removePersonalAccessToken']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.removePersonalAccessToken']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRemovePersonalAccessTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.removePersonalAccessToken']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.removePersonalAccessToken'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersRemovePersonalAccessToken<
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
                  ReturnType<(typeof client.api.v1)['users.removePersonalAccessToken']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.removePersonalAccessToken']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersRemovePersonalAccessTokenMutationOptions<
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

export function getApiV1UsersRequestDataDownloadQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.requestDataDownload']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.requestDataDownload', keyArgs] as const
}

export function getApiV1UsersRequestDataDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.requestDataDownload']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.requestDataDownload']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.requestDataDownload']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersRequestDataDownloadQueryKey>
  >({
    queryKey: getApiV1UsersRequestDataDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.requestDataDownload'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersRequestDataDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.requestDataDownload']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.requestDataDownload']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.requestDataDownload']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersRequestDataDownloadQueryKey>
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
      ...getApiV1UsersRequestDataDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UsersLogoutOtherClientsMutationKey() {
  return ['api', '/api/v1/users.logoutOtherClients', 'POST'] as const
}

export function getPostApiV1UsersLogoutOtherClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.logoutOtherClients']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.logoutOtherClients']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersLogoutOtherClientsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.logoutOtherClients']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.logoutOtherClients'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersLogoutOtherClients<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.logoutOtherClients']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.logoutOtherClients']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersLogoutOtherClientsMutationOptions<
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

export function getApiV1UsersAutocompleteQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.autocomplete']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.autocomplete', keyArgs] as const
}

export function getApiV1UsersAutocompleteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.autocomplete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.autocomplete']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.autocomplete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersAutocompleteQueryKey>
  >({
    queryKey: getApiV1UsersAutocompleteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.autocomplete'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.autocomplete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.autocomplete']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.autocomplete']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersAutocompleteQueryKey>
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
      ...getApiV1UsersAutocompleteQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1UsersRemoveOtherTokensMutationKey() {
  return ['api', '/api/v1/users.removeOtherTokens', 'POST'] as const
}

export function getPostApiV1UsersRemoveOtherTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.removeOtherTokens']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.removeOtherTokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersRemoveOtherTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.removeOtherTokens']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.removeOtherTokens'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersRemoveOtherTokens<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.removeOtherTokens']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.removeOtherTokens']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersRemoveOtherTokensMutationOptions<
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

export function getPostApiV1UsersResetE2EKeyMutationKey() {
  return ['api', '/api/v1/users.resetE2EKey', 'POST'] as const
}

export function getPostApiV1UsersResetE2EKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.resetE2EKey']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.resetE2EKey']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersResetE2EKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.resetE2EKey']['$post']>) {
      return parseResponse(client.api.v1['users.resetE2EKey'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersResetE2EKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.resetE2EKey']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.resetE2EKey']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersResetE2EKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1UsersResetTOTPMutationKey() {
  return ['api', '/api/v1/users.resetTOTP', 'POST'] as const
}

export function getPostApiV1UsersResetTOTPMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.resetTOTP']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.resetTOTP']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersResetTOTPMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.resetTOTP']['$post']>) {
      return parseResponse(client.api.v1['users.resetTOTP'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersResetTOTP<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.resetTOTP']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.resetTOTP']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersResetTOTPMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersListTeamsQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.listTeams']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.listTeams', keyArgs] as const
}

export function getApiV1UsersListTeamsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.listTeams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.listTeams']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.listTeams']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersListTeamsQueryKey>
  >({
    queryKey: getApiV1UsersListTeamsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.listTeams'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersListTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.listTeams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.listTeams']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.listTeams']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersListTeamsQueryKey>
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
    return { ...getApiV1UsersListTeamsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1ModerationReportUserMutationKey() {
  return ['api', '/api/v1/moderation.reportUser', 'POST'] as const
}

export function getPostApiV1ModerationReportUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['moderation.reportUser']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['moderation.reportUser']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1ModerationReportUserMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['moderation.reportUser']['$post']>,
    ) {
      return parseResponse(client.api.v1['moderation.reportUser'].$post(args, options))
    },
  })
}

export function createPostApiV1ModerationReportUser<
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
                Awaited<ReturnType<(typeof client.api.v1)['moderation.reportUser']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['moderation.reportUser']['$post']>,
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
    const mutationDefaults = getPostApiV1ModerationReportUserMutationOptions<
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

export function getPostApiV1UsersLogoutMutationKey() {
  return ['api', '/api/v1/users.logout', 'POST'] as const
}

export function getPostApiV1UsersLogoutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.logout']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.logout']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersLogoutMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.logout']['$post']>) {
      return parseResponse(client.api.v1['users.logout'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.logout']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.logout']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersLogoutMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1LdapSyncNowMutationKey() {
  return ['api', '/api/v1/ldap.syncNow', 'POST'] as const
}

export function getPostApiV1LdapSyncNowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['ldap.syncNow']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['ldap.syncNow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LdapSyncNowMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['ldap.syncNow']['$post']>) {
      return parseResponse(client.api.v1['ldap.syncNow'].$post(args, options))
    },
  })
}

export function createPostApiV1LdapSyncNow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['ldap.syncNow']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['ldap.syncNow']['$post']>,
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
    const mutationDefaults = getPostApiV1LdapSyncNowMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1LdapTestConnectionMutationKey() {
  return ['api', '/api/v1/ldap.testConnection', 'POST'] as const
}

export function getPostApiV1LdapTestConnectionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['ldap.testConnection']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['ldap.testConnection']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LdapTestConnectionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['ldap.testConnection']['$post']>,
    ) {
      return parseResponse(client.api.v1['ldap.testConnection'].$post(args, options))
    },
  })
}

export function createPostApiV1LdapTestConnection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['ldap.testConnection']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['ldap.testConnection']['$post']>,
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
    const mutationDefaults = getPostApiV1LdapTestConnectionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiV1LdapTestSearchMutationKey() {
  return ['api', '/api/v1/ldap.testSearch', 'POST'] as const
}

export function getPostApiV1LdapTestSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['ldap.testSearch']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['ldap.testSearch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1LdapTestSearchMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['ldap.testSearch']['$post']>) {
      return parseResponse(client.api.v1['ldap.testSearch'].$post(args, options))
    },
  })
}

export function createPostApiV1LdapTestSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['ldap.testSearch']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['ldap.testSearch']['$post']>,
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
    const mutationDefaults = getPostApiV1LdapTestSearchMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1AvatarSubjectQueryKey(
  args: InferRequestType<(typeof client.api.v1.avatar)[':subject']['$get']>,
) {
  return ['api', '/api/v1/avatar/:subject', args] as const
}

export function getApiV1AvatarSubjectQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.avatar)[':subject']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1.avatar)[':subject']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.avatar)[':subject']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AvatarSubjectQueryKey>
  >({
    queryKey: getApiV1AvatarSubjectQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1.avatar[':subject'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1AvatarSubject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.avatar)[':subject']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1.avatar)[':subject']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.avatar)[':subject']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1AvatarSubjectQueryKey>
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
    return { ...getApiV1AvatarSubjectQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiV1UsersSendWelcomeEmailMutationKey() {
  return ['api', '/api/v1/users.sendWelcomeEmail', 'POST'] as const
}

export function getPostApiV1UsersSendWelcomeEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.sendWelcomeEmail']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.sendWelcomeEmail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersSendWelcomeEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.sendWelcomeEmail']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.sendWelcomeEmail'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersSendWelcomeEmail<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.sendWelcomeEmail']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.sendWelcomeEmail']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersSendWelcomeEmailMutationOptions<
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

export function getPostApiV1SendInvitationEmailMutationKey() {
  return ['api', '/api/v1/sendInvitationEmail', 'POST'] as const
}

export function getPostApiV1SendInvitationEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.sendInvitationEmail.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.v1.sendInvitationEmail.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SendInvitationEmailMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.v1.sendInvitationEmail.$post>) {
      return parseResponse(client.api.v1.sendInvitationEmail.$post(args, options))
    },
  })
}

export function createPostApiV1SendInvitationEmail<
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
                Awaited<ReturnType<typeof client.api.v1.sendInvitationEmail.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.v1.sendInvitationEmail.$post>,
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
    const mutationDefaults = getPostApiV1SendInvitationEmailMutationOptions<
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

export function getPostApiV1UsersSendConfirmationEmailMutationKey() {
  return ['api', '/api/v1/users.sendConfirmationEmail', 'POST'] as const
}

export function getPostApiV1UsersSendConfirmationEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.sendConfirmationEmail']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.sendConfirmationEmail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersSendConfirmationEmailMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['users.sendConfirmationEmail']['$post']>,
    ) {
      return parseResponse(client.api.v1['users.sendConfirmationEmail'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersSendConfirmationEmail<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.sendConfirmationEmail']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.sendConfirmationEmail']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersSendConfirmationEmailMutationOptions<
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

export function getPostApiV1UsersVerifyEmailMutationKey() {
  return ['api', '/api/v1/users.verifyEmail', 'POST'] as const
}

export function getPostApiV1UsersVerifyEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.verifyEmail']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['users.verifyEmail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1UsersVerifyEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.v1)['users.verifyEmail']['$post']>) {
      return parseResponse(client.api.v1['users.verifyEmail'].$post(args, options))
    },
  })
}

export function createPostApiV1UsersVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.verifyEmail']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.verifyEmail']['$post']>,
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
    const mutationDefaults = getPostApiV1UsersVerifyEmailMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiV1UsersListByStatusQueryKey(
  args: InferRequestType<(typeof client.api.v1)['users.listByStatus']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/v1/users.listByStatus', keyArgs] as const
}

export function getApiV1UsersListByStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.listByStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.v1)['users.listByStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['users.listByStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersListByStatusQueryKey>
  >({
    queryKey: getApiV1UsersListByStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.v1['users.listByStatus'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiV1UsersListByStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.listByStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.v1)['users.listByStatus']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.listByStatus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getApiV1UsersListByStatusQueryKey>
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
      ...getApiV1UsersListByStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostApiV1SamlParseMetadataMutationKey() {
  return ['api', '/api/v1/saml.parseMetadata', 'POST'] as const
}

export function getPostApiV1SamlParseMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1)['saml.parseMetadata']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.v1)['saml.parseMetadata']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiV1SamlParseMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.v1)['saml.parseMetadata']['$post']>,
    ) {
      return parseResponse(client.api.v1['saml.parseMetadata'].$post(args, options))
    },
  })
}

export function createPostApiV1SamlParseMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['saml.parseMetadata']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['saml.parseMetadata']['$post']>,
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
    const mutationDefaults = getPostApiV1SamlParseMetadataMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
