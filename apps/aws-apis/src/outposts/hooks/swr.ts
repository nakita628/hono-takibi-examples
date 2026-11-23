import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCatalogKey() {
  return ['catalog'] as const
}

export function getConnectionsKey() {
  return ['connections'] as const
}

export function getListOrdersKey() {
  return ['list-orders'] as const
}

export function getOrdersKey() {
  return ['orders'] as const
}

export function getOutpostsKey() {
  return ['outposts'] as const
}

export function getSitesKey() {
  return ['sites'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPostOrdersOrderIdCancelKey() {
  return ['orders', '/orders/:OrderId/cancel', 'POST'] as const
}

export function usePostOrdersOrderIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.orders)[':OrderId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.orders)[':OrderId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersOrderIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.orders)[':OrderId']['cancel']['$post']> },
      ) => parseResponse(client.orders[':OrderId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOrdersKey() {
  return ['orders', '/orders', 'POST'] as const
}

export function usePostOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.orders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.orders.$post> }) =>
        parseResponse(client.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOutpostsKey(args: InferRequestType<typeof client.outposts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['outposts', '/outposts', keyArgs] as const
}

export function useGetOutposts<TError = unknown>(
  args: InferRequestType<typeof client.outposts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOutpostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.outposts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOutposts<TError = unknown>(
  args: InferRequestType<typeof client.outposts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOutpostsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.outposts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostOutpostsKey() {
  return ['outposts', '/outposts', 'POST'] as const
}

export function usePostOutposts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.outposts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.outposts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOutpostsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.outposts.$post> }) =>
        parseResponse(client.outposts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesKey(args: InferRequestType<typeof client.sites.$get>) {
  const { header: _, ...keyArgs } = args
  return ['sites', '/sites', keyArgs] as const
}

export function useGetSites<TError = unknown>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sites.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSites<TError = unknown>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sites.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSitesKey() {
  return ['sites', '/sites', 'POST'] as const
}

export function usePostSites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sites.$post> }) =>
        parseResponse(client.sites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOutpostsOutpostIdKey(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['outposts', '/outposts/:OutpostId', keyArgs] as const
}

export function useGetOutpostsOutpostId<TError = unknown>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOutpostsOutpostIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.outposts[':OutpostId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOutpostsOutpostId<TError = unknown>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOutpostsOutpostIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.outposts[':OutpostId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteOutpostsOutpostIdKey() {
  return ['outposts', '/outposts/:OutpostId', 'DELETE'] as const
}

export function useDeleteOutpostsOutpostId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.outposts)[':OutpostId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteOutpostsOutpostIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.outposts)[':OutpostId']['$delete']> },
      ) => parseResponse(client.outposts[':OutpostId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchOutpostsOutpostIdKey() {
  return ['outposts', '/outposts/:OutpostId', 'PATCH'] as const
}

export function usePatchOutpostsOutpostId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.outposts)[':OutpostId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchOutpostsOutpostIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.outposts)[':OutpostId']['$patch']> },
      ) => parseResponse(client.outposts[':OutpostId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdKey(
  args: InferRequestType<(typeof client.sites)[':SiteId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sites', '/sites/:SiteId', keyArgs] as const
}

export function useGetSitesSiteId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':SiteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesSiteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':SiteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':SiteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesSiteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':SiteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSitesSiteIdKey() {
  return ['sites', '/sites/:SiteId', 'DELETE'] as const
}

export function useDeleteSitesSiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':SiteId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':SiteId']['$delete']> },
      ) => parseResponse(client.sites[':SiteId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSitesSiteIdKey() {
  return ['sites', '/sites/:SiteId', 'PATCH'] as const
}

export function usePatchSitesSiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':SiteId']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':SiteId']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSitesSiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':SiteId']['$patch']> },
      ) => parseResponse(client.sites[':SiteId'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCatalogItemCatalogItemIdKey(
  args: InferRequestType<(typeof client.catalog.item)[':CatalogItemId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['catalog', '/catalog/item/:CatalogItemId', keyArgs] as const
}

export function useGetCatalogItemCatalogItemId<TError = unknown>(
  args: InferRequestType<(typeof client.catalog.item)[':CatalogItemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalog.item)[':CatalogItemId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCatalogItemCatalogItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalog.item)[':CatalogItemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalog.item[':CatalogItemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogItemCatalogItemId<TError = unknown>(
  args: InferRequestType<(typeof client.catalog.item)[':CatalogItemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalog.item)[':CatalogItemId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCatalogItemCatalogItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.catalog.item)[':CatalogItemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalog.item[':CatalogItemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConnectionsConnectionIdKey(
  args: InferRequestType<(typeof client.connections)[':ConnectionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['connections', '/connections/:ConnectionId', keyArgs] as const
}

export function useGetConnectionsConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.connections)[':ConnectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connections)[':ConnectionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectionsConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connections)[':ConnectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections[':ConnectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConnectionsConnectionId<TError = unknown>(
  args: InferRequestType<(typeof client.connections)[':ConnectionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connections)[':ConnectionId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetConnectionsConnectionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.connections)[':ConnectionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.connections[':ConnectionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrdersOrderIdKey(
  args: InferRequestType<(typeof client.orders)[':OrderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['orders', '/orders/:OrderId', keyArgs] as const
}

export function useGetOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.orders)[':OrderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':OrderId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersOrderIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':OrderId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orders[':OrderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.orders)[':OrderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':OrderId']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrdersOrderIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.orders)[':OrderId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.orders[':OrderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOutpostsOutpostIdInstanceTypesKey(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['outposts', '/outposts/:OutpostId/instanceTypes', keyArgs] as const
}

export function useGetOutpostsOutpostIdInstanceTypes<TError = unknown>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOutpostsOutpostIdInstanceTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.outposts[':OutpostId'].instanceTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOutpostsOutpostIdInstanceTypes<TError = unknown>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOutpostsOutpostIdInstanceTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['instanceTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.outposts[':OutpostId'].instanceTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdAddressAddressTypeKey(
  args: InferRequestType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['sites', '/sites/:SiteId/address#AddressType', keyArgs] as const
}

export function useGetSitesSiteIdAddressAddressType<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSitesSiteIdAddressAddressTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':SiteId']['address#AddressType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdAddressAddressType<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSitesSiteIdAddressAddressTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':SiteId']['address#AddressType']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':SiteId']['address#AddressType'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOutpostsOutpostIdAssetsKey(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['assets']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['outposts', '/outposts/:OutpostId/assets', keyArgs] as const
}

export function useGetOutpostsOutpostIdAssets<TError = unknown>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['assets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOutpostsOutpostIdAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.outposts[':OutpostId'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOutpostsOutpostIdAssets<TError = unknown>(
  args: InferRequestType<(typeof client.outposts)[':OutpostId']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['assets']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetOutpostsOutpostIdAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.outposts)[':OutpostId']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.outposts[':OutpostId'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCatalogItemsKey(args: InferRequestType<typeof client.catalog.items.$get>) {
  const { header: _, ...keyArgs } = args
  return ['catalog', '/catalog/items', keyArgs] as const
}

export function useGetCatalogItems<TError = unknown>(
  args: InferRequestType<typeof client.catalog.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.items.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.items.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalog.items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCatalogItems<TError = unknown>(
  args: InferRequestType<typeof client.catalog.items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.items.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCatalogItemsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalog.items.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.catalog.items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListOrdersKey(
  args: InferRequestType<(typeof client)['list-orders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['list-orders', '/list-orders', keyArgs] as const
}

export function useGetListOrders<TError = unknown>(
  args: InferRequestType<(typeof client)['list-orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['list-orders']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['list-orders']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['list-orders'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListOrders<TError = unknown>(
  args: InferRequestType<(typeof client)['list-orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['list-orders']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['list-orders']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['list-orders'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTagsResourceArnKey(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:ResourceArn', keyArgs] as const
}

export function useGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTagsResourceArn<TError = unknown>(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTagsResourceArnKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.tags[':ResourceArn'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTagsResourceArnKey() {
  return ['tags', '/tags/:ResourceArn', 'POST'] as const
}

export function usePostTagsResourceArn<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':ResourceArn']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsResourceArnKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']> },
      ) => parseResponse(client.tags[':ResourceArn'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostConnectionsKey() {
  return ['connections', '/connections', 'POST'] as const
}

export function usePostConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.connections.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.connections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.connections.$post> }) =>
        parseResponse(client.connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTagsResourceArnTagKeysKey() {
  return ['tags', '/tags/:ResourceArn#tagKeys', 'DELETE'] as const
}

export function useDeleteTagsResourceArnTagKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTagsResourceArnTagKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']> },
      ) => parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSitesSiteIdAddressKey() {
  return ['sites', '/sites/:SiteId/address', 'PUT'] as const
}

export function usePutSitesSiteIdAddress<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':SiteId']['address']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':SiteId']['address']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdAddressKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':SiteId']['address']['$put']> },
      ) => parseResponse(client.sites[':SiteId'].address.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSitesSiteIdRackPhysicalPropertiesKey() {
  return ['sites', '/sites/:SiteId/rackPhysicalProperties', 'PATCH'] as const
}

export function usePatchSitesSiteIdRackPhysicalProperties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':SiteId']['rackPhysicalProperties']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':SiteId']['rackPhysicalProperties']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSitesSiteIdRackPhysicalPropertiesKey()
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
            (typeof client.sites)[':SiteId']['rackPhysicalProperties']['$patch']
          >
        },
      ) => parseResponse(client.sites[':SiteId'].rackPhysicalProperties.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
