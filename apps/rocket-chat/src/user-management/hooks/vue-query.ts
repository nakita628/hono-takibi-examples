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

export function getApiKey() {
  return ['api'] as const
}

export function getApiV1PermissionsListAllQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['permissions.listAll']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/permissions.listAll', keyArgs] as const
}

export function getApiV1PermissionsListAllQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['permissions.listAll']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1PermissionsListAllQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['permissions.listAll'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1PermissionsListAll<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['permissions.listAll']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['permissions.listAll']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['permissions.listAll']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['permissions.listAll']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1PermissionsListAllQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['permissions.listAll']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1PermissionsListAllQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1PermissionsListAllQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['permissions.listAll'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1PermissionsUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1PermissionsUpdateMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1PermissionsAddRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1PermissionsAddRoleMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1PermissionsRemoveRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1PermissionsRemoveRoleMutationOptions<
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

export function usePostApiV1RolesCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1RolesCreateMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1RolesUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1RolesUpdateMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1RolesAddUserToRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1RolesAddUserToRoleMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1RolesGetUsersInRoleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/roles.getUsersInRole', keyArgs] as const
}

export function getApiV1RolesGetUsersInRoleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RolesGetUsersInRoleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['roles.getUsersInRole'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RolesGetUsersInRole<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RolesGetUsersInRoleQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInRole']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RolesGetUsersInRoleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RolesGetUsersInRoleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['roles.getUsersInRole'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RolesListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['roles.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/roles.list', keyArgs] as const
}

export function getApiV1RolesListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['roles.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RolesListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['roles.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RolesList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['roles.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RolesListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RolesListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RolesListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['roles.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1RolesSyncQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['roles.sync']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/roles.sync', keyArgs] as const
}

export function getApiV1RolesSyncQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['roles.sync']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RolesSyncQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['roles.sync'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RolesSync<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.sync']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['roles.sync']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.sync']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.sync']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RolesSyncQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['roles.sync']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RolesSyncQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RolesSyncQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['roles.sync'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1RolesDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1RolesDeleteMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1RolesRemoveUserFromRole<
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
                Awaited<ReturnType<(typeof client.api.v1)['roles.removeUserFromRole']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['roles.removeUserFromRole']['$post']>,
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
  const mutationDefaults = getPostApiV1RolesRemoveUserFromRoleMutationOptions<
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

export function getApiV1RolesGetUsersInPublicRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/roles.getUsersInPublicRoles', keyArgs] as const
}

export function getApiV1RolesGetUsersInPublicRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1RolesGetUsersInPublicRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['roles.getUsersInPublicRoles'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1RolesGetUsersInPublicRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1RolesGetUsersInPublicRolesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['roles.getUsersInPublicRoles']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1RolesGetUsersInPublicRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1RolesGetUsersInPublicRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['roles.getUsersInPublicRoles'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersCreate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersCreateMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1UsersRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersRegisterMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1UsersUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersUpdateMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1UsersUpdateOwnBasicInfo<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.updateOwnBasicInfo']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.updateOwnBasicInfo']['$post']>,
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
  const mutationDefaults = getPostApiV1UsersUpdateOwnBasicInfoMutationOptions<
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

export function getApiV1UsersInfoQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.info']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.info', keyArgs] as const
}

export function getApiV1UsersInfoQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.info']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersInfoQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.info'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.info']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.info']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.info']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersInfoQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersInfoQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.info'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersListQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.list']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.list', keyArgs] as const
}

export function getApiV1UsersListQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.list']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersListQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.list'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersList<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.list']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.list']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.list']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.list']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersListQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.list']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersListQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersListQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.list'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersSetAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersSetAvatarMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1UsersGetAvatarQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.getAvatar']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.getAvatar', keyArgs] as const
}

export function getApiV1UsersGetAvatarQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.getAvatar']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersGetAvatarQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.getAvatar'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersGetAvatar<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getAvatar']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.getAvatar']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getAvatar']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getAvatar']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersGetAvatarQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getAvatar']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetAvatarQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersGetAvatarQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.getAvatar'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersResetAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersResetAvatarMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1UsersSetStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersSetStatusMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1UsersGetStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.getStatus']['$get']>>,
) {
  return ['api', '/api/v1/users.getStatus', toValue(args)] as const
}

export function getApiV1UsersGetStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.getStatus']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersGetStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.getStatus'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersGetStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getStatus']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.getStatus']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getStatus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getStatus']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersGetStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getStatus']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersGetStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.getStatus'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersSetActiveStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersSetActiveStatusMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1UsersDeactivateIdle<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersDeactivateIdleMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1UsersGetPresenceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.getPresence']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.getPresence', keyArgs] as const
}

export function getApiV1UsersGetPresenceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.getPresence']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersGetPresenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.getPresence'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersGetPresence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.getPresence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.getPresence']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getPresence']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getPresence']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersGetPresenceQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['users.getPresence']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetPresenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersGetPresenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.getPresence'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersPresenceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.presence']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.presence', keyArgs] as const
}

export function getApiV1UsersPresenceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.presence']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersPresenceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.presence'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersPresence<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.presence']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.presence']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.presence']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.presence']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersPresenceQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.presence']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersPresenceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersPresenceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.presence'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersDeleteMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1UsersDeleteOwnAccount<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersDeleteOwnAccountMutationOptions<
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

export function usePostApiV1UsersCreateToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersCreateTokenMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1UsersGetPreferencesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.getPreferences']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.getPreferences', keyArgs] as const
}

export function getApiV1UsersGetPreferencesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.getPreferences']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersGetPreferencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.getPreferences'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersGetPreferences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.getPreferences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.getPreferences']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getPreferences']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getPreferences']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersGetPreferencesQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['users.getPreferences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetPreferencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersGetPreferencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.getPreferences'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersSetPreferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersSetPreferencesMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1UsersForgotPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersForgotPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1UsersGetUsernameSuggestionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.getUsernameSuggestion', keyArgs] as const
}

export function getApiV1UsersGetUsernameSuggestionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersGetUsernameSuggestionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.getUsernameSuggestion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersGetUsernameSuggestion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersGetUsernameSuggestionQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['users.getUsernameSuggestion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetUsernameSuggestionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersGetUsernameSuggestionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.getUsernameSuggestion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersGetAvatarSuggestionQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.getAvatarSuggestion', keyArgs] as const
}

export function getApiV1UsersGetAvatarSuggestionQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersGetAvatarSuggestionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.getAvatarSuggestion'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersGetAvatarSuggestion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersGetAvatarSuggestionQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['users.getAvatarSuggestion']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetAvatarSuggestionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersGetAvatarSuggestionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.getAvatarSuggestion'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiV1UsersCheckUsernameAvailabilityQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.checkUsernameAvailability', keyArgs] as const
}

export function getApiV1UsersCheckUsernameAvailabilityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersCheckUsernameAvailabilityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.checkUsernameAvailability'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersCheckUsernameAvailability<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiV1UsersCheckUsernameAvailabilityQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['users.checkUsernameAvailability']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersCheckUsernameAvailabilityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersCheckUsernameAvailabilityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.checkUsernameAvailability'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersGeneratePersonalAccessToken<
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
                  ReturnType<(typeof client.api.v1)['users.generatePersonalAccessToken']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.generatePersonalAccessToken']['$post']>,
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
  const mutationDefaults = getPostApiV1UsersGeneratePersonalAccessTokenMutationOptions<
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

export function usePostApiV1UsersRegeneratePersonalAccessToken<
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
                  ReturnType<(typeof client.api.v1)['users.regeneratePersonalAccessToken']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.regeneratePersonalAccessToken']['$post']>,
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
  const mutationDefaults = getPostApiV1UsersRegeneratePersonalAccessTokenMutationOptions<
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

export function getApiV1UsersGetPersonalAccessTokensQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.getPersonalAccessTokens', keyArgs] as const
}

export function getApiV1UsersGetPersonalAccessTokensQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersGetPersonalAccessTokensQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.getPersonalAccessTokens'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersGetPersonalAccessTokens<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersGetPersonalAccessTokensQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['users.getPersonalAccessTokens']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersGetPersonalAccessTokensQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersGetPersonalAccessTokensQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.getPersonalAccessTokens'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersRemovePersonalAccessToken<
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
                  ReturnType<(typeof client.api.v1)['users.removePersonalAccessToken']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.removePersonalAccessToken']['$post']>,
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
  const mutationDefaults = getPostApiV1UsersRemovePersonalAccessTokenMutationOptions<
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

export function getApiV1UsersRequestDataDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.requestDataDownload']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.requestDataDownload', keyArgs] as const
}

export function getApiV1UsersRequestDataDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.requestDataDownload']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersRequestDataDownloadQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.requestDataDownload'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersRequestDataDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.requestDataDownload']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.v1)['users.requestDataDownload']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.requestDataDownload']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.requestDataDownload']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersRequestDataDownloadQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['users.requestDataDownload']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersRequestDataDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersRequestDataDownloadQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.requestDataDownload'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersLogoutOtherClients<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.logoutOtherClients']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.logoutOtherClients']['$post']>,
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
  const mutationDefaults = getPostApiV1UsersLogoutOtherClientsMutationOptions<
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

export function getApiV1UsersAutocompleteQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.autocomplete']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.autocomplete', keyArgs] as const
}

export function getApiV1UsersAutocompleteQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.autocomplete']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersAutocompleteQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.autocomplete'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersAutocomplete<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.autocomplete']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.autocomplete']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.autocomplete']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.autocomplete']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersAutocompleteQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['users.autocomplete']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersAutocompleteQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersAutocompleteQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.autocomplete'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersRemoveOtherTokens<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.removeOtherTokens']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.removeOtherTokens']['$post']>,
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
  const mutationDefaults = getPostApiV1UsersRemoveOtherTokensMutationOptions<
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

export function usePostApiV1UsersResetE2EKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersResetE2EKeyMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1UsersResetTOTP<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersResetTOTPMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1UsersListTeamsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.listTeams']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.listTeams', keyArgs] as const
}

export function getApiV1UsersListTeamsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.listTeams']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersListTeamsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.listTeams'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersListTeams<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.listTeams']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.listTeams']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.listTeams']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.listTeams']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersListTeamsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['users.listTeams']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersListTeamsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersListTeamsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.listTeams'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1ModerationReportUser<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1ModerationReportUserMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1UsersLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersLogoutMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LdapSyncNow<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1LdapSyncNowMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LdapTestConnection<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1LdapTestConnectionMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1LdapTestSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1LdapTestSearchMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1AvatarSubjectQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.avatar)[':subject']['$get']>>,
) {
  return ['api', '/api/v1/avatar/:subject', toValue(args)] as const
}

export function getApiV1AvatarSubjectQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.avatar)[':subject']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1AvatarSubjectQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1.avatar[':subject'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1AvatarSubject<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.avatar)[':subject']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1.avatar)[':subject']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.avatar)[':subject']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1.avatar)[':subject']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1AvatarSubjectQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1.avatar)[':subject']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1AvatarSubjectQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1AvatarSubjectQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1.avatar[':subject'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1UsersSendWelcomeEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersSendWelcomeEmailMutationOptions<
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

export function usePostApiV1SendInvitationEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1SendInvitationEmailMutationOptions<TError, TOnMutateResult>(
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

export function usePostApiV1UsersSendConfirmationEmail<
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
                Awaited<ReturnType<(typeof client.api.v1)['users.sendConfirmationEmail']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.v1)['users.sendConfirmationEmail']['$post']>,
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
  const mutationDefaults = getPostApiV1UsersSendConfirmationEmailMutationOptions<
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

export function usePostApiV1UsersVerifyEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1UsersVerifyEmailMutationOptions<TError, TOnMutateResult>(
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

export function getApiV1UsersListByStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.listByStatus']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/v1/users.listByStatus', keyArgs] as const
}

export function getApiV1UsersListByStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.listByStatus']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiV1UsersListByStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.v1['users.listByStatus'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiV1UsersListByStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.v1)['users.listByStatus']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.v1)['users.listByStatus']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.listByStatus']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.v1)['users.listByStatus']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiV1UsersListByStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.api.v1)['users.listByStatus']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiV1UsersListByStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiV1UsersListByStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.v1['users.listByStatus'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostApiV1SamlParseMetadata<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostApiV1SamlParseMetadataMutationOptions<TError, TOnMutateResult>(
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
