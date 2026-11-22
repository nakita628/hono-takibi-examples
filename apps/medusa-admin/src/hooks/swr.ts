import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAdminKey() {
  return ['admin'] as const
}

export function getAuthKey() {
  return ['auth'] as const
}

export function getGetAdminApiKeysKey(
  args: InferRequestType<(typeof client.admin)['api-keys']['$get']>,
) {
  return ['admin', '/admin/api-keys', args] as const
}

export function useGetAdminApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['api-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminApiKeys<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['api-keys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminApiKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['api-keys'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminApiKeysKey() {
  return ['admin', '/admin/api-keys', 'POST'] as const
}

export function usePostAdminApiKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['api-keys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminApiKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['api-keys']['$post']> },
      ) => parseResponse(client.admin['api-keys'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminApiKeysIdKey(
  args: InferRequestType<(typeof client.admin)['api-keys'][':id']['$get']>,
) {
  return ['admin', '/admin/api-keys/:id', args] as const
}

export function useGetAdminApiKeysId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['api-keys'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminApiKeysIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['api-keys'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminApiKeysId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['api-keys'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminApiKeysIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['api-keys'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminApiKeysIdKey() {
  return ['admin', '/admin/api-keys/:id', 'POST'] as const
}

export function usePostAdminApiKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['api-keys'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminApiKeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['api-keys'][':id']['$post']> },
      ) => parseResponse(client.admin['api-keys'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminApiKeysIdKey() {
  return ['admin', '/admin/api-keys/:id', 'DELETE'] as const
}

export function useDeleteAdminApiKeysId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['api-keys'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminApiKeysIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['api-keys'][':id']['$delete']> },
      ) => parseResponse(client.admin['api-keys'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminApiKeysIdRevokeKey() {
  return ['admin', '/admin/api-keys/:id/revoke', 'POST'] as const
}

export function usePostAdminApiKeysIdRevoke<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['revoke']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['api-keys'][':id']['revoke']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminApiKeysIdRevokeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['api-keys'][':id']['revoke']['$post']> },
      ) => parseResponse(client.admin['api-keys'][':id'].revoke.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminApiKeysIdSalesChannelsKey() {
  return ['admin', '/admin/api-keys/:id/sales-channels', 'POST'] as const
}

export function usePostAdminApiKeysIdSalesChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['api-keys'][':id']['sales-channels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['api-keys'][':id']['sales-channels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminApiKeysIdSalesChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin)['api-keys'][':id']['sales-channels']['$post']>
        },
      ) =>
        parseResponse(client.admin['api-keys'][':id']['sales-channels'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminCampaignsKey(
  args: InferRequestType<typeof client.admin.campaigns.$get>,
) {
  return ['admin', '/admin/campaigns', args] as const
}

export function useGetAdminCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.admin.campaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.campaigns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminCampaignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.campaigns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCampaigns<TError = unknown>(
  args: InferRequestType<typeof client.admin.campaigns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.campaigns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminCampaignsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.campaigns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.campaigns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminCampaignsKey() {
  return ['admin', '/admin/campaigns', 'POST'] as const
}

export function usePostAdminCampaigns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.campaigns.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.campaigns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCampaignsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.campaigns.$post> }) =>
        parseResponse(client.admin.campaigns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminCampaignsIdKey(
  args: InferRequestType<(typeof client.admin.campaigns)[':id']['$get']>,
) {
  return ['admin', '/admin/campaigns/:id', args] as const
}

export function useGetAdminCampaignsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.campaigns)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$get']>>>
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
        ? getGetAdminCampaignsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.campaigns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCampaignsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.campaigns)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$get']>>>
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
        ? getGetAdminCampaignsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.campaigns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminCampaignsIdKey() {
  return ['admin', '/admin/campaigns/:id', 'POST'] as const
}

export function usePostAdminCampaignsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.campaigns)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCampaignsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.campaigns)[':id']['$post']> },
      ) => parseResponse(client.admin.campaigns[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminCampaignsIdKey() {
  return ['admin', '/admin/campaigns/:id', 'DELETE'] as const
}

export function useDeleteAdminCampaignsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.campaigns)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminCampaignsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.campaigns)[':id']['$delete']> },
      ) => parseResponse(client.admin.campaigns[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminCampaignsIdPromotionsKey() {
  return ['admin', '/admin/campaigns/:id/promotions', 'POST'] as const
}

export function usePostAdminCampaignsIdPromotions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.campaigns)[':id']['promotions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.campaigns)[':id']['promotions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCampaignsIdPromotionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.campaigns)[':id']['promotions']['$post']> },
      ) => parseResponse(client.admin.campaigns[':id'].promotions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminClaimsKey(args: InferRequestType<typeof client.admin.claims.$get>) {
  return ['admin', '/admin/claims', args] as const
}

export function useGetAdminClaims<TError = unknown>(
  args: InferRequestType<typeof client.admin.claims.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.claims.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminClaimsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.claims.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.claims.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminClaims<TError = unknown>(
  args: InferRequestType<typeof client.admin.claims.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.claims.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminClaimsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.claims.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.claims.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminClaimsKey() {
  return ['admin', '/admin/claims', 'POST'] as const
}

export function usePostAdminClaims<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.claims.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.claims.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.claims.$post> }) =>
        parseResponse(client.admin.claims.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminClaimsIdKey(
  args: InferRequestType<(typeof client.admin.claims)[':id']['$get']>,
) {
  return ['admin', '/admin/claims/:id', args] as const
}

export function useGetAdminClaimsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.claims)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.claims)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminClaimsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.claims)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.claims[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminClaimsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.claims)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.claims)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminClaimsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.claims)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.claims[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminClaimsIdCancelKey() {
  return ['admin', '/admin/claims/:id/cancel', 'POST'] as const
}

export function usePostAdminClaimsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.claims)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.claims)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.claims)[':id']['cancel']['$post']> },
      ) => parseResponse(client.admin.claims[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminClaimsIdClaimItemsKey() {
  return ['admin', '/admin/claims/:id/claim-items', 'POST'] as const
}

export function usePostAdminClaimsIdClaimItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.claims)[':id']['claim-items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.claims)[':id']['claim-items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsIdClaimItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.claims)[':id']['claim-items']['$post']> },
      ) => parseResponse(client.admin.claims[':id']['claim-items'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminClaimsIdClaimItemsActionIdKey() {
  return ['admin', '/admin/claims/:id/claim-items/:action_id', 'POST'] as const
}

export function usePostAdminClaimsIdClaimItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.claims)[':id']['claim-items'][':action_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.claims)[':id']['claim-items'][':action_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsIdClaimItemsActionIdKey()
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
            (typeof client.admin.claims)[':id']['claim-items'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.claims[':id']['claim-items'][':action_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminClaimsIdClaimItemsActionIdKey() {
  return ['admin', '/admin/claims/:id/claim-items/:action_id', 'DELETE'] as const
}

export function useDeleteAdminClaimsIdClaimItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.claims)[':id']['claim-items'][':action_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.claims)[':id']['claim-items'][':action_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminClaimsIdClaimItemsActionIdKey()
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
            (typeof client.admin.claims)[':id']['claim-items'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.claims[':id']['claim-items'][':action_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminClaimsIdInboundItemsKey() {
  return ['admin', '/admin/claims/:id/inbound/items', 'POST'] as const
}

export function usePostAdminClaimsIdInboundItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.claims)[':id']['inbound']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.claims)[':id']['inbound']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsIdInboundItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.claims)[':id']['inbound']['items']['$post']>
        },
      ) => parseResponse(client.admin.claims[':id'].inbound.items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminClaimsIdInboundItemsActionIdKey() {
  return ['admin', '/admin/claims/:id/inbound/items/:action_id', 'POST'] as const
}

export function usePostAdminClaimsIdInboundItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsIdInboundItemsActionIdKey()
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
            (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.claims[':id'].inbound.items[':action_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminClaimsIdInboundItemsActionIdKey() {
  return ['admin', '/admin/claims/:id/inbound/items/:action_id', 'DELETE'] as const
}

export function useDeleteAdminClaimsIdInboundItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminClaimsIdInboundItemsActionIdKey()
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
            (typeof client.admin.claims)[':id']['inbound']['items'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.claims[':id'].inbound.items[':action_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminClaimsIdInboundShippingMethodKey() {
  return ['admin', '/admin/claims/:id/inbound/shipping-method', 'POST'] as const
}

export function usePostAdminClaimsIdInboundShippingMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.claims)[':id']['inbound']['shipping-method']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.claims)[':id']['inbound']['shipping-method']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsIdInboundShippingMethodKey()
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
            (typeof client.admin.claims)[':id']['inbound']['shipping-method']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.claims[':id'].inbound['shipping-method'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminClaimsIdInboundShippingMethodActionIdKey() {
  return ['admin', '/admin/claims/:id/inbound/shipping-method/:action_id', 'POST'] as const
}

export function usePostAdminClaimsIdInboundShippingMethodActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsIdInboundShippingMethodActionIdKey()
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
            (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.claims[':id'].inbound['shipping-method'][':action_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminClaimsIdInboundShippingMethodActionIdKey() {
  return ['admin', '/admin/claims/:id/inbound/shipping-method/:action_id', 'DELETE'] as const
}

export function useDeleteAdminClaimsIdInboundShippingMethodActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminClaimsIdInboundShippingMethodActionIdKey()
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
            (typeof client.admin.claims)[':id']['inbound']['shipping-method'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.claims[':id'].inbound['shipping-method'][':action_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminClaimsIdOutboundItemsKey() {
  return ['admin', '/admin/claims/:id/outbound/items', 'POST'] as const
}

export function usePostAdminClaimsIdOutboundItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.claims)[':id']['outbound']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.claims)[':id']['outbound']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsIdOutboundItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.claims)[':id']['outbound']['items']['$post']>
        },
      ) => parseResponse(client.admin.claims[':id'].outbound.items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminClaimsIdOutboundItemsActionIdKey() {
  return ['admin', '/admin/claims/:id/outbound/items/:action_id', 'POST'] as const
}

export function usePostAdminClaimsIdOutboundItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsIdOutboundItemsActionIdKey()
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
            (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.claims[':id'].outbound.items[':action_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminClaimsIdOutboundItemsActionIdKey() {
  return ['admin', '/admin/claims/:id/outbound/items/:action_id', 'DELETE'] as const
}

export function useDeleteAdminClaimsIdOutboundItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminClaimsIdOutboundItemsActionIdKey()
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
            (typeof client.admin.claims)[':id']['outbound']['items'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.claims[':id'].outbound.items[':action_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminClaimsIdOutboundShippingMethodKey() {
  return ['admin', '/admin/claims/:id/outbound/shipping-method', 'POST'] as const
}

export function usePostAdminClaimsIdOutboundShippingMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.claims)[':id']['outbound']['shipping-method']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.claims)[':id']['outbound']['shipping-method']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsIdOutboundShippingMethodKey()
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
            (typeof client.admin.claims)[':id']['outbound']['shipping-method']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.claims[':id'].outbound['shipping-method'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminClaimsIdOutboundShippingMethodActionIdKey() {
  return ['admin', '/admin/claims/:id/outbound/shipping-method/:action_id', 'POST'] as const
}

export function usePostAdminClaimsIdOutboundShippingMethodActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsIdOutboundShippingMethodActionIdKey()
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
            (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.claims[':id'].outbound['shipping-method'][':action_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminClaimsIdOutboundShippingMethodActionIdKey() {
  return ['admin', '/admin/claims/:id/outbound/shipping-method/:action_id', 'DELETE'] as const
}

export function useDeleteAdminClaimsIdOutboundShippingMethodActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminClaimsIdOutboundShippingMethodActionIdKey()
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
            (typeof client.admin.claims)[':id']['outbound']['shipping-method'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.claims[':id'].outbound['shipping-method'][':action_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminClaimsIdRequestKey() {
  return ['admin', '/admin/claims/:id/request', 'POST'] as const
}

export function usePostAdminClaimsIdRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.claims)[':id']['request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.claims)[':id']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminClaimsIdRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.claims)[':id']['request']['$post']> },
      ) => parseResponse(client.admin.claims[':id'].request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminClaimsIdRequestKey() {
  return ['admin', '/admin/claims/:id/request', 'DELETE'] as const
}

export function useDeleteAdminClaimsIdRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.claims)[':id']['request']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.claims)[':id']['request']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminClaimsIdRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.claims)[':id']['request']['$delete']> },
      ) => parseResponse(client.admin.claims[':id'].request.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminCollectionsKey(
  args: InferRequestType<typeof client.admin.collections.$get>,
) {
  return ['admin', '/admin/collections', args] as const
}

export function useGetAdminCollections<TError = unknown>(
  args: InferRequestType<typeof client.admin.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.collections.$get>>>>
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
        ? getGetAdminCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCollections<TError = unknown>(
  args: InferRequestType<typeof client.admin.collections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.collections.$get>>>>
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
        ? getGetAdminCollectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.collections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.collections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminCollectionsKey() {
  return ['admin', '/admin/collections', 'POST'] as const
}

export function usePostAdminCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.collections.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.collections.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.collections.$post> }) =>
        parseResponse(client.admin.collections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminCollectionsIdKey(
  args: InferRequestType<(typeof client.admin.collections)[':id']['$get']>,
) {
  return ['admin', '/admin/collections/:id', args] as const
}

export function useGetAdminCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.collections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.collections)[':id']['$get']>>
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
        ? getGetAdminCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.collections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.collections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCollectionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.collections)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.collections)[':id']['$get']>>
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
        ? getGetAdminCollectionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.collections)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.collections[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminCollectionsIdKey() {
  return ['admin', '/admin/collections/:id', 'POST'] as const
}

export function usePostAdminCollectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.collections)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.collections)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCollectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.collections)[':id']['$post']> },
      ) => parseResponse(client.admin.collections[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminCollectionsIdKey() {
  return ['admin', '/admin/collections/:id', 'DELETE'] as const
}

export function useDeleteAdminCollectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.collections)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.collections)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminCollectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.collections)[':id']['$delete']> },
      ) => parseResponse(client.admin.collections[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminCollectionsIdProductsKey() {
  return ['admin', '/admin/collections/:id/products', 'POST'] as const
}

export function usePostAdminCollectionsIdProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.collections)[':id']['products']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.collections)[':id']['products']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCollectionsIdProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.collections)[':id']['products']['$post']> },
      ) => parseResponse(client.admin.collections[':id'].products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminCurrenciesKey(
  args: InferRequestType<typeof client.admin.currencies.$get>,
) {
  return ['admin', '/admin/currencies', args] as const
}

export function useGetAdminCurrencies<TError = unknown>(
  args: InferRequestType<typeof client.admin.currencies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.currencies.$get>>>>
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
        ? getGetAdminCurrenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.currencies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.currencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCurrencies<TError = unknown>(
  args: InferRequestType<typeof client.admin.currencies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.currencies.$get>>>>
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
        ? getGetAdminCurrenciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.currencies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.currencies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminCurrenciesCodeKey(
  args: InferRequestType<(typeof client.admin.currencies)[':code']['$get']>,
) {
  return ['admin', '/admin/currencies/:code', args] as const
}

export function useGetAdminCurrenciesCode<TError = unknown>(
  args: InferRequestType<(typeof client.admin.currencies)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.currencies)[':code']['$get']>>
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
        ? getGetAdminCurrenciesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.currencies)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.currencies[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCurrenciesCode<TError = unknown>(
  args: InferRequestType<(typeof client.admin.currencies)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.currencies)[':code']['$get']>>
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
        ? getGetAdminCurrenciesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.currencies)[':code']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.currencies[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminCustomerGroupsKey(
  args: InferRequestType<(typeof client.admin)['customer-groups']['$get']>,
) {
  return ['admin', '/admin/customer-groups', args] as const
}

export function useGetAdminCustomerGroups<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['customer-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['customer-groups']['$get']>>
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
        ? getGetAdminCustomerGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['customer-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['customer-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCustomerGroups<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['customer-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['customer-groups']['$get']>>
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
        ? getGetAdminCustomerGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['customer-groups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['customer-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminCustomerGroupsKey() {
  return ['admin', '/admin/customer-groups', 'POST'] as const
}

export function usePostAdminCustomerGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['customer-groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['customer-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCustomerGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['customer-groups']['$post']> },
      ) => parseResponse(client.admin['customer-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminCustomerGroupsIdKey(
  args: InferRequestType<(typeof client.admin)['customer-groups'][':id']['$get']>,
) {
  return ['admin', '/admin/customer-groups/:id', args] as const
}

export function useGetAdminCustomerGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['customer-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$get']>>
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
        ? getGetAdminCustomerGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['customer-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCustomerGroupsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['customer-groups'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$get']>>
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
        ? getGetAdminCustomerGroupsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['customer-groups'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminCustomerGroupsIdKey() {
  return ['admin', '/admin/customer-groups/:id', 'POST'] as const
}

export function usePostAdminCustomerGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['customer-groups'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCustomerGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['customer-groups'][':id']['$post']> },
      ) => parseResponse(client.admin['customer-groups'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminCustomerGroupsIdKey() {
  return ['admin', '/admin/customer-groups/:id', 'DELETE'] as const
}

export function useDeleteAdminCustomerGroupsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['customer-groups'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminCustomerGroupsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['customer-groups'][':id']['$delete']> },
      ) => parseResponse(client.admin['customer-groups'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminCustomerGroupsIdCustomersKey() {
  return ['admin', '/admin/customer-groups/:id/customers', 'POST'] as const
}

export function usePostAdminCustomerGroupsIdCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['customer-groups'][':id']['customers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['customer-groups'][':id']['customers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCustomerGroupsIdCustomersKey()
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
            (typeof client.admin)['customer-groups'][':id']['customers']['$post']
          >
        },
      ) =>
        parseResponse(client.admin['customer-groups'][':id'].customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminCustomersKey(
  args: InferRequestType<typeof client.admin.customers.$get>,
) {
  return ['admin', '/admin/customers', args] as const
}

export function useGetAdminCustomers<TError = unknown>(
  args: InferRequestType<typeof client.admin.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCustomers<TError = unknown>(
  args: InferRequestType<typeof client.admin.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminCustomersKey() {
  return ['admin', '/admin/customers', 'POST'] as const
}

export function usePostAdminCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.customers.$post> }) =>
        parseResponse(client.admin.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminCustomersExportKey() {
  return ['admin', '/admin/customers/export', 'POST'] as const
}

export function usePostAdminCustomersExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.customers.export.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.customers.export.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCustomersExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.customers.export.$post> },
      ) => parseResponse(client.admin.customers.export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminCustomersIdKey(
  args: InferRequestType<(typeof client.admin.customers)[':id']['$get']>,
) {
  return ['admin', '/admin/customers/:id', args] as const
}

export function useGetAdminCustomersId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.customers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.customers)[':id']['$get']>>>
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
        ? getGetAdminCustomersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.customers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.customers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCustomersId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.customers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.customers)[':id']['$get']>>>
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
        ? getGetAdminCustomersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.customers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.customers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminCustomersIdKey() {
  return ['admin', '/admin/customers/:id', 'POST'] as const
}

export function usePostAdminCustomersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.customers)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.customers)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCustomersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.customers)[':id']['$post']> },
      ) => parseResponse(client.admin.customers[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminCustomersIdKey() {
  return ['admin', '/admin/customers/:id', 'DELETE'] as const
}

export function useDeleteAdminCustomersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.customers)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.customers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminCustomersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.customers)[':id']['$delete']> },
      ) => parseResponse(client.admin.customers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminCustomersIdAddressesKey(
  args: InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$get']>,
) {
  return ['admin', '/admin/customers/:id/addresses', args] as const
}

export function useGetAdminCustomersIdAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.customers)[':id']['addresses']['$get']>>
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
        ? getGetAdminCustomersIdAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.customers)[':id']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.customers[':id'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCustomersIdAddresses<TError = unknown>(
  args: InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.customers)[':id']['addresses']['$get']>>
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
        ? getGetAdminCustomersIdAddressesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.customers)[':id']['addresses']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.customers[':id'].addresses.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminCustomersIdAddressesKey() {
  return ['admin', '/admin/customers/:id/addresses', 'POST'] as const
}

export function usePostAdminCustomersIdAddresses<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.customers)[':id']['addresses']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCustomersIdAddressesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.customers)[':id']['addresses']['$post']> },
      ) => parseResponse(client.admin.customers[':id'].addresses.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminCustomersIdAddressesAddressIdKey(
  args: InferRequestType<
    (typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']
  >,
) {
  return ['admin', '/admin/customers/:id/addresses/:address_id', args] as const
}

export function useGetAdminCustomersIdAddressesAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']>
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
        ? getGetAdminCustomersIdAddressesAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.customers[':id'].addresses[':address_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminCustomersIdAddressesAddressId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']>
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
        ? getGetAdminCustomersIdAddressesAddressIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.customers[':id'].addresses[':address_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminCustomersIdAddressesAddressIdKey() {
  return ['admin', '/admin/customers/:id/addresses/:address_id', 'POST'] as const
}

export function usePostAdminCustomersIdAddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCustomersIdAddressesAddressIdKey()
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
            (typeof client.admin.customers)[':id']['addresses'][':address_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.customers[':id'].addresses[':address_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminCustomersIdAddressesAddressIdKey() {
  return ['admin', '/admin/customers/:id/addresses/:address_id', 'DELETE'] as const
}

export function useDeleteAdminCustomersIdAddressesAddressId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.customers)[':id']['addresses'][':address_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.customers)[':id']['addresses'][':address_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminCustomersIdAddressesAddressIdKey()
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
            (typeof client.admin.customers)[':id']['addresses'][':address_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.customers[':id'].addresses[':address_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminCustomersIdCustomerGroupsKey() {
  return ['admin', '/admin/customers/:id/customer-groups', 'POST'] as const
}

export function usePostAdminCustomersIdCustomerGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.customers)[':id']['customer-groups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.customers)[':id']['customer-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminCustomersIdCustomerGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.customers)[':id']['customer-groups']['$post']>
        },
      ) =>
        parseResponse(client.admin.customers[':id']['customer-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDraftOrdersKey(
  args: InferRequestType<(typeof client.admin)['draft-orders']['$get']>,
) {
  return ['admin', '/admin/draft-orders', args] as const
}

export function useGetAdminDraftOrders<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['draft-orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['draft-orders']['$get']>>>
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
        ? getGetAdminDraftOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['draft-orders']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['draft-orders'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDraftOrders<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['draft-orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['draft-orders']['$get']>>>
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
        ? getGetAdminDraftOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['draft-orders']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['draft-orders'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDraftOrdersKey() {
  return ['admin', '/admin/draft-orders', 'POST'] as const
}

export function usePostAdminDraftOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['draft-orders']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['draft-orders']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['draft-orders']['$post']> },
      ) => parseResponse(client.admin['draft-orders'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminDraftOrdersIdKey(
  args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['$get']>,
) {
  return ['admin', '/admin/draft-orders/:id', args] as const
}

export function useGetAdminDraftOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$get']>>
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
        ? getGetAdminDraftOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['draft-orders'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminDraftOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['draft-orders'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$get']>>
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
        ? getGetAdminDraftOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['draft-orders'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminDraftOrdersIdKey() {
  return ['admin', '/admin/draft-orders/:id', 'POST'] as const
}

export function usePostAdminDraftOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['draft-orders'][':id']['$post']> },
      ) => parseResponse(client.admin['draft-orders'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDraftOrdersIdKey() {
  return ['admin', '/admin/draft-orders/:id', 'DELETE'] as const
}

export function useDeleteAdminDraftOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDraftOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['draft-orders'][':id']['$delete']> },
      ) => parseResponse(client.admin['draft-orders'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDraftOrdersIdConvertToOrderKey() {
  return ['admin', '/admin/draft-orders/:id/convert-to-order', 'POST'] as const
}

export function usePostAdminDraftOrdersIdConvertToOrder<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['draft-orders'][':id']['convert-to-order']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['convert-to-order']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersIdConvertToOrderKey()
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
            (typeof client.admin)['draft-orders'][':id']['convert-to-order']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['draft-orders'][':id']['convert-to-order'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDraftOrdersIdEditKey() {
  return ['admin', '/admin/draft-orders/:id/edit', 'POST'] as const
}

export function usePostAdminDraftOrdersIdEdit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersIdEditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['$post']> },
      ) => parseResponse(client.admin['draft-orders'][':id'].edit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDraftOrdersIdEditKey() {
  return ['admin', '/admin/draft-orders/:id/edit', 'DELETE'] as const
}

export function useDeleteAdminDraftOrdersIdEdit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDraftOrdersIdEditKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['$delete']>
        },
      ) => parseResponse(client.admin['draft-orders'][':id'].edit.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDraftOrdersIdEditConfirmKey() {
  return ['admin', '/admin/draft-orders/:id/edit/confirm', 'POST'] as const
}

export function usePostAdminDraftOrdersIdEditConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['confirm']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersIdEditConfirmKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['confirm']['$post']
          >
        },
      ) =>
        parseResponse(client.admin['draft-orders'][':id'].edit.confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDraftOrdersIdEditItemsKey() {
  return ['admin', '/admin/draft-orders/:id/edit/items', 'POST'] as const
}

export function usePostAdminDraftOrdersIdEditItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['items']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersIdEditItemsKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['items']['$post']
          >
        },
      ) => parseResponse(client.admin['draft-orders'][':id'].edit.items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDraftOrdersIdEditItemsItemItemIdKey() {
  return ['admin', '/admin/draft-orders/:id/edit/items/item/:item_id', 'POST'] as const
}

export function usePostAdminDraftOrdersIdEditItemsItemItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['items']['item'][':item_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['items']['item'][':item_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersIdEditItemsItemItemIdKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['items']['item'][':item_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['draft-orders'][':id'].edit.items.item[':item_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDraftOrdersIdEditItemsActionIdKey() {
  return ['admin', '/admin/draft-orders/:id/edit/items/:action_id', 'POST'] as const
}

export function usePostAdminDraftOrdersIdEditItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersIdEditItemsActionIdKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['draft-orders'][':id'].edit.items[':action_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDraftOrdersIdEditItemsActionIdKey() {
  return ['admin', '/admin/draft-orders/:id/edit/items/:action_id', 'DELETE'] as const
}

export function useDeleteAdminDraftOrdersIdEditItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDraftOrdersIdEditItemsActionIdKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['items'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin['draft-orders'][':id'].edit.items[':action_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDraftOrdersIdEditPromotionsKey() {
  return ['admin', '/admin/draft-orders/:id/edit/promotions', 'POST'] as const
}

export function usePostAdminDraftOrdersIdEditPromotions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersIdEditPromotionsKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['draft-orders'][':id'].edit.promotions.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDraftOrdersIdEditPromotionsKey() {
  return ['admin', '/admin/draft-orders/:id/edit/promotions', 'DELETE'] as const
}

export function useDeleteAdminDraftOrdersIdEditPromotions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDraftOrdersIdEditPromotionsKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['promotions']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin['draft-orders'][':id'].edit.promotions.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDraftOrdersIdEditRequestKey() {
  return ['admin', '/admin/draft-orders/:id/edit/request', 'POST'] as const
}

export function usePostAdminDraftOrdersIdEditRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['draft-orders'][':id']['edit']['request']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['draft-orders'][':id']['edit']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersIdEditRequestKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['request']['$post']
          >
        },
      ) =>
        parseResponse(client.admin['draft-orders'][':id'].edit.request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDraftOrdersIdEditShippingMethodsKey() {
  return ['admin', '/admin/draft-orders/:id/edit/shipping-methods', 'POST'] as const
}

export function usePostAdminDraftOrdersIdEditShippingMethods<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersIdEditShippingMethodsKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['draft-orders'][':id'].edit['shipping-methods'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDraftOrdersIdEditShippingMethodsMethodMethodIdKey() {
  return [
    'admin',
    '/admin/draft-orders/:id/edit/shipping-methods/method/:method_id',
    'POST',
  ] as const
}

export function usePostAdminDraftOrdersIdEditShippingMethodsMethodMethodId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersIdEditShippingMethodsMethodMethodIdKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['draft-orders'][':id'].edit['shipping-methods'].method[':method_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdKey() {
  return [
    'admin',
    '/admin/draft-orders/:id/edit/shipping-methods/method/:method_id',
    'DELETE',
  ] as const
}

export function useDeleteAdminDraftOrdersIdEditShippingMethodsMethodMethodId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods']['method'][':method_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin['draft-orders'][':id'].edit['shipping-methods'].method[':method_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminDraftOrdersIdEditShippingMethodsActionIdKey() {
  return ['admin', '/admin/draft-orders/:id/edit/shipping-methods/:action_id', 'POST'] as const
}

export function usePostAdminDraftOrdersIdEditShippingMethodsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminDraftOrdersIdEditShippingMethodsActionIdKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['draft-orders'][':id'].edit['shipping-methods'][':action_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminDraftOrdersIdEditShippingMethodsActionIdKey() {
  return ['admin', '/admin/draft-orders/:id/edit/shipping-methods/:action_id', 'DELETE'] as const
}

export function useDeleteAdminDraftOrdersIdEditShippingMethodsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminDraftOrdersIdEditShippingMethodsActionIdKey()
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
            (typeof client.admin)['draft-orders'][':id']['edit']['shipping-methods'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin['draft-orders'][':id'].edit['shipping-methods'][':action_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminExchangesKey(
  args: InferRequestType<typeof client.admin.exchanges.$get>,
) {
  return ['admin', '/admin/exchanges', args] as const
}

export function useGetAdminExchanges<TError = unknown>(
  args: InferRequestType<typeof client.admin.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.exchanges.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminExchangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.exchanges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminExchanges<TError = unknown>(
  args: InferRequestType<typeof client.admin.exchanges.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.exchanges.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminExchangesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.exchanges.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.exchanges.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminExchangesKey() {
  return ['admin', '/admin/exchanges', 'POST'] as const
}

export function usePostAdminExchanges<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.exchanges.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.exchanges.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminExchangesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.exchanges.$post> }) =>
        parseResponse(client.admin.exchanges.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminExchangesIdKey(
  args: InferRequestType<(typeof client.admin.exchanges)[':id']['$get']>,
) {
  return ['admin', '/admin/exchanges/:id', args] as const
}

export function useGetAdminExchangesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.exchanges)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['$get']>>>
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
        ? getGetAdminExchangesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.exchanges[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminExchangesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.exchanges)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['$get']>>>
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
        ? getGetAdminExchangesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.exchanges[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminExchangesIdCancelKey() {
  return ['admin', '/admin/exchanges/:id/cancel', 'POST'] as const
}

export function usePostAdminExchangesIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.exchanges)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminExchangesIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.exchanges)[':id']['cancel']['$post']> },
      ) => parseResponse(client.admin.exchanges[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminExchangesIdInboundItemsKey() {
  return ['admin', '/admin/exchanges/:id/inbound/items', 'POST'] as const
}

export function usePostAdminExchangesIdInboundItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['inbound']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.exchanges)[':id']['inbound']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminExchangesIdInboundItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.exchanges)[':id']['inbound']['items']['$post']>
        },
      ) => parseResponse(client.admin.exchanges[':id'].inbound.items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminExchangesIdInboundItemsActionIdKey() {
  return ['admin', '/admin/exchanges/:id/inbound/items/:action_id', 'POST'] as const
}

export function usePostAdminExchangesIdInboundItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminExchangesIdInboundItemsActionIdKey()
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
            (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.exchanges[':id'].inbound.items[':action_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminExchangesIdInboundItemsActionIdKey() {
  return ['admin', '/admin/exchanges/:id/inbound/items/:action_id', 'DELETE'] as const
}

export function useDeleteAdminExchangesIdInboundItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminExchangesIdInboundItemsActionIdKey()
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
            (typeof client.admin.exchanges)[':id']['inbound']['items'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.exchanges[':id'].inbound.items[':action_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminExchangesIdInboundShippingMethodKey() {
  return ['admin', '/admin/exchanges/:id/inbound/shipping-method', 'POST'] as const
}

export function usePostAdminExchangesIdInboundShippingMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['inbound']['shipping-method']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.exchanges)[':id']['inbound']['shipping-method']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminExchangesIdInboundShippingMethodKey()
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
            (typeof client.admin.exchanges)[':id']['inbound']['shipping-method']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.exchanges[':id'].inbound['shipping-method'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminExchangesIdInboundShippingMethodActionIdKey() {
  return ['admin', '/admin/exchanges/:id/inbound/shipping-method/:action_id', 'POST'] as const
}

export function usePostAdminExchangesIdInboundShippingMethodActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminExchangesIdInboundShippingMethodActionIdKey()
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
            (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.exchanges[':id'].inbound['shipping-method'][':action_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminExchangesIdInboundShippingMethodActionIdKey() {
  return ['admin', '/admin/exchanges/:id/inbound/shipping-method/:action_id', 'DELETE'] as const
}

export function useDeleteAdminExchangesIdInboundShippingMethodActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminExchangesIdInboundShippingMethodActionIdKey()
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
            (typeof client.admin.exchanges)[':id']['inbound']['shipping-method'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.exchanges[':id'].inbound['shipping-method'][':action_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminExchangesIdOutboundItemsKey() {
  return ['admin', '/admin/exchanges/:id/outbound/items', 'POST'] as const
}

export function usePostAdminExchangesIdOutboundItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['outbound']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.exchanges)[':id']['outbound']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminExchangesIdOutboundItemsKey()
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
            (typeof client.admin.exchanges)[':id']['outbound']['items']['$post']
          >
        },
      ) => parseResponse(client.admin.exchanges[':id'].outbound.items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminExchangesIdOutboundItemsActionIdKey() {
  return ['admin', '/admin/exchanges/:id/outbound/items/:action_id', 'POST'] as const
}

export function usePostAdminExchangesIdOutboundItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminExchangesIdOutboundItemsActionIdKey()
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
            (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.exchanges[':id'].outbound.items[':action_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminExchangesIdOutboundItemsActionIdKey() {
  return ['admin', '/admin/exchanges/:id/outbound/items/:action_id', 'DELETE'] as const
}

export function useDeleteAdminExchangesIdOutboundItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminExchangesIdOutboundItemsActionIdKey()
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
            (typeof client.admin.exchanges)[':id']['outbound']['items'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.exchanges[':id'].outbound.items[':action_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminExchangesIdOutboundShippingMethodKey() {
  return ['admin', '/admin/exchanges/:id/outbound/shipping-method', 'POST'] as const
}

export function usePostAdminExchangesIdOutboundShippingMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['outbound']['shipping-method']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.exchanges)[':id']['outbound']['shipping-method']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminExchangesIdOutboundShippingMethodKey()
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
            (typeof client.admin.exchanges)[':id']['outbound']['shipping-method']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.exchanges[':id'].outbound['shipping-method'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminExchangesIdOutboundShippingMethodActionIdKey() {
  return ['admin', '/admin/exchanges/:id/outbound/shipping-method/:action_id', 'POST'] as const
}

export function usePostAdminExchangesIdOutboundShippingMethodActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminExchangesIdOutboundShippingMethodActionIdKey()
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
            (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.exchanges[':id'].outbound['shipping-method'][':action_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminExchangesIdOutboundShippingMethodActionIdKey() {
  return ['admin', '/admin/exchanges/:id/outbound/shipping-method/:action_id', 'DELETE'] as const
}

export function useDeleteAdminExchangesIdOutboundShippingMethodActionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminExchangesIdOutboundShippingMethodActionIdKey()
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
            (typeof client.admin.exchanges)[':id']['outbound']['shipping-method'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.exchanges[':id'].outbound['shipping-method'][':action_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminExchangesIdRequestKey() {
  return ['admin', '/admin/exchanges/:id/request', 'POST'] as const
}

export function usePostAdminExchangesIdRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.exchanges)[':id']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminExchangesIdRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.exchanges)[':id']['request']['$post']> },
      ) => parseResponse(client.admin.exchanges[':id'].request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminExchangesIdRequestKey() {
  return ['admin', '/admin/exchanges/:id/request', 'DELETE'] as const
}

export function useDeleteAdminExchangesIdRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.exchanges)[':id']['request']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.exchanges)[':id']['request']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminExchangesIdRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.exchanges)[':id']['request']['$delete']> },
      ) => parseResponse(client.admin.exchanges[':id'].request.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminFeatureFlagsKey() {
  return ['admin', '/admin/feature-flags'] as const
}

export function useGetAdminFeatureFlags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['feature-flags']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminFeatureFlagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['feature-flags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['feature-flags'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminFeatureFlags<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['feature-flags']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminFeatureFlagsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['feature-flags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['feature-flags'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminFulfillmentProvidersKey(
  args: InferRequestType<(typeof client.admin)['fulfillment-providers']['$get']>,
) {
  return ['admin', '/admin/fulfillment-providers', args] as const
}

export function useGetAdminFulfillmentProviders<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['fulfillment-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['fulfillment-providers']['$get']>>
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
        ? getGetAdminFulfillmentProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['fulfillment-providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['fulfillment-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminFulfillmentProviders<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['fulfillment-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['fulfillment-providers']['$get']>>
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
        ? getGetAdminFulfillmentProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['fulfillment-providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['fulfillment-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminFulfillmentProvidersIdOptionsKey(
  args: InferRequestType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>,
) {
  return ['admin', '/admin/fulfillment-providers/:id/options', args] as const
}

export function useGetAdminFulfillmentProvidersIdOptions<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>
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
        ? getGetAdminFulfillmentProvidersIdOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin['fulfillment-providers'][':id'].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminFulfillmentProvidersIdOptions<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>
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
        ? getGetAdminFulfillmentProvidersIdOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin)['fulfillment-providers'][':id']['options']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin['fulfillment-providers'][':id'].options.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminFulfillmentSetsIdKey() {
  return ['admin', '/admin/fulfillment-sets/:id', 'DELETE'] as const
}

export function useDeleteAdminFulfillmentSetsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['fulfillment-sets'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['fulfillment-sets'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminFulfillmentSetsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['fulfillment-sets'][':id']['$delete']> },
      ) => parseResponse(client.admin['fulfillment-sets'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminFulfillmentSetsIdServiceZonesKey() {
  return ['admin', '/admin/fulfillment-sets/:id/service-zones', 'POST'] as const
}

export function usePostAdminFulfillmentSetsIdServiceZones<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['fulfillment-sets'][':id']['service-zones']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['fulfillment-sets'][':id']['service-zones']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminFulfillmentSetsIdServiceZonesKey()
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
            (typeof client.admin)['fulfillment-sets'][':id']['service-zones']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['fulfillment-sets'][':id']['service-zones'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminFulfillmentSetsIdServiceZonesZoneIdKey(
  args: InferRequestType<
    (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
  >,
) {
  return ['admin', '/admin/fulfillment-sets/:id/service-zones/:zone_id', args] as const
}

export function useGetAdminFulfillmentSetsIdServiceZonesZoneId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
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
        ? getGetAdminFulfillmentSetsIdServiceZonesZoneIdKey(args)
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
                (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
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
          client.admin['fulfillment-sets'][':id']['service-zones'][':zone_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminFulfillmentSetsIdServiceZonesZoneId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
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
        ? getGetAdminFulfillmentSetsIdServiceZonesZoneIdKey(args)
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
                (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$get']
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
          client.admin['fulfillment-sets'][':id']['service-zones'][':zone_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminFulfillmentSetsIdServiceZonesZoneIdKey() {
  return ['admin', '/admin/fulfillment-sets/:id/service-zones/:zone_id', 'POST'] as const
}

export function usePostAdminFulfillmentSetsIdServiceZonesZoneId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminFulfillmentSetsIdServiceZonesZoneIdKey()
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
            (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['fulfillment-sets'][':id']['service-zones'][':zone_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminFulfillmentSetsIdServiceZonesZoneIdKey() {
  return ['admin', '/admin/fulfillment-sets/:id/service-zones/:zone_id', 'DELETE'] as const
}

export function useDeleteAdminFulfillmentSetsIdServiceZonesZoneId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminFulfillmentSetsIdServiceZonesZoneIdKey()
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
            (typeof client.admin)['fulfillment-sets'][':id']['service-zones'][':zone_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin['fulfillment-sets'][':id']['service-zones'][':zone_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminFulfillmentsKey() {
  return ['admin', '/admin/fulfillments', 'POST'] as const
}

export function usePostAdminFulfillments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.fulfillments.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.fulfillments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminFulfillmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.fulfillments.$post> }) =>
        parseResponse(client.admin.fulfillments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminFulfillmentsIdCancelKey() {
  return ['admin', '/admin/fulfillments/:id/cancel', 'POST'] as const
}

export function usePostAdminFulfillmentsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.fulfillments)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.fulfillments)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminFulfillmentsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.fulfillments)[':id']['cancel']['$post']> },
      ) => parseResponse(client.admin.fulfillments[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminFulfillmentsIdShipmentKey() {
  return ['admin', '/admin/fulfillments/:id/shipment', 'POST'] as const
}

export function usePostAdminFulfillmentsIdShipment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.fulfillments)[':id']['shipment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.fulfillments)[':id']['shipment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminFulfillmentsIdShipmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.fulfillments)[':id']['shipment']['$post']>
        },
      ) => parseResponse(client.admin.fulfillments[':id'].shipment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminGiftCardsKey(
  args: InferRequestType<(typeof client.admin)['gift-cards']['$get']>,
) {
  return ['admin', '/admin/gift-cards', args] as const
}

export function useGetAdminGiftCards<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['gift-cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['gift-cards']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminGiftCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['gift-cards']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['gift-cards'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminGiftCards<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['gift-cards']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['gift-cards']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminGiftCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['gift-cards']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['gift-cards'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminGiftCardsKey() {
  return ['admin', '/admin/gift-cards', 'POST'] as const
}

export function usePostAdminGiftCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['gift-cards']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['gift-cards']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminGiftCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['gift-cards']['$post']> },
      ) => parseResponse(client.admin['gift-cards'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminGiftCardsIdKey(
  args: InferRequestType<(typeof client.admin)['gift-cards'][':id']['$get']>,
) {
  return ['admin', '/admin/gift-cards/:id', args] as const
}

export function useGetAdminGiftCardsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['gift-cards'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['$get']>>
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
        ? getGetAdminGiftCardsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['gift-cards'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminGiftCardsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['gift-cards'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['$get']>>
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
        ? getGetAdminGiftCardsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['gift-cards'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminGiftCardsIdKey() {
  return ['admin', '/admin/gift-cards/:id', 'POST'] as const
}

export function usePostAdminGiftCardsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['gift-cards'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminGiftCardsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['gift-cards'][':id']['$post']> },
      ) => parseResponse(client.admin['gift-cards'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminGiftCardsIdOrdersKey(
  args: InferRequestType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>,
) {
  return ['admin', '/admin/gift-cards/:id/orders', args] as const
}

export function useGetAdminGiftCardsIdOrders<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>>
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
        ? getGetAdminGiftCardsIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['gift-cards'][':id'].orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminGiftCardsIdOrders<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>>
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
        ? getGetAdminGiftCardsIdOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['gift-cards'][':id']['orders']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['gift-cards'][':id'].orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminIndexDetailsKey() {
  return ['admin', '/admin/index/details'] as const
}

export function useGetAdminIndexDetails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.index.details.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminIndexDetailsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.index.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.index.details.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminIndexDetails<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.index.details.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminIndexDetailsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.index.details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.index.details.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminIndexSyncKey() {
  return ['admin', '/admin/index/sync', 'POST'] as const
}

export function usePostAdminIndexSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.index.sync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.index.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminIndexSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.index.sync.$post> }) =>
        parseResponse(client.admin.index.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminInventoryItemsKey(
  args: InferRequestType<(typeof client.admin)['inventory-items']['$get']>,
) {
  return ['admin', '/admin/inventory-items', args] as const
}

export function useGetAdminInventoryItems<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['inventory-items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['inventory-items']['$get']>>
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
        ? getGetAdminInventoryItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['inventory-items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['inventory-items'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminInventoryItems<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['inventory-items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['inventory-items']['$get']>>
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
        ? getGetAdminInventoryItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['inventory-items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['inventory-items'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminInventoryItemsKey() {
  return ['admin', '/admin/inventory-items', 'POST'] as const
}

export function usePostAdminInventoryItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['inventory-items']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['inventory-items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminInventoryItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['inventory-items']['$post']> },
      ) => parseResponse(client.admin['inventory-items'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminInventoryItemsExportKey() {
  return ['admin', '/admin/inventory-items/export', 'POST'] as const
}

export function usePostAdminInventoryItemsExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['inventory-items']['export']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['inventory-items']['export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminInventoryItemsExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['inventory-items']['export']['$post']> },
      ) => parseResponse(client.admin['inventory-items'].export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminInventoryItemsLocationLevelsBatchKey() {
  return ['admin', '/admin/inventory-items/location-levels/batch', 'POST'] as const
}

export function usePostAdminInventoryItemsLocationLevelsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['inventory-items']['location-levels']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['inventory-items']['location-levels']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminInventoryItemsLocationLevelsBatchKey()
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
            (typeof client.admin)['inventory-items']['location-levels']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['inventory-items']['location-levels'].batch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminInventoryItemsIdKey(
  args: InferRequestType<(typeof client.admin)['inventory-items'][':id']['$get']>,
) {
  return ['admin', '/admin/inventory-items/:id', args] as const
}

export function useGetAdminInventoryItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['inventory-items'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$get']>>
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
        ? getGetAdminInventoryItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['inventory-items'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminInventoryItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['inventory-items'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$get']>>
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
        ? getGetAdminInventoryItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['inventory-items'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminInventoryItemsIdKey() {
  return ['admin', '/admin/inventory-items/:id', 'POST'] as const
}

export function usePostAdminInventoryItemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['inventory-items'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminInventoryItemsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['inventory-items'][':id']['$post']> },
      ) => parseResponse(client.admin['inventory-items'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminInventoryItemsIdKey() {
  return ['admin', '/admin/inventory-items/:id', 'DELETE'] as const
}

export function useDeleteAdminInventoryItemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['inventory-items'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['inventory-items'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminInventoryItemsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['inventory-items'][':id']['$delete']> },
      ) => parseResponse(client.admin['inventory-items'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminInventoryItemsIdLocationLevelsKey(
  args: InferRequestType<
    (typeof client.admin)['inventory-items'][':id']['location-levels']['$get']
  >,
) {
  return ['admin', '/admin/inventory-items/:id/location-levels', args] as const
}

export function useGetAdminInventoryItemsIdLocationLevels<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['inventory-items'][':id']['location-levels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$get']>
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
        ? getGetAdminInventoryItemsIdLocationLevelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin['inventory-items'][':id']['location-levels'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminInventoryItemsIdLocationLevels<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['inventory-items'][':id']['location-levels']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$get']>
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
        ? getGetAdminInventoryItemsIdLocationLevelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin['inventory-items'][':id']['location-levels'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminInventoryItemsIdLocationLevelsKey() {
  return ['admin', '/admin/inventory-items/:id/location-levels', 'POST'] as const
}

export function usePostAdminInventoryItemsIdLocationLevels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['inventory-items'][':id']['location-levels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminInventoryItemsIdLocationLevelsKey()
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
            (typeof client.admin)['inventory-items'][':id']['location-levels']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['inventory-items'][':id']['location-levels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminInventoryItemsIdLocationLevelsBatchKey() {
  return ['admin', '/admin/inventory-items/:id/location-levels/batch', 'POST'] as const
}

export function usePostAdminInventoryItemsIdLocationLevelsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['inventory-items'][':id']['location-levels']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['inventory-items'][':id']['location-levels']['batch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminInventoryItemsIdLocationLevelsBatchKey()
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
            (typeof client.admin)['inventory-items'][':id']['location-levels']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['inventory-items'][':id']['location-levels'].batch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminInventoryItemsIdLocationLevelsLocationIdKey() {
  return ['admin', '/admin/inventory-items/:id/location-levels/:location_id', 'POST'] as const
}

export function usePostAdminInventoryItemsIdLocationLevelsLocationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminInventoryItemsIdLocationLevelsLocationIdKey()
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
            (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['inventory-items'][':id']['location-levels'][':location_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminInventoryItemsIdLocationLevelsLocationIdKey() {
  return ['admin', '/admin/inventory-items/:id/location-levels/:location_id', 'DELETE'] as const
}

export function useDeleteAdminInventoryItemsIdLocationLevelsLocationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminInventoryItemsIdLocationLevelsLocationIdKey()
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
            (typeof client.admin)['inventory-items'][':id']['location-levels'][':location_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin['inventory-items'][':id']['location-levels'][':location_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminInvitesKey(args: InferRequestType<typeof client.admin.invites.$get>) {
  return ['admin', '/admin/invites', args] as const
}

export function useGetAdminInvites<TError = unknown>(
  args: InferRequestType<typeof client.admin.invites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminInvitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminInvites<TError = unknown>(
  args: InferRequestType<typeof client.admin.invites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminInvitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminInvitesKey() {
  return ['admin', '/admin/invites', 'POST'] as const
}

export function usePostAdminInvites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.invites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminInvitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.invites.$post> }) =>
        parseResponse(client.admin.invites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminInvitesAcceptKey() {
  return ['admin', '/admin/invites/accept', 'POST'] as const
}

export function usePostAdminInvitesAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.invites.accept.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.invites.accept.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminInvitesAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.invites.accept.$post> },
      ) => parseResponse(client.admin.invites.accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminInvitesIdKey(
  args: InferRequestType<(typeof client.admin.invites)[':id']['$get']>,
) {
  return ['admin', '/admin/invites/:id', args] as const
}

export function useGetAdminInvitesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.invites)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.invites)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminInvitesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.invites)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.invites[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminInvitesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.invites)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.invites)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminInvitesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.invites)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.invites[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminInvitesIdKey() {
  return ['admin', '/admin/invites/:id', 'DELETE'] as const
}

export function useDeleteAdminInvitesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.invites)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.invites)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminInvitesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.invites)[':id']['$delete']> },
      ) => parseResponse(client.admin.invites[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminInvitesIdResendKey() {
  return ['admin', '/admin/invites/:id/resend', 'POST'] as const
}

export function usePostAdminInvitesIdResend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.invites)[':id']['resend']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.invites)[':id']['resend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminInvitesIdResendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.invites)[':id']['resend']['$post']> },
      ) => parseResponse(client.admin.invites[':id'].resend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminLayoutsConfigurationsKey(
  args: InferRequestType<typeof client.admin.layouts.configurations.$get>,
) {
  return ['admin', '/admin/layouts/configurations', args] as const
}

export function useGetAdminLayoutsConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.admin.layouts.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.layouts.configurations.$get>>>
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
        ? getGetAdminLayoutsConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.layouts.configurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.layouts.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminLayoutsConfigurations<TError = unknown>(
  args: InferRequestType<typeof client.admin.layouts.configurations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.layouts.configurations.$get>>>
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
        ? getGetAdminLayoutsConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.layouts.configurations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.layouts.configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminLayoutsZoneConfigurationKey(
  args: InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>,
) {
  return ['admin', '/admin/layouts/:zone/configuration', args] as const
}

export function useGetAdminLayoutsZoneConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>>
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
        ? getGetAdminLayoutsZoneConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.layouts[':zone'].configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminLayoutsZoneConfiguration<TError = unknown>(
  args: InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>>
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
        ? getGetAdminLayoutsZoneConfigurationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.layouts[':zone'].configuration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminLayoutsZoneConfigurationKey() {
  return ['admin', '/admin/layouts/:zone/configuration', 'POST'] as const
}

export function usePostAdminLayoutsZoneConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminLayoutsZoneConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$post']>
        },
      ) => parseResponse(client.admin.layouts[':zone'].configuration.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminLayoutsZoneConfigurationKey() {
  return ['admin', '/admin/layouts/:zone/configuration', 'DELETE'] as const
}

export function useDeleteAdminLayoutsZoneConfiguration<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.layouts)[':zone']['configuration']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminLayoutsZoneConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.layouts)[':zone']['configuration']['$delete']>
        },
      ) => parseResponse(client.admin.layouts[':zone'].configuration.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminLocalesKey(args: InferRequestType<typeof client.admin.locales.$get>) {
  return ['admin', '/admin/locales', args] as const
}

export function useGetAdminLocales<TError = unknown>(
  args: InferRequestType<typeof client.admin.locales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.locales.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminLocalesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.locales.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.locales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminLocales<TError = unknown>(
  args: InferRequestType<typeof client.admin.locales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.locales.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminLocalesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.locales.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.locales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminLocalesCodeKey(
  args: InferRequestType<(typeof client.admin.locales)[':code']['$get']>,
) {
  return ['admin', '/admin/locales/:code', args] as const
}

export function useGetAdminLocalesCode<TError = unknown>(
  args: InferRequestType<(typeof client.admin.locales)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.locales)[':code']['$get']>>>
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
        ? getGetAdminLocalesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.locales)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.locales[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminLocalesCode<TError = unknown>(
  args: InferRequestType<(typeof client.admin.locales)[':code']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.locales)[':code']['$get']>>>
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
        ? getGetAdminLocalesCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.locales)[':code']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.locales[':code'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminModulesKey() {
  return ['admin', '/admin/modules'] as const
}

export function useGetAdminModules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.modules.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminModulesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.modules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.modules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminModules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.modules.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminModulesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.modules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.modules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminNotificationsKey(
  args: InferRequestType<typeof client.admin.notifications.$get>,
) {
  return ['admin', '/admin/notifications', args] as const
}

export function useGetAdminNotifications<TError = unknown>(
  args: InferRequestType<typeof client.admin.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.notifications.$get>>>
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
        ? getGetAdminNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminNotifications<TError = unknown>(
  args: InferRequestType<typeof client.admin.notifications.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.notifications.$get>>>
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
        ? getGetAdminNotificationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.notifications.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.notifications.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminNotificationsIdKey(
  args: InferRequestType<(typeof client.admin.notifications)[':id']['$get']>,
) {
  return ['admin', '/admin/notifications/:id', args] as const
}

export function useGetAdminNotificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.notifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.notifications)[':id']['$get']>>
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
        ? getGetAdminNotificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.notifications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.notifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminNotificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.notifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.notifications)[':id']['$get']>>
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
        ? getGetAdminNotificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.notifications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.notifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminOrderChangesIdKey() {
  return ['admin', '/admin/order-changes/:id', 'POST'] as const
}

export function usePostAdminOrderChangesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['order-changes'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['order-changes'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrderChangesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['order-changes'][':id']['$post']> },
      ) => parseResponse(client.admin['order-changes'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrderEditsKey() {
  return ['admin', '/admin/order-edits', 'POST'] as const
}

export function usePostAdminOrderEdits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['order-edits']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['order-edits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrderEditsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['order-edits']['$post']> },
      ) => parseResponse(client.admin['order-edits'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminOrderEditsIdKey() {
  return ['admin', '/admin/order-edits/:id', 'DELETE'] as const
}

export function useDeleteAdminOrderEditsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['order-edits'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminOrderEditsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['order-edits'][':id']['$delete']> },
      ) => parseResponse(client.admin['order-edits'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrderEditsIdConfirmKey() {
  return ['admin', '/admin/order-edits/:id/confirm', 'POST'] as const
}

export function usePostAdminOrderEditsIdConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['order-edits'][':id']['confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrderEditsIdConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin)['order-edits'][':id']['confirm']['$post']>
        },
      ) => parseResponse(client.admin['order-edits'][':id'].confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrderEditsIdItemsKey() {
  return ['admin', '/admin/order-edits/:id/items', 'POST'] as const
}

export function usePostAdminOrderEditsIdItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['order-edits'][':id']['items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrderEditsIdItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['order-edits'][':id']['items']['$post']> },
      ) => parseResponse(client.admin['order-edits'][':id'].items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrderEditsIdItemsItemItemIdKey() {
  return ['admin', '/admin/order-edits/:id/items/item/:item_id', 'POST'] as const
}

export function usePostAdminOrderEditsIdItemsItemItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['order-edits'][':id']['items']['item'][':item_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['order-edits'][':id']['items']['item'][':item_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrderEditsIdItemsItemItemIdKey()
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
            (typeof client.admin)['order-edits'][':id']['items']['item'][':item_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['order-edits'][':id'].items.item[':item_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrderEditsIdItemsActionIdKey() {
  return ['admin', '/admin/order-edits/:id/items/:action_id', 'POST'] as const
}

export function usePostAdminOrderEditsIdItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['order-edits'][':id']['items'][':action_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['items'][':action_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrderEditsIdItemsActionIdKey()
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
            (typeof client.admin)['order-edits'][':id']['items'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['order-edits'][':id'].items[':action_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminOrderEditsIdItemsActionIdKey() {
  return ['admin', '/admin/order-edits/:id/items/:action_id', 'DELETE'] as const
}

export function useDeleteAdminOrderEditsIdItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['order-edits'][':id']['items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['items'][':action_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminOrderEditsIdItemsActionIdKey()
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
            (typeof client.admin)['order-edits'][':id']['items'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin['order-edits'][':id'].items[':action_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrderEditsIdRequestKey() {
  return ['admin', '/admin/order-edits/:id/request', 'POST'] as const
}

export function usePostAdminOrderEditsIdRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['order-edits'][':id']['request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrderEditsIdRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin)['order-edits'][':id']['request']['$post']>
        },
      ) => parseResponse(client.admin['order-edits'][':id'].request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrderEditsIdShippingMethodKey() {
  return ['admin', '/admin/order-edits/:id/shipping-method', 'POST'] as const
}

export function usePostAdminOrderEditsIdShippingMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['order-edits'][':id']['shipping-method']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['order-edits'][':id']['shipping-method']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrderEditsIdShippingMethodKey()
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
            (typeof client.admin)['order-edits'][':id']['shipping-method']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['order-edits'][':id']['shipping-method'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrderEditsIdShippingMethodActionIdKey() {
  return ['admin', '/admin/order-edits/:id/shipping-method/:action_id', 'POST'] as const
}

export function usePostAdminOrderEditsIdShippingMethodActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrderEditsIdShippingMethodActionIdKey()
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
            (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['order-edits'][':id']['shipping-method'][':action_id'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminOrderEditsIdShippingMethodActionIdKey() {
  return ['admin', '/admin/order-edits/:id/shipping-method/:action_id', 'DELETE'] as const
}

export function useDeleteAdminOrderEditsIdShippingMethodActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminOrderEditsIdShippingMethodActionIdKey()
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
            (typeof client.admin)['order-edits'][':id']['shipping-method'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin['order-edits'][':id']['shipping-method'][':action_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminOrdersKey(args: InferRequestType<typeof client.admin.orders.$get>) {
  return ['admin', '/admin/orders', args] as const
}

export function useGetAdminOrders<TError = unknown>(
  args: InferRequestType<typeof client.admin.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOrders<TError = unknown>(
  args: InferRequestType<typeof client.admin.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminOrdersExportKey() {
  return ['admin', '/admin/orders/export', 'POST'] as const
}

export function usePostAdminOrdersExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.orders.export.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.orders.export.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.orders.export.$post> }) =>
        parseResponse(client.admin.orders.export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminOrdersIdKey(
  args: InferRequestType<(typeof client.admin.orders)[':id']['$get']>,
) {
  return ['admin', '/admin/orders/:id', args] as const
}

export function useGetAdminOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.orders)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminOrdersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.orders)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminOrdersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminOrdersIdKey() {
  return ['admin', '/admin/orders/:id', 'POST'] as const
}

export function usePostAdminOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.orders)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.orders)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.orders)[':id']['$post']> },
      ) => parseResponse(client.admin.orders[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrdersIdArchiveKey() {
  return ['admin', '/admin/orders/:id/archive', 'POST'] as const
}

export function usePostAdminOrdersIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.orders)[':id']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdArchiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.orders)[':id']['archive']['$post']> },
      ) => parseResponse(client.admin.orders[':id'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrdersIdCancelKey() {
  return ['admin', '/admin/orders/:id/cancel', 'POST'] as const
}

export function usePostAdminOrdersIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.orders)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.orders)[':id']['cancel']['$post']> },
      ) => parseResponse(client.admin.orders[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminOrdersIdChangesKey(
  args: InferRequestType<(typeof client.admin.orders)[':id']['changes']['$get']>,
) {
  return ['admin', '/admin/orders/:id/changes', args] as const
}

export function useGetAdminOrdersIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client.admin.orders)[':id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['changes']['$get']>>
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
        ? getGetAdminOrdersIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.orders[':id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOrdersIdChanges<TError = unknown>(
  args: InferRequestType<(typeof client.admin.orders)[':id']['changes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['changes']['$get']>>
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
        ? getGetAdminOrdersIdChangesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['changes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.orders[':id'].changes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminOrdersIdCompleteKey() {
  return ['admin', '/admin/orders/:id/complete', 'POST'] as const
}

export function usePostAdminOrdersIdComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['complete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.orders)[':id']['complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.orders)[':id']['complete']['$post']> },
      ) => parseResponse(client.admin.orders[':id'].complete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrdersIdCreditLinesKey() {
  return ['admin', '/admin/orders/:id/credit-lines', 'POST'] as const
}

export function usePostAdminOrdersIdCreditLines<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['credit-lines']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.orders)[':id']['credit-lines']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdCreditLinesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.orders)[':id']['credit-lines']['$post']> },
      ) => parseResponse(client.admin.orders[':id']['credit-lines'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrdersIdFulfillmentsKey() {
  return ['admin', '/admin/orders/:id/fulfillments', 'POST'] as const
}

export function usePostAdminOrdersIdFulfillments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['fulfillments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.orders)[':id']['fulfillments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdFulfillmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.orders)[':id']['fulfillments']['$post']> },
      ) => parseResponse(client.admin.orders[':id'].fulfillments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrdersIdFulfillmentsFulfillmentIdCancelKey() {
  return ['admin', '/admin/orders/:id/fulfillments/:fulfillment_id/cancel', 'POST'] as const
}

export function usePostAdminOrdersIdFulfillmentsFulfillmentIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdFulfillmentsFulfillmentIdCancelKey()
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
            (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.orders[':id'].fulfillments[':fulfillment_id'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredKey() {
  return [
    'admin',
    '/admin/orders/:id/fulfillments/:fulfillment_id/mark-as-delivered',
    'POST',
  ] as const
}

export function usePostAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDelivered<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['mark-as-delivered']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['mark-as-delivered']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredKey()
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
            (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['mark-as-delivered']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.orders[':id'].fulfillments[':fulfillment_id']['mark-as-delivered'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrdersIdFulfillmentsFulfillmentIdShipmentsKey() {
  return ['admin', '/admin/orders/:id/fulfillments/:fulfillment_id/shipments', 'POST'] as const
}

export function usePostAdminOrdersIdFulfillmentsFulfillmentIdShipments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['shipments']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['shipments']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdFulfillmentsFulfillmentIdShipmentsKey()
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
            (typeof client.admin.orders)[':id']['fulfillments'][':fulfillment_id']['shipments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.orders[':id'].fulfillments[':fulfillment_id'].shipments.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminOrdersIdLineItemsKey(
  args: InferRequestType<(typeof client.admin.orders)[':id']['line-items']['$get']>,
) {
  return ['admin', '/admin/orders/:id/line-items', args] as const
}

export function useGetAdminOrdersIdLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.admin.orders)[':id']['line-items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['line-items']['$get']>>
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
        ? getGetAdminOrdersIdLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['line-items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.orders[':id']['line-items'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOrdersIdLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.admin.orders)[':id']['line-items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['line-items']['$get']>>
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
        ? getGetAdminOrdersIdLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['line-items']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.orders[':id']['line-items'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminOrdersIdPaymentSessionsAuthorizeKey() {
  return ['admin', '/admin/orders/:id/payment-sessions/authorize', 'POST'] as const
}

export function usePostAdminOrdersIdPaymentSessionsAuthorize<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.orders)[':id']['payment-sessions']['authorize']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.orders)[':id']['payment-sessions']['authorize']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdPaymentSessionsAuthorizeKey()
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
            (typeof client.admin.orders)[':id']['payment-sessions']['authorize']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.orders[':id']['payment-sessions'].authorize.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminOrdersIdPreviewKey(
  args: InferRequestType<(typeof client.admin.orders)[':id']['preview']['$get']>,
) {
  return ['admin', '/admin/orders/:id/preview', args] as const
}

export function useGetAdminOrdersIdPreview<TError = unknown>(
  args: InferRequestType<(typeof client.admin.orders)[':id']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['preview']['$get']>>
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
        ? getGetAdminOrdersIdPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['preview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.orders[':id'].preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOrdersIdPreview<TError = unknown>(
  args: InferRequestType<(typeof client.admin.orders)[':id']['preview']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['preview']['$get']>>
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
        ? getGetAdminOrdersIdPreviewKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['preview']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.orders[':id'].preview.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminOrdersIdShippingOptionsKey(
  args: InferRequestType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>,
) {
  return ['admin', '/admin/orders/:id/shipping-options', args] as const
}

export function useGetAdminOrdersIdShippingOptions<TError = unknown>(
  args: InferRequestType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>>
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
        ? getGetAdminOrdersIdShippingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.orders[':id']['shipping-options'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminOrdersIdShippingOptions<TError = unknown>(
  args: InferRequestType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>>
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
        ? getGetAdminOrdersIdShippingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.orders)[':id']['shipping-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.orders[':id']['shipping-options'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminOrdersIdTransferKey() {
  return ['admin', '/admin/orders/:id/transfer', 'POST'] as const
}

export function usePostAdminOrdersIdTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['transfer']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.orders)[':id']['transfer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.orders)[':id']['transfer']['$post']> },
      ) => parseResponse(client.admin.orders[':id'].transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrdersIdTransferCancelKey() {
  return ['admin', '/admin/orders/:id/transfer/cancel', 'POST'] as const
}

export function usePostAdminOrdersIdTransferCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['transfer']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.orders)[':id']['transfer']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdTransferCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.orders)[':id']['transfer']['cancel']['$post']>
        },
      ) => parseResponse(client.admin.orders[':id'].transfer.cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminOrdersIdTransferGuestKey() {
  return ['admin', '/admin/orders/:id/transfer/guest', 'POST'] as const
}

export function usePostAdminOrdersIdTransferGuest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.orders)[':id']['transfer']['guest']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.orders)[':id']['transfer']['guest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminOrdersIdTransferGuestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.orders)[':id']['transfer']['guest']['$post']>
        },
      ) => parseResponse(client.admin.orders[':id'].transfer.guest.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminPaymentCollectionsKey() {
  return ['admin', '/admin/payment-collections', 'POST'] as const
}

export function usePostAdminPaymentCollections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['payment-collections']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['payment-collections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPaymentCollectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['payment-collections']['$post']> },
      ) => parseResponse(client.admin['payment-collections'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminPaymentCollectionsIdKey() {
  return ['admin', '/admin/payment-collections/:id', 'DELETE'] as const
}

export function useDeleteAdminPaymentCollectionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['payment-collections'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['payment-collections'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminPaymentCollectionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin)['payment-collections'][':id']['$delete']>
        },
      ) => parseResponse(client.admin['payment-collections'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminPaymentCollectionsIdMarkAsPaidKey() {
  return ['admin', '/admin/payment-collections/:id/mark-as-paid', 'POST'] as const
}

export function usePostAdminPaymentCollectionsIdMarkAsPaid<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['payment-collections'][':id']['mark-as-paid']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['payment-collections'][':id']['mark-as-paid']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPaymentCollectionsIdMarkAsPaidKey()
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
            (typeof client.admin)['payment-collections'][':id']['mark-as-paid']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['payment-collections'][':id']['mark-as-paid'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminPaymentCollectionsIdPaymentSessionsKey() {
  return ['admin', '/admin/payment-collections/:id/payment-sessions', 'POST'] as const
}

export function usePostAdminPaymentCollectionsIdPaymentSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['payment-collections'][':id']['payment-sessions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['payment-collections'][':id']['payment-sessions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPaymentCollectionsIdPaymentSessionsKey()
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
            (typeof client.admin)['payment-collections'][':id']['payment-sessions']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['payment-collections'][':id']['payment-sessions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminPaymentsKey(args: InferRequestType<typeof client.admin.payments.$get>) {
  return ['admin', '/admin/payments', args] as const
}

export function useGetAdminPayments<TError = unknown>(
  args: InferRequestType<typeof client.admin.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPayments<TError = unknown>(
  args: InferRequestType<typeof client.admin.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.payments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminPaymentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminPaymentsPaymentProvidersKey(
  args: InferRequestType<(typeof client.admin.payments)['payment-providers']['$get']>,
) {
  return ['admin', '/admin/payments/payment-providers', args] as const
}

export function useGetAdminPaymentsPaymentProviders<TError = unknown>(
  args: InferRequestType<(typeof client.admin.payments)['payment-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.payments)['payment-providers']['$get']>>
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
        ? getGetAdminPaymentsPaymentProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.payments)['payment-providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.payments['payment-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPaymentsPaymentProviders<TError = unknown>(
  args: InferRequestType<(typeof client.admin.payments)['payment-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.payments)['payment-providers']['$get']>>
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
        ? getGetAdminPaymentsPaymentProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.payments)['payment-providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.payments['payment-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminPaymentsIdKey(
  args: InferRequestType<(typeof client.admin.payments)[':id']['$get']>,
) {
  return ['admin', '/admin/payments/:id', args] as const
}

export function useGetAdminPaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.payments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.payments)[':id']['$get']>>>
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
        ? getGetAdminPaymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.payments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.payments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.payments)[':id']['$get']>>>
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
        ? getGetAdminPaymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.payments)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminPaymentsIdCaptureKey() {
  return ['admin', '/admin/payments/:id/capture', 'POST'] as const
}

export function usePostAdminPaymentsIdCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.payments)[':id']['capture']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.payments)[':id']['capture']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPaymentsIdCaptureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.payments)[':id']['capture']['$post']> },
      ) => parseResponse(client.admin.payments[':id'].capture.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminPaymentsIdRefundKey() {
  return ['admin', '/admin/payments/:id/refund', 'POST'] as const
}

export function usePostAdminPaymentsIdRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.payments)[':id']['refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.payments)[':id']['refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPaymentsIdRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.payments)[':id']['refund']['$post']> },
      ) => parseResponse(client.admin.payments[':id'].refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminPluginsKey() {
  return ['admin', '/admin/plugins'] as const
}

export function useGetAdminPlugins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.plugins.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminPluginsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.plugins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.plugins.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPlugins<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.plugins.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminPluginsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.plugins.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.plugins.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminPriceListsKey(
  args: InferRequestType<(typeof client.admin)['price-lists']['$get']>,
) {
  return ['admin', '/admin/price-lists', args] as const
}

export function useGetAdminPriceLists<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['price-lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['price-lists']['$get']>>>
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
        ? getGetAdminPriceListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['price-lists']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['price-lists'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPriceLists<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['price-lists']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['price-lists']['$get']>>>
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
        ? getGetAdminPriceListsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['price-lists']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['price-lists'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminPriceListsKey() {
  return ['admin', '/admin/price-lists', 'POST'] as const
}

export function usePostAdminPriceLists<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['price-lists']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['price-lists']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPriceListsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['price-lists']['$post']> },
      ) => parseResponse(client.admin['price-lists'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminPriceListsIdKey(
  args: InferRequestType<(typeof client.admin)['price-lists'][':id']['$get']>,
) {
  return ['admin', '/admin/price-lists/:id', args] as const
}

export function useGetAdminPriceListsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['price-lists'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$get']>>
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
        ? getGetAdminPriceListsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['price-lists'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPriceListsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['price-lists'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$get']>>
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
        ? getGetAdminPriceListsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['price-lists'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminPriceListsIdKey() {
  return ['admin', '/admin/price-lists/:id', 'POST'] as const
}

export function usePostAdminPriceListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['price-lists'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPriceListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['price-lists'][':id']['$post']> },
      ) => parseResponse(client.admin['price-lists'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminPriceListsIdKey() {
  return ['admin', '/admin/price-lists/:id', 'DELETE'] as const
}

export function useDeleteAdminPriceListsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['price-lists'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminPriceListsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['price-lists'][':id']['$delete']> },
      ) => parseResponse(client.admin['price-lists'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminPriceListsIdPricesKey(
  args: InferRequestType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>,
) {
  return ['admin', '/admin/price-lists/:id/prices', args] as const
}

export function useGetAdminPriceListsIdPrices<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>>
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
        ? getGetAdminPriceListsIdPricesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['price-lists'][':id'].prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPriceListsIdPrices<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>>
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
        ? getGetAdminPriceListsIdPricesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['prices']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['price-lists'][':id'].prices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminPriceListsIdPricesBatchKey() {
  return ['admin', '/admin/price-lists/:id/prices/batch', 'POST'] as const
}

export function usePostAdminPriceListsIdPricesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['price-lists'][':id']['prices']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['price-lists'][':id']['prices']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPriceListsIdPricesBatchKey()
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
            (typeof client.admin)['price-lists'][':id']['prices']['batch']['$post']
          >
        },
      ) => parseResponse(client.admin['price-lists'][':id'].prices.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminPriceListsIdProductsKey() {
  return ['admin', '/admin/price-lists/:id/products', 'POST'] as const
}

export function usePostAdminPriceListsIdProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['price-lists'][':id']['products']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['price-lists'][':id']['products']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPriceListsIdProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin)['price-lists'][':id']['products']['$post']>
        },
      ) => parseResponse(client.admin['price-lists'][':id'].products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminPricePreferencesKey(
  args: InferRequestType<(typeof client.admin)['price-preferences']['$get']>,
) {
  return ['admin', '/admin/price-preferences', args] as const
}

export function useGetAdminPricePreferences<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['price-preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-preferences']['$get']>>
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
        ? getGetAdminPricePreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-preferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['price-preferences'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPricePreferences<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['price-preferences']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-preferences']['$get']>>
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
        ? getGetAdminPricePreferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-preferences']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['price-preferences'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminPricePreferencesKey() {
  return ['admin', '/admin/price-preferences', 'POST'] as const
}

export function usePostAdminPricePreferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['price-preferences']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['price-preferences']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPricePreferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['price-preferences']['$post']> },
      ) => parseResponse(client.admin['price-preferences'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminPricePreferencesIdKey(
  args: InferRequestType<(typeof client.admin)['price-preferences'][':id']['$get']>,
) {
  return ['admin', '/admin/price-preferences/:id', args] as const
}

export function useGetAdminPricePreferencesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['price-preferences'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$get']>>
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
        ? getGetAdminPricePreferencesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['price-preferences'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPricePreferencesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['price-preferences'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$get']>>
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
        ? getGetAdminPricePreferencesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['price-preferences'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminPricePreferencesIdKey() {
  return ['admin', '/admin/price-preferences/:id', 'POST'] as const
}

export function usePostAdminPricePreferencesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['price-preferences'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPricePreferencesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['price-preferences'][':id']['$post']> },
      ) => parseResponse(client.admin['price-preferences'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminPricePreferencesIdKey() {
  return ['admin', '/admin/price-preferences/:id', 'DELETE'] as const
}

export function useDeleteAdminPricePreferencesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['price-preferences'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['price-preferences'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminPricePreferencesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['price-preferences'][':id']['$delete']> },
      ) => parseResponse(client.admin['price-preferences'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductCategoriesKey(
  args: InferRequestType<(typeof client.admin)['product-categories']['$get']>,
) {
  return ['admin', '/admin/product-categories', args] as const
}

export function useGetAdminProductCategories<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-categories']['$get']>>
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
        ? getGetAdminProductCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-categories'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductCategories<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-categories']['$get']>>
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
        ? getGetAdminProductCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-categories'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductCategoriesKey() {
  return ['admin', '/admin/product-categories', 'POST'] as const
}

export function usePostAdminProductCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-categories']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-categories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['product-categories']['$post']> },
      ) => parseResponse(client.admin['product-categories'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductCategoriesIdKey(
  args: InferRequestType<(typeof client.admin)['product-categories'][':id']['$get']>,
) {
  return ['admin', '/admin/product-categories/:id', args] as const
}

export function useGetAdminProductCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-categories'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$get']>>
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
        ? getGetAdminProductCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['product-categories'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-categories'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$get']>>
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
        ? getGetAdminProductCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['product-categories'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductCategoriesIdKey() {
  return ['admin', '/admin/product-categories/:id', 'POST'] as const
}

export function usePostAdminProductCategoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-categories'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductCategoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['product-categories'][':id']['$post']> },
      ) => parseResponse(client.admin['product-categories'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminProductCategoriesIdKey() {
  return ['admin', '/admin/product-categories/:id', 'DELETE'] as const
}

export function useDeleteAdminProductCategoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-categories'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-categories'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminProductCategoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['product-categories'][':id']['$delete']> },
      ) => parseResponse(client.admin['product-categories'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductCategoriesIdProductsKey() {
  return ['admin', '/admin/product-categories/:id/products', 'POST'] as const
}

export function usePostAdminProductCategoriesIdProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['product-categories'][':id']['products']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-categories'][':id']['products']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductCategoriesIdProductsKey()
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
            (typeof client.admin)['product-categories'][':id']['products']['$post']
          >
        },
      ) =>
        parseResponse(client.admin['product-categories'][':id'].products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductOptionsKey(
  args: InferRequestType<(typeof client.admin)['product-options']['$get']>,
) {
  return ['admin', '/admin/product-options', args] as const
}

export function useGetAdminProductOptions<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-options']['$get']>>
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
        ? getGetAdminProductOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-options'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductOptions<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-options']['$get']>>
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
        ? getGetAdminProductOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-options'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductOptionsKey() {
  return ['admin', '/admin/product-options', 'POST'] as const
}

export function usePostAdminProductOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-options']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-options']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['product-options']['$post']> },
      ) => parseResponse(client.admin['product-options'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductOptionsIdKey(
  args: InferRequestType<(typeof client.admin)['product-options'][':id']['$get']>,
) {
  return ['admin', '/admin/product-options/:id', args] as const
}

export function useGetAdminProductOptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-options'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$get']>>
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
        ? getGetAdminProductOptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-options'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductOptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-options'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$get']>>
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
        ? getGetAdminProductOptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-options'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductOptionsIdKey() {
  return ['admin', '/admin/product-options/:id', 'POST'] as const
}

export function usePostAdminProductOptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-options'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductOptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['product-options'][':id']['$post']> },
      ) => parseResponse(client.admin['product-options'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminProductOptionsIdKey() {
  return ['admin', '/admin/product-options/:id', 'DELETE'] as const
}

export function useDeleteAdminProductOptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-options'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminProductOptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['product-options'][':id']['$delete']> },
      ) => parseResponse(client.admin['product-options'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductOptionsIdValuesKey(
  args: InferRequestType<(typeof client.admin)['product-options'][':id']['values']['$get']>,
) {
  return ['admin', '/admin/product-options/:id/values', args] as const
}

export function useGetAdminProductOptionsIdValues<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-options'][':id']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['values']['$get']>>
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
        ? getGetAdminProductOptionsIdValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['product-options'][':id'].values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductOptionsIdValues<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-options'][':id']['values']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['values']['$get']>>
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
        ? getGetAdminProductOptionsIdValuesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-options'][':id']['values']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['product-options'][':id'].values.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminProductOptionsIdValuesValueIdKey(
  args: InferRequestType<
    (typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']
  >,
) {
  return ['admin', '/admin/product-options/:id/values/:value_id', args] as const
}

export function useGetAdminProductOptionsIdValuesValueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']
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
        ? getGetAdminProductOptionsIdValuesValueIdKey(args)
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
                (typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']
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
          client.admin['product-options'][':id'].values[':value_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductOptionsIdValuesValueId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']
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
        ? getGetAdminProductOptionsIdValuesValueIdKey(args)
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
                (typeof client.admin)['product-options'][':id']['values'][':value_id']['$get']
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
          client.admin['product-options'][':id'].values[':value_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductOptionsIdValuesValueIdKey() {
  return ['admin', '/admin/product-options/:id/values/:value_id', 'POST'] as const
}

export function usePostAdminProductOptionsIdValuesValueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['product-options'][':id']['values'][':value_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['product-options'][':id']['values'][':value_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductOptionsIdValuesValueIdKey()
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
            (typeof client.admin)['product-options'][':id']['values'][':value_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['product-options'][':id'].values[':value_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminProductOptionsIdValuesValueIdKey() {
  return ['admin', '/admin/product-options/:id/values/:value_id', 'DELETE'] as const
}

export function useDeleteAdminProductOptionsIdValuesValueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['product-options'][':id']['values'][':value_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['product-options'][':id']['values'][':value_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminProductOptionsIdValuesValueIdKey()
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
            (typeof client.admin)['product-options'][':id']['values'][':value_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin['product-options'][':id'].values[':value_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductTagsKey(
  args: InferRequestType<(typeof client.admin)['product-tags']['$get']>,
) {
  return ['admin', '/admin/product-tags', args] as const
}

export function useGetAdminProductTags<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-tags']['$get']>>>
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
        ? getGetAdminProductTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductTags<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-tags']['$get']>>>
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
        ? getGetAdminProductTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-tags']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-tags'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductTagsKey() {
  return ['admin', '/admin/product-tags', 'POST'] as const
}

export function usePostAdminProductTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-tags']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-tags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['product-tags']['$post']> },
      ) => parseResponse(client.admin['product-tags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductTagsIdKey(
  args: InferRequestType<(typeof client.admin)['product-tags'][':id']['$get']>,
) {
  return ['admin', '/admin/product-tags/:id', args] as const
}

export function useGetAdminProductTagsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-tags'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$get']>>
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
        ? getGetAdminProductTagsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-tags'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductTagsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-tags'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$get']>>
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
        ? getGetAdminProductTagsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-tags'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductTagsIdKey() {
  return ['admin', '/admin/product-tags/:id', 'POST'] as const
}

export function usePostAdminProductTagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-tags'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductTagsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['product-tags'][':id']['$post']> },
      ) => parseResponse(client.admin['product-tags'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminProductTagsIdKey() {
  return ['admin', '/admin/product-tags/:id', 'DELETE'] as const
}

export function useDeleteAdminProductTagsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-tags'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-tags'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminProductTagsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['product-tags'][':id']['$delete']> },
      ) => parseResponse(client.admin['product-tags'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductTypesKey(
  args: InferRequestType<(typeof client.admin)['product-types']['$get']>,
) {
  return ['admin', '/admin/product-types', args] as const
}

export function useGetAdminProductTypes<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-types']['$get']>>>
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
        ? getGetAdminProductTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductTypes<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-types']['$get']>>>
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
        ? getGetAdminProductTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-types']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductTypesKey() {
  return ['admin', '/admin/product-types', 'POST'] as const
}

export function usePostAdminProductTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['product-types']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-types']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['product-types']['$post']> },
      ) => parseResponse(client.admin['product-types'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductTypesIdKey(
  args: InferRequestType<(typeof client.admin)['product-types'][':id']['$get']>,
) {
  return ['admin', '/admin/product-types/:id', args] as const
}

export function useGetAdminProductTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-types'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$get']>>
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
        ? getGetAdminProductTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-types'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-types'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$get']>>
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
        ? getGetAdminProductTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-types'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductTypesIdKey() {
  return ['admin', '/admin/product-types/:id', 'POST'] as const
}

export function usePostAdminProductTypesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-types'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductTypesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['product-types'][':id']['$post']> },
      ) => parseResponse(client.admin['product-types'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminProductTypesIdKey() {
  return ['admin', '/admin/product-types/:id', 'DELETE'] as const
}

export function useDeleteAdminProductTypesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['product-types'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['product-types'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminProductTypesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['product-types'][':id']['$delete']> },
      ) => parseResponse(client.admin['product-types'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductVariantsKey(
  args: InferRequestType<(typeof client.admin)['product-variants']['$get']>,
) {
  return ['admin', '/admin/product-variants', args] as const
}

export function useGetAdminProductVariants<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-variants']['$get']>>
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
        ? getGetAdminProductVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-variants'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductVariants<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['product-variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-variants']['$get']>>
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
        ? getGetAdminProductVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['product-variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['product-variants'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminProductsKey(args: InferRequestType<typeof client.admin.products.$get>) {
  return ['admin', '/admin/products', args] as const
}

export function useGetAdminProducts<TError = unknown>(
  args: InferRequestType<typeof client.admin.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProducts<TError = unknown>(
  args: InferRequestType<typeof client.admin.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductsKey() {
  return ['admin', '/admin/products', 'POST'] as const
}

export function usePostAdminProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.products.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.products.$post> }) =>
        parseResponse(client.admin.products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductsBatchKey() {
  return ['admin', '/admin/products/batch', 'POST'] as const
}

export function usePostAdminProductsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.products.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.products.batch.$post> },
      ) => parseResponse(client.admin.products.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductsExportKey() {
  return ['admin', '/admin/products/export', 'POST'] as const
}

export function usePostAdminProductsExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.export.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.products.export.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.products.export.$post> },
      ) => parseResponse(client.admin.products.export.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductsImportKey() {
  return ['admin', '/admin/products/import', 'POST'] as const
}

export function usePostAdminProductsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.import.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.products.import.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.products.import.$post> },
      ) => parseResponse(client.admin.products.import.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductsImportTransactionIdConfirmKey() {
  return ['admin', '/admin/products/import/:transaction_id/confirm', 'POST'] as const
}

export function usePostAdminProductsImportTransactionIdConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.products.import)[':transaction_id']['confirm']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.products.import)[':transaction_id']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsImportTransactionIdConfirmKey()
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
            (typeof client.admin.products.import)[':transaction_id']['confirm']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.products.import[':transaction_id'].confirm.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductsImportsKey() {
  return ['admin', '/admin/products/imports', 'POST'] as const
}

export function usePostAdminProductsImports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.products.imports.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.products.imports.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsImportsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.products.imports.$post> },
      ) => parseResponse(client.admin.products.imports.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductsImportsTransactionIdConfirmKey() {
  return ['admin', '/admin/products/imports/:transaction_id/confirm', 'POST'] as const
}

export function usePostAdminProductsImportsTransactionIdConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products.imports)[':transaction_id']['confirm']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.products.imports)[':transaction_id']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsImportsTransactionIdConfirmKey()
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
            (typeof client.admin.products.imports)[':transaction_id']['confirm']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.products.imports[':transaction_id'].confirm.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductsIdKey(
  args: InferRequestType<(typeof client.admin.products)[':id']['$get']>,
) {
  return ['admin', '/admin/products/:id', args] as const
}

export function useGetAdminProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.products)[':id']['$get']>>>
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
        ? getGetAdminProductsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.products)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.products)[':id']['$get']>>>
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
        ? getGetAdminProductsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.products)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.products[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductsIdKey() {
  return ['admin', '/admin/products/:id', 'POST'] as const
}

export function usePostAdminProductsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.products)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.products)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.products)[':id']['$post']> },
      ) => parseResponse(client.admin.products[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminProductsIdKey() {
  return ['admin', '/admin/products/:id', 'DELETE'] as const
}

export function useDeleteAdminProductsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.products)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.products)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminProductsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.products)[':id']['$delete']> },
      ) => parseResponse(client.admin.products[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductsIdImagesImageIdVariantsBatchKey() {
  return ['admin', '/admin/products/:id/images/:image_id/variants/batch', 'POST'] as const
}

export function usePostAdminProductsIdImagesImageIdVariantsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products)[':id']['images'][':image_id']['variants']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.products)[':id']['images'][':image_id']['variants']['batch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsIdImagesImageIdVariantsBatchKey()
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
            (typeof client.admin.products)[':id']['images'][':image_id']['variants']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.products[':id'].images[':image_id'].variants.batch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductsIdOptionsKey(
  args: InferRequestType<(typeof client.admin.products)[':id']['options']['$get']>,
) {
  return ['admin', '/admin/products/:id/options', args] as const
}

export function useGetAdminProductsIdOptions<TError = unknown>(
  args: InferRequestType<(typeof client.admin.products)[':id']['options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.products)[':id']['options']['$get']>>
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
        ? getGetAdminProductsIdOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.products)[':id']['options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.products[':id'].options.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductsIdOptions<TError = unknown>(
  args: InferRequestType<(typeof client.admin.products)[':id']['options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.products)[':id']['options']['$get']>>
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
        ? getGetAdminProductsIdOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.products)[':id']['options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.products[':id'].options.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductsIdOptionsBatchKey() {
  return ['admin', '/admin/products/:id/options/batch', 'POST'] as const
}

export function usePostAdminProductsIdOptionsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.products)[':id']['options']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.products)[':id']['options']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsIdOptionsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.products)[':id']['options']['batch']['$post']>
        },
      ) => parseResponse(client.admin.products[':id'].options.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductsIdVariantsKey(
  args: InferRequestType<(typeof client.admin.products)[':id']['variants']['$get']>,
) {
  return ['admin', '/admin/products/:id/variants', args] as const
}

export function useGetAdminProductsIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.admin.products)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['$get']>>
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
        ? getGetAdminProductsIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.products[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductsIdVariants<TError = unknown>(
  args: InferRequestType<(typeof client.admin.products)[':id']['variants']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['$get']>>
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
        ? getGetAdminProductsIdVariantsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.products[':id'].variants.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductsIdVariantsKey() {
  return ['admin', '/admin/products/:id/variants', 'POST'] as const
}

export function usePostAdminProductsIdVariants<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.products)[':id']['variants']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsIdVariantsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.products)[':id']['variants']['$post']> },
      ) => parseResponse(client.admin.products[':id'].variants.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductsIdVariantsBatchKey() {
  return ['admin', '/admin/products/:id/variants/batch', 'POST'] as const
}

export function usePostAdminProductsIdVariantsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.products)[':id']['variants']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.products)[':id']['variants']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsIdVariantsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.products)[':id']['variants']['batch']['$post']>
        },
      ) => parseResponse(client.admin.products[':id'].variants.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductsIdVariantsInventoryItemsBatchKey() {
  return ['admin', '/admin/products/:id/variants/inventory-items/batch', 'POST'] as const
}

export function usePostAdminProductsIdVariantsInventoryItemsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products)[':id']['variants']['inventory-items']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.products)[':id']['variants']['inventory-items']['batch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsIdVariantsInventoryItemsBatchKey()
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
            (typeof client.admin.products)[':id']['variants']['inventory-items']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.products[':id'].variants['inventory-items'].batch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminProductsIdVariantsVariantIdKey(
  args: InferRequestType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>,
) {
  return ['admin', '/admin/products/:id/variants/:variant_id', args] as const
}

export function useGetAdminProductsIdVariantsVariantId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>
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
        ? getGetAdminProductsIdVariantsVariantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.products[':id'].variants[':variant_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminProductsIdVariantsVariantId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>
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
        ? getGetAdminProductsIdVariantsVariantIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.products[':id'].variants[':variant_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminProductsIdVariantsVariantIdKey() {
  return ['admin', '/admin/products/:id/variants/:variant_id', 'POST'] as const
}

export function usePostAdminProductsIdVariantsVariantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsIdVariantsVariantIdKey()
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
            (typeof client.admin.products)[':id']['variants'][':variant_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.products[':id'].variants[':variant_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminProductsIdVariantsVariantIdKey() {
  return ['admin', '/admin/products/:id/variants/:variant_id', 'DELETE'] as const
}

export function useDeleteAdminProductsIdVariantsVariantId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.products)[':id']['variants'][':variant_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminProductsIdVariantsVariantIdKey()
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
            (typeof client.admin.products)[':id']['variants'][':variant_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.products[':id'].variants[':variant_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductsIdVariantsVariantIdImagesBatchKey() {
  return ['admin', '/admin/products/:id/variants/:variant_id/images/batch', 'POST'] as const
}

export function usePostAdminProductsIdVariantsVariantIdImagesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products)[':id']['variants'][':variant_id']['images']['batch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.products)[':id']['variants'][':variant_id']['images']['batch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsIdVariantsVariantIdImagesBatchKey()
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
            (typeof client.admin.products)[':id']['variants'][':variant_id']['images']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.products[':id'].variants[':variant_id'].images.batch.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductsIdVariantsVariantIdInventoryItemsKey() {
  return ['admin', '/admin/products/:id/variants/:variant_id/inventory-items', 'POST'] as const
}

export function usePostAdminProductsIdVariantsVariantIdInventoryItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminProductsIdVariantsVariantIdInventoryItemsKey()
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
            (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.products[':id'].variants[':variant_id']['inventory-items'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdKey() {
  return [
    'admin',
    '/admin/products/:id/variants/:variant_id/inventory-items/:inventory_item_id',
    'POST',
  ] as const
}

export function usePostAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdKey()
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
            (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.products[':id'].variants[':variant_id']['inventory-items'][
            ':inventory_item_id'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdKey() {
  return [
    'admin',
    '/admin/products/:id/variants/:variant_id/inventory-items/:inventory_item_id',
    'DELETE',
  ] as const
}

export function useDeleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdKey()
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
            (typeof client.admin.products)[':id']['variants'][':variant_id']['inventory-items'][':inventory_item_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.products[':id'].variants[':variant_id']['inventory-items'][
            ':inventory_item_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminPromotionsKey(
  args: InferRequestType<typeof client.admin.promotions.$get>,
) {
  return ['admin', '/admin/promotions', args] as const
}

export function useGetAdminPromotions<TError = unknown>(
  args: InferRequestType<typeof client.admin.promotions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.promotions.$get>>>>
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
        ? getGetAdminPromotionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.promotions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.promotions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPromotions<TError = unknown>(
  args: InferRequestType<typeof client.admin.promotions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.promotions.$get>>>>
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
        ? getGetAdminPromotionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.promotions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.promotions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminPromotionsKey() {
  return ['admin', '/admin/promotions', 'POST'] as const
}

export function usePostAdminPromotions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.promotions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.promotions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPromotionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.promotions.$post> }) =>
        parseResponse(client.admin.promotions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminPromotionsRuleAttributeOptionsRuleTypeKey(
  args: InferRequestType<
    (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
  >,
) {
  return ['admin', '/admin/promotions/rule-attribute-options/:rule_type', args] as const
}

export function useGetAdminPromotionsRuleAttributeOptionsRuleType<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
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
        ? getGetAdminPromotionsRuleAttributeOptionsRuleTypeKey(args)
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
                (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
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
          client.admin.promotions['rule-attribute-options'][':rule_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPromotionsRuleAttributeOptionsRuleType<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
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
        ? getGetAdminPromotionsRuleAttributeOptionsRuleTypeKey(args)
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
                (typeof client.admin.promotions)['rule-attribute-options'][':rule_type']['$get']
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
          client.admin.promotions['rule-attribute-options'][':rule_type'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdKey(
  args: InferRequestType<
    (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
  >,
) {
  return [
    'admin',
    '/admin/promotions/rule-value-options/:rule_type/:rule_attribute_id',
    args,
  ] as const
}

export function useGetAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
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
        ? getGetAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdKey(args)
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
                (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
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
          client.admin.promotions['rule-value-options'][':rule_type'][':rule_attribute_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
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
        ? getGetAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdKey(args)
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
                (typeof client.admin.promotions)['rule-value-options'][':rule_type'][':rule_attribute_id']['$get']
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
          client.admin.promotions['rule-value-options'][':rule_type'][':rule_attribute_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdminPromotionsIdKey(
  args: InferRequestType<(typeof client.admin.promotions)[':id']['$get']>,
) {
  return ['admin', '/admin/promotions/:id', args] as const
}

export function useGetAdminPromotionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.promotions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$get']>>>
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
        ? getGetAdminPromotionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.promotions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPromotionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.promotions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$get']>>>
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
        ? getGetAdminPromotionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.promotions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminPromotionsIdKey() {
  return ['admin', '/admin/promotions/:id', 'POST'] as const
}

export function usePostAdminPromotionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.promotions)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPromotionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.promotions)[':id']['$post']> },
      ) => parseResponse(client.admin.promotions[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminPromotionsIdKey() {
  return ['admin', '/admin/promotions/:id', 'DELETE'] as const
}

export function useDeleteAdminPromotionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.promotions)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.promotions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminPromotionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.promotions)[':id']['$delete']> },
      ) => parseResponse(client.admin.promotions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminPromotionsIdBuyRulesBatchKey() {
  return ['admin', '/admin/promotions/:id/buy-rules/batch', 'POST'] as const
}

export function usePostAdminPromotionsIdBuyRulesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.promotions)[':id']['buy-rules']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.promotions)[':id']['buy-rules']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPromotionsIdBuyRulesBatchKey()
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
            (typeof client.admin.promotions)[':id']['buy-rules']['batch']['$post']
          >
        },
      ) =>
        parseResponse(client.admin.promotions[':id']['buy-rules'].batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminPromotionsIdRulesBatchKey() {
  return ['admin', '/admin/promotions/:id/rules/batch', 'POST'] as const
}

export function usePostAdminPromotionsIdRulesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.promotions)[':id']['rules']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.promotions)[':id']['rules']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPromotionsIdRulesBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.promotions)[':id']['rules']['batch']['$post']>
        },
      ) => parseResponse(client.admin.promotions[':id'].rules.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminPromotionsIdTargetRulesBatchKey() {
  return ['admin', '/admin/promotions/:id/target-rules/batch', 'POST'] as const
}

export function usePostAdminPromotionsIdTargetRulesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.promotions)[':id']['target-rules']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.promotions)[':id']['target-rules']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPromotionsIdTargetRulesBatchKey()
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
            (typeof client.admin.promotions)[':id']['target-rules']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.promotions[':id']['target-rules'].batch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminPromotionsIdRuleTypeKey(
  args: InferRequestType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>,
) {
  return ['admin', '/admin/promotions/:id/:rule_type', args] as const
}

export function useGetAdminPromotionsIdRuleType<TError = unknown>(
  args: InferRequestType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>>
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
        ? getGetAdminPromotionsIdRuleTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.promotions[':id'][':rule_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPromotionsIdRuleType<TError = unknown>(
  args: InferRequestType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>>
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
        ? getGetAdminPromotionsIdRuleTypeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.promotions)[':id'][':rule_type']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.promotions[':id'][':rule_type'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminPropertyLabelsKey(
  args: InferRequestType<(typeof client.admin)['property-labels']['$get']>,
) {
  return ['admin', '/admin/property-labels', args] as const
}

export function useGetAdminPropertyLabels<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['property-labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['property-labels']['$get']>>
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
        ? getGetAdminPropertyLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['property-labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['property-labels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPropertyLabels<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['property-labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['property-labels']['$get']>>
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
        ? getGetAdminPropertyLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['property-labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['property-labels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminPropertyLabelsKey() {
  return ['admin', '/admin/property-labels', 'POST'] as const
}

export function usePostAdminPropertyLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['property-labels']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['property-labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPropertyLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['property-labels']['$post']> },
      ) => parseResponse(client.admin['property-labels'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminPropertyLabelsBatchKey() {
  return ['admin', '/admin/property-labels/batch', 'POST'] as const
}

export function usePostAdminPropertyLabelsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['property-labels']['batch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['property-labels']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPropertyLabelsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['property-labels']['batch']['$post']> },
      ) => parseResponse(client.admin['property-labels'].batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminPropertyLabelsIdKey(
  args: InferRequestType<(typeof client.admin)['property-labels'][':id']['$get']>,
) {
  return ['admin', '/admin/property-labels/:id', args] as const
}

export function useGetAdminPropertyLabelsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['property-labels'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$get']>>
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
        ? getGetAdminPropertyLabelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['property-labels'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminPropertyLabelsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['property-labels'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$get']>>
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
        ? getGetAdminPropertyLabelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['property-labels'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminPropertyLabelsIdKey() {
  return ['admin', '/admin/property-labels/:id', 'POST'] as const
}

export function usePostAdminPropertyLabelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['property-labels'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminPropertyLabelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['property-labels'][':id']['$post']> },
      ) => parseResponse(client.admin['property-labels'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminPropertyLabelsIdKey() {
  return ['admin', '/admin/property-labels/:id', 'DELETE'] as const
}

export function useDeleteAdminPropertyLabelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['property-labels'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['property-labels'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminPropertyLabelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['property-labels'][':id']['$delete']> },
      ) => parseResponse(client.admin['property-labels'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRefundReasonsKey(
  args: InferRequestType<(typeof client.admin)['refund-reasons']['$get']>,
) {
  return ['admin', '/admin/refund-reasons', args] as const
}

export function useGetAdminRefundReasons<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['refund-reasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['refund-reasons']['$get']>>>
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
        ? getGetAdminRefundReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['refund-reasons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['refund-reasons'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRefundReasons<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['refund-reasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['refund-reasons']['$get']>>>
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
        ? getGetAdminRefundReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['refund-reasons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['refund-reasons'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminRefundReasonsKey() {
  return ['admin', '/admin/refund-reasons', 'POST'] as const
}

export function usePostAdminRefundReasons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['refund-reasons']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['refund-reasons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRefundReasonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['refund-reasons']['$post']> },
      ) => parseResponse(client.admin['refund-reasons'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRefundReasonsIdKey(
  args: InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$get']>,
) {
  return ['admin', '/admin/refund-reasons/:id', args] as const
}

export function useGetAdminRefundReasonsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$get']>>
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
        ? getGetAdminRefundReasonsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['refund-reasons'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRefundReasonsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$get']>>
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
        ? getGetAdminRefundReasonsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['refund-reasons'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminRefundReasonsIdKey() {
  return ['admin', '/admin/refund-reasons/:id', 'POST'] as const
}

export function usePostAdminRefundReasonsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRefundReasonsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$post']> },
      ) => parseResponse(client.admin['refund-reasons'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminRefundReasonsIdKey() {
  return ['admin', '/admin/refund-reasons/:id', 'DELETE'] as const
}

export function useDeleteAdminRefundReasonsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['refund-reasons'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminRefundReasonsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['refund-reasons'][':id']['$delete']> },
      ) => parseResponse(client.admin['refund-reasons'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRegionsKey(args: InferRequestType<typeof client.admin.regions.$get>) {
  return ['admin', '/admin/regions', args] as const
}

export function useGetAdminRegions<TError = unknown>(
  args: InferRequestType<typeof client.admin.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.regions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRegions<TError = unknown>(
  args: InferRequestType<typeof client.admin.regions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.regions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminRegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.regions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.regions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminRegionsKey() {
  return ['admin', '/admin/regions', 'POST'] as const
}

export function usePostAdminRegions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.regions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.regions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRegionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.regions.$post> }) =>
        parseResponse(client.admin.regions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminRegionsIdKey(
  args: InferRequestType<(typeof client.admin.regions)[':id']['$get']>,
) {
  return ['admin', '/admin/regions/:id', args] as const
}

export function useGetAdminRegionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.regions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.regions)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminRegionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.regions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.regions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminRegionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.regions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.regions)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminRegionsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.regions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.regions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminRegionsIdKey() {
  return ['admin', '/admin/regions/:id', 'POST'] as const
}

export function usePostAdminRegionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.regions)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.regions)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminRegionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.regions)[':id']['$post']> },
      ) => parseResponse(client.admin.regions[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminRegionsIdKey() {
  return ['admin', '/admin/regions/:id', 'DELETE'] as const
}

export function useDeleteAdminRegionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.regions)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.regions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminRegionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.regions)[':id']['$delete']> },
      ) => parseResponse(client.admin.regions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminReservationsKey(
  args: InferRequestType<typeof client.admin.reservations.$get>,
) {
  return ['admin', '/admin/reservations', args] as const
}

export function useGetAdminReservations<TError = unknown>(
  args: InferRequestType<typeof client.admin.reservations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.reservations.$get>>>>
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
        ? getGetAdminReservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.reservations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.reservations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminReservations<TError = unknown>(
  args: InferRequestType<typeof client.admin.reservations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.reservations.$get>>>>
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
        ? getGetAdminReservationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.reservations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.reservations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminReservationsKey() {
  return ['admin', '/admin/reservations', 'POST'] as const
}

export function usePostAdminReservations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.reservations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.reservations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReservationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.reservations.$post> }) =>
        parseResponse(client.admin.reservations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminReservationsIdKey(
  args: InferRequestType<(typeof client.admin.reservations)[':id']['$get']>,
) {
  return ['admin', '/admin/reservations/:id', args] as const
}

export function useGetAdminReservationsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.reservations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$get']>>
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
        ? getGetAdminReservationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.reservations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminReservationsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.reservations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$get']>>
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
        ? getGetAdminReservationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.reservations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminReservationsIdKey() {
  return ['admin', '/admin/reservations/:id', 'POST'] as const
}

export function usePostAdminReservationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.reservations)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReservationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.reservations)[':id']['$post']> },
      ) => parseResponse(client.admin.reservations[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminReservationsIdKey() {
  return ['admin', '/admin/reservations/:id', 'DELETE'] as const
}

export function useDeleteAdminReservationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.reservations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.reservations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminReservationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.reservations)[':id']['$delete']> },
      ) => parseResponse(client.admin.reservations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminReturnReasonsKey(
  args: InferRequestType<(typeof client.admin)['return-reasons']['$get']>,
) {
  return ['admin', '/admin/return-reasons', args] as const
}

export function useGetAdminReturnReasons<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['return-reasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['return-reasons']['$get']>>>
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
        ? getGetAdminReturnReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['return-reasons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['return-reasons'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminReturnReasons<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['return-reasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['return-reasons']['$get']>>>
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
        ? getGetAdminReturnReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['return-reasons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['return-reasons'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminReturnReasonsKey() {
  return ['admin', '/admin/return-reasons', 'POST'] as const
}

export function usePostAdminReturnReasons<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['return-reasons']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['return-reasons']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnReasonsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['return-reasons']['$post']> },
      ) => parseResponse(client.admin['return-reasons'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminReturnReasonsIdKey(
  args: InferRequestType<(typeof client.admin)['return-reasons'][':id']['$get']>,
) {
  return ['admin', '/admin/return-reasons/:id', args] as const
}

export function useGetAdminReturnReasonsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['return-reasons'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$get']>>
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
        ? getGetAdminReturnReasonsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['return-reasons'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminReturnReasonsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['return-reasons'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$get']>>
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
        ? getGetAdminReturnReasonsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['return-reasons'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminReturnReasonsIdKey() {
  return ['admin', '/admin/return-reasons/:id', 'POST'] as const
}

export function usePostAdminReturnReasonsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['return-reasons'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnReasonsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['return-reasons'][':id']['$post']> },
      ) => parseResponse(client.admin['return-reasons'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminReturnReasonsIdKey() {
  return ['admin', '/admin/return-reasons/:id', 'DELETE'] as const
}

export function useDeleteAdminReturnReasonsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['return-reasons'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['return-reasons'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminReturnReasonsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['return-reasons'][':id']['$delete']> },
      ) => parseResponse(client.admin['return-reasons'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminReturnsKey(args: InferRequestType<typeof client.admin.returns.$get>) {
  return ['admin', '/admin/returns', args] as const
}

export function useGetAdminReturns<TError = unknown>(
  args: InferRequestType<typeof client.admin.returns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.returns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminReturnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.returns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.returns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminReturns<TError = unknown>(
  args: InferRequestType<typeof client.admin.returns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.returns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminReturnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.returns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.returns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminReturnsKey() {
  return ['admin', '/admin/returns', 'POST'] as const
}

export function usePostAdminReturns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.returns.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.returns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.returns.$post> }) =>
        parseResponse(client.admin.returns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminReturnsIdKey(
  args: InferRequestType<(typeof client.admin.returns)[':id']['$get']>,
) {
  return ['admin', '/admin/returns/:id', args] as const
}

export function useGetAdminReturnsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.returns)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.returns)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminReturnsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.returns)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.returns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminReturnsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.returns)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.returns)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminReturnsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.returns)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.returns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminReturnsIdKey() {
  return ['admin', '/admin/returns/:id', 'POST'] as const
}

export function usePostAdminReturnsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.returns)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.returns)[':id']['$post']> },
      ) => parseResponse(client.admin.returns[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminReturnsIdCancelKey() {
  return ['admin', '/admin/returns/:id/cancel', 'POST'] as const
}

export function usePostAdminReturnsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.returns)[':id']['cancel']['$post']> },
      ) => parseResponse(client.admin.returns[':id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminReturnsIdDismissItemsKey() {
  return ['admin', '/admin/returns/:id/dismiss-items', 'POST'] as const
}

export function usePostAdminReturnsIdDismissItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['dismiss-items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['dismiss-items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdDismissItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.returns)[':id']['dismiss-items']['$post']>
        },
      ) => parseResponse(client.admin.returns[':id']['dismiss-items'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminReturnsIdDismissItemsActionIdKey() {
  return ['admin', '/admin/returns/:id/dismiss-items/:action_id', 'POST'] as const
}

export function usePostAdminReturnsIdDismissItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdDismissItemsActionIdKey()
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
            (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.returns[':id']['dismiss-items'][':action_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminReturnsIdDismissItemsActionIdKey() {
  return ['admin', '/admin/returns/:id/dismiss-items/:action_id', 'DELETE'] as const
}

export function useDeleteAdminReturnsIdDismissItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminReturnsIdDismissItemsActionIdKey()
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
            (typeof client.admin.returns)[':id']['dismiss-items'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.returns[':id']['dismiss-items'][':action_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminReturnsIdReceiveKey() {
  return ['admin', '/admin/returns/:id/receive', 'POST'] as const
}

export function usePostAdminReturnsIdReceive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['receive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['receive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdReceiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.returns)[':id']['receive']['$post']> },
      ) => parseResponse(client.admin.returns[':id'].receive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminReturnsIdReceiveKey() {
  return ['admin', '/admin/returns/:id/receive', 'DELETE'] as const
}

export function useDeleteAdminReturnsIdReceive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['receive']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['receive']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminReturnsIdReceiveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.returns)[':id']['receive']['$delete']> },
      ) => parseResponse(client.admin.returns[':id'].receive.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminReturnsIdReceiveItemsKey() {
  return ['admin', '/admin/returns/:id/receive-items', 'POST'] as const
}

export function usePostAdminReturnsIdReceiveItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['receive-items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['receive-items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdReceiveItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.returns)[':id']['receive-items']['$post']>
        },
      ) => parseResponse(client.admin.returns[':id']['receive-items'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminReturnsIdReceiveItemsActionIdKey() {
  return ['admin', '/admin/returns/:id/receive-items/:action_id', 'POST'] as const
}

export function usePostAdminReturnsIdReceiveItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.returns)[':id']['receive-items'][':action_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['receive-items'][':action_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdReceiveItemsActionIdKey()
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
            (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.returns[':id']['receive-items'][':action_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminReturnsIdReceiveItemsActionIdKey() {
  return ['admin', '/admin/returns/:id/receive-items/:action_id', 'DELETE'] as const
}

export function useDeleteAdminReturnsIdReceiveItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['receive-items'][':action_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminReturnsIdReceiveItemsActionIdKey()
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
            (typeof client.admin.returns)[':id']['receive-items'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.returns[':id']['receive-items'][':action_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminReturnsIdReceiveConfirmKey() {
  return ['admin', '/admin/returns/:id/receive/confirm', 'POST'] as const
}

export function usePostAdminReturnsIdReceiveConfirm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['receive']['confirm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['receive']['confirm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdReceiveConfirmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.returns)[':id']['receive']['confirm']['$post']>
        },
      ) => parseResponse(client.admin.returns[':id'].receive.confirm.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminReturnsIdRequestKey() {
  return ['admin', '/admin/returns/:id/request', 'POST'] as const
}

export function usePostAdminReturnsIdRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['request']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['request']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.returns)[':id']['request']['$post']> },
      ) => parseResponse(client.admin.returns[':id'].request.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminReturnsIdRequestKey() {
  return ['admin', '/admin/returns/:id/request', 'DELETE'] as const
}

export function useDeleteAdminReturnsIdRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['request']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['request']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminReturnsIdRequestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.returns)[':id']['request']['$delete']> },
      ) => parseResponse(client.admin.returns[':id'].request.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminReturnsIdRequestItemsKey() {
  return ['admin', '/admin/returns/:id/request-items', 'POST'] as const
}

export function usePostAdminReturnsIdRequestItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['request-items']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['request-items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdRequestItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.returns)[':id']['request-items']['$post']>
        },
      ) => parseResponse(client.admin.returns[':id']['request-items'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminReturnsIdRequestItemsActionIdKey() {
  return ['admin', '/admin/returns/:id/request-items/:action_id', 'POST'] as const
}

export function usePostAdminReturnsIdRequestItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.returns)[':id']['request-items'][':action_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['request-items'][':action_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdRequestItemsActionIdKey()
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
            (typeof client.admin.returns)[':id']['request-items'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.returns[':id']['request-items'][':action_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminReturnsIdRequestItemsActionIdKey() {
  return ['admin', '/admin/returns/:id/request-items/:action_id', 'DELETE'] as const
}

export function useDeleteAdminReturnsIdRequestItemsActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.returns)[':id']['request-items'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['request-items'][':action_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminReturnsIdRequestItemsActionIdKey()
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
            (typeof client.admin.returns)[':id']['request-items'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.returns[':id']['request-items'][':action_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminReturnsIdShippingMethodKey() {
  return ['admin', '/admin/returns/:id/shipping-method', 'POST'] as const
}

export function usePostAdminReturnsIdShippingMethod<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.returns)[':id']['shipping-method']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['shipping-method']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdShippingMethodKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.returns)[':id']['shipping-method']['$post']>
        },
      ) => parseResponse(client.admin.returns[':id']['shipping-method'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminReturnsIdShippingMethodActionIdKey() {
  return ['admin', '/admin/returns/:id/shipping-method/:action_id', 'POST'] as const
}

export function usePostAdminReturnsIdShippingMethodActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminReturnsIdShippingMethodActionIdKey()
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
            (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.returns[':id']['shipping-method'][':action_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminReturnsIdShippingMethodActionIdKey() {
  return ['admin', '/admin/returns/:id/shipping-method/:action_id', 'DELETE'] as const
}

export function useDeleteAdminReturnsIdShippingMethodActionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminReturnsIdShippingMethodActionIdKey()
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
            (typeof client.admin.returns)[':id']['shipping-method'][':action_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.returns[':id']['shipping-method'][':action_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminSalesChannelsKey(
  args: InferRequestType<(typeof client.admin)['sales-channels']['$get']>,
) {
  return ['admin', '/admin/sales-channels', args] as const
}

export function useGetAdminSalesChannels<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['sales-channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['sales-channels']['$get']>>>
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
        ? getGetAdminSalesChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['sales-channels']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['sales-channels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminSalesChannels<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['sales-channels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['sales-channels']['$get']>>>
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
        ? getGetAdminSalesChannelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['sales-channels']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['sales-channels'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminSalesChannelsKey() {
  return ['admin', '/admin/sales-channels', 'POST'] as const
}

export function usePostAdminSalesChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['sales-channels']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['sales-channels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminSalesChannelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['sales-channels']['$post']> },
      ) => parseResponse(client.admin['sales-channels'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminSalesChannelsIdKey(
  args: InferRequestType<(typeof client.admin)['sales-channels'][':id']['$get']>,
) {
  return ['admin', '/admin/sales-channels/:id', args] as const
}

export function useGetAdminSalesChannelsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['sales-channels'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$get']>>
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
        ? getGetAdminSalesChannelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['sales-channels'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminSalesChannelsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['sales-channels'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$get']>>
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
        ? getGetAdminSalesChannelsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['sales-channels'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminSalesChannelsIdKey() {
  return ['admin', '/admin/sales-channels/:id', 'POST'] as const
}

export function usePostAdminSalesChannelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['sales-channels'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminSalesChannelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['sales-channels'][':id']['$post']> },
      ) => parseResponse(client.admin['sales-channels'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminSalesChannelsIdKey() {
  return ['admin', '/admin/sales-channels/:id', 'DELETE'] as const
}

export function useDeleteAdminSalesChannelsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['sales-channels'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminSalesChannelsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['sales-channels'][':id']['$delete']> },
      ) => parseResponse(client.admin['sales-channels'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminSalesChannelsIdProductsKey() {
  return ['admin', '/admin/sales-channels/:id/products', 'POST'] as const
}

export function usePostAdminSalesChannelsIdProducts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['sales-channels'][':id']['products']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['sales-channels'][':id']['products']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminSalesChannelsIdProductsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin)['sales-channels'][':id']['products']['$post']>
        },
      ) => parseResponse(client.admin['sales-channels'][':id'].products.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminSearchKey(args: InferRequestType<typeof client.admin.search.$get>) {
  return ['admin', '/admin/search', args] as const
}

export function useGetAdminSearch<TError = unknown>(
  args: InferRequestType<typeof client.admin.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminSearch<TError = unknown>(
  args: InferRequestType<typeof client.admin.search.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.search.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminSearchKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.search.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.search.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminSearchIndexesKey() {
  return ['admin', '/admin/search-indexes'] as const
}

export function useGetAdminSearchIndexes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['search-indexes']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminSearchIndexesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['search-indexes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['search-indexes'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminSearchIndexes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['search-indexes']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminSearchIndexesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['search-indexes']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['search-indexes'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminSearchIndexesIdKey() {
  return ['admin', '/admin/search-indexes/:id', 'DELETE'] as const
}

export function useDeleteAdminSearchIndexesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['search-indexes'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['search-indexes'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminSearchIndexesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['search-indexes'][':id']['$delete']> },
      ) => parseResponse(client.admin['search-indexes'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminSearchIndexesIdReindexKey() {
  return ['admin', '/admin/search-indexes/:id/reindex', 'POST'] as const
}

export function usePostAdminSearchIndexesIdReindex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['search-indexes'][':id']['reindex']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['search-indexes'][':id']['reindex']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminSearchIndexesIdReindexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin)['search-indexes'][':id']['reindex']['$post']>
        },
      ) => parseResponse(client.admin['search-indexes'][':id'].reindex.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminShippingOptionTypesKey(
  args: InferRequestType<(typeof client.admin)['shipping-option-types']['$get']>,
) {
  return ['admin', '/admin/shipping-option-types', args] as const
}

export function useGetAdminShippingOptionTypes<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['shipping-option-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-option-types']['$get']>>
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
        ? getGetAdminShippingOptionTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-option-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['shipping-option-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminShippingOptionTypes<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['shipping-option-types']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-option-types']['$get']>>
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
        ? getGetAdminShippingOptionTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-option-types']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['shipping-option-types'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminShippingOptionTypesKey() {
  return ['admin', '/admin/shipping-option-types', 'POST'] as const
}

export function usePostAdminShippingOptionTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-option-types']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['shipping-option-types']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminShippingOptionTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['shipping-option-types']['$post']> },
      ) => parseResponse(client.admin['shipping-option-types'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminShippingOptionTypesIdKey(
  args: InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$get']>,
) {
  return ['admin', '/admin/shipping-option-types/:id', args] as const
}

export function useGetAdminShippingOptionTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$get']>>
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
        ? getGetAdminShippingOptionTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['shipping-option-types'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminShippingOptionTypesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$get']>>
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
        ? getGetAdminShippingOptionTypesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['shipping-option-types'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminShippingOptionTypesIdKey() {
  return ['admin', '/admin/shipping-option-types/:id', 'POST'] as const
}

export function usePostAdminShippingOptionTypesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminShippingOptionTypesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$post']>
        },
      ) => parseResponse(client.admin['shipping-option-types'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminShippingOptionTypesIdKey() {
  return ['admin', '/admin/shipping-option-types/:id', 'DELETE'] as const
}

export function useDeleteAdminShippingOptionTypesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-option-types'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminShippingOptionTypesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin)['shipping-option-types'][':id']['$delete']>
        },
      ) => parseResponse(client.admin['shipping-option-types'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminShippingOptionsKey(
  args: InferRequestType<(typeof client.admin)['shipping-options']['$get']>,
) {
  return ['admin', '/admin/shipping-options', args] as const
}

export function useGetAdminShippingOptions<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['shipping-options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-options']['$get']>>
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
        ? getGetAdminShippingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['shipping-options'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminShippingOptions<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['shipping-options']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-options']['$get']>>
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
        ? getGetAdminShippingOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-options']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['shipping-options'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminShippingOptionsKey() {
  return ['admin', '/admin/shipping-options', 'POST'] as const
}

export function usePostAdminShippingOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-options']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['shipping-options']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminShippingOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['shipping-options']['$post']> },
      ) => parseResponse(client.admin['shipping-options'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminShippingOptionsIdKey(
  args: InferRequestType<(typeof client.admin)['shipping-options'][':id']['$get']>,
) {
  return ['admin', '/admin/shipping-options/:id', args] as const
}

export function useGetAdminShippingOptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['shipping-options'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$get']>>
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
        ? getGetAdminShippingOptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['shipping-options'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminShippingOptionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['shipping-options'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$get']>>
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
        ? getGetAdminShippingOptionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['shipping-options'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminShippingOptionsIdKey() {
  return ['admin', '/admin/shipping-options/:id', 'POST'] as const
}

export function usePostAdminShippingOptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['shipping-options'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminShippingOptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['shipping-options'][':id']['$post']> },
      ) => parseResponse(client.admin['shipping-options'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminShippingOptionsIdKey() {
  return ['admin', '/admin/shipping-options/:id', 'DELETE'] as const
}

export function useDeleteAdminShippingOptionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-options'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['shipping-options'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminShippingOptionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['shipping-options'][':id']['$delete']> },
      ) => parseResponse(client.admin['shipping-options'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminShippingOptionsIdRulesBatchKey() {
  return ['admin', '/admin/shipping-options/:id/rules/batch', 'POST'] as const
}

export function usePostAdminShippingOptionsIdRulesBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['shipping-options'][':id']['rules']['batch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['shipping-options'][':id']['rules']['batch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminShippingOptionsIdRulesBatchKey()
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
            (typeof client.admin)['shipping-options'][':id']['rules']['batch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['shipping-options'][':id'].rules.batch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminShippingProfilesKey(
  args: InferRequestType<(typeof client.admin)['shipping-profiles']['$get']>,
) {
  return ['admin', '/admin/shipping-profiles', args] as const
}

export function useGetAdminShippingProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['shipping-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-profiles']['$get']>>
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
        ? getGetAdminShippingProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['shipping-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminShippingProfiles<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['shipping-profiles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-profiles']['$get']>>
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
        ? getGetAdminShippingProfilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-profiles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['shipping-profiles'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminShippingProfilesKey() {
  return ['admin', '/admin/shipping-profiles', 'POST'] as const
}

export function usePostAdminShippingProfiles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-profiles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['shipping-profiles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminShippingProfilesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['shipping-profiles']['$post']> },
      ) => parseResponse(client.admin['shipping-profiles'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminShippingProfilesIdKey(
  args: InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$get']>,
) {
  return ['admin', '/admin/shipping-profiles/:id', args] as const
}

export function useGetAdminShippingProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$get']>>
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
        ? getGetAdminShippingProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['shipping-profiles'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminShippingProfilesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$get']>>
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
        ? getGetAdminShippingProfilesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['shipping-profiles'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminShippingProfilesIdKey() {
  return ['admin', '/admin/shipping-profiles/:id', 'POST'] as const
}

export function usePostAdminShippingProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminShippingProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$post']> },
      ) => parseResponse(client.admin['shipping-profiles'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminShippingProfilesIdKey() {
  return ['admin', '/admin/shipping-profiles/:id', 'DELETE'] as const
}

export function useDeleteAdminShippingProfilesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['shipping-profiles'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminShippingProfilesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['shipping-profiles'][':id']['$delete']> },
      ) => parseResponse(client.admin['shipping-profiles'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminStockLocationsKey(
  args: InferRequestType<(typeof client.admin)['stock-locations']['$get']>,
) {
  return ['admin', '/admin/stock-locations', args] as const
}

export function useGetAdminStockLocations<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['stock-locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['stock-locations']['$get']>>
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
        ? getGetAdminStockLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['stock-locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['stock-locations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminStockLocations<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['stock-locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['stock-locations']['$get']>>
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
        ? getGetAdminStockLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['stock-locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['stock-locations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminStockLocationsKey() {
  return ['admin', '/admin/stock-locations', 'POST'] as const
}

export function usePostAdminStockLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['stock-locations']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['stock-locations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminStockLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['stock-locations']['$post']> },
      ) => parseResponse(client.admin['stock-locations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminStockLocationsIdKey(
  args: InferRequestType<(typeof client.admin)['stock-locations'][':id']['$get']>,
) {
  return ['admin', '/admin/stock-locations/:id', args] as const
}

export function useGetAdminStockLocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['stock-locations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$get']>>
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
        ? getGetAdminStockLocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['stock-locations'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminStockLocationsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['stock-locations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$get']>>
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
        ? getGetAdminStockLocationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['stock-locations'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminStockLocationsIdKey() {
  return ['admin', '/admin/stock-locations/:id', 'POST'] as const
}

export function usePostAdminStockLocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['stock-locations'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminStockLocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['stock-locations'][':id']['$post']> },
      ) => parseResponse(client.admin['stock-locations'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminStockLocationsIdKey() {
  return ['admin', '/admin/stock-locations/:id', 'DELETE'] as const
}

export function useDeleteAdminStockLocationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['stock-locations'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['stock-locations'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminStockLocationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['stock-locations'][':id']['$delete']> },
      ) => parseResponse(client.admin['stock-locations'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminStockLocationsIdFulfillmentProvidersKey() {
  return ['admin', '/admin/stock-locations/:id/fulfillment-providers', 'POST'] as const
}

export function usePostAdminStockLocationsIdFulfillmentProviders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['stock-locations'][':id']['fulfillment-providers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['stock-locations'][':id']['fulfillment-providers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminStockLocationsIdFulfillmentProvidersKey()
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
            (typeof client.admin)['stock-locations'][':id']['fulfillment-providers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['stock-locations'][':id']['fulfillment-providers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminStockLocationsIdFulfillmentSetsKey() {
  return ['admin', '/admin/stock-locations/:id/fulfillment-sets', 'POST'] as const
}

export function usePostAdminStockLocationsIdFulfillmentSets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['stock-locations'][':id']['fulfillment-sets']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['stock-locations'][':id']['fulfillment-sets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminStockLocationsIdFulfillmentSetsKey()
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
            (typeof client.admin)['stock-locations'][':id']['fulfillment-sets']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['stock-locations'][':id']['fulfillment-sets'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminStockLocationsIdSalesChannelsKey() {
  return ['admin', '/admin/stock-locations/:id/sales-channels', 'POST'] as const
}

export function usePostAdminStockLocationsIdSalesChannels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['stock-locations'][':id']['sales-channels']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['stock-locations'][':id']['sales-channels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminStockLocationsIdSalesChannelsKey()
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
            (typeof client.admin)['stock-locations'][':id']['sales-channels']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['stock-locations'][':id']['sales-channels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminStoreCreditAccountsKey(
  args: InferRequestType<(typeof client.admin)['store-credit-accounts']['$get']>,
) {
  return ['admin', '/admin/store-credit-accounts', args] as const
}

export function useGetAdminStoreCreditAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['store-credit-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['store-credit-accounts']['$get']>>
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
        ? getGetAdminStoreCreditAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['store-credit-accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['store-credit-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminStoreCreditAccounts<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['store-credit-accounts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['store-credit-accounts']['$get']>>
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
        ? getGetAdminStoreCreditAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['store-credit-accounts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['store-credit-accounts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminStoreCreditAccountsKey() {
  return ['admin', '/admin/store-credit-accounts', 'POST'] as const
}

export function usePostAdminStoreCreditAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['store-credit-accounts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['store-credit-accounts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminStoreCreditAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['store-credit-accounts']['$post']> },
      ) => parseResponse(client.admin['store-credit-accounts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminStoreCreditAccountsIdKey(
  args: InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>,
) {
  return ['admin', '/admin/store-credit-accounts/:id', args] as const
}

export function useGetAdminStoreCreditAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>>
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
        ? getGetAdminStoreCreditAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['store-credit-accounts'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminStoreCreditAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>>
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
        ? getGetAdminStoreCreditAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['store-credit-accounts'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminStoreCreditAccountsIdCreditKey() {
  return ['admin', '/admin/store-credit-accounts/:id/credit', 'POST'] as const
}

export function usePostAdminStoreCreditAccountsIdCredit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['credit']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['credit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminStoreCreditAccountsIdCreditKey()
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
            (typeof client.admin)['store-credit-accounts'][':id']['credit']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['store-credit-accounts'][':id'].credit.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminStoreCreditAccountsIdDebitKey() {
  return ['admin', '/admin/store-credit-accounts/:id/debit', 'POST'] as const
}

export function usePostAdminStoreCreditAccountsIdDebit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['store-credit-accounts'][':id']['debit']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['store-credit-accounts'][':id']['debit']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminStoreCreditAccountsIdDebitKey()
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
            (typeof client.admin)['store-credit-accounts'][':id']['debit']['$post']
          >
        },
      ) =>
        parseResponse(client.admin['store-credit-accounts'][':id'].debit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminStoreCreditAccountsIdTransactionsKey(
  args: InferRequestType<
    (typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']
  >,
) {
  return ['admin', '/admin/store-credit-accounts/:id/transactions', args] as const
}

export function useGetAdminStoreCreditAccountsIdTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']
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
        ? getGetAdminStoreCreditAccountsIdTransactionsKey(args)
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
                (typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']
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
          client.admin['store-credit-accounts'][':id'].transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminStoreCreditAccountsIdTransactions<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']
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
        ? getGetAdminStoreCreditAccountsIdTransactionsKey(args)
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
                (typeof client.admin)['store-credit-accounts'][':id']['transactions']['$get']
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
          client.admin['store-credit-accounts'][':id'].transactions.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdminStoresKey(args: InferRequestType<typeof client.admin.stores.$get>) {
  return ['admin', '/admin/stores', args] as const
}

export function useGetAdminStores<TError = unknown>(
  args: InferRequestType<typeof client.admin.stores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stores.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminStoresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stores.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.stores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminStores<TError = unknown>(
  args: InferRequestType<typeof client.admin.stores.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stores.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminStoresKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.stores.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.stores.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminStoresIdKey(
  args: InferRequestType<(typeof client.admin.stores)[':id']['$get']>,
) {
  return ['admin', '/admin/stores/:id', args] as const
}

export function useGetAdminStoresId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.stores)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.stores)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminStoresIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.stores)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.stores[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminStoresId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.stores)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.stores)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminStoresIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.stores)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.stores[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminStoresIdKey() {
  return ['admin', '/admin/stores/:id', 'POST'] as const
}

export function usePostAdminStoresId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.stores)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.stores)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminStoresIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.stores)[':id']['$post']> },
      ) => parseResponse(client.admin.stores[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminTaxProvidersKey(
  args: InferRequestType<(typeof client.admin)['tax-providers']['$get']>,
) {
  return ['admin', '/admin/tax-providers', args] as const
}

export function useGetAdminTaxProviders<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['tax-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-providers']['$get']>>>
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
        ? getGetAdminTaxProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-providers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['tax-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTaxProviders<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['tax-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-providers']['$get']>>>
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
        ? getGetAdminTaxProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-providers']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['tax-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminTaxRatesKey(
  args: InferRequestType<(typeof client.admin)['tax-rates']['$get']>,
) {
  return ['admin', '/admin/tax-rates', args] as const
}

export function useGetAdminTaxRates<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['tax-rates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminTaxRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['tax-rates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTaxRates<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['tax-rates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminTaxRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['tax-rates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminTaxRatesKey() {
  return ['admin', '/admin/tax-rates', 'POST'] as const
}

export function usePostAdminTaxRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-rates']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['tax-rates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTaxRatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['tax-rates']['$post']> },
      ) => parseResponse(client.admin['tax-rates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminTaxRatesIdKey(
  args: InferRequestType<(typeof client.admin)['tax-rates'][':id']['$get']>,
) {
  return ['admin', '/admin/tax-rates/:id', args] as const
}

export function useGetAdminTaxRatesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['tax-rates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$get']>>
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
        ? getGetAdminTaxRatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['tax-rates'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTaxRatesId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['tax-rates'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$get']>>
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
        ? getGetAdminTaxRatesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['tax-rates'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminTaxRatesIdKey() {
  return ['admin', '/admin/tax-rates/:id', 'POST'] as const
}

export function usePostAdminTaxRatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['tax-rates'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTaxRatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['tax-rates'][':id']['$post']> },
      ) => parseResponse(client.admin['tax-rates'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminTaxRatesIdKey() {
  return ['admin', '/admin/tax-rates/:id', 'DELETE'] as const
}

export function useDeleteAdminTaxRatesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['tax-rates'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminTaxRatesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['tax-rates'][':id']['$delete']> },
      ) => parseResponse(client.admin['tax-rates'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminTaxRatesIdRulesKey() {
  return ['admin', '/admin/tax-rates/:id/rules', 'POST'] as const
}

export function usePostAdminTaxRatesIdRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['tax-rates'][':id']['rules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['tax-rates'][':id']['rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTaxRatesIdRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin)['tax-rates'][':id']['rules']['$post']> },
      ) => parseResponse(client.admin['tax-rates'][':id'].rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminTaxRatesIdRulesRuleIdKey() {
  return ['admin', '/admin/tax-rates/:id/rules/:rule_id', 'DELETE'] as const
}

export function useDeleteAdminTaxRatesIdRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin)['tax-rates'][':id']['rules'][':rule_id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['tax-rates'][':id']['rules'][':rule_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminTaxRatesIdRulesRuleIdKey()
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
            (typeof client.admin)['tax-rates'][':id']['rules'][':rule_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin['tax-rates'][':id'].rules[':rule_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminTaxRegionsKey(
  args: InferRequestType<(typeof client.admin)['tax-regions']['$get']>,
) {
  return ['admin', '/admin/tax-regions', args] as const
}

export function useGetAdminTaxRegions<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['tax-regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-regions']['$get']>>>
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
        ? getGetAdminTaxRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-regions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['tax-regions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTaxRegions<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['tax-regions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-regions']['$get']>>>
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
        ? getGetAdminTaxRegionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-regions']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['tax-regions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminTaxRegionsKey() {
  return ['admin', '/admin/tax-regions', 'POST'] as const
}

export function usePostAdminTaxRegions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin)['tax-regions']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['tax-regions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTaxRegionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['tax-regions']['$post']> },
      ) => parseResponse(client.admin['tax-regions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminTaxRegionsIdKey(
  args: InferRequestType<(typeof client.admin)['tax-regions'][':id']['$get']>,
) {
  return ['admin', '/admin/tax-regions/:id', args] as const
}

export function useGetAdminTaxRegionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['tax-regions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$get']>>
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
        ? getGetAdminTaxRegionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['tax-regions'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTaxRegionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['tax-regions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$get']>>
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
        ? getGetAdminTaxRegionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['tax-regions'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminTaxRegionsIdKey() {
  return ['admin', '/admin/tax-regions/:id', 'POST'] as const
}

export function usePostAdminTaxRegionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['tax-regions'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTaxRegionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['tax-regions'][':id']['$post']> },
      ) => parseResponse(client.admin['tax-regions'][':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminTaxRegionsIdKey() {
  return ['admin', '/admin/tax-regions/:id', 'DELETE'] as const
}

export function useDeleteAdminTaxRegionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin)['tax-regions'][':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['tax-regions'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminTaxRegionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin)['tax-regions'][':id']['$delete']> },
      ) => parseResponse(client.admin['tax-regions'][':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminTranslationsKey(
  args: InferRequestType<typeof client.admin.translations.$get>,
) {
  return ['admin', '/admin/translations', args] as const
}

export function useGetAdminTranslations<TError = unknown>(
  args: InferRequestType<typeof client.admin.translations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.$get>>>>
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
        ? getGetAdminTranslationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.translations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTranslations<TError = unknown>(
  args: InferRequestType<typeof client.admin.translations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.$get>>>>
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
        ? getGetAdminTranslationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.translations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminTranslationsBatchKey() {
  return ['admin', '/admin/translations/batch', 'POST'] as const
}

export function usePostAdminTranslationsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.batch.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.translations.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTranslationsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.translations.batch.$post> },
      ) => parseResponse(client.admin.translations.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminTranslationsEntitiesKey(
  args: InferRequestType<typeof client.admin.translations.entities.$get>,
) {
  return ['admin', '/admin/translations/entities', args] as const
}

export function useGetAdminTranslationsEntities<TError = unknown>(
  args: InferRequestType<typeof client.admin.translations.entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.entities.$get>>>
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
        ? getGetAdminTranslationsEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.entities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.translations.entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTranslationsEntities<TError = unknown>(
  args: InferRequestType<typeof client.admin.translations.entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.entities.$get>>>
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
        ? getGetAdminTranslationsEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.entities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.translations.entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminTranslationsSettingsKey(
  args: InferRequestType<typeof client.admin.translations.settings.$get>,
) {
  return ['admin', '/admin/translations/settings', args] as const
}

export function useGetAdminTranslationsSettings<TError = unknown>(
  args: InferRequestType<typeof client.admin.translations.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.settings.$get>>>
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
        ? getGetAdminTranslationsSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.translations.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTranslationsSettings<TError = unknown>(
  args: InferRequestType<typeof client.admin.translations.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.settings.$get>>>
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
        ? getGetAdminTranslationsSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.translations.settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.translations.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminTranslationsSettingsBatchKey() {
  return ['admin', '/admin/translations/settings/batch', 'POST'] as const
}

export function usePostAdminTranslationsSettingsBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.admin.translations.settings.batch.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.translations.settings.batch.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminTranslationsSettingsBatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.admin.translations.settings.batch.$post> },
      ) => parseResponse(client.admin.translations.settings.batch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminTranslationsStatisticsKey(
  args: InferRequestType<typeof client.admin.translations.statistics.$get>,
) {
  return ['admin', '/admin/translations/statistics', args] as const
}

export function useGetAdminTranslationsStatistics<TError = unknown>(
  args: InferRequestType<typeof client.admin.translations.statistics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.translations.statistics.$get>>
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
        ? getGetAdminTranslationsStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.translations.statistics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.translations.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminTranslationsStatistics<TError = unknown>(
  args: InferRequestType<typeof client.admin.translations.statistics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.translations.statistics.$get>>
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
        ? getGetAdminTranslationsStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.admin.translations.statistics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.translations.statistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminUploadsKey() {
  return ['admin', '/admin/uploads', 'POST'] as const
}

export function usePostAdminUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.uploads.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.uploads.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUploadsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.uploads.$post> }) =>
        parseResponse(client.admin.uploads.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAdminUploadsPresignedUrlsKey() {
  return ['admin', '/admin/uploads/presigned-urls', 'POST'] as const
}

export function usePostAdminUploadsPresignedUrls<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.uploads)['presigned-urls']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.uploads)['presigned-urls']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUploadsPresignedUrlsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.uploads)['presigned-urls']['$post']> },
      ) => parseResponse(client.admin.uploads['presigned-urls'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUploadsIdKey(
  args: InferRequestType<(typeof client.admin.uploads)[':id']['$get']>,
) {
  return ['admin', '/admin/uploads/:id', args] as const
}

export function useGetAdminUploadsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.uploads)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.uploads)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminUploadsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.uploads)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.uploads[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUploadsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.uploads)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.uploads)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminUploadsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.uploads)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.uploads[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAdminUploadsIdKey() {
  return ['admin', '/admin/uploads/:id', 'DELETE'] as const
}

export function useDeleteAdminUploadsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.uploads)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.uploads)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminUploadsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.uploads)[':id']['$delete']> },
      ) => parseResponse(client.admin.uploads[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersKey(args: InferRequestType<typeof client.admin.users.$get>) {
  return ['admin', '/admin/users', args] as const
}

export function useGetAdminUsers<TError = unknown>(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsers<TError = unknown>(
  args: InferRequestType<typeof client.admin.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminUsersMeKey(args: InferRequestType<typeof client.admin.users.me.$get>) {
  return ['admin', '/admin/users/me', args] as const
}

export function useGetAdminUsersMe<TError = unknown>(
  args: InferRequestType<typeof client.admin.users.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersMe<TError = unknown>(
  args: InferRequestType<typeof client.admin.users.me.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.me.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminUsersMeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.me.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users.me.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminUsersMeKey() {
  return ['admin', '/admin/users/me', 'POST'] as const
}

export function usePostAdminUsersMe<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.users.me.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.admin.users.me.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersMeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.admin.users.me.$post> }) =>
        parseResponse(client.admin.users.me.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersIdKey(
  args: InferRequestType<(typeof client.admin.users)[':id']['$get']>,
) {
  return ['admin', '/admin/users/:id', args] as const
}

export function useGetAdminUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetAdminUsersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminUsersIdKey() {
  return ['admin', '/admin/users/:id', 'POST'] as const
}

export function usePostAdminUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.users)[':id']['$post']> },
      ) => parseResponse(client.admin.users[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminUsersIdKey() {
  return ['admin', '/admin/users/:id', 'DELETE'] as const
}

export function useDeleteAdminUsersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.admin.users)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminUsersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.users)[':id']['$delete']> },
      ) => parseResponse(client.admin.users[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersIdAuthProvidersKey(
  args: InferRequestType<(typeof client.admin.users)[':id']['auth-providers']['$get']>,
) {
  return ['admin', '/admin/users/:id/auth-providers', args] as const
}

export function useGetAdminUsersIdAuthProviders<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':id']['auth-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':id']['auth-providers']['$get']>>
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
        ? getGetAdminUsersIdAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':id']['auth-providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.users[':id']['auth-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersIdAuthProviders<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':id']['auth-providers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':id']['auth-providers']['$get']>>
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
        ? getGetAdminUsersIdAuthProvidersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':id']['auth-providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.users[':id']['auth-providers'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminUsersIdResetPasswordKey() {
  return ['admin', '/admin/users/:id/reset-password', 'POST'] as const
}

export function usePostAdminUsersIdResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['reset-password']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':id']['reset-password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersIdResetPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.admin.users)[':id']['reset-password']['$post']> },
      ) => parseResponse(client.admin.users[':id']['reset-password'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminUsersIdRolesKey(
  args: InferRequestType<(typeof client.admin.users)[':id']['roles']['$get']>,
) {
  return ['admin', '/admin/users/:id/roles', args] as const
}

export function useGetAdminUsersIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$get']>>
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
        ? getGetAdminUsersIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminUsersIdRoles<TError = unknown>(
  args: InferRequestType<(typeof client.admin.users)[':id']['roles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$get']>>
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
        ? getGetAdminUsersIdRolesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.users[':id'].roles.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminUsersIdRolesKey() {
  return ['admin', '/admin/users/:id/roles', 'POST'] as const
}

export function usePostAdminUsersIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':id']['roles']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminUsersIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.users)[':id']['roles']['$post']> },
      ) => parseResponse(client.admin.users[':id'].roles.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminUsersIdRolesKey() {
  return ['admin', '/admin/users/:id/roles', 'DELETE'] as const
}

export function useDeleteAdminUsersIdRoles<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['roles']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':id']['roles']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminUsersIdRolesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.admin.users)[':id']['roles']['$delete']> },
      ) => parseResponse(client.admin.users[':id'].roles.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminUsersIdRolesRoleIdKey() {
  return ['admin', '/admin/users/:id/roles/:role_id', 'DELETE'] as const
}

export function useDeleteAdminUsersIdRolesRoleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.users)[':id']['roles'][':role_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.users)[':id']['roles'][':role_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminUsersIdRolesRoleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.users)[':id']['roles'][':role_id']['$delete']>
        },
      ) => parseResponse(client.admin.users[':id'].roles[':role_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminViewsEntitiesKey() {
  return ['admin', '/admin/views/entities'] as const
}

export function useGetAdminViewsEntities<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.views.entities.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminViewsEntitiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.views.entities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.views.entities.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminViewsEntities<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.views.entities.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAdminViewsEntitiesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.admin.views.entities.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.views.entities.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminViewsEntityColumnsKey(
  args: InferRequestType<(typeof client.admin.views)[':entity']['columns']['$get']>,
) {
  return ['admin', '/admin/views/:entity/columns', args] as const
}

export function useGetAdminViewsEntityColumns<TError = unknown>(
  args: InferRequestType<(typeof client.admin.views)[':entity']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.views)[':entity']['columns']['$get']>>
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
        ? getGetAdminViewsEntityColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.views)[':entity']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.views[':entity'].columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminViewsEntityColumns<TError = unknown>(
  args: InferRequestType<(typeof client.admin.views)[':entity']['columns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.views)[':entity']['columns']['$get']>>
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
        ? getGetAdminViewsEntityColumnsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.views)[':entity']['columns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin.views[':entity'].columns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminViewsEntityConfigurationsKey(
  args: InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$get']>,
) {
  return ['admin', '/admin/views/:entity/configurations', args] as const
}

export function useGetAdminViewsEntityConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.views)[':entity']['configurations']['$get']>>
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
        ? getGetAdminViewsEntityConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.views)[':entity']['configurations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.views[':entity'].configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminViewsEntityConfigurations<TError = unknown>(
  args: InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.views)[':entity']['configurations']['$get']>>
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
        ? getGetAdminViewsEntityConfigurationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin.views)[':entity']['configurations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin.views[':entity'].configurations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminViewsEntityConfigurationsKey() {
  return ['admin', '/admin/views/:entity/configurations', 'POST'] as const
}

export function usePostAdminViewsEntityConfigurations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.admin.views)[':entity']['configurations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminViewsEntityConfigurationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.admin.views)[':entity']['configurations']['$post']>
        },
      ) => parseResponse(client.admin.views[':entity'].configurations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAdminViewsEntityConfigurationsActiveKey(
  args: InferRequestType<
    (typeof client.admin.views)[':entity']['configurations']['active']['$get']
  >,
) {
  return ['admin', '/admin/views/:entity/configurations/active', args] as const
}

export function useGetAdminViewsEntityConfigurationsActive<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.views)[':entity']['configurations']['active']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.views)[':entity']['configurations']['active']['$get']>
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
        ? getGetAdminViewsEntityConfigurationsActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.views)[':entity']['configurations']['active']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.views[':entity'].configurations.active.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminViewsEntityConfigurationsActive<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin.views)[':entity']['configurations']['active']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.views)[':entity']['configurations']['active']['$get']>
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
        ? getGetAdminViewsEntityConfigurationsActiveKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.views)[':entity']['configurations']['active']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.views[':entity'].configurations.active.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminViewsEntityConfigurationsActiveKey() {
  return ['admin', '/admin/views/:entity/configurations/active', 'POST'] as const
}

export function usePostAdminViewsEntityConfigurationsActive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.views)[':entity']['configurations']['active']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.views)[':entity']['configurations']['active']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminViewsEntityConfigurationsActiveKey()
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
            (typeof client.admin.views)[':entity']['configurations']['active']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.views[':entity'].configurations.active.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminViewsEntityConfigurationsIdKey(
  args: InferRequestType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>,
) {
  return ['admin', '/admin/views/:entity/configurations/:id', args] as const
}

export function useGetAdminViewsEntityConfigurationsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>
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
        ? getGetAdminViewsEntityConfigurationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.views[':entity'].configurations[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminViewsEntityConfigurationsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>
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
        ? getGetAdminViewsEntityConfigurationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.admin.views)[':entity']['configurations'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.admin.views[':entity'].configurations[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAdminViewsEntityConfigurationsIdKey() {
  return ['admin', '/admin/views/:entity/configurations/:id', 'POST'] as const
}

export function usePostAdminViewsEntityConfigurationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.views)[':entity']['configurations'][':id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.views)[':entity']['configurations'][':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminViewsEntityConfigurationsIdKey()
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
            (typeof client.admin.views)[':entity']['configurations'][':id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin.views[':entity'].configurations[':id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAdminViewsEntityConfigurationsIdKey() {
  return ['admin', '/admin/views/:entity/configurations/:id', 'DELETE'] as const
}

export function useDeleteAdminViewsEntityConfigurationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.admin.views)[':entity']['configurations'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin.views)[':entity']['configurations'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAdminViewsEntityConfigurationsIdKey()
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
            (typeof client.admin.views)[':entity']['configurations'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.admin.views[':entity'].configurations[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminWorkflowsExecutionsKey(
  args: InferRequestType<(typeof client.admin)['workflows-executions']['$get']>,
) {
  return ['admin', '/admin/workflows-executions', args] as const
}

export function useGetAdminWorkflowsExecutions<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['workflows-executions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['workflows-executions']['$get']>>
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
        ? getGetAdminWorkflowsExecutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['workflows-executions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['workflows-executions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminWorkflowsExecutions<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['workflows-executions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['workflows-executions']['$get']>>
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
        ? getGetAdminWorkflowsExecutionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['workflows-executions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.admin['workflows-executions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAdminWorkflowsExecutionsIdKey(
  args: InferRequestType<(typeof client.admin)['workflows-executions'][':id']['$get']>,
) {
  return ['admin', '/admin/workflows-executions/:id', args] as const
}

export function useGetAdminWorkflowsExecutionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['workflows-executions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['workflows-executions'][':id']['$get']>>
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
        ? getGetAdminWorkflowsExecutionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['workflows-executions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['workflows-executions'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminWorkflowsExecutionsId<TError = unknown>(
  args: InferRequestType<(typeof client.admin)['workflows-executions'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['workflows-executions'][':id']['$get']>>
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
        ? getGetAdminWorkflowsExecutionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.admin)['workflows-executions'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.admin['workflows-executions'][':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAdminWorkflowsExecutionsWorkflowIdRunKey() {
  return ['admin', '/admin/workflows-executions/:workflow_id/run', 'POST'] as const
}

export function usePostAdminWorkflowsExecutionsWorkflowIdRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['workflows-executions'][':workflow_id']['run']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.admin)['workflows-executions'][':workflow_id']['run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminWorkflowsExecutionsWorkflowIdRunKey()
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
            (typeof client.admin)['workflows-executions'][':workflow_id']['run']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['workflows-executions'][':workflow_id'].run.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminWorkflowsExecutionsWorkflowIdStepsFailureKey() {
  return ['admin', '/admin/workflows-executions/:workflow_id/steps/failure', 'POST'] as const
}

export function usePostAdminWorkflowsExecutionsWorkflowIdStepsFailure<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['failure']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['failure']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminWorkflowsExecutionsWorkflowIdStepsFailureKey()
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
            (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['failure']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['workflows-executions'][':workflow_id'].steps.failure.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAdminWorkflowsExecutionsWorkflowIdStepsSuccessKey() {
  return ['admin', '/admin/workflows-executions/:workflow_id/steps/success', 'POST'] as const
}

export function usePostAdminWorkflowsExecutionsWorkflowIdStepsSuccess<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['success']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['success']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAdminWorkflowsExecutionsWorkflowIdStepsSuccessKey()
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
            (typeof client.admin)['workflows-executions'][':workflow_id']['steps']['success']['$post']
          >
        },
      ) =>
        parseResponse(
          client.admin['workflows-executions'][':workflow_id'].steps.success.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAdminWorkflowsExecutionsWorkflowIdSubscribeKey(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
  >,
) {
  return ['admin', '/admin/workflows-executions/:workflow_id/subscribe', args] as const
}

export function useGetAdminWorkflowsExecutionsWorkflowIdSubscribe<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
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
        ? getGetAdminWorkflowsExecutionsWorkflowIdSubscribeKey(args)
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
                (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
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
          client.admin['workflows-executions'][':workflow_id'].subscribe.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminWorkflowsExecutionsWorkflowIdSubscribe<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
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
        ? getGetAdminWorkflowsExecutionsWorkflowIdSubscribeKey(args)
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
                (typeof client.admin)['workflows-executions'][':workflow_id']['subscribe']['$get']
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
          client.admin['workflows-executions'][':workflow_id'].subscribe.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdminWorkflowsExecutionsWorkflowIdTransactionIdKey(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
  >,
) {
  return ['admin', '/admin/workflows-executions/:workflow_id/:transaction_id', args] as const
}

export function useGetAdminWorkflowsExecutionsWorkflowIdTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
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
        ? getGetAdminWorkflowsExecutionsWorkflowIdTransactionIdKey(args)
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
                (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
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
          client.admin['workflows-executions'][':workflow_id'][':transaction_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminWorkflowsExecutionsWorkflowIdTransactionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
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
        ? getGetAdminWorkflowsExecutionsWorkflowIdTransactionIdKey(args)
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
                (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['$get']
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
          client.admin['workflows-executions'][':workflow_id'][':transaction_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeKey(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
  >,
) {
  return [
    'admin',
    '/admin/workflows-executions/:workflow_id/:transaction_id/subscribe',
    args,
  ] as const
}

export function useGetAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribe<TError = unknown>(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
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
        ? getGetAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeKey(args)
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
                (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
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
          client.admin['workflows-executions'][':workflow_id'][':transaction_id'].subscribe.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribe<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
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
        ? getGetAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeKey(args)
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
                (typeof client.admin)['workflows-executions'][':workflow_id'][':transaction_id']['subscribe']['$get']
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
          client.admin['workflows-executions'][':workflow_id'][':transaction_id'].subscribe.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAuthMfaChallengesIdVerifyKey() {
  return ['auth', '/auth/mfa/challenges/:id/verify', 'POST'] as const
}

export function usePostAuthMfaChallengesIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthMfaChallengesIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.auth.mfa.challenges)[':id']['verify']['$post']> },
      ) => parseResponse(client.auth.mfa.challenges[':id'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthMfaFactorsKey() {
  return ['auth', '/auth/mfa/factors'] as const
}

export function useGetAuthMfaFactors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthMfaFactorsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.mfa.factors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthMfaFactors<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthMfaFactorsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.mfa.factors.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthMfaFactorsKey() {
  return ['auth', '/auth/mfa/factors', 'POST'] as const
}

export function usePostAuthMfaFactors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.mfa.factors.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.auth.mfa.factors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthMfaFactorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.auth.mfa.factors.$post> }) =>
        parseResponse(client.auth.mfa.factors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthMfaFactorsIdKey() {
  return ['auth', '/auth/mfa/factors/:id', 'DELETE'] as const
}

export function useDeleteAuthMfaFactorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa.factors)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.mfa.factors)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthMfaFactorsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth.mfa.factors)[':id']['$delete']> },
      ) => parseResponse(client.auth.mfa.factors[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthMfaFactorsIdVerifyKey() {
  return ['auth', '/auth/mfa/factors/:id/verify', 'POST'] as const
}

export function usePostAuthMfaFactorsIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthMfaFactorsIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.auth.mfa.factors)[':id']['verify']['$post']> },
      ) => parseResponse(client.auth.mfa.factors[':id'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthMfaRecoveryCodesKey() {
  return ['auth', '/auth/mfa/recovery-codes', 'POST'] as const
}

export function usePostAuthMfaRecoveryCodes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.mfa)['recovery-codes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.mfa)['recovery-codes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthMfaRecoveryCodesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth.mfa)['recovery-codes']['$post']> },
      ) => parseResponse(client.auth.mfa['recovery-codes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthSessionKey() {
  return ['auth', '/auth/session', 'POST'] as const
}

export function usePostAuthSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.session.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAuthSessionKey() {
  return ['auth', '/auth/session', 'DELETE'] as const
}

export function useDeleteAuthSession<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.session.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAuthSessionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.session.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthTokenRefreshKey() {
  return ['auth', '/auth/token/refresh', 'POST'] as const
}

export function usePostAuthTokenRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.token.refresh.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthTokenRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.auth.token.refresh.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAuthUserProvidersKey() {
  return ['auth', '/auth/user/providers'] as const
}

export function useGetAuthUserProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.user.providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthUserProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.user.providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.user.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAuthUserProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.auth.user.providers.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAuthUserProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.auth.user.providers.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.auth.user.providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAuthUserAuthProviderKey() {
  return ['auth', '/auth/user/:auth_provider', 'POST'] as const
}

export function usePostAuthUserAuthProvider<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.user)[':auth_provider']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.user)[':auth_provider']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthUserAuthProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth.user)[':auth_provider']['$post']> },
      ) => parseResponse(client.auth.user[':auth_provider'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthUserAuthProviderCallbackKey() {
  return ['auth', '/auth/user/:auth_provider/callback', 'POST'] as const
}

export function usePostAuthUserAuthProviderCallback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.user)[':auth_provider']['callback']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.user)[':auth_provider']['callback']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthUserAuthProviderCallbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.auth.user)[':auth_provider']['callback']['$post']>
        },
      ) => parseResponse(client.auth.user[':auth_provider'].callback.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthUserAuthProviderRegisterKey() {
  return ['auth', '/auth/user/:auth_provider/register', 'POST'] as const
}

export function usePostAuthUserAuthProviderRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.user)[':auth_provider']['register']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.user)[':auth_provider']['register']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthUserAuthProviderRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.auth.user)[':auth_provider']['register']['$post']>
        },
      ) => parseResponse(client.auth.user[':auth_provider'].register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthUserAuthProviderResetPasswordKey() {
  return ['auth', '/auth/user/:auth_provider/reset-password', 'POST'] as const
}

export function usePostAuthUserAuthProviderResetPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.auth.user)[':auth_provider']['reset-password']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.user)[':auth_provider']['reset-password']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthUserAuthProviderResetPasswordKey()
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
            (typeof client.auth.user)[':auth_provider']['reset-password']['$post']
          >
        },
      ) =>
        parseResponse(
          client.auth.user[':auth_provider']['reset-password'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAuthUserAuthProviderUpdateKey() {
  return ['auth', '/auth/user/:auth_provider/update', 'POST'] as const
}

export function usePostAuthUserAuthProviderUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth.user)[':auth_provider']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth.user)[':auth_provider']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthUserAuthProviderUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.auth.user)[':auth_provider']['update']['$post']>
        },
      ) => parseResponse(client.auth.user[':auth_provider'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAuthAuthProviderUserKey() {
  return ['auth', '/auth/:auth_provider/user', 'POST'] as const
}

export function usePostAuthAuthProviderUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.auth)[':auth_provider']['user']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.auth)[':auth_provider']['user']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAuthAuthProviderUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.auth)[':auth_provider']['user']['$post']> },
      ) => parseResponse(client.auth[':auth_provider'].user.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
