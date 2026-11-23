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

export function getApiLicenseManagerSitePvtLoginsListPagedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/license-manager/site/pvt/logins/list/paged', keyArgs] as const
}

export function getApiLicenseManagerSitePvtLoginsListPagedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLicenseManagerSitePvtLoginsListPagedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['license-manager'].site.pvt.logins.list.paged.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLicenseManagerSitePvtLoginsListPaged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
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
                    (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
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
                    (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLicenseManagerSitePvtLoginsListPagedQueryKey>
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
              (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLicenseManagerSitePvtLoginsListPagedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLicenseManagerSitePvtLoginsListPagedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['license-manager'].site.pvt.logins.list.paged.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLicenseManagerSitePvtRolesListPagedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/license-manager/site/pvt/roles/list/paged', keyArgs] as const
}

export function getApiLicenseManagerSitePvtRolesListPagedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLicenseManagerSitePvtRolesListPagedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['license-manager'].site.pvt.roles.list.paged.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLicenseManagerSitePvtRolesListPaged<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
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
                    (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
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
                    (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLicenseManagerSitePvtRolesListPagedQueryKey>
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
              (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLicenseManagerSitePvtRolesListPagedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLicenseManagerSitePvtRolesListPagedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['license-manager'].site.pvt.roles.list.paged.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiLicenseManagerUsersMutationKey() {
  return ['api', '/api/license-manager/users', 'POST'] as const
}

export function getPostApiLicenseManagerUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['license-manager']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['license-manager']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLicenseManagerUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['license-manager']['users']['$post']>,
    ) {
      return parseResponse(client.api['license-manager'].users.$post(args, options))
    },
  })
}

export function usePostApiLicenseManagerUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api)['license-manager']['users']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api)['license-manager']['users']['$post']>,
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
  const mutationDefaults = getPostApiLicenseManagerUsersMutationOptions<TError, TOnMutateResult>(
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

export function getApiLicenseManagerUsersUserIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/license-manager/users/:userId', keyArgs] as const
}

export function getApiLicenseManagerUsersUserIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLicenseManagerUsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['license-manager'].users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLicenseManagerUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['license-manager']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['license-manager']['users'][':userId']['$get']>
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
                  ReturnType<(typeof client.api)['license-manager']['users'][':userId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApiLicenseManagerUsersUserIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api)['license-manager']['users'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLicenseManagerUsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLicenseManagerUsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['license-manager'].users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiLicenseManagerUsersUserIdRolesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['roles']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/license-manager/users/:userId/roles', keyArgs] as const
}

export function getApiLicenseManagerUsersUserIdRolesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['roles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiLicenseManagerUsersUserIdRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api['license-manager'].users[':userId'].roles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiLicenseManagerUsersUserIdRoles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['license-manager']['users'][':userId']['roles']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['roles']['$get']>
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
                    (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
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
                    (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiLicenseManagerUsersUserIdRolesQueryKey>
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
            ReturnType<(typeof client.api)['license-manager']['users'][':userId']['roles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLicenseManagerUsersUserIdRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiLicenseManagerUsersUserIdRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api['license-manager'].users[':userId'].roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiLicenseManagerUsersUserIdRolesMutationKey() {
  return ['api', '/api/license-manager/users/:userId/roles', 'PUT'] as const
}

export function getPutApiLicenseManagerUsersUserIdRolesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['license-manager']['users'][':userId']['roles']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['roles']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiLicenseManagerUsersUserIdRolesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['license-manager']['users'][':userId']['roles']['$put']
      >,
    ) {
      return parseResponse(client.api['license-manager'].users[':userId'].roles.$put(args, options))
    },
  })
}

export function usePutApiLicenseManagerUsersUserIdRoles<
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
                      (typeof client.api)['license-manager']['users'][':userId']['roles']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api)['license-manager']['users'][':userId']['roles']['$put']
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
  const mutationDefaults = getPutApiLicenseManagerUsersUserIdRolesMutationOptions<
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

export function getDeleteApiLicenseManagerUsersUserIdRolesRoleIdMutationKey() {
  return ['api', '/api/license-manager/users/:userId/roles/:roleId', 'DELETE'] as const
}

export function getDeleteApiLicenseManagerUsersUserIdRolesRoleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['license-manager']['users'][':userId']['roles'][':roleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api)['license-manager']['users'][':userId']['roles'][':roleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLicenseManagerUsersUserIdRolesRoleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['license-manager']['users'][':userId']['roles'][':roleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['license-manager'].users[':userId'].roles[':roleId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteApiLicenseManagerUsersUserIdRolesRoleId<
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
                      (typeof client.api)['license-manager']['users'][':userId']['roles'][':roleId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.api)['license-manager']['users'][':userId']['roles'][':roleId']['$delete']
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
  const mutationDefaults = getDeleteApiLicenseManagerUsersUserIdRolesRoleIdMutationOptions<
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

export function getApiVlmAccountQueryKey() {
  return ['api', '/api/vlm/account'] as const
}

export function getApiVlmAccountQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiVlmAccountQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.vlm.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiVlmAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.$get>>>
            >
          >,
          ReturnType<typeof getApiVlmAccountQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiVlmAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiVlmAccountQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.vlm.account.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiVlmAccountStoresQueryKey() {
  return ['api', '/api/vlm/account/stores'] as const
}

export function getApiVlmAccountStoresQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApiVlmAccountStoresQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.vlm.account.stores.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVlmAccountStores<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.stores.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.stores.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.stores.$get>>>
            >
          >,
          ReturnType<typeof getApiVlmAccountStoresQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.stores.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVlmAccountStoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApiVlmAccountStoresQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api.vlm.account.stores.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiVlmAppkeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.vlm.appkeys.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/vlm/appkeys', keyArgs] as const
}

export function getApiVlmAppkeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.vlm.appkeys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiVlmAppkeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.vlm.appkeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiVlmAppkeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.vlm.appkeys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$get>>>
            >
          >,
          ReturnType<typeof getApiVlmAppkeysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiVlmAppkeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiVlmAppkeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.vlm.appkeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiVlmAppkeysMutationKey() {
  return ['api', '/api/vlm/appkeys', 'POST'] as const
}

export function getPostApiVlmAppkeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.vlm.appkeys.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiVlmAppkeysMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.vlm.appkeys.$post>) {
      return parseResponse(client.api.vlm.appkeys.$post(args, options))
    },
  })
}

export function usePostApiVlmAppkeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.vlm.appkeys.$post>,
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
  const mutationDefaults = getPostApiVlmAppkeysMutationOptions<TError, TOnMutateResult>(
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

export function getPutApiVlmAppkeysIdMutationKey() {
  return ['api', '/api/vlm/appkeys/:id', 'PUT'] as const
}

export function getPutApiVlmAppkeysIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.vlm.appkeys)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.vlm.appkeys)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiVlmAppkeysIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.vlm.appkeys)[':id']['$put']>) {
      return parseResponse(client.api.vlm.appkeys[':id'].$put(args, options))
    },
  })
}

export function usePutApiVlmAppkeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.vlm.appkeys)[':id']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.vlm.appkeys)[':id']['$put']>,
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
  const mutationDefaults = getPutApiVlmAppkeysIdMutationOptions<TError, TOnMutateResult>(
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
