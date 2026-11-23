import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccountsKey(args: InferRequestType<typeof client.accounts.$get>) {
  return ['accounts', '/accounts', args] as const
}

export function useGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostAccountsKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function usePostAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounts.$post> }) =>
        parseResponse(client.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsIdKey(
  args: InferRequestType<(typeof client.accounts)[':id']['$get']>,
) {
  return ['accounts', '/accounts/:id', args] as const
}

export function useGetAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsIdKey() {
  return ['accounts', '/accounts/:id', 'PUT'] as const
}

export function usePutAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.accounts)[':id']['$put']> }) =>
        parseResponse(client.accounts[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsIdKey() {
  return ['accounts', '/accounts/:id', 'DELETE'] as const
}

export function useDeleteAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':id']['$delete']> },
      ) => parseResponse(client.accounts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsIdKey() {
  return ['accounts', '/accounts/:id', 'PATCH'] as const
}

export function usePatchAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':id']['$patch']> },
      ) => parseResponse(client.accounts[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthRefreshKey() {
  return ['auth', '/auth/refresh', 'POST'] as const
}

export function usePostAuthRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.refresh.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.refresh.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.refresh.$post> }) =>
        parseResponse(client.auth.refresh.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthTokenKey() {
  return ['auth', '/auth/token', 'POST'] as const
}

export function usePostAuthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.auth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.token.$post> }) =>
        parseResponse(client.auth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetConnectionsKey(args: InferRequestType<typeof client.connections.$get>) {
  return ['connections', '/connections', args] as const
}

export function useGetConnections<TError = unknown>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnections<TError = unknown>(
  args: InferRequestType<typeof client.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConnectionsIdKey(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
) {
  return ['connections', '/connections/:id', args] as const
}

export function useGetConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.connections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetConnectionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.connections)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetContactsKey(args: InferRequestType<typeof client.contacts.$get>) {
  return ['contacts', '/contacts', args] as const
}

export function useGetContacts<TError = unknown>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.contacts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetContacts<TError = unknown>(
  args: InferRequestType<typeof client.contacts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.contacts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostContactsKey() {
  return ['contacts', '/contacts', 'POST'] as const
}

export function usePostContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.contacts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.contacts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.contacts.$post> }) =>
        parseResponse(client.contacts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetContactsIdKey(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
) {
  return ['contacts', '/contacts/:id', args] as const
}

export function useGetContactsId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetContactsId<TError = unknown>(
  args: InferRequestType<(typeof client.contacts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetContactsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.contacts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutContactsIdKey() {
  return ['contacts', '/contacts/:id', 'PUT'] as const
}

export function usePutContactsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutContactsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.contacts)[':id']['$put']> }) =>
        parseResponse(client.contacts[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteContactsIdKey() {
  return ['contacts', '/contacts/:id', 'DELETE'] as const
}

export function useDeleteContactsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteContactsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contacts)[':id']['$delete']> },
      ) => parseResponse(client.contacts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchContactsIdKey() {
  return ['contacts', '/contacts/:id', 'PATCH'] as const
}

export function usePatchContactsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.contacts)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.contacts)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchContactsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.contacts)[':id']['$patch']> },
      ) => parseResponse(client.contacts[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDevicesKey(args: InferRequestType<typeof client.devices.$get>) {
  return ['devices', '/devices', args] as const
}

export function useGetDevices<TError = unknown>(
  args: InferRequestType<typeof client.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.devices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetDevices<TError = unknown>(
  args: InferRequestType<typeof client.devices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.devices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.devices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetDevicesIdKey(args: InferRequestType<(typeof client.devices)[':id']['$get']>) {
  return ['devices', '/devices/:id', args] as const
}

export function useGetDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDevicesId<TError = unknown>(
  args: InferRequestType<(typeof client.devices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDevicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.devices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.devices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFacilitiesKey(args: InferRequestType<typeof client.facilities.$get>) {
  return ['facilities', '/facilities', args] as const
}

export function useGetFacilities<TError = unknown>(
  args: InferRequestType<typeof client.facilities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFacilitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.facilities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFacilities<TError = unknown>(
  args: InferRequestType<typeof client.facilities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFacilitiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.facilities.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.facilities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFacilitiesIdKey(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
) {
  return ['facilities', '/facilities/:id', args] as const
}

export function useGetFacilitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFacilitiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.facilities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFacilitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.facilities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFacilitiesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.facilities)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.facilities[':id'].$get(args, clientOptions)),
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

export function getGetImplementationKey() {
  return ['implementation', '/implementation'] as const
}

export function useGetImplementation<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.implementation.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImplementationKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.implementation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.implementation.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetImplementation<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.implementation.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetImplementationKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.implementation.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.implementation.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetIpsKey(args: InferRequestType<typeof client.ips.$get>) {
  return ['ips', '/ips', args] as const
}

export function useGetIps<TError = unknown>(
  args: InferRequestType<typeof client.ips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ips.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetIps<TError = unknown>(
  args: InferRequestType<typeof client.ips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ips.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostIpsKey() {
  return ['ips', '/ips', 'POST'] as const
}

export function usePostIps<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ips.$post> }) =>
        parseResponse(client.ips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetIpsIdKey(args: InferRequestType<(typeof client.ips)[':id']['$get']>) {
  return ['ips', '/ips/:id', args] as const
}

export function useGetIpsId<TError = unknown>(
  args: InferRequestType<(typeof client.ips)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetIpsId<TError = unknown>(
  args: InferRequestType<(typeof client.ips)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetIpsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ips[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutIpsIdKey() {
  return ['ips', '/ips/:id', 'PUT'] as const
}

export function usePutIpsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutIpsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.ips)[':id']['$put']> }) =>
        parseResponse(client.ips[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchIpsIdKey() {
  return ['ips', '/ips/:id', 'PATCH'] as const
}

export function usePatchIpsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ips)[':id']['$patch']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchIpsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.ips)[':id']['$patch']> }) =>
        parseResponse(client.ips[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMacsKey(args: InferRequestType<typeof client.macs.$get>) {
  return ['macs', '/macs', args] as const
}

export function useGetMacs<TError = unknown>(
  args: InferRequestType<typeof client.macs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.macs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetMacs<TError = unknown>(
  args: InferRequestType<typeof client.macs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.macs.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostMacsKey() {
  return ['macs', '/macs', 'POST'] as const
}

export function usePostMacs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.macs.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.macs.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMacsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.macs.$post> }) =>
        parseResponse(client.macs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMacsIdKey(args: InferRequestType<(typeof client.macs)[':id']['$get']>) {
  return ['macs', '/macs/:id', args] as const
}

export function useGetMacsId<TError = unknown>(
  args: InferRequestType<(typeof client.macs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.macs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMacsId<TError = unknown>(
  args: InferRequestType<(typeof client.macs)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMacsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.macs[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteMacsIdKey() {
  return ['macs', '/macs/:id', 'DELETE'] as const
}

export function useDeleteMacsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.macs)[':id']['$delete']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.macs)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMacsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.macs)[':id']['$delete']> }) =>
        parseResponse(client.macs[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMemberJoiningRulesKey(
  args: InferRequestType<(typeof client)['member-joining-rules']['$get']>,
) {
  return ['member-joining-rules', '/member-joining-rules', args] as const
}

export function useGetMemberJoiningRules<TError = unknown>(
  args: InferRequestType<(typeof client)['member-joining-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['member-joining-rules']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMemberJoiningRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['member-joining-rules']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['member-joining-rules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMemberJoiningRules<TError = unknown>(
  args: InferRequestType<(typeof client)['member-joining-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['member-joining-rules']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMemberJoiningRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['member-joining-rules']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['member-joining-rules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMemberJoiningRulesKey() {
  return ['member-joining-rules', '/member-joining-rules', 'POST'] as const
}

export function usePostMemberJoiningRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['member-joining-rules']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['member-joining-rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMemberJoiningRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['member-joining-rules']['$post']> },
      ) => parseResponse(client['member-joining-rules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMemberJoiningRulesIdKey(
  args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$get']>,
) {
  return ['member-joining-rules', '/member-joining-rules/:id', args] as const
}

export function useGetMemberJoiningRulesId<TError = unknown>(
  args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMemberJoiningRulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['member-joining-rules'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMemberJoiningRulesId<TError = unknown>(
  args: InferRequestType<(typeof client)['member-joining-rules'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMemberJoiningRulesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['member-joining-rules'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutMemberJoiningRulesIdKey() {
  return ['member-joining-rules', '/member-joining-rules/:id', 'PUT'] as const
}

export function usePutMemberJoiningRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['member-joining-rules'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutMemberJoiningRulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['member-joining-rules'][':id']['$put']> },
      ) => parseResponse(client['member-joining-rules'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteMemberJoiningRulesIdKey() {
  return ['member-joining-rules', '/member-joining-rules/:id', 'DELETE'] as const
}

export function useDeleteMemberJoiningRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['member-joining-rules'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteMemberJoiningRulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['member-joining-rules'][':id']['$delete']> },
      ) => parseResponse(client['member-joining-rules'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMemberJoiningRulesIdKey() {
  return ['member-joining-rules', '/member-joining-rules/:id', 'PATCH'] as const
}

export function usePatchMemberJoiningRulesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['member-joining-rules'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['member-joining-rules'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMemberJoiningRulesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['member-joining-rules'][':id']['$patch']> },
      ) => parseResponse(client['member-joining-rules'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetroAreaNetworksKey(
  args: InferRequestType<(typeof client)['metro-area-networks']['$get']>,
) {
  return ['metro-area-networks', '/metro-area-networks', args] as const
}

export function useGetMetroAreaNetworks<TError = unknown>(
  args: InferRequestType<(typeof client)['metro-area-networks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-area-networks']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetroAreaNetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-area-networks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['metro-area-networks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetroAreaNetworks<TError = unknown>(
  args: InferRequestType<(typeof client)['metro-area-networks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-area-networks']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetroAreaNetworksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-area-networks']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['metro-area-networks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetroAreaNetworksIdKey(
  args: InferRequestType<(typeof client)['metro-area-networks'][':id']['$get']>,
) {
  return ['metro-area-networks', '/metro-area-networks/:id', args] as const
}

export function useGetMetroAreaNetworksId<TError = unknown>(
  args: InferRequestType<(typeof client)['metro-area-networks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['metro-area-networks'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetroAreaNetworksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['metro-area-networks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['metro-area-networks'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetroAreaNetworksId<TError = unknown>(
  args: InferRequestType<(typeof client)['metro-area-networks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['metro-area-networks'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetMetroAreaNetworksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['metro-area-networks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['metro-area-networks'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetroAreasKey(
  args: InferRequestType<(typeof client)['metro-areas']['$get']>,
) {
  return ['metro-areas', '/metro-areas', args] as const
}

export function useGetMetroAreas<TError = unknown>(
  args: InferRequestType<(typeof client)['metro-areas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetroAreasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['metro-areas'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetroAreas<TError = unknown>(
  args: InferRequestType<(typeof client)['metro-areas']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetroAreasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['metro-areas'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetroAreasIdKey(
  args: InferRequestType<(typeof client)['metro-areas'][':id']['$get']>,
) {
  return ['metro-areas', '/metro-areas/:id', args] as const
}

export function useGetMetroAreasId<TError = unknown>(
  args: InferRequestType<(typeof client)['metro-areas'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas'][':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetroAreasIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['metro-areas'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetroAreasId<TError = unknown>(
  args: InferRequestType<(typeof client)['metro-areas'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas'][':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetroAreasIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['metro-areas'][':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['metro-areas'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkFeatureConfigsKey(
  args: InferRequestType<(typeof client)['network-feature-configs']['$get']>,
) {
  return ['network-feature-configs', '/network-feature-configs', args] as const
}

export function useGetNetworkFeatureConfigs<TError = unknown>(
  args: InferRequestType<(typeof client)['network-feature-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-feature-configs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkFeatureConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-feature-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-feature-configs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkFeatureConfigs<TError = unknown>(
  args: InferRequestType<(typeof client)['network-feature-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-feature-configs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkFeatureConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-feature-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-feature-configs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworkFeatureConfigsKey() {
  return ['network-feature-configs', '/network-feature-configs', 'POST'] as const
}

export function usePostNetworkFeatureConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-feature-configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkFeatureConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['network-feature-configs']['$post']> },
      ) => parseResponse(client['network-feature-configs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkFeatureConfigsIdKey(
  args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$get']>,
) {
  return ['network-feature-configs', '/network-feature-configs/:id', args] as const
}

export function useGetNetworkFeatureConfigsId<TError = unknown>(
  args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkFeatureConfigsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-feature-configs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkFeatureConfigsId<TError = unknown>(
  args: InferRequestType<(typeof client)['network-feature-configs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkFeatureConfigsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-feature-configs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworkFeatureConfigsIdKey() {
  return ['network-feature-configs', '/network-feature-configs/:id', 'PUT'] as const
}

export function usePutNetworkFeatureConfigsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-feature-configs'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworkFeatureConfigsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['network-feature-configs'][':id']['$put']> },
      ) => parseResponse(client['network-feature-configs'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworkFeatureConfigsIdKey() {
  return ['network-feature-configs', '/network-feature-configs/:id', 'DELETE'] as const
}

export function useDeleteNetworkFeatureConfigsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-feature-configs'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworkFeatureConfigsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['network-feature-configs'][':id']['$delete']> },
      ) => parseResponse(client['network-feature-configs'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNetworkFeatureConfigsIdKey() {
  return ['network-feature-configs', '/network-feature-configs/:id', 'PATCH'] as const
}

export function usePatchNetworkFeatureConfigsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-feature-configs'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-feature-configs'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNetworkFeatureConfigsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['network-feature-configs'][':id']['$patch']> },
      ) => parseResponse(client['network-feature-configs'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkFeaturesKey(
  args: InferRequestType<(typeof client)['network-features']['$get']>,
) {
  return ['network-features', '/network-features', args] as const
}

export function useGetNetworkFeatures<TError = unknown>(
  args: InferRequestType<(typeof client)['network-features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-features'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkFeatures<TError = unknown>(
  args: InferRequestType<(typeof client)['network-features']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkFeaturesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['network-features']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-features'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkFeaturesIdKey(
  args: InferRequestType<(typeof client)['network-features'][':id']['$get']>,
) {
  return ['network-features', '/network-features/:id', args] as const
}

export function useGetNetworkFeaturesId<TError = unknown>(
  args: InferRequestType<(typeof client)['network-features'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-features'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkFeaturesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-features'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-features'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkFeaturesId<TError = unknown>(
  args: InferRequestType<(typeof client)['network-features'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-features'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkFeaturesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-features'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-features'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkServiceConfigsKey(
  args: InferRequestType<(typeof client)['network-service-configs']['$get']>,
) {
  return ['network-service-configs', '/network-service-configs', args] as const
}

export function useGetNetworkServiceConfigs<TError = unknown>(
  args: InferRequestType<(typeof client)['network-service-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-service-configs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkServiceConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-service-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-service-configs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkServiceConfigs<TError = unknown>(
  args: InferRequestType<(typeof client)['network-service-configs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-service-configs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkServiceConfigsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-service-configs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-service-configs'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworkServiceConfigsKey() {
  return ['network-service-configs', '/network-service-configs', 'POST'] as const
}

export function usePostNetworkServiceConfigs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-service-configs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkServiceConfigsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['network-service-configs']['$post']> },
      ) => parseResponse(client['network-service-configs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkServiceConfigsIdKey(
  args: InferRequestType<(typeof client)['network-service-configs'][':id']['$get']>,
) {
  return ['network-service-configs', '/network-service-configs/:id', args] as const
}

export function useGetNetworkServiceConfigsId<TError = unknown>(
  args: InferRequestType<(typeof client)['network-service-configs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkServiceConfigsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-service-configs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkServiceConfigsId<TError = unknown>(
  args: InferRequestType<(typeof client)['network-service-configs'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkServiceConfigsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-service-configs'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworkServiceConfigsIdKey() {
  return ['network-service-configs', '/network-service-configs/:id', 'PUT'] as const
}

export function usePutNetworkServiceConfigsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-service-configs'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworkServiceConfigsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['network-service-configs'][':id']['$put']> },
      ) => parseResponse(client['network-service-configs'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworkServiceConfigsIdKey() {
  return ['network-service-configs', '/network-service-configs/:id', 'DELETE'] as const
}

export function useDeleteNetworkServiceConfigsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-service-configs'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworkServiceConfigsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['network-service-configs'][':id']['$delete']> },
      ) => parseResponse(client['network-service-configs'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNetworkServiceConfigsIdKey() {
  return ['network-service-configs', '/network-service-configs/:id', 'PATCH'] as const
}

export function usePatchNetworkServiceConfigsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-service-configs'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-service-configs'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNetworkServiceConfigsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['network-service-configs'][':id']['$patch']> },
      ) => parseResponse(client['network-service-configs'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkServiceConfigsIdCancellationPolicyKey(
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

export function useGetNetworkServiceConfigsIdCancellationPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkServiceConfigsIdCancellationPolicyKey(args)
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
                (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
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
          client['network-service-configs'][':id']['cancellation-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkServiceConfigsIdCancellationPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkServiceConfigsIdCancellationPolicyKey(args)
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
                (typeof client)['network-service-configs'][':id']['cancellation-policy']['$get']
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
          client['network-service-configs'][':id']['cancellation-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkServicesKey(
  args: InferRequestType<(typeof client)['network-services']['$get']>,
) {
  return ['network-services', '/network-services', args] as const
}

export function useGetNetworkServices<TError = unknown>(
  args: InferRequestType<(typeof client)['network-services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-services'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkServices<TError = unknown>(
  args: InferRequestType<(typeof client)['network-services']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkServicesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-services'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNetworkServicesKey() {
  return ['network-services', '/network-services', 'POST'] as const
}

export function usePostNetworkServices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['network-services']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-services']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkServicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['network-services']['$post']> },
      ) => parseResponse(client['network-services'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkServicesIdKey(
  args: InferRequestType<(typeof client)['network-services'][':id']['$get']>,
) {
  return ['network-services', '/network-services/:id', args] as const
}

export function useGetNetworkServicesId<TError = unknown>(
  args: InferRequestType<(typeof client)['network-services'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-services'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-services'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-services'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkServicesId<TError = unknown>(
  args: InferRequestType<(typeof client)['network-services'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-services'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNetworkServicesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['network-services'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['network-services'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutNetworkServicesIdKey() {
  return ['network-services', '/network-services/:id', 'PUT'] as const
}

export function usePutNetworkServicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-services'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutNetworkServicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['network-services'][':id']['$put']> },
      ) => parseResponse(client['network-services'][':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworkServicesIdKey() {
  return ['network-services', '/network-services/:id', 'DELETE'] as const
}

export function useDeleteNetworkServicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-services'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworkServicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['network-services'][':id']['$delete']> },
      ) => parseResponse(client['network-services'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchNetworkServicesIdKey() {
  return ['network-services', '/network-services/:id', 'PATCH'] as const
}

export function usePatchNetworkServicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-services'][':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchNetworkServicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['network-services'][':id']['$patch']> },
      ) => parseResponse(client['network-services'][':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNetworkServicesIdCancellationPolicyKey(
  args: InferRequestType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>,
) {
  return ['network-services', '/network-services/:id/cancellation-policy', args] as const
}

export function useGetNetworkServicesIdCancellationPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>
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
        ? getGetNetworkServicesIdCancellationPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['network-services'][':id']['cancellation-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkServicesIdCancellationPolicy<TError = unknown>(
  args: InferRequestType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>
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
        ? getGetNetworkServicesIdCancellationPolicyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['network-services'][':id']['cancellation-policy']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['network-services'][':id']['cancellation-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNetworkServicesIdChangeRequestKey(
  args: InferRequestType<(typeof client)['network-services'][':id']['change-request']['$get']>,
) {
  return ['network-services', '/network-services/:id/change-request', args] as const
}

export function useGetNetworkServicesIdChangeRequest<TError = unknown>(
  args: InferRequestType<(typeof client)['network-services'][':id']['change-request']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['network-services'][':id']['change-request']['$get']>
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
        ? getGetNetworkServicesIdChangeRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['network-services'][':id']['change-request']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['network-services'][':id']['change-request'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNetworkServicesIdChangeRequest<TError = unknown>(
  args: InferRequestType<(typeof client)['network-services'][':id']['change-request']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['network-services'][':id']['change-request']['$get']>
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
        ? getGetNetworkServicesIdChangeRequestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['network-services'][':id']['change-request']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client['network-services'][':id']['change-request'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNetworkServicesIdChangeRequestKey() {
  return ['network-services', '/network-services/:id/change-request', 'POST'] as const
}

export function usePostNetworkServicesIdChangeRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['network-services'][':id']['change-request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['network-services'][':id']['change-request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNetworkServicesIdChangeRequestKey()
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
            (typeof client)['network-services'][':id']['change-request']['$post']
          >
        },
      ) =>
        parseResponse(
          client['network-services'][':id']['change-request'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNetworkServicesIdChangeRequestKey() {
  return ['network-services', '/network-services/:id/change-request', 'DELETE'] as const
}

export function useDeleteNetworkServicesIdChangeRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['network-services'][':id']['change-request']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNetworkServicesIdChangeRequestKey()
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
            (typeof client)['network-services'][':id']['change-request']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['network-services'][':id']['change-request'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPopsKey(args: InferRequestType<typeof client.pops.$get>) {
  return ['pops', '/pops', args] as const
}

export function useGetPops<TError = unknown>(
  args: InferRequestType<typeof client.pops.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pops.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPopsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pops.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.pops.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPops<TError = unknown>(
  args: InferRequestType<typeof client.pops.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pops.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPopsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pops.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.pops.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPopsIdKey(args: InferRequestType<(typeof client.pops)[':id']['$get']>) {
  return ['pops', '/pops/:id', args] as const
}

export function useGetPopsId<TError = unknown>(
  args: InferRequestType<(typeof client.pops)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pops)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPopsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pops)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pops[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPopsId<TError = unknown>(
  args: InferRequestType<(typeof client.pops)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pops)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPopsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pops)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pops[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPortsKey(args: InferRequestType<typeof client.ports.$get>) {
  return ['ports', '/ports', args] as const
}

export function useGetPorts<TError = unknown>(
  args: InferRequestType<typeof client.ports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ports.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ports.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetPorts<TError = unknown>(
  args: InferRequestType<typeof client.ports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ports.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ports.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.ports.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetPortsIdKey(args: InferRequestType<(typeof client.ports)[':id']['$get']>) {
  return ['ports', '/ports/:id', args] as const
}

export function useGetPortsId<TError = unknown>(
  args: InferRequestType<(typeof client.ports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPortsId<TError = unknown>(
  args: InferRequestType<(typeof client.ports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPortsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.ports)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.ports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductOfferingsKey(
  args: InferRequestType<(typeof client)['product-offerings']['$get']>,
) {
  return ['product-offerings', '/product-offerings', args] as const
}

export function useGetProductOfferings<TError = unknown>(
  args: InferRequestType<(typeof client)['product-offerings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductOfferingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product-offerings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductOfferings<TError = unknown>(
  args: InferRequestType<(typeof client)['product-offerings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductOfferingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['product-offerings']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product-offerings'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetProductOfferingsIdKey(
  args: InferRequestType<(typeof client)['product-offerings'][':id']['$get']>,
) {
  return ['product-offerings', '/product-offerings/:id', args] as const
}

export function useGetProductOfferingsId<TError = unknown>(
  args: InferRequestType<(typeof client)['product-offerings'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product-offerings'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductOfferingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product-offerings'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product-offerings'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetProductOfferingsId<TError = unknown>(
  args: InferRequestType<(typeof client)['product-offerings'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product-offerings'][':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetProductOfferingsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['product-offerings'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['product-offerings'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRoleAssignmentsKey(
  args: InferRequestType<(typeof client)['role-assignments']['$get']>,
) {
  return ['role-assignments', '/role-assignments', args] as const
}

export function useGetRoleAssignments<TError = unknown>(
  args: InferRequestType<(typeof client)['role-assignments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoleAssignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['role-assignments'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoleAssignments<TError = unknown>(
  args: InferRequestType<(typeof client)['role-assignments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoleAssignmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['role-assignments'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostRoleAssignmentsKey() {
  return ['role-assignments', '/role-assignments', 'POST'] as const
}

export function usePostRoleAssignments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['role-assignments']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['role-assignments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRoleAssignmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['role-assignments']['$post']> },
      ) => parseResponse(client['role-assignments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRoleAssignmentsAssignmentIdKey(
  args: InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$get']>,
) {
  return ['role-assignments', '/role-assignments/:assignment_id', args] as const
}

export function useGetRoleAssignmentsAssignmentId<TError = unknown>(
  args: InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoleAssignmentsAssignmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['role-assignments'][':assignment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRoleAssignmentsAssignmentId<TError = unknown>(
  args: InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetRoleAssignmentsAssignmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['role-assignments'][':assignment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteRoleAssignmentsAssignmentIdKey() {
  return ['role-assignments', '/role-assignments/:assignment_id', 'DELETE'] as const
}

export function useDeleteRoleAssignmentsAssignmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['role-assignments'][':assignment_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteRoleAssignmentsAssignmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['role-assignments'][':assignment_id']['$delete']>
        },
      ) => parseResponse(client['role-assignments'][':assignment_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetRolesKey(args: InferRequestType<typeof client.roles.$get>) {
  return ['roles', '/roles', args] as const
}

export function useGetRoles<TError = unknown>(
  args: InferRequestType<typeof client.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.roles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRoles<TError = unknown>(
  args: InferRequestType<typeof client.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.roles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetRolesIdKey(args: InferRequestType<(typeof client.roles)[':id']['$get']>) {
  return ['roles', '/roles/:id', args] as const
}

export function useGetRolesId<TError = unknown>(
  args: InferRequestType<(typeof client.roles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRolesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.roles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRolesId<TError = unknown>(
  args: InferRequestType<(typeof client.roles)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRolesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.roles)[':id']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.roles[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
