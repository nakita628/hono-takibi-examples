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

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getContactsKey() {
  return ['contacts'] as const
}

export function getDevicesKey() {
  return ['devices'] as const
}

export function getFacilitiesKey() {
  return ['facilities'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getImplementationKey() {
  return ['implementation'] as const
}

export function getIpsKey() {
  return ['ips'] as const
}

export function getMacsKey() {
  return ['macs'] as const
}

export function getMemberJoiningRulesKey() {
  return ['member-joining-rules'] as const
}

export function getMetroAreaNetworksKey() {
  return ['metro-area-networks'] as const
}

export function getMetroAreasKey() {
  return ['metro-areas'] as const
}

export function getNetworkFeatureConfigsKey() {
  return ['network-feature-configs'] as const
}

export function getNetworkFeaturesKey() {
  return ['network-features'] as const
}

export function getNetworkServiceConfigsKey() {
  return ['network-service-configs'] as const
}

export function getNetworkServicesKey() {
  return ['network-services'] as const
}

export function getPopsKey() {
  return ['pops'] as const
}

export function getPortsKey() {
  return ['ports'] as const
}

export function getProductOfferingsKey() {
  return ['product-offerings'] as const
}

export function getRoleAssignmentsKey() {
  return ['role-assignments'] as const
}

export function getRolesKey() {
  return ['roles'] as const
}

export function getAccountsQueryKey(args: InferRequestType<typeof client.accounts.$get>) {
  return ['accounts', '/accounts', args] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostAccountsMutationKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function getPostAccountsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    InferRequestType<typeof client.accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.accounts.$post>) {
      return parseResponse(client.accounts.$post(args, options))
    },
  })
}

export function injectPostAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.accounts.$post>,
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
    const mutationDefaults = getPostAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountsIdQueryKey(
  args: InferRequestType<(typeof client.accounts)[':id']['$get']>,
) {
  return ['accounts', '/accounts/:id', args] as const
}

export function getAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.accounts)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsIdQueryKey>
  >({
    queryKey: getAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccountsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutAccountsIdMutationKey() {
  return ['accounts', '/accounts/:id', 'PUT'] as const
}

export function getPutAccountsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':id']['$put']>) {
      return parseResponse(client.accounts[':id'].$put(args, options))
    },
  })
}

export function injectPutAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':id']['$put']>,
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
    const mutationDefaults = getPutAccountsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteAccountsIdMutationKey() {
  return ['accounts', '/accounts/:id', 'DELETE'] as const
}

export function getDeleteAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':id']['$delete']>) {
      return parseResponse(client.accounts[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchAccountsIdMutationKey() {
  return ['accounts', '/accounts/:id', 'PATCH'] as const
}

export function getPatchAccountsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.accounts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.accounts)[':id']['$patch']>) {
      return parseResponse(client.accounts[':id'].$patch(args, options))
    },
  })
}

export function injectPatchAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.accounts)[':id']['$patch']>,
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
    const mutationDefaults = getPatchAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthRefreshMutationKey() {
  return ['auth', '/auth/refresh', 'POST'] as const
}

export function getPostAuthRefreshMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.auth.refresh.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthRefreshMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.refresh.$post>) {
      return parseResponse(client.auth.refresh.$post(args, options))
    },
  })
}

export function injectPostAuthRefresh<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.refresh.$post>,
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
    const mutationDefaults = getPostAuthRefreshMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostAuthTokenMutationKey() {
  return ['auth', '/auth/token', 'POST'] as const
}

export function getPostAuthTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>>,
    TError,
    InferRequestType<typeof client.auth.token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAuthTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.auth.token.$post>) {
      return parseResponse(client.auth.token.$post(args, options))
    },
  })
}

export function injectPostAuthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.auth.token.$post>,
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
    const mutationDefaults = getPostAuthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getConnectionsQueryKey(args: InferRequestType<typeof client.connections.$get>) {
  return ['connections', '/connections', args] as const
}

export function getConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConnectionsQueryKey>
  >({
    queryKey: getConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.connections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getConnectionsIdQueryKey(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
) {
  return ['connections', '/connections/:id', args] as const
}

export function getConnectionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConnectionsIdQueryKey>
  >({
    queryKey: getConnectionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.connections[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectConnectionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getConnectionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getConnectionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getContactsQueryKey(args: InferRequestType<typeof client.contacts.$get>) {
  return ['contacts', '/contacts', args] as const
}

export function getContactsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.contacts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getContactsQueryKey>
  >({
    queryKey: getContactsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectContacts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.contacts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getContactsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostContactsMutationKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function getPostContactsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    InferRequestType<typeof client.contacts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostContactsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.contacts.$post>) {
      return parseResponse(client.contacts.$post(args, options))
    },
  })
}

export function injectPostContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.contacts.$post>,
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
    const mutationDefaults = getPostContactsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getContactsIdQueryKey(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
) {
  return ['contacts', '/contacts/:id', args] as const
}

export function getContactsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.contacts)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getContactsIdQueryKey>
  >({
    queryKey: getContactsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.contacts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectContactsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getContactsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getContactsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutContactsIdMutationKey() {
  return ['contacts', '/contacts/:id', 'PUT'] as const
}

export function getPutContactsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':id']['$put']>) {
      return parseResponse(client.contacts[':id'].$put(args, options))
    },
  })
}

export function injectPutContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':id']['$put']>,
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
    const mutationDefaults = getPutContactsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteContactsIdMutationKey() {
  return ['contacts', '/contacts/:id', 'DELETE'] as const
}

export function getDeleteContactsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':id']['$delete']>) {
      return parseResponse(client.contacts[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteContactsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchContactsIdMutationKey() {
  return ['contacts', '/contacts/:id', 'PATCH'] as const
}

export function getPatchContactsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.contacts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchContactsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.contacts)[':id']['$patch']>) {
      return parseResponse(client.contacts[':id'].$patch(args, options))
    },
  })
}

export function injectPatchContactsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.contacts)[':id']['$patch']>,
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
    const mutationDefaults = getPatchContactsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDevicesQueryKey(args: InferRequestType<typeof client.devices.$get>) {
  return ['devices', '/devices', args] as const
}

export function getDevicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.devices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDevicesQueryKey>
  >({
    queryKey: getDevicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDevices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.devices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getDevicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDevicesIdQueryKey(
  args: InferRequestType<(typeof client.devices)[':id']['$get']>,
) {
  return ['devices', '/devices/:id', args] as const
}

export function getDevicesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.devices)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDevicesIdQueryKey>
  >({
    queryKey: getDevicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.devices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDevicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.devices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDevicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDevicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFacilitiesQueryKey(args: InferRequestType<typeof client.facilities.$get>) {
  return ['facilities', '/facilities', args] as const
}

export function getFacilitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.facilities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getFacilitiesQueryKey>
  >({
    queryKey: getFacilitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.facilities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFacilities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.facilities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getFacilitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFacilitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getFacilitiesIdQueryKey(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
) {
  return ['facilities', '/facilities/:id', args] as const
}

export function getFacilitiesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFacilitiesIdQueryKey>
  >({
    queryKey: getFacilitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.facilities[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectFacilitiesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.facilities)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getFacilitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getFacilitiesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
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

export function getImplementationQueryKey() {
  return ['implementation', '/implementation'] as const
}

export function getImplementationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.implementation.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.implementation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImplementationQueryKey>
  >({
    queryKey: getImplementationQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.implementation.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectImplementation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.implementation.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.implementation.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getImplementationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getImplementationQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getIpsQueryKey(args: InferRequestType<typeof client.ips.$get>) {
  return ['ips', '/ips', args] as const
}

export function getIpsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIpsQueryKey>
  >({
    queryKey: getIpsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIps<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getIpsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostIpsMutationKey() {
  return ['ips', '/ips', 'POST'] as const
}

export function getPostIpsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$post>>>>>,
    TError,
    InferRequestType<typeof client.ips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostIpsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.ips.$post>) {
      return parseResponse(client.ips.$post(args, options))
    },
  })
}

export function injectPostIps<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$post>>>>>,
        TError,
        InferRequestType<typeof client.ips.$post>,
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
    const mutationDefaults = getPostIpsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getIpsIdQueryKey(args: InferRequestType<(typeof client.ips)[':id']['$get']>) {
  return ['ips', '/ips/:id', args] as const
}

export function getIpsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.ips)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getIpsIdQueryKey>
  >({
    queryKey: getIpsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ips[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectIpsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ips)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getIpsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getIpsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutIpsIdMutationKey() {
  return ['ips', '/ips/:id', 'PUT'] as const
}

export function getPutIpsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.ips)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)[':id']['$put']>) {
      return parseResponse(client.ips[':id'].$put(args, options))
    },
  })
}

export function injectPutIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$put']>>>>
        >,
        TError,
        InferRequestType<(typeof client.ips)[':id']['$put']>,
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
    const mutationDefaults = getPutIpsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchIpsIdMutationKey() {
  return ['ips', '/ips/:id', 'PATCH'] as const
}

export function getPatchIpsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.ips)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchIpsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.ips)[':id']['$patch']>) {
      return parseResponse(client.ips[':id'].$patch(args, options))
    },
  })
}

export function injectPatchIpsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.ips)[':id']['$patch']>,
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
    const mutationDefaults = getPatchIpsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMacsQueryKey(args: InferRequestType<typeof client.macs.$get>) {
  return ['macs', '/macs', args] as const
}

export function getMacsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.macs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMacsQueryKey>
  >({
    queryKey: getMacsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.macs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMacs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.macs.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMacsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMacsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostMacsMutationKey() {
  return ['macs', '/macs', 'POST'] as const
}

export function getPostMacsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$post>>>>>,
    TError,
    InferRequestType<typeof client.macs.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMacsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.macs.$post>) {
      return parseResponse(client.macs.$post(args, options))
    },
  })
}

export function injectPostMacs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$post>>>>>,
        TError,
        InferRequestType<typeof client.macs.$post>,
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
    const mutationDefaults = getPostMacsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMacsIdQueryKey(args: InferRequestType<(typeof client.macs)[':id']['$get']>) {
  return ['macs', '/macs/:id', args] as const
}

export function getMacsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.macs)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMacsIdQueryKey>
  >({
    queryKey: getMacsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.macs[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMacsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.macs)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMacsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMacsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteMacsIdMutationKey() {
  return ['macs', '/macs/:id', 'DELETE'] as const
}

export function getDeleteMacsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.macs)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMacsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.macs)[':id']['$delete']>) {
      return parseResponse(client.macs[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteMacsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.macs)[':id']['$delete']>,
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
    const mutationDefaults = getDeleteMacsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMemberJoiningRulesQueryKey(
  args: InferRequestType<(typeof client)['member-joining-rules']['$get']>,
) {
  return ['member-joining-rules', '/member-joining-rules', args] as const
}

export function getMemberJoiningRulesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['member-joining-rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['member-joining-rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['member-joining-rules']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberJoiningRulesQueryKey>
  >({
    queryKey: getMemberJoiningRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['member-joining-rules'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMemberJoiningRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['member-joining-rules']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['member-joining-rules']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['member-joining-rules']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMemberJoiningRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMemberJoiningRulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostMemberJoiningRulesMutationKey() {
  return ['member-joining-rules', '/member-joining-rules', 'POST'] as const
}

export function getPostMemberJoiningRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['member-joining-rules']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['member-joining-rules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMemberJoiningRulesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['member-joining-rules']['$post']>) {
      return parseResponse(client['member-joining-rules'].$post(args, options))
    },
  })
}

export function injectPostMemberJoiningRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['member-joining-rules']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['member-joining-rules']['$post']>,
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
    const mutationDefaults = getPostMemberJoiningRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMemberJoiningRulesIdQueryKey(
  args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$get']>,
) {
  return ['member-joining-rules', '/member-joining-rules/:id', args] as const
}

export function getMemberJoiningRulesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMemberJoiningRulesIdQueryKey>
  >({
    queryKey: getMemberJoiningRulesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['member-joining-rules'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMemberJoiningRulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['member-joining-rules'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMemberJoiningRulesIdQueryKey>
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
      ...getMemberJoiningRulesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutMemberJoiningRulesIdMutationKey() {
  return ['member-joining-rules', '/member-joining-rules/:id', 'PUT'] as const
}

export function getPutMemberJoiningRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['member-joining-rules'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutMemberJoiningRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$put']>,
    ) {
      return parseResponse(client['member-joining-rules'][':id'].$put(args, options))
    },
  })
}

export function injectPutMemberJoiningRulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['member-joining-rules'][':id']['$put']>,
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
    const mutationDefaults = getPutMemberJoiningRulesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteMemberJoiningRulesIdMutationKey() {
  return ['member-joining-rules', '/member-joining-rules/:id', 'DELETE'] as const
}

export function getDeleteMemberJoiningRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['member-joining-rules'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMemberJoiningRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$delete']>,
    ) {
      return parseResponse(client['member-joining-rules'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteMemberJoiningRulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['member-joining-rules'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteMemberJoiningRulesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchMemberJoiningRulesIdMutationKey() {
  return ['member-joining-rules', '/member-joining-rules/:id', 'PATCH'] as const
}

export function getPatchMemberJoiningRulesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['member-joining-rules'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMemberJoiningRulesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$patch']>,
    ) {
      return parseResponse(client['member-joining-rules'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchMemberJoiningRulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['member-joining-rules'][':id']['$patch']>,
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
    const mutationDefaults = getPatchMemberJoiningRulesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getMetroAreaNetworksQueryKey(
  args: InferRequestType<(typeof client)['metro-area-networks']['$get']>,
) {
  return ['metro-area-networks', '/metro-area-networks', args] as const
}

export function getMetroAreaNetworksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-area-networks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['metro-area-networks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-area-networks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetroAreaNetworksQueryKey>
  >({
    queryKey: getMetroAreaNetworksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['metro-area-networks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMetroAreaNetworks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-area-networks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['metro-area-networks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['metro-area-networks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetroAreaNetworksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetroAreaNetworksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMetroAreaNetworksIdQueryKey(
  args: InferRequestType<(typeof client)['metro-area-networks'][':id']['$get']>,
) {
  return ['metro-area-networks', '/metro-area-networks/:id', args] as const
}

export function getMetroAreaNetworksIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['metro-area-networks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['metro-area-networks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['metro-area-networks'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetroAreaNetworksIdQueryKey>
  >({
    queryKey: getMetroAreaNetworksIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['metro-area-networks'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectMetroAreaNetworksId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['metro-area-networks'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['metro-area-networks'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['metro-area-networks'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetroAreaNetworksIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetroAreaNetworksIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMetroAreasQueryKey(
  args: InferRequestType<(typeof client)['metro-areas']['$get']>,
) {
  return ['metro-areas', '/metro-areas', args] as const
}

export function getMetroAreasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['metro-areas']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetroAreasQueryKey>
  >({
    queryKey: getMetroAreasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['metro-areas'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMetroAreas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['metro-areas']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetroAreasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetroAreasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getMetroAreasIdQueryKey(
  args: InferRequestType<(typeof client)['metro-areas'][':id']['$get']>,
) {
  return ['metro-areas', '/metro-areas/:id', args] as const
}

export function getMetroAreasIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['metro-areas'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas'][':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetroAreasIdQueryKey>
  >({
    queryKey: getMetroAreasIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['metro-areas'][':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectMetroAreasId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['metro-areas'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas'][':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMetroAreasIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getMetroAreasIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNetworkFeatureConfigsQueryKey(
  args: InferRequestType<(typeof client)['network-feature-configs']['$get']>,
) {
  return ['network-feature-configs', '/network-feature-configs', args] as const
}

export function getNetworkFeatureConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-feature-configs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['network-feature-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkFeatureConfigsQueryKey>
  >({
    queryKey: getNetworkFeatureConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-feature-configs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNetworkFeatureConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-feature-configs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['network-feature-configs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-feature-configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkFeatureConfigsQueryKey>
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
      ...getNetworkFeatureConfigsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostNetworkFeatureConfigsMutationKey() {
  return ['network-feature-configs', '/network-feature-configs', 'POST'] as const
}

export function getPostNetworkFeatureConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-feature-configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkFeatureConfigsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['network-feature-configs']['$post']>) {
      return parseResponse(client['network-feature-configs'].$post(args, options))
    },
  })
}

export function injectPostNetworkFeatureConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-feature-configs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-feature-configs']['$post']>,
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
    const mutationDefaults = getPostNetworkFeatureConfigsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getNetworkFeatureConfigsIdQueryKey(
  args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$get']>,
) {
  return ['network-feature-configs', '/network-feature-configs/:id', args] as const
}

export function getNetworkFeatureConfigsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkFeatureConfigsIdQueryKey>
  >({
    queryKey: getNetworkFeatureConfigsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-feature-configs'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNetworkFeatureConfigsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['network-feature-configs'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkFeatureConfigsIdQueryKey>
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
      ...getNetworkFeatureConfigsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutNetworkFeatureConfigsIdMutationKey() {
  return ['network-feature-configs', '/network-feature-configs/:id', 'PUT'] as const
}

export function getPutNetworkFeatureConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-feature-configs'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworkFeatureConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$put']>,
    ) {
      return parseResponse(client['network-feature-configs'][':id'].$put(args, options))
    },
  })
}

export function injectPutNetworkFeatureConfigsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-feature-configs'][':id']['$put']>,
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
    const mutationDefaults = getPutNetworkFeatureConfigsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteNetworkFeatureConfigsIdMutationKey() {
  return ['network-feature-configs', '/network-feature-configs/:id', 'DELETE'] as const
}

export function getDeleteNetworkFeatureConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-feature-configs'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkFeatureConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$delete']>,
    ) {
      return parseResponse(client['network-feature-configs'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteNetworkFeatureConfigsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-feature-configs'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteNetworkFeatureConfigsIdMutationOptions<
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

export function getPatchNetworkFeatureConfigsIdMutationKey() {
  return ['network-feature-configs', '/network-feature-configs/:id', 'PATCH'] as const
}

export function getPatchNetworkFeatureConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-feature-configs'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNetworkFeatureConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$patch']>,
    ) {
      return parseResponse(client['network-feature-configs'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchNetworkFeatureConfigsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-feature-configs'][':id']['$patch']>,
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
    const mutationDefaults = getPatchNetworkFeatureConfigsIdMutationOptions<
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

export function getNetworkFeaturesQueryKey(
  args: InferRequestType<(typeof client)['network-features']['$get']>,
) {
  return ['network-features', '/network-features', args] as const
}

export function getNetworkFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['network-features']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkFeaturesQueryKey>
  >({
    queryKey: getNetworkFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-features'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNetworkFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['network-features']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkFeaturesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNetworkFeaturesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNetworkFeaturesIdQueryKey(
  args: InferRequestType<(typeof client)['network-features'][':id']['$get']>,
) {
  return ['network-features', '/network-features/:id', args] as const
}

export function getNetworkFeaturesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['network-features'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-features'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkFeaturesIdQueryKey>
  >({
    queryKey: getNetworkFeaturesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-features'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNetworkFeaturesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['network-features'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-features'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkFeaturesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNetworkFeaturesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getNetworkServiceConfigsQueryKey(
  args: InferRequestType<(typeof client)['network-service-configs']['$get']>,
) {
  return ['network-service-configs', '/network-service-configs', args] as const
}

export function getNetworkServiceConfigsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-service-configs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['network-service-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServiceConfigsQueryKey>
  >({
    queryKey: getNetworkServiceConfigsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-service-configs'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNetworkServiceConfigs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-service-configs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['network-service-configs']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-service-configs']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkServiceConfigsQueryKey>
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
      ...getNetworkServiceConfigsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostNetworkServiceConfigsMutationKey() {
  return ['network-service-configs', '/network-service-configs', 'POST'] as const
}

export function getPostNetworkServiceConfigsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-service-configs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkServiceConfigsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['network-service-configs']['$post']>) {
      return parseResponse(client['network-service-configs'].$post(args, options))
    },
  })
}

export function injectPostNetworkServiceConfigs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-service-configs']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-service-configs']['$post']>,
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
    const mutationDefaults = getPostNetworkServiceConfigsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getNetworkServiceConfigsIdQueryKey(
  args: InferRequestType<(typeof client)['network-service-configs'][':id']['$get']>,
) {
  return ['network-service-configs', '/network-service-configs/:id', args] as const
}

export function getNetworkServiceConfigsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['network-service-configs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServiceConfigsIdQueryKey>
  >({
    queryKey: getNetworkServiceConfigsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-service-configs'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNetworkServiceConfigsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['network-service-configs'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkServiceConfigsIdQueryKey>
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
      ...getNetworkServiceConfigsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPutNetworkServiceConfigsIdMutationKey() {
  return ['network-service-configs', '/network-service-configs/:id', 'PUT'] as const
}

export function getPutNetworkServiceConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-service-configs'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworkServiceConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-service-configs'][':id']['$put']>,
    ) {
      return parseResponse(client['network-service-configs'][':id'].$put(args, options))
    },
  })
}

export function injectPutNetworkServiceConfigsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-service-configs'][':id']['$put']>,
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
    const mutationDefaults = getPutNetworkServiceConfigsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteNetworkServiceConfigsIdMutationKey() {
  return ['network-service-configs', '/network-service-configs/:id', 'DELETE'] as const
}

export function getDeleteNetworkServiceConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-service-configs'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkServiceConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-service-configs'][':id']['$delete']>,
    ) {
      return parseResponse(client['network-service-configs'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteNetworkServiceConfigsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-service-configs'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteNetworkServiceConfigsIdMutationOptions<
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

export function getPatchNetworkServiceConfigsIdMutationKey() {
  return ['network-service-configs', '/network-service-configs/:id', 'PATCH'] as const
}

export function getPatchNetworkServiceConfigsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-service-configs'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNetworkServiceConfigsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-service-configs'][':id']['$patch']>,
    ) {
      return parseResponse(client['network-service-configs'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchNetworkServiceConfigsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-service-configs'][':id']['$patch']>,
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
    const mutationDefaults = getPatchNetworkServiceConfigsIdMutationOptions<
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

export function getNetworkServiceConfigsIdCancellationPolicyQueryKey(
  args: InferRequestType<
    (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
  >,
) {
  return [
    'network-service-configs',
    '/network-service-configs/:id/cancellation-policy',
    args,
  ] as const
}

export function getNetworkServiceConfigsIdCancellationPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServiceConfigsIdCancellationPolicyQueryKey>
  >({
    queryKey: getNetworkServiceConfigsIdCancellationPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-service-configs'][':id']['cancellation-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNetworkServiceConfigsIdCancellationPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkServiceConfigsIdCancellationPolicyQueryKey>
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
      ...getNetworkServiceConfigsIdCancellationPolicyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getNetworkServicesQueryKey(
  args: InferRequestType<(typeof client)['network-services']['$get']>,
) {
  return ['network-services', '/network-services', args] as const
}

export function getNetworkServicesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['network-services']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServicesQueryKey>
  >({
    queryKey: getNetworkServicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-services'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectNetworkServices<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['network-services']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkServicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNetworkServicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostNetworkServicesMutationKey() {
  return ['network-services', '/network-services', 'POST'] as const
}

export function getPostNetworkServicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-services']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkServicesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['network-services']['$post']>) {
      return parseResponse(client['network-services'].$post(args, options))
    },
  })
}

export function injectPostNetworkServices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-services']['$post']>,
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
    const mutationDefaults = getPostNetworkServicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getNetworkServicesIdQueryKey(
  args: InferRequestType<(typeof client)['network-services'][':id']['$get']>,
) {
  return ['network-services', '/network-services/:id', args] as const
}

export function getNetworkServicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['network-services'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServicesIdQueryKey>
  >({
    queryKey: getNetworkServicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-services'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNetworkServicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['network-services'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-services'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkServicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getNetworkServicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutNetworkServicesIdMutationKey() {
  return ['network-services', '/network-services/:id', 'PUT'] as const
}

export function getPutNetworkServicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-services'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNetworkServicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['network-services'][':id']['$put']>) {
      return parseResponse(client['network-services'][':id'].$put(args, options))
    },
  })
}

export function injectPutNetworkServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-services'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-services'][':id']['$put']>,
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
    const mutationDefaults = getPutNetworkServicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteNetworkServicesIdMutationKey() {
  return ['network-services', '/network-services/:id', 'DELETE'] as const
}

export function getDeleteNetworkServicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-services'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkServicesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-services'][':id']['$delete']>,
    ) {
      return parseResponse(client['network-services'][':id'].$delete(args, options))
    },
  })
}

export function injectDeleteNetworkServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-services'][':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-services'][':id']['$delete']>,
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
    const mutationDefaults = getDeleteNetworkServicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchNetworkServicesIdMutationKey() {
  return ['network-services', '/network-services/:id', 'PATCH'] as const
}

export function getPatchNetworkServicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-services'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchNetworkServicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['network-services'][':id']['$patch']>) {
      return parseResponse(client['network-services'][':id'].$patch(args, options))
    },
  })
}

export function injectPatchNetworkServicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['network-services'][':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-services'][':id']['$patch']>,
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
    const mutationDefaults = getPatchNetworkServicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getNetworkServicesIdCancellationPolicyQueryKey(
  args: InferRequestType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>,
) {
  return ['network-services', '/network-services/:id/cancellation-policy', args] as const
}

export function getNetworkServicesIdCancellationPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServicesIdCancellationPolicyQueryKey>
  >({
    queryKey: getNetworkServicesIdCancellationPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-services'][':id']['cancellation-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNetworkServicesIdCancellationPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['network-services'][':id']['cancellation-policy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['network-services'][':id']['cancellation-policy']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkServicesIdCancellationPolicyQueryKey>
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
      ...getNetworkServicesIdCancellationPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getNetworkServicesIdChangeRequestQueryKey(
  args: InferRequestType<(typeof client)['network-services'][':id']['change-request']['$get']>,
) {
  return ['network-services', '/network-services/:id/change-request', args] as const
}

export function getNetworkServicesIdChangeRequestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['network-services'][':id']['change-request']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['network-services'][':id']['change-request']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['change-request']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNetworkServicesIdChangeRequestQueryKey>
  >({
    queryKey: getNetworkServicesIdChangeRequestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['network-services'][':id']['change-request'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectNetworkServicesIdChangeRequest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['network-services'][':id']['change-request']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['network-services'][':id']['change-request']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['network-services'][':id']['change-request']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNetworkServicesIdChangeRequestQueryKey>
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
      ...getNetworkServicesIdChangeRequestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostNetworkServicesIdChangeRequestMutationKey() {
  return ['network-services', '/network-services/:id/change-request', 'POST'] as const
}

export function getPostNetworkServicesIdChangeRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['change-request']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-services'][':id']['change-request']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNetworkServicesIdChangeRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['network-services'][':id']['change-request']['$post']>,
    ) {
      return parseResponse(client['network-services'][':id']['change-request'].$post(args, options))
    },
  })
}

export function injectPostNetworkServicesIdChangeRequest<
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
                ReturnType<(typeof client)['network-services'][':id']['change-request']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-services'][':id']['change-request']['$post']>,
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
    const mutationDefaults = getPostNetworkServicesIdChangeRequestMutationOptions<
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

export function getDeleteNetworkServicesIdChangeRequestMutationKey() {
  return ['network-services', '/network-services/:id/change-request', 'DELETE'] as const
}

export function getDeleteNetworkServicesIdChangeRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['network-services'][':id']['change-request']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['network-services'][':id']['change-request']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNetworkServicesIdChangeRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['network-services'][':id']['change-request']['$delete']
      >,
    ) {
      return parseResponse(
        client['network-services'][':id']['change-request'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteNetworkServicesIdChangeRequest<
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
                ReturnType<(typeof client)['network-services'][':id']['change-request']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['network-services'][':id']['change-request']['$delete']>,
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
    const mutationDefaults = getDeleteNetworkServicesIdChangeRequestMutationOptions<
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

export function getPopsQueryKey(args: InferRequestType<typeof client.pops.$get>) {
  return ['pops', '/pops', args] as const
}

export function getPopsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pops.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pops.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pops.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPopsQueryKey>
  >({
    queryKey: getPopsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pops.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPops<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pops.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pops.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pops.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPopsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPopsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPopsIdQueryKey(args: InferRequestType<(typeof client.pops)[':id']['$get']>) {
  return ['pops', '/pops/:id', args] as const
}

export function getPopsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pops)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.pops)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pops)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPopsIdQueryKey>
  >({
    queryKey: getPopsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pops[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPopsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pops)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pops)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pops)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPopsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPopsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPortsQueryKey(args: InferRequestType<typeof client.ports.$get>) {
  return ['ports', '/ports', args] as const
}

export function getPortsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ports.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.ports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ports.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPortsQueryKey>
  >({
    queryKey: getPortsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPorts<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ports.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.ports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ports.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPortsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPortsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPortsIdQueryKey(args: InferRequestType<(typeof client.ports)[':id']['$get']>) {
  return ['ports', '/ports/:id', args] as const
}

export function getPortsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.ports)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPortsIdQueryKey>
  >({
    queryKey: getPortsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.ports[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPortsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.ports)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPortsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPortsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProductOfferingsQueryKey(
  args: InferRequestType<(typeof client)['product-offerings']['$get']>,
) {
  return ['product-offerings', '/product-offerings', args] as const
}

export function getProductOfferingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product-offerings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductOfferingsQueryKey>
  >({
    queryKey: getProductOfferingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product-offerings'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProductOfferings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product-offerings']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductOfferingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductOfferingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getProductOfferingsIdQueryKey(
  args: InferRequestType<(typeof client)['product-offerings'][':id']['$get']>,
) {
  return ['product-offerings', '/product-offerings/:id', args] as const
}

export function getProductOfferingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['product-offerings'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['product-offerings'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductOfferingsIdQueryKey>
  >({
    queryKey: getProductOfferingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['product-offerings'][':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectProductOfferingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings'][':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['product-offerings'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['product-offerings'][':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductOfferingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductOfferingsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRoleAssignmentsQueryKey(
  args: InferRequestType<(typeof client)['role-assignments']['$get']>,
) {
  return ['role-assignments', '/role-assignments', args] as const
}

export function getRoleAssignmentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['role-assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoleAssignmentsQueryKey>
  >({
    queryKey: getRoleAssignmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['role-assignments'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRoleAssignments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['role-assignments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoleAssignmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRoleAssignmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostRoleAssignmentsMutationKey() {
  return ['role-assignments', '/role-assignments', 'POST'] as const
}

export function getPostRoleAssignmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['role-assignments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostRoleAssignmentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['role-assignments']['$post']>) {
      return parseResponse(client['role-assignments'].$post(args, options))
    },
  })
}

export function injectPostRoleAssignments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['role-assignments']['$post']>,
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
    const mutationDefaults = getPostRoleAssignmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getRoleAssignmentsAssignmentIdQueryKey(
  args: InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$get']>,
) {
  return ['role-assignments', '/role-assignments/:assignment_id', args] as const
}

export function getRoleAssignmentsAssignmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getRoleAssignmentsAssignmentIdQueryKey>
  >({
    queryKey: getRoleAssignmentsAssignmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['role-assignments'][':assignment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectRoleAssignmentsAssignmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRoleAssignmentsAssignmentIdQueryKey>
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
      ...getRoleAssignmentsAssignmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteRoleAssignmentsAssignmentIdMutationKey() {
  return ['role-assignments', '/role-assignments/:assignment_id', 'DELETE'] as const
}

export function getDeleteRoleAssignmentsAssignmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteRoleAssignmentsAssignmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$delete']>,
    ) {
      return parseResponse(client['role-assignments'][':assignment_id'].$delete(args, options))
    },
  })
}

export function injectDeleteRoleAssignmentsAssignmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$delete']>,
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
    const mutationDefaults = getDeleteRoleAssignmentsAssignmentIdMutationOptions<
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

export function getRolesQueryKey(args: InferRequestType<typeof client.roles.$get>) {
  return ['roles', '/roles', args] as const
}

export function getRolesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >({
    queryKey: getRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.roles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getRolesIdQueryKey(args: InferRequestType<(typeof client.roles)[':id']['$get']>) {
  return ['roles', '/roles/:id', args] as const
}

export function getRolesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.roles)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRolesIdQueryKey>
  >({
    queryKey: getRolesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRolesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.roles)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getRolesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRolesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
