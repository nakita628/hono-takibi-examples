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

export function getApiKey() {
  return ['api'] as const
}

export function getApiLicenseManagerSitePvtLoginsListPagedQueryKey(
  args: InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/license-manager/site/pvt/logins/list/paged', keyArgs] as const
}

export function getApiLicenseManagerSitePvtLoginsListPagedQueryOptions<
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
  args: InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLicenseManagerSitePvtLoginsListPagedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['license-manager'].site.pvt.logins.list.paged.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLicenseManagerSitePvtLoginsListPaged<
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
  args: () => InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['logins']['list']['paged']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiLicenseManagerSitePvtLoginsListPagedQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiLicenseManagerSitePvtRolesListPagedQueryKey(
  args: InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/license-manager/site/pvt/roles/list/paged', keyArgs] as const
}

export function getApiLicenseManagerSitePvtRolesListPagedQueryOptions<
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
  args: InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLicenseManagerSitePvtRolesListPagedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['license-manager'].site.pvt.roles.list.paged.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLicenseManagerSitePvtRolesListPaged<
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
  args: () => InferRequestType<
    (typeof client.api)['license-manager']['site']['pvt']['roles']['list']['paged']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiLicenseManagerSitePvtRolesListPagedQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApiLicenseManagerUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLicenseManagerUsersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLicenseManagerUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/license-manager/users/:userId', keyArgs] as const
}

export function getApiLicenseManagerUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['license-manager']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLicenseManagerUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['license-manager'].users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLicenseManagerUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['license-manager']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['license-manager']['users'][':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiLicenseManagerUsersUserIdQueryKey>
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
      ...getApiLicenseManagerUsersUserIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiLicenseManagerUsersUserIdRolesQueryKey(
  args: InferRequestType<
    (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/license-manager/users/:userId/roles', keyArgs] as const
}

export function getApiLicenseManagerUsersUserIdRolesQueryOptions<
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
  args: InferRequestType<
    (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiLicenseManagerUsersUserIdRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['license-manager'].users[':userId'].roles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLicenseManagerUsersUserIdRoles<
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
  args: () => InferRequestType<
    (typeof client.api)['license-manager']['users'][':userId']['roles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getApiLicenseManagerUsersUserIdRolesQueryKey>
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
      ...getApiLicenseManagerUsersUserIdRolesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutApiLicenseManagerUsersUserIdRoles<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiLicenseManagerUsersUserIdRolesMutationOptions<
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

export function injectDeleteApiLicenseManagerUsersUserIdRolesRoleId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiLicenseManagerUsersUserIdRolesRoleIdMutationOptions<
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

export function getApiVlmAccountQueryKey() {
  return ['api', '/api/vlm/account'] as const
}

export function getApiVlmAccountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiVlmAccountQueryKey>
  >({
    queryKey: getApiVlmAccountQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.vlm.account.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiVlmAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiVlmAccountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiVlmAccountQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiVlmAccountStoresQueryKey() {
  return ['api', '/api/vlm/account/stores'] as const
}

export function getApiVlmAccountStoresQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.stores.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.stores.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVlmAccountStoresQueryKey>
  >({
    queryKey: getApiVlmAccountStoresQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.vlm.account.stores.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiVlmAccountStores<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.stores.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.account.stores.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiVlmAccountStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiVlmAccountStoresQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiVlmAppkeysQueryKey(
  args: InferRequestType<typeof client.api.vlm.appkeys.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/vlm/appkeys', keyArgs] as const
}

export function getApiVlmAppkeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.vlm.appkeys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiVlmAppkeysQueryKey>
  >({
    queryKey: getApiVlmAppkeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.vlm.appkeys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiVlmAppkeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.vlm.appkeys.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiVlmAppkeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiVlmAppkeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiVlmAppkeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.vlm.appkeys.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.vlm.appkeys.$post>,
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
    const mutationDefaults = getPostApiVlmAppkeysMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutApiVlmAppkeysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiVlmAppkeysIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
